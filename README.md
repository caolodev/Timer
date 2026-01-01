TimerApp — React

Aplicação simples e eficiente de cronômetro construída com React, permitindo controlar o tempo em minutos, segundos e centésimos.
Conta com funcionalidades para iniciar, pausar, resetar, carregar tempos anteriores, e armazenar o histórico localmente através do LocalStorage.

Funcionalidades

Exibir tempo no formato MM:SS:CS (centésimos)

Iniciar o timer

Pausar o timer

Resetar o timer

Salvar registro no histórico ao resetar

Histórico salvo no localStorage

Remover itens do histórico

Recarregar um tempo salvo e continuar a contagem

Evita múltiplos timers simultâneos

Ícones via Font Awesome

⚡ Atualização a cada 10ms

🛠️ Tecnologias
Tecnologia Descrição
React Biblioteca principal da interface
Javascript (ES6+) Lógica e controle do timer
Tailwind CSS Estilização (opcional se usado)
Font Awesome Ícones para UI
LocalStorage Persistência de histórico
Estrutura de Pastas
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

Instalação e Execução

# Clonar o repositório

git clone https://github.com/usuario/TimerApp.git

# Entrar na pasta

cd TimerApp

# Instalar dependências

npm install

# Rodar o projeto

npm start

Instalação do FontAwesome (se ainda não tiver)
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/react-fontawesome
npm install @fortawesome/free-solid-svg-icons

Exemplo de uso:

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon={faPlay} />

📸 Demonstração (Prints)

(Adicione imagens aqui se quiser)

/assets/screenshot-01.png
/assets/screenshot-02.png

Como funciona o LocalStorage

Os registros ficam salvos como um array de objetos:

[
{
"id": 1732647230042,
"time": 345,
"hour": "14:32",
"date": "Jan 3"
}
]

Lógica do Timer (Resumo)

Incremento acontece a cada 10ms

Cada incremento representa 1 centésimo

Conversão final:

minutes = Math.floor(cs / 6000)
seconds = Math.floor((cs % 6000) / 100)
centiseconds = cs % 100

Possíveis Melhorias Futuras

Exportar histórico em .csv

Dark mode

Sons ao iniciar/pausar

Transições animadas na UI

Versão mobile com PWA

Autor
Email: caolo.dev@gmail.com
Link: https://caolodev.github.io/Timer/
