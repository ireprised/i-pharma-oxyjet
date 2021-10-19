import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Info from './Info';

const Service = () => {
    // const {service,setService} = useState({})
    // const {infos,setInfos} = useState({})
    const {serviceID} = useParams();
    // useEffect(()=>{
    //     fetch('./fakeData.json')
    //     .then(res => res.json())
    //     .then(data => setService(data))
    // },[])

    // useEffect(()=>{
    //     const detail = service.find(srv => srv.id === serviceID)
    //     setInfos(detail)
    // },[])
    // console.log(infos)
    return (
        <div>
            <h2>Product id is : {serviceID}</h2>
        </div>
    );
};

export default Service;