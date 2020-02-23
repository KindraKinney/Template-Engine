var inquirer = require("inquirer");
var Manager = require("./lib/Manager");
var Intern = require("./lib/Intern");
var Engineer = require("./lib/Engineer");
const util = require("util");
const fs = require("fs");
const appendFileAsync = util.promisify(fs.appendFile);

