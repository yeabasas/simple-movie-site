import React from 'react'
import Image from 'next/image'

export default function movie({title,release_date,poster_path,id,key}){
  const pathes= 'https://image.tmdb.org/t/p/original'

  return (
    <div>
        <Image src={pathes + poster_path} width={1000} height={1000}></Image>
        <h1>{title}</h1>
        <p className="text-black">{release_date}</p>
    </div>
  )
}

