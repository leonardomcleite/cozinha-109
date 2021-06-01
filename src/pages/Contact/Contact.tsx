import { useEffect, useState } from 'react'
import { CompanyInterface } from '../../interfaces/company'
import { HttpClient } from '../../utils/htttp-client'

export const Contact = () => {
  
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

  return (<div className="Contact main-container">
    <h1>Contact</h1>
    <h2>Contact</h2>
    <h3>Contact</h3>
  </div>)
}