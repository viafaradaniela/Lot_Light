import { express, Server, cors, os, SerialPort, ReadlineParser } from './dependencies.js'
const SERVER_IP = "192.168.1.28";//CAMBIAR IP SIEMPRE

const expressApp = express(); 
const PORT = 5050;

expressApp.use(cors({ origin: "*" }));
expressApp.use(express.json()) 
expressApp.use('/mupi', express.static('public - mupi'));


const protocolConfiguration = { 
    path: 'COM3', 
    baudRate: 9600
};
const port = new SerialPort(protocolConfiguration);


const parser = port.pipe(new ReadlineParser);
parser.on("data", (arduinoData)=>{
   console.log(arduinoData);
});

const httpServer = expressApp.listen(PORT, () => {
;
    console.log(`Server is running, host http://${SERVER_IP}:${PORT}/`);
    console.table({ 
        'Mupi Endpoint': `http://${SERVER_IP}:${PORT}/mupi` });
});

const io = new Server(httpServer, { path: '/real-time' }); 

io.on('connection', socket => {
    console.log('Conectado', socket.id);

    socket.on('paquete1', paquete1 =>{
       port.write(paquete1)
       console.log(paquete1);
    })     
    socket.on('paquete2', paquete2 =>{
       port.write(paquete2)
       console.log(paquete2);
    })     
    
    socket.on('paqueteled2on', paqueteled2 =>{
       port.write(paqueteled2)
       console.log(paqueteled2);
    })     
    socket.on('paqueteled2off', paqueteled2off =>{
       port.write(paqueteled2off)
       console.log(paqueteled2off);
    })     
    
});

