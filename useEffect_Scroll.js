import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [show, setShow] = useState(false)

    useEffect(() => {
        console.log('thay doi')
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => setPosts(posts))
    }, [type])
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShow(true)
                console.log('set state')
            } else {
                setShow(false)
            }
        }
     
        window.addEventListener('scroll', handleScroll)
        //clean-up funtion
        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }
    }, [])
    console.log('render')
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
            {show && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    gototop
                </button>
            )}
        </div>
    )
}
export default Content