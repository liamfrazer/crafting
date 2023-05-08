import { Component } from 'react'
import RecipeList from './components/recipe-list/recipe-list.component';
import SearchBox from './components/search-box/search-box.component';
import ShoppingList from './shopping-list/shopping-list.component';
import BtnOption from './components/btn/btn-option.component';
import './App.css';

// import InputBox from './components/input-box/input-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      materials: [],
      recipes: [],
      basket: [],
      inputField: '',
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

  // Original idea to input materials, then calculate what recipes can be created
  // Will keep for future changes, as calculation still may be required

  // onMaterialChange = (event, materialName) => {
  //   const inputField = event.target.value
  //   const updatedMaterials = this.state.materials.map(material => {
  //     if (material.name === materialName && !isNaN(inputField)) {
  //       return { ...material, amount: parseInt(inputField, 10) }
  //     } else {
  //       return material;
  //     }
  //   })
  //   this.setState({ materials: updatedMaterials })
  // }

  // Duplicate of onMaterialChange, but will detect buttons being selected in recipes
  // This will then add the items to the shopping list
  // Once added to the shopping list, the required material amount will be displayed

  onBasketChange = (event, materialName) => {
    const inputField = event.target.value
    const updatedMaterials = this.state.materials.map(material => {
      if (material.name === materialName && !isNaN(inputField)) {
        return { ...material, amount: parseInt(inputField, 10) }
      } else {
        return material;
      }
    })
    this.setState({ materials: updatedMaterials })
  }


  render() {

    const { recipes, searchField } = this.state
    const { onSearchChange } = this;
    // onMaterialChange
    // onBasketChange

    const searchRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <div>
          <header className="App-header">
            <h1>Crafting Recipes</h1>
            <h2>Shopping List</h2>
            <ShoppingList />
            <BtnOption
              className='basket-clear-btn'
              value='Clear Basket'
              onClickHandler={() => console.log('Basket Cleared')}
            />
            {/*<h2>Materials</h2>
             <InputBox
              className='Aluminium-input-box'
              placeholder={'Aluminium'}
              onChangeHandler={(event) => onMaterialChange(event, 'Aluminium')} />
            <InputBox
              className='MetalScrap-input-box'
              placeholder='Metal Scrap'
              onChangeHandler={(event) => onMaterialChange(event, 'Metal Scrap')} />
            <InputBox
              className='Plastic-input-box'
              placeholder='Plastic'
              onChangeHandler={(event) => onMaterialChange(event, 'Plastic')} />
            <InputBox
              className='Rubber-input-box'
              placeholder='Rubber'
              onChangeHandler={(event) => onMaterialChange(event, 'Rubber')} />
            <InputBox
              className='Steel-input-box'
              placeholder='Steel'
              onChangeHandler={(event) => onMaterialChange(event, 'Steel')} />
            <InputBox
              className='Glass-input-box'
              placeholder='Glass'
              onChangeHandler={(event) => onMaterialChange(event, 'Glass')} /> */}
            <h2>Search Recipes</h2>
            <SearchBox
              className='recipe-search-box'
              placeholder='Search...'
              onChangeHandler={onSearchChange}
            />
            <RecipeList
              recipes={searchRecipes}
            />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
