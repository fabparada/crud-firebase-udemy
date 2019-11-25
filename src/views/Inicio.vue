<template>
    <div>
        <h1>lista de tareas</h1>
        <router-link :to="{name: 'agregar'}"> 
            <button class="btn btn-block btn-success">agregar</button>
        </router-link>
        <ul class="list-group mt-5">
            <li class="list-group-item" 
            v-for="item of tareas" :key="item.id">
                {{ item.id }} - {{ item.nombre }}
                <div class="float-right">
                     <router-link class="btn btn-warning "
                    :to="{name: 'editar', params:{ id: item.id }}"> 
                        Editar
                    </router-link>
                    <button class="btn btn-danger ml-4" @click="eliminarTarea(item.id)">Eliminar tarea</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Inicio',
    methods: {
        ...mapActions(['getTareas','eliminarTarea'])
    },
    created(){
        this.getTareas();
    },
    computed:{
        ...mapState(['tareas'])
    }
    
}
</script>