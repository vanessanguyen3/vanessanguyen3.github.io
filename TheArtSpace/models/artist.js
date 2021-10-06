const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class Artist extends Model {}

Artist.init ({

title: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {len: [1]}
},

author: {
type: DataTypes.STRING,
allowNull: false,
validate: {len: [1]
   }
  },

genre: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {len: [1]}
},

price: {
  type: DataTypes.INTEGER,
  allowNull: false,  
  validate: {len: [1]}
},

},
{ sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'artist',  
}
);

module.exports = Artist;
