import React from 'react'
import logo from './logo.png';

function Header() {
    return (
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
                <div className='Opus-logo'>
                    <div className='Opus-logo-inside'>
                        <img src={logo} />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header