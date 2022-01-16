const generateTableOfContents = (userTableOfContents) => {
    let totalContent = ``;
    for (let i = 0; i < userTableOfContents.split(',').length; i++) {
        let content = `${i + 1}. ${userTableOfContents.split(',')[i].trim()}`;
        totalContent += `\n${content}`
    }
    return totalContent
}

const generateContributingList = (userContributingList) => {
    let totalContent = '';
    for (let i = 0; i < userContributingList.split(',').length; i++) {
        let content = `${userContributingList.split(',')[i].trim()}`;
        totalContent += `\n* ${content}`;
    }
    return totalContent
}

const generatePage = userInput => {
    return `
    
    # ${userInput.title}

    ## Description

    ${userInput.description}

    ## Table of Contents
    
    ${generateTableOfContents(userInput.tableOfContents)}

    ## Installation

    ${userInput.installation}

    ## License 
    
    ${userInput.license}

    ## Usage 
    
    ${userInput.usage}

    ## Contributing

    ${generateContributingList(userInput.contributing)}

    ## Questions

    Feel free to shoot me any questions at the email below:

    ${userInput.email}

    find my GitHub profile by following the link below:

    ${userInput.github}`   
}

module.exports = generatePage;