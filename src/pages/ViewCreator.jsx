import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        
        async function fetchCreator() {
            const {data, error} = await supabase
            .from('creators')
            .select('*')
            .eq('id', id);

            if(error){
                console.log('Error fetching creator', error);
            }else{
                setUser(data[0]);
            }
        }
        
        fetchCreator();
    }, [id]);

    return (
        <div className='flex flex-col items-center py-8'>
            <h1 className='font-bold'>{user.name}</h1>
            {user.imageURL && user.imageURL.includes('https://') ? (
                <img
                    src={user.imageURL}
                    alt={user.name}
                    className='rounded-full border-white border-2 my-4'
                />
            ) : (
                <div className='w-32 h-32 rounded-full mx-auto bg-gray-300' />
            )}
            {user.url ? (
                <a
                    href={user.url}
                    className='text-white underline block text-center'
                >
                    {user.url}
                </a>
            ) : null} 
            {user.description ? (
                <p className='text-white text-center py-8 w-1/2'>{user.description}</p>
            ) : null}  
        </div>
    );
}

export default ViewCreator;