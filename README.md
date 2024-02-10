# Desafio Frontend - Smart Fit

![Smart Fit](./src/assets/images/logo.svg)

Repositório para a solução do desafio de [Front-end da Smart Fit](https://github.com/bioritmo/front-end-code-challenge-smartsite/tree/master). Nesse desafio, utilizei o framework Angular, versão 15.0.5, para desenvolver a aplicação.

## 📖 Desafio

A Smart Fit passou por várias mudanças durante a pandemia. Com isso, foi necessário desenvolver uma página para buscar unidades abertas/fechadas para consulta e reserva. 

Neste desafio, foi implementado as seguintes funcionalidades de acordo com as regras de negócio definidas:

### Funcionalidades
[x] Carrega unidades através do arquivo JSON [locations.json](https://test-frontend-developer.s3.amazonaws.com/data/locations.json) utilizando o método `GET`.
[x] Busca por todas as unidades.
[x] Busca por unidades com filtros.
[x] Previsão do número de resultados encontrados.
[x] Listagem das unidades encontradas após a busca.

### Regras de negócio
- Filtra unidades abertas ou fechadas.
- Filtra unidades por período de funcionamento.
- Exibe a mensagem "Nenhuma unidade encontrada" quando não há resultados.
- Valida e exibe os ícones corretos de acordo com o status da unidade.

## 🎨 Layout

O layout da aplicação foi baseado nos materiais disponibilizados, incluindo designs para dispositivos móveis e desktop, cores, imagens e fontes. A fidelidade ao layout proposto foi mantida, e a aplicação é responsiva para dispositivos móveis, tablets e desktops.

## ⚙️ Como Executar

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone este repositório:

```bash
  git clone https://github.com/thiiagolourenco/smartfit-frontend-challenge.git
  cd smartfit-frontend-challenge

```

2. Instale as dependências

```bash
  npm install
```

3. Inicie a aplicação

```bash
  npm run start
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Thiago Lourenço [Check out my LinkedIn](https://www.linkedin.com/in/thiiagolourenco)
