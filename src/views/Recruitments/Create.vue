<template>
  <v-form
    v-model="isValid.value"
    class="form-width"
  >
    <v-text-field
      v-for="input of TEXT_INPUTS"
      :key="formSettings[input].label"
      outlined
      :label="formSettings[input].label"
      :rules="formSettings[input].rules"
      :type="formSettings[input].type || 'text'"
      v-model="form[input]"
    />
    <p>{{ formSettings.applicationDate.label }}</p>
    <v-date-picker
      v-model="form.applicationDate"
      first-day-of-week="1"
      locale="pl"
    />
    <v-checkbox
      v-model="form.companyReply"
      :label="formSettings.companyReply.label">
    </v-checkbox>
    <transition name="slide-fade">
      <v-date-picker
        v-if="form.companyReply"
        v-model="form.dateOfCompanyReply"
        first-day-of-week="1"
        locale="pl"
      />
    </transition>
    <br/>
    <v-btn
      class="my-6"
      primary
      :disabled="!isValid.value"
      @click="addRecruitment"
    >
      Dodaj rekrutacje
    </v-btn>
  </v-form>
</template>

<script>
import { useRecruitmentForm } from '@/hooks/forms/useRecruitmentForm';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';

const { useActions } = createNamespacedHelpers('recruitments');

export default {
  setup(props, ctx) {
    const { form, formSettings, isValid } = useRecruitmentForm();

    const TEXT_INPUTS = ['companyName', 'city', 'workPlace', 'linkToApplication', 'notes'];

    const { createRecruitment } = useActions(['createRecruitment']);

    const addRecruitment = async () => {
      await createRecruitment(form);
      ctx.root.$router.push({ name: 'Home' });
    };

    return {
      form,
      formSettings,
      isValid,
      TEXT_INPUTS,
      addRecruitment,
    };
  },
};
</script>

<style lang="scss">
@import "../../styles/views/form.scss";
</style>
