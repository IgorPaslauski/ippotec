
import React from 'react';
import tabelas from '../DadosBanco/Tabela.json'
import Input from '../Input/Input';
import './Table.css';
import Grid from '../Grid/Grid';

const Table = ({ NomeDaTabela = '' }) => {
    const tabela = tabelas.find(tabela => tabela.Nome === NomeDaTabela);
    let linhas = [];

    const maiorLinha = tabela.Colunas.reduce((maior, col) => {
        return col.PosicaoLinha > maior ? col.PosicaoLinha : maior;
    }, 1);

    for (let i = 1; i <= maiorLinha; i++) {
        linhas.push(
            <div className="form-table">
                {
                    tabela.Colunas.filter(col => col.PosicaoLinha === i).map(col =>
                        <Input
                            label={col.Nome}
                            id={col.Nome}
                            required={col.Obrigatorio}
                            placeholder={col.Nome}
                            maxLength={col.Tamanho}
                            minLength={col.Tamanho}
                        ></Input>
                    )
                }
            </div>
        )
    }

    return (
        <div className="table-container">
            <h2>{tabela.Nome}</h2>
            <div>{tabela.Descricao}</div>
            <form>
                <div className="form-group">
                    <button type="submit">Incluir</button>
                    <button type="submit">Alterar</button>
                    <button type="submit">Excluir</button>
                </div>
                {linhas}
            </form>
            <Grid tabela={tabela}></Grid>
        </div>
    );
};


export default Table;