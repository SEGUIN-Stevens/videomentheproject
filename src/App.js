import React, {useState} from 'react'
import UploadForm from './components/Upload/UploadForm'
import Player from './components/Player/Player'
import VideoBoard from './components/VideoBoard/VideoBoard'
import 'bootstrap/dist/css/bootstrap.min.css';

const ORIGINAL_ARRAY = [
  {
    id: "e1",
    title: "Video 1",
    duration: "1:20",
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "Video 2", duration: "2:25", date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "video 3",
    duration: "3:24",
    date: new Date(2021, 2, 28)
  },
];
const App = () => {
  const [videoItem,setVideoItem] = useState(ORIGINAL_ARRAY);
/*   const addDataHandler = videoItem=>{
    setVideoItem(prevVideoItem => {
      return [videoItem, ...videoItem];
    });
  }; */
  return (
    <div>
      <UploadForm/>
      <Player/>
      <VideoBoard array={videoItem}/>
    </div>
  )
}

export default App;
