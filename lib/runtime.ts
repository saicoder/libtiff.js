import initLibTiff from './generated/libtiff'
import type { MainModule } from './generated/interface'

let runtime: MainModule | undefined
let listeners: Array<(runtime: MainModule) => void> = []

export const initRuntime = async (args: any): Promise<MainModule> => {
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
