import { useState, useEffect } from 'react'
import BlogList from './BlogList'

function Homepage() {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    

    useEffect( ()  =>  {
       async function fetchData () {
            try {
            const res = await fetch('http://localhost:8000/blogs')
            const data = await res.json()
            setIsPending(false);
            setBlogs(data);
           }catch(err) {
               console.log(err.message);
           }
       }
       fetchData()
    }, [])

    return (
        <div className="Home-page">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Blogs" />}
            
        </div>
    )
}

export default Homepage