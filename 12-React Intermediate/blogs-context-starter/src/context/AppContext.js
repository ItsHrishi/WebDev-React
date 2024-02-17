import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// step one
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data Filling

    async function fetchBlogPosts(page =1) {

        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        console.log("printing the final URL");
        console.log(url);
        try {
            
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            
        }
        catch (error) {
            console.log("Error in fetching data!!");
            setPage(1);
            setPosts([]);
            setTotalPages(null);    
        }
        setLoading(false);
    
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    function handlePageChange(page) {

        setPage(page);
        fetchBlogPosts(page);
    }

// step 2
return <AppContext.Provider value={value}>
{children}
</AppContext.Provider>;
}
