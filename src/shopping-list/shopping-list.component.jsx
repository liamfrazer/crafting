import  { Component } from 'react';

class ShoppingList extends Component {

    
    render() {
        const { basket} = this.props

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

     const itemsToShow = []
     basket.forEach(item => {
        if (!itemsToShow.find(i => i.name === item.name)) {
            itemsToShow.push({
                id: item.id,
                name: item.name,
                count: itemCount.get(item.id)
            })
        }
     })

        return (

            <div>
                <h2>Shopping List</h2>
                <ul>
                    {itemsToShow.map(item => (
                        <li key={item.id}>{item.name} x {itemCount.get(item.name)}</li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default ShoppingList;