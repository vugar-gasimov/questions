import React, { useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
const QuestionsItem = ({ id, title, info, toggleQuestion, activeId }) => {
  const isActive = id === activeId;

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>

        <button
          type='button'
          onClick={() => toggleQuestion(id)}
          className='question-btn'
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p className=''>{info}</p>}
    </article>
  );
};

export default QuestionsItem;
