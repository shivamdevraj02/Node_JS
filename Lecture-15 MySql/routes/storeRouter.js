// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const homesController = require("../controllers/storeController");

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/bookings", homesController.getBookings);

storeRouter.get("/homes/:homeId",homesController.getHomeDetails)
storeRouter.get("/favourites", homesController.getFavouriteList);

storeRouter.post("/favourites", homesController.postAddToFavourite);

module.exports = storeRouter;
