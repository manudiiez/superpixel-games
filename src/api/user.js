import { ENV } from "@/utils/constants"

export class User {
    signUp = async (data) => {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json()
            if (response.status !== 200) throw result
            return result
        } catch (error) {
            throw error
        }
    }

    update = async (id, token, body) => {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER}/${id}`
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `bearer ${token}`,
                },
                body: JSON.stringify(body),
            });
            const result = await response.json()
            if (response.status !== 200) throw result
            return result
        } catch (error) {
            throw error
        }
    }
}