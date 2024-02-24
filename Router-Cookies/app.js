const express = require("express");
const app = express();
const shelterRoutes = require("./Routes/shelters");
const dogRoutes = require("./Routes/dogs");
const adminRoutes = require("./Routes/admin");

app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Port 3000 is listening");
});
