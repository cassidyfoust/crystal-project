import './App.css';
import Form from './components/form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Book a Trip.
        </h1>
        <h4>
        An amazing journey is waiting for you and your loved ones! You’re just one step away from a new adventure:
        </h4>
        <Form/>
      </header>
    </div>
  );
}

export default App;
