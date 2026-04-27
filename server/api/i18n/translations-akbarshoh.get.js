import fs from 'fs';
import path from 'path';

// /server/api/i18n/translations.get.js
export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event);
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const search = query.search ? query.search.toLowerCase() : null;
        const skip = (page - 1) * limit;

        const sources = [
            { dir: 'locales/akbarshoh', isMine: true },
            { dir: 'locales/anvarjon', isMine: false }
        ];

        let mergedTranslations = {};

        for (const source of sources) {
            const localesDir = path.resolve(source.dir);

            if (!fs.existsSync(localesDir)) continue;

            const files = fs.readdirSync(localesDir).filter(file => file.endsWith('.json'));

            for (const file of files) {
                const languageCode = path.basename(file, '.json');
                const filePath = path.join(localesDir, file);
                const fileContent = fs.readFileSync(filePath, 'utf8');

                try {
                    const translations = JSON.parse(fileContent);
                    if (typeof translations !== 'object') continue;

                    const flatTranslations = flattenObject(translations);

                    for (const key in flatTranslations) {
                        if (!mergedTranslations[key]) {
                            mergedTranslations[key] = { key };
                        }
                        mergedTranslations[key][languageCode] = flatTranslations[key];
                        mergedTranslations[key].is_mine = source.isMine;
                    }
                } catch (jsonError) {
                    console.error(`Error parsing JSON in ${file}:`, jsonError.message);
                }
            }
        }

        let translationsArray = Object.values(mergedTranslations);

        if (search) {
            translationsArray = translationsArray.filter(translation =>
                translation.key.toLowerCase().includes(search) ||
                Object.values(translation).some(value =>
                    typeof value === 'string' && value.toLowerCase().includes(search)
                )
            );
        }

        const totalItems = translationsArray.length;
        const paginatedTranslations = translationsArray.slice(skip, skip + limit);

        return {
            success: true,
            page,
            limit,
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            data: paginatedTranslations
        };

    } catch (error) {
        console.error("Error fetching translations:", error);
        throw createError({
            statusCode: 500,
            message: 'Failed to fetch translations'
        });
    }
});

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
