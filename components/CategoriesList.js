import React from 'react'

function CategoriesList({ categories }) {
  return (
    <ul className='flex gap-8'>
      {categories.map(category =>
        <li
          key={category}
          className='bg-skin-fill rounded-lg px-4 py-2'
        >
          {category}
        </li>
      )}
    </ul>
  )
}

export default CategoriesList