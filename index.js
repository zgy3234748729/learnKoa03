import Koa from 'koa'

const server = new Koa();

server.use((ctx) => {
    ctx.body = 'hello world';
})

server.listen(8080, '0.0.0.0', () => {
    
});