
import * as React from 'react';
import HelloForm from './Helloform';
import HelloContent from './Hellocontent';


export default class HelloWorld extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            name:''
        }
    }

    public handleChange(event: any) : void {

        this.setState({ name: event.target.value });
    }

    public render() {
        return (
            <div>
                <HelloForm 
                    name = { this.state.name }
                    handleChange = { this.handleChange } 
                />
                <HelloContent 
                    name = { this.state.name }
                />
            </div>
        );
    }
}