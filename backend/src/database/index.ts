import {createConnection} from 'typeorm';

createConnection().then(()=>{
    console.log('Database connect');
}).catch((err)=>{
    console.log(`error connection database ${err}`)
});
