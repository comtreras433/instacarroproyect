import React, { Component } from 'react';
import './compcss.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      precio: this.props.precio,
      time: this.props.time
    }
    this.handleClick = this.handleClick.bind(this)
  }
    handleClick(){
      this.setState({ precio: this.state.precio + 250 })
    }
    tick() {
      this.setState(state => ({
      time: state.time - 1
    }));

  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    }
  componentWillUnmount() {
   clearInterval(this.interval);
 }
    render() {
      function converter(num) {
          var sec_num = parseInt(num, 10);
          var hours   = Math.floor(sec_num / 3600);
          var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
          var seconds = sec_num - (hours * 3600) - (minutes * 60);

          if (hours   < 10) {hours   = "0"+hours;}
          if (minutes < 10) {minutes = "0"+minutes;}
          if (seconds < 10) {seconds = "0"+seconds;}
          return hours + ':' + minutes + ':' + seconds;
     }
        return(
          <div className="init">
            <div className="viewer">
               <div className="img">
                 <img src={this.props.urlimg} alt="img"/>
                 <div className="imglower">
                   ver detalhes
                 </div>
               </div>
               <div className="content">
                 <div className="time">
                   <div className="hora">
                     <small>TEMPO RESTANTE</small>
                     <strong>{converter(this.state.time)}</strong>
                   </div>
                   <div className="oferta">
                       <small>ULTIMA OFERTA</small>
                        <strong>R${this.state.precio} </strong>
                   </div>
                 </div>
                 <div className="marca">
                   <strong>
                    { this.props.model }
                   </strong>
                 </div>
                   <div className="km">
                     <div className="caryear">
                       {this.props.year}
                     </div>
                     <div className="carkm">
                       {this.props.km} KM
                     </div>
                   </div>
                 <div className="button">
                     <button type="button" onClick={this.handleClick} >FAZER OFERTA</button>
                 </div>
               </div>
             </div>
           </div>
        )

    }
}

export default Card;
