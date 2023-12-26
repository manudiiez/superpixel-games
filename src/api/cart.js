
export class Cart {
    getCartGame = async (id) => {
        try {
            const populateGame = `populate[0]=cover&populate[1]=platform`
            const urlParams = `${populateGame}`
            const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_GAME}/${id}?${urlParams}`
            const response = await fetch(url);
            const result = await response.json()
            if (response.status !== 200) throw result
            return result
        } catch (error) {
            throw error
        }
    }
}