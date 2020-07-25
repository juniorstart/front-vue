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

      <v-btn @click="logoutMe">
        <span>Wyloguj się</span>
        <v-icon class="mb-1">mdi-logout</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification/composition';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';

const { useActions } = createNamespacedHelpers('user');

export default {
  name: 'Home',
  setup(props, ctx) {
    const toast = useToast();

    const { logout } = useActions(['signIn']);

    const goToRoute = (name) => {
      const { $router, $route } = ctx.root;
      if ($route.name !== name) {
        $router.push({ name });
      }
    };

    const logoutMe = () => {
      logout();
      ctx.root.$router.push({ name: 'Login' });
      toast.success('Zostałeś wylogowany!');
    };

    return {
      goToRoute,
      logoutMe,
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
