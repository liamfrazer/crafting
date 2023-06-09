import  { Component } from 'react';
import BtnOption from '../btn/btn-option.component';

class RecipeList extends Component {

    render() {
        const { recipes } = this.props

    if (!recipes) {
        return <div>Loading...</div>
    }
        return (

            <div>
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <ul>
                        {Object.keys(recipe.requirements).map(material => (
                            <li key={material}>
                                {material}: {recipe.requirements[material]}
                            </li>
                        ))}
                    </ul>
                    <BtnOption
              className='basket-add-btn'
              value='Add to Basket'
              onClickHandler={() => this.props.addToBasket(recipe)}
            />
                    </div>
                ))}
            </div>
        )
    }
}

export default RecipeList;