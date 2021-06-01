import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { MenuInterface } from '../../interfaces/menu'

interface FooterUI {
  menus: Array<MenuInterface>;
}

export const Footer = (props: FooterUI) => {

  const scrollUp = () => {
    let root = document.getElementById('root');
    if (root) {
      root.scrollTop = 0;
    }
  }
  
  return (
    <footer className="Footer">
      <button className="up-button" onClick={scrollUp}><FaArrowUp/></button>
      <section className="menus">
        {props.menus.map((menu, index) => {
          return <ul key={index}>
            <h3>{menu.name}</h3>
            {menu.subMenus.map((subMenu, _index) => {
              return <div key={_index}>
                <NavLink 
                  to={{
                    pathname: subMenu.pathname,
                  }}>
                    <h5>{subMenu.name}</h5>
                  </NavLink>
              </div>
            })}
          </ul>
        })}
      </section>
      <section className="version">
        Versão: {process.env.REACT_APP_VERSION}
      </section>
    </footer>
  )
}