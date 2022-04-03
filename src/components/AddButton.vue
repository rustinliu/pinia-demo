<template>
    <div>
        <button @click="handleClick">点击增加</button>
    </div>
</template>

<script setup lang="ts">
import { mainStore } from '../store/index';
const store = mainStore();
const handleClick = () => {
    store.count++;
};
</script>

<style></style>
