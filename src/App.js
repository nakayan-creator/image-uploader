import React, {useState, useCallback} from 'react';
import './assets/style.css';
import {Home, IsLoadingImage, LoadedImage} from './templates/index'
import {storage} from './firebase/index'


const App = () =>  {
    const [prevLoading, setPrevLoading] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [afterLoading, setAfterLoading] = useState(false)
    const [image, setImage] = useState('');
    
    const uploadImageInput = useCallback((event) => {
        const file = event.target.files;
        let blob = new Blob(file, {type: 'image/jpeg'})
        // console.log(blob); => Blob {size: 数字, type: 'image/jpeg}

        // firebasestorageのimageにランダムな数字を名前として付与する
        const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const N = 16
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n%S.length]).join('')
        const uploadRef = storage.ref('image').child(fileName)
        // console.log(uploadRef); => Referense {...}
        
        // 付与した名前にblobが持っている情報を追加する
        const uploadTask = uploadRef.put(blob)
        console.log(uploadTask);

        uploadTask.then(() => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                const newImage = {id: fileName, path: downloadURL};
                setImage((prevState => [...prevState, newImage]))
            }).catch(() => {
                console.log('error');
            })
        })
        setPrevLoading(false)
        setIsLoading(true)
    }, [setImage])

    const uploadImageDrop = useCallback((event) => {
        const file = event.target.files;
        let blob = new Blob(file, {type: 'image/jpeg'})
        // let blob = new Blob(file, {type: 'image/jpeg, image/png'})
        const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const N = 16
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n%S.length]).join('')
        
        const uploadRef = storage.ref('image').child(fileName)
        const uploadTask = uploadRef.put(blob)

        uploadTask.then(() => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                const newImage = {id: fileName, path: downloadURL};
                setImage((prevState => [...prevState, newImage]))
            })
        })
        setPrevLoading(false)
        setIsLoading(true)
    }, [setImage])
    
  return (
        <main className='main'> 
            {prevLoading && (<Home setPrevLoading={setPrevLoading} setIsLoading={setIsLoading} uploadImageInput={uploadImageInput} uploadImageDrop={uploadImageDrop} />)}
            {isLoading && (<IsLoadingImage setIsLoading={setIsLoading} setAfterLoading={setAfterLoading} />)}
            {afterLoading && (<LoadedImage setAfterLoading={setAfterLoading} image={image} />)}
        </main>
      
  );
}

export default App;
