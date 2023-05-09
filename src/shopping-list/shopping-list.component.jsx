import  { Component } from 'react';

class ShoppingList extends Component {

    
    render() {
        const { basket } = this.props

    if (!basket) {
        return <div>Empty Basket</div>
    }

    const itemCount = new Map()
    basket.forEach(item => {
        if (itemCount.has(item.name)) {
            itemCount.set(item.name, itemCount.get(item.name) +1);

        } else {
            itemCount.set(item.name, 1);
        }
         
    })
        return (

            <div>
                <h2>Shopping List</h2>
                <ul>
                    {basket.map(item => (
                        <li key={item.id}>{item.name} ({itemCount.get(item.name)})</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ShoppingList;