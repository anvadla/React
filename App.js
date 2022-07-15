import logo from './logo.svg';
import './App.css';
import Table from './Table/Table';
import data from "./Moc.data.json";
import { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);

  const average= ()=>{
    
  }


  const [contacts, setContacts] = useState([
    {
      "Name": "Anil",
      "Id": 1,
      "Age": 25,

      "email": "anil@gmail.com",
      "Points": 10
     
    },
    {
      "Name": "Ajay",
      "Id": 2,
      "Age": 25,

      "email": "ajay@email.com",
      "Points": 10
      
    },
    {
      "Name": "Syed",
      "Id": 3,
      "Age": 25,

      "email": "syed@email.com",
      "Points": 10
    }

  ]);
  return (
    <div className="App">

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Age</th>
            <th>Email</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.Name}</td>
              <td>{contact.Id}</td>
              <td>{contact.Age}</td>
              <td>{contact.email}</td>
              <td>{contact.Points}</td>

            </tr>
          ))}
        </tbody>


      </table>

      {/* <button onClick ={()=> average()}>AVERAGE</button> */}
      <hr />


      <button onClick={() => setNumber(number + 1)}>INCREMENT</button>
      <hr />
      <hr />
      {number}
      <hr />
      <button onClick={() => setNumber(number - 1)}>DECREMENT</button>
    </div>
  );
}


export default App
