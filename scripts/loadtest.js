import http from "k6/http";

/**
 * @type {import("k6/options").Options}
 */
export let options = {
  vus: 100,
  duration: "5s",
  gracefulStop: "5s",
};

const host = __ENV.TARGET_HOST || "localhost";

export function setup() {
  console.log("Host: " + host);
  console.log("Options: " + JSON.stringify(options, null, 2));
}

export default async function () {
  const res = await http.get(host + "/health-check", {
    headers: {
      // "Cache-Control": "no-cache",
    },
  });
  if (res.status !== 200) {
    console.log(`Error: ${res.status} ${res.body}`);
  }
}

export function teardown() {
  console.log("Teardown");
}
