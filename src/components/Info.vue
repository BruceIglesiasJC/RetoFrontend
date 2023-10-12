<template>
  <section id="info" class="Bg-tertiary text-white">
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center">
          <p class="d-flex text-center">
            Estamos impulsados por la firme creencia de que cada uno de nosotros
            puede marcar la diferencia y contribuir a un mundo más sostenible.
          </p>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col class="py-10 d-none d-md-flex justify-center">
          <v-sheet
            color="transparent"
            :elevation="17"
            :min-height="100"
            :width="900"
            class="d-flex justify-space-around align-center rounded-pill"
          >
            <div v-for="{ numero, title } of Info">
              <div class="text-center">
                <h4 class="font-weight-black Secondary">
                  {{ numero }}
                </h4>
                <h5 class="font-weight-regular">{{ title }}</h5>
              </div>
            </div>
          </v-sheet>
        </v-col>
        <v-col class="py-10 d-flex d-md-none justify-center">
          <v-sheet
            v-for="{ numero, title } of Info"
            :elevation="17"
            :min-height="120"
            :width="200"
            class="d-flex Bg-primary ma-2 justify-space-around align-center rounded-xl"
          >
            <div class="text-center">
              <h1 class="text-h4 font-weight-black Secondary">
                {{ numero }}
              </h1>
              <h5 class="font-weight-regular text-white">{{ title }}</h5>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped lang="scss"></style>
<script lang="js" setup>
import { ref } from 'vue';
const Info = [
  {
    numero:25,
    title:'Cursos Online',
  },
  {
    numero:14,
    title:'Programas de formación',
  },
  {
    numero:12,
    title:'Alianzas',
  }
]
</script>
