import React from 'react';
import { toast } from 'react-toastify';

const MemberRow = ({ member, index, setRefetch }) => {
    const { name, specialty, img, email } = member;

    const handleDelete = email => {
        fetch(`http://localhost:5000/member/${email}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Deleted `);
                    setRefetch()
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} class="btn btn-xs">Deleted</button></td>
        </tr>
    );
};

export default MemberRow;