const { kafka } = require("./client");

const init = async () => {
  const consumer = kafka.consumer({ groupId: "user-1" });
  console.log("Consumer connecting...");
  await consumer.connect();
  console.log("Consumer connection successful!");
  console.log("Subscribing messages in topic [rider-updates]...");

  await consumer.subscribe({
    topics: ["rider-updates"],
    fromBeginning: true,
  });
  console.log("Message subscribing successful! [rider-updates]");

  await consumer.run({
    eachMessage: async ({ topic, partition, message, hearbeat, pause }) => {
      console.log(
        `[${topic}]: PART: ${partition}: ${message.value.toString()}`
      );
    },
  });

  console.log("Disconnecting Consumer...");

  await consumer.disconnect();
};

init();
