import { createBrowserRouter, Navigate } from 'react-router-dom'
import { SurveyPage } from '../pages/SurveyPage/SurveyPage'
import { SuccessPage } from '../pages/SuccessPage/SuccessPage'
import React from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/survey' />,
  },

  {
    path: '/survey',
    element: <SurveyPage />,
  },

  {
    path: '/successful',
    element: <SuccessPage />,
  },
])
