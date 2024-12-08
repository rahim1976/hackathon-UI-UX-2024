import Head from 'next/head'
import React from 'react'

const chefs = [
  { name: 'Tahmina Rumi', title: 'Chef', img: '/chef5.jpg' },
  { name: 'Jorina Begum', title: 'Chef', img: '/chef6.jpg' },
  { name: 'M.Mohammad', title: 'Chef', img: '/chef7.jpg' },
  { name: 'Munna Kathy', title: 'Chef', img: '/chef8.jpg' },
  { name: 'Tahmina Rumi', title: 'Chef', img: '/chef9.jpg' },
  { name: 'Bisnu devgon', title: 'Chef', img: '/chef10.jpg' },
  { name: 'Motin Molladsf', title: 'Chef', img: '/chef11.jpg' },
  { name: 'William Rumi', title: 'Chef', img: '/chef12.jpg' },
  { name: 'Kets william roy', title: 'Chef', img: '/chef13.jpg' },
  { name: 'Mahmud kholli', title: 'Chef', img: '/chef14.jpg' },
  { name: 'Ataur Rahman', title: 'Chef', img: '/chef15.jpg' },
  { name: 'Monalisa holly', title: 'Chef', img: '/chef16.jpg' }
]

const page = () => {
  return (
    <div>
      <Head>
        <title>Our Chef</title>
      </Head>
      <div className='relative'>
        <img
          src='/navbarbg.jpg'
          alt='Fresh vegetables with dark background'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>Our Chef</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-yellow-500'>› Menu</span>
          </p>
        </div>
      </div>
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {chefs.map((chef, index) => (
            <div
              key={index}
              className='bg-white shadow-md rounded-lg overflow-hidden'
            >
              <img
                src={chef.img}
                alt={`Image of ${chef.name}`}
                className='w-full h-96 object-cover' 
              />
              <div className='p-4 text-center'>
                <h2 className='text-lg font-semibold'>{chef.name}</h2>
                <p className='text-gray-600'>{chef.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
