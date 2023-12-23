import CommentsList from './CommentsList'
import './comments.module.scss'
import { Comments } from '@/api/comments'

const CommentsContainer = async ({ gameId }) => {
    const commentsCtrl = new Comments()
    const commentsData = await commentsCtrl.getGameComments(gameId)
    return (
        <CommentsList comments={commentsData} gameId={gameId} />
    )
}


export default CommentsContainer