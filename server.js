import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import swagger from 'swagger-ui-express';
import cors from 'cors';

// import necessary routes
import userRoutes from './src/features/user/user.routes.js';
import postRoutes from './src/features/posts/post.routes.js';
import likeRoutes from './src/features/likes/like.routes.js';
import commentRoutes from './src/features/comments/comment.routes.js';
import archiveRoutes from './src/features/archive/archive.routes.js';

// importing necessary middlewares
import jwtAuth from './src/middlewares/jwt.middleware.js';
import loggerMiddleware from './src/middlewares/log.middleware.js';
import { ApplicationError } from './src/features/error-handler/error.handler.js';

import apidocs from './swagger-doc.json' assert {type:"json"};
import bookmarkRoutes from './src/features/bookmark/bookmark.routes.js';
import draftRoutes from './src/features/drafts/draft.routes.js';

const app = express();

// managing post data
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(loggerMiddleware);
app.use(cors());
app.use('/api/docs',swagger.serve,swagger.setup(apidocs));



app.use('/api',userRoutes);
app.use('/api/posts',jwtAuth,postRoutes);
app.use('/api/archive/post',jwtAuth,archiveRoutes);
app.use('/api/bookmark/post',jwtAuth,bookmarkRoutes);
app.use('/api/draft/post',jwtAuth,draftRoutes);
app.use('/api/likes',jwtAuth,likeRoutes);
app.use('/api/comments',jwtAuth,commentRoutes);


app.get('/',(req,res)=>{
    res.send('Welcome to Postaway!');
})

// universal error handler
app.use((err,req,res,next)=>{
    if (err instanceof ApplicationError) {
        return res.status(err.code).send(err.message);
    }
    res.status(500).send("something went wrong! please check again");
})


app.listen(4800,()=>{
    console.log('server is running at port 4800');    
})