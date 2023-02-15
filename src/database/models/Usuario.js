module.exports=function(sequelize, dataTypes){
    const Usuario = sequelize.define("Usuario",{
        id:{
            type:dataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        nombre:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        apellido:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        email:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        celular:{
            type:dataTypes.STRING(15),
            allowNull:false
        },
        contrasena:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        rol_id:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            foreignKey:true,
            default:1
        }
    },{
        createdAt:"created_at",
        updatedAt:"updated_at",
        deletedAt:"deleted_at",
        tableName:"usuarios",
        paraonid:true
    })

    Usuario.associate = function(models){
        Usuario.hasMany(models.Alumna,{
            as:"alumnas",
            foreignKey:'usuario_id'
        })
        Usuario.belongsTo(models.Rol,{
            as:"roles",
            foreignKey:"rol_id"
        })
        Usuario.hasMany(models.Inasistencia,{
            as:"inasistencias",
            foreignKey:"usuario_id"
        })
    }

    return Usuario
}