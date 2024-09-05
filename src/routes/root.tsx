import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NotificationPage from '../pages/NotificationPage';
import ResultPage from '../pages/ResultPage';
import { MainLayout } from '../layouts/MainLayout';
import AboutPage from '../pages/AboutPage';

export const root = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/how-to', element: <NotificationPage /> },
      { path: '/result', element: <ResultPage /> },
      { path: '/about', element: <AboutPage /> },
    ],
  },
]);
