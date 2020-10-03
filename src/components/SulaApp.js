import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


import './App.css';
import logo from '../img/logo.png';
import logoFooter from '../img/logoFooter.png'

import List from './List';
import InfoCard from './InfoCard';
import Search from './Search';
import Form from './Form';


const url = 'https://dmitrykalko.github.io/rakovich/base/db.json';
let dataForSertificate = [];

class SulaApp extends React.Component {
    state = {
    base: [],
    selectedItem: null,
    search: '',
   // inputStatus: false,
    intervalId: 0,
    formStatus: false,
    fio:'',
    formData:'',
  }

  componentDidMount() {
    axios.get(`${url}`)
            .then(response => {
            const base = response.data;
            this.setState({ base: base.base});
            })
  };


  getSertificate = (selectedItem) => {
    const {lastName, flagName, imgId} = selectedItem;
    this.setState({ formStatus: true, lastName: lastName,flagName: flagName, imgId:imgId })
  }
  closeForm = () => {
    this.setState({formStatus: false})
    // if(this.state.search !== '') {
    //   this.setState({sertificateStatus: false})
    // } 
  }
  submitForm = (e) => {
    const {fio} = this.state;
    e.preventDefault();
    this.setState({formData: fio, formStatus: false})
    this.makeStorage();

    e.target.reset();
     if(this.state.fio !== '') {
     Swal.fire({
      title: 'Поздравляем, Вы Шляхтич!',
      text: 'Свою личную грамоту Шляхтича Вы можете получить на рецепшен',
      icon: 'success',
      confirmButtonText: 'Уже иду!'
    })
    this.setState({fio: ""})
    } else {
      Swal.fire({
        text: 'Пожалуйста, введите свою Фамилию Имя Отчество',
        icon: 'error',
        confirmButtonText: 'Понятно'
      })
    }
}

  fioData = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  selectLastName = (id) => {
    const { base } = this.state;
    const copyBase = [...base];
    const selectedItemArr = copyBase.filter(item => item.id === id);
    const selectedItem = selectedItemArr[0];
    this.setState({ selectedItem });
    this.setState({inputStatus: true})
    this.setState({search: ''})

    //this.startInterval();   
    //запускает интервал
  }
  //   startInterval = () => { 
  //   console.log('интервал запущен');
    
  //   const intervalId =  setInterval (this.coverInfoCard, 10000)  
  //   this.setState({intervalId});
  // }
  // coverInfoCard = () => {
  //   console.log('смена статуса');
  //   this.setState ({inputStatus: false})
  //   this.stopInterval();
  // }
  // stopInterval = () => {
  //   clearInterval(this.state.intervalId);
  //   console.log('очищен');
  // }

  makeStorage = () => {

    const {fio} = this.state;
    const {selectedItem} = this.state;
   
    dataForSertificate = JSON.parse(localStorage.getItem("dataForSertificate")) || []; 
    if(fio !== '') {
    dataForSertificate.push(fio,selectedItem);
    }
    localStorage.setItem("dataForSertificate", JSON.stringify(dataForSertificate));
    console.log(dataForSertificate);
  }

  findLastName = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  fillterBase() {
    const { base, search} = this.state;
  
    let copyBase = [...base];
  
    if (search !== '') {
      copyBase = copyBase.filter(item => {
        if(item.lastName.toLowerCase().indexOf(search.toLowerCase()) === 0) {
          return item.lastName;
        }
        //return item.lastName.toLowerCase().includes(search.toLowerCase());
      })
    }
    return copyBase;
  }



  // cities.filter(function (e) {
  //   return e.population < 1000000;
  // }).sort(function (a, b) {
  //   return b.population - a.population;
  // }).map(function (e) {
  //   console.log(e.name + ': ' + e.population);
  // });

  render() {
      
  console.log(this.state);
  const base = this.fillterBase();
   
  return (
    <>
    <main>
      <div className="App">
        <div className="backgroundImage"><img src={logo} alt="logo" className="logo" /></div>

        <div className="container">
          <Search 
          onChange={this.findLastName}
          inputStatus = {this.state.inputStatus}
          search = {this.state.search}
          />

          <div className="cards">
            <div className="lastNames">
            {base && (
              
              <List 
              base = {base}
              onClick={this.selectLastName}
              start={this.startInterval}
              /> 
                )}
            </div>
            <div>
              {this.state.selectedItem &&(
              <InfoCard
              selectedItem={this.state.selectedItem}
              inputStatus = {this.state.inputStatus}
              search = {this.state.search}
              onClick={this.getSertificate}
              />
              )}
            </div>
          </div>
          <Form
            formStatus={this.state.formStatus}
            search={this.state.search}
            onClick={this.closeForm}
            onChange={this.fioData}
            onSubmit={this.submitForm}
            />

        </div>
      </div>
</main>

<footer>
<div className="footer">
          <hr className="line" />
          <a href="https://parksula.by/ru/" target="_blank" rel="noopener noreferrer"><img src={logoFooter} alt="logoFoot"/></a> 
          <hr className="line" />
        </div>
</footer>
</>
    
  );
  }
}

export default SulaApp;
