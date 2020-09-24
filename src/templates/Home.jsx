import React, {useCallback, useState} from 'react'
import {PrimaryButton} from './index'
import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
// import {bcimage} from '../../public/static/images/cards/image.svg'
// import {storage} from '../firebase/index'
import {IsLoadingImage} from './index'
import logo from '../assets/image/image.svg'

const useStyles = makeStyles({
    box: {
        maxWidth: 600,
        margin: ' 0 auto',
        border: '1px solid black',
        borderRadius: 10,
        // margin: 20,
        boxShadow: 20,
        padding: 40,
    },
    container: {
        border: '1px solid blue',
        borderRadius: 10,
        margin: '0 20px',
        padding: 0,
    },
    img: {
        marginTop: 40,
        marginBottom: 20
    },
    btn: {
        backgroundColor: 'blue',
        color: '#fff',
        '&:hover': {
            boxShadow: '0 8px 10px -2px rgba(0, 0, 0, 0.5)',
        }
    }
})

const Home = (props) => {
    const classes = useStyles()
    // const [image, setImage] = useState('');

    // const uploadImage = useCallback((event) => {
    //     const file = event.target.files;
    //     let blob = new Blob(file, {type: 'image/jpeg'})
    //     // let blob = new Blob(file, {type: 'image/jpeg, image/png'})

    //     const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    //     const N = 16
    //     const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n%S.length]).join('')
        
    //     const uploadRef = storage.ref('image').child(fileName)
    //     const uploadTask = uploadRef.put(blob)

    //     uploadTask.then(() => {
    //         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //             const newImage = {id: fileName, path: downloadURL};
    //             setImage((prevState => [...prevState, newImage]))
    //         })
    //     })

    //     props.setPrevLoading(false)
    //     props.setIsLoading(true)
    // }, [setImage])

    return (
        <div className='inner'>
            <Box className={classes.box}>
                <h1>Upload Image</h1>
                <p>File shoud be Jpeg, Peg...</p>
                <form>
                    <Box className={classes.container} >
                        <img src={logo} className={classes.img} />
                        <input 
                            // accept='.jpeg, .png'
                            className='image_upload_display' 
                            type="file" required id='image' 
                            // onChange={props.uploadImage}
                            onDragStart={props.uploadImage}
                        />
                        <p>drag & drop file here</p>
                    </Box>
                    <p>or</p>
                    <Button className={classes.btn} component='label'>
                        choose a file
                        <input 
                            // accept='.jpeg, .png'
                            className='image_upload_display' 
                            type="file" required id='image' 
                            onChange={props.uploadImage}
                        />
                    </Button>

                </form>
            </Box>   
        </div>
    )
}

export default Home;