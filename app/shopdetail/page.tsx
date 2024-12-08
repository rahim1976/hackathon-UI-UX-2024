import Head from 'next/head'
import React from 'react'
import {
  FaExchangeAlt,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaPinterest,
  FaStar,
  FaTwitter
} from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <Head>
        <title>Product Page</title>
      </Head>
      <div className='relative'>
        <img
          src='/navbarbg.jpg'
          alt='Fresh vegetables with dark background'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>Product Detail</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-yellow-500'>› Product</span>
          </p>
        </div>
      </div>
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex'>
            <div className='flex flex-col space-y-2 mr-4'>
              <img
                src='/detail2.jpg'
                alt='Thumbnail 1'
                className='w-30 h-30 object-cover rounded'
              />
              <img
                src='/detail3.jpg'
                alt='Thumbnail 2'
                className='w-30 h-30 object-cover rounded'
              />
              <img
                src='/detail4.jpg'
                alt='Thumbnail 3'
                className='w-30 h-30 object-cover rounded'
              />
              <img
                src='/detail5.jpg'
                alt='Thumbnail 4'
                className='w-30 h-30 object-cover rounded'
              />
            </div>
            <div className='flex-grow'>
              <img
                src='/detail1.jpg'
                alt='Main product image'
                className='w-full h-auto'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex justify-between items-center'>
              <span className='bg-gray-200 text-gray-800 px-2 py-1 rounded'>
                In stock
              </span>
              <div className='flex space-x-2'>
                <button className='text-gray-500 hover:text-gray-700'>
                  Prev
                </button>
                <button className='text-gray-500 hover:text-gray-700'>
                  Next
                </button>
              </div>
            </div>
            <h1 className='text-5xl font-bold mt-4'>Yummy Chicken Chup</h1>
            <p className='text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
              mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
              in consequat.
            </p>
            <div className='text-2xl font-bold mt-4'>54.00$</div>
            <div className='flex items-center mt-2'>
              <div className='flex items-center'>
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
              </div>
              <span className='ml-2 text-gray-600'>5.0 Rating | 22 Review</span>
            </div>
            <div className='mt-4'>
              <label className='block text-gray-700'>Dictum/cursus/Risus</label>
            </div>
            <div className='flex items-center mt-4'>
              <button className='px-4 py-2 border border-gray-300 h-10'>
                -
              </button>
              <input
                type='text'
                className='w-12 text-center border-t border-b border-gray-300 h-10'
                value='1'
              />
              <button className='px-4 py-2 border border-gray-300 h-10'>
                +
              </button>
              <a href='/cart'>
                <button className='ml-4 px-4 py-2 bg-[#FF9F0D] text-white rounded h-10'>
                  Add to cart
                </button>
              </a>
            </div>
            <div className='flex items-center mt-4 space-x-4'>
              <FaHeart />
              <button className='text-gray-500 hover:text-gray-700'>
                Add to Wishlist
              </button>
              <FaExchangeAlt />
              <button className='text-gray-500 hover:text-gray-700'>
                Compare
              </button>
            </div>
            <div className='mt-4'>
              <div className='text-gray-700'>
                Category: <span className='text-gray-500'>Pizza</span>
              </div>
              <div className='text-gray-700'>
                Tag: <span className='text-gray-500'>Our Shop</span>
              </div>
            </div>
            <div className='flex items-center mt-4 space-x-4'>
              <span className='text-gray-700'>Share :</span>
              <a href='#' className='text-gray-500 hover:text-gray-700'>
                <FaFacebook />
              </a>
              <a href='#' className='text-gray-500 hover:text-gray-700'>
                <FaTwitter />
              </a>
              <a href='#' className='text-gray-500 hover:text-gray-700'>
                <FaInstagram />
              </a>
              <a href='#' className='text-gray-500 hover:text-gray-700'>
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <div className='flex space-x-4 border-b border-gray-300'>
            <button className='px-4 py-2 text-gray-700 border-b-2 border-gray-800'>
              Description
            </button>
            <button className='px-4 py-2 text-gray-500'>Reviews (24)</button>
          </div>
          <div className='mt-4 text-gray-600'>
            <p>
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla
              sed purus augue, eu euismod tellus. Nam mattis eros nec mi
              sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at
              justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada
              porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis
              justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat
              tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac,
              aliquam in nisl.
            </p>
            <p className='mt-4'>
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex.
              Curabitur blandit justo urna, id porttitor est dignissim nec.
              Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi
              rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus
              quis auctor. Curabitur rutrum massa at volutpat placerat. Duis
              sagittis vehicula fermentum. Integer eu vulputate justo. Aenean
              pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non
              aliquet sem.
            </p>
          </div>
          <div className='mt-8'>
            <h2 className='text-xl font-bold'>Key Benefits</h2>
            <ul className='list-disc list-inside mt-2 text-gray-600'>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
              <li>
                Vestibulum sed massa vel ipsum imperdiet malesuada id tempus
                nisl.
              </li>
              <li>Etiam nec massa et lectus convallis elementum.</li>
              <li>Maecenas eget diam magna, in blandit turpis.</li>
            </ul>
          </div>
        </div>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold'>Similar Products</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-4'>
            <div className='flex flex-col items-center'>
              <img
                src='similar1.jpg'
                alt='Fresh Lime'
                className='w-full h-auto'
              />
              <div className='mt-2 text-center'>
                <div className='text-gray-700'>Fresh Lime</div>
                <div className='text-gray-500 line-through'>$38.00</div>
                <div className='text-gray-700'>$45.00</div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <img
                src='similar2.jpg'
                alt='Chocolate Muffin'
                className='w-full h-auto'
              />
              <div className='mt-2 text-center'>
                <div className='text-gray-700'>Chocolate Muffin</div>
                <div className='text-gray-700'>$28.00</div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <img src='similar3.jpg' alt='Burger' className='w-full h-auto' />
              <div className='mt-2 text-center'>
                <div className='text-gray-700'>Burger</div>
                <div className='text-gray-700'>$21.00</div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <img
                src='similar1.jpg'
                alt='Fresh Lime'
                className='w-full h-auto'
              />
              <div className='mt-2 text-center'>
                <div className='text-gray-700'>Fresh Lime</div>
                <div className='text-gray-500 line-through'>$38.00</div>
                <div className='text-gray-700'>$45.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
