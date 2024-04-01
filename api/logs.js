import Fetcher from "./Fetcher";
import { getHeaders } from "./extras";

export const indexLogs = async ({ project_id, range, length }) => {
    let fetch = { data: [], status: false }
    try {
        let headers = getHeaders({ range })
        console.log("🚀 ~ range:", range)
        let response = await Fetcher({
            method: 'GET',
            url: `/logs?project_id=eq.${project_id}&select=*`,
            headers,
        });
        let headers_ = getHeaders({ })
        let responseCount = await Fetcher({
            method: 'GET',
            url: `/logs?project_id=eq.${project_id}&select=count`,
            headers: headers_,
        });
        //console.log("🚀 ~ indexLogs ~ responseCount:", responseCount)

        //console.log("🚀 ~ 10 indexBlogs ~ response:", response)
        if (response.status === 200) {
            fetch = {
                data: response.data,
                length: responseCount?.data[0]?.count || length,
                status: true
            }
        }
    } catch (error) {
        console.log("🚀 ~ indexBlogs ~ error:", error)
    } finally {
        return fetch;
    }
}

export const insertLogs = async ({ data }) => {
    try {
        let headers = getHeaders({})
        await Fetcher({
            method: 'POST',
            url: `/logs`,
            headers,
            data,
        });
    } catch (error) {
        console.log("🚀 ~ insertLogs ~ error:", error)
    }
}