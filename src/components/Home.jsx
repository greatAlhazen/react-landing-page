import { useState } from 'react';
import styled from 'styled-components';
import { mediumScreen, button} from "../responsive";

const Container = styled.section`
    height:100vh;
    width:100%;
    background-image: linear-gradient(to right bottom, #301008, #B73225),
    ${(props) => `url(${props.image})`};
    background-blend-mode: multiply;
    background-position:center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:3rem;
`

const Title =styled.h1`
  font-size:4rem;
  color: #f4d8ae;
  text-align:center;
`

const Button = styled.button`
${button({ 
  width:"19rem",
})}

&::before{
  content:'Best Place';
  top:0;
  left:-100%;
  position:absolute;
  width:100%;
  height:100%;
  background-color:#301008;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#f4d8ae;
  opacity:0;
  transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
}

&:hover::before{
  opacity:1;
  left:0;
}
`

const Images = styled.div`
  display:flex;
  flex-direction:column;
  gap:2rem;
  position:absolute;
  bottom:3rem;
  right:3rem;
  ${mediumScreen({ 
    position:"static",
    flexDirection:"row",
    marginTop:"3rem",
  })}
`

const Image = styled.img`
  width:5rem;
  height:5rem;
  border-radius:50%;
  object-fit:cover;
  cursor:pointer;
`


const Home = () => {
  const [image,setImage] =useState("/images/home1.jpg")
  const handleChangeImage = (value) =>{
    setImage(value);
  }

  return (
    <Container image={image}>
      <Title>It's Your Workout, Your Time, Your Body, Own It.</Title>
      <Button>Workout With Us</Button>
      <Images>
      <Image onClick={() => handleChangeImage("/images/home1.jpg")} src="/images/home1.jpg"/>
      <Image onClick={() => handleChangeImage("/images/home2.jpg")} src="/images/home2.jpg"/>
      <Image onClick={() => handleChangeImage("/images/home3.jpg")} src="/images/home3.jpg"/>
      </Images>
    </Container>
  )
}

export default Home