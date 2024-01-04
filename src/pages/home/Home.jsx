import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

export default function Home() {
  return (
    <>
     <Topbar/>
     <Feed/>
     <Sidebar/>
     <Rightbar/>
    </>
  )
}
