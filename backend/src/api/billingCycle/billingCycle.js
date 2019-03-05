import { mongoose as _mongoose, model } from 'node-restful';
const mongoose = _mongoose

const creditScrema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true},
    status: {type: String, required: true, uppercase: true, enum:['PAGO', 'PENDENTE','AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min: 1970, max:2100, required: true},
    credits: [creditScrema],
    debts: [debtSchema]
})

export default model('BillingCycle', billingCycleSchema)