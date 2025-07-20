<script setup lang="ts">
const {
  id,
  name,
  email,
  points,
  note = '--',
} = defineProps<{
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}>();

defineEmits<{
  pointUp: [id: number];
}>();
</script>

<template>
  <section class="box">
    <h4>{{ name }}さんの情報</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ points }}</dd>
      <dt>備考</dt>
      <dd>{{ note }}</dd>
    </dl>
    <button @click="$emit('pointUp', id)">ポイント加算</button>
  </section>
</template>

<style lang="css" scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
