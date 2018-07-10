## What is this?

Just you wait folks!

## Sample Data

To load sample data, run the following command in your terminal:

```bash
npm run sample
```

If you have previously loaded in this data, you can wipe your database 100% clean with:

```bash
npm run blowitallaway
```

That will populate 16 stores with 3 authors and 41 reviews. The logins for the authors are as follows:

|Name|Email (login)|Password|
|---|---|---|
|Wes Bos|wes@example.com|wes|
|Debbie Downer|debbie@example.com|debbie|
|Beau|beau@example.com|beau|

## How to run mongo
```bash
mongo --nodb
quit()
```
## Conect to a cluster mongo "mongodb+srv://sandbox-c9rdn.mongodb.net/test" --username m001-student --password m001-mongodb-basics

db.moviesScratch.insertMany([{}], {"ordered": false})