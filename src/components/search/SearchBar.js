import React, {Component} from 'react';

class Searchbar extends Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <div className='search_bar'>
                <form onSubmit={this.handleSubmit}>
                    <div className='search_field'>
                        <input onChange={this.handleChange} type="text" placeholder="Search..."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;