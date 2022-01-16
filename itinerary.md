Accept user input using inquirer functions in app.js
Use functions in page-template.js to generate a readme file from user input.
These functions will be used in app.js  

# Create a file for template of readme file
- This will contain functions that generate a page from the user input
- Sections:
    - Title
    - Description
    - Table of Contents
    - Installation
    - License
    - Usage
    - Contributing
- name: page-template.js
- page-template.js will contain function to 
- module.export() the functions to be used in the app.js file

# Create a file that captures user input
- app.js file
- install inquirer module
- import require module into app.js file
- Use inquirer to prompt user for information (table sections above)
    - Each section has user enter input
        - License - List of options - badge for license is added near top of readme
        - github username is added under questions section, with link to githb profile
        - Email is added to questions section, with instructions on how to ask you additional questions
