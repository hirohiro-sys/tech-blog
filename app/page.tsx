"use client";

import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${API_URL}/api/qiita`);
      const result = await res.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="px-5 py-5">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-bold">Qiita記事</h1>
          <button className="btn btn-outline btn-accent" onClick={() => setShowAll(true)}>
            もっとみる
          </button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {(showAll ? data : data.slice(0, 4)).map((item) => (
            <li key={item.url} className="border p-4 rounded">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="mb-2 rounded"
                />
                <p className="font-bold text-zinc-50">{item.title}</p>
                <p>{item.createdAt}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
