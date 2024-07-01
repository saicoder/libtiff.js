#include "TIFFImage.h"

using namespace emscripten;

TIFFImage::TIFFImage(TIFF *tif) : tif(tif) {}

TIFFImage::~TIFFImage()
{
    if (tif)
    {
        TIFFClose(tif);
    }
}

const emscripten::val TIFFImage::readTag(const uint32_t tag, const TIFFImageTagType type)
{
    switch (type)
    {
    case TIFFImageTagType::BYTE_ARRAY:
    {
        uint8_t *data;
        uint16_t size;

        if (TIFFGetField(this->tif, tag, &size, &data))
        {
            return emscripten::val(emscripten::typed_memory_view(size, data));
        }
    }
    case TIFFImageTagType::UINT16:
    {
        uint16_t value;
        if (TIFFGetField(this->tif, tag, &value))
        {
            return emscripten::val(value);
        }
    }
    case TIFFImageTagType::UINT32:
    {
        uint32_t value;
        if (TIFFGetField(this->tif, tag, &value))
        {
            return emscripten::val(value);
        }
    }
    case TIFFImageTagType::UINT64:
    {
        uint64_t value;
        if (TIFFGetField(this->tif, tag, &value))
        {
            return emscripten::val(value);
        }
    }
    case TIFFImageTagType::FLOAT32:
    {
        float value;
        if (TIFFGetField(this->tif, tag, &value))
        {
            return emscripten::val(value);
        }
    }
    case TIFFImageTagType::FLOAT64:
    {
        double value;
        if (TIFFGetField(this->tif, tag, &value))
        {
            return emscripten::val(value);
        }
    }
    case TIFFImageTagType::ASCII:
    {
        char *value;
        if (!TIFFGetField(this->tif, tag, &value))
        {
            return emscripten::val::null();
        }

        return emscripten::val(std::string(value));
    }
    }

    return emscripten::val::null();
}

const bool TIFFImage::writeTag(const uint32_t tag, const TIFFImageTagType type, const emscripten::val &value)
{
    switch (type)
    {
    case TIFFImageTagType::BYTE_ARRAY:
    {
        std::vector<uint8_t> vec = emscripten::vecFromJSArray<uint8_t>(value);
        return TIFFSetField(this->tif, tag, vec.size(), vec.data()) == 1;
    }
    case TIFFImageTagType::UINT16:
    {
        uint16_t val = value.as<uint16_t>();
        return TIFFSetField(this->tif, tag, val) == 1;
    }
    case TIFFImageTagType::UINT32:
    {
        uint32_t val = value.as<uint32_t>();
        return TIFFSetField(this->tif, tag, val) == 1;
    }
    case TIFFImageTagType::UINT64:
    {
        uint64_t val = value.as<uint64_t>();
        return TIFFSetField(this->tif, tag, val) == 1;
    }
    case TIFFImageTagType::FLOAT32:
    {
        float val = value.as<float>();
        return TIFFSetField(this->tif, tag, val) == 1;
    }
    case TIFFImageTagType::FLOAT64:
    {
        double val = value.as<double>();
        return TIFFSetField(this->tif, tag, val) == 1;
    }
    case TIFFImageTagType::ASCII:
    {
        std::string val = value.as<std::string>();
        return TIFFSetField(this->tif, tag, val.c_str()) == 1;
    }
    default:
        return false;
    }
}

const emscripten::val TIFFImage::readImageData()
{
    uint32_t width, height;
    uint16_t samplesPerPixel;
    uint16_t bitsPerSample;
    uint16_t planarConfig;

    assert(TIFFGetField(tif, TIFFTAG_IMAGEWIDTH, &width));
    assert(TIFFGetField(tif, TIFFTAG_IMAGELENGTH, &height));
    assert(TIFFGetField(tif, TIFFTAG_SAMPLESPERPIXEL, &samplesPerPixel));
    assert(TIFFGetField(tif, TIFFTAG_BITSPERSAMPLE, &bitsPerSample));
    assert(TIFFGetField(tif, TIFFTAG_PLANARCONFIG, &planarConfig));

    size_t scanlineSize = TIFFScanlineSize(tif);
    std::vector<uint8_t> buffer(scanlineSize * height);

    for (uint32_t row = 0; row < height; ++row)
    {
        if (TIFFReadScanline(tif, buffer.data() + row * scanlineSize, row) != 1)
        {
            throw std::runtime_error("Could not read scanline");
        }
    }

    return emscripten::val(emscripten::typed_memory_view(buffer.size(), buffer.data()));
}

void TIFFImage::writeImageData(const emscripten::val &pixelData)
{
    std::vector<uint8_t> data = emscripten::vecFromJSArray<uint8_t>(pixelData);

    uint32_t width, height;
    uint16_t samplesPerPixel;
    uint16_t bitsPerSample;
    uint16_t planarConfig;

    assert(TIFFGetField(tif, TIFFTAG_IMAGEWIDTH, &width));
    assert(TIFFGetField(tif, TIFFTAG_IMAGELENGTH, &height));
    assert(TIFFGetField(tif, TIFFTAG_SAMPLESPERPIXEL, &samplesPerPixel));
    assert(TIFFGetField(tif, TIFFTAG_BITSPERSAMPLE, &bitsPerSample));
    assert(TIFFGetField(tif, TIFFTAG_PLANARCONFIG, &planarConfig));

    size_t scanlineSize = TIFFScanlineSize(tif);

    for (uint32_t row = 0; row < height; ++row)
    {
        if (TIFFWriteScanline(tif, data.data() + row * scanlineSize, row) != 1)
        {
            throw std::runtime_error("Could not write scanline");
        }
    }
}

void TIFFImage::flush()
{
    TIFFFlush(tif);
}

TIFFImage *TIFFImage::open(const std::string &name, const std::string &mode)
{
    TIFF *tif_handle = TIFFOpen(name.c_str(), mode.c_str());
    if (!tif_handle)
    {
        throw std::runtime_error("Error while opening the image");
    }

    return new TIFFImage(tif_handle);
}

EMSCRIPTEN_BINDINGS(my_module)
{
    enum_<TIFFImageTagType>("TIFFImageTagType")
        .value("BYTE_ARRAYA", BYTE_ARRAY)
        .value("ASCII", ASCII)
        .value("UINT16", UINT16)
        .value("UINT32", UINT32)
        .value("UINT64", UINT64)
        .value("FLOAT32", FLOAT32)
        .value("FLOAT64", FLOAT64);

    class_<TIFFImage>("TIFFImage")
        .function("readTag", &TIFFImage::readTag)
        .function("writeTag", &TIFFImage::writeTag)
        .function("readImageData", &TIFFImage::readImageData)
        .function("writeImageData", &TIFFImage::writeImageData)
        .function("flush", &TIFFImage::flush)
        .class_function("open", &TIFFImage::open, allow_raw_pointers());
}
