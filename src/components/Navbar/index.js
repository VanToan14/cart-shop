import React, { useState } from 'react';
import '../../App.css'
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../../data/SidebarData"
import SubMenu, { SidebarLink } from './SubMenu';
import { IconContext } from "react-icons/lib";
import Menu, { NavMenu } from './Menu';
import ListProduct from '../product/ListProduct';
///hàm cài đặt react-icons/fa :yarn add react-icons
export const Nav = styled.nav`
  background: #98FB98;
  padding-top: 10px!important;
  padding-bottom: 10px!important;
  display: flex;
  justify-content: space-around;
  z-index: 12;
  position:fixed;
  top:0;
  left:0;
  right:0;
}
  @media screen and (max-width: 768px)
  {
    padding-top: 30px!important;
    padding-bottom: 30px!important;
  
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavIcon = styled(Link)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: -28px;
  left: 40px;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 13;
`;
const SidebarNav = styled.nav`
display: none;
@media screen and (max-width: 768px){
  background: #98FB98;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 14;
}
`;
const Navdiv = styled.div`
  position:fixed;
  top:50px;
`;
export const NavLink = styled(Link)`
  color: #f5f5f5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color:#2c4d39;
  }
`;


// const Di =styled.div`
// display:hide!important;
// position: fixed;
// top:0;
// bottom:0;
// right: 0;
// left:0;
// display: ${({ sidebar }) => (sidebar ? "none" : "block")};
// background-Color:rgba(0,0,0,0.4);
// zindex: 1;
// `;
const SidebarWrap = styled.div`
  width: 100%;
`;
const Navbar = ({ item, showtotalcart }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav >
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          {/* <NavMenu>
            <NavLink to='/'>
              Home
            </NavLink>
            <NavLink to='/about'>
              About
            </NavLink>
            <NavLink to='/events'>
              Events
            </NavLink>
            <NavLink to='/annual' >
              Annual 
            </NavLink>
            <NavLink to='/team' >
              Teams
            </NavLink>
            <NavLink to='/blogs' >
              Blogs
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='sign-in'>Sign In</NavBtnLink>
          </NavBtn> */}

          <div style={{ display: 'inline-flex' }}>
            {SidebarData.map((item, index) => {
              return <Menu item={item} key={index} />;
            })}
          </div>
          <NavMenu>
            <NavLink to='/cart'>
              Cart {' '}
              <button style={{ marginLeft: '5px' }} className="badge">{showtotalcart(ListProduct)}</button>
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='sign-in'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <Navdiv>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </Navdiv>
            <div style={{ position: 'absolute', bottom: '10%' }}>
              <SidebarLink to='/cart'>
                Cart {' '}
                <button style={{ marginLeft: '5px' }} className="badge">{showtotalcart(ListProduct)}</button>
              </SidebarLink>
            </div>
          </SidebarWrap>
        </SidebarNav>
        {/* <Di onClick={showSidebar} ></Di> */}

      </IconContext.Provider>
    </>
  );
};

export default Navbar;