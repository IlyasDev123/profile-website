import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'Mailboxing',
      description: 'A shipping service in Bermuda offering the largest and fastest services. Integrated with APIs like WhatsApp, Mailgun, and Bermuda Customs.',
      link: 'https://www.mailboxes.bm',
      image: '../../images/mailboxing.png', // Example Image URL
    },
    {
      title: 'Fyfer App',
      description: 'A platform designed to connect freelancers with potential clients, streamlining the hiring process and project management.',
      link: 'https://fyferapp.com',
      image: '../../images/fyfer.png', // Example Image URL
    },
    {
      title: 'Openborders',
      description: 'A web application aimed at providing resources and support for immigrants and refugees seeking new opportunities.',
      link: 'https://openborders.io',
      image: '../../images/openborders.png', // Example Image URL
    },
      {
      title: 'JMK',
      description: 'A Creative Story Writing Platform BETA where art and storytelling merge. Explore unique artworks, read captivating stories, or contribute your own creative narratives. Join a community of creators and immerse yourself in a world of imagination.',
      link: 'https://johnniemaeking.com/',
      image: '../../images/jmk.png', // Example Image URL
    },
    {
      title: 'P4K',
      description: 'Playing4Keeps is a dating app focused on improving oneself in order to find an ideal partner through unique games. Here at Playing 4 Keeps we partner up with psychologists and life coaches to speak to our users through our podcast about different topics such as connecting to our inner child.',
      link: 'https://p4kdatingapp.com/',
      image: '../../images/p4k.png', // Example Image URL
    },
     {
      title: 'Layuptrade',
      description: "Layup Trades is the perfect place to subscribe for those traders who don't have the time to follow the market but have the desire to invest.",
      link: 'https://layuptrades.com/',
      image: '../../images/layuptrade.png', // Example Image URL
    },
  ];

  return (
    <div className="py-16" id="projects">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:scale-105">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
