import React, {useEffect} from 'react'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles= makeStyles((theme) => ({
    box: {
        maxWidth: 600,
        margin: ' 0 auto',
        // border: '2px dotted #97bef4',
        borderRadius: 5,
        // margin: 20,
        boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, 0.2)',
        // padding: 40,
    },
    container: {
        maxWidth: 400,
        maxHeight: 400,
        // border: '1px dotted #97bef4',
        // border: '2px dotted #97bef4',
        borderRadius: 10,
        // margin: '0 auto',
        padding: 0,
        margin: '0 auto',
    },
    img: {
        width: '100%',
        height: '100%',
        maxWidth: 200,
        maxHeight: 200,
        // margin: '0 auto',
        // marginTop: 40,
        // marginBottom: 20
    },
    url: {
        margin: '0 auto',
        padding: 60,
        width: '80%',
        position: 'relative'
    },
    textURL: {
        width: '100%',
        height: 32,
        padding: 0,
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        color: '#4f4f4f',
        backgroundColor: '#f6f8fb',
    },
    btn: {
        [theme.breakpoints.down('sm')]: {
            right: '15%'
        },
        height: 32,
        position: 'absolute',
        top: '50%',
        right: '9%',
        transform: 'translateY(-16px)',
        backgroundColor: '#2f80ed',
        borderRadius: 8,
        color: '#fff',
        '&:hover': {
            backgroundColor: '#2fa2ed',
            boxShadow: '0 2px 2px -2px rgba(0, 0, 0, 0.5)',
        }
    },
    icon: {
        marginTop: '60px',
        color: 'green'
    }
}))

const LoadedImage = (props) => {
    const classes = useStyles()
    console.log(props.image[0].path);

    const copy = () => {
        const text = document.getElementById('text');
        text.select();
        document.execCommand("Copy")  
    }


    return (
        <div className='inner'>
            <Card className={classes.box}>
                <CheckCircleIcon className={classes.icon} />
                <h1 style={{color: '#4f4f4f', marginBottom: '60px'}}>Uploaded Successfully</h1>
                <Box className={classes.container}>
                    <img src={props.image[0].path} alt="" className={classes.img} />
                </Box>
                <div className={classes.url}>
                    <input readOnly id='text' type="text" value={props.image[0].path} className={classes.textURL}/>
                    <button className={classes.btn} onClick={copy}>Copy</button>
                </div>
                {/* <p style={{margin: '60px 0'}}>{props.image[0].path}</p> */}
            </Card>
        </div>
    )
}

export default LoadedImage;