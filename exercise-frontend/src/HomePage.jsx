import React from 'react';
import Navigation from './components/navigation';

function HomePage() {
  return (
    <div>
        <header><Navigation/></header>
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Exercise & Fitness!</h1>
          <p className="text-lg">Achieve your fitness goals with our professional trainers.</p>
          <button className="bg-white text-purple-500 py-2 px-6 mt-8 rounded-md hover:bg-purple-100">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Personal Training</h3>
              <p className="text-gray-700">Get personalized workout plans and guidance from our experienced trainers.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Group Classes</h3>
              <p className="text-gray-700">Join our fun and energetic group classes to stay motivated and challenge yourself.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Nutrition Consultation</h3>
              <p className="text-gray-700">Get expert advice on diet and nutrition to support your fitness journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700">"I have been training with Exercise & Fitness for a year now, and I've seen amazing results. The trainers are knowledgeable and supportive."</p>
              <p className="text-gray-700 font-bold mt-4">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700">"The group classes are so much fun! I always look forward to working out with others and pushing myself to new limits."</p>
              <p className="text-gray-700 font-bold mt-4">- Jane Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700">"The nutrition consultation has been a game-changer for me. I've learned how to make healthier choices and fuel my body properly."</p>
              <p className="text-gray-700 font-bold mt-4">- Alex Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start Your Fitness Journey Today!</h2>
          <button className="bg-white text-blue-500 py-2 px-6 mt-8 rounded-md hover:bg-blue-100">Sign Up Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">Exercise & Fitness &copy; 2023. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default HomePage;
