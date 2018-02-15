import React, {Component} from 'react'
import {Pagination} from 'react-bootstrap'


class PaginationComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            active: 1
        }
    }

    hh = (num) => {
        console.log(num)
    }


    render() {
        let items = [];
        for (let number = 1; number <= 10; number++) {
            items.push(
                <Pagination.Item onClick={() => this.hh(number)}>{number}</Pagination.Item>
            );
        }
        return(
            <div style={{textAlign: "center"}}>
                <Pagination style={{borderRadius: 0}}bsSize="small">{items}</Pagination>
            </div>
        );
    }
}

export default PaginationComponent