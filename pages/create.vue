<script setup lang="ts">
const firstName = ref<string>('')
const lastName = ref<string>('')
const salary = ref<number>(0)
</script>

<template>
  <div>
    <div>
      <h1>Create New Employee</h1>
      <label>First Name</label>
      <UInput v-model="firstName" />
      <label>Last Name</label>
      <UInput v-model="lastName" />
      <label>Salary</label>
      <UInput v-model="salary" />
    </div>
    <UButton>Back</UButton>
    <UButton>Create</UButton>
  </div>
</template>

<style scoped>

</style>
