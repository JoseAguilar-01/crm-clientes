import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import ClientForm from '../../components/ClientForm';
import clientFormValidation from '../../helpers/clientFormValidation';
import { getClientById, updateClient } from '../../data/clients';
import { FormData } from '../../_util/types';
import Error from '../../components/Error';

export async function editClientLoader({ params }: { params: any }) {
  const { id } = params;

  const clientData = await getClientById(id);

  return clientData;
}

export async function editClientAction(props: any) {
  const { request, params } = props;
  const { id } = params;

  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const formErrors = clientFormValidation(data as FormData);

  if (formErrors.length < 1) {
    const isUpdatedClient = await updateClient(data as FormData, id);

    return isUpdatedClient === true && redirect('/');
  }

  return formErrors;
}

const EditClient = () => {
  const clientData = useLoaderData() as FormData;
  const errors = useActionData() as string[];
  const navigate = useNavigate();

  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
          <p className='mt-3 text-lg'>Actualiza los datos de tu cliente.</p>
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
          <ClientForm client={clientData} />
          <input
            className='w-full mt-5 bg-blue-800 hover:bg-blue-900 transition-colors p-3 uppercase font-bold text-white text-lg rounded cursor-pointer'
            type='submit'
            value='Actualizar cliente'
          />
        </Form>
      </div>
    </div>
  );
};

export default EditClient;
