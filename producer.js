const { kafka } = require("./client");

const init = async () => {
  const producer = kafka.producer();
  console.log("Producer connecting...");
  await producer.connect();
  console.log("Producer connection successful!");
  console.log("Sending message to topic [rider-updates]...");

  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        position: 0,
        key: "location-update",
        value: JSON.stringify({ name: "Hisan", x: 0, y: 0 }),
      },
    ],
  });
  console.log("Message sending successful! [rider-updates]");
  console.log("Disconnecting Producer...");

  await producer.disconnect();
};

init();
