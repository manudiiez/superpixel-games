
export class Comments {
    getGameComments = async (id) => {
        try {
            const filters = `filters[game][id][$eq]=${id}`
            const sort = `sort[0]=createdAt:desc`
            const populate = `populate=user`
            const urlParams = `${filters}&${sort}&${populate}`
            const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_COMMENTS}?${urlParams}`
            const response = await fetch(url);
            const result = await response.json()
            if (response.status !== 200) throw result
            return result.data
        } catch (error) {
            throw error
        }
    }

    saveComment = async (id, userId, token, body) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_COMMENTS}`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `bearer ${token}`,

                },
                body: JSON.stringify({
                    data: {
                        user: userId,
                        game: id,
                        comment: body.comment
                    }
                })
            });

            const result = await response.json()
            if (response.status !== 200) throw result
            return result
        } catch (error) {
            throw error
        }
    }

    deleteComment = async (id, token) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_COMMENTS}/${id}`
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `bearer ${token}`,

                }
            });
            const result = await response.json()
            if (response.status !== 200) throw result
            return result.data
        } catch (error) {
            throw error
        }
    }
}