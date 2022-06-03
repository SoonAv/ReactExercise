import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
   

    useEffect(() => {
        console.log('thay doi')
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => setPosts(posts))
    }, [type])


    return (
        <div>

            {tabs.map(tab =>
                <button
                    onClick={() => setType(tab)}
                    style={type === tab ? { color: '#fff', backgroundColor: '#333' } : {}}
                    key={tab}>{tab}
                </button>)}
            {posts.map((post, i) =>
                <ul key={i}>
                    <li>{post.title || post.name}</li>
                    
                </ul>)}
        </div>
    )
}
export default Content