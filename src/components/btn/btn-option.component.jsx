import { Component } from 'react';

class BtnOption extends Component {

    render() {
        return (
            <button 
            className={this.props.className}
            type='button'
            onClick={this.props.onClickHandler}>{this.props.value}
            </button>
        )
    }
}

export default BtnOption