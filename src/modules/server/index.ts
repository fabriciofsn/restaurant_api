import { Server } from "./server";
require('dotenv').config();

new Server().app.listen(process.env.PORT, () =>{
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
