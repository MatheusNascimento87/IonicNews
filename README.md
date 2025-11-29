# IonicNews - Conversor de Moedas

## Descrição do Projeto
O **IonicNews** é um aplicativo móvel desenvolvido com Ionic e Angular, que permite a conversão de moedas em tempo real utilizando a API ExchangeRate. O projeto foi desenvolvido seguindo a metodologia ágil Scrum, com foco em colaboração, entregas incrementais e documentação detalhada.

---

## Equipe do Projeto

| Nome                                      | Matrícula  | Função              |
|-------------------------------------------|------------|---------------------|
| João Victor Nunes de Sousa                | 01702245   | Scrum Master        |
| Guilherme Crispim Borges de Toledo Menezes| 01731307   | Gerente de Configuração |
| Daniel Alencastro do Nascimento           | 01718146   | Documentador        |
| Cauã Veríssimo Tavares de Santana         | 01709715   | Desenvolvedor       |

---

## Metodologia Scrum

### Scrum Master
- **Estrutura Analítica do Projeto (EAP)**: Criada em formato de diagrama e apresentada em slides.
- **Cronograma (Gráfico de Gantt)**: Desenvolvido no Google Sheets e exportado em PDF.
- **Tarefas e Prazos**: Gerenciados no Trello com as seguintes pools:
  - TODO, PLANNED, DOING, WAITING, DONE, MEETINGS, CANCEL, REFERENCES.
- **Planilha de Custos**: Elaborada e exportada em PDF.
- **Apresentação**: Contém:
  - Capa, Equipe, Agenda, EAP, Atribuição de Tarefas, Custos, Cronograma, Resumo do Trello, Fluxo de Trabalho, Casos de Uso, Protótipos, Código, Demonstração, Lições Aprendidas, Agradecimentos e Referências.

### Gerente de Configuração
- **Repositório Git**: [IonicNews](https://github.com/ionicnews)
  - Público, com todos os membros.
  - Estrutura de pastas:
    - `ionicnewsapi/` - API (se implementada).
    - `ionicnewsapp/` - Aplicativo Ionic.
    - `ionicnewsdocs/` - Documentação:
      - `models/` - Diagramas UML, ER, Mockups.
      - `sql/` - Scripts SQL.
      - `usecase/` - Casos de Uso.
  - Arquivos base:
    - `.gitignore` - Configurado para Node.js.
    - `CONTRIBUTING.md` - Guia de contribuição.
    - `LICENSE` - Creative Commons.
    - `README.md` - Documentação principal.
    - `TODO.md` - Lista de tarefas pendentes.
- **Fluxo de Trabalho**:
  - Branches por semana/desenvolvedor.
  - Merge para `main` após revisão.
  - Tutorial de Git exportado em PDF.

### Documentadores
- **Casos de Uso**:
  - Criados em formato de tabela com fluxos principais, alternativos e exceções.
  - Exportados em PDF.
- **Protótipos**:
  - Desenvolvidos no Canva e exportados em PNG.
- **Diagramas UML e ER**:
  - Criados no Astah e MySQL Workbench, exportados em PNG.

### Desenvolvedores
- **Codificação**:
  - Implementação do aplicativo Ionic com suporte a conversão de moedas.
  - Funcionalidades:
    - Seleção de moedas.
    - Conversão em tempo real.
    - Exibição do resultado com a moeda convertida.
  - Testes e validação.

---

## Como Baixar o Repositório

```bash
# Clone o repositório
git clone https://github.com/ionicnews/ionicnews.git

# Acesse a pasta do projeto
cd ionicnews

# Instale as dependências
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
- João Victor Nunes de Sousa
- Guilherme Crispim Borges de Toledo Menezes
- Daniel Alencastro do Nascimento
- Cauã Veríssimo Tavares de Santana

---

## Licença
Este projeto está licenciado sob a licença Creative Commons.

---