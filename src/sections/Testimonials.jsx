import React from 'react'

export default function Testimonials(){
  return (
    <section className="py-12">
      <h2 className="text-2xl text-white text-center">Trusted by teams</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="p-4 text-center text-brandGray">"Great to work with — launched our MVP in 6 weeks."</div>
        <div className="p-4 text-center text-brandGray">"Design and engineering synced perfectly."</div>
        <div className="p-4 text-center text-brandGray">"Result-driven and pragmatic."</div>
      </div>
    </section>
  )
}
