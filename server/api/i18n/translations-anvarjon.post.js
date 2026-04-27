import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    if (!body.key || !body.uz_la) {
        throw createError({
            statusCode: 400,
            message: 'Key and Uzbek text are required'
        });
    }

    try {
        const localesDir = path.resolve('locales/anvarjon'); // Asosiy ish papkasi
        const checkDir = path.resolve('locales/akbarshoh'); // Tekshirish uchun papka
        console.log(`Adding new translation key: ${body.key}`);

        // `locales/akbarshoh` papkasini tekshirish
        if (!fs.existsSync(checkDir)) {
            throw createError({
                statusCode: 500,
                message: `Check directory '${checkDir}' does not exist`
            });
        }

        // `locales/akbarshoh` da JSON fayllarni o'qish va kalitni tekshirish
        const checkFiles = fs.readdirSync(checkDir).filter(file => file.endsWith('.json'));
        if (checkFiles.length === 0) {
            throw createError({
                statusCode: 500,
                message: `No JSON files found in '${checkDir}' directory`
            });
        }

        let keyExists = false;

        // `locales/akbarshoh` da kalit mavjudligini tekshirish
        for (const file of checkFiles) {
            const filePath = path.join(checkDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            let translations;
            try {
                translations = JSON.parse(fileContent) || {};
            } catch (parseError) {
                throw createError({
                    statusCode: 500,
                    message: `Invalid JSON in file: ${filePath}`
                });
            }

            // Flatten object va kalitni tekshirish
            const flatTranslations = flattenObject(translations);
            if (flatTranslations.hasOwnProperty(body.key)) {
                keyExists = true;
                break;
            }
        }

        if (keyExists) {
            throw createError({
                statusCode: 409,
                message: `Translation key "${body.key}" already exists in '${checkDir}'`
            });
        }

        // `locales/anvarjon` papkasini tekshirish
        if (!fs.existsSync(localesDir)) {
            throw createError({
                statusCode: 500,
                message: `Locales directory '${localesDir}' does not exist`
            });
        }

        // JSON fayllarni o'qish (locales/anvarjon dan)
        const files = fs.readdirSync(localesDir).filter(file => file.endsWith('.json'));

        if (files.length === 0) {
            throw createError({
                statusCode: 500,
                message: `No JSON files found in '${localesDir}' directory`
            });
        }

        // `locales/anvarjon` da fayllarni yangilash
        for (const file of files) {
            const languageCode = path.basename(file, '.json');
            const filePath = path.join(localesDir, file);

            // Faylni o'qish
            const fileContent = fs.readFileSync(filePath, 'utf8');
            let translations;
            try {
                translations = JSON.parse(fileContent) || {};
            } catch (parseError) {
                throw createError({
                    statusCode: 500,
                    message: `Invalid JSON in file: ${filePath}`
                });
            }

            // Flatten object
            const flatTranslations = flattenObject(translations);

            // Yangi tarjimani qo'shish
            flatTranslations[body.key] = body[languageCode] || '';

            // Nested holatga qaytarish
            const updatedNested = unflattenObject(flatTranslations);

            // Faylga yozish
            fs.writeFileSync(filePath, JSON.stringify(updatedNested, null, 2), 'utf8');
        }

        console.log(`Successfully added key: ${body.key}`);
        return { success: true, key: body.key };

    } catch (error) {
        console.error("Error adding translation:", error);
        if (error.statusCode) throw error;

        throw createError({
            statusCode: 500,
            message: 'Failed to add translation'
        });
    }
});

// Flatten va unflatten funksiyalari
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
