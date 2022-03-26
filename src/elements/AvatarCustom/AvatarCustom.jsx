import React from 'react'
import Avatar from '@mui/material/Avatar'


const AvatarCustom = ({sx,tite, onClick})=> {
    return(
<Avatar sx={{sx}} onClick={onClick}>{tite}</Avatar>

    )
}

export default AvatarCustom