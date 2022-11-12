import React, { Component } from 'react'
import Search from './components/Search'
import axios from 'axios';
import Card from './components/Card';
import Cards from './components/Cards';
 class App extends Component {
  constructor(){
         super();
         this.state={
          country:[],
          border:[]
         }
        
      
         
        
        
      }
      
      
      searching=(keyword)=>{
        axios
        .get(`https://restcountries.com/v3.1/name/${keyword}`)
        .then((res)=>{
          this.setState({country:res.data.map((fd)=>fd)})
          let info=res.data.map((a)=>a.borders)
        
         axios
          .get(`https://restcountries.com/v3.1/alpha?codes=${info.toString()}`)
          .then((info)=>this.setState({border:info.data.map((fd)=>fd)}))
        })
       
        
        
      }
      render() {
        
        
     
   
    return (
      <div>
        <h1 className='mx-3 text-danger' style={{fontSize:'20px'}}>Main Country</h1>
       <header>
       <div className="container mt-3">
        <Search searchValue={this.searching} />
        </div>
       </header>
       <h1 className='mx-3 text-primary' style={{fontSize:'20px'}}>Neigbor Countries</h1>
       <section className='country-card'>
        <div className="container-fluid">
          <p className="error">{this.props.error}</p>
          <Card cardValue={this.state.country}/>
        </div>
       </section>
       <section className="country-borders">
        <div className="container-fluid">
          <Cards bordercards={this.state.border}/>
        </div>
       </section>
      </div>
    )
  }
}

export default App