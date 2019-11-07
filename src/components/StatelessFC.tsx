//when we don't need to manage states in component

import React from 'react';
type CardProps = {
    title: string,
    paragraph: string
}

const StatelessFC: React.SFC<CardProps> = ({title, paragraph}) => {
    return (
        <div>
            bok
        </div>
    )
}
