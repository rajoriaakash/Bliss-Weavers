import React from 'react'
import { SignIn } from '../firebase/utils/signIn'
import logo from '../images/logo.png'

function Header () {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand'>
          <img className='logo' src={logo} />
          <div style={{ marginTop: '100%',marginBottom:'0' ,display:'inline'}}>
            <h1>Bliss Weavers</h1>
          </div>
          <div className='tagline'>
            Put you <span style={{ fontWeight: 'bolder' }}>$</span> where your
            💗 is <span style={{ fontWeight: 'bolder' }}>BUY LOCAL</span>
          </div>
          <div
            style={{
              height: '2px',
              width: '15%',
              backgroundColor: 'black',
              marginLeft: '35%',
              marginTop: '1%'
            }}
          ></div>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item '>
              <a className='nav-link' href='#home-section'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#aboutUs-section'>
                About us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#products-section'>
                Products
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#tutorials-section'>
                Tutorials
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact-section'>
                Contact us
              </a>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <button
              className='btn btn-dark'
              onClick ={SignIn}
              type='submit'
              style={{ backgroundColor: '#1c0c5b' }}
            >
              Login
            </button>
          </form>
        </div>
      </nav>
    </header>
  )
}
export default Header
