import { Heading } from './component/Heading'

export function App() {
  return (
    <div className="container">
      <Heading>💰 Meu Portfólio 2026</Heading>

      <div className="grid">

        <div style={{
          backgroundColor: 'var(--fundo-card)',
          padding: '16px',
          borderRadius: '12px'
        }}>
          <h2>Bitcoin (BTC) 🚀</h2>
          <p>Preço: R$ 350.000,00</p>
          <span style={{ color: 'var(--alta)' }}>
            +5.2% hoje
          </span>
        </div>

        <div style={{
          backgroundColor: 'var(--fundo-card)',
          padding: '16px',
          borderRadius: '12px'
        }}>
          <h2>Fundo Imobiliário (HGLG11) 🏢</h2>
          <p>Dividendo: R$ 1,10</p>
          <span style={{ color: 'var(--alta)' }}>
            Rendimento estável
          </span>
        </div>

        <div style={{
          backgroundColor: 'var(--fundo-card)',
          padding: '16px',
          borderRadius: '12px'
        }}>
          <h2>Empresa X (VALE3) 📉</h2>
          <p>Preço: R$ 65,20</p>
          <span style={{ color: 'var(--baixa)' }}>
            -1.8% hoje
          </span>
        </div>

      </div>
    </div>
  )
}