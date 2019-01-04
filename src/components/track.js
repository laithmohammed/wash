// import React from 'react';
// import Styled from 'styled-components';
// import 'babel-polyfill';
// import BodyBackground from './background'

// //let Form  = Styled.form `width:auto;padding:3em 2em;box-shadow:0px 0px 10px rgba(0,0,0,0.3);border-radius:0.3em;background:#E8E8E8;`

// let Container = Styled.div `top:40%;left:40%;transform:translate(-40%,-40%);position:absolute;width:100%;max-width:30em; height:100%;background:#E8E8E8;  min-width: 10em;
// `


// //let Container = Styled.div `position:absolute;top:0px;left:0px;width:100%;height:100%;`;
// let Form     = Styled.div `display:flex;align-items:center;justify-content:center;width:100%;max-width:40em;flex-direction:column;
//                             transform:translateX(-50%);left:50%;position:absolute;z-index:11;text-align:center;`;
// let Header= Styled.div `display:flex;align-items:center;  align-content: flex-start;
// ;width:100%;max-width:40em;background-color:#25AAE1;height :100px;color:#25AAE1;font-size:1em;`
// let Order=Styled.div`display: flex;flex-wrap: nowrap;  flex-direction: row; align-items: center;height :50px;background:White;
// ;width:100%;max-width:40em; box-shadow:0px 7px 22px -10px #111;`
// let Span = Styled.div `font-size:1em;font-family: 'Noto Sans', sans-serif;  align-self: stretch;  height: 100%; flex:1; &:hover {  color: #13a892; border-width:4px;   border-bottom-style:solid;} `
// let Img = Styled.img `width:10%;height:10%;position:relative;transform:translate(-40%);cursor:pointer;`;
// let Cont=Styled.section`width:100%;max-width:35em;flex:1;text-align:center;border:1px solid gray;flex:1`
// let In=Styled.div`padding:5%;margin-top:2%;    box-shadow: 0px 3px 4px rgba(0,0,0,0.3);border-radius:0.3em;background:white;display:flex;flex-direction:column`
// let Button=Styled.button`width: 145px;height:42px;border-radius: 10px;border: 1px solid gray;box-shadow: 0 0px 15px rgba(0, 0, 0, 0.16);margin: 25px;padding: 10px;
// background:white;flex: 1;align-items:right;justifyContent: 'space-between';&:focus {  box-shadow: 0 0px 15px ##13a892;}`
// class Track extends React.Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         list: []
//       }
//     }

//     render() {
//       return (
//         <React.Fragment>
//           <BodyBackground context={
//                 <Container>
//                 <Form>
//                 <Header> </Header>
//                 <Order >
//            <Span >Order Details</Span>
//             <Span>Past Orders</Span></Order>
            
//            <In>
//              <Cont>
//               <Img src={require('../assets/icons/true.svg')}/>
//               </Cont>
//               <Cont>

//               <Img src={require('../assets/icons/true.svg')}/>
//               </Cont>
//               <Cont>
//               <Img src={require('../assets/icons/true.svg')}/>

//               </Cont>
//               <Cont>
//               <Button>Cancel Order</Button>
//               <Button>View Details</Button></Cont>
//               </In>
              
//              </Form>
//           </Container> }/>
    
//         </React.Fragment>
//       );
//     }
//   }
  
//   export default Track;