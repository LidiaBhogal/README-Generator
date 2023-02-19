// function to add license pictures


function licensePic(license) {
  let badge = "";

  if (license === "Apache") {
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (license === 'Boost') {
    return 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
  } else if (license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (license === 'Eclispe') {
    return 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
  } else if (license === 'GNU GPL v3') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  } else
    console.log('error')

  return badge;

}

// Create a function that returns the license link and badge
// If there is no license, return an empty string
function getLicense(license) {
  let licenseLink;

  // select correct license link for the selected license
  switch (license) {
    case "Apache":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";

      break;
    case "Boost":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";

      break;
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";

      break;
    case "Eclipse":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";

      break;
    case "GNU GPL v3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";

      break;
    default:
      licenseLink = "";
      break;
  }

  return licenseLink;
}

// function to generate markdown for README


function generateMarkdown(data) {
  return `#Title 

  ${data.title} 

#Description

  ${data.description}

#Table

 ${data.table}

#Installation

 ${data.installation}

#Usage 

${data.usage}

#Licenses 

${data.licenses}



#Contributing 

${data.contributing}

#Tests 

${data.tests}

#Questions 

If you habe any questions about the repo , contact me on Github link:${data.questions}  or email me ${data.email}  

`;
}

module.exports = generateMarkdown;
