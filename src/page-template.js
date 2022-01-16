const generatePage = userInput => {
    return `
    
        # ${userInput.title}

        ## Description
        
        ${userInput.description}

        ## Table of Contents
        
        ${userInput.tableOfContents}

        ## Installation 
        
        ${userInput.installation}

        ## License 
        
        ${userInput.license}

        ## Usage 
        
        ${userInput.usage}
    
    `
    
}

module.exports = generatePage;