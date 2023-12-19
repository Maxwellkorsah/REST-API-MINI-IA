const mongoose = require ('mongoose')
const Encounter = mongoose.Schema(
    {
        PatientsID: {
            type: String,
            required: [true, "Please enter your ID"]
        },
        Date : {
            type: String,
            required: true,   
        },
        Time : {
            type: String,
            required: true,   
        },
        TypeofEncounter : {
            type: String,
            required: true,   
        },
       
        



















    })

    const encounter = mongoose.model('Patients', patientsSchema);

module.exports = encounter
