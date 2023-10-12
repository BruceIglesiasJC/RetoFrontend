<template>
  <nav class="Bg-primary">
    <v-container>
      <v-row class="py-2">
        <v-col class="d-flex align-center justify-space-between">
          <img src="../assets/img/logo.png" height="45" />
          <ul class="d-none d-md-flex">
            <v-chip variant="text" class="mx-2"
              ><a href="#inicio">Inicio</a></v-chip
            >
            <v-chip variant="text" class="mx-2"
              ><a class="d-flex align-center" href="#cursos"
                >Cursos <Icon icon="fe:arrow-down" /></a
            ></v-chip>
            <v-chip variant="text" class="mx-2"
              ><a href="#nosotros">Sobre nosotros</a></v-chip
            >
          </ul>
          <div v-show="toggled">
            <ul
              class="menu_desplegable Bg-primary justify-center text-center py-10"
            >
              <li variant="text" class="my-6"><a href="#inicio">Inicio</a></li>
              <li variant="text" class="my-6">
                <a class="" href="#cursos"
                  >Cursos <Icon icon="fe:arrow-down"
                /></a>
              </li>
              <li variant="text" class="my-6">
                <a href="#nosotros">Sobre nosotros</a>
              </li>
            </ul>
          </div>
          <button @click="toggled = !toggled" class="d-flex d-md-none">
            <div class="menu-burguer" :class="{ open: toggled }">
              <div class="menu-line"></div>
              <div class="menu-line"></div>
              <div class="menu-line"></div>
            </div>
          </button>
        </v-col>
      </v-row>
    </v-container>
  </nav>
</template>

<style scoped lang="scss">
.v-chip:hover {
  background-color: var(--var_secondary) !important;
}
.menu_desplegable {
  position: absolute;
  z-index: 20;
  top: 90px;
  left: 0;
  width: 100%;
}
.menu {
  position: absolute;
  z-index: 100;
  top: 4rem;
  left: 0rem;
  width: 100vw;
  display: flex !important;
}

.menu-burguer {
  width: 35px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.menu-line {
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 250ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.menu-line:first-child {
  animation: firstLinetoClose 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
}

.open .menu-line:first-child {
  animation: firstLinetoOpen 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
  animation-fill-mode: forwards;
}

@keyframes firstLinetoOpen {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(12px);
  }

  100% {
    transform: translateY(13px) rotate(45deg);
  }
}

@keyframes firstLinetoClose {
  0% {
    transform: translateY(17px) rotate(0);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes lastLinetoOpen {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }

  100% {
    transform: translateY(-10px) rotate(-45deg);
  }
}

@keyframes lastLinetoClose {
  0% {
    transform: translateY(-17px) rotate(0);
  }

  100% {
    transform: translateY(0);
  }
}

.open .menu-line:nth-child(2) {
  opacity: 0;
}

.menu-line:last-child {
  animation: lastLinetoClose 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
}

.open .menu-line:last-child {
  animation: lastLinetoOpen 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
  animation-fill-mode: forwards;
}
.v-chip:hover {
  background-color: red;
}
</style>

<script setup lang="js">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const toggled = ref(false);
</script>
