// function to add license pictures



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
