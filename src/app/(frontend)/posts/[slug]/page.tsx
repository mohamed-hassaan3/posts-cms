import { sanityFetch } from '@/sanity/lib/live';
import { QUERY_POST } from '@/sanity/lib/queries';
import React from 'react'

const page = async ({params}: {params: {slug: string}}) => {
    const { slug } = params;
    const post = await sanityFetch({
        query: QUERY_POST,
        
    })
  return (
    <div>
      Slug: {slug}
    </div>
  )
}

export default page
