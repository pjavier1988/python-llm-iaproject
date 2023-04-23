import axios from 'axios';
import { createAction } from 'redux-actions';


export const setQuestion = createAction('SET_QUESTION');
export const setLoading = createAction('SET_LOADING');
export const setAnswer = createAction('SET_ANSWER');
export const setError = createAction('SET_ERROR');

export const fetchAnswer = (question) => async (dispatch) => {
    console.log("Dispatch og the action", question)
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`http://localhost:8000/api/ask/?question=${encodeURIComponent(question)}`);
    console.log("The answer is",response.data.answer)
    dispatch(setAnswer(response.data.answer));
  } catch (error) {
    console.error('Error fetching data:', error);
    dispatch(setError('Error: Unable to fetch data'));
  } finally {
    dispatch(setLoading(false));
  }
};
