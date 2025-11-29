# IonicNews – Conversor de Moedas

## Descrição do Projeto
O **IonicNews** é um aplicativo mobile desenvolvido com **Ionic e Angular**, projetado para realizar conversão de moedas utilizando dados atualizados da API ExchangeRate. Todo o desenvolvimento foi conduzido seguindo práticas da metodologia ágil **Scrum**, priorizando organização, transparência e entregas incrementais.

---

## Equipe do Projeto

| Nome                                      | Matrícula | Função                     |
|-------------------------------------------|-----------|----------------------------|
| Gabriel Antônio de Araújo e Sá            | 01672540  | Scrum Master               |
| Clailson dos Santos Silva                 | 01689159  | Gerente de Configuração    |
| Luiz Eduardo de França Rodrigues          | 01680699  | Documentador               |
| Matheus Pereira do Nascimento             | 01693563  | Desenvolvedor              |

---

## Metodologia Scrum

### Scrum Master
- Desenvolveu a **EAP (Estrutura Analítica do Projeto)** em formato visual e estruturado.
- Criou o **cronograma (Gráfico de Gantt)** no Google Sheets (exportado em PDF).
- Organizou tarefas no Trello nas colunas:
  - TODO, PLANNED, DOING, WAITING, DONE, MEETINGS, CANCEL, REFERENCES.
- Elaborou a **planilha de custos** do projeto.
- Responsável pela apresentação final contendo:
  - Equipe, agenda, EAP, tarefas, custos, cronograma, fluxo de trabalho, casos de uso, protótipos, código, demonstração e conclusões.

### Gerente de Configuração
- Gerenciou o repositório Git **IonicNews**.
- Estrutura definida:
  - `ionicnewsapi/` – API (quando aplicável).
  - `ionicnewsapp/` – Aplicativo Ionic.
  - `ionicnewsdocs/` – Documentação geral:
    - `models/` – Mockups, diagramas UML/ER.
    - `sql/` – Scripts do banco.
    - `usecase/` – Casos de Uso.
- Arquivos principais:
  - `.gitignore`
  - `README.md`
  - `LICENSE`
  - `CONTRIBUTING.md`
  - `TODO.md`
- Fluxo Git:
  - Branches por semana e por desenvolvedor.
  - Merges na branch `main` somente após revisão.
  - Criou tutorial de Git (PDF).

### Documentadores
- Elaboraram **Casos de Uso** detalhados (fluxo principal, alternativo e exceções).
- Criaram **protótipos** no Canva (exportados em PNG).
- Produziram **diagramas UML e ER** via Astah e MySQL Workbench.

### Desenvolvedores
- Implementaram o aplicativo Ionic.
- Funcionalidades principais:
  - Seleção de moeda de origem e destino.
  - Conversão usando a API com valores atualizados.
  - Exibição clara do resultado.
- Realizaram testes e validação das funções.

---

## Como Baixar o Repositório

```bash
git clone https://github.com/ionicnews/ionicnews.git
cd ionicnews
npm install
```

---

## Pré-requisitos
- Node.js
- Angular CLI
- Ionic CLI

---

## Contribuindo
1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade:
   ```bash
   git checkout -b feature/nome-da-funcionalidade
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Descrição das alterações"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin feature/nome-da-funcionalidade
   ```
5. Abra um Pull Request.

---

## Autores
- Matheus Pereira do Nascimento
- Gabriel Antônio de Araújo e Sá 
- Luiz Eduardo de França Rodrigues 
- Clailson dos Santos Silva

---

## Licença
Este projeto está licenciado sob a licença Creative Commons.

---
