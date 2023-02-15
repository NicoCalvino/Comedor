module.exports=function(sequelize, dataTypes){
    const Alumna = sequelize.define("Alumna",{
        id:{
            type:dataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        alumna:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        curso_id:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            foreignKey:true
        },
        usuario_id:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:true,
            foreignKey:true
        }
    },{
        timestamps:false,
        tableName:"alumnas"
    })

    Alumna.associate = function(models){
        Alumna.belongsTo(models.Usuario,{
            as:"usuarios",
            foreignKey:"usuario_id"
        })
        Alumna.belongsTo(models.Curso,{
            as:"cursos",
            foreignKey:"curso_id"
        })
        Alumna.hasMany(models.ValeMensual,{
            as:"valesMensuales",
            foreignKey:"alumna_id"
        })
        Alumna.hasMany(models.ValeDiario,{
            as:"valesDiarios",
            foreignKey:"alumna_id"
        })
        Alumna.hasMany(models.Inasistencia,{
            as:"inasistencias",
            foreignKey:"alumna_id"
        })
        
    }
    

    return Alumna
}