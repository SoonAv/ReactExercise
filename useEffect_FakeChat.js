import { useEffect, useState } from "react"


//Index.js
const lessons = [
    {
        id: 1,
        name: 'reactjs la gi ? tai sao nen hoc '
    },
    {
        id: 2,
        name: 'spa/mpa la gi '
    },
    {
        id: 3,
        name: 'arrow funtion'
    },
]
function Content() {
    const [lessonId, setLessonId] = useState(1)
    const handleComment =({ detail})=>{
        console.log(detail)
    }
    useEffect(()=>{
        window.addEventListener(`lession-${lessonId}`,handleComment)
        return ()=> window.removeEventListener(`lession-${lessonId}`,handleComment)
    },[lessonId])
    return (
        <div>
            {lessons.map(
                lesson => (
                    <ul key={lesson.id}
                    style={{listStyleType:'none'}}
                    >
                        <li
                            onClick={() => setLessonId(lesson.id)}
                            style={{
                                
                                color:
                                    lessonId === lesson.id ? 'red' : '#333'
                            }}
                        >{lesson.name}</li>
                    </ul>
                )
            )}
        </div>
    )
}
export default Content