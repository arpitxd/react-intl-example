import React from 'react';
import { FormattedMessage, FormattedDate, FormattedRelative } from 'react-intl';
export default class PageTwo extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <div>
                    Page Two
                </div>
                <FormattedMessage id="name" />
                <br/>
                <FormattedDate value={Date.now()} />
                <br/>
                <FormattedMessage values={{name: "John"}} id="greetings" />
                <br/>
                <FormattedRelative value={Date.now()}/>
            </React.Fragment>
        )
    }
}