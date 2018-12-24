import React, { Component } from 'react';
import Card from './Card';
import './compcss.css';

class View extends Component {
  render(){
    function car(make,model,version){
      return make + ' ' + model + ' ' + version;
    }
    const arms = this.props.data.all
    return(
      <div className="view">
      {
        arms.map((item,i) => {
          // console.log(item.bids.length - 1)
          // item.bids[item.bids.length - 1].amount = item.bids[item.bids.length - 1].amount + 250
         return  (
           <Card
           precio={item.bids[item.bids.length - 1].amount}
           urlimg={item.imageUrl}
           time={item.remainingTime}
           model={car(item.make,item.model,item.version)}
           year={item.year}
           km={item.km.toLocaleString()}
           id={item.id}
           key={i}
           />
         )
        })
      }
      </div>

    )
  }
}
export default View;
