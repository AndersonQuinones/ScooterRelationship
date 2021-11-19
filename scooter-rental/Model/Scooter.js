const {sequelize, DataTypes, Model} = require('../sequelize_index');

class Scooter extends Model {

}

Scooter.init({
    scooterID: DataTypes.NUMBER,
    rentStatus: DataTypes.BOOLEAN,
    currentChargingStation: DataTypes.STRING,
    isFullyCharged: DataTypes.BOOLEAN
}, {
    sequelize,
    timestamps: false
})

module.exports = {
    Scooter
}