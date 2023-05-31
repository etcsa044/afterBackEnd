import { faker } from '@faker-js/faker';
import MongoProductManager from '../Dao/mongo/managers/products.js';

const context = async ()=>{



const pm = new MongoProductManager()


const productList = [
	{
		"title": "Producto 001 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "945.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "glAxn",
		"stock": 51,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 002 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "624.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "qoI2J",
		"stock": 13,
		"category": "Bespoke",
		"status": true
	},
	{
		"title": "Producto 003 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "941.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "VDFuH",
		"stock": 71,
		"category": "Bespoke",
		"status": true
	},
	{
		"title": "Producto 004 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "426.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Cw9g2",
		"stock": 32,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 005 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "545.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "K81Eq",
		"stock": 63,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 006 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "188.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ugS54",
		"stock": 60,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 007 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "415.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Na9FX",
		"stock": 55,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 008 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "254.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "h7xQg",
		"stock": 38,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 009 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "298.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "lWbL5",
		"stock": 89,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 010 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "367.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "eQsAJ",
		"stock": 70,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 011 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "42.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "jo1z8",
		"stock": 1,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 012 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "275.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "TAUQo",
		"stock": 91,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 013 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "579.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "41YYk",
		"stock": 87,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 014 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "47.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "r8kg4",
		"stock": 100,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 015 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "489.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "tO3y6",
		"stock": 64,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 016 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "98.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UxERK",
		"stock": 42,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 017 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "116.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "MFEAB",
		"stock": 20,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 018 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "382.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "p5wa3",
		"stock": 39,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 019 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "380.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "QWQHi",
		"stock": 59,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 020 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "347.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "zgBNC",
		"stock": 99,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 021 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "286.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "1uiuq",
		"stock": 12,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 022 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "139.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "gGNh0",
		"stock": 70,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 023 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "713.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Wws4L",
		"stock": 24,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 024 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "160.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Gim16",
		"stock": 38,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 025 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "669.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UwXYA",
		"stock": 75,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 026 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "895.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "JK6LV",
		"stock": 39,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 027 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "576.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "aXr6l",
		"stock": 16,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 028 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "190.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "DCNtv",
		"stock": 98,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 029 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "390.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "7U5sn",
		"stock": 79,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 030 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "562.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "pYRuU",
		"stock": 85,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 031 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "496.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "cyXDg",
		"stock": 100,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 032 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "520.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "CPWPM",
		"stock": 17,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 033 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "424.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "yvbj5",
		"stock": 52,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 034 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "995.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "2a1XK",
		"stock": 63,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 035 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "288.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "L1uw4",
		"stock": 45,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 036 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "260.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "baU5K",
		"stock": 74,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 037 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "762.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Ku0oE",
		"stock": 81,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 038 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "852.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "paQdu",
		"stock": 57,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 039 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "131.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "sbrTI",
		"stock": 32,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 040 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "355.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "b34F0",
		"stock": 17,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 041 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "521.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "V9G4E",
		"stock": 31,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 042 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "636.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "yT9e0",
		"stock": 99,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 043 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "845.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "OvxhV",
		"stock": 93,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 044 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "862.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "hhizr",
		"stock": 27,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 045 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "461.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Oijno",
		"stock": 98,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 046 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "113.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "8D74q",
		"stock": 20,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 047 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "656.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "2f5JK",
		"stock": 97,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 048 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "414.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "iyKjB",
		"stock": 11,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 049 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "801.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "38TW9",
		"stock": 66,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 050 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "537.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "b4wFs",
		"stock": 98,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 051 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "254.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "53Cxi",
		"stock": 52,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 052 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "327.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "nUqXq",
		"stock": 74,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 053 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "490.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "AqtBr",
		"stock": 100,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 054 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "40.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "WS4nR",
		"stock": 6,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 055 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "139.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Xsh1S",
		"stock": 99,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 056 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "346.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "oqd8L",
		"stock": 97,
		"category": "Bespoke",
		"status": true
	},
	{
		"title": "Producto 057 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "363.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "YA7Ki",
		"stock": 92,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 058 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "634.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "6tox8",
		"stock": 16,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 059 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "588.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "cPUwH",
		"stock": 96,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 060 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "619.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "NgB1d",
		"stock": 87,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 061 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "388.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "HBWU5",
		"stock": 8,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 062 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "786.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "tKaQg",
		"stock": 1,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 063 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "532.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "M9Ztc",
		"stock": 92,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 064 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "107.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4aJxw",
		"stock": 29,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 065 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "769.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "HXhti",
		"stock": 7,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 066 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "580.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "W2C7Q",
		"stock": 6,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 067 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "851.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "RXIFF",
		"stock": 8,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 068 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "585.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UXI9S",
		"stock": 55,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 069 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "325.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "LZtlx",
		"stock": 48,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 070 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "291.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "o92Q4",
		"stock": 17,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 071 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "504.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "HqQgo",
		"stock": 27,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 072 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "143.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "A6iFv",
		"stock": 86,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 073 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "326.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "V2q8X",
		"stock": 4,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 074 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "493.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "hbjaw",
		"stock": 23,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 075 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "343.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "uThLQ",
		"stock": 96,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 076 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "483.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ipm4u",
		"stock": 74,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 077 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "99.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "vJyi7",
		"stock": 70,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 078 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "822.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "49lbm",
		"stock": 48,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 079 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "344.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BOhoy",
		"stock": 58,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 080 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "739.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ulGVj",
		"stock": 8,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 081 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "67.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "xXx1b",
		"stock": 46,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 082 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "390.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "q3YaM",
		"stock": 59,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 083 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "206.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "QeAH4",
		"stock": 95,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 084 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "585.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "RyVa9",
		"stock": 40,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 085 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "281.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "nlK9R",
		"stock": 65,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 086 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "527.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "DeolD",
		"stock": 45,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 087 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "685.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "aMZ3e",
		"stock": 6,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 088 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "587.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "f7Gjj",
		"stock": 96,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 089 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "857.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "lBEnY",
		"stock": 67,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 090 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "220.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "x4vH6",
		"stock": 66,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 091 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "7.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "7Ix82",
		"stock": 39,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 092 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "777.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "53Rv5",
		"stock": 98,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 093 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "780.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "46psY",
		"stock": 67,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 094 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "873.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "kFerh",
		"stock": 33,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 095 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "612.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "5Mvl6",
		"stock": 4,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 096 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "596.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ELtkL",
		"stock": 73,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 097 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "938.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "uZzdM",
		"stock": 37,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 098 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "844.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "DfsgP",
		"stock": 60,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 099 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "774.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "rNImv",
		"stock": 97,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 100 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "501.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UG6Rn",
		"stock": 62,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 101 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "157.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "9wnIo",
		"stock": 11,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 102 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "649.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "XDglB",
		"stock": 60,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 103 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "656.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UyYN4",
		"stock": 18,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 104 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "230.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Yf3c8",
		"stock": 68,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 105 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "528.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "8OvE3",
		"stock": 38,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 106 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "950.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "waHz0",
		"stock": 36,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 107 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "933.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "kuJxw",
		"stock": 10,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 108 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "747.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UxQb7",
		"stock": 5,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 109 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "676.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "zLPRX",
		"stock": 27,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 110 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "335.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "VjF6E",
		"stock": 91,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 111 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "28.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4Zilc",
		"stock": 97,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 112 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "249.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "08mXI",
		"stock": 62,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 113 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "31.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "gdN7Q",
		"stock": 52,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 114 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "735.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "kZfsH",
		"stock": 78,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 115 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "959.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Vqwem",
		"stock": 17,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 116 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "187.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "bzxA0",
		"stock": 46,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 117 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "837.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "LjIKn",
		"stock": 86,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 118 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "998.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "u8CPy",
		"stock": 82,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 119 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "669.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "YoTs5",
		"stock": 26,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 120 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "636.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "8ctPI",
		"stock": 44,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 121 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "139.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "6xbbx",
		"stock": 96,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 122 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "909.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "j6O9G",
		"stock": 14,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 123 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "907.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "z3CMe",
		"stock": 8,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 124 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "637.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "GetBl",
		"stock": 38,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 125 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "503.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "eh0b8",
		"stock": 6,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 126 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "796.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "nZlg8",
		"stock": 6,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 127 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "424.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ndvis",
		"stock": 95,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 128 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "589.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "pucro",
		"stock": 5,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 129 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "567.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "wfQz9",
		"stock": 59,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 130 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "456.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "pcfGY",
		"stock": 41,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 131 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "993.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "63lUr",
		"stock": 70,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 132 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "757.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "lAf8g",
		"stock": 10,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 133 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "46.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "y8jRU",
		"stock": 82,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 134 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "379.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4eNDt",
		"stock": 22,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 135 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "350.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "LPIae",
		"stock": 4,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 136 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "587.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "fMgqH",
		"stock": 39,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 137 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "698.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "nzIoO",
		"stock": 34,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 138 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "376.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "IJyfP",
		"stock": 42,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 139 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "612.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Uq1O7",
		"stock": 55,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 140 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "435.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "8mwEd",
		"stock": 37,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 141 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "788.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ysD8R",
		"stock": 70,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 142 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "879.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "fTD9j",
		"stock": 40,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 143 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "695.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "pOpaq",
		"stock": 35,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 144 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "682.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "WCrE8",
		"stock": 12,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 145 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "351.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "WtYLw",
		"stock": 6,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 146 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "883.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "wtv5L",
		"stock": 99,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 147 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "834.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "GXONG",
		"stock": 76,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 148 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "946.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "DAvZ0",
		"stock": 51,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 149 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "293.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "CKmCc",
		"stock": 22,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 150 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "445.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "l199g",
		"stock": 72,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 151 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "467.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "NvG8h",
		"stock": 13,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 152 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "978.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "CEMK3",
		"stock": 75,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 153 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "264.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "SBRWu",
		"stock": 21,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 154 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "92.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Y1oXV",
		"stock": 51,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 155 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "813.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "CvZ28",
		"stock": 25,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 156 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "116.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "TIG6t",
		"stock": 18,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 157 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "886.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "tFQOq",
		"stock": 5,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 158 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "944.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BKkdh",
		"stock": 1,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 159 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "314.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "729kE",
		"stock": 88,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 160 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "347.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Mz1Zo",
		"stock": 61,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 161 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "667.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "QliTd",
		"stock": 49,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 162 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "832.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "fas06",
		"stock": 26,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 163 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "835.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "YhHaf",
		"stock": 25,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 164 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "284.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "nzBi4",
		"stock": 50,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 165 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "213.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "MVx93",
		"stock": 64,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 166 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "200.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "5tSuV",
		"stock": 95,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 167 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "540.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "7Ywds",
		"stock": 54,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 168 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "77.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "dwdHN",
		"stock": 31,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 169 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "870.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UmDsS",
		"stock": 8,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 170 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "513.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "mgnh9",
		"stock": 23,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 171 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "722.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "jYGLe",
		"stock": 51,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 172 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "682.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "czfIE",
		"stock": 27,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 173 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "782.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "n4aoA",
		"stock": 83,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 174 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "680.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "7uxHo",
		"stock": 70,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 175 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "369.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Vi1AF",
		"stock": 85,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 176 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "770.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ARZqe",
		"stock": 23,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 177 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "344.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "rDZJQ",
		"stock": 97,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 178 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "31.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "AOrRK",
		"stock": 37,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 179 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "793.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Ae00R",
		"stock": 46,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 180 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "180.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BCtlH",
		"stock": 53,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 181 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "798.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "LaPL6",
		"stock": 8,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 182 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "711.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "yLssM",
		"stock": 56,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 183 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "969.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "teqZi",
		"stock": 96,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 184 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "220.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "FcjbF",
		"stock": 22,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 185 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "271.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BZN46",
		"stock": 5,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 186 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "670.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "IbzYd",
		"stock": 23,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 187 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "182.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "qSk8h",
		"stock": 44,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 188 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "95.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "DBh2Z",
		"stock": 23,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 189 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "140.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "YrwFV",
		"stock": 81,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 190 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "231.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "XBKhF",
		"stock": 70,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 191 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "307.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "pJlHJ",
		"stock": 63,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 192 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "321.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "igW4L",
		"stock": 92,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 193 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "898.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "X30qI",
		"stock": 91,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 194 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "857.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "leC0z",
		"stock": 41,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 195 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "343.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "opO6U",
		"stock": 68,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 196 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "68.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "iusML",
		"stock": 68,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 197 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "736.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "m4YJ2",
		"stock": 49,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 198 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "966.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "JwF5J",
		"stock": 62,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 199 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "162.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "0wlWg",
		"stock": 31,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 200 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "59.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "exDuH",
		"stock": 1,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 201 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "226.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "G4nVo",
		"stock": 8,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 202 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "710.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "z3tjR",
		"stock": 69,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 203 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "95.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "vhXlK",
		"stock": 4,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 204 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "833.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ACrQx",
		"stock": 6,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 205 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "832.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "GGavZ",
		"stock": 52,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 206 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "87.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ma4AC",
		"stock": 60,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 207 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "870.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "wH3WL",
		"stock": 27,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 208 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "325.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "hMWJN",
		"stock": 40,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 209 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "616.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "3iCgt",
		"stock": 100,
		"category": "Bespoke",
		"status": true
	},
	{
		"title": "Producto 210 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "438.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Mkd0A",
		"stock": 73,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 211 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "307.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "TyzQs",
		"stock": 98,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 212 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "718.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "mW5yU",
		"stock": 56,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 213 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "970.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "3S6gE",
		"stock": 64,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 214 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "844.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BakIp",
		"stock": 54,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 215 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "405.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "NEFfh",
		"stock": 89,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 216 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "55.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "cvkb1",
		"stock": 63,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 217 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "614.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Efksl",
		"stock": 64,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 218 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "291.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4h0In",
		"stock": 36,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 219 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "953.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BeWxB",
		"stock": 18,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 220 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "294.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "dftYN",
		"stock": 1,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 221 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "968.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "I1NVC",
		"stock": 70,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 222 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "830.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4iiOu",
		"stock": 9,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 223 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "797.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BavZN",
		"stock": 72,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 224 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "366.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "lKoS0",
		"stock": 12,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 225 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "950.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "vIL9R",
		"stock": 43,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 226 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "549.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Jdspt",
		"stock": 50,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 227 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "969.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "eK9Su",
		"stock": 18,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 228 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "557.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "NbWNO",
		"stock": 51,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 229 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "322.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "6ZxjK",
		"stock": 91,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 230 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "115.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "GyIP3",
		"stock": 10,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 231 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "761.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "JS4iL",
		"stock": 57,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 232 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "941.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "lUB9V",
		"stock": 40,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 233 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "589.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "fx5Kj",
		"stock": 4,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 234 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "823.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "hBrPZ",
		"stock": 42,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 235 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "403.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "LmQX6",
		"stock": 23,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 236 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "4.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "va8D7",
		"stock": 19,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 237 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "669.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "dKVwp",
		"stock": 38,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 238 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "384.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "2Anxu",
		"stock": 99,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 239 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "495.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Ogp0k",
		"stock": 96,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 240 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "558.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "uUpRO",
		"stock": 8,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 241 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "227.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4RD7z",
		"stock": 65,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 242 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "522.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "YLkX7",
		"stock": 22,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 243 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "364.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "GOltK",
		"stock": 35,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 244 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "992.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "EUZbT",
		"stock": 13,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 245 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "596.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "9M2j4",
		"stock": 55,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 246 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "862.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "fbK9k",
		"stock": 82,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 247 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "293.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "sEQqn",
		"stock": 90,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 248 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "632.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Dmq1M",
		"stock": 75,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 249 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "165.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "9Crhm",
		"stock": 12,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 250 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "125.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "IE522",
		"stock": 73,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 251 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "122.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "LjCXR",
		"stock": 49,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 252 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "972.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BI0T2",
		"stock": 4,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 253 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "671.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Lx1Dm",
		"stock": 63,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 254 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "970.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UOSBE",
		"stock": 6,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 255 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "728.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "FEQIu",
		"stock": 42,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 256 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "29.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "VPeGj",
		"stock": 85,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 257 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "415.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "W8knp",
		"stock": 68,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 258 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "360.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Tn0YT",
		"stock": 87,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 259 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "158.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "JUjWW",
		"stock": 50,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 260 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "695.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "3Ie2p",
		"stock": 30,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 261 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "2.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ltxdl",
		"stock": 4,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 262 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "29.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "RG5XN",
		"stock": 7,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 263 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "9.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "CdnQZ",
		"stock": 56,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 264 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "549.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "iPj4b",
		"stock": 39,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 265 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "65.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "fcAUq",
		"stock": 75,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 266 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "314.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "P4cL4",
		"stock": 93,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 267 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "654.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4S7DE",
		"stock": 100,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 268 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "488.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "SxAjP",
		"stock": 62,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 269 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "804.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "JhvhC",
		"stock": 23,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 270 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "25.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "S1hqr",
		"stock": 80,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 271 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "652.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "sCrx2",
		"stock": 34,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 272 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "504.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "0WIzP",
		"stock": 12,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 273 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "650.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "50Yek",
		"stock": 92,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 274 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "433.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "osd9V",
		"stock": 48,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 275 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "513.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "OEJBt",
		"stock": 4,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 276 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "953.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "2FwTw",
		"stock": 51,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 277 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "116.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "zv5S2",
		"stock": 75,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 278 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "94.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ZHQ3m",
		"stock": 36,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 279 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "987.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "VP6dQ",
		"stock": 71,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 280 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "38.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "z44Yx",
		"stock": 11,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 281 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "902.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "FSfeQ",
		"stock": 78,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 282 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "11.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "uORQW",
		"stock": 36,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 283 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "12.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "bRFue",
		"stock": 90,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 284 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "403.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "AKHm6",
		"stock": 49,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 285 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "732.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "cme5M",
		"stock": 45,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 286 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "586.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Tk7D4",
		"stock": 83,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 287 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "264.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "5kX83",
		"stock": 23,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 288 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "313.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "8ryC9",
		"stock": 19,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 289 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "593.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "b47y3",
		"stock": 16,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 290 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "77.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "uC9CF",
		"stock": 57,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 291 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "452.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "3OYkY",
		"stock": 64,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 292 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "627.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "hw8AF",
		"stock": 80,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 293 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "112.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "njxes",
		"stock": 76,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 294 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "912.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "dXVhk",
		"stock": 79,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 295 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "471.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Way2T",
		"stock": 25,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 296 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "587.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "27VsX",
		"stock": 56,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 297 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "873.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "tyEmu",
		"stock": 81,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 298 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "456.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "SSaTS",
		"stock": 21,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 299 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "424.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UdCod",
		"stock": 57,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 300 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "141.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Vj0CF",
		"stock": 11,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 301 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "83.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "rQkb0",
		"stock": 84,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 302 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "873.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "vMb7Z",
		"stock": 1,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 303 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "218.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "6WjSZ",
		"stock": 20,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 304 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "571.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ojq3f",
		"stock": 67,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 305 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "898.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "3v9GL",
		"stock": 26,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 306 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "302.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UxnlB",
		"stock": 23,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 307 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "273.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "mmY5a",
		"stock": 46,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 308 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "915.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Q9bpX",
		"stock": 98,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 309 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "268.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "7o1hq",
		"stock": 61,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 310 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "685.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "s859v",
		"stock": 58,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 311 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "775.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "0gpbD",
		"stock": 42,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 312 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "612.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "WQ3cq",
		"stock": 15,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 313 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "386.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "o26r7",
		"stock": 52,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 314 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "548.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "RNo4I",
		"stock": 39,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 315 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "541.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "PnklD",
		"stock": 62,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 316 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "473.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BATok",
		"stock": 83,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 317 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "614.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "jjgey",
		"stock": 3,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 318 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "390.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "YtBW2",
		"stock": 40,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 319 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "114.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "iS1Xg",
		"stock": 40,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 320 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "25.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ZMqNm",
		"stock": 54,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 321 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "514.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "xEi3x",
		"stock": 74,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 322 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "485.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "vRAjT",
		"stock": 15,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 323 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "156.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "qEjEX",
		"stock": 20,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 324 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "572.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "T6lYL",
		"stock": 85,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 325 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "646.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "5IAKV",
		"stock": 58,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 326 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "270.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "EQUoy",
		"stock": 86,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 327 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "879.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "X3qUA",
		"stock": 43,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 328 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "485.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "5irOJ",
		"stock": 74,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 329 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "807.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "7NndW",
		"stock": 5,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 330 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "398.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "w4hJB",
		"stock": 77,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 331 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "695.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "2sFKj",
		"stock": 38,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 332 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "426.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "AyYAN",
		"stock": 53,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 333 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "482.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "v9QGY",
		"stock": 93,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 334 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "76.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "pNXc8",
		"stock": 64,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 335 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "98.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ADqii",
		"stock": 46,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 336 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "766.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "SCtrW",
		"stock": 67,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 337 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "51.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "x2vnL",
		"stock": 6,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 338 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "182.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "toFYx",
		"stock": 78,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 339 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "473.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "H7ddz",
		"stock": 67,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 340 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "286.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "SGrbr",
		"stock": 47,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 341 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "449.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "joIa9",
		"stock": 35,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 342 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "971.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "iA1Ml",
		"stock": 20,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 343 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "197.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "hC1R9",
		"stock": 42,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 344 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "640.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "tV6Ts",
		"stock": 47,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 345 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "679.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "zgmsV",
		"stock": 19,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 346 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "282.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "XIwXd",
		"stock": 66,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 347 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "874.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "7iFJr",
		"stock": 46,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 348 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "771.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "5sHPQ",
		"stock": 80,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 349 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "516.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BHlLo",
		"stock": 60,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 350 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "312.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "9EqWo",
		"stock": 14,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 351 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "270.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "6WvKT",
		"stock": 29,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 352 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "869.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Xx65G",
		"stock": 3,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 353 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "279.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "iwlap",
		"stock": 20,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 354 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "852.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "hmMU6",
		"stock": 1,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 355 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "125.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "6m8kH",
		"stock": 35,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 356 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "753.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "8R0F2",
		"stock": 78,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 357 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "470.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "t4S9e",
		"stock": 81,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 358 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "534.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "uRWMe",
		"stock": 88,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 359 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "230.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "pMYmX",
		"stock": 8,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 360 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "630.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "x3Dlt",
		"stock": 79,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 361 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "868.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BzkBd",
		"stock": 47,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 362 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "73.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "N8WWa",
		"stock": 4,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 363 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "263.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4Av5T",
		"stock": 21,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 364 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "94.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "hDmFE",
		"stock": 54,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 365 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "391.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "WLqCK",
		"stock": 91,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 366 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "18.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "kqr4D",
		"stock": 59,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 367 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "927.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ZG6vA",
		"stock": 48,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 368 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "963.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "7CJrY",
		"stock": 55,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 369 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "968.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4k0OD",
		"stock": 21,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 370 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "473.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ScEkq",
		"stock": 70,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 371 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "881.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "g2zUT",
		"stock": 50,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 372 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "459.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "OGWhK",
		"stock": 76,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 373 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "163.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "z0ZlL",
		"stock": 58,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 374 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "451.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "qgvjH",
		"stock": 1,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 375 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "687.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "vauil",
		"stock": 36,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 376 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "864.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "I6JVt",
		"stock": 79,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 377 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "728.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "oG6pB",
		"stock": 37,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 378 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "849.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "2yNNM",
		"stock": 56,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 379 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "759.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "xIkHy",
		"stock": 3,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 380 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "975.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "bdFzY",
		"stock": 52,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 381 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "293.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "KMT49",
		"stock": 59,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 382 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "654.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "7JYKq",
		"stock": 81,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 383 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "432.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "9TsnQ",
		"stock": 34,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 384 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "677.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "MgvWl",
		"stock": 24,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 385 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "875.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "DNg4j",
		"stock": 73,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 386 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "887.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "gsjHT",
		"stock": 34,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 387 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "115.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "zBHrj",
		"stock": 61,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 388 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "808.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "khkdW",
		"stock": 100,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 389 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "651.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "dd0cg",
		"stock": 14,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 390 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "82.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "fy2JF",
		"stock": 34,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 391 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "649.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "oSZmD",
		"stock": 3,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 392 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "408.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "wlvXo",
		"stock": 42,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 393 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "675.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "js0xm",
		"stock": 21,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 394 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "121.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "TFRrL",
		"stock": 68,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 395 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "861.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "bB6YA",
		"stock": 49,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 396 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "16.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "cBZ8v",
		"stock": 81,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 397 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "30.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "TtWKH",
		"stock": 6,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 398 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "332.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "cRO1d",
		"stock": 58,
		"category": "Incredible",
		"status": true
	},
	{
		"title": "Producto 399 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "795.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "azj6z",
		"stock": 10,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 400 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "136.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Ea1CQ",
		"stock": 40,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 401 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "553.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "gyDld",
		"stock": 44,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 402 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "870.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "A2EqF",
		"stock": 15,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 403 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "922.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "IioDp",
		"stock": 79,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 404 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "657.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "7pUom",
		"stock": 34,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 405 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "183.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "lDCYh",
		"stock": 90,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 406 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "14.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "5byvF",
		"stock": 49,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 407 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "298.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "n7lsc",
		"stock": 55,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 408 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "659.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "splrf",
		"stock": 56,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 409 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "642.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "E2VSB",
		"stock": 63,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 410 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "735.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "IpVLE",
		"stock": 57,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 411 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "850.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "D402Z",
		"stock": 32,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 412 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "594.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "jhoXQ",
		"stock": 59,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 413 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "665.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "VfjE1",
		"stock": 79,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 414 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "813.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "OQr8b",
		"stock": 88,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 415 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "439.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "04Fic",
		"stock": 86,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 416 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "528.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "v2TEW",
		"stock": 1,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 417 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "889.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "L0RXL",
		"stock": 41,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 418 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "306.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4k53U",
		"stock": 100,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 419 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "123.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "CoD7T",
		"stock": 92,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 420 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "591.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "kH61d",
		"stock": 52,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 421 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "334.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "zzttx",
		"stock": 75,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 422 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "508.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "6htBc",
		"stock": 67,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 423 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "109.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "WfNeV",
		"stock": 28,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 424 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "751.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "SYL6p",
		"stock": 4,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 425 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "946.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "5en6W",
		"stock": 20,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 426 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "118.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "9CZvr",
		"stock": 10,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 427 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "847.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "0CGEn",
		"stock": 79,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 428 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "994.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "T4M6Q",
		"stock": 49,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 429 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "615.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "r40i7",
		"stock": 59,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 430 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "739.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "CQcjz",
		"stock": 28,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 431 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "402.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "kVUz5",
		"stock": 90,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 432 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "217.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "AimeH",
		"stock": 66,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 433 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "476.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "LM9Ia",
		"stock": 35,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 434 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "870.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "yTMSq",
		"stock": 38,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 435 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "702.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "nmkhS",
		"stock": 63,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 436 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "518.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ii7iZ",
		"stock": 13,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 437 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "178.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "mxrft",
		"stock": 35,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 438 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "688.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "kpoVG",
		"stock": 25,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 439 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "454.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "hSDdO",
		"stock": 85,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 440 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "586.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Yvt4K",
		"stock": 31,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 441 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "851.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "j2J8q",
		"stock": 75,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 442 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "286.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "JAq8F",
		"stock": 54,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 443 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "977.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "cp5MN",
		"stock": 57,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 444 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "623.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "a05ji",
		"stock": 64,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 445 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "614.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "yJ9mw",
		"stock": 44,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 446 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "357.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ZhUy5",
		"stock": 29,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 447 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "608.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ccHO8",
		"stock": 53,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 448 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "849.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "jNVt4",
		"stock": 14,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 449 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "768.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "qnHJP",
		"stock": 99,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 450 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "202.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "2GEz5",
		"stock": 68,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 451 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "602.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "bCzZ9",
		"stock": 8,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 452 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "672.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "nDGUr",
		"stock": 47,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 453 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "568.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "WtZO5",
		"stock": 19,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 454 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "146.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4fekP",
		"stock": 57,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 455 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "933.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "sf8Cy",
		"stock": 99,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 456 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "238.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "k4RcJ",
		"stock": 70,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 457 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "710.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "lKlEe",
		"stock": 97,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 458 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "905.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "RTtkp",
		"stock": 45,
		"category": "Electronic",
		"status": true
	},
	{
		"title": "Producto 459 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "61.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "kt3WK",
		"stock": 92,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 460 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "518.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "xt1uA",
		"stock": 6,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 461 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "788.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "FQN4I",
		"stock": 17,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 462 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "57.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "dBHF3",
		"stock": 76,
		"category": "Awesome",
		"status": true
	},
	{
		"title": "Producto 463 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "954.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "0snMt",
		"stock": 86,
		"category": "Ergonomic",
		"status": true
	},
	{
		"title": "Producto 464 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "995.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "49LBn",
		"stock": 8,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 465 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "47.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "lp4UU",
		"stock": 18,
		"category": "Practical",
		"status": true
	},
	{
		"title": "Producto 466 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "553.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "1ET2m",
		"stock": 84,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 467 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "913.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "zQ6SS",
		"stock": 86,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 468 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "266.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "g6uNd",
		"stock": 88,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 469 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "833.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "sNwuu",
		"stock": 98,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 470 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "966.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "jFEEX",
		"stock": 17,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 471 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "378.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "VTTzl",
		"stock": 63,
		"category": "Generic",
		"status": true
	},
	{
		"title": "Producto 472 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "853.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "CeJXM",
		"stock": 72,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 473 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "287.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "AM5vQ",
		"stock": 52,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 474 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "157.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "5DwMV",
		"stock": 71,
		"category": "Handmade",
		"status": true
	},
	{
		"title": "Producto 475 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "544.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "UT0Sb",
		"stock": 67,
		"category": "Oriental",
		"status": true
	},
	{
		"title": "Producto 476 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "818.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "0oaCH",
		"stock": 4,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 477 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "456.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "AzvVU",
		"stock": 44,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 478 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "411.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "b4hsx",
		"stock": 29,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 479 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "998.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "RnO5i",
		"stock": 68,
		"category": "Handcrafted",
		"status": true
	},
	{
		"title": "Producto 480 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "312.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "zodS7",
		"stock": 23,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 481 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "704.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "mW81m",
		"stock": 70,
		"category": "Rustic",
		"status": true
	},
	{
		"title": "Producto 482 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "278.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "zGyri",
		"stock": 34,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 483 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "575.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "Bqmd9",
		"stock": 62,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 484 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "367.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "4GC7S",
		"stock": 79,
		"category": "Recycled",
		"status": true
	},
	{
		"title": "Producto 485 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "904.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "tWvFL",
		"stock": 74,
		"category": "Intelligent",
		"status": true
	},
	{
		"title": "Producto 486 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "573.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "ShJqv",
		"stock": 70,
		"category": "Modern",
		"status": true
	},
	{
		"title": "Producto 487 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "199.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "yKhBZ",
		"stock": 52,
		"category": "Small",
		"status": true
	},
	{
		"title": "Producto 488 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "866.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "0W1su",
		"stock": 42,
		"category": "Gorgeous",
		"status": true
	},
	{
		"title": "Producto 489 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "705.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "BHsL9",
		"stock": 86,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 490 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "476.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "jOXOS",
		"stock": 86,
		"category": "Unbranded",
		"status": true
	},
	{
		"title": "Producto 491 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "665.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "6a7rr",
		"stock": 60,
		"category": "Luxurious",
		"status": true
	},
	{
		"title": "Producto 492 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "632.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "w1V3H",
		"stock": 12,
		"category": "Elegant",
		"status": true
	},
	{
		"title": "Producto 493 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "606.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "QxiEE",
		"stock": 14,
		"category": "Sleek",
		"status": true
	},
	{
		"title": "Producto 494 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "285.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "EVAIN",
		"stock": 13,
		"category": "Licensed",
		"status": true
	},
	{
		"title": "Producto 495 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "858.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "PTxbI",
		"stock": 6,
		"category": "Bespoke",
		"status": true
	},
	{
		"title": "Producto 496 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "263.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "5IwqH",
		"stock": 2,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 497 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "450.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "T0mAz",
		"stock": 96,
		"category": "Fantastic",
		"status": true
	},
	{
		"title": "Producto 498 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "461.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "W5XsD",
		"stock": 46,
		"category": "Tasty",
		"status": true
	},
	{
		"title": "Producto 499 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "839.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "0nbFK",
		"stock": 48,
		"category": "Refined",
		"status": true
	},
	{
		"title": "Producto 500 rtp con Code alfanumerico",
		"description": "Producto Creado de prueba con timestamps",
		"price": "662.00",
		"thumbnail": "imagenPostman.jpg",
		"code": "lIG90",
		"stock": 14,
		"category": "Handmade",
		"status": true
	}
];



for (let i = 1; i <= 1; i++) {
  const product = {
    title: `Producto ${i.toString().padStart(3, '0')} rtp con Code alfanumerico`,
    description: "Producto Creado de prueba con timestamps",
    price: faker.commerce.price(),
    thumbnail: "imagenPostman.jpg",
    code: faker.string.alphanumeric(5),
    stock: faker.number.int({ min: 1, max: 100 }),
    category: faker.commerce.productAdjective(),
    status: true
  };

  

}
await pm.addProduct({
  "title": "Producto 500 rtp con Code alfanumerico",
  "description": "Producto Creado de prueba con timestamps",
  "price": "662.00",
  "thumbnail": "imagenPostman.jpg",
  "code": "lIG90",
  "stock": 14,
  "category": "Handmade",
  "status": true
})
// await pm.createMany([
//   {
// 		"title": "Producto 471 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "378.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "VTTzl",
// 		"stock": 63,
// 		"category": "Generic",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 472 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "853.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "CeJXM",
// 		"stock": 72,
// 		"category": "Refined",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 473 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "287.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "AM5vQ",
// 		"stock": 52,
// 		"category": "Unbranded",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 474 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "157.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "5DwMV",
// 		"stock": 71,
// 		"category": "Handmade",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 475 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "544.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "UT0Sb",
// 		"stock": 67,
// 		"category": "Oriental",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 476 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "818.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "0oaCH",
// 		"stock": 4,
// 		"category": "Intelligent",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 477 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "456.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "AzvVU",
// 		"stock": 44,
// 		"category": "Licensed",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 478 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "411.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "b4hsx",
// 		"stock": 29,
// 		"category": "Modern",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 479 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "998.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "RnO5i",
// 		"stock": 68,
// 		"category": "Handcrafted",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 480 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "312.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "zodS7",
// 		"stock": 23,
// 		"category": "Rustic",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 481 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "704.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "mW81m",
// 		"stock": 70,
// 		"category": "Rustic",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 482 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "278.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "zGyri",
// 		"stock": 34,
// 		"category": "Sleek",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 483 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "575.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "Bqmd9",
// 		"stock": 62,
// 		"category": "Intelligent",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 484 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "367.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "4GC7S",
// 		"stock": 79,
// 		"category": "Recycled",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 485 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "904.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "tWvFL",
// 		"stock": 74,
// 		"category": "Intelligent",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 486 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "573.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "ShJqv",
// 		"stock": 70,
// 		"category": "Modern",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 487 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "199.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "yKhBZ",
// 		"stock": 52,
// 		"category": "Small",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 488 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "866.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "0W1su",
// 		"stock": 42,
// 		"category": "Gorgeous",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 489 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "705.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "BHsL9",
// 		"stock": 86,
// 		"category": "Sleek",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 490 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "476.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "jOXOS",
// 		"stock": 86,
// 		"category": "Unbranded",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 491 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "665.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "6a7rr",
// 		"stock": 60,
// 		"category": "Luxurious",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 492 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "632.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "w1V3H",
// 		"stock": 12,
// 		"category": "Elegant",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 493 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "606.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "QxiEE",
// 		"stock": 14,
// 		"category": "Sleek",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 494 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "285.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "EVAIN",
// 		"stock": 13,
// 		"category": "Licensed",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 495 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "858.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "PTxbI",
// 		"stock": 6,
// 		"category": "Bespoke",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 496 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "263.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "5IwqH",
// 		"stock": 2,
// 		"category": "Tasty",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 497 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "450.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "T0mAz",
// 		"stock": 96,
// 		"category": "Fantastic",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 498 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "461.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "W5XsD",
// 		"stock": 46,
// 		"category": "Tasty",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 499 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "839.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "0nbFK",
// 		"stock": 48,
// 		"category": "Refined",
// 		"status": true
// 	},
// 	{
// 		"title": "Producto 500 rtp con Code alfanumerico",
// 		"description": "Producto Creado de prueba con timestamps",
// 		"price": "662.00",
// 		"thumbnail": "imagenPostman.jpg",
// 		"code": "lIG90",
// 		"stock": 14,
// 		"category": "Handmade",
// 		"status": true
// 	}
// ])

}

context();

