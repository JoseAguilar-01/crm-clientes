import { useRouteError } from 'react-router-dom';
import { ErrorData } from './interfaces';

const Error = () => {
  const error = useRouteError() as ErrorData;

  return (
    <div className='space-y-8'>
      <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-900'>
        Error
      </h1>
      <p className='text-center text-lg'>Hubo un error</p>
      <p className='text-center text-lg'>{error.message}</p>
    </div>
  );
};

export default Error;
