import 'dotenv/config';
import express from 'express';
import path from "node:path";
import mainRouter from './app/routers/mainRouter.js';
import errors from './app/middleware/errors.js';
import session from 'express-session';

const app = express();

app.set("views", path.join(import.meta.dirname, "app", "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use(
    session({
      secret: "OCoffee", 
      resave: true, 
      saveUninitialized: true, 
      cookie: {
        secure: false, 
        maxAge: 1000 * 60 * 60, 
      },
    })
  );

app.use(mainRouter);
app.use((req, res, next) => {
    errors[404](res);
});

app.listen(process.env.PORT, (req, res) => {
    console.log(`Connected on : http://localhost:${process.env.PORT}`);
});
