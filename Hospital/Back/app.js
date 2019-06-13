const express = require('express')
const app = express()
const opn = require('opn');
const path = require('path');
const cors  = require('cors');
const jwtLogin = require('./controller/jwt/jwtLogin');
const endsureToken = require('./controller/jwt/endsureToken');
const error404 = require('./controller/error404');
const config = require('./controller/config');
const createDoctor = require('./controller/DB/createDoctor');
const createDepartment = require('./controller/DB/createDepartment')
const allDepartments = require('./controller/departments/allDepartments');
const idDepartment = require('./controller/departments/idDepartment');
const allUsers = require('./controller/users/allUsers');
const idUser = require('./controller/users/idUser');
const updateUser = require('./controller/users/updateUser');
const ratingUser = require('./controller/users/ratingUser');
const allComents = require('./controller/comments/allComments');
const addComent = require('./controller/comments/addComment');
const updateComent = require('./controller/comments/updateComment');
const deleteComent = require('./controller/comments/deleteComment');
const replyComent = require('./controller/comments/replyComment');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let whitelist = ['http://localhost:4200', 'http://localhost:3000']
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", '*');
  next();
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'title/index.html'))
});
app.post('/api/createDoctor', cors(corsOptions), createDoctor);
app.post('/api/createDepartment', cors(corsOptions), createDepartment);
app.post('/api/login', cors(corsOptions), jwtLogin);
app.get('/api/departments', cors(corsOptions), allDepartments);
app.get('/api/departments/:id', cors(corsOptions), idDepartment);
app.get('/api/users/find', cors(corsOptions), allUsers);
app.get('/api/user/:id', cors(corsOptions), idUser);
app.put('/api/user/:id', endsureToken, cors(corsOptions), updateUser)
app.put('/api/user/:id/rating', cors(corsOptions), ratingUser);
app.get('/api/coments', cors(corsOptions), allComents);
app.post('/api/coment', cors(corsOptions), addComent);
app.put('/api/coment/:id', cors(corsOptions), updateComent);
app.delete('/api/coment/:id', cors(corsOptions), deleteComent);
//app.post('/api/coment/:id/reply', cors(corsOptions), replyComent);
app.use('*', cors(corsOptions), error404);

app.listen(config.port, err => {
    console.log('Server listen on port ' + config.port + '...');

    if (config.itsStartupServer){
        opn('http://localhost:' + config.port);
    }
});
 