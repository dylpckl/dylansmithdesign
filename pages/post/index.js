import Link from 'next/link'
import groq from 'groq'
import client from '../../client'
import ImageUrlBuilder from '@sanity/image-url'
import Button from '../../components/button'
import Section from '../../components/section'
import { getAllPostsForHome, getPostAndMorePosts } from '../api/api'
import PostPreview from '../../components/post-preview'
import MoreStories from '../../components/more-stories'
import { useEffect, useState } from 'react'

function urlFor(source) {
  return ImageUrlBuilder(client).image(source)
}

// const list = {
//   visible: {
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.1,
//     },
//   },
//   hidden: {
//     opacity: 0,
//     transition: {
//       when: "afterChildren",
//     },
//   },
// }

// const listItem = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 }
// }

// 'categories': categories[]->title,

// function postIndex() {
const index = ({ posts, categories }) => {

  const [postItems, setpostItems] = useState(posts);
  const [filteredPostItems, setfilteredPostItems] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState();
  // const [categoriesList, setCategoriesList] = useState([]);

  function generateFilteredPosts() {
    if (selectedCategory) {
      const newPosts = posts.filter((post) => post.categories.includes(selectedCategory))
      setpostItems(newPosts);
      return;
    }
    setpostItems(posts);
  };

  useEffect(() => {
    generateFilteredPosts();
  }, [selectedCategory]);

  // const categoriesLists = posts
  //   .map(post => post.categories)
  //   .filter((categoryList, index, array) => array.indexOf(categoryList) === index);

  //   const counts = categoriesLists
  //   .map(categoryList => ({
  //     type: categoryList,
  //     count: posts.filter(post => post.categories === categoriesList).length

  //   }));
  //   console.log(counts);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       groq`
  //       *[_type == "post" && publishedAt < now() && categories == $categories ] | order(publishedAt desc)
  //       {
  //       _id,
  //       name,
  //       title,
  //       body,
  //       'date': publishedAt,
  //       mainImage,
  //       summary,
  //       'categories': categories[] -> {title, slug},
  //       'slug': slug.current,
  //       'coverImage': mainImage,
  //       'author': author -> { name, 'picture': image.asset -> url },
  //       }
  //       `, { categories: categories })
  //     .then((data) => setPostList(data))
  //     .catch(console.error);
  // }, [categoriesList]);

  // *[_type == "post" && publishedAt < now() && '${category}' in categories[]->slug.current] | order(publishedAt desc) {
  //   categories[]-> {
  //     title,
  //     slug
  //   },
  // }

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[_type == "category"] {
  //       title,
  //   }`
  //     )
  //     .then((data) => setCategoriesList(data))
  //     .catch(console.error)
  // }, [])


  return (
    <Section
      justify='start'
      gap={12}
    >
      <h1 className='mb-8'>blog posts</h1>
      <div className='flex gap-8'>
        {categories.length > 0 && categories.map(
          (category) =>
            <button
              onClick={() => setSelectedCategory(category.title)}
              className='bg-skin-fill rounded-lg px-4 py-2'
              key={category}
            >
              <div>
                {category.title}
              </div>
              {/* <div>
                {categories.length}
              </div> */}
            </button>
        )}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12'>
        {postItems.length > 0 && postItems.map(
          (post) =>
            post.slug && (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={`/post/${post.slug}`}
                summary={post.summary}
                categories={post.categories}
              />
            )
        )}
      </div>
    </Section>
  )
}

const postFields = `
_id,
name,
title,
body,
'date': publishedAt,
mainImage,
summary,
'categories': categories[]->title,
'slug': slug.current,
'coverImage': mainImage,
'author': author->{name, 'picture': image.asset->url},
`

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
      {${postFields}}
      `)
  // console.log(posts);

  const categories = await client.fetch(groq`
    *[_type == "category"] {
      title,
      }`)

  return {
    props: {
      posts,
      categories,
    }
  }
}

export default index