import React, { Component } from 'react'

export default class ClicksAndInputs extends Component <any, any>{
    constructor(props:any){
        super(props);
        this.state = {
            name: this.props.defaultName
        }
    }
    public handleOnClick (event: any) : void {
        this.setState({name:"ivan"})
    }
    public handleObicanKlik() : void{
        alert('bok');
    }
    public changeText(event:any):void {
        this.setState({
            promjena:event.target.value
        })
    }
     handleObicanKlik2 = () : void => {
        alert('obican klik 2');
    }
    public handleOnChange(event:any) : void {
        this.setState({userInput:event.target.value});
    }
    public render() {
        return (
            <div>
                {this.state.name}
                <button 
                    name="Update"
                    onClick={ e=>this.handleOnClick(e) }
                >Update Name   
                </button>
                <div>Alert Klik
                    <button
                        onClick={this.handleObicanKlik}
                    >Obican klik
                    </button>
                </div>
                <div>
                    <p>Unos teksta</p>
                    <input type="text" onChange={this.changeText.bind(this)} />
                    <h2>{this.state.promjena}</h2>
                </div>
                <div>
                    <button
                        onClick={this.handleObicanKlik2}
                    >Obican klik 2</button>
                </div>
                <div>
                    <p>Accept User Input</p>
                    <input onChange={e=>this.handleOnChange(e)} />
                    <h2>Unio si: {this.state.userInput}</h2>
                </div>
                
            </div>
        )
    }
}
