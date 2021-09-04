import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
const styles={
    root:{
        flexGrow:1,
        padding:'0px',
        margin:'0px',
        overflow:'hidden'
    
      },
      footer:{
        backgroundColor:'#e1d8d8',
        position:'relative',
        marginTop:'192px',
        width:'100%',
        height:'85px',
      },
};
class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {classes}=this.props
        return(
            <div className={classes.root}>
            <Grid item xs={12} className={classes.footer} alignItems='center' alignContent='center'>
               <Typography variant='body2' align='center'>
                  List latest activities … Datewise Option enabled
               </Typography>
            </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(Footer);