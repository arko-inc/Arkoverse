import React from 'react';

const Project1 = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl  mb-8 hover:text-teal-400 transition duration-500 ease-in-out text-center font-extrabold uppercase tracking-wide">
          Project1
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Documentation Section */}
          <div>
            <h2 className="text-4xl font-semibold mb-4 hover:text-teal-400 transition duration-500 ease-in-out">Documentation</h2>
            <p className="text-xl mb-6 leading-relaxed font-light">
              Welcome to the future of web development with Project1. Dive into a universe of advanced technology and innovative solutions.
            </p>
            <p className="text-xl mb-6 leading-relaxed font-light">
              The project involves various cutting-edge technologies and innovative approaches to problem-solving.
            </p>
          </div>
          {/* Video Section */}
          <div>
            <h2 className="text-4xl font-semibold mb-4 hover:text-teal-400 transition duration-500 ease-in-out">Project Video</h2>
            <video
              className="w-full rounded-lg shadow-xl mb-6 hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105"
              controls
              src="https://via.placeholder.com/150" // Replace this URL with your video URL
            ></video>
          </div>
          {/* Script Section */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-semibold mb-4 hover:text-teal-400 transition duration-500 ease-in-out">Project Script</h2>
            <pre className="bg-gray-800 p-6 rounded-lg shadow-xl text-left max-w-full overflow-auto hover:bg-gray-700 transition duration-500 ease-in-out transform hover:scale-105">
              <code className="text-sm">
                {`
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
                `}
              </code>
            </pre>
          </div>
          {/* Information Section */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-semibold mb-4 hover:text-teal-400 transition duration-500 ease-in-out">Project Information</h2>
            <p className="text-xl mb-4 leading-relaxed font-light">
              Project1 is designed to demonstrate the seamless integration of front-end and back-end technologies.
              It incorporates modern UI/UX principles to deliver an engaging user experience.
            </p>
            <p className="text-xl mb-4 leading-relaxed font-light">
              Technologies Used: React, Tailwind CSS, Node.js, Express.js, MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
