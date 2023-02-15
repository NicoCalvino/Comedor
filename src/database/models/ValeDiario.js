module.exports=function(sequelize, dataTypes){
    const ValeDiario = sequelize.define("ValeDiario",{
        id:{
            type:dataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        fecha:{
            type:dataTypes.DATE,
            allowNull:false
        },
        estado_id:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:true,
            foreignKey:true
        },
        alumna_id:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:true,
            foreignKey:true
        },
        usuario_id:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:true,
            foreignKey:true
        }
    },{
        createdAt:"created_at",
        updatedAt:"updated_at",
        deletedAt:"deleted_at",
        tableName:"vales_diarios"
    })

    ValeDiario.associate = function(models){
        ValeDiario.belongsTo(models.Usuario,{
            as:"usuarios",
            foreignkey:"usuario_id"
        })
        ValeDiario.belongsTo(models.Alumna,{
            as:"alumnas",
            foreignkey:"alumna_id"
        })
        ValeDiario.belongsTo(models.Estado,{
            as:"estados",
            foreignkey:"estado_id"
        })
        
    }

    return ValeDiario
}