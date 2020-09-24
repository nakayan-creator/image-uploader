import React, { useCallback, useState } from 'react'
import { PrimaryButton } from './index'
import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
// import {bcimage} from '../../public/static/images/cards/image.svg'
import firebase, { storage } from '../firebase/index'

const useStyles = makeStyles({
    box: {
        border: '1px solid black',
        borderRadius: 5,
        // margin: 20,
        boxShadow: 20,
        padding: 40,
    },
    container: {
        border: '1px solid black',
        margin: '0 20px',
        padding: 0,
    },
    btn: {
        backgroundColor: 'blue',
        color: '#fff'
    }
})

const Home2 = () => {
    const classes = useStyles()
    const [image, setImage] = useState('');
    const [imageURL, setImageURL] = useState('')

    const handleImage = (event) => {
        const image = event.target.files[0];
        setImage(image)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (image === '') {
            console.log('ファイルが選択されていません');
        }
        const uploadTask = storage.ref(`/images/${image.name}`).put(image);
        uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            next,
            error,
            complete
        )
    }

    const next = (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100        
    }

    const error = (error) => {
        console.log(error);
    }

    const complete = () => {
        storage.ref('images').child(image.name).getDownloadURL()
            .then((firebaseURL) => {
                setImageURL(firebaseURL)
            })
    }




    return (
        <div className='inner'>
            <div className="App">
                <h1>画像アップロード</h1>
                <form onSubmit={onSubmit}>
                    <input type="file" onChange={handleImage} />
                    <button>Upload</button>
                </form>
                <img src={imageURL} alt="uploaded" />
            </div>
        </div>
    )
}

export default Home2;