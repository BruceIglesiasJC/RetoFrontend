<template>
  <section id="cursos" class="Bg-tertiary text-white">
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center">
          <div style="width: fit-content">
            <h2 class="text-center title">Cursos que incluye el programa</h2>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="py-10">
          <v-sheet
            style="background-color: #1c1c24; border: 1px solid gray"
            :min-height="80"
            :max-width="560"
            class="card_one rounded-pill my-5 text-white d-flex align-center"
            v-for="(items, index) of cursos"
            :key="index"
          >
            <div class="d-flex mx-5">
              <Icon height="50" icon="bi:diamond-fill" class="Secondary icon" />
              <h3 class="number-overlay">{{ index + 1 }}</h3>
            </div>
            <div class="text-start">
              <h4 style="font-size: 16px; font-weight: 600">
                {{ items.curso }}
              </h4>
              <p class="py-1" style="font-size: 14px; font-weight: 400">
                ({{ items.duracion }})
              </p>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-start align-center">
          <v-sheet
            :min-height="400"
            :width="600"
            :min-width="250"
            class="card_two position_one rounded-xl Bg-secondary my-5 pa-6 Primary"
          >
            <div>
              <h3 style="font-weight: 800; font-size: 20px">Inversión</h3>
              <h4 style="font-weight: 700; font-size: 16px">
                $190 (Perú: S/420)
              </h4>
              <p style="font-weight: 400; font-size: 13px">
                ¡Pregunta por nuestros descuentos!
              </p>
              <button
                class="card_button rounded-pill my-3 py-2 Secondary d-flex align-center justify-center"
              >
                <Icon
                  height="15"
                  class="mx-3"
                  icon="simple-line-icons:basket"
                />
                Comienza ahora
              </button>
            </div>
            <v-divider class="my-6"></v-divider>
            <div>
              <p>Si tienes dudas o necesitas más información, contáctanos:</p>
              <button
                class="card_button rounded-pill my-3 py-2 px-16 Secondary d-flex align-center justify-center"
              >
                <Icon height="15" class="mx-3" icon="ic:baseline-whatsapp" />Ir
                a Whatsapp (+51 990 888 777)
              </button>
              <button
                class="card_button rounded-pill my-3 py-2 px-16 Secondary d-flex align-center justify-center"
              >
                <Icon height="15" class="mx-3" icon="ph:question" />Ir a
                Preguntas frecuentes
              </button>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
.card_button {
  background-color: white;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
}

.card_button:hover {
  background-color: transparent;
  border: 1px solid white;
  color: white !important;
}

.icon {
  position: relative;
  z-index: 1;
}
.number-overlay {
  position: absolute;
  z-index: 5;
  padding: 14px 19px;
}
</style>
<script lang="js" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const cursos = ref([
  {
    curso:"Fundamentos de Conservación Ambiental",
    duracion:"2 semanas"
  },
  {
    curso:"Energía Renovable: Fuentes y Aplicaciones",
    duracion:"2 semanas"
  },
  {
    curso:"Ecoturismo Responsable y Conservación",
    duracion:"3 semanas"
  },
  {
    curso:"Manejo Sostenible de Bosque",
    duracion:"5 semanas"
  }
])
</script>
