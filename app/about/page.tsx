import Head from 'next/head'
import React from 'react'
import { FaHatCowboy, FaLeaf, FaPlay, FaStar, FaUtensils } from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <div className='relative'>
        <img
          src='/navbarbg.jpg'
          alt='Fresh vegetables with dark background'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>About</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-[#FF9F0D]'>› About</span>
          </p>
        </div>
      </div>

      <div className='bg-white text-gray-800'>
        <div className='container mx-auto '>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 px-2'>
              <div className='col-span-1'>
                <img
                  src='/about4.jpg'
                  alt='Tacos with lime'
                  className='w-full h-86 object-cover rounded-lg shadow-md'
                />
              </div>
              <div className='col-span-1 grid grid-cols-1 gap-4'>
                <img
                  src='/about5.jpg'
                  alt='Fried food with dip'
                  className='w-full h-74 object-cover rounded-lg shadow-md'
                />
                <img
                  src='/about6.jpg'
                  alt='Salad with orange juice'
                  className='w-full h-74 object-cover rounded-lg shadow-md'
                />
              </div>
            </div>
            <div className='col-span-1 flex flex-col justify-center p-4'>
              <h2
                className='text-sm text-[#FF9F0D] mb-2'
                style={{ fontFamily: 'Great Vibes, cursive' }}
              >
                About us
              </h2>
              <h1 className='text-3xl font-bold mb-4'>
                Food is an important part Of a balanced Diet
              </h1>
              <p className='text-gray-600 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis vitae mus risus. Lacus nisi, at et dapibus sit
                eu velit in consequat.
              </p>
              <div className='mt-6 flex '>
                <button className=' border bg-[#FF9F0D] border-[#FF9F0D] text-white px-6  hover:bg-white  hover:text-black py-4 rounded-lg   transition duration-300'>
                  Show More
                </button>
                <button className=' text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:text-black hover:bg-[#FF9F0D] transition duration-300'>
                  <div className='flex items-center justify-center w-10 h-10 bg-[#FF9F0D] rounded-full'>
                    <FaPlay className='text-white' />
                  </div>
                  <span className='font-bold'>Watch Video</span>
                </button>
              </div>
            </div>
          </div>

          <section className='text-center py-12'>
            <h2 className='text-3xl font-bold'>Why Choose us</h2>
            <p className='text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <div className='mt-8'>
              <img
                src='/about7.jpg'
                alt='Delicious food dishes'
                className='w-full h-auto'
              />
            </div>
          </section>
          <section className='text-center py-12'>
            <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
              <div className='flex flex-col items-center'>
                <FaHatCowboy className='text-4xl mb-4' />

                <h3 className='text-xl font-semibold'>Best Chef</h3>
                <p className='text-gray-600 mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <FaUtensils className='text-4xl mb-4' />
                <h3 className='text-xl font-semibold'>120 Item food</h3>
                <p className='text-gray-600 mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <FaLeaf className='text-4xl mb-4' />

                <h3 className='text-xl font-semibold'>Clean Environment</h3>
                <p className='text-gray-600 mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
            </div>
          </section>
          <section className='bg-[#FF9F0D] text-white text-center py-12'>
            <h2 className='text-3xl font-bold'>Team Member</h2>
            <p className='mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia pharetra dictum. Integer maximus ligula orci.
            </p>
            <div className='flex flex-col md:flex-row justify-center items-center mt-8 space-y-8 md:space-y-0 md:space-x-8'>
              <div className='bg-white text-black rounded-lg overflow-hidden shadow-lg'>
                <img
                  src='/about8.jpg'
                  alt='Team member Mark Henry'
                  className='w-full h-auto'
                />
                <div className='p-4 text-center'>
                  <h3 className='text-xl font-semibold'>Mark Henry</h3>
                  <p className='text-gray-600'>Owner</p>
                  <div className='flex justify-center space-x-4 mt-4'>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='bg-white text-black rounded-lg overflow-hidden shadow-lg'>
                <img
                  src='/about8.jpg'
                  alt='Team member Lucky Helen'
                  className='w-full h-auto'
                />
                <div className='p-4 text-center'>
                  <h3 className='text-xl font-semibold'>Lucky Helen</h3>
                  <p className='text-gray-600'>Chef</p>
                  <div className='flex justify-center space-x-4 mt-4'>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='bg-white text-black rounded-lg overflow-hidden shadow-lg'>
                <img
                  src='/about8.jpg'
                  alt='Team member Moon Henry'
                  className='w-full h-auto'
                />
                <div className='p-4 text-center'>
                  <h3 className='text-xl font-semibold'>Moon Henry</h3>
                  <p className='text-gray-600'>Founder</p>
                  <div className='flex justify-center space-x-4 mt-4'>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='bg-white text-black rounded-lg overflow-hidden shadow-lg'>
                <img
                  src='/about8.jpg'
                  alt='Team member Tom Monrow'
                  className='w-full h-auto'
                />
                <div className='p-4 text-center'>
                  <h3 className='text-xl font-semibold'>Tom Monrow</h3>
                  <p className='text-gray-600'>Specialist</p>
                  <div className='flex justify-center space-x-4 mt-4'>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#' className='text-gray-600'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className='container mx-auto px-4 py-8'>
            <section className='text-center mb-16'>
              <h2
                className='testimonial-title text-4xl'
                style={{ fontFamily: 'Great Vibes, cursive' }}
              >
                Testimonials
              </h2>
              <h3 className='text-3xl font-bold mt-2'>
                What our client are saying
              </h3>
              <div className='mt-8 flex justify-center'>
                <div className='bg-white shadow-lg rounded-lg p-8 max-w-2xl'>
                  <img
                    src='/client1.jpg'
                    alt='Client photo'
                    className='w-24 h-24 rounded-full mx-auto mb-4'
                  />
                  <div className='text-yellow-500 text-4xl mb-4'>99</div>
                  <p className='text-gray-600 mb-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                    fringilla bibendum. Ut ac augue urna. Vitae feugiat pretium
                    donec id elementum. Ultrices mattis sed vitae mus risus.
                    Lacus nisi, et ac dapibus sit eu velit in consequat.
                  </p>
                  <div className='flex justify-center items-center mb-4'>
                    <FaStar className='text-[#FF9F0D] text-2xl' />
                    <FaStar className='text-[#FF9F0D] text-2xl' />
                    <FaStar className='text-[#FF9F0D] text-2xl' />
                    <FaStar className='text-[#FF9F0D] text-2xl' />
                    <FaStar className='text-gray-500 text-2xl' />
                  </div>
                  <h4 className='text-xl font-bold'>Alamin Hasan</h4>
                  <p className='text-gray-500'>Food Specialist</p>
                  <div className='flex justify-center mt-4'>
                    <div className='w-2 h-2 bg-yellow-500 rounded-full mx-1'></div>
                    <div className='w-2 h-2 bg-gray-300 rounded-full mx-1'></div>
                    <div className='w-2 h-2 bg-gray-300 rounded-full mx-1'></div>
                    <div className='w-2 h-2 bg-gray-300 rounded-full mx-1'></div>
                  </div>
                </div>
              </div>
            </section>

            <section className='text-center px-4'>
              <h2 className='food-menu-title text-4xl font-bold'>
                Our Food Menu
              </h2>
              <p className='text-gray-600 mt-2 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue.
              </p>
              <div className='mt-8'>
                <nav className='flex flex-wrap justify-center space-x-4 text-lg border-b gap-8'>
                  <a
                    href='#'
                    className='text-[#FF9F0D] border-b-2 border-[#FF9F0D] pb-1'
                  >
                    Breakfast
                  </a>
                  <a
                    href='#'
                    className='text-gray-600 hover:text-[#FF9F0D] transition duration-300'
                  >
                    Lunch
                  </a>
                  <a
                    href='#'
                    className='text-gray-600 hover:text-[#FF9F0D] transition duration-300'
                  >
                    Dinner
                  </a>
                  <a
                    href='#'
                    className='text-gray-600 hover:text-[#FF9F0D] transition duration-300'
                  >
                    Dessert
                  </a>
                  <a
                    href='#'
                    className='text-gray-600 hover:text-[#FF9F0D] transition duration-300'
                  >
                    Drink
                  </a>
                  <a
                    href='#'
                    className='text-gray-600 hover:text-[#FF9F0D] transition duration-300'
                  >
                    Snack
                  </a>
                </nav>
                <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {Array.from({ length: 6 }, (_, index) => (
                    <div
                      key={index}
                      className='flex flex-col justify-between items-start border-b py-4'
                    >
                      <div>
                        <h4 className='text-xl font-bold text-[#FF9F0D]'>
                          Alder Grilled Chinook Salmon
                        </h4>
                        <p className='text-gray-600'>
                          Toasted French bread topped with romano, cheddar
                        </p>
                        <p className='text-gray-400'>560 CAL</p>
                      </div>
                      <div className='text-2xl font-bold text-[#FF9F0D] mt-2'>
                        32$
                      </div>
                    </div>
                  ))}
                </div>
                <button className='mt-8 px-6 py-2 bg-[#FF9F0D] text-white rounded-full hover:bg-[#e68a00] transition duration-300'>
                  View Menu
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
