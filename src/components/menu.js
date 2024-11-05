import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import media from "styled-media-query"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuList = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: flex-start;

  ${media.greaterThan("730px")`
    margin-top: 0;
  `}
`

const MenuItem = styled.span`
  font-weight: 700;
  margin-right: 1rem;
  font-size: 1rem;
  line-height: 1.6rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
`
const MenuLink = styled.a`
  color: black;
  text-decoration: none;
  &:active {
    color: black;
  }
   &:visited {
    color: black;
  }&:hover {
    text-decoration: underline;
`



const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <Link className="menu-link" activeStyle={{ fontWeight: "bold", color: "white", background: "black"}} to="/portfolio">works</Link>
      </MenuItem>

      <MenuItem>
        <MenuLink href="https://www.linkedin.com/in/lital-levin-4a989010/">linkedin</MenuLink>
      </MenuItem>
      <MenuItem>
       <MenuLink href="mailto:litalonet@gmail.com">
email me
</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="https://github.com/LL27/llv10">source</MenuLink>
      </MenuItem>
    </MenuList>
  )
}

export default Menu
