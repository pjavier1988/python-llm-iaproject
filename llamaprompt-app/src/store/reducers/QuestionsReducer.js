import * as actions from '../actions/actions';
import {handleActions} from 'redux-actions'

const initialState = {
    question: '',
    loading: false,
    answer: '',
    error: '',
  };

  export const QuestionsReducer = handleActions(
    {
        [actions.setQuestion]: (state,{payload}) =>({
            ...state,
            question: payload,
        }),
        [actions.setLoading]: (state,{payload}) =>({
          ...state,
          loading: payload,
        }),
        [actions.setAnswer]: (state,{payload}) =>({
          ...state,
          answer: payload,
        }),
        [actions.setError]: (state,{payload}) =>({
          ...state,
          error: payload,
        }),
    },
    initialState,

  );