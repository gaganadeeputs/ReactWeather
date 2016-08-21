var React=require('react');
var {Link}=require('react-router');

var Examples= React.createClass({
render: function() {
   return(
     <div>
           <h1 className="text-center">Examples!</h1>
           <p>Here are a few example location to try out</p>
           <ol>
             <li>
               <Link to='/?location=bangalore'>Bangalore,BGL</Link>
             </li>
             <li>
               <Link to='/?location=Mysure'>Mysure,MSR</Link>
             </li>
           </ol>
     </div>

   );
}
});

module.exports = Examples;
