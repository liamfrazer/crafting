import  { Component } from 'react';

class ShoppingList extends Component {

    render() {
        const { basket } = this.props

    if (!basket) {
        return <div>Empty Basket</div>
    }
        return (

            <div>
                Shopping List
            </div>
        )
    }
}

export default ShoppingList;