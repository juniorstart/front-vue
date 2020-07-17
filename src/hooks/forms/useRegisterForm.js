import { reactive } from '@vue/composition-api';
import { createValidationRules } from '@/utils/createValidationRules';

export const useRegisterForm = () => {
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    login: '',
    password: '',
    repeatedPassword: '',
  });

  const formSettings = {
    firstName: {
      label: 'Imię',
      validations: { required: true, minLength: 5, maxLength: 30 },
    },
    lastName: {
      label: 'Nazwisko',
      validations: { required: true, minLength: 5, maxLength: 30 },
    },
    email: {
      label: 'Email',
      validations: {
        required: true, minLength: 5, maxLength: 50, isEmail: true,
      },
    },
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
        required: true, minLength: 6, maxLength: 30, matchRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*/,
      },
    },
    repeatedPassword: {
      label: 'Powtórz hasło',
      type: 'password',
      validations: {
        required: true, minLength: 6, maxLength: 30, isEqual: { key: 'password', value: form },
      },
    },
  };

  const { formWithValidation } = createValidationRules(formSettings);

  const isValid = reactive({
    value: false,
  });

  const resetForm = () => {
    Object.keys(form).forEach((key) => {
      form[key] = '';
    });
  };

  return {
    form,
    formSettings: formWithValidation,
    resetForm,
    isValid,
  };
};
