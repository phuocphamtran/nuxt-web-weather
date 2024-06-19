<script setup lang="ts">
// import { useRouteParams } from '@vueuse/router'
import { useStorage } from '@vueuse/core'
import type { EmployeeInfo } from '~/pages/create.vue'

const router = useRouter()
// const employeeId = useRouteParams('id')
const selected = ref<EmployeeInfo[] | []>([])
const dataInfo = useStorage<EmployeeInfo[]>('items', [])
const columns = [
  { key: 'ID', label: 'NO.', sortable: true },
  { key: 'FIRST_NAME', label: 'First Name', sortable: true },
  { key: 'LAST_NAME', label: 'Last Name', sortable: true },
  { key: 'SALARY', label: 'Salary', sortable: true },
  { key: 'UPDATED_TIME', label: 'DATE', sortable: true },
  { key: 'UPDATED_A CTIONS', label: 'ACTIONS', sortable: true },
]
function onRowSelect(row: EmployeeInfo) {
  router.push({ name: 'employee-id', params: { id: row.ID, employee: row } })
}
function deleteMember() {
  dataInfo.value = dataInfo.value.filter(item => !selected.value.includes(item))
  selected.value = []
}
onMounted(() => {
  dataInfo.value = dataInfo.value || []
})
</script>

<template>
  <div class="border border-utility-gray-100 rounded-lg">
    <div class="flex justify-between items-center py-4 px-6">
      <div class="flex items-center space-x-3">
        <span class="text-text-primary text-lg font-medium">Employees</span>
        <UBadge variant="soft" size="sm">
          {{ dataInfo.length }} members
        </UBadge>
      </div>
      <UButton variant="soft" color="red" @click="deleteMember">
        Delete member
      </UButton>
    </div>
    <UTable v-model="selected" :columns="columns" :rows="dataInfo" @select="onRowSelect" />
  </div>
</template>
