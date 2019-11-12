module.exports = {
    

        development: {
          username: "postgres",
          password: process.env.devdbPassword,
          database: "bartenders2u-dev",
          host: "35.233.225.231",
          dialect: "postgres",
          logging: false,
          operatorsAliases: false
        },
        test: {
            username: "postgres",
            password: process.env.devdbPassword,
            database: "bartenders2u-test",
            host: "35.233.225.231",
            dialect: "postgres",
            logging: false,
            operatorsAliases: false
          },
        production: {
            username: "root",
            password: null,
            database: "database_production",
            host: "127.0.0.1",
            dialect: "postgres",
            logging: false,
            operatorsAliases: false,
            use_env_variable: "DATABASE_URL"
          }
        
    
}