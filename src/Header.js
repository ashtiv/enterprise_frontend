import React from 'react'
import logo from './logo.png';

function Header() {
    return (
        <header className="App-header container">
            <div className='Header-lev1 container my-5'>
                <div className='Opus-logo'>
                    <div className='Opus-logo-inside'>
                        <img src={logo} />
                    </div>
                </div>
                <nav className='Header-nav container'>
                    <div className='Nav-overview mx-5 container'>Overview</div>
                    <select className='Nav-overview mx-5 container'>
                        <option value="item2" className='Nav-values' selected>Pages</option>
                        <option value="item1" className='Nav-values'>Item 1</option>
                        {/* <div className='Nav-dropdown-dots'>
                                <p className='Nav-dropdown-dots-text'>{'\u2026'}</p>
                            </div> */}
                        {/* three dots not showing */}
                    </select>
                    <div className='Nav-overview mx-5 container'>Template</div>
                    <div className='Header-a conatiner'><text className='Header-contact'>Contact us</text></div>
                </nav>

            </div>
        </header>
    )
}

export default Header