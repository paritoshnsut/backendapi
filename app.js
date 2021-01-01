const express = require('express');
const fs = require('fs');
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.use(express.json());

app.get('/api/v1/tours', (req, res) => {
  res.json({
    status: 'success',
    length: tours.length,
    data: { tours },
  });
});

// app.get('/api/v1/tours/:id', (req, res) => {
//   const id = req.params.id * 1;
//   const foundTour = tours.find((element) => element.id === id);

//   if (id > tours.length) {
//     return res.status(400).json({
//       message: 'Invalid ID lol',
//       status: ' LOL ',
//     });
//   }

//   res.send('omkay you got it');
// });

//we need a middleware in case of a post request a middleware is basically a function which is implemented between a request response cycle

app.post('/api/v1/tours', (req, res) => {
  const newID = tours[tours.length -1].id  + 1;
  const newTour = Object.assign({id : newID} , req.body);

  tours.push(newTour);
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json` , JSON.stringify(tours) , (err)=>{
      res.status(400).json({
           status : "Successfully added",
           data: {
               tours : newTour
           }
      })
  })
  
});
const port = 3000;
app.listen(port, () => {
  console.log('Server had started');
});
