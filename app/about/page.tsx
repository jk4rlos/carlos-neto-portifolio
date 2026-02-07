export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-40 pb-20">
      {/* Header */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mim</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Sou um desenvolvedor apaixonado por criar soluções web inovadoras e
          escaláveis. Com mais de 5 anos de experiência, tenho me dedicado a
          dominar as melhores práticas de desenvolvimento e sempre buscar
          aprender tecnologias novas.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Frontend</h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>✓ React & React Hooks</li>
              <li>✓ Next.js</li>
              <li>✓ TypeScript</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ JavaScript ES6+</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Backend</h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>✓ Node.js</li>
              <li>✓ Express</li>
              <li>✓ PostgreSQL</li>
              <li>✓ MongoDB</li>
              <li>✓ REST APIs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Experiência</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-6 py-4">
            <h3 className="text-xl font-semibold mb-2">Senior Developer</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">
              2021 - Presente
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Desenvolvendo e mantendo aplicações web escaláveis usando React e
              Next.js.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-6 py-4">
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">
              2019 - 2021
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Trabalho em projetos end-to-end com arquitetura moderna e boas
              práticas.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-linear-to-r from-blue-500 to-cyan-500 dark:from-blue-900 dark:to-cyan-900 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-4">
          Vamos trabalhar juntos?
        </h2>
        <p className="text-blue-50 dark:text-blue-100 mb-6">
          Estou disponível para novos projetos e oportunidades.
        </p>
        <a
          href="mailto:contato@carlospneto.com"
          className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-50 transition-colors"
        >
          Enviar Email
        </a>
      </section>
    </div>
  );
}
