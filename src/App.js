import './App.css';
import Header from './Components/Header'
import MemeForm from './Components/MemeForm'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MemeForm />
      </div>
    </div>
  );
}

export default App;
