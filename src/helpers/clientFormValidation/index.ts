import { FormData } from '../../_util/types';

const clientFormValidation = (data: FormData) => {
  const errors = [];
  const values = Object.values(data);

  // eslint-disable-next-line prefer-regex-literals
  const emailRegex = new RegExp(
    // eslint-disable-next-line no-control-regex
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,5}$/im;

  if (values.includes('')) {
    errors.push('Todos los campos son obligatorios');
  }

  if (!emailRegex.test(data.email)) {
    errors.push('El email tiene un formato incorrecto');
  }

  if (!phoneRegex.test(data.phone)) {
    errors.push('El teléfono tiene un formato incorrecto');
  }

  return errors;
};

export default clientFormValidation;
