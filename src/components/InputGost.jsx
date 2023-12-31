"use client";
import React, {useState} from 'react';
import ListCheck from './ListCheck';
import './input.css'

const InputGoast = ({placeholder, data}) => {
  const [query, setQuery] = useState("")

  return (
    <>
      <label className="demo">
        <input 
          type="text" 
          className="demo__input" 
          placeholder={placeholder}
          onChange={event => setQuery(event.target.value)}
         />
        <svg className="demo__icon">
          <use xmlnsXlink="http://www.w3.org/1999/xlink " xlinkHref="#ghost"></use>
        </svg>
      </label>

      <div className="sprite">
        <svg xmlns="http://www.w3.org/2000/svg" id="ghost" viewBox="0 0 20 20">
          <title>Ghost</title>
          <path d="M1321.13,737.382a1.315,1.315,0,1,0,1.31,1.315A1.315,1.315,0,0,0,1321.13,737.382Zm6.99,0a1.315,1.315,0,1,0,1.31,1.315A1.315,1.315,0,0,0,1328.12,737.382Zm7.37,0.68h-0.01a7.076,7.076,0,0,0-7.04-7.068h-3.87a7.078,7.078,0,0,0-7.05,7.068h0l-0.53,11.644a1.293,1.293,0,0,0,1.29,1.293,1.227,1.227,0,0,0,.42-0.074,43.39,43.39,0,0,0,3.2-3.176v0a1.122,1.122,0,0,1,.74-0.285,1.077,1.077,0,0,1,.84.406l2.05,2.669a1.275,1.275,0,0,0,.97.462h0a1.28,1.28,0,0,0,.98-0.462l2.04-2.669a1.1,1.1,0,0,1,.85-0.406,1.077,1.077,0,0,1,.73.285v0a41.759,41.759,0,0,0,3.21,3.176,1.171,1.171,0,0,0,.41.074,1.293,1.293,0,0,0,1.29-1.293Zm-13.49,3.7a3.067,3.067,0,1,1,3.06-3.066A3.061,3.061,0,0,1,1322,741.763Zm6.99,0a3.067,3.067,0,1,1,3.06-3.066A3.055,3.055,0,0,1,1328.99,741.763Z" transform="translate(-1317 -731)" />
        </svg>
      </div>
      <ListCheck data={data} query={query}/>
      {/* {
        data.filter(post => {
          if (query === '') {
            return post;
          } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post, index) => (
          <div className="box" key={index}>
            <p>{post.title}</p>
            <p>{post.author}</p>
          </div>
        ))
      } */}
    </>
  );
}

InputGoast.defaultProps = {
  placeholder: "Поиск тестов"
}

export default InputGoast;