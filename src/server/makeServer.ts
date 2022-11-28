import { createServer, Model, Registry } from 'miragejs'
import validationError from '../mockData/errorInSubmitingAnswer.json'
import surveyData from '../mockData/survey.json'
import { Server } from 'miragejs/server'
import { AnyFactories, ModelDefinition } from 'miragejs/-types'

const data = surveyData.data

export function createSurveyEndpoint(
  server: Server<Registry<{ survey: ModelDefinition }, AnyFactories>>,
) {
  return server.get('/survey', () => {
    return {
      data,
    }
  })
}

export function createSurveyPostEndpoint(
  server: Server<Registry<{ survey: ModelDefinition }, AnyFactories>>,
) {
  return server.post('/survey/:id/answers', (schema, request) => {
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
}

export function makeServer() {
  return createServer({
    models: {
      survey: Model,
    },
    routes() {
      this.namespace = 'api/v1'

      createSurveyEndpoint(this)
      createSurveyPostEndpoint(this)
    },
  })
}
