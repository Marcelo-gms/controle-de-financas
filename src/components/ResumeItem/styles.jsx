import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #FFF;
    border-radius:5px;
    padding: 5px 15px;
    width: 30%;

    @media (max-width:540px) {
        width: 20%;

    p{
        font-size: 14px;
    }
    span{
        font-size:20px
    }

    svg{
       
        
    }
    }

`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 0;

  svg {
    width: 25px;
    height: 25px;
    color: #000;
  }

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    column-gap: 0px;
    row-gap: 0;
  }
`;

export const HeaderTitle = styled.p`
    font-size:20px
`

export const Total = styled.span`

    font-size: 30px;
    font-weight:bold;
    text-align:center;

`