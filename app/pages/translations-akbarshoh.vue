<template>
  <div class="p-4 min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-4">
      <div class="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
        <UIcon name="i-heroicons-language" class="text-white" />
      </div>
      <div>
        <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Tarjimalar</h1>
        <p class="text-xs text-gray-500 dark:text-gray-400">Akbarshoh Workspace</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Left: Form -->
      <div>
        <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-900 dark:text-white">{{ isEditing ? 'Tahrirlash' : 'Yangi tarjima' }}</span>
            <UButton
              v-if="isEditing"
              icon="i-heroicons-x-mark"
              size="xs"
              color="neutral"
              variant="ghost"
              @click="resetForm"
            />
          </div>

          <!-- Source Language & Text -->
          <div class="flex gap-2">
            <USelectMenu
              v-model="sourceLanguage"
              :items="languageOptions"
              value-key="value"
              class="w-36"
              size="lg"
            />
            <span class="text-xs text-gray-400 dark:text-gray-500 self-center">tilida</span>
          </div>

          <UTextarea
            v-model="sourceText"
            placeholder="Matn kiriting..."
            size="lg"
            autoresize
            class="w-full"
          />

          <!-- Translate Button -->
          <UButton
            @click="translateAndGenerate"
            :disabled="!sourceText.trim()"
            :loading="isTranslating"
            color="primary"
            block
            size="lg"
          >
            <UIcon name="i-heroicons-language" class="mr-1" />
            Tarjima qilish
          </UButton>

          <!-- Results -->
          <template v-if="newTranslation.key">
            <!-- Key -->
            <div class="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <span class="text-xs text-gray-500 dark:text-gray-400">Kalit:</span>
              <code class="text-xs text-primary-600 dark:text-primary-400 flex-1">{{ newTranslation.key }}</code>
              <UButton
                icon="i-heroicons-pencil"
                size="xs"
                color="neutral"
                variant="ghost"
                @click="editKeyMode = !editKeyMode"
              />
            </div>
            <UInput
              v-if="editKeyMode"
              v-model="newTranslation.key"
              size="sm"
            />

            <!-- Translations -->
            <div class="grid grid-cols-2 gap-2">
              <div v-for="lang in languageOptions" :key="lang.value">
                <label class="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
                  {{ lang.label }}
                  <span v-if="lang.value === sourceLanguage" class="text-primary-500 dark:text-primary-400">(manba)</span>
                </label>
                <UTextarea
                  v-model="newTranslation[lang.value]"
                  :rows="2"
                  size="lg"
                  autoresize
                  class="w-full"
                />
              </div>
            </div>

            <!-- Save -->
            <div class="flex gap-2 pt-2">
              <UButton
                v-if="isEditing"
                @click="resetForm"
                color="neutral"
                variant="soft"
                size="lg"
                block
                class="flex-1"
              >
                Bekor
              </UButton>
              <UButton
                @click="saveTranslation"
                :loading="saving"
                :disabled="!canSave"
                color="primary"
                variant="solid"
                size="lg"
                block
              >
                {{ isEditing ? 'Yangilash' : 'Saqlash' }}
              </UButton>
            </div>
          </template>
        </div>
      </div>

      <!-- Right: Table -->
      <div class="lg:col-span-2">
        <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <!-- Header -->
          <div class="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-500 dark:text-gray-400">Jami:</span>
              <span class="text-sm font-medium text-primary-600 dark:text-primary-400">{{ totalItems }}</span>
            </div>
            <div class="flex gap-2">
              <UInput
                v-model="searchTerm"
                icon="i-heroicons-magnifying-glass"
                placeholder="Qidirish..."
              />
            </div>
          </div>

          <!-- Table -->
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead class="bg-gray-50 dark:bg-gray-700/50 text-xs text-gray-500 dark:text-gray-400">
                <tr>
                  <th class="text-left p-2 font-medium">Kalit</th>
                  <th class="text-left p-2 font-medium">O'zbekcha</th>
                  <th class="text-left p-2 font-medium">Русский</th>
                  <th class="text-left p-2 font-medium">English</th>
                  <th class="text-center p-2 font-medium w-20"></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-xs">
                <tr v-if="loading">
                  <td colspan="5" class="text-center py-8">
                    <UIcon name="i-heroicons-arrow-path" class="animate-spin text-gray-400 dark:text-gray-500" />
                  </td>
                </tr>
                <tr v-else-if="translations.length === 0">
                  <td colspan="5" class="text-center py-8 text-gray-400 dark:text-gray-500">
                    Tarjimalar topilmadi
                  </td>
                </tr>
                <tr
                  v-for="item in translations"
                  :key="item.key"
                  class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  :class="{ 'bg-primary-50 dark:bg-primary-900/20': editingKey === item.key }"
                >
                  <td class="p-2">
                    <code class="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-1 rounded">{{ item.key }}</code>
                  </td>
                  <td class="p-2 max-w-24 truncate text-gray-700 dark:text-gray-300" :title="item.uz_la">{{ item.uz_la || '-' }}</td>
                  <td class="p-2 max-w-24 truncate text-gray-700 dark:text-gray-300" :title="item.ru">{{ item.ru || '-' }}</td>
                  <td class="p-2 max-w-24 truncate text-gray-700 dark:text-gray-300" :title="item.en">{{ item.en || '-' }}</td>
                  <td class="p-2">
                    <div v-if="item.is_mine" class="flex justify-center gap-1">
                      <UButton
                        icon="i-heroicons-pencil"
                        size="xs"
                        color="neutral"
                        variant="ghost"
                        @click="startEdit(item)"
                      />
                      <UButton
                        icon="i-heroicons-trash"
                        size="xs"
                        color="error"
                        variant="ghost"
                        @click="confirmDelete(item)"
                      />
                    </div>
                    <span v-else class="text-gray-400 dark:text-gray-500 text-xs">-</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="flex justify-between items-center p-3 border-t border-gray-200 dark:border-gray-700 text-xs">
            <span class="text-gray-500 dark:text-gray-400">
              {{ pagination.offset + 1 }}-{{ Math.min(pagination.offset + limit, totalItems) }} / {{ totalItems }}
            </span>
            <UPagination
              v-model="pagination.page"
              :items-per-page="limit"
              :total="totalItems"
              size="xs"
              @update:model-value="changePage"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Modal -->
    <UModal v-model:open="showDeleteModal" title="Bu tarjimani o'chirishni xohlaysizmi?">
      <template #body>
          <div class="p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm">
            <code class="text-gray-800 dark:text-gray-200">{{ deletingItem?.uz_la }}</code>
          </div>
      </template>
      <template #footer>

          <div class="w-full flex justify-end gap-2">
            <UButton color="neutral" variant="soft" @click="showDeleteModal = false">Bekor qilish</UButton>
            <UButton color="error" :loading="saving" @click="deleteTranslation">O'chirish</UButton>
          </div>
      </template>
    </UModal>
  </div>
</template>

<script setup>
const toast = useToast()

const languageOptions = [
  { value: 'uz_la', label: "O'zbekcha (Lotin)" },
  { value: 'uz_cr', label: "Ўзбекча (Кирил)" },
  { value: 'ru', label: 'Русский' },
  { value: 'en', label: 'English' }
]

// API til kodlari
const apiLangMap = {
  'uz_la': 'uz',
  'uz_cr': 'uz-Cyrl',
  'ru': 'ru',
  'en': 'en'
}

// State
const loading = ref(false)
const saving = ref(false)
const translations = ref([])
const searchTerm = ref('')
const totalItems = ref(0)
const limit = ref(10)
const pagination = ref({ page: 1, offset: 0 })

// Form
const sourceLanguage = ref('uz_la')
const sourceText = ref('')
const isTranslating = ref(false)
const newTranslation = ref({ key: '', uz_la: '', uz_cr: '', ru: '', en: '' })
const editKeyMode = ref(false)
const isEditing = ref(false)
const editingKey = ref('')

// Delete
const showDeleteModal = ref(false)
const deletingItem = ref(null)

const canSave = computed(() => newTranslation.value.key && newTranslation.value.uz_la)

// O'zbek lotindan kirilga o'tkazish
function latinToCyrillic(text) {
  const map = {
    'sh': 'ш', 'ch': 'ч', 'ng': 'нг', "g'": 'ғ', "o'": 'ў',
    'yo': 'ё', 'yu': 'ю', 'ya': 'я', 'ye': 'е',
    'a': 'а', 'b': 'б', 'd': 'д', 'e': 'э', 'f': 'ф',
    'g': 'г', 'h': 'ҳ', 'i': 'и', 'j': 'ж', 'k': 'к',
    'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
    'q': 'қ', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у',
    'v': 'в', 'x': 'х', 'y': 'й', 'z': 'з',
    'A': 'А', 'B': 'Б', 'D': 'Д', 'E': 'Э', 'F': 'Ф',
    'G': 'Г', 'H': 'Ҳ', 'I': 'И', 'J': 'Ж', 'K': 'К',
    'L': 'Л', 'M': 'М', 'N': 'Н', 'O': 'О', 'P': 'П',
    'Q': 'Қ', 'R': 'Р', 'S': 'С', 'T': 'Т', 'U': 'У',
    'V': 'В', 'X': 'Х', 'Y': 'Й', 'Z': 'З'
  }

  let result = text
  const multiChar = ['sh', 'ch', 'ng', "g'", "o'", 'yo', 'yu', 'ya', 'ye', 'Sh', 'Ch', 'Ng', "G'", "O'", 'Yo', 'Yu', 'Ya', 'Ye']
  for (const m of multiChar) {
    const replacement = map[m.toLowerCase()]
    if (replacement) {
      const isUpper = m[0] === m[0].toUpperCase()
      result = result.split(m).join(isUpper ? replacement.toUpperCase() : replacement)
    }
  }
  for (const [lat, cyr] of Object.entries(map)) {
    if (lat.length === 1) {
      result = result.split(lat).join(cyr)
    }
  }
  return result
}

async function translateAndGenerate() {
  if (!sourceText.value.trim()) return

  const key = sourceText.value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .substring(0, 50)

  newTranslation.value.key = key
  newTranslation.value[sourceLanguage.value] = sourceText.value

  isTranslating.value = true

  const targetLanguages = ['uz_la', 'uz_cr', 'ru', 'en'].filter(l => l !== sourceLanguage.value)

  for (const targetLang of targetLanguages) {
    try {
      if (sourceLanguage.value === 'uz_la' && targetLang === 'uz_cr') {
        newTranslation.value[targetLang] = latinToCyrillic(sourceText.value)
        continue
      }

      if (sourceLanguage.value === 'uz_cr' && targetLang === 'uz_la') {
        newTranslation.value[targetLang] = sourceText.value
        continue
      }

      const sourceLang = apiLangMap[sourceLanguage.value] || 'uz'
      const targetLangApi = apiLangMap[targetLang] || targetLang

      if (targetLang === 'uz_cr') {
        if (sourceLanguage.value !== 'uz_la') {
          const response = await $fetch('/api/i18n/auto-translate', {
            method: 'POST',
            body: { text: sourceText.value, source: sourceLang, target: 'uz' }
          })
          if (response.success) {
            newTranslation.value[targetLang] = latinToCyrillic(response.translatedText)
          }
        }
        continue
      }

      const response = await $fetch('/api/i18n/auto-translate', {
        method: 'POST',
        body: {
          text: sourceText.value,
          source: sourceLang,
          target: targetLangApi
        }
      })

      if (response.success) {
        newTranslation.value[targetLang] = response.translatedText.replace(/&#39;/g, "'").replace(/&#10;/g, "\n")
      }
    } catch (error) {
      console.error(`Tarjima xatosi (${targetLang}):`, error)
    }
    await new Promise(r => setTimeout(r, 300))
  }

  isTranslating.value = false
  toast.add({ title: 'Tarjima tayyor!', color: 'success' })
}

function resetForm() {
  sourceText.value = ''
  newTranslation.value = { key: '', uz_la: '', uz_cr: '', ru: '', en: '' }
  isEditing.value = false
  editingKey.value = ''
  editKeyMode.value = false
}

function startEdit(item) {
  isEditing.value = true
  editingKey.value = item.key
  newTranslation.value = { ...item }
  sourceText.value = item.uz_la || ''
  sourceLanguage.value = 'uz_la'
}

async function saveTranslation() {
  if (!canSave.value) return
  saving.value = true
  try {
    if (isEditing.value) {
      await $fetch(`/api/i18n/translations/akbarshoh/${encodeURIComponent(editingKey.value)}`, {
        method: 'PUT',
        body: newTranslation.value
      })
      toast.add({ title: 'Yangilandi', color: 'success' })
    } else {
      await $fetch('/api/i18n/translations-akbarshoh', {
        method: 'POST',
        body: newTranslation.value
      })
      toast.add({ title: "Qo'shildi", color: 'success' })
    }
    resetForm()
    await fetchTranslations()
  } catch (error) {
    toast.add({ title: error.data?.message || 'Xatolik', color: 'error' })
  } finally {
    saving.value = false
  }
}

function confirmDelete(item) {
  deletingItem.value = item
  showDeleteModal.value = true
}

async function deleteTranslation() {
  saving.value = true
  try {
    await $fetch(`/api/i18n/translations/akbarshoh/${encodeURIComponent(deletingItem.value.key)}`, {
      method: 'DELETE'
    })
    toast.add({ title: "O'chirildi", color: 'success' })
    showDeleteModal.value = false
    await fetchTranslations()
  } catch (error) {
    toast.add({ title: error.data?.message || 'Xatolik', color: 'error' })
  } finally {
    saving.value = false
  }
}

async function fetchTranslations() {
  loading.value = true
  try {
    const params = new URLSearchParams({
      page: pagination.value.page.toString(),
      limit: limit.value.toString(),
      search: searchTerm.value || ''
    })
    const result = await $fetch(`/api/i18n/translations-akbarshoh?${params}`)
    if (result.success) {
      translations.value = result.data
      totalItems.value = result.totalItems
    }
  } catch (error) {
    toast.add({ title: 'Xatolik', color: 'error' })
  } finally {
    loading.value = false
  }
}

function changePage(page) {
  pagination.value.page = page
  pagination.value.offset = (page - 1) * limit.value
  fetchTranslations()
}

watch(searchTerm, () => {
  pagination.value.page = 1
  pagination.value.offset = 0
  fetchTranslations()
})

onMounted(() => fetchTranslations())
</script>
