const pool = require('../config/db');

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newNote = await pool.query(
      'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );

    res.status(201).json(newNote.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error while creating note' });
  }
};

// Get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const allNotes = await pool.query('SELECT * FROM notes ORDER BY created_at DESC');
    res.status(200).json(allNotes.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error while fetching notes' });
  }
};

// Get a single note by ID
exports.getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await pool.query('SELECT * FROM notes WHERE id = $1', [id]);

    if (note.rows.length === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.status(200).json(note.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error while fetching note' });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const updateNote = await pool.query(
      'UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *',
      [title, content, id]
    );

    if (updateNote.rows.length === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.status(200).json(updateNote.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error while updating note' });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await pool.query('DELETE FROM notes WHERE id = $1 RETURNING *', [id]);

    if (deleteNote.rows.length === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.status(200).json({ message: 'Note was deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error while deleting note' });
  }
};
