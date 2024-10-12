import React from "react";
import { getBlogs } from "../../libs/client";
import Link from "next/link";

const MicrocmsPage = async () => {
  const { contents } = await getBlogs(4);
  // console.log(contents);
  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">ブログ記事</h1>
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
      <div className="flex justify-center mt-5">
        <Link
          href={"blogs"}
          className="inline-block bg-transparent text-purple-400 font-bold py-3.5 px-4 rounded-md hover:bg-purple-400 hover:text-black transition-colors duration-200 border border-purple-400"
        >
          ブログ記事をもっとみる
        </Link>
      </div>
    </div>
  );
};

export default MicrocmsPage;