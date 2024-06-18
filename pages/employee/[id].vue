<script setup lang="ts">
const { id } = useRoute().params
</script>

<template>
  <div>
    <h1>Employee Details</h1>
    <p>Employee ID: {{ id }}</p>
    <p>Employee Name: John Doe</p>
    <p>Employee Age: 30</p>
    <p>Employee Designation: Software Engineer</p>
    <p>Employee Department: IT</p>
    <p>Employee Salary: $10000</p>
    <p>Employee Location: New York</p>
    <p>Employee Email:</p>
  </div>
</template>

<style scoped>

</style>
