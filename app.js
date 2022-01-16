const inquirer = require('inquirer')
const generatePage = require('./src/page-template.js')
const writeFile = require('./utils/generateFile.js')

const promptSections = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your document?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!')
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project (required)',
            validate: userDescription => {
                if (userDescription) {
                    return true;
                } else {
                    console.log('Please describe your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Please enter a list of your table of contents, with each item separated by a comma',
            validate: userTableOfContents => {
                if (userTableOfContents) {
                    return true;
                } else {
                    console.log('Please provide input for your table of contents!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions',
            validate: userInstallation => {
                if (userInstallation) {
                    return true;
                } else {
                    console.log('Please provide installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please provide license information',
            validate: userLicense => {
                if (userLicense) {
                    return true;
                } else {
                    console.log('Please provide license information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage instructions',
            validate: userUsage => {
                if (userUsage) {
                    return true;
                } else {
                    console.log('Please provide usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter a list of contributors to this project',
            validate: userContributors => {
                if (userContributors) {
                    return true;
                } else {
                    console.log('Please provide a list of contributors!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address',
            validate: userEmail => {
                if (userEmail) {
                    return true;
                } else {
                    console.log('Please provide your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter a link to your GitHub',
            validate: userGit => {
                if (userGit) {
                    return true;
                } else {
                    console.log('Please provide a link to your GitHub!');
                    return false;
                }
            }
        },
    ])
}

promptSections()
    .then(userInputContent => {
        console.log(userInputContent)
        return generatePage(userInputContent) 
    })
    .then(fileContent => {
        return writeFile(fileContent)
    })