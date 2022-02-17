import React from "react";
import ReactDom from 'react-dom';

// CSS
import './index.css';
// Data
import {books} from './books';
// Component
import Book from './Book'; 

function BookList() {
  return (
    <section className="booklist">
      {
        books.map((book, index) => {
          return <Book key = {book.id} {...book}/>
        })
      }
    </section>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));