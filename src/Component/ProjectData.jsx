import React from 'react';
import { useEffect, useState } from 'react';

const ProjectData = () => {
    const [ProjectData,setProjectData] = useState(null)
    useEffect(()=>{
        (async()=>{
            const response = await fetch('/public/Database/project.json')
            const data = await response.json()
            setProjectData(data)
        })()
    },[])
    return (
        <div className='px-20 my-20'>
            <div className='my-20'>
                <h3 className='text-base text-green-500 font-bold'>All Project</h3>
                <h2 className='text-xl font-bold'>Better Agency/SEO Solution At Your Fingertips</h2>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                {
                    ProjectData && ProjectData.map((data,index)=>{
                        return (
                            <div key={index} className='shadow-xl p-8 rounded'>
                                <img src={data.img} alt="" />
                                <h3 className='text-xl font-bold'>{data.title}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProjectData;