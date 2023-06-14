const LAMPORTS_PER_SOL = 1_000_000_000;
const url = "https://api.mainnet-beta.solana.com";

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "getBalance",
    params: ["2vv5xETcmMsonW5fJMRHDZWoFWJuhU1rUq5iduXrAQwC"],
  }),
})
  .then((response) => response.json())
  .then((json) => {
    if (json.error) {
      throw json.error;
    }

    console.log(json["result"]["value"] / LAMPORTS_PER_SOL, "SOL");
  })
  .catch((error) => {
    console.error(error);
  });
