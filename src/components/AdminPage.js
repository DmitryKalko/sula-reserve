import React from 'react';

import Sertificates from './Sertificates';

import './App.css';

const AdminPage = () => {
  return (
   <div className='admin'>
     <h1>Заявки на сертификаты</h1>
     <Sertificates />
  </div>
  )
}

export default AdminPage;