import React from 'react'

export const Blog = ({blog}) => {
  const { name, image, desc} = blog;
  return (
    <div className="card max-w-lg bg-neutral shadow-2xl my-16 text-white">
      <figure>
        <img className=" w-full rounded-lg" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}
