import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {

    const [jokes, setJokes] = useState([]);

    useEffect(() => {

        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(res => setJokes(res.data));

    },[]);
 console.log(jokes);
    return (
        <div className="App">
            <header className="App-header">
                <ul>{
                    jokes.map(u => u.jokes.type === 'twopart' ? <li key={u.jokes.id}> SETUP:{u.jokes.setup}<span style={{color: 'red'}}>DELIVERY: {u.jokes.delyvery}</span>,</li> : <li key={u.jokes.id}> JOKE:{u.jokes.joke}</li>)
                    }
                </ul>

            </header>
        </div>
    );
}
export default App;