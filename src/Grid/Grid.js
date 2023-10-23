import React, { useState } from 'react';
import './Grid.css';

const Grid = ({ tabela }) => {
    const [data, setData] = useState(tabela.Data);
    const [sortColumn, setSortColumn] = useState(null);

    const orderBy = (coluna) => {
        const sortedData = [...data];
        if (sortColumn === coluna) {
            sortedData.reverse();
        } else {
            sortedData.sort((a, b) => {
                if (a[coluna] < b[coluna]) {
                    return -1;
                }
                if (a[coluna] > b[coluna]) {
                    return 1;
                }
                return 0;
            });
        }

        setData(sortedData);
        setSortColumn(coluna);
    };

    return (
        <div>
            <table className='table'>
                <thead className='table-header'>
                    <tr>
                        {tabela.Colunas.map(col =>
                            <th className='table-cell' onClick={() => orderBy(col.Nome)}>{col.Nome}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map(linha => {
                        return (
                            <tr className='table-row' key={linha.id}> {/* Certifique-se de ter uma chave única */}
                                {tabela.Colunas.map(col =>
                                    <td className='table-cell' key={col.Nome}>{linha[col.Nome]}</td>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Grid;
