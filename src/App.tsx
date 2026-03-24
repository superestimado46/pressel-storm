import { ArrowRight } from "lucide-react";

export default function App() {
  const LINK_VSL = "https://SEU-LINK-AQUI.com";

  return (
    <main className="min-h-screen bg-tiktok-black text-white flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
          Algumas contas estão crescendo no TikTok com vídeos simples…
          <span className="block text-tiktok.cyan mt-2">
            e quase ninguém percebe o que está por trás disso
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/70 leading-relaxed">
          Eu comecei a notar um padrão. Vídeos simples, muitas visualizações e contas crescendo rápido.
          No começo parecia coincidência… até perceber que existia uma lógica por trás.
        </p>

        <p className="mt-4 text-lg text-white/70 leading-relaxed">
          Não é sobre aparecer. Não é sobre ter seguidores.
          É sobre entender como esse tipo de conteúdo funciona.
        </p>

        <a
          href={LINK_VSL}
          className="mt-8 inline-flex items-center gap-2 bg-tiktok.cyan text-black px-6 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Ver o vídeo completo
          <ArrowRight size={20} />
        </a>

      </div>
    </main>
  );
}
