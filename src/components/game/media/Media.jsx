import VideoPlayer from '@/components/shared/videoPlayer/VideoPlayer'
import styles from './media.module.scss'
import Gallery from './gallery/Gallery'

const Media = ({ video, screenshots }) => {
    return (
        <div className={styles.media}>
            <div className={styles.videoMobile}>
                <VideoPlayer video={video} height={400} />
            </div>
            <div className={styles.videoDesk}>
                <VideoPlayer video={video} height={550} />
            </div>
            <Gallery screenshots={screenshots} />
        </div>
    )
}

export default Media