require("dotenv").config();
module.exports = {  
   url: `mongodb://localhost:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
};
