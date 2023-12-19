const mongoose = require ('mongoose')

const Patients = mongoose.Schema(
    {
        PatientsID: {
            type: String,
            required: [true, "Please enter your ID"]
        },
        Surname : {
            type: String,
            required: true,   
        },
        OtherNames : {
            type: String,
            required: true,   
        },
        Gender : {
            type: String,
            required: true,   
        },
        PhoneNumber : {
            type: String,
            required: true,   
        },
        ResidentialAddress : {
            type: String,
            required: true,   
        },
        EmergencyContactName: {
            type: String,
            required: true,   
        },
        EmergencyContactNumber: {
            type: String,
            required: true,   
        },
        RelationshipWithPatient: {
            type: String,
            required: true,   
        },
        
        
       
    },
    {
    timestamps: true
    }
)



const patients = mongoose.model('Patients', patientsSchema);

module.exports = patients;