module.exports=function(sequelize, dataTypes){
    const ValeMensual = sequelize.define("ValeMensual",{
        id:{
            type:dataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        lunes:{
            type:dataTypes.STRING(1),
            default:"" 
        },
        martes:{
            type:dataTypes.STRING(1),
            default:"" 
        },
        miercoles:{
            type:dataTypes.STRING(1),
            default:"" 
        },
        jueves:{
            type:dataTypes.STRING(1),
            default:"" 
        },
        viernes:{
            type:dataTypes.STRING(1),
            default:"" 
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
        tableName:"vales_mensuales"
    })

    ValeMensual.associate = function(models){
        ValeMensual.belongsTo(models.Usuario,{
            as:"usuarios",
            foreignkey:"usuario_id"
        })
        ValeMensual.belongsTo(models.Alumna,{
            as:"alumnas",
            foreignkey:"alumna_id"
        })
        ValeMensual.belongsTo(models.Estado,{
            as:"estados",
            foreignkey:"estado_id"
        })
        
    }

    return ValeMensual
}