<template>
  <RecruitmentForm
    :form="form"
    :formSettings="formSettings"
    :isValid="isValid"
    buttonContent="Aktualizuj rekrutację"
    @update:form="updateForm"
    @update:validation="updateValidation"
    @execute-function="updateRecruitment"
    />
</template>

<script>
import { useRecruitmentForm } from '@/hooks/forms/useRecruitmentForm';
import RecruitmentForm from '@/views/Recruitments/Form.vue';
import { onMounted } from '@vue/composition-api';
import api from '@/api/recruitments';
import { useToast } from 'vue-toastification/composition';

export default {
  components: {
    RecruitmentForm,
  },
  setup(props, ctx) {
    const { id } = ctx.root.$route.params;
    let recruitment = null;
    const {
      form, formSettings, isValid, updateForm, updateValidation,
    } = useRecruitmentForm();

    const toast = useToast();

    const getRecruitment = async () => api.getRecruitment(id);

    onMounted(async () => {
      try {
        const { data } = await getRecruitment();
        recruitment = data;
        Object.keys(form).forEach((input) => {
          if (input === 'applicationDate' || input === 'dateOfCompanyReply') {
            const value = data[input].substr(0, 10);
            updateForm({ input, value });
          } else {
            updateForm({ input, value: recruitment[input] });
          }
        });
      } catch (e) {
        toast.error('Coś poszło nie tak :(');
        ctx.root.$router.push({ name: 'Home' });
      }
    });

    const updateRecruitment = async () => {
      try {
        await api.updateRecruitment(Number(id), { ...recruitment, ...form });
        ctx.root.$router.push({ name: 'Home' });
      } catch {
        toast.error('Coś poszło nie tak :(');
      }
    };

    return {
      form,
      formSettings,
      isValid,
      updateRecruitment,
      updateForm,
      updateValidation,
    };
  },
};
</script>
