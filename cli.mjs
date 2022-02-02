#!/usr/bin/env node

import fs from 'fs'

import getopts from 'getopts'
import open from 'open'

import { URL_BASE } from './lib/consts.mjs'

import encode from './lib/encode.mjs'
import decode from './lib/decode.mjs'
import getHashFromUrl from './lib/getHashFromUrl.mjs'
import createUrlFromHash from './lib/createUrlFromHash.mjs'

const opts = getopts(process.argv.slice(2), {
  boolean: ['decode', 'no-open', 'help'],
  string: ['file'],
  alias: {
    decode: ['d'],
    noOpen: ['n', 'no-open'],
    file: ['f'],
    help: ['h'],
  },
})

const printHelp = () => {
  const packageJson = JSON.parse(
    fs.readFileSync(new URL('./package.json', import.meta.url)).toString()
  )
  process.stdout.write(`${packageJson.name} ${packageJson.version}\n\n`)
  const readme = fs
    .readFileSync(new URL('./README.md', import.meta.url))
    .toString()
  const usageSection = readme
    .match(/^(?:Usage\n---+)$(.*?)(?:[^\n]*\n---+)/ms)[1]
    .replace(/^```[a-z]*$/gm, '')
    .trim()
  process.stdout.write(`${usageSection}\n`)
}

const readStdIn = () =>
  new Promise((resolve, reject) => {
    let data = ''
    process.stdin.on('readable', () => {
      const chunk = process.stdin.read()
      if (chunk !== null) {
        data += chunk
      }
    })
    process.stdin.on('error', (error) => {
      reject(error)
    })
    process.stdin.on('end', () => {
      resolve(data)
    })
  })

const normaliseInput = (rawInput) => {
  if (!rawInput) {
    return null
  }

  const input = getHashFromUrl(rawInput) || rawInput

  return input?.trimEnd()
}

const getInput = async () => {
  let input
  if (opts.file) {
    input = fs.readFileSync(opts.file).toString()
  } else {
    ;[input] = opts._
  }
  if (!input && !process.stdin.isTTY) {
    // FIXME
    input = await readStdIn()
  }

  return input
}

const processInput = (input) => {
  const func = opts.decode ? decode : encode
  return func(input).trimEnd()
}

const presentResult = (rawResult) => {
  let result = rawResult
  if (!opts.decode) {
    result = createUrlFromHash(result).toString()
  }

  if (!opts.decode && !opts.noOpen) {
    open(result)
  } else {
    process.stdout.write(`${result}\n`)
  }
}

const main = async () => {
  const input = normaliseInput(await getInput())
  if (opts.help || !input) {
    printHelp()
  } else {
    const result = processInput(input)
    presentResult(result)
  }
}

main().catch((error) => {
  process.stderr.write(`${error.stack}\n`)
  process.exit(1)
})
