# Sales simulation using Kafkajs


- Create a sales generator
- Call the business rule to process the sale


![partitions]()

![late-sales]()

![sales-partitions]()


### Start application

```shell
docker-compose up -d
```

```shell
yarn # install the dependencies
```

> Start consumer (by partitions)
```shell
yarn start:consumer 
```


```shell
yarn start:generate 
```
