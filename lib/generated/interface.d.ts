// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
declare namespace RuntimeExports {
    namespace FS {
        export const root: any;
        export const mounts: any[];
        export const devices: {};
        export const streams: any[];
        export const nextInode: number;
        export const nameTable: any;
        export const currentPath: string;
        export const initialized: boolean;
        export const ignorePermissions: boolean;
        export { ErrnoError };
        export const genericErrors: {};
        export const filesystems: any;
        export const syncFSRequests: number;
        export { FSStream };
        export { FSNode };
        export function lookupPath(path: any, opts?: {}): {
            path: string;
            node: any;
        };
        export function lookupPath(path: any, opts?: {}): {
            path: string;
            node: any;
        };
        export function getPath(node: any): any;
        export function getPath(node: any): any;
        export function hashName(parentid: any, name: any): number;
        export function hashName(parentid: any, name: any): number;
        export function hashAddNode(node: any): void;
        export function hashAddNode(node: any): void;
        export function hashRemoveNode(node: any): void;
        export function hashRemoveNode(node: any): void;
        export function lookupNode(parent: any, name: any): any;
        export function lookupNode(parent: any, name: any): any;
        export function createNode(parent: any, name: any, mode: any, rdev: any): any;
        export function createNode(parent: any, name: any, mode: any, rdev: any): any;
        export function destroyNode(node: any): void;
        export function destroyNode(node: any): void;
        export function isRoot(node: any): boolean;
        export function isRoot(node: any): boolean;
        export function isMountpoint(node: any): boolean;
        export function isMountpoint(node: any): boolean;
        export function isFile(mode: any): boolean;
        export function isFile(mode: any): boolean;
        export function isDir(mode: any): boolean;
        export function isDir(mode: any): boolean;
        export function isLink(mode: any): boolean;
        export function isLink(mode: any): boolean;
        export function isChrdev(mode: any): boolean;
        export function isChrdev(mode: any): boolean;
        export function isBlkdev(mode: any): boolean;
        export function isBlkdev(mode: any): boolean;
        export function isFIFO(mode: any): boolean;
        export function isFIFO(mode: any): boolean;
        export function isSocket(mode: any): boolean;
        export function isSocket(mode: any): boolean;
        export function flagsToPermissionString(flag: any): string;
        export function flagsToPermissionString(flag: any): string;
        export function nodePermissions(node: any, perms: any): 0 | 2;
        export function nodePermissions(node: any, perms: any): 0 | 2;
        export function mayLookup(dir: any): any;
        export function mayLookup(dir: any): any;
        export function mayCreate(dir: any, name: any): any;
        export function mayCreate(dir: any, name: any): any;
        export function mayDelete(dir: any, name: any, isdir: any): any;
        export function mayDelete(dir: any, name: any, isdir: any): any;
        export function mayOpen(node: any, flags: any): any;
        export function mayOpen(node: any, flags: any): any;
        export const MAX_OPEN_FDS: number;
        export function nextfd(): number;
        export function nextfd(): number;
        export function getStreamChecked(fd: any): any;
        export function getStreamChecked(fd: any): any;
        export function getStream(fd: any): any;
        export function createStream(stream: any, fd?: number): any;
        export function createStream(stream: any, fd?: number): any;
        export function closeStream(fd: any): void;
        export function closeStream(fd: any): void;
        export function dupStream(origStream: any, fd?: number): any;
        export function dupStream(origStream: any, fd?: number): any;
        export namespace chrdev_stream_ops {
            function open(stream: any): void;
            function open(stream: any): void;
            function llseek(): never;
            function llseek(): never;
        }
        export function major(dev: any): number;
        export function minor(dev: any): number;
        export function makedev(ma: any, mi: any): number;
        export function registerDevice(dev: any, ops: any): void;
        export function registerDevice(dev: any, ops: any): void;
        export function getDevice(dev: any): any;
        export function getMounts(mount: any): any[];
        export function getMounts(mount: any): any[];
        export function syncfs(populate: any, callback: any): void;
        export function syncfs(populate: any, callback: any): void;
        export function mount(type: any, opts: any, mountpoint: any): any;
        export function mount(type: any, opts: any, mountpoint: any): any;
        export function unmount(mountpoint: any): void;
        export function unmount(mountpoint: any): void;
        export function lookup(parent: any, name: any): any;
        export function lookup(parent: any, name: any): any;
        export function mknod(path: any, mode: any, dev: any): any;
        export function mknod(path: any, mode: any, dev: any): any;
        export function create(path: any, mode: any): any;
        export function create(path: any, mode: any): any;
        export function mkdir(path: any, mode: any): any;
        export function mkdir(path: any, mode: any): any;
        export function mkdirTree(path: any, mode: any): void;
        export function mkdirTree(path: any, mode: any): void;
        export function mkdev(path: any, mode: any, dev: any): any;
        export function mkdev(path: any, mode: any, dev: any): any;
        export function symlink(oldpath: any, newpath: any): any;
        export function symlink(oldpath: any, newpath: any): any;
        export function rename(old_path: any, new_path: any): void;
        export function rename(old_path: any, new_path: any): void;
        export function rmdir(path: any): void;
        export function rmdir(path: any): void;
        export function readdir(path: any): any;
        export function readdir(path: any): any;
        export function unlink(path: any): void;
        export function unlink(path: any): void;
        export function readlink(path: any): any;
        export function readlink(path: any): any;
        export function stat(path: any, dontFollow: any): any;
        export function stat(path: any, dontFollow: any): any;
        export function lstat(path: any): any;
        export function lstat(path: any): any;
        export function chmod(path: any, mode: any, dontFollow: any): void;
        export function chmod(path: any, mode: any, dontFollow: any): void;
        export function lchmod(path: any, mode: any): void;
        export function lchmod(path: any, mode: any): void;
        export function fchmod(fd: any, mode: any): void;
        export function fchmod(fd: any, mode: any): void;
        export function chown(path: any, uid: any, gid: any, dontFollow: any): void;
        export function chown(path: any, uid: any, gid: any, dontFollow: any): void;
        export function lchown(path: any, uid: any, gid: any): void;
        export function lchown(path: any, uid: any, gid: any): void;
        export function fchown(fd: any, uid: any, gid: any): void;
        export function fchown(fd: any, uid: any, gid: any): void;
        export function truncate(path: any, len: any): void;
        export function truncate(path: any, len: any): void;
        export function ftruncate(fd: any, len: any): void;
        export function ftruncate(fd: any, len: any): void;
        export function utime(path: any, atime: any, mtime: any): void;
        export function utime(path: any, atime: any, mtime: any): void;
        export function open(path: any, flags: any, mode: any): any;
        export function open(path: any, flags: any, mode: any): any;
        export function close(stream: any): void;
        export function close(stream: any): void;
        export function isClosed(stream: any): boolean;
        export function isClosed(stream: any): boolean;
        export function llseek(stream: any, offset: any, whence: any): any;
        export function llseek(stream: any, offset: any, whence: any): any;
        export function read(stream: any, buffer: any, offset: any, length: any, position: any): any;
        export function read(stream: any, buffer: any, offset: any, length: any, position: any): any;
        export function write(stream: any, buffer: any, offset: any, length: any, position: any, canOwn: any): any;
        export function write(stream: any, buffer: any, offset: any, length: any, position: any, canOwn: any): any;
        export function allocate(stream: any, offset: any, length: any): void;
        export function allocate(stream: any, offset: any, length: any): void;
        export function mmap(stream: any, length: any, position: any, prot: any, flags: any): any;
        export function mmap(stream: any, length: any, position: any, prot: any, flags: any): any;
        export function msync(stream: any, buffer: any, offset: any, length: any, mmapFlags: any): any;
        export function msync(stream: any, buffer: any, offset: any, length: any, mmapFlags: any): any;
        export function ioctl(stream: any, cmd: any, arg: any): any;
        export function ioctl(stream: any, cmd: any, arg: any): any;
        export function readFile(path: any, opts?: {}): any;
        export function readFile(path: any, opts?: {}): any;
        export function writeFile(path: any, data: any, opts?: {}): void;
        export function writeFile(path: any, data: any, opts?: {}): void;
        export function cwd(): any;
        export function chdir(path: any): void;
        export function chdir(path: any): void;
        export function createDefaultDirectories(): void;
        export function createDefaultDirectories(): void;
        export function createDefaultDevices(): void;
        export function createDefaultDevices(): void;
        export function createSpecialDirectories(): void;
        export function createSpecialDirectories(): void;
        export function createStandardStreams(): void;
        export function createStandardStreams(): void;
        export function staticInit(): void;
        export function staticInit(): void;
        export function init(input: any, output: any, error: any): void;
        export function init(input: any, output: any, error: any): void;
        export function quit(): void;
        export function quit(): void;
        export function findObject(path: any, dontResolveLastLink: any): any;
        export function findObject(path: any, dontResolveLastLink: any): any;
        export function analyzePath(path: any, dontResolveLastLink: any): {
            isRoot: boolean;
            exists: boolean;
            error: number;
            name: any;
            path: any;
            object: any;
            parentExists: boolean;
            parentPath: any;
            parentObject: any;
        };
        export function analyzePath(path: any, dontResolveLastLink: any): {
            isRoot: boolean;
            exists: boolean;
            error: number;
            name: any;
            path: any;
            object: any;
            parentExists: boolean;
            parentPath: any;
            parentObject: any;
        };
        export function createPath(parent: any, path: any, canRead: any, canWrite: any): any;
        export function createPath(parent: any, path: any, canRead: any, canWrite: any): any;
        export function createFile(parent: any, name: any, properties: any, canRead: any, canWrite: any): any;
        export function createFile(parent: any, name: any, properties: any, canRead: any, canWrite: any): any;
        export function createDataFile(parent: any, name: any, data: any, canRead: any, canWrite: any, canOwn: any): void;
        export function createDataFile(parent: any, name: any, data: any, canRead: any, canWrite: any, canOwn: any): void;
        export function createDevice(parent: any, name: any, input: any, output: any): any;
        export function createDevice(parent: any, name: any, input: any, output: any): any;
        export function forceLoadFile(obj: any): boolean;
        export function forceLoadFile(obj: any): boolean;
        export function createLazyFile(parent: any, name: any, url: any, canRead: any, canWrite: any): any;
        export function createLazyFile(parent: any, name: any, url: any, canRead: any, canWrite: any): any;
        export function absolutePath(): void;
        export function absolutePath(): void;
        export function createFolder(): void;
        export function createFolder(): void;
        export function createLink(): void;
        export function createLink(): void;
        export function joinPath(): void;
        export function joinPath(): void;
        export function mmapAlloc(): void;
        export function mmapAlloc(): void;
        export function standardizePath(): void;
        export function standardizePath(): void;
    }
    const HEAPF32: any;
    const HEAPF64: any;
    const HEAP_DATA_VIEW: any;
    const HEAP8: any;
    const HEAPU8: any;
    const HEAP16: any;
    const HEAPU16: any;
    const HEAP32: any;
    const HEAPU32: any;
    const HEAP64: any;
    const HEAPU64: any;
}
declare class ErrnoError extends Error {
    constructor(errno: any);
    errno: any;
    code: string;
}
declare class FSStream {
    shared: {};
    set object(arg: any);
    get object(): any;
    node: any;
    get isRead(): boolean;
    get isWrite(): boolean;
    get isAppend(): number;
    set flags(arg: any);
    get flags(): any;
    set position(arg: any);
    get position(): any;
}
declare class FSNode {
    constructor(parent: any, name: any, mode: any, rdev: any);
    parent: any;
    mount: any;
    mounted: any;
    id: number;
    name: any;
    mode: any;
    node_ops: {};
    stream_ops: {};
    rdev: any;
    readMode: number;
    writeMode: number;
    set read(arg: boolean);
    get read(): boolean;
    set write(arg: boolean);
    get write(): boolean;
    get isFolder(): any;
    get isDevice(): any;
}
interface WasmModule {
}

type EmbindString = ArrayBuffer|Uint8Array|Uint8ClampedArray|Int8Array|string;
export interface TIFFImageTagTypeValue<T extends number> {
  value: T;
}
export type TIFFImageTagType = TIFFImageTagTypeValue<1>|TIFFImageTagTypeValue<2>|TIFFImageTagTypeValue<3>|TIFFImageTagTypeValue<4>|TIFFImageTagTypeValue<5>|TIFFImageTagTypeValue<6>|TIFFImageTagTypeValue<7>;

export interface TIFFImage {
  flush(): void;
  readTag(_0: number, _1: TIFFImageTagType): any;
  writeTag(_0: number, _1: TIFFImageTagType, _2: any): boolean;
  readImageData(): any;
  writeImageData(_0: any): void;
  delete(): void;
}

interface EmbindModule {
  TIFFImageTagType: {BYTE_ARRAY: TIFFImageTagTypeValue<1>, ASCII: TIFFImageTagTypeValue<2>, UINT16: TIFFImageTagTypeValue<3>, UINT32: TIFFImageTagTypeValue<4>, UINT64: TIFFImageTagTypeValue<5>, FLOAT32: TIFFImageTagTypeValue<6>, FLOAT64: TIFFImageTagTypeValue<7>};
  TIFFImage: {open(_0: EmbindString, _1: EmbindString): TIFFImage};
}

export type MainModule = WasmModule & typeof RuntimeExports & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
