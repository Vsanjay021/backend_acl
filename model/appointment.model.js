const mongoose = require('mongoose');
const appointmentSchema = mongoose.Schema({
    lawyerEmail: String,
    userEmail: String,
    appointment_date: {
        date: String,
        year: Number,
        month: Number,
        day: Number
    },
    appointmentTime: String,
    meeting_type: String,
    slot: Number
}, { timestamps: true })
const AppointmentModel = mongoose.model('appointment', appointmentSchema);
module.exports = AppointmentModel;