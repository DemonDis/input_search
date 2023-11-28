"use client";
import React from 'react';
import './check.css'

const ListCheck = ({checked, data, query}) => {
  return (
    <div id="checklist">
      {/* {
        data ? data.filter(post => {
          if (query === '') {
            return post;
          } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post, index) => (
          <span key={index}>
            <input id={index} type="checkbox" name="r" value={index} checked={checked}/>
            <label for={index}>{item.title}</label>
          </span>
        )) : <></>
      } */}
      {
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
      }
    </div>
  );
}

export default ListCheck;