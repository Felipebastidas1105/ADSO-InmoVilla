
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // El nombre correcto de la dependencia es "morgan" en lugar de "morgar".
//Configuracion del multer
// const multer = require('multer');
// const path = require('path');

require('dotenv').config();

//Incluimos el modulo de cors 
const cors = require('cors')

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function(req, file, cb) {
//     const fecha = new Date().toISOString().replace(/[^0-9]/g, '');
//     const nuevoNombre = `${fecha}_${file.originalname}`;
//     cb(null, nuevoNombre);
//   }
// });

// const upload = multer({ storage: storage });

const app = express();

app.use(cors())

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// app.post('/upload', upload.single('Imagen'), function (req, res) {
//   console.log(req.file.filename);
//   res.send(req.file);
// });

app.use('/api/v1/user', require('./api/v1/routes/user.routes'))
app.use('/api/v1/auth', require('./api/v1/routes/auth.routes'))
app.use('/api/v1/agent', require('./api/v1/routes/agent.routes'));
app.use('/api/v1/jointTenant', require('./api/v1/routes/jointTenant.routes'));
app.use('/api/v1/contract', require('./api/v1/routes/contract.routes'));
app.use('/api/v1/owner', require('./api/v1/routes/owner.routes'));
app.use('/api/v1/tenant', require('./api/v1/routes/tenant.routes'));
app.use('/api/v1/service', require('./api/v1/routes/service.routes'));
app.use('/api/v1/home', require('./api/v1/routes/home.routes'));
app.use('/api/v1/typehousing', require('./api/v1/routes/typeHousing.routes'));
app.use('/api/v1/typetarget', require('./api/v1/routes/typeTarget.routes'));
app.use('/api/v1/contractService', require('./api/v1/routes/contractService.routes'));
app.use('/api/v1/homeService', require('./api/v1/routes/homeService.routes'));
app.use('/api/v1/ownerContract', require('./api/v1/routes/ownerContract.routes'));
app.use('/api/v1/contractJointtenants', require('./api/v1/routes/contractJointtenants.routes'));
app.use('/api/v1/requestContractJointtenants', require('./api/v1/routes/requestContractJointtenants.routes'));
app.use('/api/v1/homeOwners', require('./api/v1/routes/homeOwners.routes'));
app.use('/api/v1/contractRequest', require('./api/v1/routes/contractRequest.routes'));

app.listen(app.get('port'), () => {
    console.log(`Server running on localhost:${app.get('port')}`);
});
