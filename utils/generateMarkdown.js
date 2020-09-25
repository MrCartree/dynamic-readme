const licenseLookUp = {
  gpl: {
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    name: "GNU public license"
  },
  mit: {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    name: "The MIT License"
  },
  moz: {
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    name: "Mozilla Public License 2.0"
}
}

// function to generate markdown for README
function generateMarkdown(data) {
  let tableOfContents = "";
  if (data.tableContents){
    tableOfContents = `
## Table of Contents
  * [Installation](#intallation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    `
  }

  return `
  ${licenseLookUp[data.license].badge}

  # ${data.projectTitle}
  ${data.description}

  ${tableOfContents}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  This project is covered by: ${licenseLookUp[data.license].name}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions
  For additional questions feel free to contact me at: ${data.email}
 [Check out my other works on GitHub](https://github.com/${data.gitHub})
`
}

module.exports = generateMarkdown;
