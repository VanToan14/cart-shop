import React,{useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const SidebarLabel = styled.span`
  margin-left: 16px;
`;
export const NavMenu = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
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
const DropdownLink = styled(Link)`
  background: #98FB98;
  height: 60px;
  padding-right:15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  
  &:hover {
    background: #11ed69;
    cursor: pointer;
  }
`;
const NavLine=styled.div`
position:fixed;
top:40px;
`;


function Menu({ item }){
    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);

    return(
        <>
            <NavMenu>
                <NavLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.title}
                </div>
                <div>
                {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                    ? item.iconClosed
                    : null}
                </div>
                </NavLink>
                <NavLine>
                {subnav &&
                    item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index}>
                        <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
                </NavLine>
                
          </NavMenu>
          
        </>
    )
}
export default Menu