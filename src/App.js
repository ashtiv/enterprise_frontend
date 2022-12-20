import './App.css';
import Header from './Header';
import BodyC1 from './BodyC1';
import BodyC2 from './BodyC2';

function App() {
  return (
    <div className="App container">
      <Header />
      <div className='body-1 container'>
        <BodyC1 />
        <BodyC2 />
      </div>
    </div>
  );
}

export default App;
