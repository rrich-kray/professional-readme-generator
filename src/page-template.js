const generateTableOfContents = answers => {
    let totalContent = ``;
    Object.keys(answers).map(answer => totalContent += `[${answer}](#${answer})\n`)
    return totalContent
}

const generateLicenseBadges = licenses => {
    let totalContent = '';
    licenses.map(license => {
        if (license === 'MIT') totalContent += '\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        if (license === 'ISC') totalContent += '\n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
        if (license === 'Mozilla') totalContent += '\n[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    })
    return totalContent;
}

const generatePage = userInput => {
    return `
    
# ${userInput.title}

## Description

${userInput.description}

## Table of Contents

${generateTableOfContents(userInput)}

## License 

${generateLicenseBadges(userInput.licenses)}

## Installation

${userInput.installation}

## Usage 

${userInput.usage}

## Contributing

${userInput.contributing}

## Testing

${userInput.tests} 

## Questions

Feel free to shoot me any questions at the email below:

${userInput.email}

find my GitHub profile by following the link below:

${userInput.github}`   
}

module.exports = generatePage;