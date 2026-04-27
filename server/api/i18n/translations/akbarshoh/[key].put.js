import fs from 'fs';
import path from 'path';
// /server/api/i18n/translations/[key].put.js
export default defineEventHandler(async (event) => {
  const { key } = event.context.params;
  const body = await readBody(event);
  if (!body.uz_la) {
    throw createError({
      statusCode: 400,
      message: 'Uzbek text is required'
    });
  }
  try {
    const localesDir = path.resolve('locales/akbarshoh'); // Ensure correct path
    console.log(`Updating translation key: ${key}`);
    // Read all JSON files in the locales directory
    const files = fs.readdirSync(localesDir).filter(file => file.endsWith('.json'));
    if (files.length === 0) {
      throw createError({
        statusCode: 500,
        message: "No translation files found in 'locales' directory."
      });
    }
    let updatedTranslations = {};
    let keyExists = false;
    // Loop through each language file and update translations
    for (const file of files) {
      const languageCode = path.basename(file, '.json'); // Extract language code
      const filePath = path.join(localesDir, file);
      // Read existing translations
      const fileContent = fs.readFileSync(filePath, 'utf8');
      let translations = JSON.parse(fileContent) || {};
      // Flatten object to check if key exists
      const flatTranslations = flattenObject(translations);

      // If key exists, update it. If not, add it with the provided value
      if (flatTranslations.hasOwnProperty(key)) {
        keyExists = true;
      } else {
        // This is the new part - add the key if it doesn't exist
        console.log(`Adding new translation key: ${key}`);
      }

      // Set the value regardless of whether the key existed before
      flatTranslations[key] = body[languageCode] || '';

      // Convert back to nested structure
      const updatedNested = unflattenObject(flatTranslations);
      updatedTranslations[languageCode] = updatedNested;
      // Write updated translations back to file
      fs.writeFileSync(filePath, JSON.stringify(updatedNested, null, 2), 'utf8');
    }

    // Return different message based on whether key was updated or added
    console.log(`Successfully ${keyExists ? 'updated' : 'added'} key: ${key}`);
    return {
      success: true,
      key,
      operation: keyExists ? 'updated' : 'added'
    };
  } catch (error) {
    console.error("Error updating translation:", error);
    if (error.statusCode) throw error;
    throw createError({
      statusCode: 500,
      message: 'Failed to update translation'
    });
  }
});

// Helper function: Flatten nested objects
const flattenObject = (obj, parentKey = '') => {
  let result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};

// Helper function: Convert flat object back to nested
const unflattenObject = (flatObj) => {
  let result = {};
  for (const flatKey in flatObj) {
    const keys = flatKey.split('.');
    keys.reduce((acc, curr, i) => {
      if (i === keys.length - 1) {
        acc[curr] = flatObj[flatKey];
      } else {
        acc[curr] = acc[curr] || {};
      }
      return acc[curr];
    }, result);
  }
  return result;
};
