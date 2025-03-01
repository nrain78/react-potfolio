import { IoArrowForward } from 'react-icons/io5';

function About() {
  return (
    <div className="text-white md:flex items-center md:justify-center bg-gradient-to-r from-gray-800 via-purple-600 to-gray-700 p-8shadow-lg mt-20 md:mx-10 bg-opacity-20 rounded-lg p-12 md:mb-0.5">
      <div className=" md:flex md:flex-row flex-col items-center md:items-start">

        {/* Left side: About text with 3 cards */}
        <div className="w-full md:w-1/2">
          <ul>
            {/* Card 1 */}
                  <li className="flex gap-3 py-4 border-b border-gray-300">
                    <IoArrowForward size={30} className="mt-1 text-gray-300" />
                    <div className="w-full">
                    <h2 className="text-2xl font-bold text-gray-100">Subject</h2>
                    <p className="text-gray-200 mt-2">Hello, I am Noor-ul-Ain. I am a Computer Science student. I completed my Intermediate in Computer Science.</p>
                    </div>
                  </li>

                  {/* Card 2 */}
            <li className="flex gap-3 py-4 border-b border-gray-300">
              <IoArrowForward size={30} className="mt-1 text-gray-300" />
              <div className="w-full">
                <h2 className="text-2xl font-bold text-gray-100">Frotened Developer</h2>
                <p className="text-gray-200 mt-2">I am working in ReactJS. I have also worked in like HTML,
                  CSS, JS, Framework like Bootstrap, Tailwind CSS, and many more. I have also worked in React Js.I have also worked in WordPress.org
                </p>
              </div>
            </li>

            {/* Card 3 */}
            <li className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-gray-300" />
              <div className="w-full">
                <h2 className="text-2xl font-bold text-gray-100">Hobbies</h2>
                <p className="text-gray-200 mt-2">I Love to build websites using ReactJS.I Love Coding!</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src="/about.png" alt="About us" />
        </div>

      </div>
    </div>
  );
}

export default About;

