export const ERRORS = {
  required: () => 'Pole nie może być puste',
  minLength: (length) => `Pole nie może być krótsze niz ${length} znaków`,
  maxLength: (length) => `Pole nie może być dłuższe niz ${length} znaków`,
  isEmail: () => 'Nieprawidłowy email',
  isEqual: () => 'Hasła nie są takie same',
  matchRegex: () => 'Pole nie spełnia wymagań',
  default: () => 'Coś się zepsuło',
};
