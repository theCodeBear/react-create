#!/Users/tkrone/.nvm/versions/v4.2.3/bin/node

// A script for creating React component templates from the command line
// Pattern:
//      reactCreate nameOfComponent es5/es6/func <list of component dependencies>

import fs from 'fs';
if (process.argv.length < 4) {
  console.error('Not enough arguments');
  process.exit(1);
}

let componentName = process.argv[2];
let type = process.argv[3];
let components = process.argv.slice(4);


function decapitalize(componentName) {
  const lowercase = componentName[0].toLowerCase();
  return `${lowercase}${componentName.slice(1)}`;
}


if (type === 'es5') {
console.error('Does not currently support es5 syntax');

} else if (type === 'es6') {

  fs.appendFile(`${decapitalize(componentName)}.jsx`,
`'use strict';
import React from 'react';
import {render} from 'react-dom';
${components.map(name => `import ${name} from './${decapitalize(name)}.jsx';`).join('\n')}

class ${componentName} extends React.Component {
  render() {
    return (

    );
  }
}

export default ${componentName};`
  );

} else if (type === 'func') {

`'use strict';
import React from 'react';
import {render} from 'react-dom';
${components.map(name => `import ${name} from './${decapitalize(name)}.jsx';`).join('\n')}

let ${componentName} = (props) => (

);

export default ${componentName};`

}
