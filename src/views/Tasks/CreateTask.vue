<template>
  <TaskForm
    :form="form"
    :formSettings="formSettings"
    :isValid="isValid"
    buttonContent="Dodaj zadanie"
    @update:form="updateForm"
    @update:validation="updateValidation"
    @execute-function="addRecruitment"
    />
</template>

<script>
import { useTaskForm } from '@/hooks/forms/useTaskForm';
import TaskForm from '@/views/Tasks/TaskForm.vue';
import api from '@/api/toDoLists';
import { useToast } from 'vue-toastification/composition';

export default {
  components: {
    TaskForm,
  },
  setup(props, ctx) {
    const {
      form, formSettings, isValid, updateForm, updateValidation,
    } = useTaskForm();

    const toast = useToast();

    const { id } = ctx.root.$route.params;

    const addRecruitment = async () => {
      try {
        await api.createTask(form, id);
        toast.success('Zadanie zostało utworzone!');
        ctx.root.$router.push({ name: 'ToDoLists' });
      } catch (e) {
        toast.error('Coś poszło nie tak :(');
      }
    };

    return {
      form,
      formSettings,
      isValid,
      addRecruitment,
      updateForm,
      updateValidation,
    };
  },
};
</script>
