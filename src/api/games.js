import { ENV } from "@/utils/constants"

export class Games {

    getLastestGames = async () => {
        try {
            const limit = 3
            const filterLimit = limit && `pagination[limit]=${limit}`
            const sort = `sort[0]=publishedAt:desc`
            const populate = `populate=*`
            const url = `${process.env.API_URL}/${process.env.ENDPOINT_GAME}?${sort}&${filterLimit}&${populate}`
            const response = await fetch(url);
            const result = await response.json()
            if (response.status !== 200) throw result
            return result
        } catch (error) {
            console.log(error);
        }
    }

    getPopularGames = async () => {
        try {
            const limit = 3
            const filters = `filters[id][$eq][0]=5&filters[id][$eq][1]=4&filters[id][$eq][2]=2`
            const filterLimit = limit && `pagination[limit]=${limit}`
            const populate = `populate=*`
            const url = `${process.env.API_URL}/${process.env.ENDPOINT_GAME}?${filterLimit}&${filters}&${populate}`

            const response = await fetch(url);
            const result = await response.json()
            if (response.status !== 200) throw result
            return result
        } catch (error) {
            console.log(error);
        }
    }
    getPlatformGames = async (id) => {
        try {
            const limit = 3
            const filterLimit = limit && `pagination[limit]=${limit}`
            const sort = `sort[0]=publishedAt:desc`
            const filterPlatform = `filters[platforms][id][$eq]=${id}`
            const populate = `populate=*`
            const url = `${process.env.API_URL}/${process.env.ENDPOINT_GAME}?${sort}&${filterLimit}&${filterPlatform}&${populate}`
            const response = await fetch(url);
            const result = await response.json()
            if (response.status !== 200) throw result
            return result
        } catch (error) {
            console.log(error);
        }
    }

    getSearchGames = async (s, page, platforms) => {
        try {
            const filterSearch = `filters[title][$contains]=${s}`
            const filterPlatform = platforms && `filters[platforms][slug][$contains]=${platforms}`
            const filters = `${filterSearch}&${filterPlatform}`
            const pagination = `pagination[page]=${page}&pagination[pageSize]=6`
            const populate = `populate=*`
            const urlParams = `&${pagination}&${populate}&${filters}`
            const url = `${process.env.API_URL}/${process.env.ENDPOINT_GAME}?${urlParams}`
            const response = await fetch(url);
            const result = await response.json()
            if (response.status !== 200) throw result
            return result
        } catch (error) {
            console.log(error);
        }
    }

    getWishListGame = async (id, token) => {
        try {
            const filters = `filters[user][id][$eq]=${id}`
            const populate = `populate[0]=game&populate[1]=game.cover`
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${filters}&${populate}`
            const response = await fetch(url, {
                method: "GET",
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