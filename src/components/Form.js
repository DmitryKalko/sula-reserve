import React from 'react';

const Form = (props) => {
    const { formStatus, onClick, onChange, onSubmit } = props;
    
    return (
       <form 
       className="form" 
       style={formStatus === true ? {display:'flex'} : {display:'none'}}
       onSubmit={onSubmit}
       >
           <div 
           className="close"
           onClick={onClick}
           > 
           </div>
           <input
           className="fioField"  
           placeholder="Фамилия Имя Отчество" 
           name="fio" 
           onChange={onChange}
           />
           <button className='formBtn'>Получить грамоту шляхтича</button>
       </form>
    );
}

export default Form;