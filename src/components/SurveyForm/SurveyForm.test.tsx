import React from 'react';
import { SurveyForm } from './SurveyForm';
import { fireEvent, render, screen } from '@testing-library/react'

const submitForm = jest.fn()

jest.mock('./RatingArea/RatingArea');

const surveyQuestions = [
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
]



describe('SurveyForm', () => {
  it('render', () => {
    render(<SurveyForm questions={surveyQuestions} handleSubmit={submitForm}/>)

    expect(screen.getByTestId('survey-form-container')).toBeInTheDocument();
  })

  it('render film input', () => {
    render(<SurveyForm questions={surveyQuestions} handleSubmit={submitForm}/>)

    const filmInput = screen.getByTestId('answer-input') as HTMLInputElement
    const mockData = { target: { value: 'Film123' } };

    fireEvent.click(filmInput, mockData);

    expect(filmInput).toBeInTheDocument();
    expect(filmInput.value).toBe('Film123');
  })
})