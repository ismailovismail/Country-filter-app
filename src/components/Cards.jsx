import React, { Component } from 'react'

 class Cards extends Component {
  render() {
    return (
      <div className='row'>
      {
        this.props.bordercards.map((fd,i)=>{
            return(
                <div className="card col-12 col-sm-12 col-md-4 p-0 mt-3" key={i} style={{width:'20rem'}}>
                <img src={fd.flags.png} className='card-img-top' alt="" />
                <div className="card-body">
                    <h1 className="card-title">{fd.name.common}</h1>
                </div>
            </div>
            )
        })
      }
      </div>
    )
  }
}
export default Cards