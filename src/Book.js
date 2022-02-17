import React from 'react'

const Book = ({img, title, author}) => {
  // attribute, eventHandler
  // onClick event, onMouseOver
  const clickHandler = () => {
    alert("HHHHHH");
  }

  const mouseOverHandler = (book) => {
    
  }
  return (
    <article  onMouseOver={() => {console.log(title)}} className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Lick me</button>
    </article>
  );
}

export default Book