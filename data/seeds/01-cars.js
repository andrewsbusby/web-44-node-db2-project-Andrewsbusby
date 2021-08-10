const cars = [
    {
        vin: '3GNFK16318G269795',
        make: 'toyota',
        model: 'camrey',
        mileage: 100000,
    },
    {
        vin: '1HD1FMW166Y641723',
        make: 'ford',
        model: 'focus',
        mileage: 150000,
        transmission: 'manual'
    },
    {
        vin: 'JH4KA3261JC024072',
        make: 'handa', 
        model: 'civic',
        mileage: 50000,
        title: 'clean',
        transmission: 'auto'
    }
]

exports.seed = function(knex) {
    return knex('cars').truncate()
    .then(()=> {
        return knex('cars').insert(cars)
    })
}
