import ReactStars from 'react-stars'
import React, {Component} from 'react'
import "./cstm.css"
import Background from '../account_pic.png';



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
            <div style={{display: "flex", flexDirection: "row"}}>
                <img src={Background} style={{border: "solid", borderWidth: 1, height: 30, width: 30}} className="img-circle"/>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                    <span style={{fontSize: 10, color: "black"}}>{this.props.creator}</span>
                    <ReactStars
                        count={5}
                        onChange={this.ratingChanged}
                        size={12}
                        color2={'#ffd700'}
                        value={this.state.rating}
                        edit={this.state.edit}
                        style={{float: "right"}}
                    />
                </div>
            </div>


        );
    }
}

export default RatingComponent;