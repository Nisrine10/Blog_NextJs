import React from 'react';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Form from '@/components/form';


export default async function Page() {  // Capitalize the component name to follow React conventions
  

    return (
        <main className='text-center pt-16'>
            <h1 className='text-4xl md:text-5xl font-bold mb-5'>Create Post</h1>
       
            <Form/>
            <LogoutLink> 
                Log Out
            </LogoutLink> 
        </main>
    );
}
