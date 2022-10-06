import {useState } from 'react'
import './App.css'
import {AiFillDelete as DeleteButton, AiFillCloseCircle as CloseButton} from 'react-icons/ai'
import uniqid from 'uniqid'
import ReactPlayer from 'react-player'

function App() {
  const [currentSearch, setCurrentSearch] = useState('')
  const [selectedVideo, setSelectedVideo] = useState('')
  const [videos, setVideos] = useState([])
  const [toggleOverlay, setToggleOverlay] = useState(false)
  const video = document.getElementById('yt')
  // const [tags, setTags] = useState([])
  // const [selectedVideo, setSelectedVideo] = useState({})

  // const selectVideo = (video) => {
  //   setSelectedVideo(video.videoId)
  // }

  // const sliceVideoId = (urlString) => {
  //   const slicedString = urlString.slice(32,43);
  //   return slicedString
  // }

  // const addVideoId = (videoId) => {
  //   const videoSchema = {
  //     ids: uniqid(),
  //     videoId: videoId,
  //     title: "",
  //     tags:[]
  //   }

  //   setVideos([...videos, videoSchema])
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const videoId = sliceVideoId(currentSearch)
  //   addVideoId(videoId)
  // }

  // const handleChange =  (e) => {
  //   setCurrentSearch(e.target.value)
  // }

  // const deleteVideo = (target) => {
  //   const {ids} = target
  //   const filteredVideos = videos.filter((video) => video.ids !== ids)
  //   setVideos(filteredVideos)
  // }


  return (
    <div className="App">

      {/* <div onClick={()=>{
        setToggleOverlay(!toggleOverlay)
        }} className={`overlay ${toggleOverlay && 'active'}`}>
          
        <CloseButton className='close-button'/>

        <div className='yt-player'>
        <ReactPlayer 
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${selectedVideo}`}
            controls={true}
            playing={toggleOverlay}
          />
        </div>
          
      </div> */}

      <div className='head-wrapper'>
        <div className='left'>
          <h4>My YouTube Resource Gallery</h4>
          <p>The perfect app to keep track of valuable resources while learning to code. As you come across a helpful video, add the id here.</p>
        </div>

        <form onSubmit={handleSubmit} className='right'>
          <label>Video Url</label>
          <input placeholder='https://www.youtube.com/watch' value={currentSearch} onChange={handleChange} className='input-search'/>
          <button>Save the Video</button>
        </form>
        
      </div>

      {/* <div className='body-wrapper'>

        {videos?.map(video => (
          <div key={video.ids} className='element' >
          <DeleteButton className='delete-button' onClick={()=>deleteVideo(video)}/>
          <img onClick={()=>{
            setToggleOverlay(!toggleOverlay)
            selectVideo(video)
          }} src={`https://i3.ytimg.com/vi/${video.videoId}/sddefault.jpg`} />
        </div>
        ))}

      </div> */}
    </div>
  )
}

export default App
