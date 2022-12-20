import styled from 'styled-components';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { mediumScreen, mobileScreen } from "../responsive";


const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:7rem;
    position:relative;
    ${mobileScreen({ display:"block" })}
   

    &::before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background-color:#f4d8ae;
        clip-path: circle(30% at 0 0);
        z-index:-1;
    }

    &::after{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background-color:#301008;
        clip-path: circle(30.7% at 100% 100%);
        ${mobileScreen({ display:"none",})}
    }

`;

const Heading = styled.h1`
    position:absolute;
    top:-3rem;
    left:50%;
    transform:translateX(-50%);
    font-size:3rem;
    -webkit-background-clip: text;
    color:transparent;
    margin-bottom: 2rem;
    transtion:.6s all;
    background-color: #301008;
    cursor:pointer;

    &:hover{
        background-color:#283747;
    }

`;

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:2rem;
    ${mediumScreen({ flexDirection: "column" ,marginTop:'5rem'})}
`;

const Content = styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
    ${mediumScreen({ alignItems: "center" })}
`;

const Title = styled.h1`
    font-size:3rem;
    ${mobileScreen({ fontSize:"2rem" })}
`;

const Desc = styled.p`
    font-size:2rem;
    opacity:.7;
    color:#d85c27;
    ${mobileScreen({ fontSize:"1.7rem" })}
`;

const Newsletter = styled.div`
    display:flex;
    align-items:center;
`;

const Input = styled.input`
    border-bottom:1px solid rgba(0,0,0,.7);
    padding:1rem;
`;

const Button = styled.button`
    border:none;
    outline:none;
    padding:1rem;
    background-color:#d85c27;
    color:#f4d8ae;
`;

const Offers = styled.div`
    margin-top:2rem;
`;

const OffersTitle = styled.h1`
    font-size:3rem;
    text-align:center;
    margin-bottom:2rem;
`


const Offer  =styled.div`
    display:flex;
    align-items:center;
    gap:1rem;
    margin-bottom:1rem;
`;

const OfferDesc = styled.span`
    font-size:1.5rem;
    font-weight:bold;
`;

const Image = styled.img`
    height:80vh;
`;


const About = () => {
  return (
    <Container id='about'>
        <Heading>About Us</Heading>
        <Wrapper>
        <Content>
            <Title>The body achieves what the mind believes.</Title>
            <Desc>To Take Advantage of The Discount,Hurry Up</Desc>
            <Newsletter>
                <Input type="text" placeholder="Your Email"/>
                <Button>Send Now</Button>
            </Newsletter>
            <Offers>
                <OffersTitle>Our Principles</OffersTitle>
                <Offer>
                    <DoneOutlineIcon/>
                    <OfferDesc>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cum obcaecati a dolores tenetur eius!
                    </OfferDesc>
                </Offer>
                <Offer>
                    <DoneOutlineIcon/>
                    <OfferDesc>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cum obcaecati a dolores tenetur eius!
                    </OfferDesc>
                </Offer>
                <Offer>
                    <DoneOutlineIcon/>
                    <OfferDesc>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cum obcaecati a dolores tenetur eius!
                    </OfferDesc>
                </Offer>
            </Offers>
        </Content>
        <Image src="/images/aboutBack.png"/>
        </Wrapper>
    </Container>
  )
}

export default About