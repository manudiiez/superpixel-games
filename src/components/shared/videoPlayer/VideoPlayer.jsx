"use client"
import ReactPlayer from 'react-player'
import styles from './videoPlayer.module.scss'
import classNames from 'classnames'

const VideoPlayer = ({ video, height, className }) => {
    return (
        <ReactPlayer url={video} width='100%' height={height} className={classNames(styles.default, {
            [className]: className
        })} />
    )
}

export default VideoPlayer