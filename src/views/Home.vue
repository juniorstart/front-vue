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

      <v-btn>
        <span>Listy tasków</span>
        <v-icon class="mb-1">mdi-iframe-outline</v-icon>
      </v-btn>

      <v-btn>
        <span>Wyloguj się</span>
        <v-icon class="mb-1">mdi-logout</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>

export default {
  name: 'Home',
  setup(props, ctx) {
    const goToRoute = (name) => {
      const { $router, $route } = ctx.root;
      if ($route.name !== name) {
        $router.push({ name });
      }
    };

    return {
      goToRoute,
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
