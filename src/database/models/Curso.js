module.exports=function(sequelize, dataTypes){
    const Curso = sequelize.define("Curso",{
        id:{
            type:dataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        curso:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false
        }
    },{
        timestamps:false,
        tableName:"cursos"
    })

    Curso.associate = function(models){
        Curso.hasMany(models.Alumna,{
            as:"alumnas",
            foreignKey:"curso_id"
        })
    }
    return Curso
}