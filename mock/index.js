const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');

app.get('/movies/tumbbad', (req, res) => {
  res.json({
    data: {
      meta: {
        name: req.params.name,
        releasedOn: '2018-10-12T10:15:46.752Z',
      },
      cast: { director: 'Rahil' },
      money: { made: 10, budget: 11 },
      rating: 7.2,
    },
  });
});

app.get('/movies/:name', (req, res) => {
  res.json({
    data: {
      meta: {
        name: req.params.name,
        releasedOn: faker.date.past({ years: 50 }),
      },
      cast: { director: faker.person.fullName() },
      money: { made: faker.finance.amount(), budget: faker.finance.amount() },
      rating: faker.random.number({ min: 1, max: 10 }),
    },
  });
});

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3001);
