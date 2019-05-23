import axios from '../../config/axios'

export const startLocations = () => {
    console.log("start location")
    return (dispatch) => {
        axios.get('/locations')
        .then(response => {
            // console.log(response.data)
            dispatch(getLocations(response.data))
        })
        .catch(err=>console.log(err))
    }
}
export const getLocations =(locations) => {
    // console.log(locations,'location')
    return {
        type:"SET_LOCATIONS",
        payload:locations
    }
}