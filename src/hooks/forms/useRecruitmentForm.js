import { reactive } from '@vue/composition-api';
import { createValidationRules } from '@/utils/createValidationRules';

const initialState = {
  companyName: '',
  city: '',
  workPlace: '',
  dateOfCompanyReply: new Date().toISOString().substr(0, 10),
  applicationDate: new Date().toISOString().substr(0, 10),
  companyReply: false,
  notes: '',
  linkToApplication: '',
};

export const useRecruitmentForm = (state = { ...initialState }) => {
  const form = reactive(state);

  const formSettings = {
    companyName: {
      label: 'Nazwa firmy',
      validations: { required: true, minLength: 3, maxLength: 50 },
    },
    city: {
      label: 'Miasto',
      validations: { required: true, minLength: 3, maxLength: 50 },
    },
    workPlace: {
      label: 'Miejsce pracy',
      validations: { required: true, minLength: 5, maxLength: 50 },
    },
    linkToApplication: {
      label: 'Link do ogłoszenia',
      validations: {},
    },
    notes: {
      label: 'Notatki',
      validations: {},
    },
    applicationDate: {
      label: 'Utworzono',
      validations: {
      },
    },
    companyReply: {
      label: 'Otrzymano odpowiedź',
      type: 'checkbox',
      validations: {},
    },
    dateOfCompanyReply: {
      label: 'Data odpowiedzi',
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
