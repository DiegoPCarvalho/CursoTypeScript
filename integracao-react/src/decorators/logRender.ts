type Componente = {
    new(...args: any[]): {
        render(): any
    }
}

export default function logRender<C extends Componente>(componente: C){
    return class extends componente {
        render() {
            console.log(`renderizando o componente...`)
            const r: any = super.render()
            console.log('renderizacao concluida!')
            return r
        }
    }
}