import React, { Component } from 'react'

 class Cardlist extends Component {
  render() {
    return (
      <div className='row'>
          {
            this.props.cardValue.map((fd,i)=>{
                return(
                    <div className="card p-0" key={i} style={{width:'20rem'}}>
                    <img src={fd.flags.png} alt="" className="card-img-top" />
                   <div className="card-body">
                    <h1 className="card-title">Name: {fd.name.common}</h1>
                    <p className="card-text">Official: {fd.name.official}</p>
                    <p className="card-text">Area: {fd.area}</p>
                   </div>
                </div>
                )
            })
          }
      </div>
    )
  }
}
export default Cardlist