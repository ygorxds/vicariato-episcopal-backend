module.exports = {
    apps : [{
      name   : "api-vicariato-episcopal-mesc-managment",
      script : "./src/context.js",
      instances : 1,
      exec_mode : "fork",
      watch : true,
      env: {
        NODE_ENV: "development",
      },
      env_production : {
        NODE_ENV: "production"
      }
    }]
  }
  