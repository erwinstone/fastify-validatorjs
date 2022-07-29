'use strict'

const fp = require('fastify-plugin')
const Validator = require('validatorjs')

function fastifyValidatorjs(fastify, _options, next) {
	Validator.setAttributeFormatter(function (attribute) {
		return attribute.replace(/_/g, ' ')
	})
	fastify.decorateRequest('validatorjs', Validator)
	next()
}

module.exports = fp(fastifyValidatorjs, {
	fastify: '4.x',
	name: 'fastify-validatorjs',
})
