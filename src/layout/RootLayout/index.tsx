import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-blue-800 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>
          CRM - Clientes
        </h2>

        <nav className='mt-5'>
          <NavLink
            className={({ isActive }) =>
              classNames(
                'text-xl mt-2 hover:text-blue-300 block transition-colors',
                isActive ? 'text-blue-300' : 'text-white'
              )
            }
            to='/'
          >
            Clientes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              classNames(
                'text-xl mt-2 hover:text-blue-300 block transition-colors',
                isActive ? 'text-blue-300' : 'text-white'
              )
            }
            to='/clients/new'
          >
            Nuevo Cliente
          </NavLink>
        </nav>
      </aside>
      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
