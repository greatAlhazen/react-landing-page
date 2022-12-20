import styled from 'styled-components';
import { button,mobileScreen } from "../responsive";
import EditLocationIcon from '@mui/icons-material/EditLocation';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

const Container = styled.div`
    padding:7rem 2rem;
    position:relative;
    margin-top:7rem;
    background-image: linear-gradient(to right bottom, #301008, #B73225),
    url('/images/contact.jpg');
    background-blend-mode: difference;
    background-position:center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Heading = styled.h1`
    position:absolute;
    top:-5rem;
    left:50%;
    transform:translateX(-50%);
    font-size:3rem;
`;

const Wrapper = styled.div`
    display:flex;
    padding:3rem;
    border:2px solid rgba(0,0,0,.3);
    background-color:rgba(255,255,255,.5);
    border-radius:1rem;
    width:50rem;
    position:relative;
    ${mobileScreen({ flexDirection:'column' })};
`;

const Form = styled.form`
    width:50%;
    display:flex;
    flex-direction:column;
    gap:5rem;
    ${mobileScreen({ width:'100%' })};
`;

const FormTitle = styled.h4`
    font-size:2rem;
    color:#000;
`

const InputWrapper = styled.div`
    position:relative;
`;

const Input = styled.input`
    width:100%;
    height:2rem;
    border-bottom:1px solid rgba(0,0,0,.7);
    background-color:transparent;
    outline:none;
    font-size:1.4rem;

    &:focus ~ span, &:valid ~ span{
        top:-3rem;
        &:after{
            content:':'
        }
    }
`;


const InputTitle = styled.span`
    position:absolute;
    top:0;
    left:0;
    font-size:1.6rem;
    transition:.5s;
`;

const TextArea = styled.textarea`
    width:100%;
    height:20rem;
    border:2px solid rgba(0,0,0,.8);
    background-color:transparent;
    color:#fff;
    font-size:1.6rem;

    &::placeholder{
        color:#000;
        font-size:1.1rem;
    }
`;

const Button = styled.button`
    ${button({ 
    width:"16rem",
    })}
    margin:0 auto;

    &:hover{
        background-color:#000;
        color:#fff;
      }
`;

const Deatils = styled.div`
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:3rem;
      flex-direction:column;
      ${mobileScreen({ marginTop:'3rem' })};
`;

const Deatil = styled.div`
      display:flex;
      font-size:3rem;
      align-items:center;
      gap:1rem;

      &:nth-child(1){
        margin-left:5rem;
         ${mobileScreen({ marginLeft:'0' })};
      }
`;

const DeatilTitle = styled.h4`
      font-size:1.6rem;
`;

const Contact = () => {
  return (
    <Container id='contact'>
        <Heading>Contact Us</Heading>
        <Wrapper>
            <Form>
                <FormTitle>Have A Question?</FormTitle>
            <InputWrapper>
            <Input type='text' required/>
            <InputTitle>Your Name</InputTitle>
            </InputWrapper>
            <InputWrapper>
            <Input type='email' required/>
            <InputTitle>Your Email</InputTitle>
            </InputWrapper>
            <InputWrapper>
            <TextArea required placeholder='Enter Your Message'></TextArea>
            </InputWrapper>
            <Button>Send</Button>
            </Form>
            <Deatils>
                <Deatil>
                    <EditLocationIcon fontSize='inherit' color='action'/>
                    <DeatilTitle>random addr. random no,Germany</DeatilTitle>
                </Deatil>
                <Deatil>
                    <ContactPhoneIcon fontSize='inherit' color='secondary'/>
                    <DeatilTitle>+256420</DeatilTitle>
                </Deatil>
                <Deatil>
                    <LocalPostOfficeIcon fontSize='inherit' color='success'/>
                    <DeatilTitle>email@email.co</DeatilTitle>
                </Deatil>
            </Deatils>
        </Wrapper>
    </Container>
  )
}

export default Contact