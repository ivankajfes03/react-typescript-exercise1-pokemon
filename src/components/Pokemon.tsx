import React, { Component } from 'react'

interface Props {
    name?: string
}
interface State {
    data:Item[]
}
interface Item {
    userId: number,
    id:number,
    title: string,
    name: string,
    height: string
}

export default class Pokemon extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {data:[]};
        
    }

    handleGetApi = () : void => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
                .then(response => response.json())
                .then(data => {
                    this.setState({data: [data] })
        });
        
        console.log(this.state.data);
      }
      /*
      componentDidMount() {
            this.handleGetApi()
        }
        */

    render() {
        const {data} = this.state;
        if(data){
            console.log(data);
            
        }
        return (
            <div>
                <p>Dohvati api podatke pokemona ditto</p>
                <button onClick={this.handleGetApi}>Get</button>
                {data && data.map((item:any)=>{
                    return <div key={item.id}>
                                <h2>
                                    Pokemon id:{item.id}
                                </h2>   
                                <p>
                                    Pokemon name: {item.name},
                                    Pokemon height: {item.height}
                                </p>
                            </div>
                            
                })}
            </div>
        )
    }
}
