<template>
    <div>
        <h1>
            agregar
        </h1>
        <form @submit.prevent="agregarTarea(nombre)" action="" class="form-inline">
          <!--  <input type="text" name="" id="" v-model="nombre"> -->
           <!-- <button type="submit">agregar</button> -->

            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                <div class="input-group-text">Nombre</div>
                </div>
                <input v-model="nombre" type="text" class="form-control" >
            </div>
            <button type="submit" class="btn btn-primary mb-2">Agregar</button>
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