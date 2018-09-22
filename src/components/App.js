import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class DynamicImport extends Component {
    state = {
        component: null
    }
    componentWillMount() {
        this.props.load()
        .then((mod) => this.setState({ component: mod.default }))
    }
    render() {
        return this.props.children(this.state.component)
    }
}

const Settings = (props) => (
    <DynamicImport load={() => import('./Settings')}>
        {(Component) => Component === null 
         ? <h1>Loading</h1>
         : <Component {...props}/>
        }
    </DynamicImport>
)
const Topic = (props) => (
    <DynamicImport load={() => import('./Topic')}>
        {(Component) => Component === null 
         ? <h1>Loading</h1>
         : <Component {...props}/>
        }
    </DynamicImport>
)
const Home = (props) => (
    <DynamicImport load={() => import('./Home')}>
        {(Component) => Component === null 
         ? <h1>Loading</h1>
         : <Component {...props}/>
        }
    </DynamicImport>
)
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                        <li><Link to='/settings'>Settings</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/topics" component={Topic} />
                    <Route path="/settings" component={Settings} />
                </div>
            </Router>
        );
    }
}

export default App;