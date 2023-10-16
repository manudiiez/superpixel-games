"use client"
import ReactPlayer from 'react-player'
import styles from './videoPlayer.module.scss'

const VideoPlayer = ({ video, height }) => {
    return (
        <ReactPlayer url={video} className={styles.video} width='100%' height={height} />
    )
}

export default VideoPlayer