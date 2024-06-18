import ProtectedRoute from "../components/ProtectedRoute";


const About = () => {
  return (
    <ProtectedRoute>
      <div className="about-container">
        <h2>About Us</h2>
        <p>Welcome to our Pokémon information website!</p>
        <p>We aim to provide comprehensive details about various Pokémon species, including their types, abilities, and stats.</p>
        <p>Feel free to explore our website and learn more about your favorite Pokémon!</p>
        <h3>Our Team</h3>
        <ul>
          <li>Royce - Web Developer</li>
          <li>Dennis - Web Developer</li>
          <li>Rabia - Web Developer</li>
        </ul>
        <p>Contact us at: @wd_50group</p>
      </div>
    </ProtectedRoute>
    
  );
}

export default About;