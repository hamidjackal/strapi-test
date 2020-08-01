module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3333),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '33778a649878c7bdd183b33bd203cda0'),
    },
  },
});
