import React, { Fragment, Component } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, makeStyles, List, Paper, Grid, ButtonBase } from '@material-ui/core';
import axios from '../../axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '5px'
    },
    paper: {
        padding: theme.spacing(2),
        margin: '',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const style = {
    backgroundColor: 'white',
    padding: '8px',
    font: 'inherit',
    border: '2x solid blue',
    cursor: 'pointer',
}

export default class dthingz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Modules: []
        };
    }

    getUsersData() {
        axios.get(`/courses`, {}).then(res => {
            const data = res.data
            console.log(data)
            const modules = data.map(mappedData =>
                <div style={{
                    flexGrow: 1,
                    padding: '10px'
                }}>
                    <Paper style={{
                        padding: '20px',
                        margin: 'auto auto',
                        maxWidth: '95%',
                    }}
                        elevation={3}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase style={{
                                    width: 128,
                                    height: 128,
                                }}>
                                    <Avatar style={{
                                        verticalAlign: 'middle',
                                        display: 'flex',
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                    }} alt="Remy Sharp" src={mappedData.headerimg_small} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {mappedData.title_short}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {mappedData.desc_long}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                            Modules :{mappedData.modules.length}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">250 ₹</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            );

            this.setState({
                modules
            })

        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getUsersData()
    }

    render() {
        return (
            <div>
                {this.state.modules}
            </div>
        )
    }
}