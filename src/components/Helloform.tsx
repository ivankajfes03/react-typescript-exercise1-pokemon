import * as React from 'react';
/// <reference path="../interfaces/interfaces.d.ts" />
export default class HelloForm extends React.Component<IHelloFormProps, any> {
    constructor(props: IHelloFormProps){
        super(props);
    }

    public render() {
        return (
            <div>
                <input 
                    value={ this.props.name }
                    onChange={ e => this.props.handleChange(e) }
                />
            </div>
        );
    }
}