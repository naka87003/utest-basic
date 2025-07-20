<script setup lang="ts">
import { ref, computed } from 'vue';
import { divideTwoNums } from '@/functions';
import DivideInput from './components/DivideInput.vue';
import ShowMessageButton from './components/ShowMessageButton.vue';
import MemberList from './components/MemberList.vue';

const num1 = ref(6);
const num2 = ref(3);
const ans = computed(() => {
  return divideTwoNums(num1.value, num2.value);
});
</script>

<template>
  <p>{{ num1 }} / {{ num2 }} = {{ ans }}</p>
  <p data-testid="p2">{{ num1 }} / {{ num2 }} = 100</p>
  <DivideInput />
  <ShowMessageButton />
  <MemberList />
</template>
