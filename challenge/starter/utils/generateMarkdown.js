// function to add license pictures

// function licensePic(license) {
//   let badge = "";

//   if(license != "None") {
//     badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
//   }

//   return badge;
// }

// Create a function that returns the license link
// If there is no license, return an empty string
function getLicense(license) {
  let licenseLink;
  let badge = "";
  // select correct license link for the selected license
  switch(license) {
    case "Apache":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
      break;
    case "Boost":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      badge = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
      break;
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      badge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
      break;
    case "Eclipse":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      badge = 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
      break;
      case "GNU GPL v3":
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
        badge = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
        break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink + badge;
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

getLicensepic();

#Contributing 

${data.contributing}

#Tests 

${data.tests}

#Questions 

${data.questions} 

`;
}

module.exports = generateMarkdown;
