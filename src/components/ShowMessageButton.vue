<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false);
const onShowButtonClick = (): void => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div>
    <p>
      隠し要素を
      <button data-testid="showButton" @click="onShowButtonClick">表示</button>
    </p>
  </div>
  <p v-if="isVisible" data-testid="invisible">表示されました</p>
</template>
