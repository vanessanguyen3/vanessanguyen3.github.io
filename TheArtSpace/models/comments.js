const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config.js');

class Comments extends Model{}

Comments.init(
{
    comments_text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type:DataTypes.INTEGER,
    },
    post_id: {
        type: DataTypes.INTEGER,
    },

},
{ sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
}
);
module.exports = Comments;