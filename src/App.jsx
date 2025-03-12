import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollAnimation from './components/ScrollAnimation';
import './App.css';

// Import pages when they're created
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import Reservations from './pages/Reservations';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for a luxury experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <h1>Le Petit Four</h1>
          <div className="loading-spinner"></div>
          <p>Experience Luxury</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">Le Petit Four</div>
            <div className="footer-info">
              <p>123 Gourmet Avenue, Paris</p>
              <p>+33 1 23 45 67 89</p>
              <p>info@lepetitfour.com</p>
            </div>
            <div className="footer-hours">
              <p>Monday - Friday: 11am - 11pm</p>
              <p>Saturday - Sunday: 10am - 12am</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Le Petit Four. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// Temporary placeholder components until we create the actual page components
const Home = () => (
  <div className="page-container home-page">
    <div className="hero-section">
      <ScrollAnimation animation="fade" duration={0.8}>
        <div className="hero-content">
          <h1>Le Petit Four</h1>
          <h2>Exquisite French Cuisine</h2>
          <button className="btn-primary">Reserve a Table</button>
        </div>
      </ScrollAnimation>
    </div>
    <ScrollAnimation animation="slide-up" delay={0.2}>
      <div className="section about-preview">
        <div className="container">
          <h2>A Taste of Paris in Every Bite</h2>
          <p>Le Petit Four brings the essence of French culinary artistry to your table. Our award-winning chefs craft each dish with passion and precision, using only the finest ingredients sourced from local and French suppliers.</p>
          <button className="btn-secondary">Discover Our Story</button>
        </div>
      </div>
    </ScrollAnimation>
    <div className="section menu-preview">
      <div className="container">
        <ScrollAnimation animation="slide-up">
          <h2>Our Signature Dishes</h2>
        </ScrollAnimation>
        <div className="menu-items">
          <ScrollAnimation animation="slide-right" delay={0.1}>
            <div className="menu-item">
              <h3>Coq au Vin</h3>
              <p>Traditional French chicken braised with wine, lardons, mushrooms, and garlic</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-up" delay={0.2}>
            <div className="menu-item">
              <h3>Bouillabaisse</h3>
              <p>Provençal seafood stew with fresh fish, shellfish, and aromatic herbs</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-left" delay={0.3}>
            <div className="menu-item">
              <h3>Crème Brûlée</h3>
              <p>Classic vanilla custard topped with a layer of caramelized sugar</p>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animation="fade" delay={0.4}>
          <button className="btn-secondary">View Full Menu</button>
        </ScrollAnimation>
      </div>
    </div>
  </div>
);

const Menu = () => (
  <div className="page-container menu-page">
    <ScrollAnimation animation="fade">
      <div className="page-header">
        <h1>Our Menu</h1>
        <p>Exquisite French cuisine crafted with passion and tradition</p>
      </div>
    </ScrollAnimation>
    <div className="menu-section">
      <ScrollAnimation animation="slide-up">
        <h2>Appetizers</h2>
      </ScrollAnimation>
      <div className="menu-items">
        <ScrollAnimation animation="slide-right" delay={0.1}>
          <div className="menu-item">
            <div className="menu-item-header">
              <h3>Escargots de Bourgogne</h3>
              <span className="price">€18</span>
            </div>
            <p>Burgundy snails baked in garlic and parsley butter</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="slide-left" delay={0.2}>
          <div className="menu-item">
            <div className="menu-item-header">
              <h3>Foie Gras</h3>
              <span className="price">€24</span>
            </div>
            <p>Duck liver pâté with brioche toast and fig jam</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
    <div className="menu-section">
      <ScrollAnimation animation="slide-up" delay={0.3}>
        <h2>Main Courses</h2>
      </ScrollAnimation>
      <div className="menu-items">
        <ScrollAnimation animation="slide-right" delay={0.4}>
          <div className="menu-item">
            <div className="menu-item-header">
              <h3>Beef Bourguignon</h3>
              <span className="price">€32</span>
            </div>
            <p>Slow-cooked beef stew with red wine, mushrooms, and pearl onions</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="slide-left" delay={0.5}>
          <div className="menu-item">
            <div className="menu-item-header">
              <h3>Duck Confit</h3>
              <span className="price">€36</span>
            </div>
            <p>Crispy duck leg confit with roasted potatoes and cherry sauce</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
);

const Reservations = () => (
  <div className="page-container reservations-page">
    <ScrollAnimation animation="fade">
      <div className="page-header">
        <h1>Reservations</h1>
        <p>Secure your table for an unforgettable dining experience</p>
      </div>
    </ScrollAnimation>
    <ScrollAnimation animation="slide-up" delay={0.2}>
      <div className="reservation-form-container">
        <form className="reservation-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Your Phone Number" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" required />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <select id="guests" required>
              <option value="">Select</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7+">7+ People</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="special-requests">Special Requests</label>
            <textarea id="special-requests" rows="4" placeholder="Any special requests or dietary requirements?"></textarea>
          </div>
          <button type="submit" className="btn-primary">Reserve Now</button>
        </form>
      </div>
    </ScrollAnimation>
  </div>
);

const About = () => (
  <div className="page-container about-page">
    <ScrollAnimation animation="fade">
      <div className="page-header">
        <h1>Our Story</h1>
        <p>The legacy of Le Petit Four</p>
      </div>
    </ScrollAnimation>
    <div className="about-content">
      <ScrollAnimation animation="slide-up" delay={0.2}>
        <div className="about-section">
          <h2>Our Heritage</h2>
          <p>Founded in 1987 by renowned Chef Pierre Dubois, Le Petit Four has been serving exquisite French cuisine for over three decades. What began as a small family restaurant has evolved into one of the most prestigious dining establishments, while still maintaining the warmth and intimacy of its humble beginnings.</p>
          <p>Our name, "Le Petit Four," pays homage to the delicate French confections that represent the precision and artistry we bring to every dish we serve.</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation="slide-up" delay={0.4}>
        <div className="about-section">
          <h2>Our Philosophy</h2>
          <p>At Le Petit Four, we believe that dining is not merely about sustenance—it's an experience that engages all the senses. We are committed to preserving traditional French culinary techniques while embracing innovation and contemporary influences.</p>
          <p>Every ingredient is thoughtfully sourced, every dish meticulously prepared, and every plate artfully presented to create a symphony of flavors that honor our French heritage.</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation="slide-up" delay={0.6}>
        <div className="about-section">
          <h2>Our Team</h2>
          <p>Led by Executive Chef Sophie Martin, our culinary team consists of passionate professionals who have trained in some of the finest kitchens across France. Together, they bring creativity, expertise, and dedication to the Le Petit Four kitchen.</p>
          <p>Our service staff, under the guidance of Maître d' Jean-Luc Benoit, is committed to providing attentive, personalized service that makes every guest feel special and valued.</p>
        </div>
      </ScrollAnimation>
    </div>
  </div>
);

const Contact = () => (
  <div className="page-container contact-page">
    <ScrollAnimation animation="fade">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>
    </ScrollAnimation>
    <div className="contact-content">
      <ScrollAnimation animation="slide-right" delay={0.2}>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Address</h3>
            <p>123 Gourmet Avenue</p>
            <p>Paris, France 75001</p>
          </div>
          <div className="contact-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 11am - 11pm</p>
            <p>Saturday - Sunday: 10am - 12am</p>
          </div>
          <div className="contact-item">
            <h3>Contact</h3>
            <p>Phone: +33 1 23 45 67 89</p>
            <p>Email: info@lepetitfour.com</p>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation="slide-left" delay={0.4}>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input type="text" id="contact-name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input type="email" id="contact-email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input type="text" id="contact-subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </ScrollAnimation>
    </div>
  </div>
);

export default App;
