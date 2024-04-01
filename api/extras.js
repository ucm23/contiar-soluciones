
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cmZ5cnNscWhvempxc3FseXNjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjEzNTY5MiwiZXhwIjoyMDIxNzExNjkyfQ.znVU18S32YryH7I_mhVjTfKppgcwUsOF8oaf58zHcLc"

const bearer = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cmZ5cnNscWhvempxc3FseXNjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjEzNTY5MiwiZXhwIjoyMDIxNzExNjkyfQ.znVU18S32YryH7I_mhVjTfKppgcwUsOF8oaf58zHcLc"

let headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json',
}

export const getHeaders = ({ multipart, range }) => {
    try {
        if (multipart) headers["Content-Type"] = 'multipart/form-data; boundary=---011000010111000001101001';
        headers.Authorization = `Bearer ${bearer}`;
        headers.apikey = `${apikey}`;
        if (range) headers["Range"] = `${range}`;
    } catch (error) {
        console.log("🚀 ~ getHeaders ~ error:", error)
    } finally {
        return headers;
    }
}