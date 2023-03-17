import { FC } from 'react';
import { ClientFormProps } from './interfaces';

const ClientForm: FC<ClientFormProps> = props => {
  const { client } = props;

  return (
    <>
      <div className='mb-4'>
        <label className='text-gray-800' htmlFor='name'>
          Nombre:
        </label>
        <input
          id='name'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Nombre del Cliente'
          name='name'
          defaultValue={client?.name}
        />
      </div>
      <div className='mb-4'>
        <label className='text-gray-800' htmlFor='enterprise'>
          Empresa:
        </label>
        <input
          id='enterprise'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Empresa del Cliente'
          name='enterprise'
          defaultValue={client?.enterprise}
        />
      </div>

      <div className='mb-4'>
        <label className='text-gray-800' htmlFor='email'>
          E-mail:
        </label>
        <input
          id='email'
          type='email'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Email del Cliente'
          name='email'
          defaultValue={client?.email}
        />
      </div>

      <div className='mb-4'>
        <label className='text-gray-800' htmlFor='phone'>
          Teléfono:
        </label>
        <input
          id='phone'
          type='tel'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Teléfono del Cliente'
          name='phone'
          defaultValue={client?.phone}
        />
      </div>

      <div className='mb-4'>
        <label className='text-gray-800' htmlFor='notes'>
          Notas:
        </label>
        <textarea
          id='notes'
          className='mt-2 block w-full p-3 bg-gray-50 h-40 align-self'
          placeholder='Notas del Cliente'
          name='notes'
          defaultValue={client?.notes}
        />
      </div>
    </>
  );
};

export default ClientForm;
