import { useLoaderData } from 'react-router-dom';
import { ClientProperties } from './interfaces';
import Client from '../../components/Client';
import { getClients } from '../../data/clients';

export const clientsLoader = async () => {
  const clientsData = await getClients();

  return clientsData;
};

const Clients = () => {
  const clients = useLoaderData() as ClientProperties[];

  return (
    <>
      <h1 className='font-black text-4xl text-blue-800'>Clientes</h1>
      <p className='mt-3 text-lg'>Administra tus clientes</p>
      {clients?.length > 1 ? (
        <table className='w-full bg-white mt-5 table-auto'>
          <thead className='bg-blue-800 text-white text-center'>
            <tr>
              <th className='p-2'>Cliente</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Notas</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {clients?.map(client => (
              <Client client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay Clientes aún</p>
      )}
    </>
  );
};

export default Clients;
