ZLIB_PATH := $(abspath ./zlib)
ZLIB_INCLUDE_DIR := $(ZLIB_PATH)
ZLIB_LIBRARY := $(ZLIB_PATH)/libz.a

build: build-libtiff
	em++ -I./libtiff/libtiff -L./libtiff/libtiff -L$(ZLIB_PATH) ./clib/TIFFImage.cpp \
	-lembind -ltiff -ltiffxx -lz \
	--emit-tsd interface.d.ts \
	-o ./lib/generated/libtiff.js \
	-s EXPORTED_RUNTIME_METHODS='["FS"]' -sMODULARIZE=1 -sEXPORT_ES6=1 -sALLOW_MEMORY_GROWTH=1 -sNO_DISABLE_EXCEPTION_CATCHING -sENVIRONMENT=web

build-libtiff: build-zlib
	cd libtiff && emcmake cmake . -DZLIB_INCLUDE_DIR=$(ZLIB_INCLUDE_DIR) -DZLIB_LIBRARY=$(ZLIB_LIBRARY) -Dzlib=ON && emmake make

build-zlib:
	cd zlib && emcmake cmake . && emmake make

build-typescript:
	bun run build
	
all: build-libtiff build 