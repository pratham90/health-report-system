import React from 'react'
import { Nav, Footer } from "../components"
import Img from "../assets/newbg.webp"
import { categories,RecentPost, Category } from "./CompoFunc";
import Article from "../assets/article.jpg"


const recentPosts = [
  { id: 1, date: "Monday 06, September 2021", title: "This Article Title goes Here, but not too long." },
  { id: 2, date: "Monday 06, September 2021", title: "This Article Title goes Here, but not too long." },
  { id: 3, date: "Monday 06, September 2021", title: "This Article Title goes Here, but not too long." },
  { id: 4, date: "Monday 06, September 2021", title: "This Article Title goes Here, but not too long." },
  { id: 5, date: "Monday 06, September 2021", title: "This Article Title goes Here, but not too long." },
];

// Categories Data


// Recent Post Component


// Category Component


const news = () => {
  return (
    <div className='bg-[#E5F5E0]'>
      <Nav />
      <div className="container mx-auto ">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-[550px] flex items-center justify-center mx-10 mt-5 border-none rounded-xl text-white"
          style={{ backgroundImage: `url(${Img})` }}
        >
          {/* <div className="absolute inset-0 bg-amber-50/30"></div> */}
          <h1 className="relative text-3xl md:text-5xl font-bold text-center px-4 text-black">
            A passion for putting patients first.
          </h1>
        </div>

        {/* Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 px-15">
          {/* Main Blog Content */}
          <div className="lg:col-span-2 my-5">
            <img src={Article} alt="Doctors" className="w-full h-120 rounded-lg" />
            <p className="text-gray-700 mt-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim sit amet.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim sit amet.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim sit amet.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim sit amet.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim sit amet.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim sit amet.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim sit amet.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim sit amet.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim sit amet.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim sit amet.
              {/* Repeat for more content */}
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">
                ← Previous Article
              </button>
              <button className="hover:bg-[#8eca7c] bg-[#b4e1a7] cursor-pointer text-black px-4 py-2 rounded-lg ">
                Next Article →
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 my-6">
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <button className="absolute right-3 top-2 text-blue-600">🔍</button>
            </div>

            {/* Recent Posts */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3">Recent Posts</h2>
              {recentPosts.map((post) => (
                <RecentPost key={post.id} post={post} />
              ))}
            </div>

            {/* Categories */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3">Categories</h2>
              {categories.map((category) => (
                <Category key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default news
