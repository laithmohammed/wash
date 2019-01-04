import React from 'react';
import Styled from 'styled-components';
// import 'babel-polyfill';

import BodyBackground from './background'

let ImgLogo   = Styled.img `height:10em;position:absolute;top:-6.8em;left:50%;transform:translate(-50%);cursor:pointer;`;
let Container = Styled.div `top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;width:90%;max-width:30em;`
let Form  = Styled.form `width:auto;padding:3em 2em;box-shadow:0px 0px 10px rgba(0,0,0,0.3);border-radius:0.3em;background:white;`
let Span = Styled.span `font-size:1em;font-family: 'Noto Sans', sans-serif;`;
let InputText = Styled.input `width:96%;font-size:1.3em;border:unset;outline:none;border-bottom:2px solid #13a89e;padding:0px 2%;margin-bottom:0.6em;display:block;font-family: 'Noto Sans', sans-serif;test-decoration:none;
                              &:hover { border-bottom:2px solid #25aae1; }
`;
let InputSubmit = Styled.input `display:none;`;
let ImgButton = Styled.img `width:5em;position:absolute;bottom:-2.5em;left:50%;transform:translate(-50%);cursor:pointer;`;
let TextCon   = Styled.div `width:100%;text-align:center;position:absolute;bottom:-5em;`;
let LoginSpan = Styled.span `font-family: 'Noto Sans', sans-serif;font-size:1.2em;`;
let LoginWord = Styled.a `font-family: 'Noto Sans', sans-serif;font-size:1.2em;font-weight:bold;padding 0px 0.5em;color:#0f75bc;text-decoration:none;`;


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  render() {
    return (
      <React.Fragment>
        <BodyBackground context={
        <Container>
          <Form action="./selection">
            <ImgLogo src={require('../assets/icons/washlogo.png')} alt='logo'/>
            <Span>Phone or Email</Span>
            <InputText type='text' name='user'/>
            <Span>Password</Span>
            <InputText type='password' name='password'/>
            <label htmlFor='registerButton'>
              <ImgButton src={require('../assets/icons/nextarrow.svg')} alt='next arrow'/>
            </label>
            <InputSubmit type='submit' name='submit' id={'registerButton'} />
          </Form>
          <TextCon>
            <LoginSpan>Don't have an account?</LoginSpan><LoginWord href='/register'>Register</LoginWord>
          </TextCon>
        </Container>
        } />
      </React.Fragment>
    );
  }
}

export default Login;