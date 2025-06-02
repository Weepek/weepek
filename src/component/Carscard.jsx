import React from 'react';
import cus1 from '../assets/car1.jpg';
import cus2 from '../assets/car5.jpg';
import cus3 from '../assets/car8.jpg';
import { CardBody, CardContainer, CardItem } from '../component/ui/3d-card';

function Carscard() {
  const cardData = [
    {
      img: cus1,
      title: 'Maserati',
      description: 'Our customers leave satisfied, knowing they made the right choice with us.',
      highlights: [
        'Twin-turbocharged V6 engine',
        'Italian luxury interior',
        'Adaptive suspension for smooth rides',
      ],
    },
    {
      img: cus2,
      title: 'Ferrari',
      description: 'Take a Test Drive today and feel the quality of our cars before you buy.',
      highlights: [
        'V8 power with 710 horsepower',
        'Iconic red racing finish',
        'Track-tested performance',
      ],
    },
    {
      img: cus3,
      title: 'Lamborghini',
      description: 'Cars come with full previous service history checked with authorised dealerships.',
      highlights: [
        'V12 naturally aspirated engine',
        'Scissor doors & aggressive styling',
        'All-wheel drive for superior grip',
      ],
    },
    {
      img: cus1,
      title: 'Bugatti',
      description: 'Experience unmatched speed and luxury with our Bugatti lineup.',
      highlights: ['W16 engine', 'Carbon fiber design', 'Top-tier craftsmanship'],
    },
    {
      img: cus2,
      title: 'Aston Martin',
      description: 'Sophistication and performance redefined.',
      highlights: ['Twin-turbo V8', 'Hand-stitched leather', 'Iconic British design'],
    },
    {
      img: cus3,
      title: 'Porsche',
      description: 'Precision engineering meets timeless design.',
      highlights: ['Turbocharged engine', 'Classic curves', 'High-end infotainment'],
    },
      {
      img: cus3,
      title: 'Porsche',
      description: 'Precision engineering meets timeless design.',
      highlights: ['Turbocharged engine', 'Classic curves', 'High-end infotainment'],
    },
      {
      img: cus3,
      title: 'Porsche',
      description: 'Precision engineering meets timeless design.',
      highlights: ['Turbocharged engine', 'Classic curves', 'High-end infotainment'],
    },
      {
      img: cus3,
      title: 'Porsche',
      description: 'Precision engineering meets timeless design.',
      highlights: ['Turbocharged engine', 'Classic curves', 'High-end infotainment'],
    },
  ];

  return (
    <div className="bg-black py-10 px-4">
      <h1 className='text-white items-center justify-center flex text-4xl font-Iceland'>Collection </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center">
       
        {cardData.map((card, i) => (
          <CardContainer key={i} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[18rem] sm:w-[20rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-normal text-neutral-400  font-Audiowide"
              >
                {card.title}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={card.img}
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl "
                  alt={`${card.title} Image`}
                />
              </CardItem>

              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  View More →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Book Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Carscard;
