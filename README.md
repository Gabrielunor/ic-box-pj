# INTERCONNECT BOX PJ

## Dependencias Mínimas

```
"dependencies": {
    "@fontsource/inter": "^5.0.16",
    "@hookform/resolvers": "^3.3.4",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-tabs": "^1.0.4",
    "axios": "^1.6.5",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "cpf-cnpj-validator": "^1.0.3",
    "html2canvas": "^1.4.1",
    "jspdf": "^2.5.1",
    "moment": "^2.30.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.49.3",
    "react-icons": "^5.0.1",
    "react-input-mask": "^2.0.4",
    "react-router-dom": "^6.21.2",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.22.4",
    "zustand": "^4.4.7"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.4.5",
    "@testing-library/react": "^14.1.2",
    "@types/html2canvas": "^1.0.0",
    "@types/node": "^20.11.2",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@types/react-input-mask": "^3.0.5",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "@vitest/coverage-istanbul": "^1.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "jest-sonar-reporter": "^2.0.0",
    "jsdom": "^23.2.0",
    "postcss": "^8.4.33",
    "sonarqube-scanner": "^3.3.0",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2",
    "vite": "^5.0.8",
    "vitest": "^1.2.0",
    "vitest-sonar-reporter": "^1.0.0"
  },
```

## Node.JS Version

```
>= 18
```

## Rodando localmente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env.local, na raiz do projeto

`VITE_APIGEE_URL=https://api-np.boavistascpc.com.br/interconnect-dev/pj/report/default`

`VITE_APIGEE_CLIENT=sop2NCZyPYzyRAS1PetQE43icdEeIZVTIUjNTShqvS9tkoAv`

`VITE_APIGEE_SECRET=nQ2CeeMkyTojoBYMrJvrwt1AcKmRuyawKT14xMGw7NVJhiyJAOIeI9QNrDrWxJ6o`

Clone o projeto

```bash
  git clone https://gitlab.bvsnet.com.br/credit-services/icbox/front-icbox-pj
```

Entre no diretório do projeto

```bash
  cd front-icbox-pj
```

Instale as dependências

```bash
  npm install (ou o gerenciador de pacotes de sua preferência)
```

Inicie o servidor

```bash
  npm run start (ou o gerenciador de pacotes de sua preferência)
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test (ou o gerenciador de pacotes de sua preferência)
```

# Gerando o Token

Para gerar o token, baixe a collection do postman em https://gitlab.bvsnet.com.br/credit-services/icbox/front-icbox-pj/-/raw/development/collection/INSTROSPECT.postman_collection.json

Gere o TOKEN DE USUÁRIO conforme imagem abaixo:

![Token](https://gitlab.bvsnet.com.br/credit-services/icbox/front-icbox-pj/-/raw/development/readme/token.png)

## Demonstração

Com o projeto rodando, acesse http://localhost:5173/front-icbox-pj/ e insira a querystring ?auth_token=(token copiado anteriormente), conforme imagem abaixo:

![Produto](https://gitlab.bvsnet.com.br/credit-services/icbox/front-icbox-pj/-/raw/development/readme/tela_pj.png)

## Abertura de GMUD

- Utilizar o IC "???"
