import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PageOne from './pageOne';
import PageTwo from './pageTwo';
import PageThree from './pageThree';
import App from './App';
import Header from './header';

import { IntlProvider, addLocaleData } from 'react-intl';
import pageOneMessages from './i18n/pageOne';
import pageTwoMessages from './i18n/pageTwo';
import pageThreeMessages from './i18n/pageThree';
const locale = window.location.search.substring(1)|| 'cs';
const routes = (
    <Router basename="/">
        <Switch>
            <Header>
                <Route exact path="/" render={props => <App {...props} />}/>
                <Route exact path="/pageone" render={props => 
                    <IntlProvider
                     locale={window.location.search.substring(1) || locale}
                     messages={pageOneMessages[locale]}
                    >
                        <PageOne {...props} />
                    </IntlProvider>
                    } />
                <Route exact path="/pagetwo" render={props => 
                    <IntlProvider
                    locale={window.location.search.substring(1) || locale}
                    messages={pageTwoMessages[locale]}
                   >
                        <PageTwo {...props} />
                    </IntlProvider>    
                    } />
                <Route exact path="/pagethree" render={props => 
                    <IntlProvider
                        locale={window.location.search.substring(1) || locale}
                        messages={pageThreeMessages[locale]}
                    >
                        <PageThree {...props} />
                    </IntlProvider>        
                    } />
            </Header>
        </Switch>
    </Router>
);

function Routes() {
    return routes;
}

export default Routes;