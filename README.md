<h2>Setup:</h2><br>
    1. Have babel installed globally<br>
    2. babel react-create-es6.js -o reactCreate --presets babel-preset-es2015<br>
    3. chmod 744 reactCreate<br>
    4. Go in your ~/.bash_profile file and create the following line<br>
        export PATH=path/to/reactCreate/directory:$PATH<br>
        i.e.      export PATH=~/Documents/Programs/scripts/reactcreate:$PATH<br>
    5. Now use reactCreate from anywhere on the command line<br>

<h2>Usage:</h2><br>
Each time the reactCreate command is run it will create a new component in the current working directory. This tool assumes that CSS modules are being used to handle the styling in React, so it creates a directory for the component, and inside that directory it puts a CSS file and a JSX file. The CSS file is imported in the JSX file. The CSS file will be empty while the JSX file will be initialized as shown below.

<br>

<h4> Syntax: reactCreate nameOfComponent es5/es6/func [list of component dependencies]</h4>
i.e: reactCreate Login es6 Submit MyForm<br>
i.e: reactCreate Login es6<br><br>



<h3>Example 1:</h3>
<em>reactCreate StatusBar func MenuItem</em>

This example will create a JSX file that looks like this:

    import React from 'react';
    import {render} from 'react-dom';
    import styles from './statusBar.css';
    import MenuItem from '../menuItem/menuItem.jsx';

    let StatusBar = (props) => (

    );

    export default StatusBar;



<h3>Example 2:</h3>
<em>reactCreate StatusBar es5 MenuItem</em>

NOTE: The es5 command currently isn't completed in this tool.<br>
This example will create a JSX file that looks like this:

    var React = require('react');
    var render = require('react-dom').render;  ????
    var styles = require('./statusBar.css');
    var MenuItem = require('../menuItem/menuItem.jsx');

    var StatusBar = React.createClass({
      render: function() {
        return (

        );
      }
    });

    module.exports = StatusBar;


<h3>Example 3:</h3>
<em>reactCreate StatusBar es6 MenuItem</em>

The example above will create a file that looks like this:

    import React from 'react';
    import {render} from 'react-dom';
    import styles from './statusBar.css';
    import MenuItem from '../menuItem/menuItem.jsx';

    class StatusBar extends React.Component {
      render() {
        return (

        );
      }
    }

    export default StatusBar;



