#pragma once

#include <tiffio.h>
#include <emscripten/bind.h>

enum TIFFImageTagType : uint32_t
{
    BYTE_ARRAY = 1,
    ASCII = 2,

    UINT16 = 3,
    UINT32 = 4,
    UINT64 = 5,

    FLOAT32 = 6,
    FLOAT64 = 7,
};

class TIFFImage
{
private:
    TIFF *tif;
    TIFFImage(TIFF *tif);

public:
    ~TIFFImage();
    const emscripten::val readTag(const uint32_t tagId, const TIFFImageTagType type);
    const bool writeTag(const uint32_t tagId, const TIFFImageTagType type, const emscripten::val &value);

    const emscripten::val readImageData();
    void writeImageData(const emscripten::val &pixelData);
    void flush();

    static TIFFImage *open(const std::string &name, const std::string &mode);
};
