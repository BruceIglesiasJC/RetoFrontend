<template>
  <div>
    <div
      class="d-flex align-center"
      :class="{
        desplazamiento_on: mostrarTexto,
        desplazamiento_of: !mostrarTexto,
      }"
    >
      <div class="contorno" :class="{ new_contorno: mostrarTexto }">
        <img :src="img" />
      </div>
      <div class="px-8">
        <h3>{{ nombre }}</h3>
        <h5
          class="py-2"
          style="color: gray"
          :class="{ Secondary: mostrarTexto }"
        >
          {{ carrera }}
        </h5>
        <div>
          <button
            style="text-decoration: underline"
            @click="toggleTexto"
            class="Secondary py-2"
          >
            {{ mostrarTexto ? "Ver menos -" : "Ver más +" }}
          </button>
        </div>
        <div class="d-none d-md-block texto" v-if="mostrarTexto">
          <p style="font-weight: 400; font-size: 14px; color: #f0f0f0">
            {{ descripcion }}
          </p>
          <span
            ><button class="rounded-pill py-2 px-16 ma-3 Bg-secondary">
              <a :href="linkedin">Linkedin</a></button
            ><button class="rounded-pill py-2 px-16 ma-3 Bg-secondary">
              <a :href="publicaciones">Mira aqui sus publicaciones</a>
            </button></span
          >
        </div>
      </div>
    </div>
    <div class="d-inlineflex d-md-none my-4 texto" v-if="mostrarTexto">
      <div>
        <p style="font-weight: 400; font-size: 14px; color: #f0f0f0">
          {{ descripcion }}
        </p>
        <span
          ><button class="rounded-pill py-2 px-2 ma-2 Bg-secondary">
            <a style="font-size: 14px" :href="linkedin">Linkedin</a></button
          ><button class="rounded-pill py-2 px-2 ma-2 Bg-secondary">
            <a style="font-size: 14px" :href="publicaciones"
              >Mira aqui sus publicaciones</a
            >
          </button></span
        >
      </div>
    </div>
    <v-divider class="my-6" inset></v-divider>
  </div>
</template>

<style scoped lang="scss">
.desplazamiento_on {
  margin-left: 15rem;
  transition: 0.6s;
}
.desplazamiento_of {
  transition: 0.6s;
}

@media (max-width: 414px) {
  .desplazamiento_on {
    margin-left: 0;
  }
}
.contorno {
  display: inline-block;
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 100%;
  overflow: hidden;
}

.contorno img {
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  border-radius: 100%;
  object-fit: cover;
}

.contorno::before,
.contorno::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
}

.contorno::before {
  border: 2px solid rgb(116, 116, 116);
  z-index: 1;
}

.new_contorno::before {
  border: 2px solid var(--var_secondary);
  z-index: 1;
  transition: 0.6s;
}
</style>
<script lang="js" setup>
import { ref } from 'vue';


const props = defineProps({
    img:String,
    nombre:String,
    carrera:String,
    descripcion:String,
    linkedin: String,
    publicaciones: String,
})

const mostrarTexto = ref(false);

const toggleTexto = () => {
  mostrarTexto.value = !mostrarTexto.value;
  }
</script>
