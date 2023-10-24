import Comments from './Comments'
import './comments.module.scss'

const CommentsContainer = async ({ gameId }) => {

    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/comments/${gameId}`)
            const result = await response.json()
            return result
        } catch (error) {
            console.log(error);
        }
    }

    const commentsData = await getData()

    return (
        <Comments data={commentsData} gameId={gameId} />
    )
}


export default CommentsContainer