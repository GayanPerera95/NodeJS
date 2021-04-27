/** -----------HTTP SERVER-------------------------- 

const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello,Gayan\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

------------------------------------------------------*/

/** ------Making HTTP Requests(JSON)---------
 
const http = require("http")

http.get('http://api.open-notify.org/astros.json',resp=>{
  let data ='';
  resp.on('data',chunk=>{
    data += chunk
  });

  resp.on('end',()=>{
    let jsondata = JSON.parse(data)
    console.log(jsondata)
  });
})

--------------------------------------------------*/

/** ----------HTTP POST Request--------------------

const axios = require("axios");

const data = JSON.stringify({
  name: "Gayan",
  Job:"Content Writer"
});

axios.post('https://reqres.in/api/users',data).then(res=>{
  console.log(`Status Code: ${res.status}`);
  console.log(`Body : ${JSON.stringify(res.data)}`);
}).catch(err=>{
  console.log(err)
})

----------------------------------------------------*/

/** ----------------File reading---------------------

const fs = require("fs");

fs.readFile("test.txt",'utf8',(err,data)=>{
  if(err)throw err;
  console.log(data)
})

const data = fs.readFileSync('test.txt',{encoding: 'utf8',flag:'r'});

console.log(data);

fs.stat('test.txt',(err,stats)=>{
  if (err){
    console.error(err);
    return
  }

  console.log(stats.isFile())
  console.log(stats.isDirectory())
  console.log(stats.size)
})
-----------------------------------------------*/

/**---------------File Create and remove----------------

const fs = require('fs');

const content = "Node Application";

fs.writeFile('test.txt',content,{flag: 'a+'},err=>{
  if(err){
    console.log(err);
    return
  }
  console.log("Successfully Done!")

})

const fs = require('fs');

fs.unlink('test.txt', err=>{
  if(err){
    console.log(err)
    return
  }

  console.log("File Removed");
})

------------------------------------------*/


