import express from 'express';

import employeesRouter from './src/modules/employees/routers/employees.router.js';
import progressSheetRouter from './src/modules/employees/routers/progressSheet.router.js';
import groupsRouter from './src/modules/groups/routers/groups.router.js';
import gradesRouter from './src/modules/groups/routers/grades.router.js';
import problemsRouter from './src/modules/groups/routers/problems.router.js';
import qualitiesRouter from './src/modules/groups/routers/qualities.router.js';

const app = express();
const port = 3000;

// To handle the data chunks into json body.
app.use(express.json());

// Our great routers.
app.use('/employees', employeesRouter);
app.use('/progress-sheets', progressSheetRouter);
app.use('/groups', groupsRouter);
app.use('/grades', gradesRouter);
app.use('/problems', problemsRouter);
app.use('/qualities', qualitiesRouter);

app.get('/', (req, res) => res.send('Hello World!'));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Not found handler
app.use((req, res, next) => {
  res.status(404).send('Not found');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
