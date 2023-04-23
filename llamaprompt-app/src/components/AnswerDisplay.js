import React from 'react';

function AnswerDisplay({ answer }) {
  return (
    <textarea
      id="answer"
      className="w-full h-64 p-4 bg-gray-100 mb-4"
      value={answer}
      readOnly
    ></textarea>
  );
}

export default AnswerDisplay;
