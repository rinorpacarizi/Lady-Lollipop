const express = require('express');
const drinkRoute = express.Router();
// model
let DrinkModel = require('../models/Drink');
drinkRoute.route('/create-drink').post((req, res, next) => {
  DrinkModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
drinkRoute.route('/').get((req, res, next) => {
    DrinkModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 drinkRoute.route('/edit-drink/:id').get((req, res, next) => {
    DrinkModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
drinkRoute.route('/update-drink/:id').put((req, res, next) => {
    DrinkModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Drink successfully updated!')
    }
  })
})
// Delete
drinkRoute.route('/delete-drink/:id').delete((req, res, next) => {
    DrinkModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = drinkRoute;