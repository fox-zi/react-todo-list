import { createTodoInstance } from '../utils/todoUtils';

export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const createTodoDispathRequest = todo => ({
  type: CREATE_TODO,
  payload: {todo}
});

export const updateTodoDispathRequest = (id, attributes) => ({
  type: UPDATE_TODO,
  payload: {id, attributes}
});

export const deleteTodoDispathRequest = (id) => ({
  type: DELETE_TODO,
  payload: {id},
});

export const changeFilterDispathRequest = (filter) => ({
  type: CHANGE_FILTER,
  payload: {filter},
});

export const clearCompletedDispathRequest = () => ({
  type: CLEAR_COMPLETED,
});

export const createTodo = (content) => (dispatch) => {
  const todo = createTodoInstance(content);
  dispatch(createTodoDispathRequest(todo));
};

export const updateTodo = (id, attributes) => (dispatch) => {
  dispatch(updateTodoDispathRequest(id, attributes));
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoDispathRequest(id));
};

export const changeFilter =(filter) => (dispatch) => {
  dispatch(changeFilterDispathRequest(filter));
};

export const clearCompleted = () => (dispatch) => {
  dispatch(clearCompletedDispathRequest());
};
