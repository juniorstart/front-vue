<template>
  <div>
    <h2 class="mb-5">Listy zadań</h2>

    <p class="mt-4 mb-6" v-if="!toDoLists.length">Nie masz jeszcze list zadań :(</p>

    <v-expansion-panels class="mt-4 mb-6" v-else>
      <v-expansion-panel
        v-for="tasksList in toDoLists"
        :key="tasksList.id"
      >
        <v-expansion-panel-header>{{ tasksList.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p v-if="!tasksList.tasks.length">Na tej liście nie ma jeszcze zadań :(</p>
            <p class="mt-6">Dodaj zadanie</p>
            <v-btn @click="addTask" class="mb-6" fab dark>
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <p class="mt-6 mx-2 mb-1">Dodaj nową listę zadań</p>
    <v-btn @click="createNewToDoList" class="mb-6" fab dark>
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
// import api from '@/api/toDoLists';
import { useToast } from 'vue-toastification/composition';

const { useActions, useState } = createNamespacedHelpers('toDoLists');

export default {
  setup(props, ctx) {
    const toast = useToast();

    const { getToDoLists } = useActions(['getToDoLists']);
    const { toDoLists } = useState(['toDoLists']);

    getToDoLists();

    const createNewToDoList = () => {
      ctx.root.$router.push({ name: 'NewToDoList' });
    };

    const addTask = () => {
      toast.error('Ta funkcja nie została jeszcze zaimplementowana :(');
    };

    return {
      toDoLists,
      createNewToDoList,
      addTask,
    };
  },
};
</script>
