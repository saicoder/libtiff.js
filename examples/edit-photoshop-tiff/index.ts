import { TagName, TIFF } from '../../lib'

const array = await Bun.file(import.meta.dir + '/input.tiff').arrayBuffer()
const image = await TIFF.open(array)

const channels = image.readTag(TagName.SAMPLESPERPIXEL, 'UINT16')

console.log({
  width: image.width,
  height: image.height,
  channels,
})

const data = image.readImageData()

// invert last channel
for (let i = 0; i < data.length; i += channels) {
  data[i + channels - 1] = 255 - data[i + channels - 1]
}

image.writeTag(TagName.COMPRESSION, 'UINT16', 1)
image.writeImageData(data)

const result = image.getTIFFData()
await Bun.write(import.meta.dir + '/generated.tiff', result)
