<template>
    <div>
        <h1>Contador</h1>
        <h2>{{ valor }}</h2>
        <button @click="detValor(-1)">Dec</button>
        <button @click="setValor(1)">Inc</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        valorInicial : {
          type: Number
        } 
    },  
    setup(props: any) {
        let valor = ref(props.valorInicial || 0)
        function setValor() {
            valor.value++
        }
        function detValor() {
            valor.value--
        }

        return { setValor, valor, detValor }
    }
})
</script>

<style></style>