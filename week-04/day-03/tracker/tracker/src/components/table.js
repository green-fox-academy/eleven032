import React from 'react'
import { createTableRow } from './createRow.js'

function Table(props) {

    const { info } = props;

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">The table header</th>
                </tr>
            </thead>
            <tbody>{info.map((a, i) => createTableRow(a, i))}</tbody>
        </table>
    )
}

export default Table