import React , {Component} from 'react';

export default class EditTodo extends Component{
    constructor (props){
        super(props);

        this.onChangeTodoDecreption=this.onChangeTodoDecreption.bind(this);
        this.onChangeTodoResponsible=this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit(this);

        this.state ={
            todo_description : '',
            todo_responsible : '',
            todo_priority : '',
            todo_completed : false
        }
    }
    onChangeTodoDecreption(e){
        this.setState({
            todo_description:e.target.value
        });
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible:e.target.value
        });
    }

    onChangeTodoPriority(e){
        this.setState({
            todo_priority:e.target.value
        });
    }

    onSubmit(event)
    {
        // event.preventDefault();

        // console.log(`Form Submited:`);
        // console.log(`Todo Description: ${this.state.todo_description}`);
        // console.log(`Form Responsible: ${this.state.todo_responsible}`);
        // console.log(`Form Priority:    ${this.state.todo_priority}`);
        // console.log(`Form Completed:   ${this.state.todo_completed}`);

        this.setState({
            todo_description : '',
            todo_responsible : '',
            todo_priority : '',
            todo_completed : false
        });
    }

    render()
    {
        return (
            <div className='mt-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-md-6'>
                            <div className='card shadow border-0'>
                                <div className='card-header bg-white'>
                                    <h6 className='card-title font-weight-bolder'>
                                        Edit Todo-App
                                    </h6>
                                </div>
                                <div className='card-body'>
                                    <form onSubmit={this.onSubmit}>
                                        <label className='font-weight-bolder'>Description:</label>
                                        <div className='form-group'>
                                            <input type='text'
                                                className='form-control border-info'
                                                value={this.state.todo_description}
                                                onChange={this.onChangeTodoDecreption}
                                                />
                                        </div>
                                        <label className='font-weight-bolder'>Responsible:</label>
                                        <div className='form-group'>
                                            <input type='text'
                                                className='form-control border-info'
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                        </div>
                                        <div className='form-group'>
                                            <div className='form-check form-check-inline'>
                                                <input type='radio'
                                                    className='form-check-input border-info'
                                                    name='priorityOptions'
                                                    id='priorityLow'
                                                    value='Low'
                                                    checked={this.state.todo_priority==='Low'}
                                                    onChange={this.onChangeTodoPriority}
                                                    />
                                                <label className='form-check-label'>Low</label>
                                            </div>
                                        
                                            <div className='form-check form-check-inline'>
                                                <input type='radio'
                                                    className='form-check-input border-info'
                                                    name='priorityOptions'
                                                    id='priorityMedium'
                                                    value='Medium'
                                                    checked={this.state.todo_priority==='Medium'}
                                                    onChange={this.onChangeTodoPriority}
                                                    />
                                                <label className='form-check-label'>Medium</label>
                                            </div>

                                            <div className='form-check form-check-inline'>
                                                <input type='radio'
                                                    className='form-check-input border-info'
                                                    name='priorityOptions'
                                                    id='priorityHigh'
                                                    value='High'
                                                    checked={this.state.todo_priority==='High'}
                                                    onChange={this.onChangeTodoPriority}
                                                    />
                                                <label className='form-check-label'>High</label>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }   
}