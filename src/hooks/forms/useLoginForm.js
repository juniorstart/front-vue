import { reactive } from '@vue/composition-api';
import { createValidationRules } from '@/utils/createValidationRules';

export const useLoginForm = () => {
  const form = reactive({
    login: '',
    password: '',
  });

  const formSettings = {
    login: {
      label: 'Login',
      validations: {
        required: true, minLength: 3, maxLength: 30, matchRegex: /^[a-zA-Z].*/,
      },
    },
    password: {
      label: 'Hasło',
      type: 'password',
      validations: {
        required: true, minLength: 6, maxLength: 30,
      },
    },
  };

  const { formWithValidation } = createValidationRules(formSettings);

  const isValid = reactive({
    value: false,
  });

  return {
    form,
    formSettings: formWithValidation,
    isValid,
  };
};
