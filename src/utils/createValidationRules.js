import { checkRestriction } from '@/utils/checkRestriction';
import { ERRORS } from '@/constants/errors';

export const createValidationRules = (form) => {
  const validateField = (fieldName) => {
    const restrictions = form[fieldName].validations;
    return Object.entries(restrictions)
      .map((res) => (value) => checkRestriction(res, value) || ERRORS[res[0]](res[1]));
  };

  const formWithValidation = Object.keys(form).reduce((map, field) => ({
    ...map,
    [field]: {
      ...form[field],
      rules: validateField(field),
    },
  }), {});

  return {
    formWithValidation,
  };
};
