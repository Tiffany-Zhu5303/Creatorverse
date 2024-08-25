import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function EditCreator() {
    const { id } = useParams();
    const navigate = useNavigate();
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

    async function updateCreator() {
        let name = user.name;
        let url = user.url;
        let img = user.imageURL;
        let description = user.description;
        if(document.getElementById('name').value){
            name = document.getElementById('name').value;
        }
        if(document.getElementById('url').value){
            url = document.getElementById('url').value;
        }
        if(document.getElementById('img').value){
            img = document.getElementById('img').value;
        }
        if(document.getElementById('description').value){
            description = document.getElementById('description').value;
        }

        const {error} = await supabase
        .from('creators')
        .update({
            name: name,
            url: url,
            imageURL: img,
            description: description
        })
        .eq('id', id);

        if(error){
            console.log('Error updating creator', error);
        }else{
            console.log('Creator updated');
            navigate(`/ViewCreator/${id}`);
        }
    }

    return (
        <div className='flex flex-col items-center py-8'>
            <h1 className='font-bold'>Update Creator Info</h1>
            <div className='grid gap-y-4'>
                <label htmlFor='name' className='font-bold text-xl'>Name</label>
                <input type='text' id='name' placeholder={user.name}/>
                <div>
                    <label htmlFor='url' className='font-bold text-xl'>Channel/Social URL</label>
                    <p className='font-light'>Provide the channel or social link to your creator. Be sure to include https://</p>
                </div>
                <input type='text' id='url' placeholder={user.url}/>
                <div>
                    <label htmlFor='img' className='font-bold text-xl'>Image URL</label>
                    <p className='font-light'>Provide a link to an image or profile of your creator. Be sure to include https://</p>
                </div>
                <input type='text' id='img' placeholder={user.imageURL}/>
                <div>
                    <label htmlFor='description' className='font-bold text-xl'>Description</label>
                    <p className='font-light'>Provide a brief description of your creator. What do you like about them? What makes them interesting?</p>
                </div>
                <input type='text' id='description' placeholder={user.description} />
                <button onClick={updateCreator} className='mt-4'>Add Creator</button>
            </div>
        </div>
    );
}

export default EditCreator;