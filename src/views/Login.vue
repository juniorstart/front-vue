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
      <v-checkbox
        v-model="isRememberMeChecked.value"
       :label="`Zapamiętaj mnie`">
      </v-checkbox>
      <v-btn primary :disabled="!isValid.value" @click="logIn">Zaloguj się</v-btn>
      <p class="mt-6 mb-2">Nie masz jeszcze konta?</p>
      <v-btn secondary>Załóż konto</v-btn>
    </v-form>
  </div>
</template>

<script>
import { useLoginForm } from '@/hooks/forms/useLoginForm';
import { useToast } from 'vue-toastification/composition';
import { reactive } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';

const { useActions } = createNamespacedHelpers('user');

export default {
  setup(props, ctx) {
    const { form, formSettings, isValid } = useLoginForm();

    const toast = useToast();

    const isRememberMeChecked = reactive({ value: false });

    const { signIn } = useActions(['signIn']);

    const logIn = async () => {
      try {
        const result = await signIn({ user: form, isRememberMeChecked });

        if (result) {
          ctx.root.$router.push({ name: 'Home' });
        }
      } catch (e) {
        toast.error('Coś poszło nie tak...');
      }
    };

    return {
      form,
      formSettings,
      logIn,
      isValid,
      isRememberMeChecked,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/views/form.scss";
</style>
