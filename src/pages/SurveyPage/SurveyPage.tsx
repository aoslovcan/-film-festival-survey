import React, { useEffect, useState } from 'react'
import { SurveyForm } from '../../components/SurveyForm/SurveyForm'
import './SurveyPage.css'
import { SurveyClient } from '../../api/SurveyClient/SurveyClient'

export const SurveyPage = () => {
  const [surveyData, setSurveyData] = useState<Record<string, unknown> | any>()
  const surveyClient = new SurveyClient()

  const getSurveyData = () => {
    surveyClient.getSurvey().then((res) => setSurveyData(res.data))
  }

  useEffect(() => {
    getSurveyData()
  }, [])

  const description = surveyData?.attributes.description

  return (
    <div className='container'>
      <div className='survey-header'>
        <h3>{surveyData?.attributes.title}</h3>
        {description}
      </div>
      <SurveyForm questions={surveyData?.attributes.questions} />
    </div>
  )
}
