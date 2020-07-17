<template>
  <v-app>
    <button
      @click="changeJuniorStart"
      class="text-green"
      :class="{ 'text-red' : isJuniorStart }"
    >
      Junior{{ juniorContent }}
    </button>
    <v-main>
      <transition name="slide-fade">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import { computed } from '@vue/composition-api';
import { provideToast } from 'vue-toastification/composition';
import { useJuniorStop } from './hooks/useJuniorStop';

export default {
  name: 'App',
  components: {
  },
  setup() {
    provideToast({ timeout: 3000 });

    const { isJuniorStart, changeJuniorStart } = useJuniorStop();
    const juniorContent = computed(() => (isJuniorStart.value ? 'START' : 'STOP'));

    return {
      isJuniorStart, changeJuniorStart, juniorContent,
    };
  },
};
</script>

<style lang="scss">
@import "./styles/_base.scss";
@import "./styles/_transition.scss";

.text-green {
  color: #4CAF50;
  text-transform: capitalize;
  transition: color 0.3s ease-in-out;
  outline: none;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 2.5rem auto;
}

.text-red {
  color: #F44336;
}
</style>
