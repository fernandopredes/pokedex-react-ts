import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    color: #17171B;
  }

  & > .brand{
    font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #17171B;
}
  .favorites{
    text-align: center;

  }
`
export const BtnGoBack = styled(Link)`
  display: inline;
 font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #747476;




  `
  export const TotalPok = styled.span`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
    margin-right: 2rem;

  `
