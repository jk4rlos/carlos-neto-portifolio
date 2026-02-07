export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-30 pb-20">
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Carlos Neto
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
          Full Stack Developer | React Specialist | Next.js Expert
        </p>
        <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400 mb-8">
          Criar experiências digitais incríveis é minha paixão. Especializado em
          desenvolvimento web moderno com tecnologias de ponta.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/work"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Ver Projetos
          </a>
          <a
            href="/about"
            className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg font-medium transition-colors"
          >
            Sobre Mim
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-2">10+</h3>
          <p className="text-zinc-600 dark:text-zinc-400">Projetos Entregues</p>
        </div>
        <div className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-2">100+</h3>
          <p className="text-zinc-600 dark:text-zinc-400">Horas de Código</p>
        </div>
        <div className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-2">5+</h3>
          <p className="text-zinc-600 dark:text-zinc-400">Anos de Experiência</p>
        </div>
      </section>
    </div>
  );
}
