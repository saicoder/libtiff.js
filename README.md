# libtiff.js

This is port of C LibTIFF to JavaScript using Emscripten and WebAssembly.
I created this library because I had issues with editing complex multi-channel TIFFs with custom tags like from Photoshop using other libraries. 
Most of the libraries are focused on decoding image, not encoding them with different compressions.

Aim of this library is to be low-level and to work in browser and on server. For hight level image decoding you can use UTIF.js


Example of creating image:

```typescript
const image = await TIFF.new()

image.writeTag(TagName.IMAGEWIDTH, 'UINT16', width)
image.writeTag(TagName.IMAGELENGTH, 'UINT16', height)
image.writeTag(TagName.SAMPLESPERPIXEL, 'UINT16', 3) // rgb
image.writeTag(TagName.BITSPERSAMPLE, 'UINT16', 8) // 8 bits per channel
image.writeTag(TagName.PLANARCONFIG, 'UINT16', 1) // RRGGBB
image.writeTag(TagName.PHOTOMETRIC, 'UINT16', 2) // RGB Image
image.writeTag(TagName.COMPRESSION, 'UINT16', 8) // LZW

image.writeImageData(exampleImageData) // exampleImageData = Uint8array of pixel data RGB

const tiffData = image.getTIFFData() // Uint8Array
Bun.write('./generated.tiff', tiffData)
```

Check examples directory for more examples.


## Building lib
```bash
# Make sure that you have build tools 
# Make sure that you have https://emscripten.org/ installed and setup
# Clone all submodules

# Run:
make
```


