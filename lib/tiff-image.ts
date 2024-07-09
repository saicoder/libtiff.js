import type { MainModule, TIFFImage as CTIFFImage } from './generated/interface'
import { getRuntime } from './runtime'
import { TagName } from './tag-names'
import { TagType, type ReturnTypeForTag, type TagTypeKeys } from './tag-types'

export class TIFFImage {
  private tif: CTIFFImage

  constructor(
    public readonly runtime: MainModule,
    public readonly fileHandle: string,
    readonly mode: string
  ) {
    this.tif = runtime.TIFFImage.open(fileHandle, mode)
  }

  // === Standard functions for reading and writhing Tags
  public readTag<T extends TagTypeKeys>(
    tag: TagName,
    type: T
  ): ReturnTypeForTag<T> {
    const tagValue = { value: TagType[type].value }

    return this.tif.readTag(tag, tagValue) as ReturnTypeForTag<T>
  }

  public writeTag<T extends TagTypeKeys>(
    tag: TagName,
    type: T,
    value: ReturnTypeForTag<T>
  ): void {
    const tagValue = { value: TagType[type].value }

    this.tif.writeTag(tag, tagValue, value)
  }

  // === Normal setters and getters ===
  public get width() {
    return this.readTag(TagName.IMAGEWIDTH, 'UINT16')
  }

  public get height(): number {
    return this.readTag(TagName.IMAGELENGTH, 'UINT16')
  }

  public get samplesPerPixel(): number {
    return this.readTag(TagName.SAMPLESPERPIXEL, 'UINT16')
  }

  public get bitsPerSample(): number {
    return this.readTag(TagName.BITSPERSAMPLE, 'UINT16')
  }

  // === Pixel Methods ===
  public readImageData(): Uint8Array {
    return this.tif.readImageData()
  }

  public writeImageData(data: Uint8Array) {
    this.tif.writeImageData(data)
  }

  // === Saving, Destroying ===
  public getTIFFData() {
    this.tif.flush()
    return this.runtime.FS.readFile(this.fileHandle) as Uint8Array
  }

  public close() {
    this.runtime.FS.unlink(this.fileHandle)
    this.tif.delete()
  }

  // == Static Methods ===
  public static async open(data: Uint8Array | ArrayBuffer) {
    const runtime = getRuntime()
    const id = `${crypto.randomUUID()}.tif`

    const buffer = data instanceof Uint8Array ? data : new Uint8Array(data)
    await runtime.FS.writeFile(id, new Uint8Array(buffer))

    return new TIFFImage(runtime, id, 'r+')
  }

  public static async new() {
    const runtime = getRuntime()
    const id = `${crypto.randomUUID()}.tif`

    const tif = new TIFFImage(runtime, id, 'w')

    return tif
  }
}
