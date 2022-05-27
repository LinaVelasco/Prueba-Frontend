import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/App.css';
import React, {useEffect, useState} from 'react'
import Dashboard from './components/Dashboard';
import DataTable , {createTheme} from 'react-data-table-component';
import 'styled-components';



const App = () => {

  //configurar los Hooks
  const [personajes,setPersonajes]=useState([]);

  // Funcion para mostrar los datos con fetch
  const urlInicial ="https://swapi.dev/api/people/?page=2"
  const showData = async() =>{
    const response = await fetch(urlInicial)
    const data = await response.json()
    console.log(data.results)
    setPersonajes(data.results)
  }
  
  useEffect(()=>{
    showData()
  }, [])
  
  //configuramos de las columnas para el Datatable
  const columns = [
    {
      name: 'NAME' ,
      selector: row => row.name,
      center:true,
    },
    {
      name: 'HEIGHT',
      selector: row => row.height,
      center:true,
    },
    {
      name: 'GENDER',
      selector: row => row.gender,
      center:true,
    }, {
      name: 'HAIR_COLOR',
      selector: row => row.hair_color,
      center:true,
    },
    {
      name: 'SKIN_COLOR',
      selector: row => row.skin_color,
      center:true,
    },
  
  ]

  //Personalización
  createTheme('custom', {
    text: {
      primary: '#F7F9F9 ',
      secondary: '#2aa198',
    },
    background: {
      default: '#154360',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');
  
  return (
        <div className = "table-responsive">
          <h1 >
            <Dashboard></Dashboard>
            
          </h1>
          <h1>
                <strong >PERSONAJES STARWARS</strong>
                
          </h1>
          
          <br/>
          
          <DataTable
            columns={columns}
            data={personajes}
            theme='custom'
            pagination           
            />

        </div>

  
  );
}

export default App;
