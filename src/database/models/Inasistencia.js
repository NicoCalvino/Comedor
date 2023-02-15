module.exports=function(sequelize, dataTypes){
    const Inasistencia = sequelize.define("Inasistencia",{
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
        tableName:"inasistencias"
    })

    Inasistencia.associate = function(models){
        Inasistencia.belongsTo(models.Usuario,{
            as:"usuarios",
            foreignkey:"usuario_id"
        })
        Inasistencia.belongsTo(models.Alumna,{
            as:"alumnas",
            foreignkey:"alumna_id"
        })
    }

    return Inasistencia
}