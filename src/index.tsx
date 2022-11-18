import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Model, Server } from 'miragejs'
import surveyData from './mockData/survey.json'
import { SurveyPage } from './pages/SurveyPage/SurveyPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SuccessPage } from './pages/SuccessPage/SuccessPage'

const data = surveyData.data

new Server({
  models: {
    todos: Model,
  },

  routes() {
    this.namespace = 'api/v1'

    this.get('/survey', () => {
      return {
        data,
      }
    })
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <SurveyPage />,
  },

  {
    path: '/successful',
    element: <SuccessPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  // TODO fix this
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <RouterProvider router={router}/>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
