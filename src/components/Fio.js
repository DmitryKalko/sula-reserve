import React from 'react';

import './App.css';

let printedFios = JSON.parse(localStorage.getItem("printedFios")) || [];


const Fio = (props) => {
    const { fio, onClick, selectedItem } = props;
    const {  selectFio } = selectedItem;

    return (
        <li className='adminList'>
            <h3
            className = {printedFios.includes(fio) === true && fio !== selectFio ? 'printed' 
            : printedFios.includes(fio) === true && fio === selectFio ? 'selectingNow' 
            : printedFios.includes(fio) !== true && fio === selectFio ? 'selectingNow' 
            : 'notSelected'}
            >{fio}
            </h3>
            <button className='formation' onClick={ () => onClick(fio)}>Сформировать</button>
            {/* <p className='printTime'>Напечатано в {}</p> */}
        </li>
    );
}

export default Fio;