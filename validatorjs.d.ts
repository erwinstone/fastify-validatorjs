import { FastifyPluginCallback } from 'fastify'
import Validator from 'validatorjs'

declare const fastifyValidatorjs: FastifyPluginCallback

export default fastifyValidatorjs

declare module 'fastify' {
	interface FastifyRequest {
		validatorjs: typeof Validator
	}
}
