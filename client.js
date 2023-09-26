const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafka-app",
  brokers: ["192.168.18.131:9092"],
});

module.exports = { kafka };
