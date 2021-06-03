import React from 'react';



const TableItem = (props) => {
    return (
        <tr>
            <td><input type="checkbox"/></td>
            <td>{props.name}</td>
            <td><div className="d-flex justify-content-between">
                {props.email}
                <img src="./images/pen.svg" alt=""/>
            </div>  </td>
            <td>{props.date}</td>
            <td>{props.record}</td>
            <td>{props.location}</td>
            <td>{props.bestSong}</td>
            <td>{props.email}</td>

        </tr>
    );
};

export default TableItem;