# mock server
```shell
cd mock
npm i
npm start
```

# our code
```shell
npm i
npm test
npm run test:e2e
npm start
```


## Problem Statement

Create a movie DB API that consumes another API (mock API) and transforms it's results.

### Requirements

1. Create an endpoint `/:movieName/oldness` which should return values `NEW|90s|OLD` based on the release date of the movie.
    - Year >= 2000 : NEW
    - Year >= 90 : 90s
    - Year < 90 : OLD
2. Create and endpoint `/:movieName/profitable` which should return values `PROFITABLE|NONPROFITABLE` based on the budget and made.
3. Extend the `/:movieName/profitable` endpoint by adding a `BLOCKBUSTER` response type if the difference between budget and made is greater than 100.
4. Create an endpoint `/:movieName/rating` that returns the rating of the movie out of 5, given the mock server returns the rating out of 10.