<template>
  <div class="home">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <v-bottom-navigation>
      <v-btn @click="goToRoute('Home')">
        <span>Rekrutacje</span>
        <v-icon class="mb-1">mdi-calendar-multiple-check</v-icon>
      </v-btn>

      <v-btn @click="goToRoute('ToDoLists')">
        <span>Listy tasków</span>
        <v-icon class="mb-1">mdi-iframe-outline</v-icon>
      </v-btn>

      <v-btn @click="logout">
        <span>Wyloguj się</span>
        <v-icon class="mb-1">mdi-logout</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { removeToken } from '@/utils/removeToken';
import { useToast } from 'vue-toastification/composition';

export default {
  name: 'Home',
  setup(props, ctx) {
    const toast = useToast();

    const goToRoute = (name) => {
      const { $router, $route } = ctx.root;
      if ($route.name !== name) {
        $router.push({ name });
      }
    };

    const logout = () => {
      removeToken();
      ctx.root.$router.push({ name: 'Login' });
      toast.success('Zostałeś wylogowany!');
    };

    return {
      goToRoute,
      logout,
    };
  },
};
</script>

<style lang="scss">
@import "../styles/views/form.scss";

.home {
  text-align: center;
}
</style>
