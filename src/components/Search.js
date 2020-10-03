import React from 'react';

const Search = (props) => {
    const { onChange, search} = props;
    return (
        <div className="search">
            <input 
            className="inputField"  
            placeholder="ВВЕДИТЕ ВАШУ ФАМИЛИЮ" 
            name="search" 
            onChange={onChange} 
            value = {search === '' ? ''  : search}
            />
        </div>

    );
}

export default Search;