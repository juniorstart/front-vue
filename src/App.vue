<template>
  <v-app>
    <button @click="changeJuniorStart" class="text-green" :class="{ 'text-red' : isJuniorStart }">Junior{{ content }}</button>
    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import { useJuniorStop } from './hooks/useJuniorStop';
import { computed } from '@vue/composition-api';

export default {
  name: 'App',
  components: {
  },
  setup() {
    const { isJuniorStart, changeJuniorStart } = useJuniorStop();
    const content = computed(() => isJuniorStart.value ? 'START' : 'STOP' )
    return {
      isJuniorStart, changeJuniorStart, content
    }
  }
};
</script>

<style lang="scss">
@import "./styles/_base.scss";

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
