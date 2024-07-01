ZLIB_PATH := /Users/saicoder/Desktop/projects/libtiff.js/zlib
ZLIB_INCLUDE_DIR := $(ZLIB_PATH)
ZLIB_LIBRARY := $(ZLIB_PATH)/libz.a

build:
	em++ -I./libtiff/libtiff -L./libtiff/libtiff -L$(ZLIB_PATH) ./clib/TIFFImage.cpp \
	-lembind -ltiff -ltiffxx -lz \
	--emit-tsd interface.d.ts \
	-o ./lib/generated/libtiff.js \
	-s EXPORTED_RUNTIME_METHODS='["FS"]' -sMODULARIZE=1 -sEXPORT_ES6=1 -sALLOW_MEMORY_GROWTH=1 -sNO_DISABLE_EXCEPTION_CATCHING

build-libtiff: libtiff
	cd libtiff && emcmake cmake . -DZLIB_INCLUDE_DIR=$(ZLIB_INCLUDE_DIR) -DZLIB_LIBRARY=$(ZLIB_LIBRARY) -Dzlib=ON && emmake make

all: build-libtiff build 