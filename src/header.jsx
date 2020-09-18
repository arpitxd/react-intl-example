import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/">App</NavLink><br />
                        <NavLink to="/pageone">Page One</NavLink><br />
                        <NavLink to="/pagetwo">Page Two</NavLink><br />
                        <NavLink to="/pagethree">Page Three</NavLink>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(Header);