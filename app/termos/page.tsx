import React from 'react'

export const metadata = {
  title: 'Termos de Uso | Marketplace',
  description: 'Termos e condições de uso da plataforma'
}

export default function TermosPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o Marketplace de Serviços, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Uso da Plataforma</h2>
              <p>
                Nossa plataforma conecta prestadores de serviços a clientes. Você se compromete a usar nossos serviços apenas para fins legais e de acordo com estes Termos.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Não publicar conteúdo ofensivo ou ilegal</li>
                <li>Manter informações atualizadas e precisas</li>
                <li>Respeitar os direitos autorais e propriedade intelectual</li>
                <li>Não usar a plataforma para spam ou atividades fraudulentas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cadastro de Serviços</h2>
              <p>
                Ao anunciar serviços em nossa plataforma, você garante que:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Possui as qualificações necessárias para prestar o serviço</li>
                <li>As informações fornecidas são verdadeiras e completas</li>
                <li>Cumprirá com os compromissos assumidos com os clientes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Responsabilidades</h2>
              <p>
                O Marketplace atua como intermediário entre prestadores e clientes. Não somos responsáveis pela qualidade, segurança ou legalidade dos serviços oferecidos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Pagamentos e Taxas</h2>
              <p>
                Todas as transações financeiras devem ser realizadas através dos métodos de pagamento aprovados pela plataforma. Reservamo-nos o direito de cobrar taxas de serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Modificações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contato</h2>
              <p>
                Para questões sobre estes Termos de Uso, entre em contato através do email: <strong>legal@marketplace.com</strong>
              </p>
            </section>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Última atualização:</strong> 01 de fevereiro de 2026
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <a
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Voltar para Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
