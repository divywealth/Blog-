import { useState } from "react";
import { useHistory } from "react-router-dom";


function Create() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            body: body,
            author: author
        }
        const res = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        history.push('/');
        
    };
    return (
        <div className="create">
            <h1>Create New Blog</h1>
            <form onSubmit={handleSubmit} >
                <label>Blog title:</label>
                <input type="text" 
                required value={title}
                onChange = {(e) => setTitle(e.target.value)}
                /> 
                <label>Blog body:</label>
                <textarea 
                required value={body}
                onChange = {(e) => setBody(e.target.value)}
                />
                <label>Blog author</label>
                <input type="text" 
                required value={author}
                onChange = {(e) => setAuthor(e.target.value)}
                />
                <button>Add Blog</button>
            </form>

        </div>
    );
}

export default Create