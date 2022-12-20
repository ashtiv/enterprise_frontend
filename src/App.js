import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-lev1'>
          <a className='Header-a'><text className='Header-contact'>Contact us</text></a>
          <nav className='Header-nav'>

            <select className='Nav-dropdown'>
              <option value="item2" className='Nav-values' selected>Pages</option>
              <option value="item1" className='Nav-values'>Item 1</option>
              {/* <div className='Nav-dropdown-dots'>
                <p className='Nav-dropdown-dots-text'>{'\u2026'}</p>
              </div> */}
              {/* three dots not showing */}
            </select>
            <div className='Nav-template'>Template</div>
            <div className='Nav-overview'>Overview</div>

          </nav>

        </div>
      </header>
    </div>
  );
}

export default App;
