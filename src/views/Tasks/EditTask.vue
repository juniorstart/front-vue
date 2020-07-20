<template>
  <TaskForm
    :form="form"
    :formSettings="formSettings"
    :isValid="isValid"
    buttonContent="Aktualizuj zadanie"
    @update:form="updateForm"
    @update:validation="updateValidation"
    @execute-function="updateTask"
    />
</template>

<script>
import { useTaskForm } from '@/hooks/forms/useTaskForm';
import TaskForm from '@/views/Tasks/TaskForm.vue';
import api from '@/api/toDoLists';
import { useToast } from 'vue-toastification/composition';
import { onMounted } from '@vue/composition-api';

export default {
  components: {
    TaskForm,
  },
  setup(props, ctx) {
    const { id } = ctx.root.$route.params;
    let task = null;

    const {
      form, formSettings, isValid, updateForm, updateValidation,
    } = useTaskForm();

    const toast = useToast();

    const getTask = async () => api.getTask(id);

    onMounted(async () => {
      try {
        const { data } = await getTask();
        task = data;
        Object.keys(form).forEach((input) => {
          updateForm({ input, value: task[input] });
        });
      } catch (e) {
        toast.error('Coś poszło nie tak :(');
        ctx.root.$router.push({ name: 'ToDoLists' });
      }
    });

    const updateTask = async () => {
      try {
        await api.updateTask({ ...task, ...form });
        toast.success('Zadanie zostało zaktualizowane!');
        ctx.root.$router.push({ name: 'ToDoLists' });
      } catch (e) {
        toast.error('Coś poszło nie tak :(');
      }
    };

    return {
      form,
      formSettings,
      isValid,
      updateTask,
      updateForm,
      updateValidation,
    };
  },
};
</script>
