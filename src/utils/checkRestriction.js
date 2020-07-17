const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const checkRestriction = (restriction, inputValue) => {
  const [restrictionKey, restrictionValue] = restriction;
  switch (restrictionKey) {
    case 'required':
      return !!inputValue;
    case 'minLength':
      return inputValue.length > restrictionValue;
    case 'maxLength':
      return inputValue.length < restrictionValue;
    case 'isEmail':
      return inputValue && Boolean(inputValue.match(EMAIL_REGEX));
    case 'isEqual':
      return inputValue === restrictionValue.value[restrictionValue.key];
    case 'matchRegex':
      return inputValue && Boolean(inputValue.match(restrictionValue));
    default:
      return true;
  }
};
