'use client';

import Particles from '@/components/Particles';

export default function Home() {
  return (
    <div className=" mx-auto pb-20" >
     
      <section className="text-center" style={{width: '100%', height: '600px', position: 'relative'}}>
        
        <section className="text-center absolute bottom-[50%] left-0 right-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Carlos Neto</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Full Stack Developer | React | Next.js | TypeScript
          </p>
        
        </section>
        
        <Particles
        particleColors={["#ffffffff"]}
        particleCount={500}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
        className="" />



      </section>
      
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
