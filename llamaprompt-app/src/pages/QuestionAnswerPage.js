import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuestionAnswerForm from '../components/QuestionAnswerForm';
import AnswerDisplay from '../components/AnswerDisplay';
import LoadingIndicator from '../components/LoadingIndicator';
import { fetchAnswer, setError } from '../store/actions/actions';




  function QuestionAnswerPage() {
    const dispatch = useDispatch();
    const question = useSelector((state) => state.QuestionsReducer.question);
    const loading = useSelector((state) => state.QuestionsReducer.loading);
    const answer = useSelector((state) => state.QuestionsReducer.answer);
    const error = useSelector((state) => state.QuestionsReducer.error);




    const handleRetry = () => {
        dispatch(setError(''));
        dispatch(fetchAnswer(question));
      };
      return (
        <div className="container mx-auto py-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-4">Ask a Question</h1>
            <AnswerDisplay answer={answer} />
            {/* Loading message */}
            {loading && <LoadingIndicator />}
            {/* Error message */}
            {error && (
              <div className="flex items-center space-x-4">
                <div className="text-red-500">{error}</div>
                <button
                  className="bg-blue-500 text-white py-3 px-6 rounded-lg"
                  onClick={handleRetry}
                >
                  Retry
                </button>
              </div>
            )}
            <QuestionAnswerForm />
            <div className="htmx-indicator h-2 w-2 bg-blue-500 invisible rounded-full"></div>
          </div>
        </div>
      );
    }

export default QuestionAnswerPage;