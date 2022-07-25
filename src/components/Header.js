import React, {useState}  from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import {selectCars} from '...features/car/carSlice'
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
export default function Header() {
  const[closeBtnState , setCloseBtnState] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars);
  return (
    <Container>
      <a>
     < img src ="/images/logo.svg" alt='' />
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
        <a key={index} href='#'>{car}</a>
        ))}
        {/* <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a> */}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={()=>setCloseBtnState(true)} />
      </RightMenu>
      <BurgerNav show ={closeBtnState}>
         <CloseWrap>
         <CustomClose onClick={()=>setCloseBtnState(false)} />
         </CloseWrap>
         {cars && cars.map((car,index)=>(
         <li key={index}><a href='#'>{car}</a></li>
        ))}

        
       {/* <li><a href='#' >Model S</a></li>
        <li><a href='#'>Model 3</a></li>
        <li><a href='#'>Model Y</a></li>
         */}
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Readsetr</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Chargin</a></li>
        <li><a href='#'>Test Drive</a></li> 
      </BurgerNav>
    </Container>
  )
}


const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;  //vertical 
  justify-content:space-between;  
  padding:0 20px;
  top:0;
  right:0;
  left:0;
  z-index:1;
`
const Menu = styled.div` 
  display:flex;
  align-items:center;
  flex:1;
  justify-content:center;
  a{
    font-weigth:600;
    text-transform:uppercase;
    padding:0 10px;
  }
  @media(max-width:768px){
    display:none;
  }
`
const RightMenu = styled.div`
display:flex;
align-items:center;
 a{
    font-weigth:600;
    text-transform:uppercase;
    margin-right:10px; 
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`

const BurgerNav = styled.div`
  position :fixed;
  top:0;
  bottom:0;
  right:0;
  background-color:white;
  width:300px;
  z-index:100;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform : ${props => props.show ? "translateX(0)":"translateX(100%)"};
  transition:transform 0.5s ;
  li{
    padding:15px 0;
    border-bottom:1px solid rgba(0 , 0 , 0 ,.2);
    a{
      font-weight:600;
    }
  }
  `
  const CustomClose = styled(CloseIcon)`
    cursor:pointer;
  `

  const CloseWrap = styled.div`
    display:flex;
    justify-content:flex-end;
    
  `