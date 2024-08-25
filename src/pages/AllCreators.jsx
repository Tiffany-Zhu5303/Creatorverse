import React, {useState, useEffect} from 'react';
import { supabase } from '../client';
import ContentCreator from '../components/ContentCreator';

function AllCreators() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        async function fetchCreators() {
            const {data, error} = await supabase
            .from('creators')
            .select('*');
            
            if (!error && data){
                setCreators(data);
            }
        }

        fetchCreators()
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className='w-full flex flex-col items-center overflow-y-auto overflow-x-hidden'>
            <h1 className='py-8'>All Creators</h1>
            <div className='flex flex-row flex-wrap justify-evenly p-4'>
                {creators && creators.length > 0 ? 
                creators.map((creator) => {
                return(
                    <div className='max-w-1/4 hover:bg-red-300 hover:text-black m-4' key={creator.id}>
                        <ContentCreator user={creator}/>
                    </div>
                )})    
                : <p>No creators</p>}
            </div>
        </div>
    );
}

export default AllCreators;