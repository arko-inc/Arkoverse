import React from 'react';

const stars = [
  { id: 1, left: '10%', top: '20%', fact: 'Project Alpha: Innovative AI solutions.' },
  { id: 2, left: '30%', top: '50%', fact: 'Project Beta: Cutting-edge web development.' },
  { id: 3, left: '70%', top: '30%', fact: 'Project Gamma: Sustainable tech innovations.' },
  // Add more stars as needed
];

const Footer = () => {
  return (
    <footer className="relative h-40 bg-black text-white">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute w-2 h-2 bg-white rounded-full"
          style={{ left: star.left, top: star.top }}
          title={star.fact}
        ></div>
      ))}
      <p className="text-center mt-4">Hover over the stars for fun facts!</p>
    </footer>
  );
}

export default Footer;
