import PageHead from '@/components/ui/page_head/page_head'
import React from 'react'
import ServicesSection from '../home/sections/services/services'
import ThumbnailsSection from '../home/sections/thumbnails/thumbnails'

const ServicesScreen = () => {
  return (
    <div>
      <PageHead head='Services By Arczenrick' page='Services'/>
      <ServicesSection/>
      <ThumbnailsSection/>
    </div>
  )
}

export default ServicesScreen
