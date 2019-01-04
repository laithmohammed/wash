import React from 'react';
import Styled from 'styled-components';
// import 'babel-polyfill';

import BodyBackground from './background'

let Container = Styled.div `position:absolute;top:0px;left:0px;width:100%;height:100%;`;
let Label     = Styled.div `display:flex;align-items:center;justify-content:center;width:100%;max-width:40em;flex-direction:column;
                            transform:translateX(-50%);left:50%;position:absolute;z-index:11;text-align:center;`;
let Graphic   = Styled.img `width:50%;max-width:30em;padding-top:4em;`;
let Header    = Styled.span `font-family: 'Signika', sans-serif;font-size:2em;`;
let TestDes   = Styled.span `font-family: 'Noto Sans', sans-serif;font-size:1.4;color:#6e6e70;padding:0 1.6em;max-width:30em;height:5em;`;
let DotCon    = Styled.div `display:flex;`;
let Dot       = Styled.div `width:1em;height:1em;border-radius:50%;margin:0px 0.3em;cursor:pointer;
                            &:hover { background-color:#13a892; }`;
let BottunNext= Styled.img `width:5em;margin:2em 0px;cursor:pointer;box-shadow:0 0 10px rgba(0,0,0,0.5);border-radius:50%;`;
let Shadow    = Styled.img `position:absolute;left:0px;bottom:0px;width:30vw;z-index:10;`;


class Startup extends React.Component {
  constructor(){
    super();
    this.state = {
      index       : 0,
      icon        : [
        require('../assets/icons/chooseyourclothes.svg'),
        require('../assets/icons/schedulepickup.svg'),
        require('../assets/icons/topwashing.svg'),
        require('../assets/icons/fastdelivery.svg'),
        require('../assets/icons/boxdelivery.svg')
      ],
      title       : [
        'Choose your cloths',
        'Schedule pickup',
        'Trace washing',
        'Get on-time delivery',
        'Pay and feel satisfied'
      ],
      description : [
        'select your cloths include T-shirt, shirt, Trouser, Jeans, Blazer, Jacket, hand Kerchief, bed sheets, table cloth ... etc and keep it side',
        'Set your time and date where our delivery man will coming to you for cloths pickup, and get more feed back',
        'We will inform you by the notifications which stage your cloths in it, starting from pickup, washing, drying, iron presser and delivery time',
        'after finishing you cloths washing, our delivery man will get back your cloths to you delivery location',
        'Perfect cleaning results, toxin free, fresh cloths, feels like new and be happy because we didn’t harm our planet in the process'
      ],
      slideDot    : [
        ['#13a892','#efefef','#efefef','#efefef','#efefef'],
        ['#efefef','#13a892','#efefef','#efefef','#efefef'],
        ['#efefef','#efefef','#13a892','#efefef','#efefef'],
        ['#efefef','#efefef','#efefef','#13a892','#efefef'],
        ['#efefef','#efefef','#efefef','#efefef','#13a892'],
      ],
      shadow      : [
        require('../assets/icons/chooseyourcloths.svg'),
        require('../assets/icons/pickupman.svg'),
        require('../assets/icons/cloth.svg'),
        require('../assets/icons/paymentman.svg'),
        require('../assets/icons/payandsatisfied.svg')
      ],
      defaultIcon : require('../assets/icons/chooseyourclothes.svg'),
      defaultTitle: 'Choose your cloths',
      defaultDescr: 'select your cloths include T-shirt, shirt, Trouser, Jeans, Blazer, Jacket, hand Kerchief, bed sheets, table cloth ... etc and keep it side',
      slideDotDef : ['#13a892','#efefef','#efefef','#efefef','#efefef'],
      defaultShadw: require('../assets/icons/chooseyourcloths.svg')
    }
  }

  dotShow(title){
    let index = parseInt(title) - 1
    this.setState({
      index       : index,
      defaultIcon : this.state.icon[index],
      defaultTitle: this.state.title[index],
      defaultDescr: this.state.description[index],
      slideDotDef : this.state.slideDot[index],
      defaultShadw: this.state.shadow[index]
    })
  }

  changeData(){
    let index = this.state.index;
    index ++;
    if(index === 5){ window.location = './' }
    else{
      this.setState({
        index       : index,
        defaultIcon : this.state.icon[index],
        defaultTitle: this.state.title[index],
        defaultDescr: this.state.description[index],
        slideDotDef : this.state.slideDot[index],
        defaultShadw: this.state.shadow[index]
      })
    }
  }

  render() {
    return (
      <BodyBackground context={
        <Container>
          <Label>
            <Graphic src={this.state.defaultIcon} alt='icon' /><br/>
            <Header>{this.state.defaultTitle}</Header><br/>
            <TestDes>{this.state.defaultDescr}</TestDes><br/>
            <DotCon>
              <Dot style={{backgroundColor:this.state.slideDotDef[0]}} title='1' onClick={(e)=>{this.dotShow(e.target.title)}}> </Dot>
              <Dot style={{backgroundColor:this.state.slideDotDef[1]}} title='2' onClick={(e)=>{this.dotShow(e.target.title)}}> </Dot>
              <Dot style={{backgroundColor:this.state.slideDotDef[2]}} title='3' onClick={(e)=>{this.dotShow(e.target.title)}}> </Dot>
              <Dot style={{backgroundColor:this.state.slideDotDef[3]}} title='4' onClick={(e)=>{this.dotShow(e.target.title)}}> </Dot>
              <Dot style={{backgroundColor:this.state.slideDotDef[4]}} title='5' onClick={(e)=>{this.dotShow(e.target.title)}}> </Dot>
            </DotCon>
            <BottunNext src={require('../assets/icons/nextarrow.svg')} alt='next arrow' onClick={()=>this.changeData()}/>
          </Label>
          <Shadow src={this.state.defaultShadw} alt='shadow' />
        </Container>
      } />
    );
  }
}
export default Startup;