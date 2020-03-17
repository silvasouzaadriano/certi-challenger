<h1 align="center">
    Fundação CERTI chalenger
</h1>


## A challenger for [Fundação CERTI - Desenvolvedor(a) de Software Sênior](https://br.linkedin.com/jobs/view/desenvolvedor-a-de-software-s%C3%AAnior-at-funda%C3%A7%C3%A3o-certi-1741552983?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic)

## Concepts

<h4>
On this challenger was implemented an API REST where is possible to, based in an integer number between -99999 and 99999, return it respective extension description.


## Requirements

1. In your preferred language, create an HTTP server that, for each GET request, returns a JSON whose long key is the long version of the whole number sent in the path. The numbers can be in the range [-99999, 99999]. For example:

  ```bash
  # curl http://localhost:3000/1

  $ { "extenso": "um" }

  # λ curl http://localhost:3000/-1042

  $ { "extenso": "menos mil e quarenta e dois" }

  # λ curl http://localhost:3000/94587

  $ { "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }
  ```

2. Send us the link to the repository on GitHub with the code within seven days.

3. If you open a Pull Request (eg from your development branch to the master) we will do the review and you will have a chance to correct the errors for a second evaluation.

4. Don't forget README.md with instructions for running the server!

5. Do not forget the "e" s separating thousands, hundreds and tens (see example): "noventa e quatro mil e quinhentos e oitenta e sete". This is not the standard of the cultured norm of the Portuguese language, and this is intentional.

6. You are expected to implement the translation algorithm.

7. Even if you do not have the complete logic, send us what you have managed to do so far.

## Main Technologies used

### BACK-END
-   [Node.js](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [nodemon](https://nodemon.io/)
-   [Sucrase](https://github.com/alangpierce/sucrase)
-   [Jest](https://jestjs.io/en/)


-   [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## How To Use

To clone and run this application, you'll need [Docker](https://docs.docker.com/),  [Git](https://git-scm.com), [Node.js v10.16.1](https://nodejs.org/en/) or higher + [Yarn v1.19.1](https://yarnpkg.com/lang/en/) or higher installed in your computer. Note that yarn one is optional once you might run the steps using npm and npx

### Install Backend
```bash
# Clone this repository

  $ git clone https://github.com/silvasouzaadriano/certi-challenger.git

  $ git checkout developer (Note that this step is only necessary if there is a pending pull request on GitHub)

# Go into the repository

  $ cd certi-challenger

# Installing dependencies. Note that from now one there are two possibilities: 1) Install the API locally or 2) Install the API using Docker

  1. Installing the API locally. Note that for this option its required the Node installed locally

    $ yarn install OR npm run install

    $ yarn start OR npm start


  2. Installing the API using Docker. Note that for this option its required the Docker installed locally

    $ docker build -t yourname/certi-challenger .

      Please pay attetion to change the acronymous yourname accordingly and the dot in the end of line command

    $  docker run -p 3000:3000 -d seunome/certi-challenger


# In order to use the API should be be used the url http://localhost:3000/. For example:

  $ http://localhost:3000/1
```

### Docker util commands
```bash

  1. Check all images

    $ docker images


  2. Check which ones containers are running

    $ docker ps


  3. To stop a container execution (Replace the CONTAINER ID by tge one checked using the command `docker ps` )

    $ docker stop <CONTAINER ID>


  4. To remove an image created (Replace the IMAGE ID by the one checked using the command `docker images`)

    $ docker image rmi -f <IMAGE ID>

```

## Tests
```bash

By the utilization of Jest was implemented some tests regarding to API. The test results may be found out by openning on the browser, the index.htm file which is inside to folder _tests_/coverage/lcov-report

In case of necessity for run again the tests, it might be done locally running the command yarn test OR npm test under certi-challenger folder.
```
Made with ♥ by Adriano Souza :wave: [Get in touch!](https://www.linkedin.com/in/adriano-souza-9b1a1b11)


