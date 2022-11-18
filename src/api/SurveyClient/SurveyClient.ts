import { ApiClient } from '../ApiClient/ApiClient'
import { constants } from '../../constants/constants'

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
}
