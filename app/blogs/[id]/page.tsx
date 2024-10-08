import React from "react";
import { getDetail } from "../../../libs/client";

const Blog = async ({ params }: { params: { id: string } }) => {
  const blog = await getDetail(params.id);
  return (
    <div className="max-w-2xl mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-50 object-cover" src={blog.eyecatch.url} alt={blog.title} />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>
        <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: blog.content }} />
        <p className="text-gray-500 text-sm">{blog.createdAt}</p>
      </div>
    </div>
  );
};

export default Blog;
