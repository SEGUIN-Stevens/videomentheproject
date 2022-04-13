const express = require('express');
const router = express.Router();
const fs = require('fs');
const dir = './video';
const filesArray =[];
router.get('/files',(req,res,next)=>{
    try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            filesArray.push(file);
        });
        const filesUniqueArray = [...new Set(filesArray)]
        res.send(filesUniqueArray)
    } catch (err) {
        console.log(err);
    }
});

router.get('/file/:id',(req,res,next)=>{
    const path = `./video/${req.params.id}`;
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range && path) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1;
        const chunksize = (end-start) + 1;
        const file = fs.createReadStream(path, {start, end});
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
}); 
module.exports =router;