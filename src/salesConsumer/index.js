






import { Kafka } from "kafkajs";



const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: "sales-consumer",
  retry: {
    retries: 5,
  },

});

const consumer = kafka.consumer({
  groupId: "sales-group"
});


const salesConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({
    topic: 'generate-sale',
  });


  consumer.run({
    eachMessage: async ({ message, partition }) => {
      const payload = JSON.parse(message.value);

      console.log("---------- chamando regra de negócio de venda %s", payload.operation);

      setTimeout(() => {


        payload.status = payload.amountTickets > 5 ? "NÃO APROVADA" : "APROVADA";

        console.table([payload]);



        console.log("---------- próxima venda")
      }, 4000)

    }
  })



}

salesConsumer();