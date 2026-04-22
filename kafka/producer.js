const { Kafka } = require('kafkajs');

const kafka = new Kafka({ brokers: ['localhost:9092'] });
const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: 'deploy-events',
    messages: [{ value: 'WebsiteCreated user1' }],
  });
};

run();
