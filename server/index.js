// const express = require('express');
// const app = express();
// const dotenv = require('dotenv');
// dotenv.config();
// const mongodb = require('./config/db');
// const Route  = require('./routes/router');
// const cors = require('cors')

// const port = process.env.PORT || 5000

// mongodb();

// app.use(cors(
//     {
//         origin: ["https://vpl-cricket-tournament.vercel.app"]
//     }
//  ))

// app.use(cors()); 

// app.use(express.json());


// app.get("/checkserver", (req,res)=>{
//     res.send("welcome backend page")
// })

// app.use('/', Route);

// app.listen(port, "localhost", () =>{
//     console.log(`server start : http://localhost:${port} `)
// })




const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
const mongodb = require('./config/db');
const Route = require('./routes/router');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; 

mongodb();

// Set up CORS
const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173",
//     // origin: "https://vpl-cricket-tournament.vercel.app",
//     methods: ["GET", "POST"]
//   }
// });


// // app.use(cors(
// //     {
// //         origin: ["https://vpl-cricket-tournament.vercel.app"]
// //     }
// //  ))




const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://vpl-cricket-tournament.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true
  },
  transports: ['websocket', 'polling']
});


app.use(cors({
  origin: [
    // "http://localhost:5173",
    "https://vpl-cricket-tournament.vercel.app"
  ]
}));





// app.use(cors());

app.use(express.json());

// add socket.io instance to req object
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Socket.IO connection event
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

app.get("/checkserver", (req, res) => {
    res.send("Welcome to the backend page");
});

app.use('/', Route); 

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');
// const dotenv = require('dotenv');
// const mongodb = require('./config/db');
// const Route = require('./routes/router');
// const cors = require('cors');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000; 

// mongodb();

// // Set up CORS
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: [ "https://vpl-cricket-tournament.vercel.app"],
//     methods: ["GET", "POST"],
//     credentials: true
//   }
// });




// app.use(cors(
//     {
//         origin: ["https://vpl-cricket-tournament.vercel.app"]
//     }
//  ))

// // app.use(cors());
// app.use(express.json());

// // add socket.io instance to req object
// app.use((req, res, next) => {
//   req.io = io;
//   next();
// });

// // Socket.IO connection event
// io.on('connection', (socket) => {
//     console.log('New client connected');

//     socket.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
// });

// app.get("/checkserver", (req, res) => {
//     res.send("Welcome to the backend page");
// });

// app.use('/', Route); 

// server.listen(port, "localhost", () => {
//     console.log(`Server started: http://localhost:${port}`);
// });