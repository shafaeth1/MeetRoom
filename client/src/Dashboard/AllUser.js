import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';


const AllUser = () => {
    const [users, setUsers] = useState([]);
    const [isLoad, setIsLoad] = useState(true)
    const [refetch, setRefetch] = useState(true)
    // const [refetch, setRefetch] = useState(true)

    useEffect(() => {
        fetch('https://meetsrooms.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setUsers(data, setIsLoad(false), setRefetch(false)))
    }, [isLoad, refetch]);
    return (
        <div>
            <h2>AllUser:{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Made Admin</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                                setRefetch={setRefetch}
                            ></UserRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;