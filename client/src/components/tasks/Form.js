import React from 'react'
import Categories from '../categories/categories'
import Location from '../location/location';
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

class TaskForm extends React.Component{
        constructor(props){
            // console.log(props,'props in constructor of form')
            super(props)
             this.state={
                title:this.props.task ? this.props.task.title:'',
                description:this.props.task ? this.props.task.description:'',
                budget:this.props.task ? this.props.task.budget:'',
                location:this.props.task ? this.props.task.location:'',
                category:this.props.task ? this.props.task.category:'',
                dueDate:new Date()
            }
            this.handleTitleChange = this.handleTitleChange.bind(this)
            this.handleDueDateChange = this.handleDueDateChange.bind(this)
        }

        handleTitleChange(e) {
            const title = e.target.value
            this.setState( () => ({
                title
            }))
        }
        handleLocationChange = (location) => {
            this.setState(()=> ({
                location
            }))
        }

        handleDescriptionChange(e){
            const description = e.target.value
            this.setState( () => ({
                description
            }))
        }

        handleBudgetChange = (e) => {
            const budget = e.target.value
            this.setState( () => ({
                budget
            }))
        }

        handleCategoryChange = (category) => {
            // console.log(category,"from form category")
            this.setState( () => ({
                    category
            }))

        }
        handleDueDateChange (date) {
            // console.log(date,'date')
            this.setState( ({dueDate:date}))
        }
        
        handleSubmit = (e) => {
            e.preventDefault()
            const formData={
                title:this.state.title,
                description: this.state.description,
                budget:this.state.budget,
                category:this.state.category,
                location:this.state.location,
                dueDate:this.state.dueDate
            }
            // console.log(formData)
            this.props.handleSubmit(formData)
            this.setState( () => ({
                title:"",
                description:'',
                budget:'',
                category:'',
                location:"",
                dueDate:""
            }))
        }
        

        render(){
            // console.log(this.props ,'form')
            return(
                <div >
                    
                    <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <label  htmlFor="exampleInputTitle1">Title :
                                        <input
                                            type="text" 
                                            value={this.state.title} 
                                            onChange={this.handleTitleChange}
                                            className="form-control" id="exampleInputTitle1" aria-describedby="titleHelp"
                                        />
                                </label><br/>
                            </div>
                           <div className="form-group">
                               <label for="exampleFormControlTextarea1">
                                Description : <br/>
                                <textarea value={this.state.description} 
                                        onChange={this.handleDescriptionChange.bind(this)}
                                        class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        > 
                                </textarea>
                                </label><br/>
                           </div>

                           <div className="form-group">
                                <label for="exampleFormControlbudget1">Budget :
                                    <input 
                                        type="number" 
                                        value={this.state.budget} 
                                        onChange={this.handleBudgetChange}
                                        className="form-control" id="exampleInputBudget" aria-describedby="budgetHelp"
                                    />
                                </label><br/>
                           </div>

                           <div className="form-group">
                                <label for="exampleFormControlT">Location :
                                    <Location handleLocationChange={this.handleLocationChange}/>
                                </label><br/>
                           </div>


                            <div className="form-group">
                                <label>Category :
                                    <Categories handleCategoryChange={this.handleCategoryChange} />
                                </label><br/>
                            </div>
                            <div className="form-group">
                                select dueDate :
                                <DatePicker
                                    selected={this.state.dueDate}
                                    onChange={this.handleDueDateChange}
                                /><br/>
                            </div>

                            <input type="submit"/>

                    </form>
                </div>
               
               
            )
        }
}
// const mapStateToProps = (state) => {
//     return {
//         task:state.task
//     }
// }

export default TaskForm