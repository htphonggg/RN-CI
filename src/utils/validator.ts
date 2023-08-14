export const emailValidation = (value: string) => {
  const regex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  return regex.test(value);
};

export const passwordValidation = (value: string) => {
  const regex =
    /^(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{1,8}$/;
  return regex.test(value);
};
