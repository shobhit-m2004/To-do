import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TitleNames from './components/TitleNames'
import Input from './components/Input'
import Todos from './components/Todos'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  let [Data, setData] = useState([]);

  let HandleData = (text, date) => {
    console.log(`item are ${text} and ${date}`);

    let newData = [
      ...Data,
      {
        text: text,
        date: date
      },
    ];

    setData(newData);
  }

  let DeleteItem = (idx) => {
    let NewWithDelete = Data.filter((item, index) => index !== idx);
    setData(NewWithDelete);

  }


  return (
    <div className="Myborder">
      <TitleNames />
      <Input HandleData={HandleData} />
      <Todos Todo={Data} DeleteItem={DeleteItem} />
    </div>
  )
}

export default App
