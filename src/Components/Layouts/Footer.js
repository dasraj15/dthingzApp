import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

const style = {
    textAlign: 'center',
    lineHeight: 1,
    botton:0
}

export default props =>
    <div style={style}>
        <AppBar position="static" style={{ background: '#2E3B55' }}>
            <Typography variant="h5" color='inherit' style={{ flexGrow: 1 }}>2020 ©dthingz Labs</Typography>
            <Typography variant="h6" color='inherit' style={{ flexGrow: 1 }}>Ranchi, Jharkhand</Typography>
            {/* <h3>2020 ©dthingz Labs</h3>
            <h4>Ranchi, Jharkhand</h4> */}
        </AppBar>
    </div>