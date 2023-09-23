const Hapi = require("@hapi/hapi");
const Path = require("path");

const init = async () => {
   const server = Hapi.server({
      port: 5000,
      host: "localhost",
   });

   // Register the inert plugin to handle static files
   await server.register(require("@hapi/inert"));

   // Define a route to serve the index.html file
   server.route({
      method: "GET",
      path: "/{param*}",
      handler: {
         directory: {
         path: Path.join(__dirname, "public"),
         listing: false,
         index: ["index.html"],
         },
      },
   });

   await server.start();
   console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
