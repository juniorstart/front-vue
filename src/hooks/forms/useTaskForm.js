import { reactive } from '@vue/composition-api';
import { createValidationRules } from '@/utils/createValidationRules';

const initialState = {
  description: '',
  status: false,
};

export const useTaskForm = (state = { ...initialState }) => {
  const form = reactive(state);

  const formSettings = {
    description: {
      label: 'Opis zadania',
      validations: { required: true, minLength: 3, maxLength: 50 },
    },
    status: {
      label: 'Status zadania',
      validations: {},
    },
  };

  const { formWithValidation } = createValidationRules(formSettings);

  const isValid = reactive({
    value: false,
  });

  const updateForm = (event) => {
    const { input, value } = event;
    form[input] = value;
  };

  const updateValidation = (value) => {
    isValid.value = value;
  };

  const resetForm = () => {
    Object.keys(form).forEach((key) => {
      form[key] = initialState.key;
    });
  };

  return {
    form,
    formSettings: formWithValidation,
    resetForm,
    isValid,
    updateForm,
    updateValidation,
  };
};
