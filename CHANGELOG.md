# Changelog — ACDX Teste

## [2026-03-17] — Redirecionamento pós-cadastro

### Descrição

Implementação de feedback visual e redirecionamento automático para a tela de login após o cadastro ser concluído com sucesso (HTTP 200).

---

### Arquivos modificados

| Arquivo | Tipo de alteração |
|---|---|
| `src/app/auth/signup/signup.page.ts` | Lógica de redirecionamento |
| `src/app/auth/signup/signup.page.html` | Feedback visual condicional |
| `src/app/auth/signup/signup.page.scss` | Estilos de sucesso/erro |

---

### Detalhes das alterações

#### `signup.page.ts`

- **Importação do `Router`** — necessário para navegação programática via `this.router.navigate()`.
- **Novo signal `signupSuccess`** — controla se a resposta do servidor foi sucesso ou erro, permitindo diferenciar a mensagem exibida.
- **Redirecionamento com `setTimeout`** — após o cadastro ser concluído (status 200), aguarda **3 segundos** e redireciona automaticamente para `/login`.
- **Mensagem atualizada no sucesso** — exibe a mensagem retornada pelo backend seguida de _"Redirecionando para o login..."_.
- **Tratamento de erro** — define `signupSuccess` como `false` e exibe mensagem de erro.

```typescript
// Trecho principal adicionado no callback de sucesso:
this.signupSuccess.set(true);
this.serverMessage.set(
  `${response} Redirecionando para o login...`
);

setTimeout(() => {
  this.router.navigate(['/login']);
}, 3000);
```

#### `signup.page.html`

- O parágrafo de mensagem agora usa `[ngClass]` para aplicar classes CSS condicionais:
  - `success-message` → quando `signupSuccess()` é `true`
  - `error-message` → quando `signupSuccess()` é `false`

```html
<p
  class="server-message"
  [ngClass]="{ 'success-message': signupSuccess(), 'error-message': !signupSuccess() }"
  *ngIf="serverMessage()"
>
  {{ serverMessage() }}
</p>
```

#### `signup.page.scss`

- **`.success-message`** — texto verde (`#27ae60`) com fundo esverdeado suave e borda.
- **`.error-message`** — texto vermelho (`#c0392b`) com fundo avermelhado suave e borda.
- **`@keyframes fadeIn`** — animação de entrada suave (opacidade + deslocamento vertical).

---

### Fluxo de uso

1. Usuário preenche **Nome**, **Email** e **Senha** e clica em **"Cadastrar"**.
2. Se o servidor retorna **status 200**:
   - Aparece uma mensagem **verde**: _"Cadastro de Usuário realizado com sucesso Redirecionando para o login..."_
   - Após **3 segundos**, a página navega automaticamente para `/login`.
3. Se o servidor retorna **erro**:
   - Aparece uma mensagem **vermelha**: _"Não foi possível concluir o cadastro."_

---

## [2026-03-17] — Correção: resposta do backend tratada como erro

### Problema

Mesmo com o cadastro sendo salvo no banco de dados (HTTP 200), o frontend exibia a mensagem de erro _"Não foi possível concluir o cadastro"_.

**Causa raiz:** O backend retorna `ResponseEntity<String>` (texto puro), mas o `HttpClient` do Angular tentava fazer **parse JSON** da resposta (porque esperava um objeto `SignupResponse`). O parse falhava e o Angular disparava o callback de `error`.

---

### Arquivos modificados

| Arquivo | Tipo de alteração |
|---|---|
| `src/app/core/api/auth-api.service.ts` | Tipo de resposta da requisição |
| `src/app/auth/signup/signup.page.ts` | Mensagem de sucesso |

---

### Detalhes das correções

#### `auth-api.service.ts`

- O método `signup()` agora retorna `Observable<string>` em vez de `Observable<SignupResponse>`.
- Adicionado `responseType: 'text'` para instruir o `HttpClient` a **não fazer parse JSON** da resposta.

```typescript
// Antes (causava erro):
signup(payload: SignupRequest): Observable<SignupResponse> {
  return this.http.post<SignupResponse>(`${this.baseUrl}/auth/signup`, payload);
}

// Depois (corrigido):
signup(payload: SignupRequest): Observable<string> {
  return this.http.post(`${this.baseUrl}/auth/signup`, payload, {
    responseType: 'text',
  });
}
```

#### `signup.page.ts`

- A mensagem de sucesso agora usa a string retornada pelo backend diretamente em vez de `response.nome`.

```diff
- `Cadastro concluído! Bem-vindo, ${response.nome}. Redirecionando para o login...`
+ `${response} Redirecionando para o login...`
```
