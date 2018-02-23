import ReactStars from 'react-stars'
import React, {Component} from 'react'


class RatingComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rating: 0,
            edit: true
        }
    }

    ratingChanged = (newRating) => {
        this.setState({
            rating: newRating,
            edit: false
        })

    };

    render () {
        console.log(this.state.rating)
        console.log(this.state.edit)
        return (
            <ReactStars
                count={5}
                onChange={this.ratingChanged}
                size={12}
                color2={'#ffd700'}
                value={this.state.rating}
                edit={this.state.edit}
           />
        );
    }
}

export default RatingComponent;