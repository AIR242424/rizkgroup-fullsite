
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-black text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Rizk Group</h1>
        <p className="text-xl md:text-2xl mb-8 italic">The Intelligence Behind Modern Brands.</p>
        <p className="text-lg max-w-2xl mb-6">
          A full-service advertising agency engineered for the AI age — where bold creativity meets strategic precision.
        </p>
        <a href="#contact" className="mt-4 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
          Let’s Build Your Brand
        </a>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-8">What We Do</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Strategy. Creative. Intelligence. Execution. We craft brand experiences that speak to humans, optimized by data, and powered by cutting-edge tools.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Brand Positioning",
            "Campaign Development",
            "AI-Enhanced Marketing",
            "Digital Growth Strategies",
            "Full-Stack Creative Execution",
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-medium">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Our Difference</h2>
        <p className="text-lg max-w-2xl mx-auto">
          We don’t follow trends — we engineer them. With decades of legacy and the sharpest minds in data and design, we’re rewriting how brands are built.
        </p>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Future-Ready, Human-Focused</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Branding is art. Growth is science. We bring both together — for results that scale.
        </p>
      </section>

      <section id="contact" className="bg-black text-white py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Let’s start something bold.</h2>
        <a href="mailto:hello@rizkgroup.ai" className="mt-4 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>
    </div>
  );
}
