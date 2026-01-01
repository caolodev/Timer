# TimerApp — React + Vite

Aplicação simples e eficiente de cronômetro construída com React, permitindo controlar o tempo em minutos, segundos e centésimos.  
Conta com funcionalidades para iniciar, pausar, resetar, carregar tempos anteriores, e armazenar o histórico localmente através do LocalStorage.

---

## Funcionalidades

- Exibir tempo no formato **MM:SS:CS** (centésimos)
- Iniciar o timer
- Pausar o timer
- Resetar o timer
- Salvar registro no histórico ao resetar
- Histórico salvo no **LocalStorage**
- Remover itens do histórico
- Recarregar um tempo salvo e continuar a contagem
- Evita múltiplos timers simultâneos
- Ícones via Font Awesome
- Atualização a cada 10ms

---

## Tecnologias

| Tecnologia        | Descrição                         |
| ----------------- | --------------------------------- |
| React             | Biblioteca principal da interface |
| Javascript (ES6+) | Lógica e controle do timer        |
| Vite              | Build tool                        |
| Tailwind CSS      | Estilização                       |
| Font Awesome      | Ícones para UI                    |
| LocalStorage      | Persistência de histórico         |

---

## Estrutura de Pastas

src/
├─ components/
│ ├─ HeadTimer.jsx
│ ├─ RunTimer.jsx
│ ├─ ListTimer.jsx
│ ├─ ItemList.jsx
│ └─ Empty.jsx
├─ App.jsx
├─ TimerApp.jsx
└─ index.js

## Deploy

O projeto está publicado no GitHub Pages e pode ser acessado em:

https://caolodev.github.io/Timer/

## LocalStorage

Os registros ficam salvos como um array de objetos:
[
{
"id": 1732647230042,
"time": 345,
"hour": "14:32",
"date": "Jan 3"
}
]

## Autor

Edson Caolo
Email: caolo.dev@gmail.com
