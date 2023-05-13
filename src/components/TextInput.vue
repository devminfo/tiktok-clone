<script setup lang='ts'>
interface Props {
  placeholder?: string
  inputType: "number" | "email" | "text" | "password"
  max?: number
  input: any
  error?: string
  autoFocus?: boolean
}
const props = defineProps<Props>()

const { autoFocus, placeholder, input } = toRefs(props)

const emit = defineEmits(['update:input'])

onMounted(() => {
  if (autoFocus.value) {
    document.getElementById(`input-${placeholder?.value}`)?.focus()
  }
})


const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val)
})

</script>

<template>
  <div>
    <input :id="`input-${placeholder}`" :placeholder="placeholder" :type="inputType" :maxlength="max" autocomplete="off"
      v-model="inputComputed"
      class="block w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none">

    <span v-if="error" class="text-red-500 text-[13px] font-semibold">
      {{ error }}
    </span>
  </div>
</template>
