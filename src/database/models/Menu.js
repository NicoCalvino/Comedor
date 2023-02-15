module.exports=function(sequelize, dataTypes){
    const Menu = sequelize.define("Menu",{
        id:{
            type:dataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        menu:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        detalle:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        dia:{
            type:dataTypes.STRING(100),
            allowNull:false
        }
    },{
        timestamps:false,
        tableName:"menu"
    })


    return Menu
}