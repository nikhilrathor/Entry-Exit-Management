<h1>Entry-Exit-Management</h1>

## Index

- [Index](#index)
- [About](#about)
- [Usage](#usage)
  - [Installation](#installation)
- [File Structure](#file-structure)
- [Gallery](#gallery)

## About

This is an easy to use and a minimum viable Entry-Exit Management web application built using Node.js and MySql database at back-end, it also supports EMAIL and SMS automation using nodemailer and Nexmo API respectively, this project is my submission for the innovacer [summergeeks](https://summergeeks.in/) summer internship challenge.

## Usage

### Installation

**Development**

If you just want to do a simple test run of the application, you can  first

- Clone the repository

```bash
$ git clone https://github.com/nikhilrathor/Entry-Exit-Management.git
```
- Install dependencies by using the following commands.

```bash
$ cd Entry-Exit-Management
$ npm install
```
- Obtain API Key & API Secret from [Nexmo SMS](https://www.nexmo.com/) API

- create a `.env` file in root directory and assign the following environment variables
`NOTE: don't version control your .env file, make sure .env is added in .gitignore file`
```bash
$ cd Entry-Exit-Management
$ touch .env
$ echo "EMAIL={Source email id}" >> .env
$ echo "PASS={Source email password}" >> .env
$ echo "NEXMOKEY={your nexmo api key for sms}" >> .env
$ echo "NEXMOSECRET={your nexmo api secret for sms}" >> .env
```

Start MySql server

- Finally run the application using 

```bash
$ node server.js
```  

## File Structure
- Add a file structure here with the basic details about files, below is an example.

```bash
.
├── db.js
├── LICENSE
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── 1.jpeg
│   ├── function.js
│   ├── host.html
│   ├── HOST.js
│   ├── index.html
│   ├── jquery.js
│   ├── visitor.html
│   └── VISITOR.js
├── routes
│   └── api
│       ├── hosts.js
│       ├── index.js
│       └── visitors.js
└── server.js


```

## Gallery

<p align="center">
  <img src="./images/1.png">
  <img src="./images/2.png">
  <img src="./images/3.png">
  <img src="./images/4.png">
  <img src="./images/5.png">
  <img src="./images/6.png">
  <img src="./images/7.png">
  <img src="./images/8.png">
  <img src="./images/9.png">
  <img src="./images/10.png">
</p>

