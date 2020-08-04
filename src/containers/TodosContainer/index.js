import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import TodoFooter from '../../components/TodoFooter';
import './index.css';
import { createTodo, updateTodo, deleteTodo, changeFilter, clearCompleted } from '../../actions/todoActions';
import { filterTodos, getIncompletedTodoCount } from '../../utils/todoUtils';

class TodosContainer extends Component {
  handleCreateTodo = (content) => {
    const { createTodo } = this.props;
    createTodo(content);
  };

  handleUpdateTodo = (id, attributes) => {
    const { updateTodo } = this.props;
    updateTodo(id, attributes);
  };

  handleDeleteTodo = (id) => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };

  handleChangeFilter = (filter) => {
    const { changeFilter } = this.props;
    changeFilter(filter);
  };

  handleClearComplete = () => {
    const { clearCompleted } = this.props;
    clearCompleted();
  };

  render() {
    const { todos = [], filter, incompletedCount = 0 } = this.props;

    return (
      <div className='app-container'>
        <div className='todo-container'>
          <TodoForm onCreateTodo={this.handleCreateTodo} />
          <TodoList todos={todos} onDeleteTodo={this.handleDeleteTodo} onUpdateTodo={this.handleUpdateTodo} />
          <TodoFooter
            activeFilter={filter}
            incompletedCount={incompletedCount}
            onChangeFilter={this.handleChangeFilter}
            onClearComplete={this.handleClearComplete}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ todo }) => {
  const filter = todo.filter;
  const todos = filterTodos(todo.items, filter);
  const incompletedCount = getIncompletedTodoCount(todo.items);
  return {
    todos,
    filter,
    incompletedCount
  };
};

const mapDispatchToProps = {
  createTodo,
  updateTodo,
  deleteTodo,
  changeFilter,
  clearCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
