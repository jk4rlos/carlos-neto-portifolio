export default function Work() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Plataforma de e-commerce completa com carrinho de compras, pagamento e painel admin.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      status: "Concluído",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description:
        "Dashboard de análise para redes sociais com gráficos em tempo real.",
      technologies: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
      link: "#",
      status: "Concluído",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Aplicação de gerenciamento de tarefas com colaboração em tempo real.",
      technologies: ["React", "Firebase", "Redux", "Material-UI"],
      link: "#",
      status: "Concluído",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Plataforma de blog com Markdown, categorias e sistema de comentários.",
      technologies: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS"],
      link: "#",
      status: "Concluído",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pt-40 pb-20">
      {/* Header */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Meus Projetos</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Aqui estão alguns dos projetos que desenvolvemos. Cada um representa
          uma oportunidade de aprendizado e crescimento.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Placeholder Image */}
            <div className="h-48 bg-linear-to-br from-blue-400 to-cyan-400 dark:from-blue-900 dark:to-cyan-900 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-6xl opacity-30">📦</span>
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100 rounded-full text-sm font-medium mb-3">
                {project.status}
              </span>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs font-medium rounded text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <a
                href={project.link}
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Ver Projeto →
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-bold mb-4">
          Tem uma ideia? Vamos conversar!
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Estou sempre aberto a novos desafios e oportunidades de colaboração.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          Entrar em Contato
        </a>
      </section>
    </div>
  );
}
