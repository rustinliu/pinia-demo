<template>
    <div>
        <input type="text" v-model="inputVal" />
        <button @click="changeHelloFun">修改Hello内容</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mainStore } from '../store/index';
const store = mainStore();
let inputVal = ref('');
const changeHelloFun = () => {
    store.setHelloworld(inputVal.value);
    inputVal.value = '';
};
</script>

<style></style>
