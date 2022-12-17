import styled from 'styled-components';
import Groups2Icon from '@mui/icons-material/Groups2';
import Person2Icon from '@mui/icons-material/Person2';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DoneIcon from '@mui/icons-material/Done';
import { button, heading } from "../responsive";

const Container = styled.div`
    padding:7rem 0;
`

const Heading = styled.div`
    ${heading}

    &:hover{
        transform:skewX(5deg);
        background-color:#932432;
    }
`

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:2rem;
    flex-wrap:wrap;
`

const Card = styled.div`
    width:30rem;
    padding:2rem;
    font-size:3rem;
    border:2px solid rgba(0,0,0,0.6);
    border-radius:1rem;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const Title = styled.h1`
    text-align:center;
    font-size:2rem;
    margin-top:2rem;
`

const Price = styled.h4`
    text-align:center;
    font-weight:bold;
    position:relative;
    margin-top:2rem;

    &::before{
        content:'$';
        position:absolute;
        font-size:1.5rem;
        left:-1rem;
        font-weight:300;
    }

    &::after{
        content:'month';
        position:absolute;
        font-size:1.6rem;
        top:2rem;
        font-weight:300;
    }
`

const Offers = styled.div`
    display:flex;
    align-items:center;
    gap:1.5rem;
    margin-top:2rem;
    align-self:flex-start;
`

const Offer = styled.h4`
    font-size:1.7rem;
    font-weight:300;
`

const Button = styled.button`
    ${button({ 
    width:"17rem",
  })}

    background-color:#000;
    color:#fff;
    margin-top:2rem;
`

const plans = () => {
  return (
    <Container>
        <Heading>Choose Best Plan</Heading>
        <Wrapper>
            <Card>
                <Person2Icon fontSize='inherit'/>
                <Title>Personal</Title>
                <Price>49.9</Price>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Button>Choose Plan</Button>
            </Card>
            <Card>
                <Groups2Icon fontSize='inherit'/>
                <Title>Group</Title>
                <Price>29.9</Price>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Button>Choose Plan</Button>
            </Card>
            <Card>
                <FitnessCenterIcon fontSize='inherit'/>
                <Title>Custom</Title>
                <Price>69.9</Price>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Offers>
                <DoneIcon/>
                <Offer>Lorem ipsum dolor sit amet consectetur adipisicing.</Offer>
                </Offers>
                <Button>Choose Plan</Button>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default plans