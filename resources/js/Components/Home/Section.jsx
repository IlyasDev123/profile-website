import React from 'react';

const Section = ({ id, title, description, children }) => {
  return (
    <section id={id} className="py-16 bg-white ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        {children}
      </div>
    </section>
  );
};

export default Section;
