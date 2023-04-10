import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
    author: 'Dav Pilkey',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },

  {
    title: 'Lessons in chemistry:',
    author: 'Bonnie Garmus',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  const displayTitle = () => {
    console.log(title)
  }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={displayTitle}>Display title</button>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
