import initLibTiff from './generated/libtiff'
import type { MainModule } from './generated/interface'

let runtime: MainModule | undefined
let listeners: Array<(runtime: MainModule) => void> = []

export interface RuntimeArgs {
  wasmBinary?: ArrayBuffer
  wasmMemory?: WebAssembly.Memory
  onRuntimeInitialized?: () => void
  locateFile?: () => string
  onAbort?: () => void
  print?: (text: string) => void
  printErr?: (text: string) => void
}

export const getRuntime = () => {
  if (!runtime) throw new Error('Runtime not initialized')
  return runtime
}

export const initRuntime = async (args?: RuntimeArgs): Promise<MainModule> => {
  if (runtime) return runtime

  if (listeners.length === 0) {
    initLibTiff(args).then((_runtime) => {
      runtime = _runtime
      listeners.forEach((listener) => listener(_runtime))
      listeners = []
    })
  }

  return new Promise<MainModule>((resolve) => {
    listeners.push(resolve)
  })
}
