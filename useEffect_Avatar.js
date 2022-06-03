import { useEffect, useState } from "react";

function Content() {
    const [avatar, setAvatar] = useState()
    useEffect(
        () => {
            // cleanup funtion
            return (
                () => { avatar && URL.revokeObjectURL(avatar.preview) }
            )
        }, [avatar]
    )

    const handleChange = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
        e.target.value = null
    }

    return (
        <div className="warper">
            <input
                type='file'
                onChange={handleChange}
            />
            {avatar && <img src={avatar.preview} width="80%" />}
        </div>

    )

}
export default Content;