import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/main.scss';
import * as actions from '../action';

class Home extends Component {
    state = {
        bitImage: null
    }
    componentDidMount = () => {
        //just for test
        this.props.action1('Hello');
    }
    showImage = () => {
        import('./BitcoinImage')
        .then((mod) => {
            this.setState({
                bitImage: mod.default
            })
        })
    }
    render() {
        console.log(this.props.item);
        const { bitImage: BitcoinImage } = this.state;
        return (
            <div>
                <h1>Home</h1>
                { BitcoinImage !== null 
                ? <BitcoinImage />
                : <button onClick={this.showImage} >
                        Show Image
                  </button>}
            </div>
        );
    }
}
const mapStateToProps = ({ red }) => {
    const { item } = red;

    return { item };
}

export default connect(mapStateToProps, actions )(Home);