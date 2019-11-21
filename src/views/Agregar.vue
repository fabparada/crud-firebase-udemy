<template>
    <div>
        <h1>
            agregar
        </h1>
        <form @submit.prevent="agregarTarea(nombre)" action="">
            <input type="text" name="" id="" v-model="nombre">
            <button type="submit">agregar</button>
        </form>
        {{nombre}}
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Agregar',
    data(){
        return{
            nombre: ''
        }
    },
    methods: {
        ...mapActions(['agregarTarea'])
    }
    
}
</script>