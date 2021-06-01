import { useEffect, useState } from 'react'
import { CompanyInterface } from '../../interfaces/company'
import { HttpClient } from '../../utils/htttp-client'

export const About = () => {
  
  const [name, setName] = useState<any>()
  const [phone, setPhone] = useState<any>()
  
  //componentDidMount
  useEffect(() => {
    fetchCompany()
  }, [])

  const fetchCompany = async () => {
    HttpClient.get<CompanyInterface>(`${process.env.REACT_APP_API_URL}/company`).subscribe((response) => {
      setName(response.name);
      setPhone(response.phone);
    })
  }

  return (<div className="About main-container">
    <h1>About</h1>
    <h2>About</h2>
    <h3>About</h3>
  </div>)
}