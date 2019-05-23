import React from 'react'
import { connect } from 'react-redux'
import { startLocations } from '../../redux/actions/locations';

class Location extends React.Component {

    handleLocationChange = (e) => {
        const location =e.target.value
        // console.log('location',location)
         this.props.handleLocationChange(location)


    }
    componentDidMount() {
        this.props.dispatch(startLocations())
    }
    render(){
        // console.log(this.props,'props in location')
        return (
            <div>
                    <select onChange={this.handleLocationChange}>
                        <option value=''> select </option>
                        {this.props.locations.map(location => {
                            return <option key={location._id} value={location._id}>{location.location}</option>
                        })}

                    </select>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        locations:state.locations
    }
}

export default connect(mapStateToProps)(Location)