# Deploy Notes

## OG / Canonical
URL base ainda não definida. Substituir `{{URL_BASE}}` no `index.html` pela URL final da Vercel após o deploy.

Exemplo:
```
<link rel="canonical" href="https://seu-projeto.vercel.app" />
<meta property="og:image" content="https://seu-projeto.vercel.app/og-creative.jpg" />
```

## Assets
- creative-480.webp / creative-960.webp
- og-creative.jpg (1200x630)

## Checklist
- [ ] Substituir {{URL_BASE}}
- [ ] Confirmar build: npm run build
- [ ] Deploy na Vercel com Root Directory ./
