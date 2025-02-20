
document.querySelector('#app').innerHTML = `
 <header class="navbar">
        <div class="logo"><img src="src/logo.png" alt="camps-logo-pic"></div>
        <nav class="nav-links">
            <a href="#hero-section">Home.</a>
            <span class="dot">•</span>
            <a href="#newsletter-section">Newsletter.</a>
            <!-- <span class="dot">•</span>
            <a href="#">FAQ.</a>
            <span class="dot">•</span>
            <a href="#">Contact Us.</a> -->
        </nav>
        <div class="menu-icon"><img src="src/menuBtn.png" alt="menu-icon@Camps"></div>
    </header>

    <section class="hero-section" id="hero-section">
        <div class="hero-text">
            <h1>DISCOVER.<br>SHARE.<br>ENGAGE.</h1>
            <p>Empower your campus life</p>
            <div class="app-buttons">
                <button class="app-store">
                    <img src="src/appleLogo.png" alt="">
                    <div class="app-store-button-content">
                        <p></p>Available on the <br><strong class="Store-name">App Store</strong>
                    </div>
                </button>
                <button class="app-store">
                    <img id="playstoreLogo" src="src/playstoreLogo.png" alt="">
                    <div class="app-store-button-content">
                        <p></p>Available on the <br><strong class="Store-name">Play Store</strong>
                    </div>
                </button>
            </div>
          
        </div>
        <div class="hero-image">
            <img src="src/graduation-placeholder.png" alt="Graduation Illustration @Camps">
            <p class="footer-text">
                *The images used in the hero section are placeholders and to be revised in final edition
            </p>
        </div>
    </section>
    <section class="newsletter-section" id="newsletter-section">
        <div class="newsletter-content">
            <p class="newsletter-content-p1">We're almost there.</p>
            <p class="newsletter-content-p2"><span>Coming</span>
                <span>Soon.</span></p>
            <p class="newsletter-content-p3">Join our newsletter to be the first to know when Camps launches and receive updates on the latest in technology and AI.</p>
            <form class="newsletter-form">
                <label for="email">Email*</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
                <div class="checkbox-container">
                    <input type="checkbox" id="subscribe-checkbox" name="subscribe">
                    <label for="subscribe-checkbox">Yes, subscribe me to your newsletter.</label>
                </div>
                <button type="submit" class="subscribe-button">Sign Up</button>
            </form>
        </div>
    </section>
    <footer class="footer">
        <p>Copyright © 2025 by<strong>&nbsp;Camps.</strong>&nbsp;&nbsp;All rights reserved. <span class="country">India</span></p>
    </footer>
`

