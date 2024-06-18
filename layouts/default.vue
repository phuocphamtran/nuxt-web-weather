<script setup lang="ts">
const colorMode = useColorMode()
function changeTheme() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="flex justify-center h-full">
      <div class="header-container mr-1">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </div>
      <div class="header-container">
        <NuxtLink to="/about">
          About
        </NuxtLink>
      </div>
    </div>
    <div>
      <UButton
        class="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent"
        @click="changeTheme"
      >
        <UIcon v-show="$colorMode.value === 'dark'" name="heroicons:moon-16-solid" />
        <UIcon v-show="$colorMode.value === 'light'" name="heroicons:sun-16-solid" />
      </UButton>
    </div>
  </div>
  <div>
    <NuxtPage />
  </div>
</template>

<style scoped lang="scss">
.header-container {
  color: blue;
  cursor: pointer;
}
</style>
