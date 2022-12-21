import './App.css';
import Header from './Header';
import BodyC1 from './BodyC1';
import BodyC2 from './BodyC2';
import BodyC3 from './BodyC3';
import BlueBody from './BlueBody';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='body-1 container mx-auto'>
        <BodyC1 />
        <BodyC2 />
        <BodyC3 />
        <BlueBody />
      </div>
    </div>
  );
}

export default App;
