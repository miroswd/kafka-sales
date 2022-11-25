
import { Kafka } from "kafkajs";


const kafka = new Kafka({
  clientId: "ticket-sales",
  brokers: ['localhost:9092']
})

const producer = kafka.producer();


const TICKET_PRICE = [500, 600, 700][Math.floor(Math.random() * 3)];

const randomData = () => {
  const amountPeople = Math.floor(Math.random() * 10);

  const names = [
    "Miro", "Gabi", "John", "Maria"
  ]

  const client = {
    name: names[Math.floor(Math.random() * names.length)],
    age: Math.floor(Math.random() * 20) + 18
  }


  return { amountPeople, client }
}

let counter = 0;
const generateSales = async () => {
  counter++;

  console.log("Start sale #%s", counter);

  const { amountPeople, client } = randomData();

  await producer.connect().catch(err => {
    console.error(err)
  });

  producer.send({
    topic: "generate-sale",
    messages: [{
      value: JSON.stringify({
        ticketPrice: TICKET_PRICE,
        amountTickets: amountPeople,
        client,
        operation: `#${counter}`,
        totalValue: (amountPeople * TICKET_PRICE)
      })
    }]
  })

}

setInterval(() => {
  generateSales().catch(console.error)
}, 500)