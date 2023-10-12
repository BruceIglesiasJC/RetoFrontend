<template>
  <section id="nosotros" class="Bg-primary text-white">
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center">
          <div style="width: fit-content">
            <h2 class="text-center title">Nuestros Docentes</h2>
          </div>
        </v-col>
      </v-row>
      <div v-if="isLoading" class="text-center text-green">Cargando Datos</div>
      <div v-else-if="error" class="text-center text-red">{{ error }}</div>
      <div v-else>
        <docentes-card
          class="my-10"
          v-for="{ name, image, description, job, posts, linkedin } in data"
          :img="image"
          :nombre="name"
          :carrera="job"
          :descripcion="description"
          :linkedin="linkedin"
          :publicaciones="posts"
        ></docentes-card>
      </div>
    </v-container>
  </section>
</template>

<style scoped lang="scss"></style>
<script lang="js" setup>
import { ref } from 'vue';
import {useFetch} from '../composables/useFetch'
import DocentesCard from './DocentesCard.vue';

//llamamos el composable para utilizarlo
//pasando la direccion  de la API en "url" para extraer sus datos

const url = ref("https://61c34f6f9cfb8f0017a3ead1.mockapi.io/api/v1/doctors");
const { data, error, isLoading} = useFetch(url.value);
</script>
