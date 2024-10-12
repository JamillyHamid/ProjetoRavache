class Pokemon extends Model {}

Pokemon.init({
    Id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Tipo: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    Altura: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    NivelPoder: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});