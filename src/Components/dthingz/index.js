import React, { Fragment, Component } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, makeStyles, List } from '@material-ui/core';
import axios from '../../axios';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        maxWidth: '18ch',
        backgroundColor: '#eeeeee',
        padding: '5px',
    },
    inline: {
        display: 'inline',
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
                    <List className={useStyles.root}>
                        <ListItem alignItems="flex-start" >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={mappedData.headerimg_small} />
                            </ListItemAvatar>
                            <ListItemText style={{cursor:'pointer',width:'60%'}}
                                primary={mappedData.title_short}
                                secondary={
                                    <Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            style={useStyles.inline}
                                            color="inherit">
                                        </Typography>
                                        {mappedData.desc_long}
                                    </Fragment>
                                }
                            />
                        </ListItem>
                    </List>
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