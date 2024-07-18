import React from 'react'
import './notification.css'

function Notification() {
  return (
    <div className='d-flex align-items-center'>
        <div><div className='userImg'>
        <span className='rounded-circle'><img src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944' alt='userprofile in notification'/></span></div></div>
            <div className='notification-text'><b>Emily</b> has added Puma sneakers in the favourites</div>
            </div>
  )
}

export default Notification