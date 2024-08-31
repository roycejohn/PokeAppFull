// import ProtectedRoute from "../components/ProtectedRoute";


// const About = () => {
//   return (
//     // <ProtectedRoute>
//       <div className="about-container">
//         <h2>About Us</h2>
//         <p>Welcome to our Pokémon information website!</p>
//         <p>We aim to provide comprehensive details about various Pokémon species, including their types, abilities, and stats.</p>
//         <p>Feel free to explore our website and learn more about your favorite Pokémon!</p>
//         <h3>Our Team</h3>
//         <ul>
//           <li>Royce - Web Developer</li>
//           <li>Dennis - Web Developer</li>
//           <li>Rabia - Web Developer</li>
//         </ul>
//         <p>Contact us at: @wd_50group</p>
//       </div>
//     // </ProtectedRoute>
    
//   );
// }

// export default About;


const About = () => {
  return (
    // <ProtectedRoute>
      <div className="container mx-auto px-4 py-10 text-center max-w-screen-lg ">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-8">Welcome to our Pokémon information website! This site was initially created as a group project during our coding bootcamp to showcase our skills.</p>
        <p className="text-gray-600 mb-6 ">It is now continuously developed and maintained by me, cuevDev, as part of my professional portfolio.</p>
        <p className="text-gray-600 mb-4">Explore detailed insights into various Pokémon species, including their unique types, abilities, and statistical profiles. Plus, enjoy a fun memory game where you can match Pokémon to test your knowledge and memory skills!</p>
        <p className="text-gray-600 mb-16">Feel free to explore and learn more about your favorite Pokémon!</p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Our Team</h3>
        <ul className="list-none space-y-1 mb-4 text-gray-600 ">
          <li>cuevDev - Lead Developer</li>
          <li>Dennis - Web Developer</li>
          <li>Rabia - Web Developer</li>
        </ul>
        <p className="text-gray-600">Contact me at: cuevdev.netlify.app </p>
        <p className="text-xs text-gray-500 mt-6">Disclaimer: All trademarks and copyrights are the property of their respective owners. Images and logos are used under the principles of fair use for non-commercial, educational purposes. If you are a copyright owner and believe that any content on this site infringes on your rights, please contact us for removal.
        </p>
      </div>
    // <ProtectedRoute>
  );
}

export default About;

