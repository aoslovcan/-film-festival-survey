import { ApiClient } from '../ApiClient/ApiClient'
import { constants } from '../../constants/constants'
import { PayloadAnswers } from '../../types/types'

export class SurveyClient extends ApiClient {
  getSurvey(): Promise<Record<string, unknown>> {
    const url = `${constants.BASE_URL}/survey`
    const data: Record<string, unknown> = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    return this.fetchApi(url, data)
  }

  submitAnswers(id: string, answers: PayloadAnswers): Promise<Record<string, unknown>> {
    const url = `${constants.BASE_URL}/survey/${id}/answers`
    const data: Record<string, unknown> = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answers),
    }

    return this.fetchApi(url, data)
  }
}
