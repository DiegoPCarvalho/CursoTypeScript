<template>
    <div>
        <h1>
            Contador "Classe"
        </h1>
        <h2> {{ resp }}</h2>
        <h2> {{ getParOuImpar() }}</h2>
        <h2> {{ parOuImpar }}</h2>
        <button @click="setValor(-1)">Dec</button>
        <button @click="setValor(1)">inc</button>
      
    </div>
</template>

<script lang="ts">
import { Vue, Options} from 'vue-class-component';
import { Prop} from 'vue-property-decorator';

@Options({})
export default class ContadoClasse extends Vue {
    @Prop(Number) private readonly valorInicial?: number
    private valor: number = this.valorInicial || 100

    public setValor(delta: number) {
        this.valor += delta
    }

    get resp():number {
        return this.valor
    }

    public getParOuImpar(): string {
        return this.valor % 2 === 0 ? 'Par' : 'Impar'
    }

    public get parOuImpar(): string {
        return this.valor % 2 === 0 ? 'Par' : 'Impar'
    }
    
}
</script>

<style></style>