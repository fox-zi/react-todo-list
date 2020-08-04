import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, CHANGE_FILTER, CLEAR_COMPLETED } from '../actions/todoActions';

import { fetchTodosFromLocalStorage } from '../utils/todoUtils';

const initialState = {
  items: fetchTodosFromLocalStorage(),
  filter: 'all',
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TODO:
      return {
        ...state,
        items: [...state.items, payload.todo]
      };
    case UPDATE_TODO:
      return {
        ...state,
        items: state.items.map(
          (item) => (item.id === payload.id ? { ...item, ...payload.attributes } : item)
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: payload.filter,
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        items: state.items.filter(({ completed }) => !completed),
      };
    default:
      return state;
  }
};

export default todosReducer;
