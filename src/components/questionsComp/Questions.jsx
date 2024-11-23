import React, { useState } from 'react';
import QuestionsList from './QuestionsList';
import questionsdata from '../../data';

const Questions = () => {
  const [questions, setQuestions] = useState(questionsdata);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;

    setActiveId(newActiveId);
  };
  return (
    <section className='container'>
      <h2>Questions</h2>
      <QuestionsList
        questions={questions}
        toggleQuestion={toggleQuestion}
        activeId={activeId}
      />
    </section>
  );
};

export default Questions;
