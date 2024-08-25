import React from 'react';
import { supabase } from '../client';
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function ContentCreator({ user }) {
    const navigate = useNavigate();

    async function deleteCreator() {
        const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', user.id);
        
        if (error){
            console.log('Error deleting creator', error);
        }else{
            alert(`Deleted ${user.name}`);
            navigate('/', {replace: true});
        }
    }

    function editCreator() {
        navigate(`/EditCreator/${user.id}`);
    }

    function ViewCreator() {
        navigate(`/ViewCreator/${user.id}`);
    }

    return (
        <div className='w-full h-full flex flex-col border-white border-2 p-8 rounded' onClick={ViewCreator}>
            {user.imageURL && user.imageURL.includes('https://') ? (
                <img
                    src={user.imageURL}
                    alt={user.name}
                    className='w-32 h-32 rounded-full mx-auto border-white border-2'
                />
            ) : (
                <div className='w-32 h-32 rounded-full mx-auto bg-gray-300' />
            )}
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold text-center mt-4'>{user.name}</h1>
                <div className='flex items-center'>
                <FaEdit className='size-6 hover:cursor-pointer' onClick={editCreator}/>
                <FaRegTrashAlt className='size-5 hover:cursor-pointer' onClick={deleteCreator}/>
                </div>
            </div>
            {user.url ? (
                <a
                    href={user.url}
                    className='block text-center truncate'
                >
                    {user.url}
                </a>
            ) : null}
            {user.description ? (
                <p className='text-center mt-4'>{user.description}</p>
            ) : null}
        </div>
    );
}

export default ContentCreator;