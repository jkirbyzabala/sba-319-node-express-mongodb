const express = require('express');
const router = express.Router();
const Actor = require('../models/actors');

// GET all actors
router.get('/', async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific actor by ID
router.get('/:id', async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    if (!actor) return res.status(404).json({ message: 'Actor not found' });
    res.json(actor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new actor
router.post('/', async (req, res) => {
  const actor = new Actor({
    name: req.body.name,
    birthDate: req.body.birthDate,
    nationality: req.body.nationality,
    films: req.body.films,
    awards: req.body.awards
  });
  try {
    const newActor = await actor.save();
    res.status(201).json(newActor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT to update an existing actor
router.put('/:id', async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    if (!actor) return res.status(404).json({ message: 'Actor not found' });

    actor.name = req.body.name || actor.name;
    actor.birthDate = req.body.birthDate || actor.birthDate;
    actor.nationality = req.body.nationality || actor.nationality;
    actor.films = req.body.films || actor.films;
    actor.awards = req.body.awards || actor.awards;

    const updatedActor = await actor.save();
    res.json(updatedActor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an actor
router.delete('/:id', async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    if (!actor) return res.status(404).json({ message: 'Actor not found' });

    await actor.remove();
    res.json({ message: 'Actor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
