import { TIFFImage, TagName, initRuntime } from '../../lib'

await initRuntime()

const width = 500
const height = 500

// Generate Example Pixel Data (RGB)
const exampleImageData = () => {
  const data = new Uint8Array(width * height * 3)
  const cX = width / 2
  const cY = height / 2

  let dataIndex = 0
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dist =
        Math.sqrt(Math.pow(cX - x, 2) + Math.pow(cY - y, 2)) / (width / 2)

      const r = dist * 255
      const b = 255 - dist * 125
      const g = dist * 125

      // Set RGB values in the data array
      data[dataIndex++] = r
      data[dataIndex++] = g
      data[dataIndex++] = b
    }
  }

  return data
}

// Create TIFF Image
const createImage = async () => {
  const image = await TIFFImage.new()

  image.writeTag(TagName.IMAGEWIDTH, 'UINT16', width)
  image.writeTag(TagName.IMAGELENGTH, 'UINT16', height)
  image.writeTag(TagName.SAMPLESPERPIXEL, 'UINT16', 3) // rgba
  image.writeTag(TagName.BITSPERSAMPLE, 'UINT16', 8) // 8 bits per channel
  image.writeTag(TagName.PLANARCONFIG, 'UINT16', 1) // RRGGBB
  image.writeTag(TagName.PHOTOMETRIC, 'UINT16', 2) // RGB Image
  image.writeTag(TagName.COMPRESSION, 'UINT16', 8) // LZW

  image.writeImageData(exampleImageData())

  const tiffData = image.getTIFFData()
  Bun.write(import.meta.dir + '/generated.tiff', tiffData)
}

await createImage()
