const EMAIL_ERROR_MESSAGE = 'Insira um e-mail válido';
const PASSWORD_ERROR_MESSAGE = 'A senha deve ter mais de 6 caracteres';

const PASSWORD_MINIMUM_LENGTH = 6;

const validateEmail = (email) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValidEmail = emailRegex.test(email);
  return {
    error: !isValidEmail,
    message: !isValidEmail && EMAIL_ERROR_MESSAGE };
};

const validatePassword = (password) => {
  const isValidPassword = password.length >= PASSWORD_MINIMUM_LENGTH;
  return {
    error: !isValidPassword,
    message: !isValidPassword && PASSWORD_ERROR_MESSAGE };
};

export { validatePassword, validateEmail };