<template>
  <v-form
    class="form-width"
    @input="updateValidation"
    :value="isValid.value"
  >
    <v-text-field
      outlined
      :label="formSettings.description.label"
      :rules="formSettings.description.rules"
      :type="formSettings.description.type || 'text'"
      :value="form.description"
      @input="handleChange($event, 'description')"
    />
    <v-checkbox
      :label="formSettings.status.label"
      :value="form.status"
      @change="handleChange($event, 'status')">
    </v-checkbox>
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
    const handleChange = (value, input) => {
      ctx.emit('update:form', { input, value });
    };

    const updateValidation = (value) => {
      ctx.emit('update:validation', value);
    };

    return {
      handleChange,
      updateValidation,
    };
  },
};
</script>

<style lang="scss">
@import "../../styles/views/form.scss";
</style>
