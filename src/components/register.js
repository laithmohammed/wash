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
let LoginWord = Styled.a `font-family: 'Noto Sans', sans-serif;font-size:1.2em;font-weight:bold;padding 0px 0.5em;color:#0f75bc;text-decoration:none;text-shadow: 0 0 4px #ffffff;`;
let ErrorSpan = Styled.span `color:red;font-family: 'Noto Sans', sans-serif;font-size:12px;`

const Error = [
  'username isn\'t available,try another one',
  'your Phone is linked with other account, try another one',
  'your Email is linked with other account, try another one',
  'your password length must be more than 8 characters',
  'your password length must be less than 30 characters',
  'your password confirm isn\'t matched '
];
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username   : '',
      userUniq   : undefined,
      email      : '',
      emailUniq  : undefined,
      phone      : '',
      phoneUniq  : undefined,
      password   : '',
      repassword : '',
      permitKey  : 0 ,
      error      : []
    }
  }

  setData(e){
    switch (e.target.name) {
      case 'username'  : this.setState({username   : e.target.value});this.fetchData('checkUniqUsername',e.target.value,0);break;
      case 'phone'     : this.setState({phone      : e.target.value});this.fetchData('checkUniqPhone',e.target.value,1);break;
      case 'email'     : this.setState({email      : e.target.value});this.fetchData('checkUniqEmail',e.target.value,2);break;
      case 'password'  : this.setState({password   : e.target.value});break;
      case 'repassword': this.setState({repassword : e.target.value});break;
      default:break;
    }
  }
  setUniq(path,val){ 
    // let Key = this.state.permitKey + val;this.setState({permitKey : Key });console.log(this.state.permitKey)
    if(path === 'checkUniqUsername'){ this.setState({userUniq : val }); }
    if(path === 'checkUniqPhone'){ this.setState({phoneUniq : val }); }
    if(path === 'checkUniqEmail'){ this.setState({emailUniq : val }); }
    // permitKey++;
  }
  pushError(errIndex){
    let error = this.state.error;
    // error.push(Error[errIndex]);
    error.push(errIndex);
    this.setState({ error : error });
    console.log(this.state.error)
  }
  removeError(errIndex){
    let error = this.state.error;
    let index = error.indexOf(errIndex);
    let newArr = [];
    for (let i = 0; i < error.length; i++) {
      if(i !== index ){ newArr.push(error[i]) } 
    }
    this.setState({ error : newArr });
    console.log(this.state.error)
  }
  fetchData(path,dataFom,errIndex){
    fetch(`http://localhost:5678/register/${path}/${dataFom}`)
    .then(res => res.json()).then(data=>{
      if(data.valid === true){ this.setUniq(path,true);this.removeError(errIndex); }
      else{ if(this.state.error.indexOf(errIndex) === -1){this.pushError(errIndex)};this.setUniq(path,false); }
    })
  }
  submitingCheck(e){
    let permitKey = 0;
    if(this.state.userUniq){ permitKey++ }
    if(this.state.phoneUniq){ permitKey++ }
    if(this.state.emailUniq){ permitKey++ }
    if(this.state.password.length < 8) { if(this.state.error.indexOf(3) === -1){this.pushError(3)}; }else{ permitKey++;this.removeError(3); }
    if(this.state.password.length > 30) { if(this.state.error.indexOf(4) === -1){this.pushError(4)}; }else{ permitKey++;this.removeError(4); }
    if(this.state.password !== this.state.repassword) {if(this.state.error.indexOf(5) === -1){this.pushError(5)}; }else{ permitKey++;this.removeError(5); }
    if(permitKey !== 6){ e.preventDefault(); }
  }

  render() {
    return (
      <React.Fragment>
        <BodyBackground context={
        <Container>
          <Form action="http://localhost:5678/register/" method='POST' onSubmit={this.submitingCheck.bind(this)} id='registerForm'>
            <ImgLogo src={require('../assets/icons/washlogo.png')} alt='logo'/>
            <Span>Username</Span>
            <InputText type='text' name='username' pattern='[a-z0-9]{3,22}'
                       title='min 3 characters and max 22 characters with lowercase characters' defaultValue={this.state.username} onKeyUp={this.setData.bind(this)} />
            <Span>Phone</Span>
            <InputText type='text' name='phone' pattern='[0-9]{10}'
                       title='Ex : 07705320672' defaultValue={this.state.phone} onKeyUp={this.setData.bind(this)} />
            <Span>Email</Span>
            <InputText type='email' name='email' 
                       title='Ex : example@example.com' defaultValue={this.state.email} onKeyUp={this.setData.bind(this)} />
            <Span>Password</Span>
            <InputText type='password' name='password' minLength='8' maxLength='30' defaultValue={this.state.password} onChange={this.setData.bind(this)} />
            <Span>Confirm</Span>
            <InputText type='password' name='repassword' minLength='8' maxLength='30' defaultValue={this.state.repassword} onChange={this.setData.bind(this)} />
            <div>{this.state.error.map((err,i)=>{
              return <React.Fragment  key={i} ><ErrorSpan>* {Error[err]}</ErrorSpan><br/></React.Fragment>
            })}</div>
            <label htmlFor='registerButton'>
              <ImgButton src={require('../assets/icons/nextarrow.svg')} alt='next arrow'/>
            </label>
            <InputSubmit type='submit' name='submit' id={'registerButton'} />
          </Form>
          <TextCon>
            <LoginSpan>Already have an account?</LoginSpan><LoginWord href='/login'>Login</LoginWord>
          </TextCon>
        </Container>
        } />
      </React.Fragment>
    );
  }
}

export default Login;