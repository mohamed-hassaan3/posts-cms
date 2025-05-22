import React from 'react'

const page = async ({params}: {params: {slug: string}}) => {
    const { slug } = params;
  return (
    <div>
      Slug: {slug}
    </div>
  )
}

export default page
