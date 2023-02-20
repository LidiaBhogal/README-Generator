

// Create a function that returns the license link 
// If there is no license, return an empty string
function getLicense(license) {
  let licenseLink;
  console.log
  // select correct license link for the selected license
  switch (license) {
    case "Apache":
      licenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

      break;
    case "Boost":
      licenseLink = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

      break;
    case "MIT":
      licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

      break;
    case "Eclipse":
      licenseLink = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";

      break;
    case "GNU GPL v3":
      licenseLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

      break;
    default:
      licenseLink = "";
      break;
  }

  return licenseLink;
}

function generateMarkdown(data) {
  return `


# ReadMe Generator


  ${getLicense(data.licenses[0])}


  ${data.title} 


# Description

  ${data.description}



# Table

 ${data.table}


[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#licenses)

[Contributing](#contributing)

[Tests](#ests)

[Questions](#questions)


# Installation

 ${data.installation}


# Usage 

${data.usage}


# Licenses 

${getLicense(data.licenses[0])}


# Contributing 

${data.contributing}


# Tests 

${data.tests}


# Questions 

If you habe any questions about the repo , contact me on Github link:${data.questions}  or email me ${'lydiapriano@yahoo.co.uk'}  

`;
}

module.exports = generateMarkdown;
