import React from 'react';

const Skills = () => {
  // Skill data with years of experience
  const skillsData = [
    { name: 'Laravel', years: 5 },
    { name: 'PHP', years: 2 },
    { name: 'Node.js', years: 0.6 },
    { name: 'HTML', years: 2 },
    { name: 'CSS', years: 1 },
    { name: 'JavaScript', years: 1 },
    { name: 'React.js', years: 1 },
    { name: 'Vue.js', years: 1.5 },
    { name: 'AngularJS', years: 1 },
    { name: 'TailwindCSS', years: 0.6 },
    { name: 'Bootstrap', years: 2 },
  ];

  // Categorized Third-Party APIs
  const thirdPartyAPIs = {
    paymentMethods: ['Stripe', 'Paypal', 'Jazz Cash', 'authorize.net'],
    socialLogin: ['Facebook', 'Gmail', 'Twitter'],
    pushNotifications: ['Firebase', 'One Signal'],
    messages: ['Twilio', 'WhatsApp'],
    IntegrationTools: ['Acuity', 'Zapier'],
  };

  // Server Management Skills updated to Dedicated and Shared Hosting
  const serverManagement = {
    dedicatedHosting: ['AWS', 'AWS S3'],
    sharedHosting: ['GoDaddy', 'NameCheap', 'WHM'],
  };

  return (
    <div className="py-16  bg-gradient-to-r from-blue-50 to-teal-50" id="skills">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Skills & Experience</h2>

        {/* Skill Proficiency Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800">{skill.name}</h4>
                <p className="text-gray-600 mt-2">{skill.years} years of experience</p>
              </div>
            ))}
          </div>
        </div>

        {/* Third-Party APIs Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Third-Party APIs & Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(thirdPartyAPIs).map(([category, items]) => (
              <div
                key={category}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h4 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1')} {/* Format camelCase to readable */}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {items.map((item) => (
                    <div key={item} className="bg-blue-100 p-4 rounded-md shadow-md">
                      <p className="text-gray-700 text-center">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Server Management</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Dedicated Hosting */}
            <div className="text-left bg-white p-6 rounded-md shadow-sm w-full md:w-1/2 lg:w-1/3">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Dedicated Hosting</h4>
              <ul className="text-gray-700 text-left list-disc list-inside">
                {serverManagement.dedicatedHosting.map((server) => (
                  <li key={server}>{server}</li>
                ))}
              </ul>
            </div>
            <div className="text-left bg-white p-6 rounded-md shadow-sm w-full md:w-1/2 lg:w-1/3">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Shared Hosting</h4>
              <ul className="text-gray-700 text-left list-disc list-inside">
                {serverManagement.sharedHosting.map((server) => (
                  <li key={server}>{server}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
