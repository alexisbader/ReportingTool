import React from 'react'
import Logo from '../../Images/veridayLogo.jpg'
import { Box } from '@mui/system'

// Renders the Veriday Logo

const Header = () => {
  return (
    <div className = "header-wrapper">
      <Box component="img"
      sx = {{
        height: 41.85, 
        width: 200,
      }}
        src={Logo}
      />
    </div>
  )
}

export default Header
