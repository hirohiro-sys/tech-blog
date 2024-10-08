import React from 'react'
import { getBlogs } from '../../libs/client';
import Link from 'next/link';

const Blogs = async () => {
    const { contents } = await getBlogs();
  return (
    <>
    <div className="flex items-center justify-between mb-5 mt-5">
      <h1 className="text-2xl font-bold ml-5">ブログ記事一覧</h1>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {contents.map((item) => (
        <li key={item.id} className="border p-4 rounded">
          <Link href={`blogs/${item.id}`} className="hover:opacity-75">
            <img
              src={item.eyecatch.url}
              alt={item.title}
              className="mb-2 rounded"
            />
          <p className="font-bold text-zinc-50">{item.title}</p>
          <p>{item.createdAt}</p>
          </Link>
        </li>
      ))}
    </ul>
  </>
  )
}

export default Blogs