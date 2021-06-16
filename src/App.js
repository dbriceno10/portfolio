import React, { Component } from 'react';
import Header from "./components/header/Header"
// import About from './components/about/about';
// import Resume from './components/resume/resume';
// import Portfolio from './components/portfolio/portfolio';
// import Testimonials from  './components/testimonials/testimonials';
// import ContactUs from './components/contactus/contactus';
// import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer /> */}
      </div>
    );
  }
}
export default App;





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
