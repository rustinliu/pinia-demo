<template>
    <div>{{ helloworld }}</div>
    <div>{{ count }}</div>
</template>

<script setup lang="ts">
import { mainStore } from '../store/index';
import { storeToRefs } from 'pinia';
const store = mainStore();
const { helloworld, count } = storeToRefs(store);
</script>

<style></style>
