import { Component } from 'react'
import RecipeList from './components/recipe-list/recipe-list.component';
import SearchBox from './components/search-box/search-box.component';
import ShoppingList from './components/shopping-list/shopping-list.component';
import MaterialsList from './components/materials-list/materials-list.component';
import { v4 as uuidv4 } from 'uuid'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
      basket: [],
      materials: [],
      searchField: ''
    }
  }

  // API Requests to Recipes data and Materials data stored within public/data
  // This will be swapped out with a database for full CRUD integration

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data/recipes.json`)
      .then(response => response.json())
      .then((name, requirements) => this.setState(() => {
        return { recipes: name, requirements }
      }))
    fetch(`${process.env.PUBLIC_URL}/data/materials.json`)
      .then(response => response.json())
      .then(materials => this.setState({ materials }))
      .then((name, amount, weight) => this.setState(() => {
        return { materials: name, amount, weight }
      }))
  }

  // onSearchChange detects user input into the search box, changing the list of recipes displayed

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  // addToBasket calculates the shopping list, how many of each item there is, then calculates the materials required for each

  addToBasket = (recipe) => {
    const newRecipeID = { ...recipe, id: uuidv4() }
    const newMaterials = { ...this.state.materials }
    Object.keys(recipe.requirements).forEach((material) => {
      newMaterials[material] = (newMaterials[material] || 0) + recipe.requirements[material]
    })
    this.setState(prevState => ({
      basket: [...prevState.basket, newRecipeID],
      materials: newMaterials
    }), console.log(newMaterials))
  }

  // clearBasket sets the state of both the basket and the materials back to default

  clearBasket = () => {
    this.setState(() => {
      return { basket: [], materials: [] }
    })
  }

  render() {

    const { recipes, searchField } = this.state
    const { onSearchChange, addToBasket, clearBasket } = this;

    const searchRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App" >
        <div>
          <header className="App-header">
            <h1>Crafting Recipes</h1>
            <ShoppingList
              basket={this.state.basket}
              clearBasket={clearBasket} />
            <MaterialsList
              materials={this.state.materials} />
            <SearchBox
              className='recipe-search-box'
              placeholder='Search...'
              onChangeHandler={onSearchChange} />
            <RecipeList
              recipes={searchRecipes}
              addToBasket={addToBasket} />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
