import React from 'react'
import { FooterContent } from './Styles'

function Footer() {
  const anoActual = new Date().getFullYear(); //función para tomar el año actual
  

  return (
    <div>
        <FooterContent>Av. Belgrano 1656 (C1093AAR) • Ciudad Autónoma de Buenos Aires - Tel. (011) 4124-9300 • CSDI { anoActual }</FooterContent>        
    </div>
  )
}

export default Footer