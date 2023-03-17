import { Form, redirect, useActionData, useNavigate } from 'react-router-dom';
import ClientForm from '../../components/ClientForm';
import Error from '../../components/Error';
import { createClient } from '../../data/clients';
import clientFormValidation from '../../helpers/clientFormValidation';
import { FormData } from '../../_util/types';

export async function newClientAction(props: any) {
  const { request } = props;

  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const formErrors = clientFormValidation(data as FormData);

  if (formErrors.length < 1) {
    const isCreatedClient = await createClient(data as FormData);

    return isCreatedClient === true && redirect('/');
  }

  return formErrors;
}

const NewClient = () => {
  const navigate = useNavigate();
  const errors = useActionData() as string[];

  return (
    <>
      <div className='flex justify-between '>
        <div>
          <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
          <p className='mt-3 text-lg'>
            LLena todos los campos para registrar un nuevo cliente
          </p>
        </div>

        <div>
          <button
            className='bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded text-xs'
            onClick={() => {
              navigate(-1);
            }}
          >
            Volver
          </button>
        </div>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10'>
        <Form method='post' noValidate>
          {errors?.length > 0 &&
            errors?.map((error, i) => (
              <Error key={`error-${i}`}>{error}</Error>
            ))}
          <ClientForm />
          <input
            className='w-full mt-5 bg-blue-800 hover:bg-blue-900 transition-colors p-3 uppercase font-bold text-white text-lg rounded cursor-pointer'
            type='submit'
            value='Registrar cliente'
          />
        </Form>
      </div>
    </>
  );
};

export default NewClient;
