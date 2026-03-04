import express from "express";
import Project from "../models/Project.js";

const router = express.Router();


// CREATE PROJECT
router.post("/", async (req, res) => {
  try {

    const { title, description } = req.body;

    const project = new Project({
      title,
      description
    });

    await project.save();

    res.json(project);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// GET ALL PROJECTS
router.get("/", async (req, res) => {
  try {

    const projects = await Project.find();

    res.json(projects);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;