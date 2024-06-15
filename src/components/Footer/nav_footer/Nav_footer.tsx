import { ModelNav_footer_footer } from '@/utils/interfaces/ModelNavItems'
import React from 'react'

const Nav_footer = ({title}:ModelNav_footer_footer) => {
  return (
    <span className="verySmall_text font-bold">{title} </span>
  )
}

export default Nav_footer