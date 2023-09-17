import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText} from 'react-icons/bs';
import { Link} from 'react-scroll'


const Nav = () => {
  return (
    <nav className='fixed top-0 left-4 h-screen flex justify-center items-center overflow-hidden z-50'>
      <div className="container my-auto">
        <div className='h-full bg-black/20 backdrop-blur-2xl rounded-full mx-auto p-4 flex flex-col justify-between text-2xl text-white items-center gap-1'>
          <Link 
          to='home'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='navitem'>
            <BiHomeAlt />
          </Link>
          <Link 
          to='about'
          activeClass='active'
          smooth={true}
          spy={true}
          className='navitem'>
            <BiUser />
          </Link>
          <Link 
          to='services'
          activeClass='active'
          smooth={true}
          spy={true}
          className='navitem'>
            <BsClipboardData />
          </Link>
          <Link 
          to='work'
          activeClass='active'
          smooth={true}
          spy={true}
          className='navitem'>
            <BsBriefcase />
          </Link>
          <Link 
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          className='navitem'>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  ) 
};

export default Nav;
