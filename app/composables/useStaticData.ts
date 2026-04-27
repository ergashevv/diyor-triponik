/**
 * Static Data Composable
 * Umumiy static ma'lumotlar - hamma joyda ishlatish mumkin
 */

export const useStaticData = () => {
  // Jins variantlari
  const genderOptions = [
    { value: '', label: 'Tanlang' },
    { value: 'male', label: 'Erkak' },
    { value: 'female', label: 'Ayol' }
  ]

  // Hujjat turlari
  const documentTypes = [
    { value: '', label: 'Tanlang' },
    { value: 'passport', label: "O'zbekiston pasporti" },
    { value: 'id_card', label: 'ID karta' },
    { value: 'birth_certificate', label: "Tug'ilganlik haqidagi guvohnoma" },
    { value: 'foreign_passport', label: 'Xorijiy passport' },
    { value: 'diplomatic_passport', label: 'Diplomatik passport' },
    { value: 'service_passport', label: 'Xizmat pasporti' }
  ]

  // Telefon kodlari
  const phoneCountryCodes = [
    { code: '+998', country: 'O\'zbekiston', flag: '🇺🇿' },
    { code: '+7', country: 'Rossiya', flag: '🇷🇺' },
    { code: '+996', country: 'Qirg\'iziston', flag: '🇰🇬' },
    { code: '+992', country: 'Tojikiston', flag: '🇹🇯' },
    { code: '+993', country: 'Turkmaniston', flag: '🇹🇲' },
    { code: '+994', country: 'Ozarbayjon', flag: '🇦🇿' },
    { code: '+995', country: 'Gruziya', flag: '🇬🇪' },
    { code: '+375', country: 'Belarus', flag: '🇧🇾' },
    { code: '+380', country: 'Ukraina', flag: '🇺🇦' },
    { code: '+1', country: 'AQSh', flag: '🇺🇸' },
    { code: '+44', country: 'Buyuk Britaniya', flag: '🇬🇧' },
    { code: '+49', country: 'Germaniya', flag: '🇩🇪' },
    { code: '+33', country: 'Fransiya', flag: '🇫🇷' },
    { code: '+39', country: 'Italiya', flag: '🇮🇹' },
    { code: '+34', country: 'Ispaniya', flag: '🇪🇸' },
    { code: '+90', country: 'Turkiya', flag: '🇹🇷' },
    { code: '+971', country: 'BAA', flag: '🇦🇪' },
    { code: '+966', country: 'Saudiya Arabistoni', flag: '🇸🇦' },
    { code: '+82', country: 'Janubiy Koreya', flag: '🇰🇷' },
    { code: '+86', country: 'Xitoy', flag: '🇨🇳' }
  ]

  // Mamlakatlar ro'yxati
  const countries = [
    { code: 'UZ', name: 'O\'zbekiston', nameEn: 'Uzbekistan' },
    { code: 'RU', name: 'Rossiya', nameEn: 'Russia' },
    { code: 'KZ', name: 'Qozog\'iston', nameEn: 'Kazakhstan' },
    { code: 'KG', name: 'Qirg\'iziston', nameEn: 'Kyrgyzstan' },
    { code: 'TJ', name: 'Tojikiston', nameEn: 'Tajikistan' },
    { code: 'TM', name: 'Turkmaniston', nameEn: 'Turkmenistan' },
    { code: 'AZ', name: 'Ozarbayjon', nameEn: 'Azerbaijan' },
    { code: 'GE', name: 'Gruziya', nameEn: 'Georgia' },
    { code: 'TR', name: 'Turkiya', nameEn: 'Turkey' },
    { code: 'US', name: 'AQSh', nameEn: 'United States' },
    { code: 'GB', name: 'Buyuk Britaniya', nameEn: 'United Kingdom' },
    { code: 'DE', name: 'Germaniya', nameEn: 'Germany' },
    { code: 'FR', name: 'Fransiya', nameEn: 'France' },
    { code: 'IT', name: 'Italiya', nameEn: 'Italy' },
    { code: 'ES', name: 'Ispaniya', nameEn: 'Spain' },
    { code: 'AE', name: 'BAA', nameEn: 'United Arab Emirates' },
    { code: 'SA', name: 'Saudiya Arabistoni', nameEn: 'Saudi Arabia' },
    { code: 'KR', name: 'Janubiy Koreya', nameEn: 'South Korea' },
    { code: 'CN', name: 'Xitoy', nameEn: 'China' },
    { code: 'JP', name: 'Yaponiya', nameEn: 'Japan' },
    { code: 'IN', name: 'Hindiston', nameEn: 'India' },
    { code: 'TH', name: 'Tailand', nameEn: 'Thailand' },
    { code: 'MY', name: 'Malayziya', nameEn: 'Malaysia' },
    { code: 'SG', name: 'Singapur', nameEn: 'Singapore' }
  ]

  // O'zbekiston shaharlari (Poyezdlar uchun)
  const uzbekistanCities = [
    { code: 'TAS', name: 'Toshkent', nameEn: 'Tashkent', region: 'Toshkent' },
    { code: 'SAM', name: 'Samarqand', nameEn: 'Samarkand', region: 'Samarqand' },
    { code: 'BUK', name: 'Buxoro', nameEn: 'Bukhara', region: 'Buxoro' },
    { code: 'AND', name: 'Andijon', nameEn: 'Andijan', region: 'Andijon' },
    { code: 'NAM', name: 'Namangan', nameEn: 'Namangan', region: 'Namangan' },
    { code: 'FER', name: 'Farg\'ona', nameEn: 'Fergana', region: 'Farg\'ona' },
    { code: 'KAR', name: 'Qarshi', nameEn: 'Karshi', region: 'Qashqadaryo' },
    { code: 'NAV', name: 'Navoiy', nameEn: 'Navoi', region: 'Navoiy' },
    { code: 'NUK', name: 'Nukus', nameEn: 'Nukus', region: 'Qoraqalpog\'iston' },
    { code: 'URG', name: 'Urganch', nameEn: 'Urgench', region: 'Xorazm' },
    { code: 'JIZ', name: 'Jizzax', nameEn: 'Jizzakh', region: 'Jizzax' },
    { code: 'TER', name: 'Termiz', nameEn: 'Termez', region: 'Surxondaryo' },
    { code: 'KHI', name: 'Xiva', nameEn: 'Khiva', region: 'Xorazm' },
    { code: 'KOK', name: 'Qo\'qon', nameEn: 'Kokand', region: 'Farg\'ona' },
    { code: 'GUL', name: 'Guliston', nameEn: 'Gulistan', region: 'Sirdaryo' },
    { code: 'CHI', name: 'Chirchiq', nameEn: 'Chirchik', region: 'Toshkent' }
  ]

  // Oylar (O'zbek tilida)
  const uzMonths = [
    { value: 1, label: 'Yanvar', labelShort: 'Yan' },
    { value: 2, label: 'Fevral', labelShort: 'Fev' },
    { value: 3, label: 'Mart', labelShort: 'Mar' },
    { value: 4, label: 'Aprel', labelShort: 'Apr' },
    { value: 5, label: 'May', labelShort: 'May' },
    { value: 6, label: 'Iyun', labelShort: 'Iyn' },
    { value: 7, label: 'Iyul', labelShort: 'Iyl' },
    { value: 8, label: 'Avgust', labelShort: 'Avg' },
    { value: 9, label: 'Sentyabr', labelShort: 'Sen' },
    { value: 10, label: 'Oktyabr', labelShort: 'Okt' },
    { value: 11, label: 'Noyabr', labelShort: 'Noy' },
    { value: 12, label: 'Dekabr', labelShort: 'Dek' }
  ]

  // Hafta kunlari (O'zbek tilida)
  const weekDays = [
    { value: 0, label: 'Yakshanba', labelShort: 'Yak' },
    { value: 1, label: 'Dushanba', labelShort: 'Dush' },
    { value: 2, label: 'Seshanba', labelShort: 'Sesh' },
    { value: 3, label: 'Chorshanba', labelShort: 'Chor' },
    { value: 4, label: 'Payshanba', labelShort: 'Pay' },
    { value: 5, label: 'Juma', labelShort: 'Jum' },
    { value: 6, label: 'Shanba', labelShort: 'Shan' }
  ]

  // Valyutalar
  const currencies = [
    { code: 'UZS', symbol: "so'm", name: "O'zbekiston so'mi" },
    { code: 'USD', symbol: '$', name: 'AQSh dollari' },
    { code: 'EUR', symbol: '€', name: 'Yevro' },
    { code: 'RUB', symbol: '₽', name: 'Rossiya rubli' },
    { code: 'GBP', symbol: '£', name: 'Funt sterling' },
    { code: 'CNY', symbol: '¥', name: 'Xitoy yuani' },
    { code: 'KRW', symbol: '₩', name: 'Janubiy Koreya voni' },
    { code: 'JPY', symbol: '¥', name: 'Yaponiya yenasi' },
    { code: 'TRY', symbol: '₺', name: 'Turkiya lirasi' },
    { code: 'AED', symbol: 'د.إ', name: 'BAA dirhami' }
  ]

  // Yo'lovchi turlari
  const passengerTypes = [
    { value: 'adult', label: 'Kattalar', description: '12 yoshdan katta', minAge: 12, maxAge: null },
    { value: 'child', label: 'Bolalar', description: '2-12 yosh', minAge: 2, maxAge: 12 },
    { value: 'infant', label: 'Chaqaloqlar', description: '2 yoshgacha', minAge: 0, maxAge: 2 }
  ]

  // To'lov usullari
  const paymentMethods = [
    { value: 'uzcard', label: "O'zbekiston kartalari", icon: 'uzcard', description: 'UzCard, Humo' },
    { value: 'international', label: 'Xalqaro kartalar', icon: 'cards', description: 'Visa, Mastercard, Mir' },
    { value: 'payme', label: 'Payme', icon: 'payme', description: "Payme orqali to'lov" },
    { value: 'click', label: 'Click', icon: 'click', description: "Click orqali to'lov" },
    { value: 'apelsin', label: 'Apelsin', icon: 'apelsin', description: "Apelsin orqali to'lov" }
  ]

  // Vagon sinflari (Poyezdlar uchun)
  const trainCarClasses = [
    { value: 'luxury', label: 'Lyuks', description: '2 kishilik kabin', priceMultiplier: 3 },
    { value: 'coupe', label: 'Kupe', description: '4 kishilik kabin', priceMultiplier: 2 },
    { value: 'platzkart', label: 'Plaskart', description: 'Ochiq vagon', priceMultiplier: 1 },
    { value: 'seated', label: "O'tirg'ich", description: "O'tirg'ich joy", priceMultiplier: 0.8 }
  ]

  // Mehmonxona yulduzlari
  const hotelStars = [
    { value: 1, label: '1 yulduz', icon: '⭐' },
    { value: 2, label: '2 yulduz', icon: '⭐⭐' },
    { value: 3, label: '3 yulduz', icon: '⭐⭐⭐' },
    { value: 4, label: '4 yulduz', icon: '⭐⭐⭐⭐' },
    { value: 5, label: '5 yulduz', icon: '⭐⭐⭐⭐⭐' }
  ]

  // Mehmonxona turlari
  const hotelTypes = [
    { value: 'hotel', label: 'Mehmonxona' },
    { value: 'apartment', label: 'Kvartira' },
    { value: 'hostel', label: 'Hostel' },
    { value: 'resort', label: 'Kurort' },
    { value: 'villa', label: 'Villa' },
    { value: 'guesthouse', label: 'Mehmonxona (Guest House)' }
  ]

  return {
    // Shaxsiy ma'lumotlar
    genderOptions,
    documentTypes,
    passengerTypes,

    // Geografiya
    phoneCountryCodes,
    countries,
    uzbekistanCities,

    // Sana va vaqt
    uzMonths,
    weekDays,

    // Moliyaviy
    currencies,
    paymentMethods,

    // Transport
    trainCarClasses,

    // Turizm
    hotelStars,
    hotelTypes
  }
}
