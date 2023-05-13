<script setup lang='ts'>
const email = ref("")
const password = ref("")
const errors = ref("")

const login = () => {

}

</script>

<template>
  <div class="text-center text-[28px] mb-4 font-bold"> Log in</div>

  <div class="px-6 pb-1.5 text-[15px] ">Email address</div>

  <div class="px-6 pb-2">
    <TextInput placeholder="Email address" inputType="email" :autoFocus="true" error="" v-model:input="email" />
  </div>

  <div class="px-6 pb-2">
    <TextInput placeholder="Password" inputType="password" error="" v-model:input="password" />
  </div>

  <div class="px-6 text-[12px] text-gray-600">Forgot password ?</div>

  <div class="py-6 pb-2 mt-6">
    <button :disabled="(!email || !password)" :class="(!email || !password) ? 'bg-gray-200' : 'bg-[#F02C56]'"
      @click="login" class="w-full text-[17px] font-semibold text-white py-3 rounded-sm">Log in</button>

  </div>
</template>
