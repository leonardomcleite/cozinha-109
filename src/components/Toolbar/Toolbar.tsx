import React, { useEffect, useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { CompanyInterface } from '../../interfaces/company'
import { HttpClient } from '../../utils/htttp-client'

export const Toolbar = () => {

  const [phone, setPhone] = useState<any>();
  const [pos, setPos] = useState<any>(0);
  const [prevPos, setPrevPos] = useState<any>(0);
  const [fixed, setFixed] = useState<boolean>(false);

  //componentDidMount
  useEffect(() => {
    fetchCompany()
    let root = document.getElementById('root');
    if (root) {
      root.addEventListener("scroll", handleScroll, { passive: true });
    }
  }, [])

  useEffect(() => {
    if (pos >= 36 && prevPos < 36) {
      setPrevPos(pos)
      setFixed(true);
    } else if (pos < 36) {
      setPrevPos(pos)
      setFixed(false);
    }
  }, [pos, prevPos])

  const fetchCompany = async () => {
    HttpClient.get<CompanyInterface>(`${process.env.REACT_APP_API_URL}/company`).subscribe((response) => {
      setPhone(response.phone);
    })
  }

  const handleScroll = () => {
    let root = document.getElementById('root');
    root && setPos(root.scrollTop)
  }

  return (
    <>
      {phone && <div className="phone-Toolbar" >
        <p> <FaPhone/> +55 {phone}</p>
      </div>}
      <div className="Toolbar">
        <div className={`main-Toolbar ${fixed ? 'fixed' : ''}`}>
          <NavLink className="logo-link" to={{ pathname: '/'}}>
            <img alt="Cozinha 109 Logo" className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} />
          </NavLink>
          <div className="links">
            <NavLink className="button-link" to={{ pathname: '/about'}}>
              Sobre nós
            </NavLink>
            <NavLink className="button-link" to={{ pathname: '/contact'}}>
              Contato
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}