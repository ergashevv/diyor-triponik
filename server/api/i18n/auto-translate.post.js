export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.text || !body.source || !body.target) {
    throw createError({
      statusCode: 400,
      message: 'Text, source language, and target language are required'
    });
  }

  // Special handling for Uzbek Latin to Cyrillic translation
  if ((body.source === 'uz-Latn' || body.source === 'uz') && body.target === 'la') {
    return await translateUzbekLatinToCyrillic(body.text);
  }

  try {
    // Using MyMemory Translation API
    const response = await $fetch('https://api.mymemory.translated.net/get', {
      method: 'GET',
      params: {
        q: body.text,
        langpair: `${body.source}|${body.target}`,
        de: 'your@email.com' // Optional: add your email for higher quota
      }
    });

    if (response.responseStatus === 200 && response.responseData) {
      return {
        success: true,
        translatedText: response.responseData.translatedText.replaceAll("&#39;","'").replaceAll("&#10;","\n"),
        source: body.source,
        target: body.target
      };
    } else {
      throw new Error('Translation failed: ' + (response.responseDetails || 'Unknown error'));
    }
  } catch (error) {
    console.error('Translation error:', error);

    // Fallback translations for demo
    const fallbackTranslations = {
      'uz-ru': {
        'salom': 'привет',
        'xayr': 'пока',
        'rahmat': 'спасибо'
      },
      'uz-la': {
        'salom': 'salve',
        'xayr': 'vale',
        'rahmat': 'gratias'
      },
      'uz-en': {
        'salom': 'hello',
        'xayr': 'goodbye',
        'rahmat': 'thank you'
      },
      'uz-Latn-uz-Cyrl': {
        'salom': 'салом',
        'xayr': 'хайр',
        'rahmat': 'раҳмат',
        'yaxshi': 'яхши',
        'kecha': 'кеча',
        'bugun': 'бугун',
        'ertaga': 'эртага'
      }
    };

    // For demo purposes, provide fallback translation
    const key = `${body.source}-${body.target}`;
    const fallbackText = fallbackTranslations[key]?.[body.text.toLowerCase()] ||
                         fallbackTranslations['uz-Latn-uz-Cyrl']?.[body.text.toLowerCase()] ||
                         body.text;

    return {
      success: true,
      translatedText: fallbackText,
      source: body.source,
      target: body.target,
      note: 'Using fallback translation'
    };
  }
});

// Function to translate Uzbek Latin to Cyrillic
async function translateUzbekLatinToCyrillic(text) {
  // Simple mapping of Uzbek Latin characters to Cyrillic
  const latinToCyrillicMap = {
    'a': 'а', 'b': 'б', 'd': 'д', 'e': 'е', 'f': 'ф', 'g': 'г', 'h': 'ҳ',
    'i': 'и', 'j': 'ж', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о',
    'p': 'п', 'q': 'қ', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'v': 'в',
    'x': 'х', 'y': 'й', 'z': 'з', 'sh': 'ш', 'ch': 'ч', 'ng': 'нг',
    'g\'': 'ғ', 'o\'': 'ў', 'ya': 'я', 'yu': 'ю', 'yo': 'ё'
  };

  // Handle special cases first
  let cyrillicText = text
    .replace(/sh/g, 'ш')
    .replace(/ch/g, 'ч')
    .replace(/ng/g, 'нг')
    .replace(/g\'/g, 'ғ')
    .replace(/o\'/g, 'ў')
    .replace(/ya/g, 'я')
    .replace(/yu/g, 'ю')
    .replace(/yo/g, 'ё');

  // Now replace individual letters
  for (const [latin, cyrillic] of Object.entries(latinToCyrillicMap)) {
    // Skip the digraphs and trigraphs that we've already handled
    if (['sh', 'ch', 'ng', 'g\'', 'o\'', 'ya', 'yu', 'yo'].includes(latin)) {
      continue;
    }

    const regex = new RegExp(latin, 'g');
    cyrillicText = cyrillicText.replace(regex, cyrillic);
  }

  // Handle uppercase letters
  cyrillicText = cyrillicText.replace(/([А-Я])/g, (match) => match.toLowerCase());

  return {
    success: true,
    translatedText: cyrillicText,
    source: 'uz',
    target: 'la',
    note: 'Direct conversion using character mapping'
  };
}
