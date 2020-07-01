import React, { Fragment, Component } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, makeStyles } from '@material-ui/core';
import axios from '../../axios';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

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
                // <div>
                //     <p>{mappedData.id}</p>
                //     <p>{mappedData.title_short}</p>
                //     <p>{mappedData.desc_short}</p>
                //     <p>{mappedData.headerimg_small}</p>
                // </div>

                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={mappedData.headerimg_small} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={mappedData.title_short}
                        secondary={
                            <Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    style={useStyles.inline}
                                    color="textPrimary"
                                >
                                    {/* {mappedData.desc_long} */}
                                </Typography>
                                {mappedData.desc_long}
                            </Fragment>
                        }
                    />
                </ListItem>
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
            // <ListItem alignItems="flex-start">
            //     <ListItemAvatar>
            //         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            //     </ListItemAvatar>
            //     <ListItemText
            //         primary="Brunch this weekend?"
            //         secondary={
            //             <Fragment>
            //                 <Typography
            //                     component="span"
            //                     variant="body2"
            //                     style={useStyles.inline}
            //                     color="textPrimary"
            //                 >
            //                     Ali Connors
            //                 </Typography>
            //                 {" — I'll be in your neighborhood doing errands this…"}
            //             </Fragment>
            //         }
            //     />
            // </ListItem>
            <div>
                {this.state.modules}
            </div>
        )
    }
}