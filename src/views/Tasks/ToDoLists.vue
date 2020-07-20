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
            <div v-else>
              <v-card v-for="task in tasksList.tasks" :key="task.id">
                <v-card-title>{{ task.description }}</v-card-title>
                <v-row class="justify-end">
                  <v-checkbox
                    class="mx-2"
                    :label="'Zakończ zadanie'"
                    :inputValue="task.status"
                    @change="completeTask($event, task)">
                  </v-checkbox>
                  <v-btn @click="editTask(task.id)" class="mx-2" fab dark>
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                   <v-btn @click="deleteTask(task.id)" class="mx-2 mr-6" fab dark>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-row>
              </v-card>
            </div>
            <p class="mt-6">Dodaj zadanie</p>
            <v-btn @click="addTask(tasksList.id)" class="mb-6" fab dark>
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
import api from '@/api/toDoLists';
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

    const addTask = (id) => {
      ctx.root.$router.push({ name: 'NewTask', params: { id } });
    };

    const completeTask = async (status, task) => {
      try {
        await api.updateTask({ ...task, status }, task.toDoListId);
        getToDoLists();
      } catch (e) {
        toast.error('Coś poszło nie tak :(');
      }
    };

    const editTask = (id) => {
      ctx.root.$router.push({ name: 'EditTask', params: { id } });
    };

    const deleteTask = async (id) => {
      try {
        await api.deleteTask(id);
        getToDoLists();
      } catch (e) {
        toast.error('Coś poszło nie tak :(');
      }
    };

    return {
      toDoLists,
      createNewToDoList,
      addTask,
      completeTask,
      editTask,
      deleteTask,
    };
  },
};
</script>
