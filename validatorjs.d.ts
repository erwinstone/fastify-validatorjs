import { FastifyPlugin } from 'fastify'
import Validator from 'validatorjs'

declare const fastifyValidatorjs: FastifyPlugin<>

export default fastifyValidatorjs

declare module 'fastify' {
	interface FastifyRequest {
		validatorjs: typeof Validator
	}
}
