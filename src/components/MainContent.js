import React, {useState, useEffect, useRef} from 'react';
import {Botonera, BotonesMain } from './Styles';
import Button from './Button';
import { MdArrowDropDownCircle } from 'react-icons/md';
import { FaClock, FaPhoneAlt, FaProjectDiagram, FaFile  } from "react-icons/fa";
import DropDownMenu from './DropDownMenu';
import { menuData } from './menuData';


function MainContent() {

const [openDropdownId, setOpenDropdownId] = useState(null);
const dropdownRef = useRef(null);

  const toggleDropDown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdownId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <BotonesMain>
        <Button as="a" href="http://gunnar.produccion.inaes/consultahorario" target="_blank" type="horarioColor" btn="main">control horario <FaClock /></Button>
        <Button as="a" href="http://internos.usuarios.inaes/dirtel/?ai=dirtel||15000073" target="_blank" type="telefonosColor" btn="main">directorio telefónico <FaPhoneAlt/></Button>
        <Button as="a" href="http://gunnar.produccion.inaes/SistemaGTI" target="_blank" type="horarioColor" btn="action">Integrador <FaProjectDiagram /></Button>
        <Button as="a" href="http://aplicacion.produccion.inaes/lanzador/Manuales.aspx" target="_blank" type="horarioColor" btn="action">manuales internos <FaFile /></Button>
      </BotonesMain>
      
      <Botonera>
        <Button type="coopColor" btn="main" onClick={() => toggleDropDown(1)} >cooperativas <MdArrowDropDownCircle/></Button>
        <Button type="mutualesColor" btn="main" onClick={() => toggleDropDown(2)}>mutuales <MdArrowDropDownCircle/></Button>
        <Button type="art9Color" btn="main" onClick={() => toggleDropDown(3)}>artículo 9 <MdArrowDropDownCircle/></Button>
        <Button type="uifColor" btn="main" onClick={() => toggleDropDown(4)}>uif <MdArrowDropDownCircle/></Button>
        <Button type="digitalizacionColor" btn="main" onClick={() => toggleDropDown(5)}>digitalización <MdArrowDropDownCircle/></Button>
        <Button type="registrosColor" btn="main" onClick={() => toggleDropDown(6)}>registros <MdArrowDropDownCircle/></Button>
        <Button type="reportesColor" btn="main" onClick={() => toggleDropDown(7)}>reportes <MdArrowDropDownCircle/></Button>
        <Button type="dineroColor" btn="main" onClick={() => toggleDropDown(8)}>económicas <MdArrowDropDownCircle/></Button>
      </Botonera>
      
      {menuData.map(({ id, items }) => (
        <div key={id}>
          {openDropdownId === id && <DropDownMenu items={items} ref={dropdownRef} />}          
        </div>
      ))}          
    </div>
  );
}

export default MainContent