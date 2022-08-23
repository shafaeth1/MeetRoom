import { useEffect, useState } from 'react';

const useSchedules = () => {
    const [schedules, setSchedules] = useState([]);
    const [isLoad, setIsLoad] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/schedule')
			.then(res => res.json())
			.then(data => setSchedules(data, setIsLoad(false)))
	}, [isLoad]);
    return {schedules, setSchedules, isLoad, setIsLoad};
};

export default useSchedules;