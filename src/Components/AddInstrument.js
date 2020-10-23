import React, { Component } from 'react';

class AddInstrument extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
    }
   
    onSubmit(e){
        e.preventDefault();
        this.props.addInstrument(this.nameInput.value, this.priceInput.value);
        
        this.nameInput.value = ''
        this.priceInput.value = ''
    }

    render(){
        return (
            <form onSubmit = {this.onSubmit}>
                <h1>Add Instrument</h1>
                <input 
                    placeholder='Instrument' 
                    ref={nameInput => this.nameInput = nameInput}/>
                <input 
                    placeholder='prince' 
                    ref={priceInput => this.priceInput = priceInput}/>
                    <button>Add</button>
                <hr />
            </form>
        )
   }
}

export default AddInstrument;