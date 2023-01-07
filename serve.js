const http=require('http')
const {MongoClient} = require('mongodb');
const fs = require('fs');

class Event
{  
   logger(event,timestamp)
  {
fs.appendFile('app.log', `event --> ${event} ${timestamp}\n`, function (err) {
  if (err) throw err;
 
});
}
  async on(name,callback)
  {
    const uri = "mongodb+srv://siddiq:m001-mongodb-basics@cluster0.4zlmiak.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    const dbName="Event";
    await client.connect();
      const db = client.db(dbName);
      const events = db.collection('Events');
     await events.insertOne({
        event: name+' added',
        triggerTime: new Date()
      });
     console.log(`${name} added`)
    this. logger(`${name} added`,new Date())
     await client.close()
    }
async off(name)
  {
    const uri = "mongodb+srv://siddiq:m001-mongodb-basics@cluster0.4zlmiak.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    const dbName="Event";
    await client.connect();
      const db = client.db(dbName);
      const events = db.collection('Events');
     await events.insertOne({
        event: name+' removed',
        triggerTime: new Date()
      });
     console.log(`${name} removed`)
  this.logger(`${name} removed`,new Date())
     await client.close()
    } 
async trigger (name)
  {
    const uri = "mongodb+srv://siddiq:m001-mongodb-basics@cluster0.4zlmiak.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    const dbName="Event";
    await client.connect();
      const db = client.db(dbName);
      const events = db.collection('Events');
     await events.insertOne({
        event: name+' triggered',
        triggerTime: new Date()
      });
     console.log(`${name} triggered`)
this.logger(`${name} triggered`,new Date())
     await client.close()
    }
  }  
  event=new Event();
   event.on('click',()=> {
      console.log('Hello');
    });
   event.on('click',()=> {
      console.log('There');
    });
   event.trigger('click');
   event.off('click');
server=http.createServer((req,res)=>{
}) 
server.listen(5000)