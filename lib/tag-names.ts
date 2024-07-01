export enum TagName {
  /** subfile data descriptor */
  SUBFILETYPE = 254,

  /** +kind of data in subfile */
  OSUBFILETYPE = 255,

  /** image width in pixels */
  IMAGEWIDTH = 256,

  /** image height in pixels */
  IMAGELENGTH = 257,

  /** bits per channel (sample) */
  BITSPERSAMPLE = 258,

  /** data compression technique */
  COMPRESSION = 259,

  /** photometric interpretation */
  PHOTOMETRIC = 262,

  /** +thresholding used on data */
  THRESHHOLDING = 263,

  /** +dithering matrix width */
  CELLWIDTH = 264,

  /** +dithering matrix height */
  CELLLENGTH = 265,

  /** data order within a byte */
  FILLORDER = 266,

  /** name of doc. image is from */
  DOCUMENTNAME = 269,

  /** info about image */
  IMAGEDESCRIPTION = 270,

  /** scanner manufacturer name */
  MAKE = 271,

  /** scanner model name/number */
  MODEL = 272,

  /** offsets to data strips */
  STRIPOFFSETS = 273,

  /** +image orientation */
  ORIENTATION = 274,

  /** samples per pixel */
  SAMPLESPERPIXEL = 277,

  /** rows per strip of data */
  ROWSPERSTRIP = 278,

  /** bytes counts for strips */
  STRIPBYTECOUNTS = 279,

  /** +minimum sample value */
  MINSAMPLEVALUE = 280,

  /** +maximum sample value */
  MAXSAMPLEVALUE = 281,

  /** pixels/resolution in x */
  XRESOLUTION = 282,

  /** pixels/resolution in y */
  YRESOLUTION = 283,

  /** storage organization */
  PLANARCONFIG = 284,

  /** page name image is from */
  PAGENAME = 285,

  /** x page offset of image lhs */
  XPOSITION = 286,

  /** y page offset of image lhs */
  YPOSITION = 287,

  /** +byte offset to free block */
  FREEOFFSETS = 288,

  /** +sizes of free blocks */
  FREEBYTECOUNTS = 289,

  /** $gray scale curve accuracy */
  GRAYRESPONSEUNIT = 290,

  /** $gray scale response curve */
  GRAYRESPONSECURVE = 291,

  /** 32 flag bits */
  GROUP3OPTIONS = 292,

  /** TIFF 6.0 proper name alias */
  T4OPTIONS = 292,

  /** 32 flag bits */
  GROUP4OPTIONS = 293,

  /** TIFF 6.0 proper name */
  T6OPTIONS = 293,

  /** units of resolutions */
  RESOLUTIONUNIT = 296,

  /** page numbers of multi-page */
  PAGENUMBER = 297,

  /** $color curve accuracy */
  COLORRESPONSEUNIT = 300,

  /** !colorimetry info */
  TRANSFERFUNCTION = 301,

  /** name & release */
  SOFTWARE = 305,

  /** creation date and time */
  DATETIME = 306,

  /** creator of image */
  ARTIST = 315,

  /** machine where created */
  HOSTCOMPUTER = 316,

  /** prediction scheme w/ LZW */
  PREDICTOR = 317,

  /** image white point */
  WHITEPOINT = 318,

  /** !primary chromaticities */
  PRIMARYCHROMATICITIES = 319,

  /** RGB map for palette image */
  COLORMAP = 320,

  /** !highlight+shadow info */
  HALFTONEHINTS = 321,

  /** !tile width in pixels */
  TILEWIDTH = 322,

  /** !tile height in pixels */
  TILELENGTH = 323,

  /** !offsets to data tiles */
  TILEOFFSETS = 324,

  /** !byte counts for tiles */
  TILEBYTECOUNTS = 325,

  /** lines w/ wrong pixel count */
  BADFAXLINES = 326,

  /** regenerated line info */
  CLEANFAXDATA = 327,

  /** max consecutive bad lines */
  CONSECUTIVEBADFAXLINES = 328,

  /** subimage descriptors */
  SUBIFD = 330,

  /** !inks in separated image */
  INKSET = 332,

  /** !ascii names of inks */
  INKNAMES = 333,

  /** !number of inks */
  NUMBEROFINKS = 334,

  /** !0% and 100% dot codes */
  DOTRANGE = 336,

  /** !separation target */
  TARGETPRINTER = 337,

  /** !info about extra samples */
  EXTRASAMPLES = 338,

  /** !data sample format */
  SAMPLEFORMAT = 339,

  /** !variable MinSampleValue */
  SMINSAMPLEVALUE = 340,

  /** !variable MaxSampleValue */
  SMAXSAMPLEVALUE = 341,

  /** %ClipPath [Adobe TIFF technote 2] */
  CLIPPATH = 343,

  /** %XClipPathUnits [Adobe TIFF technote 2] */
  XCLIPPATHUNITS = 344,

  /** %YClipPathUnits [Adobe TIFF technote 2] */
  YCLIPPATHUNITS = 345,

  /** %Indexed [Adobe TIFF Technote 3] */
  INDEXED = 346,

  /** %JPEG table stream */
  JPEGTABLES = 347,

  /** %OPI Proxy [Adobe TIFF technote] */
  OPIPROXY = 351,

  /** ! */
  GLOBALPARAMETERSIFD = 400,

  /** ! */
  PROFILETYPE = 401,

  /** ! */
  FAXPROFILE = 402,

  /** !TIFF/FX coding methods */
  CODINGMETHODS = 403,

  /** !TIFF/FX version year */
  VERSIONYEAR = 404,

  /** !TIFF/FX mode number */
  MODENUMBER = 405,

  /** !TIFF/FX decode */
  DECODE = 433,

  /** !TIFF/FX image base colour */
  IMAGEBASECOLOR = 434,

  /** !TIFF/FX T.82 options */
  T82OPTIONS = 435,

  /** !JPEG processing algorithm */
  JPEGPROC = 512,

  /** !pointer to SOI marker */
  JPEGIFOFFSET = 513,

  /** !JFIF stream length */
  JPEGIFBYTECOUNT = 514,

  /** !restart interval length */
  JPEGRESTARTINTERVAL = 515,

  /** !lossless proc predictor */
  JPEGLOSSLESSPREDICTORS = 517,

  /** !lossless point transform */
  JPEGPOINTTRANSFORM = 518,

  /** !Q matrix offsets */
  JPEGQTABLES = 519,

  /** !DCT table offsets */
  JPEGDCTABLES = 520,

  /** !AC coefficient offsets */
  JPEGACTABLES = 521,

  /** !RGB -> YCbCr transform */
  YCBCRCOEFFICIENTS = 529,

  /** !YCbCr subsampling factors */
  YCBCRSUBSAMPLING = 530,

  /** !subsample positioning */
  YCBCRPOSITIONING = 531,

  /** !colorimetry info */
  REFERENCEBLACKWHITE = 532,

  /** !TIFF/FX strip row counts */
  STRIPROWCOUNTS = 559,

  /** %XML packet [Adobe XMP Specification, January 2004 */
  XMLPACKET = 700,

  /** %OPI ImageID [Adobe TIFF technote] */
  OPIIMAGEID = 32781,

  TIFFANNOTATIONDATA = 32932,

  /** image reference points */
  REFPTS = 32953,

  /** region-xform tack point */
  REGIONTACKPOINT = 32954,

  /** warp quadrilateral */
  REGIONWARPCORNERS = 32955,

  /** affine transformation mat */
  REGIONAFFINE = 32956,

  /** $use ExtraSamples */
  MATTEING = 32995,

  /** $use SampleFormat */
  DATATYPE = 32996,

  /** z depth of image */
  IMAGEDEPTH = 32997,

  /** z depth/data tile */
  TILEDEPTH = 32998,

  /** full image size in x */
  PIXAR_IMAGEFULLWIDTH = 33300,

  /** full image size in y */
  PIXAR_IMAGEFULLLENGTH = 33301,

  /** texture map format */
  PIXAR_TEXTUREFORMAT = 33302,

  /** s & t wrap modes */
  PIXAR_WRAPMODES = 33303,

  /** cotan(fov) for env. maps */
  PIXAR_FOVCOT = 33304,

  PIXAR_MATRIX_WORLDTOSCREEN = 33305,

  /** PIXAR_MATRIX_WORLDTOCAMERA */
  PIXAR_MATRIX_WORLDTOCAMERA = 33306,

  /** device serial number */
  WRITERSERIALNUMBER = 33405,

  /** (alias for TIFFTAG_EP_CFAREPEATPATTERNDIM)*/
  CFAREPEATPATTERNDIM = 33421,

  /** (alias for TIFFTAG_EP_CFAPATTERN) */
  CFAPATTERN = 33422,

  /** (alias for TIFFTAG_EP_BATTERYLEVEL) */
  BATTERYLEVEL = 33423,

  /** copyright string */
  COPYRIGHT = 33432,

  /** Specifies the pixel data format encoding in the GEL file format. */
  MD_FILETAG = 33445,

  /** scale factor */
  MD_SCALEPIXEL = 33446,

  /** conversion from 16bit to 8bit */
  MD_COLORTABLE = 33447,

  /** name of the lab that scanned this file. */
  MD_LABNAME = 33448,

  /** information about the scanned GEL sample */
  MD_SAMPLEINFO = 33449,

  /** information about the date the sample was prepared YY/MM/DD */
  MD_PREPDATE = 33450,

  /** information about the time the sample was prepared HH:MM*/
  MD_PREPTIME = 33451,

  /** Units for data in this file, as used in the GEL file format. */
  MD_FILEUNITS = 33452,

  /** RICHTIFFIPTC */
  RICHTIFFIPTC = 33723,

  /** Intergraph Application specific storage. */
  INGR_PACKET_DATA_TAG = 33918,

  /** Intergraph Application specific flags. */
  INGR_FLAG_REGISTERS = 33919,

  /** Originally part of Intergraph's GeoTIFF tags, but likely understood by IrasB only. */
  IRASB_TRANSORMATION_MATRIX = 33920,

  /** GeoTIFF */
  MODELTIEPOINTTAG = 33922,

  /** site name */
  IT8SITE = 34016,

  /** color seq. [RGB,CMYK,etc] */
  IT8COLORSEQUENCE = 34017,

  /** DDES Header */
  IT8HEADER = 34018,

  /** raster scanline padding */
  IT8RASTERPADDING = 34019,

  /** # of bits in short run */
  IT8BITSPERRUNLENGTH = 34020,

  /** # of bits in long run */
  IT8BITSPEREXTENDEDRUNLENGTH = 34021,

  /** LW colortable */
  IT8COLORTABLE = 34022,

  /** BP/BL image color switch */
  IT8IMAGECOLORINDICATOR = 34023,

  /** BP/BL bg color switch */
  IT8BKGCOLORINDICATOR = 34024,

  /** BP/BL image color value */
  IT8IMAGECOLORVALUE = 34025,

  /** BP/BL bg color value */
  IT8BKGCOLORVALUE = 34026,

  /** MP pixel intensity value */
  IT8PIXELINTENSITYRANGE = 34027,

  /** HC transparency switch */
  IT8TRANSPARENCYINDICATOR = 34028,

  /** color character. table */
  IT8COLORCHARACTERIZATION = 34029,

  /** HC usage indicator */
  IT8HCUSAGE = 34030,

  /** Trapping indicator (untrapped=0, trapped=1) */
  IT8TRAPINDICATOR = 34031,

  /** CMYK color equivalents */
  IT8CMYKEQUIVALENT = 34032,

  /** Sequence Frame Count */
  FRAMECOUNT = 34232,

  /** Used in interchangeable GeoTIFF files */
  MODELTRANSFORMATIONTAG = 34264,

  /** Photoshop */
  PHOTOSHOP = 34377,

  /** Pointer to EXIF private directory */
  EXIFIFD = 34665,

  /** ICC profile data */
  ICCPROFILE = 34675,

  /** !TIFF/FX image layer information */
  IMAGELAYER = 34732,

  /** JBIG options */
  JBIGOPTIONS = 34750,

  /** Pointer to EXIF GPS private directory */
  GPSIFD = 34853,

  /** encoded Class 2 ses. params */
  FAXRECVPARAMS = 34908,

  /** received SubAddr string */
  FAXSUBADDRESS = 34909,

  /** receive time (secs) */
  FAXRECVTIME = 34910,

  /** encoded fax ses. params, Table 2/T.30 */
  FAXDCS = 34911,

  /** Sample value to Nits */
  STONITS = 37439,

  /** unknown use */
  FEDEX_EDR = 34929,

  /** http://justsolve.archiveteam.org/wiki/PSD, http://www.adobe.com/devnet-apps/photoshop/fileformatashtml/ */
  IMAGESOURCEDATA = 37724,

  /** Pointer to EXIF Interoperability private directory */
  INTEROPERABILITYIFD = 40965,

  /** Used by the GDAL library */
  GDAL_METADATA = 42112,

  /** Used by the GDAL library */
  GDAL_NODATA = 42113,

  /** Used in the Oce scanning process */
  OCE_SCANJOB_DESCRIPTION = 50215,

  /** Used in the Oce scanning process. */
  OCE_APPLICATION_SELECTOR = 50216,

  OCE_IDENTIFICATION_NUMBER = 50217,

  OCE_IMAGELOGIC_CHARACTERISTICS = 50218,

  /** Stores LERC version and additional compression method */
  LERC_PARAMETERS = 50674,

  /** &DNG version number */
  DNGVERSION = 50706,

  /** &DNG compatibility version */
  DNGBACKWARDVERSION = 50707,

  /** &name for the camera model */
  UNIQUECAMERAMODEL = 50708,

  /** &localized camera model name (UTF-8) */
  LOCALIZEDCAMERAMODEL = 50709,

  /** &CFAPattern->LinearRaw space mapping */
  CFAPLANECOLOR = 50710,

  /** &spatial layout of the CFA */
  CFALAYOUT = 50711,

  /** &lookup table description */
  LINEARIZATIONTABLE = 50712,

  /** &repeat pattern size for the BlackLevel tag */
  BLACKLEVELREPEATDIM = 50713,

  /** &zero light encoding level */
  BLACKLEVEL = 50714,

  /** &zero light encoding level differences (columns) */
  BLACKLEVELDELTAH = 50715,

  /** &zero light encoding level differences (rows) */
  BLACKLEVELDELTAV = 50716,

  /** &fully saturated encoding level */
  WHITELEVEL = 50717,

  /** &default scale factors */
  DEFAULTSCALE = 50718,

  /** &origin of the final image area */
  DEFAULTCROPORIGIN = 50719,

  /** &size of the final image area */
  DEFAULTCROPSIZE = 50720,

  /** &XYZ->reference color space transformation matrix 1 */
  COLORMATRIX1 = 50721,

  /** &XYZ->reference color space transformation matrix 2 */
  COLORMATRIX2 = 50722,

  /** &calibration matrix 1 */
  CAMERACALIBRATION1 = 50723,

  /** &calibration matrix 2 */
  CAMERACALIBRATION2 = 50724,

  /** &dimensionality reduction matrix 1 */
  REDUCTIONMATRIX1 = 50725,

  /** &dimensionality reduction matrix 2 */
  REDUCTIONMATRIX2 = 50726,

  /** &gain applied the stored raw values*/
  ANALOGBALANCE = 50727,

  /** &selected white balance in linear reference space */
  ASSHOTNEUTRAL = 50728,

  /** &selected white balance in x-y chromaticity coordinates */
  ASSHOTWHITEXY = 50729,

  /** &how much to move the zero point */
  BASELINEEXPOSURE = 50730,

  /** &relative noise level */
  BASELINENOISE = 50731,

  /** &relative amount of sharpening */
  BASELINESHARPNESS = 50732,

  BAYERGREENSPLIT = 50733,

  /** &non-linear encoding range */
  LINEARRESPONSELIMIT = 50734,

  /** &camera's serial number */
  CAMERASERIALNUMBER = 50735,

  /** info about the lens */
  LENSINFO = 50736,

  /** &chroma blur radius */
  CHROMABLURRADIUS = 50737,

  /** &relative strength of the camera's anti-alias filter */
  ANTIALIASSTRENGTH = 50738,

  /** &used by Adobe Camera Raw */
  SHADOWSCALE = 50739,

  /** &manufacturer's private data */
  DNGPRIVATEDATA = 50740,

  /** &whether the EXIF MakerNote tag is safe to preserve along with the rest of the EXIF data */
  MAKERNOTESAFETY = 50741,

  /** &illuminant 1 */
  CALIBRATIONILLUMINANT1 = 50778,

  /** &illuminant 2 */
  CALIBRATIONILLUMINANT2 = 50779,

  /** &best quality multiplier */
  BESTQUALITYSCALE = 50780,

  /** &unique identifier for the raw image data */
  RAWDATAUNIQUEID = 50781,

  /** &file name of the original raw file (UTF-8) */
  ORIGINALRAWFILENAME = 50827,

  /** &contents of the original raw file */
  ORIGINALRAWFILEDATA = 50828,

  /** &active (non-masked) pixels of the sensor */
  ACTIVEAREA = 50829,

  /** &list of coordinates of fully masked pixels */
  MASKEDAREAS = 50830,

  /** &these two tags used to */
  ASSHOTICCPROFILE = 50831,

  /** map cameras's color space into ICC profile space */
  ASSHOTPREPROFILEMATRIX = 50832,

  /** & */
  CURRENTICCPROFILE = 50833,

  /** & */
  CURRENTPREPROFILEMATRIX = 50834,

  /** &colorimetric reference */
  COLORIMETRICREFERENCE = 50879,

  /** &camera calibration signature (UTF-8) */
  CAMERACALIBRATIONSIGNATURE = 50931,

  /** &profile calibration signature (UTF-8) */
  PROFILECALIBRATIONSIGNATURE = 50932,

  /** &as shot profile name (UTF-8) */
  ASSHOTPROFILENAME = 50934,

  /** &amount of applied noise reduction */
  NOISEREDUCTIONAPPLIED = 50935,

  /** &camera profile name (UTF-8) */
  PROFILENAME = 50936,

  /** &dimensions of HSV mapping */
  PROFILEHUESATMAPDIMS = 50937,

  /** &first HSV mapping table */
  PROFILEHUESATMAPDATA1 = 50938,

  /** &second HSV mapping table */
  PROFILEHUESATMAPDATA2 = 50939,

  /** &default tone curve */
  PROFILETONECURVE = 50940,

  /** &profile embedding policy */
  PROFILEEMBEDPOLICY = 50941,

  /** &profile copyright information (UTF-8) */
  PROFILECOPYRIGHT = 50942,

  /** &matrix for mapping white balanced camera colors to XYZ D50 */
  FORWARDMATRIX1 = 50964,

  /** &matrix for mapping white balanced camera colors to XYZ D50 */
  FORWARDMATRIX2 = 50965,

  /** &name of application that created preview (UTF-8) */
  PREVIEWAPPLICATIONNAME = 50966,

  /** &version of application that created preview (UTF-8) */
  PREVIEWAPPLICATIONVERSION = 50967,

  /** &name of conversion settings (UTF-8) */
  PREVIEWSETTINGSNAME = 50968,

  /** &unique id of conversion settings */
  PREVIEWSETTINGSDIGEST = 50969,

  /** &preview color space */
  PREVIEWCOLORSPACE = 50970,

  /** &date/time preview was rendered */
  PREVIEWDATETIME = 50971,

  /** &md5 of raw image data */
  RAWIMAGEDIGEST = 50972,

  /** &md5 of the data stored in the OriginalRawFileData tag */
  ORIGINALRAWFILEDIGEST = 50973,

  /** &subtile block size */
  SUBTILEBLOCKSIZE = 50974,

  /** &number of interleaved fields */
  ROWINTERLEAVEFACTOR = 50975,

  /** &num of input samples in each dim of default "look" table */
  PROFILELOOKTABLEDIMS = 50981,

  /** &default "look" table for use as starting point */
  PROFILELOOKTABLEDATA = 50982,

  /** &opcodes that should be applied to raw image after reading */
  OPCODELIST1 = 51008,

  /** &opcodes that should be applied after mapping to linear reference */
  OPCODELIST2 = 51009,

  /** &opcodes that should be applied after demosaicing */
  OPCODELIST3 = 51022,

  /** &noise profile */
  NOISEPROFILE = 51041,

  /** &default user crop rectangle in relative coords */
  DEFAULTUSERCROP = 51125,

  /** &black rendering hint */
  DEFAULTBLACKRENDER = 51110,

  /** &baseline exposure offset */
  BASELINEEXPOSUREOFFSET = 51109,

  /** &3D LookTable indexing conversion */
  PROFILELOOKTABLEENCODING = 51108,

  /** &3D HueSatMap indexing conversion */
  PROFILEHUESATMAPENCODING = 51107,

  /** &default final size of larger original file for this proxy */
  ORIGINALDEFAULTFINALSIZE = 51089,

  /** &best quality final size of larger original file for this proxy */
  ORIGINALBESTQUALITYFINALSIZE = 51090,

  /** &the default crop size of larger original file for this proxy */
  ORIGINALDEFAULTCROPSIZE = 51091,

  /** &modified MD5 digest of the raw image data */
  NEWRAWIMAGEDIGEST = 51111,

  /** &The gain between the main raw FD and the preview IFD containing this tag */
  RAWTOPREVIEWGAIN = 51112,

  /** &encoding of the depth data in the file */
  DEPTHFORMAT = 51177,

  /** &distance from the camera represented by value 0 in the depth map */
  DEPTHNEAR = 51178,

  /** &distance from the camera represented by the maximum value in the depth map */
  DEPTHFAR = 51179,

  /** &measurement units for DepthNear and DepthFar */
  DEPTHUNITS = 51180,

  /** &measurement geometry for the depth map */
  DEPTHMEASURETYPE = 51181,

  /** &a string that documents how the enhanced image data was processed. */
  ENHANCEPARAMS = 51182,

  /** &spatially varying gain tables that can be applied as starting point */
  PROFILEGAINTABLEMAP = 52525,

  /** &a string that identifies the semantic mask */
  SEMANTICNAME = 52526,

  /** &a string that identifies a specific instance in a semantic mask */
  SEMANTICINSTANCEID = 52528,

  /** &the crop rectangle of this IFD's mask, relative to the main image */
  MASKSUBAREA = 52536,

  /** &color transforms to apply to masked image regions */
  RGBTABLES = 52543,

  /** &the illuminant used for the third set of color calibration tags */
  CALIBRATIONILLUMINANT3 = 52529,

  /** &matrix to convert XYZ values to reference camera native color space under CalibrationIlluminant3 */
  COLORMATRIX3 = 52531,

  /** &matrix to transform reference camera native space values to individual camera native space values under CalibrationIlluminant3 */
  CAMERACALIBRATION3 = 52530,

  /** &dimensionality reduction matrix for use in color conversion to XYZ under CalibrationIlluminant3 */
  REDUCTIONMATRIX3 = 52538,

  /** &the data for the third HSV table */
  PROFILEHUESATMAPDATA3 = 52537,

  /** &matrix to map white balanced camera colors to XYZ D50 */
  FORWARDMATRIX3 = 52532,

  /** &data for the first calibration illuminant */
  ILLUMINANTDATA1 = 52533,

  /** &data for the second calibration illuminant */
  ILLUMINANTDATA2 = 52534,

  /** &data for the third calibration illuminant */
  ILLUMINANTDATA3 = 53535,

  /** dimensions of CFA pattern */
  EP_CFAREPEATPATTERNDIM = 33421,

  /** color filter array pattern */
  EP_CFAPATTERN = 33422,

  /** battery level (rational or ASCII) */
  EP_BATTERYLEVEL = 33423,

  /** Number of multi-field images */
  EP_INTERLACE = 34857,

  /** Alias IPTC/NAA Newspaper Association RichTIFF */
  EP_IPTC_NAA = 33723,

  /** Time zone offset relative to UTC */
  EP_TIMEZONEOFFSET = 34858,

  /** Number of seconds capture was delayed from button press */
  EP_SELFTIMERMODE = 34859,

  /** Flash energy, or range if there is uncertainty */
  EP_FLASHENERGY = 37387,

  /** Spatial frequency response */
  EP_SPATIALFREQUENCYRESPONSE = 37388,

  /** Camera noise measurement values */
  EP_NOISE = 37389,

  /** Focal plane X resolution */
  EP_FOCALPLANEXRESOLUTION = 37390,

  /** Focal plane Y resolution */
  EP_FOCALPLANEYRESOLUTION = 37391,

  /** Focal plane resolution unit */
  EP_FOCALPLANERESOLUTIONUNIT = 37392,

  /** Number of image when several of burst shot stored in same TIFF/EP */
  EP_IMAGENUMBER = 37393,

  /** Security classification */
  EP_SECURITYCLASSIFICATION = 37394,

  /** Record of what has been done to the image */
  EP_IMAGEHISTORY = 37395,

  /** Exposure index */
  EP_EXPOSUREINDEX = 37397,

  /** TIFF/EP standard version, n.n.n.n */
  EP_STANDARDID = 37398,

  /** Type of image sensor */
  EP_SENSINGMETHOD = 37399,

  /** Exposure time */
  EP_EXPOSURETIME = 33434,

  /** F number */
  EP_FNUMBER = 33437,

  /** Exposure program */
  EP_EXPOSUREPROGRAM = 34850,

  /** Spectral sensitivity */
  EP_SPECTRALSENSITIVITY = 34852,

  /** ISO speed rating */
  EP_ISOSPEEDRATINGS = 34855,

  /** Optoelectric conversion factor */
  EP_OECF = 34856,

  /** Date and time of original data generation */
  EP_DATETIMEORIGINAL = 36867,

  /** Image compression mode */
  EP_COMPRESSEDBITSPERPIXEL = 37122,

  /** Shutter speed */
  EP_SHUTTERSPEEDVALUE = 37377,

  /** Aperture */
  EP_APERTUREVALUE = 37378,

  /** Brightness */
  EP_BRIGHTNESSVALUE = 37379,

  /** Exposure bias */
  EP_EXPOSUREBIASVALUE = 37380,

  /** Maximum lens aperture */
  EP_MAXAPERTUREVALUE = 37381,

  /** Subject distance */
  EP_SUBJECTDISTANCE = 37382,

  /** Metering mode */
  EP_METERINGMODE = 37383,

  /** Light source */
  EP_LIGHTSOURCE = 37384,

  /** Flash */
  EP_FLASH = 37385,

  /** Lens focal length */
  EP_FOCALLENGTH = 37386,

  /** Subject location (area) */
  EP_SUBJECTLOCATION = 37396,

  /** Define by GDAL for geospatial georeferencing through RPC: http://geotiff.maptools.org/rpc_prop.html */
  RPCCOEFFICIENT = 50844,

  /** Alias Sketchbook Pro layer usage description. */
  ALIAS_LAYER_METADATA = 50784,

  /** https://www.awaresystems.be/imaging/tiff/tifftags/tiff_rsid.html */
  TIFF_RSID = 50908,

  /** https://www.awaresystems.be/imaging/tiff/tifftags/geo_metadata.html */
  GEO_METADATA = 50909,

  /** http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/products/photoshop/pdfs/dng_spec_1.4.0.0.pdf */
  EXTRACAMERAPROFILES = 50933,

  /** hue shift correction data */
  DCSHUESHIFTVALUES = 65535,

  /** Group 3/4 format control */
  FAXMODE = 65536,

  /** Compression quality level */
  JPEGQUALITY = 65537,

  /** Auto RGB<=>YCbCr convert? */
  JPEGCOLORMODE = 65538,

  /** What to put in JPEGTables */
  JPEGTABLESMODE = 65539,

  /** G3/G4 fill function */
  FAXFILLFUNC = 65540,

  /** PixarLogCodec I/O data sz */
  PIXARLOGDATAFMT = 65549,

  /** imager model & filter */
  DCSIMAGERTYPE = 65550,

  /** interpolation mode */
  DCSINTERPMODE = 65551,

  /** color balance values */
  DCSBALANCEARRAY = 65552,

  /** color correction values */
  DCSCORRECTMATRIX = 65553,

  /** gamma value */
  DCSGAMMA = 65554,

  /** toe & shoulder points */
  DCSTOESHOULDERPTS = 65555,

  /** calibration file desc */
  DCSCALIBRATIONFD = 65556,

  /** compression quality level */
  ZIPQUALITY = 65557,

  /** PixarLog uses same scale */
  PIXARLOGQUALITY = 65558,

  /** area of image to acquire */
  DCSCLIPRECTANGLE = 65559,

  /** SGILog user data format */
  SGILOGDATAFMT = 65560,

  /** SGILog data encoding control*/
  SGILOGENCODE = 65561,

  /** LZMA2 preset (compression level) */
  LZMAPRESET = 65562,

  /** interface for per sample tags */
  PERSAMPLE = 65563,

  /** ZSTD compression level */
  ZSTD_LEVEL = 65564,

  /** LERC version */
  LERC_VERSION = 65565,

  /** LERC additional compression */
  LERC_ADD_COMPRESSION = 65566,

  /** LERC maximum error */
  LERC_MAXZERROR = 65567,

  /** WebP compression level */
  WEBP_LEVEL = 65568,

  /** WebP lossless/lossy */
  WEBP_LOSSLESS = 65569,

  /** WebP lossless exact mode. Set-only mode. Default is 1. Can be set to 0 to increase compression rate, but R,G,B in areas where alpha = 0 will not be preserved */
  WEBP_LOSSLESS_EXACT = 65571,

  /** ZIP codec: to get/set the sub-codec to use. Will default to libdeflate when available */
  DEFLATE_SUBCODEC = 65570,
}
