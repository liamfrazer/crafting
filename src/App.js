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
    fetch(`${process.env.PUBLIC_URL}/data/materials.json`)
      .then(response => response.json())
      .then((name, amount, weight) => this.setState(() => {
        return { materials: name, amount, weight }
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  onMaterialChange = (event, materialName) => {
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

    const { recipes, searchField, inputField } = this.state
    const { onSearchChange } = this;
    const { onMaterialChange } = this;

    const searchRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchField)
    })

    // const materialsAmount = recipes.filter((recipe) => {
    //   return recipe.name.toLowerCase().includes(searchField)
    // })

    console.log(...this.state.materials);

    return (
      <div className="App">
        <div>
          <header className="App-header">
            <h1>Crafting Recipes</h1>
            <h2>Materials</h2>
            <InputBox
              className='Aluminium-input-box'
              placeholder={'Aluminium Amount'}
              onChangeHandler={(event) => onMaterialChange(event, 'Aluminium')} />
            <InputBox
              className='MetalScrap-input-box'
              placeholder='Metal Scrap Amount'
              onChangeHandler={(event) => onMaterialChange(event, 'Metal Scrap')} />
            <InputBox
              className='Plastic-input-box'
              placeholder='Plastic Amount'
              onChangeHandler={(event) => onMaterialChange(event, 'Plastic')} />
            <InputBox
              className='Rubber-input-box'
              placeholder='Rubber Amount'
              onChangeHandler={(event) => onMaterialChange(event, 'Rubber')} />
            <InputBox
              className='Steel-input-box'
              placeholder='Steel Amount'
              onChangeHandler={(event) => onMaterialChange(event, 'Steel')} />
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
