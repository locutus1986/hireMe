import React, { Component } from 'react';

import AddInstrument from './AddInstrument'
import Instrument from './Instrument';
import '../style/app.css'


const instruments = [
    {
        name: 'mando',
        price: '150'
    },
    {
        name: 'violen',
        price: '155'
    }
];

localStorage.setItem('instruments', JSON.stringify(instruments))

class App extends Component{
    constructor(props){
        super(props)

        this.state = { 
            instruments : JSON.parse(localStorage.getItem('instruments'))
        };
        
        this.onDelete = this.onDelete.bind(this); 
        this.addInstrument = this.addInstrument.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);      
    }
    
    componentWillMount(){
       const instruments = this.getInstruments()
       this.setState({ instruments });

    } 

    getInstruments(){
       return this.state.instruments
    }

    addInstrument(name, price){
        const instruments = this.getInstruments(); 
        
        instruments.push({
            name,
            price
        })
        this.setState(instruments);
    }

    onDelete(name) {
        const instruments = this.getInstruments();

        const filterInstruments = instruments.filter(instrument => {
            return instrument.name !== name;
        })
        
        this.setState({ instruments: filterInstruments });     
        
    }

    onEditSubmit(name, price, originalName){
        let instruments = this.getInstruments();

        instruments = instruments.map(instrument => {
            if(instrument.name === name){
                instrument.name = name;
                instrument.price = price;
            }
            
            return instrument;
        });
        this.setState({ instruments });
    }

   render(){
       return (
           <div className="App">
                <AddInstrument 
                    addInstrument={this.addInstrument}
                />
                
                <h2> All Instrments </h2>

                {
                this.state.instruments.map(instrument => {
                   return (
                       <Instrument 
                            key={instrument.name}
                            name={instrument.name}
                            price = {instrument.price}
                            onDelete = {this.onDelete}
                            onEditSubmit = {this.onEditSubmit}
                       />
                   );
               })
            }         
            </div>
            
            
       )
   }
}

export default App;