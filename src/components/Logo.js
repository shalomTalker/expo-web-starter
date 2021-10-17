import React from 'react'
import { Image } from 'react-native'
import { LOGO_HEADER_URI, LOGO_URI } from '../constants'

const Logo = ({ isDark = false, width = 70, height = 70, ...props }) => {
    return (
        <Image
            source={{ uri: isDark ? LOGO_URI : LOGO_HEADER_URI }}
            style={{ width, height }}
            {...props}
        />
    )
}

export default Logo

