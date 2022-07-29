# fastify-validatorjs

Fastify validation library inspired by Laravel's Validator

## Usage/Examples

```javascript
import fastify from 'fastify'
import fastifyPost from 'fastify-post'
import fastifyValidatorjs from 'fastify-validatorjs'

const app = fastify()
app.register(fastifyPost)
app.register(fastifyValidatorjs)

app.post('/', async (req) => {
  const validation = new req.validatorjs(req.body, {
    username: 'required|min:2',
    password: 'required|min:4',
  })
  if (validation.fails()) {
    return validation.errors.all()
  }
  return req.body
})

app.listen({ port: 8000 }, (err, address) => {
  if (err) throw err
  console.log(`server listening on ${address}`)
})
```

## API Reference

Read more at [validatorjs](https://github.com/mikeerickson/validatorjs)

## License

[MIT](https://github.com/erwinstone/fastify-validatorjs/blob/main/LICENSE)
