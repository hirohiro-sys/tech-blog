"use client";

import Link from "next/link";
import { useState } from "react";

const QiitaPage = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const loadMore = () => {
    setIsExpanded(!isExpanded);
    setVisibleCount(isExpanded ? 4 : data.length);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">
          {isExpanded ? "個人記事一覧" : "個人記事"}
        </h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.slice(0, visibleCount).map((item) => (
          <li key={item.url} className="border p-4 rounded">
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="mb-2 rounded"
              />
              <p className="font-bold text-zinc-50">{item.title}</p>
              <p>{item.createdAt}</p>
            </Link>
          </li>
        ))}
      </ul>
      {/* これもmicrocmsの記事みたいに遷移させた方が良い？まあ今回はいいか */}
      <button
        className="btn btn-outline btn-accent mx-auto block mt-5"
        onClick={loadMore}
      >
        {isExpanded ? "個人記事をもっと少なく" : "個人記事をもっとみる"}
      </button>
    </>
  );
};

export default QiitaPage;
