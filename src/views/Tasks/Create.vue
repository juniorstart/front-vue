<template>
    <v-form
      v-model="isValid.value"
      class="form-width"
    >
      <v-text-field
        v-for="input of Object.keys(form)"
        :key="formSettings[input].label"
        outlined
        :label="formSettings[input].label"
        :rules="formSettings[input].rules"
        :type="formSettings[input].type || 'text'"
        v-model="form[input]"
      />
      <v-btn
        class="mb-6"
        primary
        :disabled="!isValid.value"
        @click="createToDoList"
      >
        Utwórz listę zadań
      </v-btn>
    </v-form>
</template>

<script>
import { useToDoListsForm } from '@/hooks/forms/useToDoListsForm';
import api from '@/api/toDoLists';
import { useToast } from 'vue-toastification/composition';

export default {
  setup(props, ctx) {
    const {
      form, formSettings, isValid,
    } = useToDoListsForm();

    const toast = useToast();

    const createToDoList = async () => {
      try {
        await api.createToDoList(form);

        toast.success('Rekrutacja została utworzona!');
        ctx.root.$router.push({ name: 'ToDoLists' });
      } catch (e) {
        toast.error('Coś poszło nie tak :(');
      }
    };

    return {
      form,
      formSettings,
      isValid,
      createToDoList,
    };
  },
};
</script>
