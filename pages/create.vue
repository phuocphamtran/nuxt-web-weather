<script setup lang="ts">
// import { format } from 'date-fns'

import type { TimeRange } from '~/components/wa/datePicker/Range.vue'

export interface EmployeeInfo {
  ID: number
  FIRST_NAME: string
  LAST_NAME: string
  SALARY: number
  UPDATED_TIME: string
  UPDATED_ACTIONS: string
}

const router = useRouter()
const firstName = ref<string>('')
const lastName = ref<string>('')
const salary = ref<number>()
const timeRange = ref<TimeRange>({ start: undefined, end: undefined })

function btnBack() {
  router.push({ name: '/' })
}
function btnCreate() {
  const items = JSON.parse(localStorage.getItem('items') || '[]')
  // let formattedDate = ''
  // if (timeRange.value.start) {
  //   formattedDate = format(timeRange.value.start, 'yyyy-MM-dd')
  // }
  items.push({
    ID: items.length + 1,
    FIRST_NAME: firstName.value,
    LAST_NAME: lastName.value,
    SALARY: salary.value,
    UPDATED_TIME: timeRange.value.start,
    UPDATED_ACTIONS: 'working',
  })
  localStorage.setItem('items', JSON.stringify(items))
  router.push({ name: 'index' })
}
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
    <div class="flex justify-between mt-10">
      <UButton @click="btnBack">
        Back
      </UButton>
      <UButton @click="btnCreate">
        Create
      </UButton>
    </div>
  </div>
</template>

<style scoped>
.input-create-container {
  height: 40px;
  width: 672px;
}
</style>
