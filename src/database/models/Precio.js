module.exports=function(sequelize, dataTypes){
    const Precio = sequelize.define("Precio",{
        id:{
            type:dataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        nro_hija:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false
        },
        alm_x_sem:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false
        },
        escuela:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        precio:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false
        }
    },{
        timestamps:false,
        tableName:"precios"
    })


    return Precio
}