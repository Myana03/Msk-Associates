import React from 'react';

function FoundersNote() {
  return (
    <section id="founders-note" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800">Founder's Note</h3>
        <div className="font-serif space-y-4">
          <p className="italic text-lg md:text-xl text-gray-700">
            &ldquo;I'm Sai Krishna Myana, a Structural Engineer with over 7 years of industry experience in designing and delivering safe, efficient, and code-compliant structures. In August 2023, I founded MSK ASSOCIATES as a sole proprietorship with a vision to offer reliable, high-quality structural engineering and planning services tailored to the unique needs of each project.&rdquo;
          </p>
          <p className="italic text-lg md:text-xl text-gray-700">
            &ldquo;Throughout my career, I've worked on a wide range of residential, commercial, and industrial projects—ensuring every design meets the highest standards of safety, functionality, and sustainability. With MSK ASSOCIATES, my mission is to bring that same level of precision and care to every client, from concept to completion.&rdquo;
          </p>
          <p className="font-semibold mt-6 text-blue-900">
            &mdash; Er. Myana Sai Krishna
            <br />ME (Structures), AMIE
          </p>
        </div>
      </div>
    </section>
  );
}

export default FoundersNote; 