
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import axios from "axios"


function BlogsDetails () {

    const { id } = useParams();
    const [blog, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const history = useHistory()
    useEffect(() => {
        async function fetchData () {
            try {
            const res = await fetch(`http://localhost:8000/blogs/${id}`);
            const data = await res.json();
            setData(data);
            setIsPending(false)
           }catch(err) {
               console.log(err.message);
           }
       }
       fetchData()
    }, [])

    const handleDelete = async () => {
        await axios.delete(`http://localhost:8000/blogs/${id}`);
        history.push('/')
    }
    return (
        <div className="blog-details">
            {isPending && <p>Loading...</p>}
            {blog && 
                <div>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            }
        </div>
    );
}

export default BlogsDetails;