import { Model, DataTypes } from "sequelize";
import { conexaoDB } from "../conexão/conexaoDB";

export interface TipoJogador extends Model{
    id: Number,
    nome: String,
    posicao: String,
    gols: Number,
    vitorias: Number
}

export const Jogador = conexaoDB.define<TipoJogador>('jogador', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    posicao: {
        allowNull: false,
        type: DataTypes.STRING
    },
    gols: {
        defaultValue: 0,
        type: DataTypes.INTEGER
    },
    vitorias: {
        defaultValue: 0,
        type: DataTypes.INTEGER
    }
},{
    tableName: 'jogador',
    timestamps: false
});