import React, {Component} from 'react';

class Kek extends Component {


    REALITY = 'reality';
    FATALITY = 'fatality';

    constructor() {
        super();

        this.state = {
            place: this.REALITY
        }
    }

    render() {
        const {name} = this.props;
        return (
            <div>
                <h1>
                    {name} is my second {this.state.place}
                </h1>
                <button onClick={() => this.changePlace()}>QQsiki</button>
            </div>
        )
    }

    changePlace () {
        this.setState(prevState => ({
            place : prevState.place === this.REALITY ? this.FATALITY: this.REALITY
        }))
    }
}

export default Kek