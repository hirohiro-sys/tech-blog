import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});
// console.log("Service Domain:", process.env.SERVICE_DOMAIN);
// console.log("API Key:", process.env.API_KEY);

export const getBlogs = async (limit?: number) => {

  const queries = limit ? { limit } : {};

  const blogs = await client.getList({
    endpoint: "blogs",
    // customRequestInit: {
    //         cache: "no-store",
    // },
    queries,
  });

  const formattedContents = blogs.contents.map((item) => ({
    ...item,
    createdAt: new Date(item.createdAt).toLocaleString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  }));

  return { ...blogs, contents: formattedContents };
};
  
  

  export const getDetail = async (contentId: string) => {
    const blog = await client.getListDetail({
        endpoint: "blogs",
  //       customRequestInit: {
  //         cache: "no-store",
  // },
        contentId,
    });
    
    const formattedBlog = {
        ...blog,
        createdAt: new Date(blog.createdAt).toLocaleString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        }),
    };
    
    return formattedBlog
  }
