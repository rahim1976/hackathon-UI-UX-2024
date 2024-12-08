import Head from 'next/head'
import React from 'react'
import {
  FaCalendar,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaReply,
  FaTwitter,
  FaUser,
  FaYoutube
} from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

const page = () => {
  return (
    <div>
      <Head>
        <title>Blog Post</title>
      </Head>
      <div className='relative'>
        <img
          src='/navbarbg.jpg'
          alt='Fresh vegetables with dark background'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>Blog Post</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-[#FF9F0D]'>› Blog</span>
          </p>
        </div>
      </div>

      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-2'>
            <div className='bg-white p-4 border'>
              <img
                src='/blog24.jpg'
                alt='Person dipping fried food into sauce'
                className='w-full rounded mb-4'
              />
              <div className='p-4'>
                <div className='flex items-center mb-2'>
                  <div className='bg-[#FF9F0D] text-white px-2 py-1 rounded-full text-sm'>
                    14 Feb
                  </div>
                  <div className='ml-3 text-gray-500 text-sm flex items-center'>
                    <FaMessage className='mr-1' /> <span>3</span>
                    <span className='mx-1'>|</span> <FaUser className='ml-1' />
                    <span className='ml-1'>Admin</span>
                  </div>
                </div>
              </div>
              <h1 className='text-2xl font-bold mb-4'>
                10 Reasons To Do A Digital Detox Challenge
              </h1>
              <p className='mb-4'>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <blockquote className='bg-[#FF9F0D] p-4 rounded mb-4'>
                <p className='text-white font-semibold'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
              </blockquote>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className='flex flex-col md:flex-row mb-4'>
                <img
                  src='/blog25.jpg'
                  alt='Delicious food in a bowl'
                  className='w-full md:w-auto rounded mb-4 md:mb-0 md:mr-4'
                />
                <p className='flex-1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <p className='mb-4'>
                This is additional blog content that provides more insights and
                information related to the topic discussed above. It can include
                tips, personal experiences, or further elaboration on the
                subject matter. The goal is to engage the reader and provide
                them with valuable content that enhances their understanding and
                interest.
              </p>
              <p className='mb-4'>
                Remember to keep your writing clear and concise, and consider
                breaking up large blocks of text with headings, lists, or images
                to improve readability. Engaging content is key to keeping your
                audience interested and coming back for more.
              </p>
              <div className='flex flex-col md:flex-row items-center justify-between border p-4 text-gray-500 text-sm mb-4'>
                <div className='mb-4 md:mb-0'>
                  <span className='mr-2 text-2xl'>Tags:</span>
                  <span className='px-2 py-1 rounded'>Restaurant</span>
                  <span className='px-2 py-1 rounded'>Dinner</span>
                  <span className='px-2 py-1 rounded'>Pizza</span>
                  <span className='px-2 py-1 rounded'>Vegan</span>
                </div>
                <div className='flex items-center flex-wrap'>
                  <span className='mr-2 text-2xl'>Share:</span>
                  <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
                    <a href='#' className='text-gray-500 p-2 text-2xl'>
                      <FaFacebook />
                    </a>
                    <a href='#' className='text-gray-500 p-2 text-2xl'>
                      <FaTwitter />
                    </a>
                    <a href='#' className='text-gray-500 p-2 text-2xl'>
                      <FaPinterest />
                    </a>
                    <a href='#' className='text-gray-500 p-2 text-2xl'>
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className='bg-white p-4 rounded shadow mb-4 max-w-2xl mx-auto'>
                <h2 className='text-xl font-bold mb-4'>Comments - 03</h2>
                <div className='flex items-start mb-4'>
                  <img
                    src='/blog26.jpg'
                    alt='User  avatar'
                    className='w-12 h-12 rounded-full mr-4'
                  />
                  <div>
                    <h3 className='font-semibold'>MD Sajib Khan</h3>
                    <p className='text-gray-500 text-sm mb-2'>
                      <FaCalendar className='inline mr-1' /> Feb 14, 2022 at
                      1:21 pm
                    </p>
                    <p className='mb-2'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sed lobortis fermentum nec imperdiet justo. Vivamus
                      et risus et.
                    </p>
                    <a href='#' className='text-blue-500 text-sm'>
                      Reply <FaReply className='inline' />
                    </a>
                  </div>
                </div>
                <div className='flex items-start mb-4'>
                  <img
                    src='/blog27.jpg'
                    alt='User  avatar'
                    className='w-12 h-12 rounded-full mr-4'
                  />
                  <div>
                    <h3 className='font-semibold'>MD Meen Khan</h3>
                    <p className='text-gray-500 text-sm mb-2'>
                      <FaCalendar className='inline mr-1' /> Feb 14, 2022 at
                      1:21 pm
                    </p>
                    <p className='mb-2'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sed lobortis fermentum nec imperdiet justo. Vivamus
                      et risus et.
                    </p>
                    <a href='#' className='text-blue-500 text-sm'>
                      Reply <FaReply className='inline' />
                    </a>
                  </div>
                </div>
                <div className='flex items-start mb-4'>
                  <img
                    src='/blog28.jpg'
                    alt='User  avatar'
                    className='w-12 h-12 rounded-full mr-4'
                  />
                  <div>
                    <h3 className='font-semibold'>MD Dulal Khan</h3>
                    <p className='text-gray-500 text-sm mb-2'>
                      <FaCalendar className='inline mr-1' /> Feb 14, 2022 at
                      1:21 pm
                    </p>
                    <p className='mb-2'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sed lobortis fermentum nec imperdiet justo. Vivamus
                      et risus et.
                    </p>
                    <a href='#' className='text-blue-500 text-sm'>
                      Reply <FaReply className='inline' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='bg-white p-4 rounded shadow max-w-2xl mx-auto'>
                <h2 className='text-xl font-bold mb-4'>Post a comment</h2>
                <form>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                    <input
                      type='text'
                      placeholder='Name*'
                      className='p-2 border rounded'
                    />
                    <input
                      type='email'
                      placeholder='Email*'
                      className='p-2 border rounded'
                    />
                  </div>
                  <textarea
                    placeholder='Write a comment'
                    className='p-2 border rounded w-full mb-4'
                  ></textarea>
                  <button className='bg-[#FF9F0D] text-white px-4 py-2 rounded'>
                    Post a comment
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div className='bg-white p-4  border mb-4 flex flex-col items-center'>
              <img
                src='/blog9.jpg'
                alt='Profile picture'
                className='w-16 h-16 rounded-full mb-4'
              />
              <h3 className='text-xl font-bold'>Prince Miyake</h3>
              <p className='text-gray-500'>Blogger &amp; Food Enthusiast</p>

              <p className='text-gray-600 mt-2 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className='flex mt-1'>
                <span className='text-[#FF9F0D]'>&#9733;</span>
                <span className='text-[#FF9F0D]'>&#9733;</span>
                <span className='text-[#FF9F0D]'>&#9733;</span>
                <span className='text-[#FF9F0D]'>&#9733;</span>
                <span className='text-[#FF9F0D]'>&#9733;</span>
              </div>

              <div className='flex mt-2'>
                <a href='#' className='text-gray-500 mx-1'>
                  <FaFacebook />
                </a>
                <a href='#' className='text-gray-500 mx-1'>
                  <FaTwitter />
                </a>
                <a href='#' className='text-gray-500 mx-1'>
                  <FaInstagram />
                </a>
                <a href='#' className='text-gray-500 mx-1'>
                  <FaPinterest />
                </a>
              </div>

              <input
                type='text'
                placeholder='Search Your Recipe...'
                className='w-full p-2 border rounded-full mt-4'
              />
            </div>
            <div className='bg-white p-4  border mb-4'>
              <h3 className='text-xl font-bold mb-4'>Recent Post</h3>
              <div className='flex items-center mb-4'>
                <img
                  src='/blog10.jpg'
                  alt='Recent post image'
                  className='w-16 h-16 rounded-lg'
                />
                <div className='ml-4'>
                  <h4 className='text-lg '>
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className='text-gray-500 text-sm'>Feb 14, 2023</p>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  src='/blog11.jpg'
                  alt='Recent post image'
                  className='w-16 h-16 rounded-lg'
                />
                <div className='ml-4'>
                  <h4 className='text-lg '>
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className='text-gray-500 text-sm'>Feb 14, 2023</p>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  src='/blog12.jpg'
                  alt='Recent post image'
                  className='w-16 h-16 rounded-lg'
                />
                <div className='ml-4'>
                  <h4 className='text-lg'>
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className='text-gray-500 text-sm'>Feb 14, 2023</p>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  src='/blog13.jpg'
                  alt='Recent post image'
                  className='w-16 h-16 rounded-lg'
                />
                <div className='ml-4'>
                  <h4 className='text-lg '>
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className='text-gray-500 text-sm'>Feb 14, 2023</p>
                </div>
              </div>
            </div>

            <div className='bg-white p-4 border shadow-md mb-4 '>
              <h3 className='text-xl font-bold mb-4'>Filter By Menu</h3>
              <ul>
                <li className='flex items-center justify-between mb-2'>
                  <img
                    src='/blog14.jpg'
                    alt='Chicken Fry'
                    className='w-12 h-12 mr-2'
                  />
                  <span>Chicken Fry</span>
                  <span>25</span>
                </li>
                <li className='flex items-center justify-between mb-2'>
                  <img
                    src='/blog15.jpg'
                    alt='Burger Feed'
                    className='w-12 h-12 mr-2'
                  />
                  <span>Burger Feed</span>
                  <span>16</span>
                </li>
                <li className='flex items-center justify-between mb-2'>
                  <img
                    src='/blog16.jpg'
                    alt='Pizza'
                    className='w-12 h-12 mr-2'
                  />
                  <span className='mr-2'>Pizza</span> <span>16</span>
                </li>
                <li className='flex items-center justify-between mb-2'>
                  <img
                    src='/blog17.jpg'
                    alt='Fresh Pasta'
                    className='w-12 h-12 mr-2'
                  />
                  <span className='mr-2'>Fresh Pasta</span> <span>16</span>
                </li>
                <li className='flex items-center justify-between mb-2'>
                  <img
                    src='/blog18.jpg'
                    alt='Vegetables'
                    className='w-12 h-12 mr-2'
                  />
                  <span>Vegetables</span>
                  <span>16</span>
                </li>
              </ul>
            </div>
            <div className='bg-white p-4 border mb-4'>
              <h3 className='text-xl font-bold mb-4'>Popular Tags</h3>
              <div className='flex flex-wrap'>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border  text-lg mr-2 mb-2'>
                  Chicken
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Pizza
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Burger
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Vegetables
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Pasta
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Healthy
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Food
                </span>
              </div>
            </div>
            <div className='bg-white p-4 border mb-4'>
              <h3 className='text-xl font-bold mb-4'>Photo Gallery</h3>
              <div className='grid grid-cols-3 gap-2'>
                <img
                  src='/blog23.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
                <img
                  src='/blog20.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
                <img
                  src='/blog21.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
                <img
                  src='/blog22.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
                <img
                  src='/blog19.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
                <img
                  src='/blog23.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
              </div>
            </div>
            <div className='bg-white p-4 border'>
              <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
              <div className='flex'>
                <a
                  href='#'
                  className='bg-white text-gray-900 p-2 text-4xl border mx-2'
                >
                  <FaFacebook />
                </a>
                <a
                  href='#'
                  className='bg-white text-gray-900 p-2 text-4xl border mx-2'
                >
                  <FaTwitter />
                </a>
                <a
                  href='#'
                  className='bg-[#FF9F0D] text-gray-200 p-2 text-4xl border mx-2'
                >
                  <FaInstagram />
                </a>
                <a
                  href='#'
                  className='bg-white text-gray-900 p-2 text-4xl border mx-2'
                >
                  <FaPinterest />
                </a>
                <a
                  href='#'
                  className='bg-white text-gray-900 p-2 text-4xl border mx-2'
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
