const autocannon = require("autocannon");

const run = () =>
  new Promise((resolve, reject) => {
    const instance = autocannon(
      {
        url: "https://apim-dev-proxy.sodhc.co/test-jasson/api/category",
        connections: 50,
        duration: 10,
      },
      (err, results) => {
        if (err) return reject(err);
        console.log(results);
        resolve(results);
      }
    );

    autocannon.track(instance);
  });

run();
