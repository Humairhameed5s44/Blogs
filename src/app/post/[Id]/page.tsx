import React from 'react';
import Image from 'next/image';
import CommentSec from '@/app/Components/Commentsec';
import Auther from '@/app/Components/Auther';


const posts = [
  {
    id: '1',
    title: 'HTML Block of Webdevelopment',
    description:
      "HTML block-level elements are the foundation of web page structure. They enable developers to create meaningful, accessible, and well-organized content. By mastering block elements and their interaction with CSS, you can craft webpages that are both functional and visually appealingWhether you're a beginner learning HTML or a seasoned developer revisiting the basics, understanding block-level elements is essential for building the web. Happy coding!",
    Date: '2023-5-14',
    image: '/Images/img1.png', // Use the imported image
  },
  {
    id: '2',
    title: "Pythons Uses",
    description:
      "In the vast landscape of programming languages, Python shines as a beacon of simplicity and versatility. Whether you're a complete beginner or an experienced developer looking to expand your toolkit, Python offers a powerful yet approachable way to bring your ideas to life. This blog post will delve into the core reasons why Python is so popular and how you can start your journey with this remarkable language.",
    Date: '2020-5-1',
    image: '/Images/img2.jpg', // Use the imported image
  },
  {
    id: '3',
    title: 'Python Basics',
    description:
      "Python, one of the most popular and versatile programming languages in the world, is an excellent starting point for anyone diving into the world of coding. With its simple syntax and readability, Python allows you to focus on learning programming concepts without getting bogged down by complex language rules. Whether you want to explore data analysis, web development, or automation, Python is the gateway to your coding journey.In this blog, we’ll cover the foundational aspects of Python that will set you on the right path.",
    Date: '2021-8-9',
    image: "/Images/img3.jpg", // Use the imported image
  },
  {
    id: '4',
    title: "Level Up: Control Flow in Python",
    description:
      "Mastering control flow in Python unlocks the potential to write dynamic, efficient, and responsive programs. From simple decision-making with if statements to complex logic with nested loops and the match statement, control flow is your tool for designing powerful algorithms.Level up your Python skills by experimenting with control flow in real-world projects like to-do apps, games, or data analysis scripts. With practice, you’ll develop an intuitive sense of how to structure your programs for clarity and efficiency.",
    Date: '2022-12-1',
    image: '/Images/img4.png', // Use the imported image
  },
  {
    id: '5',
    title: 'Functions in Python: Reusable Code Made Easy',
    description:
      "Functions are an indispensable part of Python programming, enabling developers to write clean, reusable, and efficient code. Whether you're writing a simple utility function or building complex applications, understanding how to define and use functions will make your programming journey smoother and more enjoyable.Start small—write a function today and experience the magic of reusable code. Happy coding! ",
    Date: '2019-6-28',
    image: '/Images/img5.png', // Use the imported image
  },
  {
    id: '6',
    title: 'Lists and Dictionaries: Python Data Structures',
    description:
      'Lists and dictionaries are indispensable tools in Python programming. Lists excel in managing ordered collections, while dictionaries shine when it comes to mapping relationships. By mastering these data structures, you will be able to write more efficient and organized code, enabling you to tackle a wide variety of problems.Experiment with these data structures in your projects to solidify your understanding and unlock their full potential. Happy coding! 🚀',
    Date: '2023-6-1',
    image: '/Images/img6.png', // Use the imported image
  },
];

interface PostProps {
  params: {
    id: string;
  };
}

export default function Post({ params }: PostProps) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post not found</h2>
    );
  }

  const renderParagraphs = (description: string) =>
    description.split('\n').map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image} //Use the imported file for src
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSec postId={post.id} />
      <Auther />
    </div>
  );
}