import React from 'react';
import {render} from 'react-dom';

class Root extends React.Component {
    constructor(props) {
       super(props);
    }

    componentDidMount() {
        console.log(Date.now(), 'componentDidMount: ', )
    }

    render() {
        console.log(Date.now(), 'render: ')
        return (
            <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        )
    }
}

const reactContainer = document.getElementById('react-container');
render(<Root />, reactContainer);
