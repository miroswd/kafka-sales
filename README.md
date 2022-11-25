# Sales simulation using Kafkajs


- Create a sales generator
- Call the business rule to process the sale


![partitions](https://github.com/miroswd/kafka-sales/blob/main/assets/partitions.png)

![late-sales](https://github.com/miroswd/kafka-sales/blob/main/assets/late-sales.png)

![sales-partitions](https://github.com/miroswd/kafka-sales/blob/main/assets/sales-partition.png)


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
