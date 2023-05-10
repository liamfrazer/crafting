import { Component } from 'react';

class SearchBox extends Component {

    render() {
        return (
            <div>
            <h2>Search Recipes</h2>
            <input 
            className={this.props.className}
            type='search'
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}>
            </input>
            </div>
        )
    }
}

export default SearchBox