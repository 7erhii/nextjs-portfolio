setTimeout(() => {
  console.log("prepairing");

  const backendData = {
    server: "name",
    port: 3000,
    status: "ok",
  };

  setTimeout(() => {
    backendData.modified = true;
    console.log("data", backendData);
  }, 2000);
}, 2000);
