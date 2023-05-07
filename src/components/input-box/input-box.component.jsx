import  { Component } from 'react';

class InputBox extends Component {

    render() {
        return (
            <input 
            className={this.props.className}
            type='number'
            min={0}
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}>
            </input>
        )
    }
}

export default InputBox;