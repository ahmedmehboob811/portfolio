export default function Home() {
  return (
    <>
      <div className="Header">
        <a href="#" className="logo">
          Web Dev
        </a>
        <nav className="navbar">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Hero</a>
        </nav>
      </div>
      <section className="home">
        <div className="home-content">
          <h1>Hi,I amm Mehboob Ahmed</h1>
          <h3>Next.Js Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            consectetur veritatis voluptatem, sint odit explicabo molestiae
            laborum unde, aliquam sit debitis libero neque itaque dicta quis ad
            consequatur, ratione quos.
          </p>
          <div className="btn-box">
            <a href="#">Hire Me</a>
            <a href="#">Lets Talk</a>
          </div>
        </div>
      </section>
 

<section id="about" className="about-section">
  <div className="container">
    <h2 className="section-title">About Me</h2>
    <div className="about-content">
     
      <div className="about-text">
        <p>Hi, I am <strong>[Mehboob Ahmed]</strong>, a passionate Next.js developer with a strong desire to build fast, scalable, and secure web applications.</p>
        <p>As a fresh talent in the market, I have already gained valuable experience in developing various projects, including:</p>
        <ul>
          <li><strong>Personal Portfolio</strong>: A Next.js portfolio showcasing my skills and experience.</li>
          <li><strong>E-commerce Website</strong>: A fully functional e-commerce website built with Next.js, React, and Stripe.</li>
          <li><strong>Blog Website</strong>: A blog website built with Next.js, Markdown, and Tailwind CSS.</li>
        </ul>
        <p>I specialize in:</p>
        <ul>
          <li>Next.js development</li>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>CSS/SCSS</li>
          <li>HTML5</li>
          <li>Responsive web design</li>
          <li>Version control (Git)</li>
        </ul>
        <p>Feel free to explore my portfolio and get in touch with me to discuss potential projects or collaborations!</p>
      </div>
    </div>
    <div className="social-links">
      <a href="(link unavailable)" target="_blank">GitHub</a>
      <a href="(link unavailable)" target="_blank">LinkedIn</a>
      <a href="mailto:[your-email-address]" target="_blank">Email</a>
    </div>
  </div>
</section>


<section id="services" className="services-section">
  <div className="container">
    <h2 className="section-title2">Services</h2>
    <div className="services-content">
      <div className="service-card">
        <h3 className="service-title">Next.js Development</h3>
        <p className="service-description">Build fast, scalable, and secure web applications with Next.js.</p>
        <ul className="service-features">
          <li>Custom Next.js solutions</li>
          <li>Server-side rendering (SSR)</li>
          <li>Static site generation (SSG)</li>
          <li>API integration</li>
        </ul>
      </div>
      
      <div className="service-card">
        <h3 className="service-title">React.js Development</h3>
        <p className="service-description">Build dynamic and interactive user interfaces with React.js.</p>
        <ul className="service-features">
          <li>Custom React components</li>
          <li>State management (Redux, MobX)</li>
          <li>React Hooks</li>
          <li>Integration with Next.js</li>
        </ul>
      </div>
      
      <div className="service-card">
        <h3 className="service-title">Front-end Development</h3>
        <p className="service-description">Craft visually appealing and responsive web applications.</p>
        <ul className="service-features">
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Responsive web design (RWD)</li>
          <li>CSS frameworks (Tailwind CSS, Bootstrap)</li>
          <li>UI/UX design</li>
        </ul>
      </div>
      
      <div className="service-card">
        <h3 className="service-title">Back-end Development</h3>
        <p className="service-description">Build robust and scalable back-end solutions.</p>
        <ul className="service-features">
          <li>Node.js, Express.js</li>
          <li>RESTful API design</li>
          <li>Database integration (MongoDB, PostgreSQL)</li>
          <li>Authentication and authorization</li>
        </ul>
      </div>
      
      <div className="service-card">
        <h3 className="service-title">Web Optimization</h3>
        <p className="service-description">Improve website performance and search engine ranking.</p>
        <ul className="service-features">
          <li>SEO optimization</li>
          <li>Page speed optimization</li>
          <li>Accessibility auditing</li>
          <li>Browser compatibility testing</li>
        </ul>
      </div>
    </div>
  </div>
</section>



    </>
  );
}
