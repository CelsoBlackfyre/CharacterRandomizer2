import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

// Interface for Character Model attributes
interface CharacterAttributes {
  id: number;
  name: string;
  lastName: string;
  age: number;
  gender: string;
  sexualOrientation: string;
  race: string;
  skinColor: string;
  bodyType: string;
  eyeColor: string;
  hairColor: string;
  height: number;
  weight: number;
  description: string;
  image?: string;
  status: string;
  birthplace: string;
  nationality: string;
  occupation: string;
  class: string;
}

interface CharacterCreationAttributes extends Optional<CharacterAttributes, 'id'> {}

class Character extends Model<CharacterAttributes, CharacterCreationAttributes> implements CharacterAttributes {
  public id!: number;
  public name!: string;
  public lastName!: string;
  public age!: number;
  public gender!: string;
  public sexualOrientation!: string;
  public race!: string;
  public skinColor!: string;
  public bodyType!: string;
  public eyeColor!: string;
  public hairColor!: string;
  public height!: number;
  public weight!: number;
  public description!: string;
  public image!: string;
  public status!: string;
  public birthplace!: string;
  public nationality!: string;
  public occupation!: string;
  public class!: string;
}

Character.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexualOrientation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  race: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skinColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bodyType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eyeColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hairColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(256),
    allowNull: true, 
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthplace: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'characters',
  timestamps: true, 
  
});

export default Character;
