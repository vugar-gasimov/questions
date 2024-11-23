import React from 'react';
import QuestionsItem from './QuestionsItem';

const QuestionsList = ({ questions, toggleQuestion, activeId }) => {
  return (
    <div>
      {questions ? (
        questions.map((question, index) => (
          <QuestionsItem
            key={question.id}
            {...question}
            toggleQuestion={toggleQuestion}
            activeId={activeId}
          />
        ))
      ) : (
        <article>
          <h3>Unfortunately there are no questions...</h3>
        </article>
      )}
    </div>
  );
};

export default QuestionsList;
