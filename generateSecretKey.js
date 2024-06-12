const { exec } = require("child_process");

exec("openssl rand -hex 32", (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing command: ${err.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`Generated secret key: ${stdout.trim()}`);
});
