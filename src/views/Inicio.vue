<template>
    <div>
        <h1>lista de tareas</h1>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Inicio',
    methods: {
        ...mapActions(['getTareas'])
    },
    created(){
        this.getTareas();
    }
    
}
</script>