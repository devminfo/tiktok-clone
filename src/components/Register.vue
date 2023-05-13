<script setup lang='ts'>
const email = ref("")
const fullName = ref("")
const password = ref("")
const confirmPassword = ref("")
const errors = ref("")

const register = () => {

}

</script>

<template>
  <div class="text-center text-[28px] mb-4 font-bold"> Register </div>

  <div class="px-6 pb-2">
    <TextInput placeholder="Full name" inputType="text" :autoFocus="true" error="" v-model:input="fullName" />
  </div>

  <div class="px-6 pb-2">
    <TextInput placeholder="Email address" inputType="email" error="" v-model:input="email" />
  </div>

  <div class="px-6 pb-2">
    <TextInput placeholder="Password" inputType="password" error="" v-model:input="password" />
  </div>


  <div class="px-6 pb-2">
    <TextInput placeholder="Confirm password" inputType="password" error="" v-model:input="confirmPassword" />
  </div>

  <div class="px-6 text-[12px] text-gray-600">Forgot password ?</div>

  <div class="py-6 pb-2 mt-6">
    <button :disabled="(!email || !password || !confirmPassword || !fullName)"
      :class="(!email || !password || !confirmPassword || !fullName) ? 'bg-gray-200' : 'bg-[#F02C56]'" @click="register"
      class="w-full text-[17px] font-semibold text-white py-3 rounded-sm">Register</button>

  </div>
</template>
