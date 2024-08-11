import React from "react";
import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const BlogData = [
  {
    id: 1,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ipsa aperiam facilis amet, autem vitae eligendi dolores quos. Porro, dicta.",
    link: "#",
    img: Blog1,
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ipsa aperiam facilis amet, autem vitae eligendi dolores quos. Porro, dicta.",
    link: "#",
    img: Blog2,
  },
  {
    id: 3,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ipsa aperiam facilis amet, autem vitae eligendi dolores quos. Porro, dicta.",
    link: "#",
    img: Blog3,
  },
  {
    id: 4,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ipsa aperiam facilis amet, autem vitae eligendi dolores quos. Porro, dicta.",
    link: "#",
    img: Blog4,
  },
];

const Blog = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BlogData.map((data)=>{
            
                return(
                 
                    <div  key={data.id} className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                        <img src={data.img}  alt="" />
                        <div>
                            <h1 className="text-xl font-bold line-clamp-2">{data.title}</h1>
                            <p className="line-clamp-2">{data.desc}</p>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
