import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import Layout from '@/layout.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from 'pages/home.tsx';
import ProjectPage from 'pages/project.tsx';
import AboutPage from 'pages/about.tsx';
import { AppContextProvider } from 'components/context/app.context';
import './i18n';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/project',
        element: <ProjectPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>,
);
