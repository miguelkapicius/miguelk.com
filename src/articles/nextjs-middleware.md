---
title: "Usando Middleware no NextJS"
description: "Explicando a lógica por trás de um middleware e a importância dele em uma aplicação com autenticação"
image: "/static/img/posts/middleware-thumb.jpg"
date: "2025-01-30"
tags: ["NextJs", "TypeScript", "Código"]
---

# Utilizando Middleware no Next.js para Gerenciar Autenticação e Redirecionamentos

O Next.js é um framework popular para desenvolvimento de aplicações web com React, oferecendo uma variedade de funcionalidades poderosas, como renderização do lado do servidor (SSR), geração estática (SSG) e roteamento avançado. Uma dessas funcionalidades é o **middleware**, que permite interceptar e manipular requisições antes que elas cheguem às páginas ou APIs.

Neste artigo, vamos explorar como usar o middleware no Next.js para gerenciar os redirecionamentos em uma aplicação, com base em um exemplo prático.

## O que é Middleware?

Middleware é uma função ou camada de software que intercepta requisições HTTP antes que elas cheguem ao seu destino final (como uma página ou API). Ele pode ser usado para realizar diversas tarefas, como:

-   Verificar autenticação
-   Redirecionar usuários
-   Modificar cabeçalhos de requisição
-   Registrar logs
-   Entre outras

No Next.js, o middleware é executado no **edge runtime**, o que significa que ele roda em servidores distribuídos globalmente, próximos aos usuários, garantindo baixa latência.

## Exemplo Prático: Middleware para Autenticação

Vamos analisar um exemplo de middleware que gerencia autenticação e redirecionamentos em uma aplicação Next.js. O código abaixo demonstra como isso pode ser implementado:

Começamos criando o arquivo **middleware.ts** direto na pasta **src**

```
src/middleware.ts
```

### Redirecionamento em rotas públicas

```typescript
import {
    type MiddlewareConfig,
    type NextRequest,
    NextResponse,
} from "next/server";

const publicRoutes = [
    { path: "/sign-in", whenAuthenticated: "redirect" },
    { path: "/register", whenAuthenticated: "redirect" },
    { path: "/pricing", whenAuthenticated: "next" },
] as const;
```

O array de objetos com a propriedade **whenAuthenticated** serve justamente para, por exemplo, um usuário que já está autenticado não conseguir acessar a página de **login** ou de **register** novamente achando que não está mais logado, porém na página **pricing** o usuário mesmo autenticado pode querer acessar, então não há motivos para redirecioná-lo, então atribuimos o valor "next" a propriedade.

### Criando a função middleware

```typescript
const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/sign-in";

export function middleware(request: NextRequest): NextResponse | undefined {
    const path = request.nextUrl.pathname;
    const publicRoute = publicRoutes.find((route) => route.path === path);
    const authToken = request.cookies.get("token");

    if (!authToken && publicRoute) {
        return NextResponse.next();
    }

    if (!authToken && !publicRoute) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
        return NextResponse.redirect(redirectUrl);
    }

    if (
        authToken &&
        publicRoute &&
        publicRoute.whenAuthenticated === "redirect"
    ) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = "/";
        return NextResponse.redirect(redirectUrl);
    }

    if (authToken && !publicRoute) {
        // Lógica para rotas privadas
    }
}
```

A função **middleware** tem o papel de verificar qual o estado atual do usuário **(se está autenticado ou não)** e após isso dependendo da rota que ele está tentando acessar, ou seja, se ele está autenticado e quer acessar uma rota pública ou privada, ou não está autenticado e quer acessar uma rota privada, **ele irá cair nas condicionais e ser redirecionado ou não.**

Lembrando que o middleware é **executado sempre que alguma rota da aplicação é chamada**, então **não podemos realizar nenhum tipo de validação que depende de meios externos como banco de dados e api**, caso contrário nossa aplicação ficará lenta, então todo trabalho de verificar se o usuário está logado ou não é dado ao **reconhecer se existe um token nos cookies ou localstorage**, jamais podemos verificar a validade desse token direto no arquivo **middleware.ts**

### Definindo o matcher

```typescript
export const config: MiddlewareConfig = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt)._)",
    ],
};
```

Por fim podemos definir nosso **matcher**, ele será responsável por **ignorar a execução do middleware** caso a rota envolva algum dos item descritos na **string**, onde podemos colocar **favicon, sitemap, api, imagens e etc...**
