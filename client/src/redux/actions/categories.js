import axios from '../../config/axios'

export const StartCategories = () => {
    return(dispatch) => {
        axios.get('/categories')
        .then(response => {
            // console.log(response.data)
            dispatch(getCategories(response.data))
        })
        .catch(err=>console.log(err))
    }
} 
export const getCategories=(categories) => {
    // console.log(categories,'categories')
    return {
        type:"SET_CATEGORIES",
        payload:categories
    }
}