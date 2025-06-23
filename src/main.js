document.querySelector('#app').innerHTML = `
  <header class="banner">
    <img src="/assets/philly-placeholder1.jpg" alt="Philadelphia Skyline Banner" class="banner-img" />
  </header>
  <main class="landing-page">
    <section class="hero">
      <div class="hero-content">
        <h1>Jerrehian Law</h1>
        <p class="tagline">Dedicated defense when it matters most.</p>
        <div class="contact-info">
          <p><strong>Phone:</strong> <a href="tel:2672172163">267-217-2163</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@jerrehianlaw.com">info@jerrehianlaw.com</a></p>
          <p><strong>Office:</strong> 1515 Market Street, Suite 1200, Philadelphia, PA 19102</p>
        </div>
      </div>
    </section>
    <section class="bio-section">
      <div class="bio-photo">
        <img src="/assets/lawyer-placeholder.jpg" alt="Lawyer Photo Placeholder" />
      </div>
      <div class="bio-content">
        <h2>Whatever situation you or your loved one is in, your choice of attorney is essential.</h2>
        <p>Born and raised in Philadelphia, Matt Jerrehian built his legal career in the same courtrooms where he continues to defend his clients. A graduate of Penn Law, Matt began as a Public Defender, representing countless clients facing serious criminal charges.</p>
        <p>Matt founded Jerrehian Law to offer his clients something deeply personal: a dedicated defense from start to finish. He brings trial-tested experience, deep knowledge of local practice, and a strong sense of justice to every case.</p>
        <p>Matt believes every person deserves to be treated with dignity and fought for with skill. At Jerrehian Law, you get a lawyer who listens, prepares, and shows up for you — every time.</p>
      </div>
    </section>
    <section class="contact-section">
      <div class="contact-form-section">
        <h2>Free Consultation</h2>
        <form class="contact-form">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label for="message">How can we help?</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Request Consultation</button>
        </form>
      </div>
      <div class="contact-image">
        <img src="/assets/philly-placeholder2.jpg" alt="Philadelphia" />
      </div>
    </section>
  </main>
`;