import React from 'react'

const Page = ({ params }) => {
  return <div>My Post: {params.slug}</div>
}

export default Page