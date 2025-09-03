# Deploy no Vercel - Queen of Hearts Tattoos

Este guia te ajudará a hospedar seu site no Vercel.

## Passo a Passo

### 1. Preparação dos Arquivos
✅ Já criado: `vercel.json` (configuração do deploy)
✅ Já criado: `.vercelignore` (arquivos a ignorar)

### 2. Conectar ao GitHub
1. Faça push do seu código para um repositório no GitHub
2. No Replit, vá em "Version Control" > "Connect to GitHub"
3. Autorize a conexão e faça push das suas alterações

### 3. Deploy no Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "New Project"
3. Conecte sua conta do GitHub
4. Selecione o repositório do seu projeto
5. Configure as seguintes opções:

**Framework Preset:** Other
**Build Command:** `npm run build`
**Output Directory:** `client/dist`
**Install Command:** `npm install`

### 4. Variáveis de Ambiente
No painel do Vercel, vá em Settings > Environment Variables e adicione:

```
NODE_ENV=production
DATABASE_URL=sua_url_do_banco_aqui
```

### 5. Deploy Automático
- Toda vez que você fizer push para o branch main, o Vercel fará deploy automático
- Você receberá uma URL como: `https://seu-projeto.vercel.app`

## Banco de Dados
Para produção, você precisará de um banco PostgreSQL externo:
- **Neon**: [neon.tech](https://neon.tech) (recomendado)
- **Supabase**: [supabase.com](https://supabase.com)
- **PlanetScale**: [planetscale.com](https://planetscale.com)

## Comandos Úteis

```bash
# Build local para testar
npm run build

# Verificar se tudo está funcionando
npm start
```

## Estrutura do Projeto
```
/
├── client/          # Frontend React
├── server/          # Backend Express
├── vercel.json      # Configuração Vercel
└── package.json     # Dependências
```

## Problemas Comuns

1. **Erro de build**: Verifique se todas as dependências estão instaladas
2. **API não funciona**: Confirme se as rotas estão configuradas corretamente
3. **Banco não conecta**: Verifique a variável DATABASE_URL

## Suporte
Se precisar de ajuda, verifique a documentação do Vercel: [vercel.com/docs](https://vercel.com/docs)