<script setup lang="ts">
const colorMode = useColorMode()
function changeTheme() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div class="flex justify-between items-center bg-utility-gray-400">
    <div class="flex justify-center h-full">
      <div class="header-container">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </div>
      <div class="header-container mx-4">
        <NuxtLink to="/about">
          About
        </NuxtLink>
      </div>
      <div class="header-container">
        <NuxtLink to="/create">
          Create
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
  <div class="mx-10 mt-10 flex justify-center">
    <NuxtPage />
  </div>
</template>

<style scoped lang="scss">
.header-container {
  color: blue;
  cursor: pointer;
}
</style>
