import React from 'react'
import Header from '../Header'
import Logo from '../Logo'
import Footer from '../Footer'
import Buttons from '../Buttons'
import Articles from '../Aricles'
import Tutorials from '../Tutorials'
import Subscribe from '../Subscribe'

function HomePage(){
    return (
        <div>
            <nav> <Header /> </nav>
            <br />

            <Logo />
            <br />

            <h1>Featured Articles</h1>

            <Articles />

            <br />
           <Buttons 
           type = 'submit'
           text = 'See all Articles'
           />

            <h1>Featured Tutorials</h1>

            <Tutorials />

            <br />
            <Buttons
                type = 'submit'
                text = 'See all Tutorials'
            />

            <br></br>

            <Subscribe />
            
            <Footer />
        </div>
    );
}

export default HomePage;