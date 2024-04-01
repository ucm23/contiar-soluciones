import Fetcher from "./Fetcher";
import { getHeaders } from "./extras";

export const indexBlogs = async ({ project_id }) => {
    let fetch = { data: [], status: false }
    try {
        let headers = getHeaders({})
        let response = await Fetcher({
            method: 'GET',
            url: `/blogs?project_id=eq.${project_id}&select=*`,
            headers,
        });
        console.log("🚀 ~ 10 indexBlogs ~ response:", response)
        if (response.status === 200) {
            fetch = {
                data: response.data,
                status: true
            }
        }
    } catch (error) {
        console.log("🚀 ~ indexBlogs ~ error:", error)
    } finally {
        return fetch;
    }
}