import fs from 'fs';

const fsPromises = fs.promises;


async function log(loggedData) {
    try {
        loggedData = `\n ${new Date().toString()} - ${loggedData}`;
        await fsPromises.appendFile('log.txt',loggedData);
    } catch (error) {
        console.log('There is some issue while logging data!'+ error);
    }
}


const loggerMiddleware = async (req,res,next) => {
    if (req.url === '/api/signIn' || req.url === '/api/signUp') {
        return next();
    }

    const logdata = req.url +"-" + JSON.stringify(req.body);
    await log(logdata);
    next();
}

export default loggerMiddleware;