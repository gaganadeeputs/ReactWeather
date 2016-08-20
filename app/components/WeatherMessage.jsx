var React=require('react');

// var WeatherMessage= React.createClass({
// render: function() {
//    var {temp, location}=this.props;
//    return(
//      <p>Its {temp} in {location}</p>
//    );
// }
// });

var WeatherMessage=(props)=>{
  var {temp, location}=props;
  return(
    <p>Its {temp} in {location}</p>
  );
}

module.exports = WeatherMessage;
