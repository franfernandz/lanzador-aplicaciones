import styled from "styled-components";

export const Nav = styled.header `
width: 100vw;
height: 70px;
display: grid;
grid-template-columns: reapeat(3,1fr);
align-items: center;
padding: .5rem;
background-color: #293462;
color: #F8F8F8;
border-bottom: .2rem solid #F2BA52;
`

export const Title = styled.h1 `
font-family: 'Poppins';
font-weight: 200;
letter-spacing: 0.12rem;
font-size: 1.8rem;
text-transform: uppercase;
padding: 0;
`

export const Botonera = styled.menu`
margin: 2rem auto;
width: 80%;
height: 100%;
padding: 1rem;
background: transparent;
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 2rem;
justify-content: center;
`
export const BotonesMain = styled.div`
padding: 1.5rem;
margin-top: 2%;
display: grid;
grid-template-columns: repeat(2,1fr);
gap: 1rem;
align-items: center;
border-bottom: .1rem solid #eee;
`
export const FooterContent = styled.div`
display: flex;
justify-content: center;
width: 100vw;
margin-top: 10%;
padding: 2.5rem .4rem;
background-color: #293462;
color: #f8f8f8;
text-align: center;
font-weight: regular;
font-size: .6rem;
letter-spacing: .15rem;
border-top: .2rem solid #F2BA52;
`

export const DropDown = styled.nav`
display: flex;
flex-direction: column;
position: absolute;
top: 50%;
left: 5rem;
right: 5rem;
margin: 0 auto;
padding: 3rem;
max-width: 40%;
width: auto;
height: auto;
border-radius: .8rem;
background: rgba(200,100,21,.7);
z-index: 1;
color: #FCFFE0;
&::before {
    position: absolute;
    top: -1rem;
    right: -1rem;
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
    background: white;
}

`
export const DropDownList = styled.ul`
diaplay: flex;
flex-direction: column;
gap: 2rem;
padding: 0;
margin: 0;
`
export const DropDownItem = styled.li`
list-style: none;
padding: .5rem 1rem;
cursor: pointer;
color: #FCFFE0;
text-transform: uppercase;
font-size: 1.4rem;
box-shadow: 0 0 10rem rgba(100,100,100,.9);

&:hover {
    background-color:#FFF4E1;
    border-radius: .8rem;
    color: #222;
}
a {
    text-decoration: none;
    color: inherit;
}
`