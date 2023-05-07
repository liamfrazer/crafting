import  { Component } from 'react';

class InputBox extends Component {

    render() {
        return (
            <input 
            className={this.props.className}
            type='number'
            placeholder={this.props.placeholder}
            >
            </input>
        )
    }
}

export default InputBox;