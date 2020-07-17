import { createValidationRules } from '@/utils/createValidationRules';

const form = {
  login: {
    validations: { isRequired: true, minLength: 4, maxLength: 7 }
  }
}

describe('createValidationRules', () => {
  it('returns form with validation rules', () => {
    const { formWithValidation } = createValidationRules(form)
    expect(formWithValidation.login).toHaveProperty('rules');
  });

  it('converts validations to array of functions', () => {
    const { formWithValidation } = createValidationRules(form);

    expect(formWithValidation.login.rules).toHaveLength(3);
    formWithValidation.login.rules.every(rule => expect(rule).toBeInstanceOf(Function));
  });
});
