import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
//import Header from "./components/header/Header"
import Layout from "./components/layout"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Resume from "./components/resume/Resume"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from  "./components/testimonials/Testimonials"
import Contactus from "./components/contactus/Contactus"
import Footer from "./components/footer/Footer"
import "./global.css"

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/contact" component={Contactus} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Hero />
//         <About />
//         <Resume />
//         <Portfolio />
//         <Testimonials />
//         <ContactUs />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
