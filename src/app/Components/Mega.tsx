import React from 'react';
import BlogCard from './BlogCard';

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: 'HTML Block of Web Development',
      description: "HTML block-level elements are the foundation of web page structure. They enable developers to create meaningful, accessible, and well-organized content. By mastering block elements and their interaction with CSS, you can craft webpages that are both functional and visually appealing. Whether you're a beginner learning HTML or a seasoned developer revisiting the basics, understanding block-level elements is essential for building the web. Happy coding!",
      date: "2023-05-14",
      imageUrl: "/Images/img1.png",
    },
    {
      id: '2',
      title: "Python's Uses",
      description: "In the vast landscape of programming languages, Python shines as a beacon of simplicity and versatility. Whether you're a complete beginner or an experienced developer looking to expand your toolkit, Python offers a powerful yet approachable way to bring your ideas to life. This blog post will delve into the core reasons why Python is so popular and how you can start your journey with this remarkable language.",
      date: "2020-05-01",
      imageUrl: "/Images/img2.jpg",
    },
    {
      id: "3",
      title: 'Python Basics',
      description: "Python, one of the most popular and versatile programming languages in the world, is an excellent starting point for anyone diving into the world of coding. With its simple syntax and readability, Python allows you to focus on learning programming concepts without getting bogged down by complex language rules. Whether you want to explore data analysis, web development, or automation, Python is the gateway to your coding journey. In this blog, we’ll cover the foundational aspects of Python that will set you on the right path.",
      date: "2021-08-09",
      imageUrl: "/Images/img3.jpg",
    },
    {
      id: "4",
      title: "Level Up: Control Flow in Python",
      description: "Mastering control flow in Python unlocks the potential to write dynamic, efficient, and responsive programs. From simple decision-making with if statements to complex logic with nested loops and the match statement, control flow is your tool for designing powerful algorithms. Level up your Python skills by experimenting with control flow in real-world projects like to-do apps, games, or data analysis scripts. With practice, you’ll develop an intuitive sense of how to structure your programs for clarity and efficiency.",
      date: '2022-12-01',
      imageUrl: "/Images/img4.png",
    },
    {
      id: '5',
      title: 'Functions in Python: Reusable Code Made Easy',
      description: "Functions are an indispensable part of Python programming, enabling developers to write clean, reusable, and efficient code. Whether you're writing a simple utility function or building complex applications, understanding how to define and use functions will make your programming journey smoother and more enjoyable. Start small—write a function today and experience the magic of reusable code. Happy coding!",
      date: "2019-06-28",
      imageUrl: "/Images/img5.png",
    },
    {
      id: '6',
      title: 'Lists and Dictionaries: Python Data Structures',
      description: "Lists and dictionaries are indispensable tools in Python programming. Lists excel in managing ordered collections, while dictionaries shine when it comes to mapping relationships. By mastering these data structures, you will be able to write more efficient and organized code, enabling you to tackle a wide variety of problems. Experiment with these data structures in your projects to solidify your understanding and unlock their full potential. Happy coding! 🚀",
      date: '2023-06-01',
      imageUrl: "/Images/img6.png",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
