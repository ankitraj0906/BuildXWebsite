import React from 'react'

const items = [
  {title: 'Product Design', desc: 'UX, UI, prototyping, and research'},
  {title: 'Engineering', desc: 'Frontend, backend, and full-stack systems'},
  {title: 'Growth', desc: 'Acquisition, activation, and retention'}
]

export default function Services(){
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-white text-center">What we do</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map(i=> (
          <div key={i.title} className="p-6 rounded-lg bg-[#111] border border-gray-800">
            <h3 className="text-xl text-white font-medium">{i.title}</h3>
            <p className="mt-2 text-sm text-brandGray">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
