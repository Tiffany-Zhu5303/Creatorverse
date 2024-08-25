import React from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

function AddCreator() {
    const navigate = useNavigate();

    async function handleForm() {
        const name = document.getElementById('name').value;
        const url = document.getElementById('url').value;
        const img = document.getElementById('img').value;
        const description = document.getElementById('description').value;

        if (!name || !url || !description || !img) {
            console.log('Please fill out all fields');
            return;
        }

        const { error }  = await supabase
        .from('creators')
        .insert([
            { name: name, url: url, imageURL: img, description: description }
        ])
        
        if (error){
            console.log('Error adding creator', error);
        }else{
            console.log('Creator added');
            navigate('/', {replace: true});
        }
    }

    return (
        <div className='flex flex-col items-center py-8'>
            <h1 className='font-bold'>Add Creator</h1>
            <div className='grid gap-y-4'>
                <label htmlFor='name' className='font-bold text-xl'>Name</label>
                <input type='text' id='name'/>
                <div>
                    <label htmlFor='url' className='font-bold text-xl'>Channel/Social URL</label>
                    <p className='font-light'>Provide the channel or social link to your creator. Be sure to include https://</p>
                </div>
                <input type='text' id='url'/>
                <div>
                    <label htmlFor='img' className='font-bold text-xl'>Image URL (Optional)</label>
                    <p className='font-light'>
                        Provide a link to an image or profile of your creator. Be sure to include https://
                        <br/>
                        If you don't have an image, you can use N/A as a placeholder.
                    </p>
                </div>
                <input type='text' id='img' />
                <div>
                    <label htmlFor='description' className='font-bold text-xl'>Description</label>
                    <p className='font-light'>Provide a brief description of your creator. What do you like about them? What makes them interesting?</p>
                </div>
                <input type='text' id='description' />
                <button onClick={handleForm} className='mt-4'>Add Creator</button>
            </div>
        </div>
    );
}

export default AddCreator;