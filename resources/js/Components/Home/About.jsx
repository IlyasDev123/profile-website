import React from 'react';

const Section = ({ id, title, description }) => {
  return (
    <section id={id} className="py-16 bg-gradient-to-r from-indigo-50 to-blue-100">
      <div className="container mx-auto text-center px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/IlyasDev123"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ilyas-873a17178?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 hover:bg-gray-900 hover:shadow-xl"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <Section
      id="about"
      title="About Me"
      description="I'm Muhammad Ilyas, a passionate Full-Stack Developer with over 5 years of experience in building dynamic web applications and Api's. I specialize in backend development with Laravel and frontend development using Vue.js, React.js, and AngularJS. I thrive on creating seamless user experiences and efficient, scalable solutions."
    />
  );
};

export default About;
