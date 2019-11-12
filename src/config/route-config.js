const staticRoutes = require("../routes/static");
const levelRoutes = require("../routes/levels");
const eventRoutes = require("../routes/events");
const serviceRoutes = require("../routes/services");
const userRoutes = require("../routes/users");




module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      if(process.env.NODE_ENV === "test") {
        const mockAuth = require("../../spec/support/mock-auth.js");
        mockAuth.fakeIt(app);
      }
      app.use(staticRoutes);
      app.use(levelRoutes);
      app.use(eventRoutes);
      app.use(serviceRoutes);
      app.use(userRoutes);


    }
  }
