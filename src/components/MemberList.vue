<script setup lang="ts">
import { ref, computed } from 'vue';
import OneMember from '@/components/OneMember.vue';

type Member = {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
};

const memberList = ref(
  new Map<number, Member>([
    [
      33456,
      {
        id: 33456,
        name: '田中太郎',
        email: 'bow@example.com',
        points: 35,
        note: '初回入会特典あり',
      },
    ],
    [
      47783,
      {
        id: 47783,
        name: '鈴木二郎',
        email: 'mue@example.com',
        points: 53,
      },
    ],
  ]),
);

const totalPoints = computed(() => {
  let total = 0;
  for (const { points } of memberList.value.values()) {
    total += points;
  }
  return total;
});
</script>

<template>
  <h1>会員リスト</h1>
  <p data-testid="total-points">全会員の保有ポイントの合計: {{ totalPoints }}</p>
  <OneMember v-for="[key, member] of memberList" :key v-bind="member" @point-up="member.points++" />
</template>
