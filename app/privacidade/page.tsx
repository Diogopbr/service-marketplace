import React from 'react'

export const metadata = {
  title: 'Política de Privacidade | Marketplace',
  description: 'Como tratamos e protegemos seus dados pessoais'
}

export default function PrivacidadePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Informações que Coletamos</h2>
              <p>
                Coletamos informações que você nos fornece diretamente ao criar uma conta, anunciar serviços ou usar nossa plataforma:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Nome completo e informações de contato</li>
                <li>Email e telefone</li>
                <li>Informações de perfil profissional</li>
                <li>Histórico de transações e avaliações</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Como Usamos suas Informações</h2>
              <p>
                Utilizamos suas informações pessoais para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Processar transações e enviar notificações relacionadas</li>
                <li>Responder a comentários, perguntas e solicitações de suporte</li>
                <li>Enviar informações técnicas, atualizações e mensagens administrativas</li>
                <li>Detectar, prevenir e resolver problemas técnicos ou de segurança</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Compartilhamento de Informações</h2>
              <p>
                Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com prestadores de serviços que auxiliam nossas operações</li>
                <li>Em caso de fusão, aquisição ou venda de ativos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Seus Direitos (LGPD)</h2>
              <p>
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                <li>Revogar seu consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma e personalizar conteúdo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas através de email ou aviso na plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contato do DPO</h2>
              <p>
                Para exercer seus direitos ou tirar dúvidas sobre privacidade, entre em contato com nosso Encarregado de Proteção de Dados (DPO):
              </p>
              <p className="mt-2">
                <strong>Email:</strong> dpo@marketplace.com<br />
                <strong>Telefone:</strong> (11) 9999-9999
              </p>
            </section>

            <div className="mt-12 p-6 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-900">
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
