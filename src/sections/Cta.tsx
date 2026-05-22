import { FaWhatsapp } from "react-icons/fa"

export default function Cta() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Fale conosco</h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Tire suas dúvidas, agende uma visita ou saiba mais sobre nossos serviços.
          Estamos prontos para te atender.
        </p>

        <a
          href="https://wa.me/5575999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Haras%20Alcançu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
        >
          <FaWhatsapp size={24} />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
