// STRETCH
const cars = [
    {
        vin: "1FAFP404XXF1234567",
        make: "toyota",
        model: "prius",
        mileage: 215000,
        title: "clean",
        transmission: "manual",
    },
    {
        vin: "2G1WF55E6591234567",
        make: "toyota",
        model: "corolla",
        mileage: 115000,
        title: "salvage",
    },
    {
        vin: "JTDBE32K3201234567",
        make: "ford",
        model: "focus",
        mileage: 15000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}