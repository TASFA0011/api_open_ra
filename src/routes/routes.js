


module.exports = (fastify) => {

  fastify.get("/api/v1/ping", (_, __) => "Hello orange world");

}