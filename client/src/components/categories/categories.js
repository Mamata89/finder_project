import React from 'react'
import { connect } from 'react-redux'
import { StartCategories } from '../../redux/actions/categories';

class Categories extends React.Component{
    componentDidMount(){
        this.props.dispatch(StartCategories())
    }

    handleCategoryChange = (e) => {
        const category = e.target.value
        // console.log(category,"from category page")
      this.props.handleCategoryChange(category)
       
    }
    render(){
        // console.log(this.props,"from categor page")
        return(
            <div>
                <select onChange={this.handleCategoryChange}>
                    <option value="">Select</option>
                    {
                    this.props.categories.map(category => {
                        return(
                            <option key={category._id} value={category._id}>{category.name}</option>
                        )
                    })
                    }
                </select>
                
              </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        categories: state.categories
    }
  
}

export default connect(mapStateToProps)(Categories)