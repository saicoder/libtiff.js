import { $ } from 'bun'

const run = async () => {
  const result = await Bun.build({
    entrypoints: ['./lib/index.ts'],
    outdir: './dist',
  })

  console.log(result)
  await $`cp ./lib/generated/libtiff.wasm ./dist/libtiff.wasm`

  process.exit(result.success ? 0 : 1)
}

run()
