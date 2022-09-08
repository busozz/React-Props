import './App.css';

import User from './components/User';
import Header from './components/Header';


const firstName = "FirstName";
const lastName = "LastName";
const isLoggedIn = true;

const friend = [
  { 
    id:1,
    name:"name1"
  },{ 
    id:2,
    name:"name2"
  },{ 
    id:3,
    name:"name3"
  }
]

function App () {
  return(
    <div>
      <h1>Hello React</h1>
      
      <p> {firstName} {lastName} </p>
      <p>{`benim adım ${firstName} soyadım ${lastName}`} </p>

      <h2>
        {isLoggedIn ? `benim adım ${firstName} soyadım ${lastName}`: "Giriş Yapılamadı" }
      </h2>

      <User name="name" 
            surname="surname" 
            isLoggedIn={true} 
            friends={friend} 
            location={{
                address: "address",
                zip : "zip"
            }}
      />
      
      <Header/>
    </div>
  )
}

export default App