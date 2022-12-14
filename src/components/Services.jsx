import styled from 'styled-components';
import { button, heading } from "../responsive";

const Container = styled.div`
  padding:5rem 1rem;
`;

const Heading = styled.h1`
${heading}

  &:hover{
    transform:skewY(4deg);
    background-color:#932432;
}
`;

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:2rem;
  flex-wrap:wrap;
`;

const Card = styled.div`
  background-color: ${(props) => props.color};
  width:33rem;
  height:26rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:2rem;
  padding:3rem;
`;

const Image = styled.img`
  width:8rem;
  height:8rem;
`;

const Title = styled.h2`
  font-size:4rem;
  color:#000;
`;

const Desc = styled.p`
  font-size:1.5rem;
  color:#000;
  opacity:.6;
`;

const Button = styled.button`
${button({ 
    width:"16rem",
  })}
  transtion:.5s;

  &:hover{
    background-color:${(props) => props.color};
    color:#000;
  }
`

const Services = () => {
  return (
    <Container>
        <Heading>Our Services</Heading>
        <Wrapper>
            <Card color='#b999be'>
            <Image src="/images/personal.png"/>
            <Title>Personal Training</Title>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Desc>
            <Button color='#14365d'>Try Now</Button>
            </Card>
            <Card color='#14365d'>
            <Image src="/images/group.png"/>
            <Title>Group Training</Title>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </Desc>
            <Button color='#dc7027'>Try Now</Button>
            </Card>
            <Card color='#dc7027'>
            <Image src="/images/telephone.png"/>
            <Title>7/24 Contact</Title>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </Desc>
            <Button color='#b999be'>Try Now</Button>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Services