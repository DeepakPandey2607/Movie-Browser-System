
import Hero from './Hero';

const AboutView = () => {
    return(
      <>
      <Hero text="ABOUT US...."/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <pre className="lead">
              Hi im Bhumika the creater of this page.Thankyou for visiting my page.
              <br/>
              Here you can find more deatails about us .
              <br/>
              <br/>
              If you want to generate a website for your business you can contact us.
              <br/>
              <br/>

              <h4>Contact: 9058060713</h4>

              <h4>EMAIL: bhumi1nonly@gmai.com</h4>
            </pre>
          </div>
        </div>
      </div>
      </>
    );
  }

  export default AboutView;