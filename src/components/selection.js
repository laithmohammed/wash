import React from 'react';
import Styled from 'styled-components';
// import 'babel-polyfill';
import BodyBackground from './background'

let TotalPrice  = Styled.div  `position:fixed;width:96%;max-width:30em;bottom:0px;right:0px;background-color:rgba(0,0,0,0.8);z-index:100;padding:0.6em 2%
                                display:flex;align-items:center;justify-content:space-between;`;
let PriceDiv    = Styled.span `color:white;font-family: 'Noto Sans', sans-serif;font-size:1.2em;`;
let TotalItem   = Styled.span `color:white;font-family: 'Noto Sans', sans-serif;font-size:0.9em;color:silver;`;
let Slider      = Styled.div  `width:80%;height:16em;min-height:40vh;background-image:url('${require('../assets/imgs/slide2.jpg')}');
                                background-size:cover;background-repeat:no-repeat;background-position:center;transition: backgroundImage 2s,
                                box-shadow:inset 0 0 10px rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:flex-start;padding:0px 10%;`;
let SliderDiv   = Styled.div  `font-family: 'Noto Sans', sans-serif;font-size:1.2em;width:100%;max-width:30em;text-align:left;
                                background-color:rgba(0,0,0,0.5);color:white;border-left:2px solid silver;padding:1em 1em;margin:10% 0;
                                transition: width 2s, padding 2s;overflow:hidden;-webkit-transition: width 2s, padding 2s;`;
let SliderText  = Styled.div  `width:60vw;overflow:hidden;max-width:20em;`
let Container   = Styled.div  `position:absolute;width:100%;height:100%;top:0px;left:0px;`
let Section     = Styled.div  `width:100%;max-width:1000px;background-color:rgba(255,255,255,0.9);margin-bottom:6em;`;
let Header      = Styled.div  `width:auto;padding:0.4em 1.5em;text-align:left;display:flex;border-bottom:2px solid #13a892;
                                align-items:center;justify-content:space-between;cursor:pointer;`
let HeaderText  = Styled.span `font-family: 'Signika', sans-serif;font-size:1.6em;color:#13a892;`
let HeaderSlide = Styled.img  `width:2em;`
let ClothsCon   = Styled.div  `width:100%;dispaly:block;transition: height 1s;height:0em;overflow:hidden;-webkit-transition: height 1s;`
let Cloth       = Styled.div  `width:auto;border-bottom:1px solid #000;display:flex;align-items:center;justify-content:space-between;padding:0.4em 0.8em;`;
let Side        = Styled.div  `display:flex;align-items:center;justify-content:space-between;`
let ClothImg    = Styled.img  `width:3em;border-radius:50%;`
let ClothName   = Styled.span `font-family: 'Noto Sans', sans-serif;font-size:1.2em;padding-left:1em;text-align:left;`
let Price       = Styled.span `font-family: 'Noto Sans', sans-serif;font-size:0.9em;padding-left:0.4em;color:#25aae1;`;
let Button      = Styled.img  `width:2em;cursor:pointer;`;
let ClothNum    = Styled.span `font-family: 'Noto Sans', sans-serif;font-size:1.4em;width:1.6em;text-align:center;`;

class Selection extends React.Component {
  constructor(){
    super();
    this.state = {
      orderDetails: [],
      orderQuan   : '0 item',
      orderPrice  : '0',
      orderData   : [
        {
          headerName : "Clothes",
          holdName   : "cloth",
          heigth     : "65",
          data       : {
            Name : ['blazer','blouse','cardigan','dress','jacket','overcoat','pants','scarf','shirt','short','skirt','suit','sweater','tie','vest'],
            Img  : [require('../assets/imgs/blazer.jpg'),require('../assets/imgs/blouse.png'),require('../assets/imgs/cardigan.jpg'),require('../assets/imgs/dress.jpg'),
                         require('../assets/imgs/jacket.jpg'),require('../assets/imgs/overcoat.jpg'),require('../assets/imgs/pants.jpg'),require('../assets/imgs/scarf.jpg'),
                         require('../assets/imgs/shirt.jpg'),require('../assets/imgs/short.jpg'),require('../assets/imgs/skirt.png'),require('../assets/imgs/suit.jpg'),
                         require('../assets/imgs/sweater.jpg'),require('../assets/imgs/tie.jpg'),require('../assets/imgs/vest.jpg')],
            Price: ['1000','1000','2000','4000','2500','5000','2000','500','1000','1000','2500','10000','2500','500','1250'],
            Quantity : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          }
        },
        {
          headerName : "Bedding",
          holdName   : "beddi",
          heigth     : "26",
          data       : {
            Name : ['King bed sheet','Single bed sheet','Double bed sheet','Pillow case','Single duvet','Double duvet'],
            Img  : [require('../assets/imgs/kingbedsheet.jpg'),require('../assets/imgs/singlebedsheet.jpg'),require('../assets/imgs/doublebedsheet.jpg'),require('../assets/imgs/pillowcase.jpg'),require('../assets/imgs/singleduvet.jpg'),require('../assets/imgs/doubleduvet.jpg')],
            Price: ['6000','3000','4500','1000','2000','4000'],
            Quantity : [0,0,0,0,0,0]
          }
        },
        {
          headerName : "Household",
          holdName   : "house",
          heigth     : "26",
          data       : {
            Name : ['Hand towel','Bath towel','Bath mat','Apron','Carpet','Table cloth'],
            Img  : [require('../assets/imgs/handtowel.jpg'),require('../assets/imgs/bathtowel.jpg'),require('../assets/imgs/bathmat.jpg'),require('../assets/imgs/apron.jpg'),require('../assets/imgs/carpet.jpg'),require('../assets/imgs/tablecloth.jpg')],
            Price: ['1000','1000','3000','1500','4000','3500'],
            Quantity : [0,0,0,0,0,0]
          }
        }
      ]
    }
  }
  componentDidMount(){
    this.slidingTest();
  }
  sliding(e){
      let state = e.target.title;
      let id    = e.target.id;
      let Head  = document.getElementById(id)
      let Slide = document.getElementById(id+'Con');
      let Img   = document.getElementById(id+'SlideImg');
      if(state === '1'){ 
        Slide.style.height = '0em';
        Head.title = '0';
        setTimeout(function(){Img.src=require('../assets/icons/downslide.png')},2000);
      }
      if(state === '0'){ 
        Slide.style.height = Slide.title+'em';
        Head.title = '1';
        setTimeout(function(){Img.src=require('../assets/icons/upslide.png')},2000);
      }
  }
  slidingTest(){
    let index= 0;
    let con  = document.getElementById('sliderCon')
    let div  = document.getElementById('slideDiv');
    let text = document.getElementById('slideText');
    let sliderText = [
      `Easily choose collection & delivery times at your convenience, including late evenings and weekends.`,
      `Our drivers bring your items to our cleaning partners, where we take atmost care to ensure great results.`,
      `Your clothes are back to you ASAP - all clean and ready for action.`
    ];
    let sliderImg = [
      require('../assets/imgs/slide2.jpg'),
      require('../assets/imgs/slide1.jpg'),
      require('../assets/imgs/slide0.jpg')
    ]
    setInterval(function(){
      index++;
      if(index === 3){ index = 0; }
      div.style.width     ='0em'
      div.style.padding   ='1em 0em'
      setTimeout(function(){
        text.innerHTML    = sliderText[index];
        div.style.width   ='100%'
        div.style.padding ='1em 1em'
        con.style.backgroundImage = `url('${sliderImg[index]}')`
      },2000)
    },8000)
  }
  calcPrice(){
    let orderData   = this.state.orderData;
    let price       = 0;
    let quantity    = 0;
    orderData.map((header)=>{
      header.data.Quantity.map((quan,i)=>{
        if(quan > 0){
          quantity = quantity + quan;
          price    = parseInt(price) + parseInt(header.data.Price[i]) * parseInt(quan)
        }
        return true;
      })
      return true;
    })
    let orderquan  = ' item';
    if(quantity > 1){ orderquan = ' items'; }
    orderquan      = quantity + orderquan;
    let pricestr   = price.toString();
    let Price      = ''
    let count      = 0;
    for (let x = pricestr.length - 1; x > -1; x--) {
      count++;
      Price = pricestr[x] + Price;
      if(count % 3 === 0 ){ Price = ',' + Price; }
    }
    if(Price.length === 8){Price = Price.substring(1)}
    this.setState({orderQuan : orderquan, orderPrice : Price})
  }
  selectItem(e){
    let orderData = this.state.orderData;
    let id        = e.target.id;
    let action    = id.substring(0,4);
    let x         = id.substring(4,5);
    let y         = id.substring(5);
    let quantity  = orderData[parseInt(x)].data.Quantity[parseInt(y)];
    if(action === 'plus'){ orderData[parseInt(x)].data.Quantity[parseInt(y)] = ++quantity; }
    if(action === 'dash'){ quantity--;if(quantity >= 0){ orderData[parseInt(x)].data.Quantity[parseInt(y)] = quantity; } }
    this.setState({orderData : orderData});
    this.calcPrice();
  }

  render() {
    return (
      <BodyBackground context={
        <React.Fragment>
        <TotalPrice>
          <div>
            <PriceDiv>Your Basket</PriceDiv><br/>
            <TotalItem id='TotalQuantity'>Quantity : {this.state.orderQuan}</TotalItem>
          </div>
          <div>
            <PriceDiv id='TotalPrice'>{this.state.orderPrice} IQD</PriceDiv>
          </div>
        </TotalPrice>
        <Container><center>
          <Slider alt='image slider' id='sliderCon'>
            <SliderDiv id='slideDiv'>
              <SliderText id='slideText'>Easily choose collection & delivery times at your convenience, including late evenings and weekends.</SliderText>
            </SliderDiv>
          </Slider>
          <Section>{
            this.state.orderData.map((header,i)=>{
              let index0 = i.toString();
              return(
                <React.Fragment key={i}>
                  <Header onClick={this.sliding.bind(this)} title='0' id={header.holdName}>
                    <HeaderText>{header.headerName}</HeaderText>
                    <HeaderSlide src={require('../assets/icons/downslide.png')} alt='sliding' id={header.holdName+'SlideImg'}/>
                  </Header>
                  <ClothsCon id={header.holdName+'Con'} title={header.heigth}>{
                    header.data.Name.map((name,ii)=>{
                      let img = header.data.Img[ii];
                      let price = header.data.Price[ii];
                      let quantity = header.data.Quantity[ii];
                      let index1 = ii.toString();
                      if(index1 < 10){ index1 = `0${ii.toString()}`; }
                      let rate = " IQD / item";
                      if(name === 'Carpet'){ rate = " IQD / square meter"; }
                      let index = index0 + index1
                      return (
                        <Cloth key={ii}>
                            <Side>
                                <ClothImg src={img} alt={name}/>
                                <ClothName>{name}<br/><Price>{price + rate}</Price></ClothName>
                            </Side>
                            <Side>
                                <Button src={require('../assets/icons/plusbutton.svg')} title={index} alt='plus button' id={'plus'+index} onClick={e=>this.selectItem(e)} />
                                <ClothNum>{quantity}</ClothNum>
                                <Button src={require('../assets/icons/minusbutton.svg')} title={index} alt='minus button' id={'dash'+index} onClick={e=>this.selectItem(e)}/>
                            </Side>
                        </Cloth>
                      )
                    })
                  }</ClothsCon>
                </React.Fragment>
              )
            })
          }
          </Section>
        </center></Container>
        </React.Fragment>
      } />
    );
  }
}
export default Selection;