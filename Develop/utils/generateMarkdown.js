// function to generate markdown for README
function generateMarkdown(data) {
  let tableOfContents = "";
  if (data.tableContents){
    tableOfContents = `
## Table of Contents
  * [Description](#description)
  * [Installation](#intallation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
    `
  }

  return `
  # ${data.projectTitle}

  ${tableOfContents}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

`
}

module.exports = generateMarkdown;
