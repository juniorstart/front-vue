<template>
  <div>
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
      <v-btn :disabled="!isValid.value" @click="register">Załóż konto</v-btn>
    </v-form>
  </div>
</template>

<script>
import { useRegisterForm } from '@/hooks/forms/useRegisterForm';
import api from '@/api/auth';
import { useToast } from 'vue-toastification/composition';

export default {
  setup(props, ctx) {
    const {
      form, formSettings, resetForm, isValid,
    } = useRegisterForm();

    const toast = useToast();

    const register = async () => {
      const { repeatedPassword, ...user } = form;

      try {
        await api.register(user);
        toast.success('Konto zostało utworzone. Zaloguj się!');
        ctx.root.$router.push({ name: 'Login' });
      } catch (e) {
        resetForm();
        toast.error('Coś poszło nie tak...');
      }
    };

    return {
      form,
      formSettings,
      register,
      isValid,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/views/form.scss";
</style>
