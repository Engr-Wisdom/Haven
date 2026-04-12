import React from 'react'

import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Handcraft Haven and our mission to connect talented artisans with people who love unique, handmade treasures. Discover our story today.'
}

const page = () => {
  return (
    <div className='bg-gray-200 text-black p-4 sm:p-10'>
      <div className='max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-10'>
        <section className='mb-10 text-justify'>
          <h1 className="text-3xl font-bold text-black-900 border-b-2 border-amber-400 pb-2">About Us</h1>
          <p>Handcrafted Haven started with a simple idea, help people find unique, handmade pieces that actually feel special. 
            Every item you see here comes from someone who took the time to create it with care, not from a factory line.</p>
        </section>
        <section className='mb-10 text-justify'>
          <h2 className="text-2xl font-bold text-black-100 border-b-2 border-amber-400 pb-2">Our Mission</h2>
          <p>We want to support small creators and make it easier for them to share their work. At the same time, 
            we hope you can find things that feel more personal, whether it’s something for your home or a gift for someone else.</p>
        </section>
        <section className='mb-10 text-justify'>
          <h2 className="text-2xl font-bold text-black-900 border-b-2 border-amber-400 pb-2">What You’ll Find Here</h2>
          <p>You’ll find a mix of products, from home decor to everyday items, all made by hand. Some are simple, 
            some are more detailed, but they all have something in common, they were made with intention.</p>
        </section>
        <section className='mb-10 text-justify'>
          <h2 className="text-2xl font-bold text-black-900 border-b-2 border-amber-400 pb-2">Designed for You</h2>
          <p>We kept the site simple on purpose. It’s fast, easy to browse, and lets you focus on the products without distractions. 
            Just scroll, explore, and see what catches your eye.</p>
        </section>
      </div>
    </div>
  )
}

export default page
