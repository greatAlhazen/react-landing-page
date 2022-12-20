import styled from 'styled-components';

const Container =styled.footer`
    height:1rem;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:2rem;
    font-size:2.6rem;
    background-color:#301008;
    color:#fff;
`;

const Footer = () => {
  return (
    <Container>
        Designed by Enes Uraz 
    </Container>
  )
}

export default Footer