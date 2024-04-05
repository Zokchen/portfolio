import logo from "./logo.svg";
import "./App.css";
import "./rock.css";
import demo from "./demo.jpg";
import crjr from "./crjr.png";
import mateo from "./mateo.png";
import eva from "./eva.png";
import alana from "./alana.png";
import mother from "./mother.png";
import ballondor from "./ballondor.png";
import men from "./men.png";
import menbest from "./menbest.png";
import european1 from "./european 1.png";
import champions1 from "./champions 1.png";
import any1 from "./AnyConv 1 (1).png";
import crstats from "./cr stats.jpg";
import ac11 from "./ac1 1.png";
import ac41 from "./ac4 1.png";
import ac3 from "./ac3.jpg";
import ac21 from "./ac2 1.png";
import real1 from "./real 1.png";
import united2 from "./united 2.png";
import juve1 from "./juve 1.png";

function App() {
  return (
    <div className="App">
      <head>
        {/* Meta tags and CSS links */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        {/* You might need to import your CSS file */}
        <link rel="stylesheet" href=".css" />
      </head>
      <body>
        <header>
          <div class="HeroBanner">
            <div>
              <h1>Cristiano Ronaldo</h1>
              <h1>Dos Santos</h1>
              <h1>Aveiro</h1>
              <p>
                This website is dedicated to the one and only GOAT of football!!
              </p>
            </div>
            <div>
              <img class="first-image" src={demo} />
            </div>
          </div>
        </header>

        <section className="intro-family">
          <div class="family-members">
            <br />
            <br />
            <h2>His Family</h2>
            <p>Meet his family of 4</p>

            <div class="cards">
              <div class="card-1">
                <img class="card-images" src={crjr} />
                <h3>Cristiano Ronaldo Jr.</h3>
                <p>
                  Born June 17, 2010, Cristiano Jr. is named after his soccer
                  star dad. Ronaldo has never disclosed the identity of his
                  firstborn's mother, telling Jonathan Ross in 2015, "Some
                  points in life are private and people have to respect the
                  privacy.{" "}
                </p>
              </div>

              <div class="card-1">
                <img class="card-images" src={eva} />
                <h3>Eva Maria</h3>
                <p>
                  In June 2017, Ronaldo welcomed twins Eva and Mateo via
                  surrogate, sharing the happy news of their arrival in a
                  Facebook post captioned, "So happy to be able to hold the two
                  new loves of my life 🙏❤."{" "}
                </p>
              </div>

              <div class="card-1">
                <img class="card-images" src={mateo} />
                <h3>Mateo Ronaldo</h3>
                <p>
                  Mateo Ronaldo, born June 17, 2010, is Cristiano Jr.'s brother.
                  Like his dad, his mother's identity remains undisclosed.
                  Months before the twins' arrival, Ronaldo began dating model
                  Georgina Rodriguez.{" "}
                </p>
              </div>

              <div class="card-1">
                <img class="card-images" src={alana} />
                <h3>Alana Martina</h3>
                <p>
                  Weeks after the arrival of twins Eva and Mateo, in July 2017,
                  Ronaldo announced that he and girlfriend Rodriguez were
                  expecting. The pair welcomed their first baby Alana Martina
                  together, Ronaldo's fourth, on Nov. 12, 2017.
                </p>
              </div>
            </div>

            <div class="mother-info">
              <div class="mother-image-class">
                <img class="mother-img" src={mother} />
              </div>

              <div class="mother-details">
                <h2 style={{ width: "28rem" }}>
                  Maria Dolores dos Santos Viveiros da Aveiro
                </h2>

                <ul class="links-mother">
                  <li>
                    <a href="">Her Facebook</a>
                  </li>
                  <li>
                    <a href="">Her Twitter</a>
                  </li>
                  <li>
                    <a href="">Her Instagram</a>
                  </li>
                </ul>
                <p class="mother-desc">
                  Cristiano Ronaldo's mother, Maria Dolores dos Santos Aveiro,
                  is an influential figure in his life. She's known for her
                  unwavering support and guidance throughout his career, often
                  seen cheering him on from the sidelines. Her strong bond with
                  Ronaldo is evident, reflecting a close-knit family dynamic.
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
        </section>

        <section className="acheivement-section">
          <div class="acheivement">
            <br />
            <h2>All of GOAT's Achievements</h2>
            <div class="achievement-cards">
              <div class="achievement-cards-1">
                <div>
                  <img class="achievement-card-images" src={ballondor} />
                  <h3>5X WINNER BALLON D'OR</h3>

                  <p>
                    2017
                    <br />
                    2016
                    <br />
                    2014
                    <br />
                    2013
                    <br />
                    2008
                  </p>
                </div>

                <div>
                  <img class="achievement-card-images" src={men} />
                  <h3>3X THE BEST FIFA MEN'S PLAYER</h3>
                  <p>
                    2017 Real Madrid Real Madrid
                    <br />
                    2016 Real Madrid Real Madrid
                    <br />
                    2008 Manchester United Manchester United
                  </p>
                </div>

                <div>
                  <img class="achievement-card-images" src={menbest} />
                  <h3>4X UEFA BEST PLAYER IN EUROPE</h3>
                  <p>
                    2017 Real Madrid Real Madrid
                    <br />
                    2016 Real Madrid Real Madrid
                    <br />
                    2014 Real Madrid Real Madrid
                    <br />
                    2008 Manchester United Manchester United
                  </p>
                </div>
              </div>

              <div class="achievement-cards-1">
                <div>
                  <img class="achievement-card-images" src={european1} />
                  <h3>1X EUROPEAN CHAMPION</h3>
                  <p>2016 Portugal Portugal</p>
                </div>

                <div>
                  <img class="achievement-card-images" src={champions1} />
                  <h3>5X CHAMPIONS LEAGUE WINNER</h3>
                  <p>
                    17/18 Real Madrid Real Madrid
                    <br />
                    16/17 Real Madrid Real Madrid
                    <br />
                    15/16 Real Madrid Real Madrid
                    <br />
                    13/14 Real Madrid Real Madrid
                    <br />
                    07/08 Manchester United Manchester United
                  </p>
                </div>

                <div>
                  <img class="achievement-card-images" src={any1} />
                  <h3>3X ENGLISH CHAMPION</h3>
                  <p>
                    08/09 Manchester United Manchester United
                    <br />
                    07/08 Manchester United Manchester United
                    <br />
                    06/07 Manchester United Manchester United
                  </p>
                </div>
              </div>
            </div>
            <br />
            <button>See more</button>
          </div>
        </section>

        <section className="stats">
          <div class="stats-info">
            <div class="stats-details">
              <br />
              <h2 style={{ width: "21rem" }}>All of GOAT stats</h2>
              <div class="accordion">
                <details>
                  <summary>Height & Weight</summary>
                  <p class="accordion-text">
                    Cristiano Ronaldo's height is approximately 6 feet 2 inches
                    (188 centimeters), and his weight is around 183 pounds (83
                    kilograms).
                  </p>
                </details>

                <details>
                  <summary>Shoe size</summary>
                  <p class="accordion-text">
                    Cristiano Ronaldo's shoe size is reportedly around US size
                    9.5 to 10 (European size 43 to 44).
                  </p>
                </details>

                <details>
                  <summary>Net Worth</summary>
                  <p class="accordion-text">
                    Cristiano Ronaldo's net worth was estimated to be around
                    $500 million USD.
                  </p>
                </details>
              </div>
            </div>

            <div class="stats-image-class">
              <img class="stats-img" src={crstats} />
            </div>
          </div>
        </section>

        <section className="video-gallery-section">
        <div class="video-gallery">
      <div class="video-section">
        <div class="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/62jKF_eCPqc" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/45vzwPefS2g" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <div class="image-section">
        <img class="testimonials-img" src={ac11}/>
        <img class="testimonials-img" src={ac41}/>
        <img class="testimonials-img" src={ac3}/>
        <img class="testimonials-img" src={ac21}/>

      </div>
    </div>
        </section>

        <section className="club-gallery-section">
        <br/>
      <h2>All of the GOAT club</h2>
      <div class="club-gallery">
        <div class="club-cards">
          <div class="club-text">
            <img class="club-card-images" src={real1}/>
            <div class="club-1">
            <h3>Real Madrid</h3>
            <p> Iconic tenure marked by goal-scoring prowess, clinching trophies, and achieving legendary status.</p></div>
          </div>
  
          <div class="club-text">
            <img class="club-card-images" src={united2}/>
            <div class="club-1">
            <h3>Manchester United</h3>
            <p  >Ronaldo flourished, winning titles, before a record-breaking move to Real Madrid.</p></div>
          </div>
  
          <div class="club-text">
            <img class="club-card-images" src={juve1}/>
            <div class="club-1">
            <h3>Juventus</h3>
            <p>Dominated Serie A, showcasing skills and leadership, securing multiple league titles.</p></div>
          </div>
          
        </div>
      </div>
        </section>

        <footer><div class="footer-content">
    <div class="contact-info">
      <h2>CONTACT</h2>
      <address>
        <div>Swoyambhu, Kathmandu</div>
        <div>9813643643</div>
        <div>zokchentamang7@gmail.com</div>
      </address>
    </div>
    <div class="links">
      <div class="link-group">
        <h2>Link Title</h2>
        <ul>
          <li><a href="#">&lt;link&gt;</a></li>
          <li><a href="#">&lt;link&gt;</a></li>
          <li><a href="#">&lt;link&gt;</a></li>
          <li><a href="#">&lt;link&gt;</a></li>
          <li><a href="#">&lt;link&gt;</a></li>
          <li><a href="#">&lt;link&gt;</a></li>
        </ul>
      </div>
      
      
    </div>

    <div class="links">
      <div class="link-group">
        <h2>Link Title</h2>
        <ul>
          <li><a href="#">&lt;link&gt;</a></li>
          <li><a href="#">&lt;link&gt;</a></li>
          <li><a href="#">&lt;link&gt;</a></li>
          <li><a href="#">&lt;link&gt;</a></li>
          <li><a href="#">&lt;link&gt;</a></li>
          <li><a href="#">&lt;link&gt;</a></li>
        </ul>
      </div>
      
      
    </div>
    <div class="link-group">
      <h2>Link Title</h2>
      <p>Lorem ipsum dolor amet consecto adi pisicing elit sed.</p>
      <input placeholder="Email address"/>
      <button>Button</button>
    </div>
  </div></footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
    </div>
  );
}

export default App;
