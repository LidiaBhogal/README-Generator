const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
const license = ['Apache 2.0 License','Boost Software License 1.0','The MIT License','Attribution 4.0 International','GNU GPL v3']




// array of questions for user
function promptUser() {
    return inquirer.prompt(



        [
            {
                type: 'input',
                message: 'What do you want the title to be?'
                ,
                name: 'title'


            },

            {
                type: 'input',
                message: 'Describe what this project is about',
                name: 'description',


            },

            {
                type: 'checkbox',
                message: 'What is in your table of contents',
                name: 'table',
                choices:
                    ['Installation',
                        'Usage',
                        'License',
                        'Contributing',
                        'Tests',
                        'Questions']




            },
            {
                type: 'input',
                message: 'To install necessary dependencies, run the following command: npm install',
                name: 'installation',


            },
            {
                type: 'input',
                message: 'You can use this applicaiton by running',
                // node index.js
                name: 'usage',


            },
            {
                type: 'checkbox',
                message: 'What license do you want',
                name: 'licenses',
                choices:
                    ['Apache 2.0 License',
                        'Boost Software License 1.0',
                        'The MIT License',
                        'Eclipse Public License 1.0 International',
                        'GNU GPL v3']

            },
            {
                type: 'input',
                message: 'Who has contribute to this project',
                name: 'contributing',

            },

            {
                type: 'input',
                message: 'To run tests, run the following command:',
                // npm test

                name: 'tests',


            },

            {
                type: 'input',
                message: 'If you habe any questions about the repo , contact me on Github link: ',
                name: 'questions',


            },
        ])
};
promptUser().then((data) => {
    fs.writeFileSync('README.md', generateMarkdown(data))
    console.log(data);

}
)


