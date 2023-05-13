<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGeneralStore } from '../stores/general';

const generalStore = useGeneralStore()

const { isLoginOpen, isEditProfileOpen } = storeToRefs<any>(generalStore)

</script>

<template>
  <div>
    <div class="pt-[80px] w-[calc(100%-90px)] max-w-[690px]">
      <PostMain />
    </div>
    <AuthOverlay v-if="isLoginOpen" />
    <EditProfileOverlay v-if="true" />
  </div>
</template>
