import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="menu-btn">
        <i class="fas fa-bars fa-2x"></i>
      </div>

      <div class="container">
        {/* <!-- Nav --> */}
        <nav class="main-nav">
          <img
            src="https://platformproperty.co.uk/wp-content/themes/platform-property/images/logo.png"
            alt="Platform-Property"
            class="logo"
          />

          <ul class="main-menu">
            <li>
              <Link href='/property-search' as='/property-search'>
                <a>property search</a>
              </Link>
            </li>
            <li>
              <a href="#">sell my house</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">platform partners</a>
            </li>
            <li>
              <a href="#">testimonials</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>

          <ul class="right-menu">
            <li>
              <a href="#">
                <i class="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- Showcase --> */}
        <header class="showcase">
          <div>
            <h2>
              Platform Property are a Full Service Estate Agency covering the
              Kent & Surrey areas
            </h2>
            <p>
              We offer unbeatable customer service, fantastic property
              presentation, extensive market coverage and highly competitive
              fees.
            </p>
            <a href="#" class="btn">
              Book Valuation<i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </header>
        <h1>About Us</h1>
        {/* <!-- Home cards 1 --> */}
        <section class="home-cards">
          <div>
            <img src="https://i.ibb.co/LZPVKq9/card1.png" alt="" />
            <h3>New Surface Pro 7</h3>
            <p>
              See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro
              7 to put her plans into play.
            </p>
            <a href="#">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/KjGFHVJ/card2.png" alt="" />
            <h3>New Surface Laptop 3</h3>
            <p>
              Express yourself powerfully with a thin, light, and elegant
              design, faster performance, and up to 11.5 hours battery life.
            </p>
            <a href="#">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/2cnshH6/card3.png" alt="" />
            <h3>Save $150 + free controller</h3>
            <p>
              Buy an Xbox One X console and double your fun with a free select
              extra controller. Starting at $349.
            </p>
            <a href="#">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          {/* <div>
            <img src="https://i.ibb.co/G57P0Pb/card4.png" alt="" />
            <h3>The new Microsoft Edge</h3>
            <p>
              Expect more. World class performance, with more privacy, more
              productivity, and more value.
            </p>
            <a href="#">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div> */}
        </section>

        {/* <!-- Xbox --> */}
        <section class="xbox">
          <div class="content">
            <h2>Xbox Game Pass Ultimate</h2>
            <p>
              Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality
              console and PC games. Play together with friends and discover your
              next favorite game.
            </p>
            <a href="#" class="btn">
              Join Now <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </section>

        {/* <!-- Home cards 2 --> */}
        <section class="home-cards">
          <div>
            <img src="https://i.ibb.co/zVqhWn2/card5.png" alt="" />
            <h3>Microsoft Teams</h3>
            <p>Unleash the power of your team.</p>
            <a href="#">
              Shop Now <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/mGZcxcn/card6.jpg" alt="" />
            <h3>Unlock the power of learning</h3>
            <p>
              Get students future-ready with Windows 10 devices. Starting at
              $219.
            </p>
            <a href="#">
              Shop Now <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/NpPvVHj/card7.png" alt="" />
            <h3>Windows 10 Enterprise</h3>
            <p>Download the free 90-day evaluation for IT professionals.</p>
            <a href="#">
              Download Now <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/LkP4L5T/card8.png" alt="" />
            <h3>Explore Kubernetes</h3>
            <p>
              Learn how Kubernetes works and get started with cloud native app
              development today.
            </p>
            <a href="#">
              Get Started <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </section>

        {/* <!-- Carbon --> */}
        <section class="carbon dark">
          <div class="content">
            <h2>Commiting To Carbon Negative</h2>
            <p>
              Microsoft will be carbon negative by 2030 and by 2050 we will
              remove all carbon the company has emitted since it was founded in
              1975
            </p>
            <a href="#" class="btn">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </section>

        {/* <!-- Follow --> */}
        <section class="follow">
          <p>Follow Microsoft</p>
          <a href="https://facebook.com">
            <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <img
              src="https://i.ibb.co/vJvbLwm/social-twitter.png"
              alt="Twitter"
            />
          </a>
          <a href="https://linkedin.com">
            <img
              src="https://i.ibb.co/b30HMhR/social-linkedin.png"
              alt="Linkedin"
            />
          </a>
        </section>
      </div>
      {/* <!-- Links --> */}

      {/* <!-- Footer --> */}
      <footer class="footer">
        <div class="footer-inner">
          <div>
            <i class="fas fa-globe fa-2x"></i> English (United States)
          </div>
          <ul>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Contact Microsoft</a>
            </li>
            <li>
              <a href="#">Privacy & cookies</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Trademarks</a>
            </li>
            <li>
              <a href="#">Safety & eco</a>
            </li>
            <li>
              <a href="#">About our ads</a>
            </li>
            <li>
              <a href="#">&copy; Microsoft 2020</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
