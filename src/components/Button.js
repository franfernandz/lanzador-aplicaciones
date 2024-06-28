import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ type, btn, children, onClick, ...rest }) => {
  const ButtonComponent = getButtonType(btn);
  return (
    <ButtonComponent type={type} onClick={onClick} {...rest}>
      {children}
    </ButtonComponent>
  );
}

const getButtonType = (btn) => {
  switch (btn) {
    case 'main':
    default:
      return MainButton;
    case 'action':
      return ActionButton;
  }
}

//estilos de los botones del menú

const buttonBaseStyles = css`
position: relative;
padding: 1.2rem .4rem;    
font-size: 1.2rem;
font-family: 'Poppins';
font-weight: 300;
text-transform: uppercase;
color: #FFF;
border: none;
border-radius: .4rem;
cursor: pointer;
text-decoration: none;
  :hover {
    cursor: pointer;
    opacity: .5;
  }
`;

const colors = {
    coopColor: "#005f73",
    mutualesColor: "#0a9396",
    art9Color: "#94d2bd",
    uifColor: "#e09f3e",
    reportesColor: "#ee9b00",
    registrosColor: "#673F69",
    digitalizacionColor: "#ca6702",
    dineroColor: "#bb3e03",
    horarioColor: "#c5283d",
    telefonosColor:"#c5283d",
}


//estilos de los botónes del menú principal
const MainButton = styled.button`
  ${buttonBaseStyles};
  background-color: ${({ type }) => colors[type]};
  color: #FCFFE0;
  border: none;
 `;

const ActionButton = styled.button`
  ${buttonBaseStyles};
  background-color: #FCFFE0;
  color: ${({ type }) => colors[type]};
  border: ${({ type }) => `1px solid ${colors[type]}`};
  `;
export default Button;