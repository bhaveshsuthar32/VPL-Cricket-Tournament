import React from 'react'
import { Link } from 'react-router-dom'


export default function home() {
  return (
    <>
      <h1>welcome home page</h1>
      <Link to={'/login'}> login button</Link>
    </>
  )
}
