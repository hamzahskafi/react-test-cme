import React, {Component} from 'react';

class Searchbar extends Component {

    render() {
        
        return (
            <>
            <div className='search_bar'>
                <form>
                    <div className='search_field'>
                        <input type="text" placeholder="Search..."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;