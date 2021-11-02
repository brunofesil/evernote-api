const mongoose = require('mongoose');

let noteSchema = new mongoose.Schema ({
  title: String,
  body: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: { createdAt: 'created_at' } });

noteSchema.index({'title': 'text', 'body': 'text'});

module.exports = mongoose.model('Note', noteSchema);