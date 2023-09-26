const { kafka } = require("./client");

const init = async () => {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  await admin.connect();
  console.log("Admin connection successful!");
  console.log("Creating topic [rider-updates]");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic creation successful! [rider-updates]");
  console.log("Disconnecting Admin...");

  await admin.disconnect();
};

init();
