import React, { useCallback, useEffect, useState } from 'react'
import { SurveyForm } from '../../components/SurveyForm/SurveyForm'
import './SurveyPage.css'
import { SurveyClient } from '../../api/SurveyClient/SurveyClient'
import { Answers, PayloadAnswers } from '../../types/types'
import { useNavigate } from 'react-router-dom'

export const SurveyPage = () => {
  const [surveyData, setSurveyData] = useState<Record<string, unknown> | any>()
  const surveyClient = new SurveyClient()
  const navigate = useNavigate()

  const getSurveyData = () => {
    surveyClient.getSurvey().then((res) => setSurveyData(res.data))
  }

  useEffect(() => {
    getSurveyData()
  }, [])

  const submitForm = useCallback(
    (answers: Answers) => {
      const data: PayloadAnswers = {
        data: {
          type: 'surveyAnswers',
          attributes: {
            answers: answers,
          },
        },
      }

      surveyClient.submitAnswers(surveyData.id, data).then(({ data, errors }) => {
        if (errors) {
          // TODO handle error
          return
        }

        navigate('/successful', { state: data })
      })
    },
    [surveyData],
  )

  return (
    <div className='container survey'>
      <div className='spaceBetween' />
      <div className='surveyContent'>
        <div className='empty'>
          <div className='survey-header'>
            <div className='survey-header-content'>
              <h3>{surveyData?.attributes.title}</h3>
              <div
                className='description'
                dangerouslySetInnerHTML={{ __html: surveyData?.attributes.description }}
              />
            </div>
          </div>
        </div>
        <SurveyForm questions={surveyData?.attributes.questions} handleSubmit={submitForm} />
      </div>
    </div>
  )
}
