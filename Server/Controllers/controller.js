const Task = require('../Models/models');

module.exports = {
    allTasks: (req,res) => {
        Task.find()
            .then(data => {
                res.json({ message: "success", results: data});
            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    oneTask: (req,res) => {
        Task.findOne({_id: req.params.id})
            .then(data => {
                res.json({ message: "success", results: data });

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    createTask: (req,res) => {
        Task.create(req.body)
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    updateTask: (req,res) => {
        Task.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true, new: true })
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    deleteTask: (req,res) => {
        Task.findOneAndDelete({_id: req.params.id})
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    }
}