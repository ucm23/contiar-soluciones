import Fetcher from "./Fetcher";
import { getHeaders } from "./extras";

export const indexChat = async ({ }) => {
    let fetch = { data: [], status: false }
    try {
        let headers = getHeaders({})
        let response = await Fetcher({
            method: 'GET',
            url: `/chat-bot?order=id`,
            headers,
        });
        console.log("🚀 ~ 10 indexChat ~ response:", response)
        if (response.status === 200) {
            fetch = {
                data: response.data,
                status: true
            }
        }
    } catch (error) {
        console.log("🚀 ~ indexChat ~ error:", error)
    } finally {
        return fetch;
    }
}