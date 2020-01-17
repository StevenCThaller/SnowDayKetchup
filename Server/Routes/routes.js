const controller = require('../Controllers/controller');
const path = require('path');
module.exports = app => {
    app.get('/api/tasks', controller.allTasks);
    app.get('/api/tasks/:id', controller.oneTask);
    app.post('/api/tasks', controller.createTask);
    app.put('/api/tasks/:id', controller.updateTask);
    app.delete('/api/tasks/:id', controller.deleteTask);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}