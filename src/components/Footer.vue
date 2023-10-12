<template>
  <footer class="Bg-primary text-white py-6">
    <v-container>
      <v-row justify="center" class="py-2 d-flex d-md-none">
        <v-col cols="6" md="3">
          <img src="../assets/img/logo.png" height="80" />
        </v-col>
        <v-col cols="6" md="3">
          <h3>Contacto</h3>
          <li class="py-2"><a>ejemploabc@gmail.com</a></li>
          <li class="py-2"><a>+51 78945646</a></li>
        </v-col>
        <v-divider class="my-6"></v-divider>
        <v-col cols="12" md="3" class="d-flex justify-center">
          <div>
            <h3 class="pb-2 text-center">Siguenos en nuestras redes</h3>
            <span class="mx-5" v-for="icon of iconos"
              ><Icon class="icon_hover" height="30" :icon="icon"
            /></span>
          </div>
        </v-col>
        <v-divider class="my-6"></v-divider>
        <v-col cols="12" md="3" class="text-center">
          <li style="font-size: 17px" class="py-2">
            <a class="Secondary">Preguntas Frecuentes</a>
          </li>
          <li style="font-size: 17px" class="py-2">
            <a class="Secondary">Acerca de Nosotros</a>
          </li>
          <li style="font-size: 17px" class="py-2">
            <a class="Secondary">Trabaja con Nosotros</a>
          </li>
        </v-col>
      </v-row>
      <v-row justify="center" class="py-2 d-none d-md-flex">
        <v-col cols="6" md="3">
          <img src="../assets/img/logo.png" height="80" />
        </v-col>
        <v-col cols="12" md="3">
          <h3>Navega</h3>
          <li class="py-2"><a>Preguntas Frecuentes</a></li>
          <li class="py-2"><a>Acerca de Nosotros</a></li>
          <li class="py-2"><a>Trabaja con Nosotros</a></li>
        </v-col>
        <v-col cols="12" md="3">
          <h3>Contacto</h3>
          <li class="py-2"><a>ejemploabc@gmail.com</a></li>
          <li class="py-2"><a>+51 78945646</a></li>
        </v-col>
        <v-col cols="12" md="3">
          <h3 class="pb-2">Siguenos en nuestras redes</h3>
          <span class="mx-2" v-for="icon of iconos"
            ><Icon class="icon_hover" height="30" :icon="icon"
          /></span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-end">
          <p style="font-size: 13px">
            Términos y condiciones | © 2023 nombredelaempresa - All Rights
            Reserved
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
h3 {
  font-size: 20px;
  font-weight: 700;
}
</style>
<script lang="js" setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue';


const iconos = ref([
  "fe:facebook",
  "mdi:instagram",
  "mdi:youtube",
  "ri:linkedin-fill",
  "ph:tiktok-logo",
  "mdi:whatsapp"
])
</script>
