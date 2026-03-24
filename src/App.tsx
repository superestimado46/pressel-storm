import { ArrowRight } from "lucide-react";

export default function App() {
  const LINK_VSL = "https://stormclips.netlify.app/";

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
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center gap-2 px-8 py-5 rounded-2xl font-black text-lg text-white 
  bg-[#ff0033] 
  shadow-[0_0_20px_rgba(255,0,51,0.8)] 
  hover:scale-105 
  hover:shadow-[0_0_30px_rgba(255,0,51,1)] 
  transition-all duration-300 animate-pulse"
>
  Ver o vídeo completo
  <ArrowRight size={22} />
</a>
  );
}
