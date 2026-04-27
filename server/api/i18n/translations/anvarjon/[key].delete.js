import fs from 'fs';
import path from 'path';

// /server/api/i18n/translations/[key].delete.js
export default defineEventHandler(async (event) => {
    const { key } = event.context.params;

    try {
        const localesDir = path.resolve('locales/anvarjon'); // Ensure correct path
        console.log(`Deleting translation key: ${key}`);

        // Read all JSON files in the locales directory
        const files = fs.readdirSync(localesDir).filter(file => file.endsWith('.json'));
        if (files.length === 0) {
            throw createError({
                statusCode: 500,
                message: "No translation files found in 'locales' directory."
            });
        }

        let keyExists = false;

        // Loop through each language file and remove the key
        for (const file of files) {
            const filePath = path.join(localesDir, file);

            // Read existing translations
            const fileContent = fs.readFileSync(filePath, 'utf8');
            let translations = JSON.parse(fileContent) || {};

            // Flatten object to check if key exists
            const flatTranslations = flattenObject(translations);

            if (flatTranslations.hasOwnProperty(key)) {
                keyExists = true;
                delete flatTranslations[key]; // Remove the key
            }

            // Convert back to nested structure
            const updatedNested = unflattenObject(flatTranslations);

            // Write updated translations back to file
            fs.writeFileSync(filePath, JSON.stringify(updatedNested, null, 2), 'utf8');
        }

        if (!keyExists) {
            throw createError({
                statusCode: 404,
                message: `Translation key "${key}" not found in any file`
            });
        }

        console.log(`Successfully deleted key: ${key}`);
        return { success: true, key };

    } catch (error) {
        console.error("Error deleting translation:", error);
        if (error.statusCode) throw error;

        throw createError({
            statusCode: 500,
            message: 'Failed to delete translation'
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
