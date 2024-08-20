import prisma from '@/lib/db';
import Link from 'next/link';
import React from 'react';

export default async function PostsList() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const posts = await prisma.post.findMany();
    
    return (
        <div className="max-w-[600px] mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                Posts List
            </h2>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className="border-b pb-2">
                        <Link 
                            href={`/posts/${post.id}`} 
                            className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors duration-300"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
