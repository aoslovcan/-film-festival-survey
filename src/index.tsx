import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router'
import { makeServer } from './server/makeServer'

makeServer()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  // TODO fix this
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <RouterProvider router={router} />,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
