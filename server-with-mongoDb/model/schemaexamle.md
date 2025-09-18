const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  // String field
  name: {
    type: String,
    required: true,      // must be provided
    trim: true,          // removes spaces
    minlength: 3,        // minimum length
    maxlength: 50        // maximum length
  },

  // Number field
  age: {
    type: Number,
    min: 5,              // minimum allowed
    max: 100             // maximum allowed
  },

  // Email with validation
  email: {
    type: String,
    required: true,
    unique: true,        // no duplicate emails
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // regex for email validation
  },

  // Boolean field
  isActive: {
    type: Boolean,
    default: true
  },

  // Date field
  admissionDate: {
    type: Date,
    default: Date.now
  },

  // Array field
  subjects: {
    type: [String],     // example: ["Math", "Science", "English"]
    default: []
  },

  // Nested object
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: Number }
  },

  // Reference to another collection (e.g., Teacher)
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"       // assuming you have a Teacher model
  }
});

// Create Model
module.exports = mongoose.model("Student", studentSchema);
