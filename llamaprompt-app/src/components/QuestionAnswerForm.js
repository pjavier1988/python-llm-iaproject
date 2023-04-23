import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestion,fetchAnswer } from '../store/actions/actions';

function QuestionAnswerForm() {
  const dispatch = useDispatch();
  const [question, setQuestionValue] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setQuestion(question));
    dispatch(fetchAnswer(question));
  };

  const onChange = (event) => {
    setQuestionValue(event.target.value);
  }

  const clean = (event) =>{
    event.preventDefault();
    setQuestionValue("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input
        id="question"
        type="text"
        placeholder="Type your question here"
        className="flex-grow p-4 border rounded-lg"
        value={question}
        onChange={onChange}
      />
      <button
        className="bg-blue-500 text-white py-3 px-6 rounded-lg"
        type="submit"

      >
        Ask
      </button>
      <button
        className="bg-blue-500 text-white py-3 px-6 rounded-lg "
        onClick={clean}


      >
        Clean
      </button>
    </form>
  );
}

export default QuestionAnswerForm;
