import React, { useState } from 'react';
import QuestionsList from './QuestionsList';
import questionsdata from '../../data';

const Questions = () => {
  const [questions, setQuestions] = useState(questionsdata);
  console.log(questions);

  return (
    <div>
      <QuestionsList />
    </div>
  );
};

export default Questions;
