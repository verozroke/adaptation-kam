<template>
  <v-timeline
    style="width: 80%;"
    side="end"
    direction="horizontal"
  >
    <v-timeline-item
      :icon="item.icon"
      v-for="item in items"
      :key="item.id"
      :dot-color="colors.red"
    >

      <div class="timeline-body">
        <v-card-subtitle
          :style="{ color: colors.darkgreen }"
          style="font-weight: 700; opacity: 1; font-size: 14px; text-align: center;"
        >{{ item.title }}</v-card-subtitle>
        <v-list>
          <v-list-item class="list-window">
            <span v-html="item.text">
            </span>
          </v-list-item>
        </v-list>
      </div>
    </v-timeline-item> </v-timeline>
</template>

<script setup lang="ts">
import { colors } from '~/core/color/color';

const items = ref([
  {
    id: 1,
    title: 'WELCOME ВВОДНЫЙ ТРЕНИНГ',
    text: `Для вновь принятых сотрудников Управления Продаж <br> <br>
          В течение твоего первого месяца работы в компании ты будешь приглашен на ближайший по расписанию Welcome тренинг. 
    `,
    icon: 'mdi-numeric-1',
  },
  {
    id: 2,
    title: 'РАБОТА С НАСТАВНИКОМ',
    text: 'Каждому вновь принятому КАМ назначается Наставник из числа опытных КАМ с первым рейтингом',
    icon: 'mdi-numeric-2',
  },
  {
    id: 3,
    title: 'ВСТРЕЧИ One-to-One С РУКОВОДИТЕЛЕМ',
    text: 'В конце каждого месяца в течении твоего адаптационного периода, длительностью 3 месяца, рекомендуется назначать встречу с твоим непосредственным руководителем для обсуждения общих вопросов и получения обратной связи.',
    icon: 'mdi-numeric-3',
  },
])
</script>

<style scoped>
.list-window {
  color: #144541;
  padding: 10px;
  font-size: 12px;
  width: 250px;
  text-align: justify;
}

.timeline-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>