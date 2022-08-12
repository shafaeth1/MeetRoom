import React, { useEffect, useState } from 'react';
import SettingRow from './SettingRow';

const SettingConference = () => {
    const [users, setUsers] = useState([]);
    const [isLoad, setIsLoad] = useState(true)
    const [refetch, setRefetch] = useState(true)
    // const [refetch, setRefetch] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data, setIsLoad(false), setRefetch(false)))
    }, [isLoad, refetch]);
    return (
        <div className="flex justify-center gap-1 flex-col lg:flex-row">
            <div className="md:w-12/12 lg:w-9/12">
                <h1 className='text-center text-gray-200'>Settings:{users.length}</h1>

                <table class="table w-full h-screen">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th> Role</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((eUser, index) => <SettingRow
                                key={eUser._id}
                                eUser={eUser}
                                index={index}
                                refetch={refetch}
                                setRefetch={setRefetch}
                            ></SettingRow>)
                        }


                    </tbody>
                </table>
            </div>
            {/* ========Right Sidebar ========*/}
            <div className="">

            </div>
        </div>
    );
};

export default SettingConference;