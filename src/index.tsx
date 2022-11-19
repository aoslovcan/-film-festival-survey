import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Model, Server } from 'miragejs'
import surveyData from './mockData/survey.json'
import validationError from './mockData/errorInSubmitingAnswer.json'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router'

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

    this.post('/survey/:id/answers', (schema, request) => {
      const answers = JSON.parse(request.requestBody)

      const valid = answers?.data?.attributes?.answers.every(
        (answer: { answer: string | number }) => {
          if (typeof answer.answer === 'string' && answer.answer !== '') {
            return true
          }
          return !!(typeof answer.answer === 'number' && answer.answer)
        },
      )

      return valid ? answers : validationError
    })
  },
})

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
