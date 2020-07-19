import { reactive } from '@vue/composition-api';
import { createValidationRules } from '@/utils/createValidationRules';

export const useToDoListsForm = () => {
  const form = reactive({
    name: '',
  });

  const formSettings = {
    name: {
      label: 'Nazwa listy',
      validations: {
        required: true, minLength: 3, maxLength: 30,
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
