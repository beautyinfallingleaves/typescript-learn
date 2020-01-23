import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

class Student {
  fullName: string
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`
  }
}

interface Person {
  fullName: string
}

function greeter(person: Person) {
  return `hello ${person.fullName}`
}

let user = new Student('Susan', 'B.', 'Anthony')

const App: React.FC = () => {
  const [greeting, setGreeting] = useState('')

  return (
    <div className="App">
      <p>{greeting}</p>
      <button onClick={() => setGreeting(greeter(user))}>Greet</button>
    </div>
  );
}

export default App;
