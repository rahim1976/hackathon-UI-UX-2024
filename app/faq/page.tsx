import Head from 'next/head'
import React from 'react'

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
          <h1 className='text-3xl font-bold'>FAQ Page</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-yellow-500'>› FAQ</span>
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center py-10'>
        <h1 className='text-4xl font-bold mb-2'>Questions Looks Here</h1>
        <p className='text-center mb-10 max-w-2xl'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='font-semibold'>How we serve food?</h2>
              <i className='fas fa-plus'></i>
            </div>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='font-semibold'>
                How can we get in touch with you?
              </h2>
              <i className='fas fa-minus'></i>
            </div>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='font-semibold'>How is our food quality?</h2>
              <i className='fas fa-plus'></i>
            </div>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='font-semibold'>
                What will be delivered? And When?
              </h2>
              <i className='fas fa-plus'></i>
            </div>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='font-semibold'>How do we give home delivery?</h2>
              <i className='fas fa-plus'></i>
            </div>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='font-semibold'>
                Is this restaurant 24 hours open?
              </h2>
              <i className='fas fa-plus'></i>
            </div>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
