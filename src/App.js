import { Component } from 'react'
import InputBox from './components/input-box/input-box.component';
import RecipeList from './components/recipe-list/recipe-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      materials: [],
      recipes: [],
      inputField: '',
      searchField: ''
    }
  }

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data/recipes.json`)
      .then(response => response.json())
      .then((name, requirements) => this.setState(() => {
        return { recipes: name, requirements }
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    const { recipes, searchField, } = this.state
    const { onSearchChange } = this;

    const filteredRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <div>
          <header className="App-header">
            <h1>Crafting Recipes</h1>
            <h2>Materials</h2>
            <InputBox
              className='Aluminium-input-box'
              placeholder={'Aluminium Amount'} />
            <InputBox
              className='MetalScrap-input-box'
              placeholder='Metal Scrap Amount' />
            <InputBox
              className='Plastic-input-box'
              placeholder='Plastic Amount' />
            <InputBox
              className='Rubber-input-box'
              placeholder='Rubber Amount' />
            <InputBox
              className='Steel-input-box'
              placeholder='Steel Amount' />
            <h2>Search Recipes</h2>
            <SearchBox
              className='recipe-search-box'
              placeholder='Search...'
              onChangeHandler={onSearchChange}
            />
            <RecipeList
              recipes={filteredRecipes}
            />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
