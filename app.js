var inquirer = require("inquirer");
var Manager = require("./lib/Manager");
var Intern = require("./lib/Intern");
var Engineer = require("./lib/Engineer");
const util = require("util");
const fs = require("fs");
const appendFileAsync = util.promisify(fs.appendFile);

//---------------------Start of the HTML----------------------------------------------
var generateHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      integrity="sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN" crossorigin="anonymous">
    
    <title>Employee Summary</title>
    <style>
      body {  background-color:rgb(196, 200, 255);
      }
      header {  background-color: rgb(43, 50, 156);
                color: white;
                margin: 0;
                padding: 25px;
                text-align: center;
                }
        li {  list-style-type: none;
              padding: 8px;
        }
        .card-body {  background-color: white;
                      color: black;
        }
        .card-text {  background-color: white;
                      color: black;
        }
        .card{  margin: 10px;
                float:left;
                box-shadow: 7px 7px 3px grey;
        }
        .card-header{ background-color: rgb(66, 77, 230);
        }
        h5{ color: black;
        }
    </style>
</head>
<header>
  <h1>Team Employees</h1>
</header>
<body>
    <div class="container">`;