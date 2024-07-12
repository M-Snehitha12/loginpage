import react from 'react';
import './home.css';
class Home extends react.Component
{
    render(){
        return(
            <div>
                <nav>
                <div class="logo">
                    Beauty and Cosmetics
                </div>
                <ul class="nav-links">
                    <li><a href="#">
                    Contact</a>
                </li>
                </ul>
            </nav>
    <section class="about">
        <h1>About Us</h1>
        <div class="about-info">
            <div class="about-img">
                <img src="https://www.logodee.com/wp-content/uploads/2021/12/61.jpg"></img>
            </div>
            <div>
            <p> Elegance is the only beauty that never fades.
                Beauty shows a person real glow and shine.
                People expect beauty to help them physically 
                express their unique choices and personality. 
                Now more than ever, the quest for beauty is about freedom. 
                Every beauty gesture is an act of activism: for freedom, self-confidence,
                health, diversity and inclusion, and the planet.
            </p>     
        </div>
    </div>
    </section>
    <footer>
        <p>&copy;Beauty and Cosmetics All Rights Reserved.</p>
    </footer>
       </div> 
    );
  }
}
export default Home;

