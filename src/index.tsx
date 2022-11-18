import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Model, Server } from 'miragejs'
import  surveyData  from './mockData/survey.json';

const data = surveyData.data;

new Server({
  models: {
    todos : Model
  },

  routes(){
    this.namespace = 'api/v1';

    this.get('/survey', schema => {
      return {
        data
      }
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
