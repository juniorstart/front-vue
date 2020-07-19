<template>
  <v-form
    class="form-width"
    @input="updateValidation"
    :value="isValid.value"
  >
    <v-text-field
      v-for="input of TEXT_INPUTS"
      :key="formSettings[input].label"
      outlined
      :label="formSettings[input].label"
      :rules="formSettings[input].rules"
      :type="formSettings[input].type || 'text'"
      :value="form[input]"
      @input="handleChange($event, input)"
    />
    <p>{{ formSettings.applicationDate.label }}</p>
    <v-date-picker
      first-day-of-week="1"
      locale="pl"
      :value="form.applicationDate"
      @input="handleChange($event, 'applicationDate')"
    />
    <v-checkbox
      :label="formSettings.companyReply.label"
      :value="form.companyReply"
      @change="handleChange($event, 'companyReply')">
    </v-checkbox>
    <transition name="slide-fade">
      <v-date-picker
        v-if="form.companyReply"
        first-day-of-week="1"
        locale="pl"
        :value="form.dateOfCompanyReply"
        @input="handleChange($event, 'dateOfCompanyReply')"
      />
    </transition>
    <br/>
    <v-btn
      class="my-6"
      primary
      :disabled="!isValid.value"
      @click="$emit('execute-function')"
    >
      {{ buttonContent }}
    </v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      required: true,
    },
    formSettings: {
      type: Object,
      required: true,
    },
    isValid: {
      type: Object,
      required: true,
    },
    buttonContent: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    const TEXT_INPUTS = ['companyName', 'city', 'workPlace', 'linkToApplication', 'notes'];

    const handleChange = (value, input) => {
      ctx.emit('update:form', { input, value });
    };

    const updateValidation = (value) => {
      ctx.emit('update:validation', value);
    };

    return {
      TEXT_INPUTS,
      handleChange,
      updateValidation,
    };
  },
};
</script>

<style lang="scss">
@import "../../styles/views/form.scss";
</style>
