import React from 'react';

const AdminSearch = (props) => {
    const { onChange } = props;
    return (
        <div className="admin-search-box">
            <input 
            className="admin-search"  
            placeholder="Введите фамилию" 
            name="adminSearch" 
            onChange={onChange} 
            />
        </div>
    );
}

export default AdminSearch;