import React from 'react'

export default function Contact(){
  return (
    <div className="py-20 max-w-2xl mx-auto">
      <h1 className="text-3xl text-white font-bold">Get in touch</h1>
      <form className="mt-6 flex flex-col gap-4">
        <input className="p-3 rounded bg-[#111] border border-gray-800" placeholder="Name" />
        <input className="p-3 rounded bg-[#111] border border-gray-800" placeholder="Email" />
        <textarea className="p-3 rounded bg-[#111] border border-gray-800" placeholder="Message" rows="5"></textarea>
        <button className="btn-primary w-40">Send</button>
      </form>
    </div>
  )
}
