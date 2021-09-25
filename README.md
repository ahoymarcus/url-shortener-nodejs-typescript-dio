# Construindo Encurtador de URL


O projeto serve como prática para o desenvolvimento de uma aplicação para encurtar URL. Trata-se de uma API construída com o Node-JS, o Typescript e o banco de dados MongoDB[^1].




<br />


Dependências:

- Typescript
- ExpressJS
- Mongoose
- Shortid
- @types/express
- @types/mongoose
- @types/shortid
- @hasezoey/typegoose
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- Cors
- Eslint
- Tslint
- Nodemon





<br />

### Primeiro teste da aplicação Encurtadora de URL:      
![Primeiro testa da aplicação Encurtadora de URL](/public/images/teste-da-app-encurtadora-de-url.png)



<br />

### Testando a função 'redirect' da API usando o código hash encurtado e visualizando a chamada de retorno com a URL original:      
![Testando a função 'redirect' da API usando o código hash encurtado e visualizando a chamada de retorno com a URL original](/public/images/teste-da-função-de-redirecionamento-da-url-buscada.png)



<br />

### Fazendo a integração da aplicação com o banco de dados MongoDB:      
![Fazendo a integração da aplicação com o banco de dados MongoDB](/public/images/fazendo-a-integração-da-aplicação-com-o-mongodb.png)




<br />

### Buscando no banco de dados com hash inválido:       
![Buscando no banco de dados com hash inválido](/public/images/buscando-por-um-hash-inválido.png)



<br />

### Buscando no banco de dados com um hash válido e sendo redirecionado para o endereço da URL original:        
![Buscando no banco de dados com um hash válido e sendo redirecionado para o endereço da URL original](/public/images/encontrando-um-hash-no-database-e-redirecionando-a-requisição-para-a-url-original.png)



<br />





<br />

[^1] Orientação da professora Alexia Pereira da Digital Innovation One.






