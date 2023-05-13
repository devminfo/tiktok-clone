<script setup lang="ts">

const route = useRoute()

</script>
<template>
  <div>

    <TopNav />

    <!-- <div :class="route.fullPath === '/' ? 'max-w-[1140px]' : ''"
      class="flex justify-between mx-auto w-full lg:px-2.5 px-0 "> -->

    <div class="flex justify-between mx-auto w-full lg:px-2.5 px-0 max-w-[1140px] ">

      <div>
        <SideNavMain />
      </div>

      <slot />
    </div>


  </div>
</template>
