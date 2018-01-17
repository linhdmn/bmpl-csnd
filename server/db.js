
var mongoose = require('mongoose');
var Promise = mongoose.connect("mongodb://linhndoan:5kEY09Ze55Hn5Y65@bmpl-shard-00-00-teplx.mongodb.net:27017,bmpl-shard-00-01-teplx.mongodb.net:27017,bmpl-shard-00-02-teplx.mongodb.net:27017/test?ssl=true&replicaSet=bmpl-shard-0&authSource=admin", 
                { useMongoClient: true })
                .then(console.log("Database connected!"));
                //mongodb://tmpdat:zynC9Aj1kvT2cc9D@kblockchain-shard-00-00-v5qur.mongodb.net:27017,kblockchain-shard-00-01-v5qur.mongodb.net:27017,kblockchain-shard-00-02-v5qur.mongodb.net:27017/BlockChain?ssl=true&replicaSet=KBlockChain-shard-0&authSource=admin
                // tWCMlQ3XyLi64WTj
                // mongoose.connect("mongodb://dadawind:B5XT8Wjbxq9TJ0ha@blockchain-shard-00-00-lioju.mongodb.net:27017,blockchain-shard-00-01-lioju.mongodb.net:27017,blockchain-shard-00-02-lioju.mongodb.net:27017/myblockchain?ssl=true&replicaSet=BlockChain-shard-0&authSource=admin");
                // mongoose.connect('mongodb+srv://tmpdat:zynC9Aj1kvT2cc9D@kblockchain-v5qur.mongodb.net/test'