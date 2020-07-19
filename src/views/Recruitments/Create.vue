<template>
  <RecruitmentForm
    :form="form"
    :formSettings="formSettings"
    :isValid="isValid"
    buttonContent="Dodaj rekrutację"
    @update:form="updateForm"
    @update:validation="updateValidation"
    @execute-function="addRecruitment"
    />
</template>

<script>
import { useRecruitmentForm } from '@/hooks/forms/useRecruitmentForm';
import RecruitmentForm from '@/views/Recruitments/Form.vue';
import api from '@/api/recruitments';
import { useToast } from 'vue-toastification/composition';

export default {
  components: {
    RecruitmentForm,
  },
  setup(props, ctx) {
    const {
      form, formSettings, isValid, updateForm, updateValidation,
    } = useRecruitmentForm();

    const toast = useToast();

    const addRecruitment = async () => {
      try {
        await api.createRecruitment(form);
        toast.success('Rekrutacja została utworzona!');
        ctx.root.$router.push({ name: 'Home' });
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
