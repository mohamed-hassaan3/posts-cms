import { defineQuery } from "next-sanity";

export const QUERY_POSTS =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
    _id, title, slug
}`);

export const QUERY_POST =
  defineQuery(`*[_type == "post" && slug.current == $slug][0] {
    title, body, mainImage
}`);
