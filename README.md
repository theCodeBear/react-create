<h2>Setup:</h2><br>
    1. Have babel installed globally<br>
    2. babel react-create-es6.js -o reactCreate --presets babel-preset-es2015<br>
    3. chmod 744 reactCreate<br>
    4. Go in your ~/.bash_profile file and create the following line<br>
        export PATH=path/to/reactCreate/directory:$PATH<br>
        i.e.      export PATH=~/Documents/Programs/scripts/reactcreate:$PATH<br>
    5. Now user reactcreate from anywhere on the terminal<br>

<h2>Usage:</h2><br>
    reactCreate nameOfComponent es5/es6/func <list of component dependencies><br>



Example 1:
    reactCreate statusBar func menuItem

The example above will create a file that looks like this:

    import React from 'react';
    import {render} from 'react-dom';
    import MenuItem from './menuItem.jsx';

    let StatusBar = (props) => (

    );

    export default StatusBar;



Example 2:
    reactCreate statusBar es5 menuItem

The example above will create a file that looks like this:

    var React = require('react');
    var render = require('react-dom').render;  ????
    var MenuItem = require('./menuItem.jsx');

    var StatusBar = React.createClass({
      render: function() {
        return (

        );
      }
    });

    module.exports = StatusBar;


Example 3:
    reactCreate statusBar func menuItem

The example above will create a file that looks like this:

    import React from 'react';
    import {render} from 'react-dom';
    import MenuItem from './menuItem.jsx';

    class StatusBar extends React.Component {
      render() {
        return (

        );
      }
    }

    export default StatusBar;



