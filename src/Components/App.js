import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import DthingzApp from './dthingz';
import PaperConstant from './PaperConstant';


export default class extends Component {
    render() {
        return <Fragment>
            <Header />
            <PaperConstant />
            <DthingzApp />
            <Footer />
        </Fragment>
    }
}