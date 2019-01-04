import React from 'react';
import Styled from 'styled-components'

import BodyBackground from './background'

let Container = Styled.div `position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;max-width:40em;`;
let Cover     = Styled.img `width:80%;`;
let LetGet    = Styled.span `font-family: 'Signika', sans-serif;font-size:2em;`;
let LetDes    = Styled.p `font-family: 'Noto Sans', sans-serif;font-size:1.4;color:#6e6e70;padding:0 1.6em`;
let LoginBut  = Styled.div `width:80%;max-width:20em;text-align:center;padding:0.6em 0em;background:linear-gradient(#25aae1,#0f75bc);
                            font-family: 'Noto Sans', sans-serif;border-radius:1.2em;color:white;cursor:pointer;font-weight:bold;`;
let CreateBut = Styled.div `width:80%;max-width:20em;text-align:center;padding:0.6em 0em;background-color:white;font-family: 'Noto Sans', sans-serif;
                            border-radius:1.2em;cursor:pointer;border:1px solid black;margin-top:1.4em;font-weight:bold;color:black;`;
let Link      = Styled.a `text-decoration:none;`;
class Indexpage extends React.Component {
  render() {
    return (
      <BodyBackground context={
        <center><Container>
          <Cover src={require('../assets/icons/cover1.png')} alt='cover'/><br/>
          <LetGet>Let's Get Start</LetGet><br/>
          <LetDes>Set your location, select a convenient time and our driver will be on the way ... Don't warry, we will bring bag!</LetDes>
          <Link href='/register'><LoginBut>Create account</LoginBut></Link>
          <Link href='/login'><CreateBut>Login</CreateBut></Link>
        </Container></center>
      } />
    );
  }
}
export default Indexpage;
