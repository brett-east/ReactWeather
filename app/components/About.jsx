var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a small React application that utilises the <a href="http://openweathermap.org/">OpenWeatherMap API</a>.</p>
      <p>It's built following the steps in <a href="https://www.udemy.com/the-complete-react-web-app-developer-course">The complete react web application developer course</a> by Andrew Mead on <a href="http://udemy.com">Udemy.com</a>.</p>
      <p>This app uses react, webpack, foundation and a number of other node packages, and is hosted using heroku.</p>
    </div>
  );
};

module.exports = About;
