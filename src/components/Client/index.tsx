import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientProps } from './interfaces';
import { deleteClient } from '../../data/clients';

const Client: FC<ClientProps> = props => {
  const navigate = useNavigate();

  const { client } = props;
  const { name, phone, enterprise, email, notes, id } = client;

  const handleDelete = async () => {
    if (!confirm('¿Estás seguro de eliminar este cliente?')) return;
    await deleteClient(id);
    navigate('/');
  };

  return (
    <tr className='border-b'>
      <td className='p-6 space-y-2'>
        <p className='text-2xl text-gray-800'>{name}</p>
        <p className='font-bold text-gray-600'>{enterprise}</p>
      </td>
      <td className='p-6'>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-bold'>Email: </span>
          {email}
        </p>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-bold'>Teléfono: </span>
          {phone}
        </p>
      </td>
      <td className='p-6'>
        <p className='text-gray-600 text-lg'>{notes || 'No hay notas aún.'}</p>
      </td>
      <td className='p-6 space-x-5'>
        <button
          className='text-blue-600 hover:text-blue-700 uppercase font-bold transition-colors'
          onClick={() => {
            navigate(`/clients/${id}/edit`);
          }}
        >
          Editar
        </button>
        <button
          className='text-red-600 hover:text-red-700 uppercase font-bold transition-colors'
          onClick={() => {
            void handleDelete();
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Client;
