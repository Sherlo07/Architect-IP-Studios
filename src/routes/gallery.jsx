import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
});

const INITIAL_IMAGES = [
  {
    id: 1,
    title: 'Modern Architecture',
    url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg',
  },
  {
    id: 2,
    title: 'Urban Landscape',
    url: 'https://images.pexels.com/photos/3797517/pexels-photo-3797517.jpeg',
  },
  {
    id: 3,
    title: 'Building Design',
    url: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
  },
  {
    id: 4,
    title: 'Contemporary Facade',
    url: 'https://images.pexels.com/photos/3962288/pexels-photo-3962288.jpeg',
  },
  {
    id: 5,
    title: 'Structural Art',
    url: 'https://images.pexels.com/photos/1521571/pexels-photo-1521571.jpeg',
  },
  {
    id: 6,
    title: 'City Skyline',
    url: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function RouteComponent() {
  const [images] = useState(INITIAL_IMAGES);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen bg-gradient-to-b from-slate-50 via-gray-50 to-white'
    >
      <motion.section className='pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <motion.div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4 text-gray-900'>
            Our <span className='text-teal-600'>Gallery</span>
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Explore our diverse portfolio of architectural masterpieces and innovative designs
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className='group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all'
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={image.url}
                alt={image.title}
                className='w-full h-full object-cover'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-6'>
                <div className='text-right'>
                  <p className='text-white text-sm font-semibold opacity-75 mb-2'>Architectural Innovation</p>
                  <h3 className='text-white text-lg font-bold'>{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default RouteComponent;
