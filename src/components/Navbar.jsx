import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import { mediumScreen } from "../responsive";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
  height: 7rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Image = styled.img`
  width: 6rem;
  height: 6rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #301008;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position:absolute;
    top:7rem;
    left:0;
    min-height:100vh;
    width:20rem;
    justify-content:center;
    background-color:#d85c27;
    gap:3rem;
    display: ${(props) => props.responsive ? "flex" : "none"}
  }
`;

const ListItem = styled.li``;

const Button = styled.a`
  font-size: 2rem;
  cursor: pointer;
  background-image: linear-gradient(
    130deg,
    transparent 0%,
    transparent 50%,
    #301008 50%
  );
  background-size: 250%;
  transition-property: all;
  transition-duration: 0.4s;
  transition-delay: 0.2s;
  ${mediumScreen({ fontSize: "3rem" })}

  &:hover{
    padding: 1rem;
    background-position: 100%;
    color: #ffffff;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const LinkItem = styled.a`
  font-size: 3rem;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const Menu = styled.div`
  width: 6rem;
  height: 6rem;
  position: absolute;
  top: 7rem;
  right: 0.5rem;
  background-color: #fff;
  border-radius: 50%;
  color: #301008;
  font-size: 3rem;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${mediumScreen({ display: "flex" })}
`;

const Navbar = () => {
    const [responsive,setResponsive] = useState(false);
    const handleResponsive = () =>{
        setResponsive(!responsive);
    }

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src="/images/logo.png" />
          <Title>FitNesss</Title>
        </Logo>
        <List responsive={responsive}>
          <ListItem>
            <Button href="#home">Home</Button>
          </ListItem>
          <ListItem>
            <Button href="#about">About</Button>
          </ListItem>
          <ListItem>
            <Button href="#services">Services</Button>
          </ListItem>
          <ListItem>
            <Button href="#pricing">Pricing</Button>
          </ListItem>
          <ListItem>
            <Button href="#contact">Contact</Button>
          </ListItem>
        </List>
        <Links>
          <LinkItem color="#3b5998" href="#">
            <FacebookIcon fontSize="inherit" color="inherit" />
          </LinkItem>
          <LinkItem color="#bc2a8d" href="#">
            <InstagramIcon fontSize="inherit" color="inherit" />
          </LinkItem>
          <LinkItem color="#1DA1F2" href="#">
            <TwitterIcon fontSize="inherit" color="inherit" />
          </LinkItem>
          <LinkItem></LinkItem>
        </Links>
      </Wrapper>
      <Menu onClick={handleResponsive}>
       {!responsive ? <MenuIcon color="inherit" fontSize="inherit" /> :
       <CloseIcon color="inherit" fontSize="inherit" />
       } 
      </Menu>
    </Container>
  );
};

export default Navbar;
