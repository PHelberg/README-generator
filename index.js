const inquirer = require("inquirer")
const fs = require("fs")


inquirer.prompt([
    {
    name: 'Description',
    message: 'README Description',
},{
    name: 'Table of Contents',
    message: 'View Table of Contents',
},{
    name: 'Installation',
    message: 'How to install',
},{
    name: 'Usage',
    message: 'README usage',
},{
    name: 'License',
message: 'License',
},{
name: 'Contributing',
message: 'Contributors',
},{
    name: 'Tests',
    message: 'Tests',
},
{
    name: 'Questions',
  message: 'Questions', 
},

]array.forEach(element => {
    ).then((answers) => {
        const {answers}
});

${answers.description}    




 fs.writeFile('README.md')