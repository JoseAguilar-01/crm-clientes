import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import NewClient, { newClientAction } from './pages/NewClient';
import RootLayout from './layout/RootLayout';
import './styles/index.css';
import Clients, { clientsLoader } from './pages/Clients';
import Error from './pages/Error';
import EditClient, {
  editClientAction,
  editClientLoader,
} from './pages/EditClient';

const element = document.getElementById('root');
const root = createRoot(element as Element);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Clients />,
        loader: clientsLoader,
        errorElement: <Error />,
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <Error />,
      },
      {
        path: '/clients/:id/edit',
        element: <EditClient />,
        errorElement: <Error />,
        loader: editClientLoader,
        action: editClientAction,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
