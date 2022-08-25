import React, { useEffect, useState } from 'react';
import MemberRow from './MemberRow';

const ManageMember = () => {
    const [members, setMembers] = useState([]);
    const [isLoad, setIsLoad] = useState(true)
    const [refetch, setRefetch] = useState(true)
    // const [refetch, setRefetch] = useState(true)

    useEffect(() => {
        fetch('https://meetsrooms.herokuapp.com/member')
            .then(res => res.json())
            .then(data => setMembers(data, setIsLoad(false), setRefetch(false)))
    }, [isLoad, refetch]);
    return (
        <div>
            <h2>ManageMember:{members.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => <MemberRow
                            key={member._key}
                            member={member}
                            index={index}
                            setRefetch={setRefetch}

                        ></MemberRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMember;