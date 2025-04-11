const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
  budget: { type: Number, required: true },
  planDate: { type: Date, required: true },
  purchaseDate: { type: Date },
  actualExpendMoney: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
