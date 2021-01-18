import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      newTask: "",
      list: []
    }
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    })
  }

  addTask(){
    const newTask = {
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    }

    const list = [...this.state.list]
    list.push(newTask)

    console.log(newTask);

    this.setState({
      list,
      newTask: ""
    })
  }

  deleteTask(id){
    const list = [...this.state.list]

    const updatedList = list.filter(t => t.id !== id)

    this.setState({ list: updatedList })
  }

  render(){
    return(
      <div className="App">
        <div className="row text-center justify-content-center pt-5 m-3">
          <div className="col-md-6 card shadow rounded">
            <h1>Add a task...</h1>
            <br />
            <input 
            type="text" 
            placeholder="Enter a task..."
            value={ this.state.newTask }
            onChange = { e => this.updateInput("newTask", e.target.value) } 
            />
            <Button onClick={ () => this.addTask() }
            className="mt-3">
              Add
            </Button>
            <br /> 
            <ul>
                { this.state.list.map(task => {
                  return(
                    <div className="row align-items-center">
                      <div className="col-8">
                        <li key={task.id}
                        className="card shadow text-center py-2">
                          {task.value}
                        </li>
                      </div>
                      <div className="col-4">
                        <Button onClick={ () => this.deleteTask(task.id) }
                        className="btn btn-danger text-center">
                          Delete
                        </Button>
                      </div>
                    </div>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
