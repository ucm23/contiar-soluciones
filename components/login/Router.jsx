import { Route, Routes } from "react-router-dom";
import Logs from "./Logs";
import Blogs from "./Blogs";

function Router() {
    return (
        <Routes>
            <Route index element={<Logs />} />
            <Route path="*" element={<Logs />} />
            <Route path="blogs" element={<Blogs />} />
        </Routes>
    )
}

export default Router
