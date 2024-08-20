import { createPost } from "@/actions/actions";
import React from "react";

export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] mx-auto gap-4 my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
        Create a New Post
      </h2>
      <input
        type="text"
        name="title"
        placeholder="Enter post title"
        className="border rounded px-4 py-2 h-12 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      />
      <textarea
        name="body"
        placeholder="Write your content here..."
        className="border rounded px-4 py-2 h-32 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        rows={6}
        required
      />
      <button className="h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition duration-300">
        Submit
      </button>
    </form>
  );
}
