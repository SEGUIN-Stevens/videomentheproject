import React, {useState,useEffect} from 'react'
import axios from "axios"
import UploadForm from './components/Upload/UploadForm'
import VideoBoard from './components/VideoBoard/VideoBoard'
import 'bootstrap/dist/css/bootstrap.min.css';
const baseURL = "http://localhost:3080/files"

const App = () => {
  const [videoItem,setVideoItem] = useState([]);
  const [refresh,setRefresh] = useState(false);
  
  useEffect(() => {
    axios.get(baseURL)
     .then(res => {
         setVideoItem((res.data));
         })
},[refresh]);
  return (
    <div>
      <UploadForm setRefresh={setRefresh} refresh={refresh}/>
      <VideoBoard array={videoItem}/>
    </div>
  )
}

export default App;
