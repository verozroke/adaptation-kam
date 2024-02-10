<template>
  <v-table style="background-color: #f8fafc;">
    <thead>
      <tr>
        <th
          class="text-left"
          style="font-weight: 700;"
        >
          №
        </th>
        <th
          class="text-left"
          style="font-weight: 700;"
        >
          Действие
        </th>
        <th
          class="text-left"
          style="font-weight: 700;"
        >
          Ссылки
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({ title, link: links }, i) in tableData"
        :key="title"
      >
        <td>{{ i + 1 }}</td>
        <td>{{ title }}</td>
        <td>
          <div class="col">
            <a
              v-for="link in getLinks(links)"
              :href="link.url"
            >{{ link.text }}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import type { TableRow, TableRowLink } from '~/core/types/tables';



const getLinks = (links: TableRowLink | TableRowLink[]) => (Array.isArray(links) ? links : [links])

defineProps<{
  tableData: TableRow[]
}>()
</script>

<style scoped>
.col {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>