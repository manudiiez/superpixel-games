import { ENV } from "@/utils/constants"


export class Game {
    getLastGame = async () => {
        try {
            const sort = 'sort[0]=publishedAt:desc'
            const pagination = 'pagination[limit]=1'
            const populate = 'populate=*'
            const url = `${process.env.API_URL}/${process.env.ENDPOINT_GAME}?${sort}&${pagination}&${populate}`
            const response = await fetch(url);
            const result = await response.json()
            if (response.status !== 200) throw result
            return result.data[0]
        } catch (error) {
            console.log(error);
        }
    }

    getVideoGame = async () => {
        try {
            const sort = 'sort[0]=publishedAt:desc'
            const pagination = 'pagination[limit]=2'
            const populate = 'populate=*'
            const url = `${process.env.API_URL}/${process.env.ENDPOINT_GAME}?${sort}&${pagination}&${populate}`
            const response = await fetch(url);
            const result = await response.json()
            if (response.status !== 200) throw result
            return result.data[1]
        } catch (error) {
            console.log(error);
        }
    }

    getGameBySlug = async (slug) => {
        try {
            const filters = `filters[slug][$eq]=${slug}`
            const populateGame = `populate[0]=wallpaper&populate[1]=cover&populate[2]=screenshots&populate[3]=platforms`
            const populatePlatform = `populate[4]=platforms.icon&populate[5]=wallpaperPhone`
            const populates = `${populateGame}&${populatePlatform}`
            const urlParams = `${filters}&${populates}`

            const url = `${process.env.API_URL}/${process.env.ENDPOINT_GAME}?${urlParams}`
            const response = await fetch(url);
            const result = await response.json()
            if (response.status !== 200) throw result
            return result.data[0]
        } catch (error) {
            throw error
        }
    }

    verifyGameWishList = async (userId, gameId, token) => {
        try {
            const filterUser = `filters[user][id][$eq][0]=${userId}`
            const filterGame = `filters[game][id][$eq][1]=${gameId}`
            const urlParams = `${filterUser}&${filterGame}`
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `bearer ${token}`,

                }
            });
            const result = await response.json()
            if (response.status !== 200) throw result
            if (result.data.length === 0) {
                return false
            }
            return result.data[0]
        } catch (error) {
            throw error
        }
    }

    addGameWishList = async (userId, gameId, token) => {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `bearer ${token}`,

                },
                body: JSON.stringify({
                    data: {
                        user: userId,
                        game: gameId
                    }
                })
            });

            const result = await response.json()
            if (response.status !== 200) throw result
            return result.data
        } catch (error) {
            throw error
        }
    }

    deleteGameWishList = async (hasWishList, token) => {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}/${hasWishList}`
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