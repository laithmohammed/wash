import React from 'react';
//'linear-gradient(#f13844,#e1212e)','linear-gradient(#4d90fd,#4788ee)','linear-gradient(#3be081,#4bca6f)'
const Styled = {
    Body : { position:'absolute',width:'100%',top:'0px',left:'0px',right:'0px',bottom:'0px',padding:'0px',margin:'0px' },
    Background : { width:'100%',height:'100%',top:'0px',left:'0px',right:'0px',bottom:'0px',padding:'0px',margin:'0px',position:'relative',overflow:'hidden' }
}

class BackGround extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      background: []
    }
  }

  componentWillMount(){
      this.randomCircle(window.innerWidth,window.innerHeight)
  }
  randomCircle(w,h){
    let maxWidth,maxLeft,maxTop,Width,Left,Top,circle,color;
    let x = 0;
    let colors = ['linear-gradient(#13a89e,#13a89e)','linear-gradient(#0f75bc,#0f75bc)','linear-gradient(#25aae1,#25aae1)'];
    do{
        maxWidth = parseInt(h) * 0.1;
        maxLeft  = parseInt(w);
        maxTop   = parseInt(h);
        Width    = Math.floor(Math.random() * maxWidth);
        Left     = Math.floor(Math.random() * maxLeft);
        Top      = Math.floor(Math.random() * maxTop);
        // console.log(Math.floor(Math.random() * 1))
        color    = colors[Math.floor(Math.random() * 3)]
        circle = this.state.background;
        circle.push(<div key={x} style={{width:Width,height:Width,borderRadius:'50%',background:color,position:'absolute',top:Top,left:Left,opacity:0.7}}></div>)   
        x++;
    }while(x < 20)
    this.setState({background : circle})
  }

  render() {
    return (
        <div style={Styled.Body}>
            <div style={Styled.Background}>{this.state.background}</div>
            {this.props.context}
        </div>
    );
  }
}

export default BackGround;