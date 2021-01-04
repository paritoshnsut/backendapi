const express = require('express');
const fs = require('fs');
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  req.requestTime = new Date().toISOString();
});

const getAlltours = (req, res) => {
  res.json({
    status: 'success',
    requestedAt: requestTime,
    length: tours.length,
    data: { tours },
  });
};

//we need a middleware in case of a post request a middleware is basically a function which is implemented between a request response cycle
const createTour = (req, res) => {
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(400).json({
        status: 'Successfully added',
        data: {
          tours: newTour,
        },
      });
    }
  );
};

const getOneTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((ele) => ele.id === id);

  if (id > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'Comeon man this number doesnt exist',
    });
  }

  console.log(req.params);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const patchATour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: 'failed bitch',
      message: 'done',
    });
  }
  res.status(200).json({
    status: 'successful',
  });
};

const deleteAtour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: 'nothing to delete',
      message: 'deletion failed',
    });
  }
  res.status(200).json({
    status: 'successfuly deleted',
  });
};

const getUsers = (req, res) => {
  res.status(200).json({
    status: 'Work In Progress',
    data: {
      message: 'Abhi kaam kr rhe hai or kya hi bole bhaiya ji',
    },
  });
};

const createUser = (req, res) => {
  res.status(200).json({
    status: 'Work In Progress',
    data: {
      message: 'Abhi kaam kr rhe hai or kya hi bole bhaiya ji',
    },
  });
};

const getAUser = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: 'nothing to delete',
      message: 'deletion failed',
    });
  }
  res.status(200).json({
    status: 'Work In Progress',
    data: {
      message: 'Abhi kaam kr rhe hai or kya hi bole bhaiya ji',
    },
  });
};

const patchUser = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: 'nothing to delete',
      message: 'deletion failed',
    });
  }
  res.status(200).json({
    status: 'Work In Progress',
    data: {
      message: 'Abhi kaam kr rhe hai or kya hi bole bhaiya ji',
    },
  });
};

const deleteUser = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: 'nothing to delete',
      message: 'deletion failed',
    });
  }
  res.status(200).json({
    status: 'Work In Progress',
    data: {
      message: 'Abhi kaam kr rhe hai or kya hi bole bhaiya ji',
    },
  });
};
const TourRouter = express.Router();
const UserRouter = express.Router();
app.use('/api/v1/tours' , TourRouter);
app.use('/api/v1/users' , UserRouter);



TourRouter.route('/').get(getAlltours).post(createTour);
TourRouter.route('/:id').get(getOneTour).patch(patchATour).delete(deleteAtour);

UserRouter.route('/').get(getUsers).post(createUser);
UserRouter.route('/:id').get(getAUser).patch(patchUser).delete(deleteUser);

const port = 3000;
app.listen(port, () => {
  console.log('Server had started');
});
