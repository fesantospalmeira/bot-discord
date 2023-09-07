# Bot de Rolagem de Dados Discord Inspirado em Ordem Paranormal!

Bem-vindo ao Bot de Rolagem de Dados Discord! Este é um bot simples que permite aos usuários rolar dados no formato XdY e visualizar seu histórico de rolagens.

## Como Usar

Para começar a usar o bot em seu servidor Discord, siga estas etapas:

1. **Convide o Bot**: Use o seguinte link para convidar o bot para o seu servidor: [Convite do Bot](https://discord.com/api/oauth2/authorize?client_id=1148944462727352320&permissions=8&scope=bot%20applications.commands).

2. **Comandos Disponíveis**:
   - `/rolardados`: Rola dados no formato XdY, onde X é o número de dados e Y é o número de lados em cada dado. Por exemplo: `/rolardados 2d6`.

## Instalação Local (Desenvolvimento)

Se você deseja hospedar e modificar o bot localmente para desenvolvimento, siga estas etapas:

1. Clone este repositório:
https://github.com/fesantospalmeira/bot-discord

2. Instale as dependências:
npm install

3. Configure as variáveis de ambiente em um arquivo `.env` com seu Token, Client ID e Guild ID:<br>
TOKEN=seu-token-do-bot<br>
CLIENT_ID=seu-client-id<br>
GUILD_ID=seu-guild-id

4. Faça o deploy dos comandos:
node deploy-commands.js

5. Inicie o bot em sua máquina local:
node index.js

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.

2. Crie uma branch para a sua contribuição:
git checkout -b minha-contribuicao

3. Faça as alterações e adicione as melhorias desejadas.

4. Faça um commit das suas alterações:
git commit -m "Adiciona nova funcionalidade"

5. Envie as alterações para o seu fork:
git push origin minha-contribuicao

6. Abra um Pull Request no repositório original.

Obrigado por usar o Bot de Rolagem de Dados Discord! Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.

