import React, {Component} from 'react'
import {Pagination} from 'react-bootstrap'
import store from '../stores';



class PaginationComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            active: 1,
            amount: 0
        }
    }


    /*getContent = (num) => {
        store.itemStore.reqItem(num)
    }*/

    render() {
        let items = [];
        let amount = Math.ceil(store.itemStore.items.length / this.props.itemsAmount);
        console.log("itemsAmount" + this.props.itemsAmount)
        console.log("amount" + amount)
        this.props.changePageCount(amount);

        for (let number = 1; number <= amount; number++) {
            items.push(
                <Pagination.Item onClick={() => this.props.changePage(number)}>{number}</Pagination.Item>
            );
        }
        return(
            <div style={{textAlign: "center"}}>
                <Pagination style={{borderRadius: 0}} bsSize="small">{items}</Pagination>
            </div>
        );
    }
}

export default PaginationComponent