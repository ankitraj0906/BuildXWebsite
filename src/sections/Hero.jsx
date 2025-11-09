import React from 'react'

export default function Hero(){
  return (
    <section className="pt-20 pb-12 text-center">
      <h1 className="text-6xl font-bold text-white">We launch high-impact digital products</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg">Design, development and growth — tailored for startups and studios.</p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="btn-primary">Work with us</button>
        <button className="px-6 py-3 rounded-full border border-gray-700">See case studies</button>
      </div>
    </section>
  )
}
