import React from 'react'

const Form = (props) => {
    const currentTodo = props.currentTodo;

  return (
    <form className="form" onSubmit={props.onSubmit}>
        <h2>Add new todo</h2>
        <label>
            Title
            <input
             type="text"
             name="title"
             onChange={props.onChange}
             value={currentTodo.title} />
        </label>
        <label>
            Description
            <input
             type="text"
             name="description"
             onChange={props.onChange}
             value={currentTodo.description} />
        </label>
        <label>
            Date
            <input
             type="text"
             name="date"
             onChange={props.onChange}
             value={currentTodo.date} />
        </label>
        <label className="label-checkbox">
            Reminder
            <input
             type="checkbox"
             name="reminder"
             onChange={props.onChange}
             checked={currentTodo.reminder} />
        </label>
        <input type="submit" value="Add todo" />
    </form>
  )
}

export default Form