import React from 'react'
import { SurveyPage } from './SurveyPage'
import { render, screen, waitFor } from '@testing-library/react'
import { RouterProvider } from 'react-router'
import { router } from '../../routes/Routes'
import { SurveyClient } from '../../api/SurveyClient/SurveyClient'

const surveyData = {
  data: {
    attributes: {
      description:
        '<p>Thank you for participating in the film festival!</p><p>Please fill out this short survey so we can record your feedback.</p>',
      questions: [
        {
          attributes: null,
          label: 'What film did you watch?',
          questionId: 'film',
          questionType: 'text',
          required: true,
        },
        {
          attributes: {
            max: 5,
            min: 1,
          },
          label: 'How would you rate the film? (1 - Very bad, 5 - Very good)',
          questionId: 'review',
          questionType: 'rating',
          required: true,
        },
      ],
      title: 'Film feedback form',
    },
  },
}

describe('SurveyPage', () => {
  it('render', () => {
    render(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <RouterProvider router={router}>
        <SurveyPage />
      </RouterProvider>,
    )
    expect(screen.getByTestId('survey-page-container')).toBeInTheDocument()
  })

  it('renderQuestions', async () => {
    await waitFor(() => {
      const newFlowerClient = new SurveyClient()
      jest
        .spyOn(newFlowerClient, 'getSurvey')
        .mockImplementationOnce(() => Promise.resolve(surveyData))

      newFlowerClient.getSurvey()

      render(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <RouterProvider router={router}>
          <SurveyPage />
        </RouterProvider>,
      )
    })

    // expect(screen.getByText('Film feedback form')).toBeInTheDocument()
  })
})
