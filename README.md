
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="base.css">
</head>
<body>
<header>
  <div class="logo">DINE</div>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<section id="home" class="hero">
  <h1>Welcome to DINE</h1>
  <p>Experience the taste of the world at your table</p>
  <button onclick="scrollToMenu()">Explore Menu</button>
</section>
<section id="about" class="about">
  <h2>About Us</h2>
     <p>DINE is a premium restaurant offering a blend of local and international cuisines. Our focus is on quality, taste, and service.</p>
  <img src="https://i.pinimg.com/originals/8a/9f/ad/8a9fad67de73e882fb818de0678cb4a9.png" alt="Restaurant Interior" class="about-img">
</section>

<section id="menu" class="menu">
  <h2>Our Menu</h2>
  <div class="menu-items">
    <div class="menu-item">
      <img src="https://th.bing.com/th/id/OIP.QY4c5btvJlNFEL093lIdqAHaE8?w=279&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Bangladeshi Platter">
   <h3>Bangladeshi Platter</h3>
      <p>Rice, Curry, Fish, Salad</p>
    </div>
    <div class="menu-item">
      <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="Bangladeshi Thali">
   <h3>Bangladeshi Thali</h3>
      <p>Rice, Dal, Vegetable Curry, Papad</p>
    </div>
    <div class="menu-item">
      <img src="https://th.bing.com/th/id/OSK.88779e2f07ad2004d138841d05fa6f2c?w=200&h=126&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1" alt="Italian Pizza">
      <h3>Italian Pizza</h3>
      <p>Classic Margherita Pizza with fresh ingredients</p>
    </div>
    <div class="menu-item">
      <img src="https://th.bing.com/th/id/OIP.YNoPg_OQ6pE7dMPBP62sSgHaE8?w=248&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Japanese Sushi">
      <h3>Japanese Sushi</h3>
      <p>Fresh salmon sushi rolls</p>
    </div>
  </div>
</section>
<section id="gallery" class="gallery">
  <h2>Gallery</h2>
  <div class="gallery-items">
    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="Dish 1">
    <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90" alt="Dish 2">
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Dish 3">
    <img src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9" alt="Dish 4">
  </div>
</section>

<section id="contact" class="contact">
  <h2>Contact Us</h2>
  <form>
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

<footer>
  <p>&copy; 2025 DINE Restaurant. All rights reserved.</p>
</footer>

<script src="base.js"></script>
</body>
</html>
