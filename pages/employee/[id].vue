<script setup lang="ts">
import type { EmployeeInfo } from '~/pages/create.vue'
import type { TimeRange } from '~/components/wa/datePicker/Range.vue'

const route = useRoute()
const id = Number(route.params.id)
const employeeInfo = ref<EmployeeInfo>([])
const firstName = ref<string>('')
const lastName = ref<string>('')
const salary = ref<number>(0)
const timeRange = ref<TimeRange>({ start: undefined, end: undefined })
function loadEmployee() {
  const items = JSON.parse(localStorage.getItem('items') || '[]')
  const employee = items.find(item => item.ID === id)
  employeeInfo.value = { ...employee }
}
onMounted(() => {
  loadEmployee()
  firstName.value = employeeInfo.value.FIRST_NAME
  lastName.value = employeeInfo.value.LAST_NAME
  salary.value = employeeInfo.value.SALARY
})
</script>

<template>
  <div>
    <div>
      <h1 class="font-bold text-text-warning mb-10">
        Create New Employee
      </h1>
      <UFormGroup
        label="First Name"
        class="mb-4"
        :ui="{ label: { base: 'text-base leading-5 font-medium text-text-secondary-700' } }"
        required
      >
        <div class="input-create-container">
          <UInput v-model="firstName" :ui="{ placeholder: 'text-text-placeholder' }" class="bg-background-primary border-border-primary text-base font-normal mt-1" placeholder="Input first name" />
        </div>
      </UFormGroup>

      <UFormGroup
        label="Last Name"
        class="mb-4"
        :ui="{ label: { base: 'text-base leading-5 font-medium text-text-secondary-700' } }"
        required
      >
        <div class="input-create-container">
          <UInput v-model="lastName" :ui="{ placeholder: 'text-text-placeholder' }" class="bg-background-primary border-border-primary text-base font-normal mt-1" placeholder="Input last name" />
        </div>
      </UFormGroup>
      <UFormGroup
        label="Salary"
        class="mb-4"
        :ui="{ label: { base: 'text-base leading-5 font-medium text-text-secondary-700' } }"
        required
      >
        <div class="input-create-container">
          <UInput v-model="salary" type="number" :ui="{ placeholder: 'text-text-placeholder' }" class="bg-background-primary border-border-primary text-base font-normal mt-1" placeholder="Input salary" />
        </div>
      </UFormGroup>
      <UFormGroup
        label="Time"
        :ui="{ label: { base: 'text-base leading-5 font-medium text-text-secondary-700' } }"
        required
      >
        <div class="input-create-container">
          <WaDatePickerRange v-model:time-range="timeRange" />
        </div>
      </UFormGroup>
    </div>
  </div>
</template>

<style scoped>

</style>
