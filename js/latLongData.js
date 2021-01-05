
// fetch("https://covid-19-data.p.rapidapi.com/help/countries?format=json", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
// 		"x-rapidapi-key": "1294c84cc8msh761b325fd1cd7dap1f4f57jsn3dbacb4f64e9"
// 	}
// })
// .then(response => {
//     return response.json();
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(err => {
// 	console.log(err);
// });

var locationData = [
    {
    "name": "Afghanistan",
    "alpha2code": "AF",
    "alpha3code": "AFG",
    "lat": 33.93911,
    "lng": 67.709953
    },
    {
    "name": "Åland Islands",
    "alpha2code": "AX",
    "alpha3code": "ALA",
    "lat": 60.1995487,
    "lng": 20.3711715
    },
    {
    "name": "Albania",
    "alpha2code": "AL",
    "alpha3code": "ALB",
    "lat": 41.153332,
    "lng": 20.168331
    },
    {
    "name": "Algeria",
    "alpha2code": "DZ",
    "alpha3code": "DZA",
    "lat": 28.033886,
    "lng": 1.659626
    },
    {
    "name": "American Samoa",
    "alpha2code": "AS",
    "alpha3code": "ASM",
    "lat": -14.270972,
    "lng": -170.132217
    },
    {
    "name": "Andorra",
    "alpha2code": "AD",
    "alpha3code": "AND",
    "lat": 42.546245,
    "lng": 1.601554
    },
    {
    "name": "Angola",
    "alpha2code": "AO",
    "alpha3code": "AGO",
    "lat": -11.202692,
    "lng": 17.873887
    },
    {
    "name": "Anguilla",
    "alpha2code": "AI",
    "alpha3code": "AIA",
    "lat": 18.220554,
    "lng": -63.068615
    },
    {
    "name": "Antarctica",
    "alpha2code": "AQ",
    "alpha3code": "ATA",
    "lat": -75.250973,
    "lng": -0.071389
    },
    {
    "name": "Antigua and Barbuda",
    "alpha2code": "AG",
    "alpha3code": "ATG",
    "lat": 17.060816,
    "lng": -61.796428
    },
    {
    "name": "Argentina",
    "alpha2code": "AR",
    "alpha3code": "ARG",
    "lat": -38.416097,
    "lng": -63.616672
    },
    {
    "name": "Armenia",
    "alpha2code": "AM",
    "alpha3code": "ARM",
    "lat": 40.069099,
    "lng": 45.038189
    },
    {
    "name": "Aruba",
    "alpha2code": "AW",
    "alpha3code": "ABW",
    "lat": 12.52111,
    "lng": -69.968338
    },
    {
    "name": "Australia",
    "alpha2code": "AU",
    "alpha3code": "AUS",
    "lat": -25.274398,
    "lng": 133.775136
    },
    {
    "name": "Austria",
    "alpha2code": "AT",
    "alpha3code": "AUT",
    "lat": 47.516231,
    "lng": 14.550072
    },
    {
    "name": "Azerbaijan",
    "alpha2code": "AZ",
    "alpha3code": "AZE",
    "lat": 40.143105,
    "lng": 47.576927
    },
    {
    "name": "Bahamas",
    "alpha2code": "BS",
    "alpha3code": "BHS",
    "lat": 25.03428,
    "lng": -77.39628
    },
    {
    "name": "Bahrain",
    "alpha2code": "BH",
    "alpha3code": "BHR",
    "lat": 25.930414,
    "lng": 50.637772
    },
    {
    "name": "Bangladesh",
    "alpha2code": "BD",
    "alpha3code": "BGD",
    "lat": 23.684994,
    "lng": 90.356331
    },
    {
    "name": "Barbados",
    "alpha2code": "BB",
    "alpha3code": "BRB",
    "lat": 13.193887,
    "lng": -59.543198
    },
    {
    "name": "Belarus",
    "alpha2code": "BY",
    "alpha3code": "BLR",
    "lat": 53.709807,
    "lng": 27.953389
    },
    {
    "name": "Belgium",
    "alpha2code": "BE",
    "alpha3code": "BEL",
    "lat": 50.503887,
    "lng": 4.469936
    },
    {
    "name": "Belize",
    "alpha2code": "BZ",
    "alpha3code": "BLZ",
    "lat": 17.189877,
    "lng": -88.49765
    },
    {
    "name": "Benin",
    "alpha2code": "BJ",
    "alpha3code": "BEN",
    "lat": 9.30769,
    "lng": 2.315834
    },
    {
    "name": "Bermuda",
    "alpha2code": "BM",
    "alpha3code": "BMU",
    "lat": 32.321384,
    "lng": -64.75737
    },
    {
    "name": "Bhutan",
    "alpha2code": "BT",
    "alpha3code": "BTN",
    "lat": 27.514162,
    "lng": 90.433601
    },
    {
    "name": "Bolivia",
    "alpha2code": "BO",
    "alpha3code": "BOL",
    "lat": -16.290154,
    "lng": -63.588653
    },
    {
    "name": "Bonaire, Sint Eustatius and Saba",
    "alpha2code": "BQ",
    "alpha3code": "BES",
    "lat": 12.1683718,
    "lng": -68.308183
    },
    {
    "name": "Bosnia and Herzegovina",
    "alpha2code": "BA",
    "alpha3code": "BIH",
    "lat": 43.915886,
    "lng": 17.679076
    },
    {
    "name": "Botswana",
    "alpha2code": "BW",
    "alpha3code": "BWA",
    "lat": -22.328474,
    "lng": 24.684866
    },
    {
    "name": "Bouvet Island",
    "alpha2code": "BV",
    "alpha3code": "BVT",
    "lat": -54.423199,
    "lng": 3.413194
    },
    {
    "name": "Brazil",
    "alpha2code": "BR",
    "alpha3code": "BRA",
    "lat": -14.235004,
    "lng": -51.92528
    },
    {
    "name": "British Indian Ocean Territory",
    "alpha2code": "IO",
    "alpha3code": "IOT",
    "lat": -6.343194,
    "lng": 71.876519
    },
    {
    "name": "British Virgin Islands",
    "alpha2code": "VG",
    "alpha3code": "VGB",
    "lat": 18.420695,
    "lng": -64.639968
    },
    {
    "name": "Brunei",
    "alpha2code": "BN",
    "alpha3code": "BRN",
    "lat": 4.535277,
    "lng": 114.727669
    },
    {
    "name": "Bulgaria",
    "alpha2code": "BG",
    "alpha3code": "BGR",
    "lat": 42.733883,
    "lng": 25.48583
    },
    {
    "name": "Burkina Faso",
    "alpha2code": "BF",
    "alpha3code": "BFA",
    "lat": 12.238333,
    "lng": -1.561593
    },
    {
    "name": "Burundi",
    "alpha2code": "BI",
    "alpha3code": "BDI",
    "lat": -3.373056,
    "lng": 29.918886
    },
    {
    "name": "Cabo Verde",
    "alpha2code": "CV",
    "alpha3code": "CPV",
    "lat": 16.002082,
    "lng": -24.013197
    },
    {
    "name": "Cambodia",
    "alpha2code": "KH",
    "alpha3code": "KHM",
    "lat": 12.565679,
    "lng": 104.990963
    },
    {
    "name": "Cameroon",
    "alpha2code": "CM",
    "alpha3code": "CMR",
    "lat": 7.369722,
    "lng": 12.354722
    },
    {
    "name": "Canada",
    "alpha2code": "CA",
    "alpha3code": "CAN",
    "lat": 56.130366,
    "lng": -106.346771
    },
    {
    "name": "CAR",
    "alpha2code": "CF",
    "alpha3code": "CAF",
    "lat": 6.611111,
    "lng": 20.939444
    },
    {
    "name": "Cayman Islands",
    "alpha2code": "KY",
    "alpha3code": "CYM",
    "lat": 19.513469,
    "lng": -80.566956
    },
    {
    "name": "Chad",
    "alpha2code": "TD",
    "alpha3code": "TCD",
    "lat": 15.454166,
    "lng": 18.732207
    },
    {
    "name": "Channel Islands",
    "alpha2code": null,
    "alpha3code": null,
    "lat": 49.372284,
    "lng": -2.364351
    },
    {
    "name": "Chile",
    "alpha2code": "CL",
    "alpha3code": "CHL",
    "lat": -35.675147,
    "lng": -71.542969
    },
    {
    "name": "China",
    "alpha2code": "CN",
    "alpha3code": "CHN",
    "lat": 35.86166,
    "lng": 104.195397
    },
    {
    "name": "Christmas Island",
    "alpha2code": "CX",
    "alpha3code": "CXR",
    "lat": -10.447525,
    "lng": 105.690449
    },
    {
    "name": "Cocos (Keeling) Islands",
    "alpha2code": "CC",
    "alpha3code": "CCK",
    "lat": -12.164165,
    "lng": 96.870956
    },
    {
    "name": "Colombia",
    "alpha2code": "CO",
    "alpha3code": "COL",
    "lat": 4.570868,
    "lng": -74.297333
    },
    {
    "name": "Comoros",
    "alpha2code": "KM",
    "alpha3code": "COM",
    "lat": -11.875001,
    "lng": 43.872219
    },
    {
    "name": "Congo",
    "alpha2code": "CG",
    "alpha3code": "COG",
    "lat": -0.228021,
    "lng": 15.827659
    },
    {
    "name": "Cook Islands",
    "alpha2code": "CK",
    "alpha3code": "COK",
    "lat": -21.236736,
    "lng": -159.777671
    },
    {
    "name": "Costa Rica",
    "alpha2code": "CR",
    "alpha3code": "CRI",
    "lat": 9.748917,
    "lng": -83.753428
    },
    {
    "name": "Croatia",
    "alpha2code": "HR",
    "alpha3code": "HRV",
    "lat": 45.1,
    "lng": 15.2
    },
    {
    "name": "Cuba",
    "alpha2code": "CU",
    "alpha3code": "CUB",
    "lat": 21.521757,
    "lng": -77.781167
    },
    {
    "name": "Curaçao",
    "alpha2code": "CW",
    "alpha3code": "CUW",
    "lat": 12.16957,
    "lng": -68.990021
    },
    {
    "name": "Cyprus",
    "alpha2code": "CY",
    "alpha3code": "CYP",
    "lat": 35.126413,
    "lng": 33.429859
    },
    {
    "name": "Czech Republic",
    "alpha2code": "CZ",
    "alpha3code": "CZE",
    "lat": 49.817492,
    "lng": 15.472962
    },
    {
    "name": "Denmark",
    "alpha2code": "DK",
    "alpha3code": "DNK",
    "lat": 56.26392,
    "lng": 9.501785
    },
    {
    "name": "Diamond Princess",
    "alpha2code": null,
    "alpha3code": null,
    "lat": null,
    "lng": null
    },
    {
    "name": "Djibouti",
    "alpha2code": "DJ",
    "alpha3code": "DJI",
    "lat": 11.825138,
    "lng": 42.590275
    },
    {
    "name": "Dominica",
    "alpha2code": "DM",
    "alpha3code": "DMA",
    "lat": 15.414999,
    "lng": -61.370976
    },
    {
    "name": "Dominican Republic",
    "alpha2code": "DO",
    "alpha3code": "DOM",
    "lat": 18.735693,
    "lng": -70.162651
    },
    {
    "name": "DRC",
    "alpha2code": "CD",
    "alpha3code": "COD",
    "lat": -4.038333,
    "lng": 21.758664
    },
    {
    "name": "Ecuador",
    "alpha2code": "EC",
    "alpha3code": "ECU",
    "lat": -1.831239,
    "lng": -78.183406
    },
    {
    "name": "Egypt",
    "alpha2code": "EG",
    "alpha3code": "EGY",
    "lat": 26.820553,
    "lng": 30.802498
    },
    {
    "name": "El Salvador",
    "alpha2code": "SV",
    "alpha3code": "SLV",
    "lat": 13.794185,
    "lng": -88.89653
    },
    {
    "name": "Equatorial Guinea",
    "alpha2code": "GQ",
    "alpha3code": "GNQ",
    "lat": 1.650801,
    "lng": 10.267895
    },
    {
    "name": "Eritrea",
    "alpha2code": "ER",
    "alpha3code": "ERI",
    "lat": 15.179384,
    "lng": 39.782334
    },
    {
    "name": "Estonia",
    "alpha2code": "EE",
    "alpha3code": "EST",
    "lat": 58.595272,
    "lng": 25.013607
    },
    {
    "name": "Eswatini",
    "alpha2code": "SZ",
    "alpha3code": "SWZ",
    "lat": -26.522503,
    "lng": 31.465866
    },
    {
    "name": "Ethiopia",
    "alpha2code": "ET",
    "alpha3code": "ETH",
    "lat": 9.145,
    "lng": 40.489673
    },
    {
    "name": "Faeroe Islands",
    "alpha2code": "FO",
    "alpha3code": "FRO",
    "lat": 61.892635,
    "lng": -6.911806
    },
    {
    "name": "Falkland Islands",
    "alpha2code": "FK",
    "alpha3code": "FLK",
    "lat": -51.796253,
    "lng": -59.523613
    },
    {
    "name": "Fiji",
    "alpha2code": "FJ",
    "alpha3code": "FJI",
    "lat": -16.578193,
    "lng": 179.414413
    },
    {
    "name": "Finland",
    "alpha2code": "FI",
    "alpha3code": "FIN",
    "lat": 61.92411,
    "lng": 25.748151
    },
    {
    "name": "France",
    "alpha2code": "FR",
    "alpha3code": "FRA",
    "lat": 46.227638,
    "lng": 2.213749
    },
    {
    "name": "French Guiana",
    "alpha2code": "GF",
    "alpha3code": "GUF",
    "lat": 3.933889,
    "lng": -53.125782
    },
    {
    "name": "French Polynesia",
    "alpha2code": "PF",
    "alpha3code": "PYF",
    "lat": -17.679742,
    "lng": -149.406843
    },
    {
    "name": "French Southern Territories",
    "alpha2code": "TF",
    "alpha3code": "ATF",
    "lat": -49.280366,
    "lng": 69.348557
    },
    {
    "name": "Gabon",
    "alpha2code": "GA",
    "alpha3code": "GAB",
    "lat": -0.803689,
    "lng": 11.609444
    },
    {
    "name": "Gambia",
    "alpha2code": "GM",
    "alpha3code": "GMB",
    "lat": 13.443182,
    "lng": -15.310139
    },
    {
    "name": "Georgia",
    "alpha2code": "GE",
    "alpha3code": "GEO",
    "lat": 42.315407,
    "lng": 43.356892
    },
    {
    "name": "Germany",
    "alpha2code": "DE",
    "alpha3code": "DEU",
    "lat": 51.165691,
    "lng": 10.451526
    },
    {
    "name": "Ghana",
    "alpha2code": "GH",
    "alpha3code": "GHA",
    "lat": 7.946527,
    "lng": -1.023194
    },
    {
    "name": "Gibraltar",
    "alpha2code": "GI",
    "alpha3code": "GIB",
    "lat": 36.137741,
    "lng": -5.345374
    },
    {
    "name": "Greece",
    "alpha2code": "GR",
    "alpha3code": "GRC",
    "lat": 39.074208,
    "lng": 21.824312
    },
    {
    "name": "Greenland",
    "alpha2code": "GL",
    "alpha3code": "GRL",
    "lat": 71.706936,
    "lng": -42.604303
    },
    {
    "name": "Grenada",
    "alpha2code": "GD",
    "alpha3code": "GRD",
    "lat": 12.262776,
    "lng": -61.604171
    },
    {
    "name": "Guadeloupe",
    "alpha2code": "GP",
    "alpha3code": "GLP",
    "lat": 16.995971,
    "lng": -62.067641
    },
    {
    "name": "Guam",
    "alpha2code": "GU",
    "alpha3code": "GUM",
    "lat": 13.444304,
    "lng": 144.793731
    },
    {
    "name": "Guatemala",
    "alpha2code": "GT",
    "alpha3code": "GTM",
    "lat": 15.783471,
    "lng": -90.230759
    },
    {
    "name": "Guernsey",
    "alpha2code": "GG",
    "alpha3code": "GGY",
    "lat": 49.465691,
    "lng": -2.585278
    },
    {
    "name": "Guinea",
    "alpha2code": "GN",
    "alpha3code": "GIN",
    "lat": 9.945587,
    "lng": -9.696645
    },
    {
    "name": "Guinea-Bissau",
    "alpha2code": "GW",
    "alpha3code": "GNB",
    "lat": 11.803749,
    "lng": -15.180413
    },
    {
    "name": "Guyana",
    "alpha2code": "GY",
    "alpha3code": "GUY",
    "lat": 4.860416,
    "lng": -58.93018
    },
    {
    "name": "Haiti",
    "alpha2code": "HT",
    "alpha3code": "HTI",
    "lat": 18.971187,
    "lng": -72.285215
    },
    {
    "name": "Heard Island and Mcdonald Islands",
    "alpha2code": "HM",
    "alpha3code": "HMD",
    "lat": -53.08181,
    "lng": 73.504158
    },
    {
    "name": "Honduras",
    "alpha2code": "HN",
    "alpha3code": "HND",
    "lat": 15.199999,
    "lng": -86.241905
    },
    {
    "name": "Hong Kong",
    "alpha2code": "HK",
    "alpha3code": "HKG",
    "lat": 22.396428,
    "lng": 114.109497
    },
    {
    "name": "Hungary",
    "alpha2code": "HU",
    "alpha3code": "HUN",
    "lat": 47.162494,
    "lng": 19.503304
    },
    {
    "name": "Iceland",
    "alpha2code": "IS",
    "alpha3code": "ISL",
    "lat": 64.963051,
    "lng": -19.020835
    },
    {
    "name": "India",
    "alpha2code": "IN",
    "alpha3code": "IND",
    "lat": 20.593684,
    "lng": 78.96288
    },
    {
    "name": "Indonesia",
    "alpha2code": "ID",
    "alpha3code": "IDN",
    "lat": -0.789275,
    "lng": 113.921327
    },
    {
    "name": "Iran",
    "alpha2code": "IR",
    "alpha3code": "IRN",
    "lat": 32.427908,
    "lng": 53.688046
    },
    {
    "name": "Iraq",
    "alpha2code": "IQ",
    "alpha3code": "IRQ",
    "lat": 33.223191,
    "lng": 43.679291
    },
    {
    "name": "Ireland",
    "alpha2code": "IE",
    "alpha3code": "IRL",
    "lat": 53.41291,
    "lng": -8.24389
    },
    {
    "name": "Isle of Man",
    "alpha2code": "IM",
    "alpha3code": "IMN",
    "lat": 54.236107,
    "lng": -4.548056
    },
    {
    "name": "Israel",
    "alpha2code": "IL",
    "alpha3code": "ISR",
    "lat": 31.046051,
    "lng": 34.851612
    },
    {
    "name": "Italy",
    "alpha2code": "IT",
    "alpha3code": "ITA",
    "lat": 41.87194,
    "lng": 12.56738
    },
    {
    "name": "Ivory Coast",
    "alpha2code": "CI",
    "alpha3code": "CIV",
    "lat": 7.539989,
    "lng": -5.54708
    },
    {
    "name": "Jamaica",
    "alpha2code": "JM",
    "alpha3code": "JAM",
    "lat": 18.109581,
    "lng": -77.297508
    },
    {
    "name": "Japan",
    "alpha2code": "JP",
    "alpha3code": "JPN",
    "lat": 36.204824,
    "lng": 138.252924
    },
    {
    "name": "Jersey",
    "alpha2code": "JE",
    "alpha3code": "JEY",
    "lat": 49.214439,
    "lng": -2.13125
    },
    {
    "name": "Jordan",
    "alpha2code": "JO",
    "alpha3code": "JOR",
    "lat": 30.585164,
    "lng": 36.238414
    },
    {
    "name": "Kazakhstan",
    "alpha2code": "KZ",
    "alpha3code": "KAZ",
    "lat": 48.019573,
    "lng": 66.923684
    },
    {
    "name": "Kenya",
    "alpha2code": "KE",
    "alpha3code": "KEN",
    "lat": -0.023559,
    "lng": 37.906193
    },
    {
    "name": "Kiribati",
    "alpha2code": "KI",
    "alpha3code": "KIR",
    "lat": -3.370417,
    "lng": -168.734039
    },
    {
    "name": "Kosovo* (disputed teritory)",
    "alpha2code": null,
    "alpha3code": "XK",
    "lat": 42.66394,
    "lng": 21.09611
    },
    {
    "name": "Kuwait",
    "alpha2code": "KW",
    "alpha3code": "KWT",
    "lat": 29.31166,
    "lng": 47.481766
    },
    {
    "name": "Kyrgyzstan",
    "alpha2code": "KG",
    "alpha3code": "KGZ",
    "lat": 41.20438,
    "lng": 74.766098
    },
    {
    "name": "Laos",
    "alpha2code": "LA",
    "alpha3code": "LAO",
    "lat": 19.85627,
    "lng": 102.495496
    },
    {
    "name": "Latvia",
    "alpha2code": "LV",
    "alpha3code": "LVA",
    "lat": 56.879635,
    "lng": 24.603189
    },
    {
    "name": "Lebanon",
    "alpha2code": "LB",
    "alpha3code": "LBN",
    "lat": 33.854721,
    "lng": 35.862285
    },
    {
    "name": "Lesotho",
    "alpha2code": "LS",
    "alpha3code": "LSO",
    "lat": -29.609988,
    "lng": 28.233608
    },
    {
    "name": "Liberia",
    "alpha2code": "LR",
    "alpha3code": "LBR",
    "lat": 6.428055,
    "lng": -9.429499
    },
    {
    "name": "Libya",
    "alpha2code": "LY",
    "alpha3code": "LBY",
    "lat": 26.3351,
    "lng": 17.228331
    },
    {
    "name": "Liechtenstein",
    "alpha2code": "LI",
    "alpha3code": "LIE",
    "lat": 47.166,
    "lng": 9.555373
    },
    {
    "name": "Lithuania",
    "alpha2code": "LT",
    "alpha3code": "LTU",
    "lat": 55.169438,
    "lng": 23.881275
    },
    {
    "name": "Luxembourg",
    "alpha2code": "LU",
    "alpha3code": "LUX",
    "lat": 49.815273,
    "lng": 6.129583
    },
    {
    "name": "Macao",
    "alpha2code": "MO",
    "alpha3code": "MAC",
    "lat": 22.198745,
    "lng": 113.543873
    },
    {
    "name": "Madagascar",
    "alpha2code": "MG",
    "alpha3code": "MDG",
    "lat": -18.766947,
    "lng": 46.869107
    },
    {
    "name": "Malawi",
    "alpha2code": "MW",
    "alpha3code": "MWI",
    "lat": -13.254308,
    "lng": 34.301525
    },
    {
    "name": "Malaysia",
    "alpha2code": "MY",
    "alpha3code": "MYS",
    "lat": 4.210484,
    "lng": 101.975766
    },
    {
    "name": "Maldives",
    "alpha2code": "MV",
    "alpha3code": "MDV",
    "lat": 3.202778,
    "lng": 73.22068
    },
    {
    "name": "Mali",
    "alpha2code": "ML",
    "alpha3code": "MLI",
    "lat": 17.570692,
    "lng": -3.996166
    },
    {
    "name": "Malta",
    "alpha2code": "MT",
    "alpha3code": "MLT",
    "lat": 35.937496,
    "lng": 14.375416
    },
    {
    "name": "Marshall Islands",
    "alpha2code": "MH",
    "alpha3code": "MHL",
    "lat": 7.131474,
    "lng": 171.184478
    },
    {
    "name": "Martinique",
    "alpha2code": "MQ",
    "alpha3code": "MTQ",
    "lat": 14.641528,
    "lng": -61.024174
    },
    {
    "name": "Mauritania",
    "alpha2code": "MR",
    "alpha3code": "MRT",
    "lat": 21.00789,
    "lng": -10.940835
    },
    {
    "name": "Mauritius",
    "alpha2code": "MU",
    "alpha3code": "MUS",
    "lat": -20.348404,
    "lng": 57.552152
    },
    {
    "name": "Mayotte",
    "alpha2code": "YT",
    "alpha3code": "MYT",
    "lat": -12.8275,
    "lng": 45.166244
    },
    {
    "name": "Mexico",
    "alpha2code": "MX",
    "alpha3code": "MEX",
    "lat": 23.634501,
    "lng": -102.552784
    },
    {
    "name": "Micronesia",
    "alpha2code": "FM",
    "alpha3code": "FSM",
    "lat": 7.425554,
    "lng": 150.550812
    },
    {
    "name": "Moldova",
    "alpha2code": "MD",
    "alpha3code": "MDA",
    "lat": 47.411631,
    "lng": 28.369885
    },
    {
    "name": "Monaco",
    "alpha2code": "MC",
    "alpha3code": "MCO",
    "lat": 43.750298,
    "lng": 7.412841
    },
    {
    "name": "Mongolia",
    "alpha2code": "MN",
    "alpha3code": "MNG",
    "lat": 46.862496,
    "lng": 103.846656
    },
    {
    "name": "Montenegro",
    "alpha2code": "ME",
    "alpha3code": "MNE",
    "lat": 42.708678,
    "lng": 19.37439
    },
    {
    "name": "Montserrat",
    "alpha2code": "MS",
    "alpha3code": "MSR",
    "lat": 16.742498,
    "lng": -62.187366
    },
    {
    "name": "Morocco",
    "alpha2code": "MA",
    "alpha3code": "MAR",
    "lat": 31.791702,
    "lng": -7.09262
    },
    {
    "name": "Mozambique",
    "alpha2code": "MZ",
    "alpha3code": "MOZ",
    "lat": -18.665695,
    "lng": 35.529562
    },
    {
    "name": "MS Zaandam",
    "alpha2code": null,
    "alpha3code": null,
    "lat": null,
    "lng": null
    },
    {
    "name": "Myanmar",
    "alpha2code": "MM",
    "alpha3code": "MMR",
    "lat": 21.913965,
    "lng": 95.956223
    },
    {
    "name": "Namibia",
    "alpha2code": "NA",
    "alpha3code": "NAM",
    "lat": -22.95764,
    "lng": 18.49041
    },
    {
    "name": "Nauru",
    "alpha2code": "NR",
    "alpha3code": "NRU",
    "lat": -0.522778,
    "lng": 166.931503
    },
    {
    "name": "Nepal",
    "alpha2code": "NP",
    "alpha3code": "NPL",
    "lat": 28.394857,
    "lng": 84.124008
    },
    {
    "name": "Netherlands",
    "alpha2code": "NL",
    "alpha3code": "NLD",
    "lat": 52.132633,
    "lng": 5.291266
    },
    {
    "name": "New Caledonia",
    "alpha2code": "NC",
    "alpha3code": "NCL",
    "lat": -20.904305,
    "lng": 165.618042
    },
    {
    "name": "New Zealand",
    "alpha2code": "NZ",
    "alpha3code": "NZL",
    "lat": -40.900557,
    "lng": 174.885971
    },
    {
    "name": "Nicaragua",
    "alpha2code": "NI",
    "alpha3code": "NIC",
    "lat": 12.865416,
    "lng": -85.207229
    },
    {
    "name": "Niger",
    "alpha2code": "NE",
    "alpha3code": "NER",
    "lat": 17.607789,
    "lng": 8.081666
    },
    {
    "name": "Nigeria",
    "alpha2code": "NG",
    "alpha3code": "NGA",
    "lat": 9.081999,
    "lng": 8.675277
    },
    {
    "name": "Niue",
    "alpha2code": "NU",
    "alpha3code": "NIU",
    "lat": -19.054445,
    "lng": -169.867233
    },
    {
    "name": "Norfolk Island",
    "alpha2code": "NF",
    "alpha3code": "NFK",
    "lat": -29.040835,
    "lng": 167.954712
    },
    {
    "name": "North Korea",
    "alpha2code": "KP",
    "alpha3code": "PRK",
    "lat": 40.339852,
    "lng": 127.510093
    },
    {
    "name": "North Macedonia",
    "alpha2code": "MK",
    "alpha3code": "MKD",
    "lat": 41.608635,
    "lng": 21.745275
    },
    {
    "name": "Northern Mariana Islands",
    "alpha2code": "MP",
    "alpha3code": "MNP",
    "lat": 17.33083,
    "lng": 145.38469
    },
    {
    "name": "Norway",
    "alpha2code": "NO",
    "alpha3code": "NOR",
    "lat": 60.472024,
    "lng": 8.468946
    },
    {
    "name": "Oman",
    "alpha2code": "OM",
    "alpha3code": "OMN",
    "lat": 21.512583,
    "lng": 55.923255
    },
    {
    "name": "Pakistan",
    "alpha2code": "PK",
    "alpha3code": "PAK",
    "lat": 30.375321,
    "lng": 69.345116
    },
    {
    "name": "Palau",
    "alpha2code": "PW",
    "alpha3code": "PLW",
    "lat": 7.51498,
    "lng": 134.58252
    },
    {
    "name": "Palestine",
    "alpha2code": "PS",
    "alpha3code": "PSE",
    "lat": 31.952162,
    "lng": 35.233154
    },
    {
    "name": "Panama",
    "alpha2code": "PA",
    "alpha3code": "PAN",
    "lat": 8.537981,
    "lng": -80.782127
    },
    {
    "name": "Papua New Guinea",
    "alpha2code": "PG",
    "alpha3code": "PNG",
    "lat": -6.314993,
    "lng": 143.95555
    },
    {
    "name": "Paraguay",
    "alpha2code": "PY",
    "alpha3code": "PRY",
    "lat": -23.442503,
    "lng": -58.443832
    },
    {
    "name": "Peru",
    "alpha2code": "PE",
    "alpha3code": "PER",
    "lat": -9.189967,
    "lng": -75.015152
    },
    {
    "name": "Philippines",
    "alpha2code": "PH",
    "alpha3code": "PHL",
    "lat": 12.879721,
    "lng": 121.774017
    },
    {
    "name": "Pitcairn",
    "alpha2code": "PN",
    "alpha3code": "PCN",
    "lat": -24.703615,
    "lng": -127.439308
    },
    {
    "name": "Poland",
    "alpha2code": "PL",
    "alpha3code": "POL",
    "lat": 51.919438,
    "lng": 19.145136
    },
    {
    "name": "Portugal",
    "alpha2code": "PT",
    "alpha3code": "PRT",
    "lat": 39.399872,
    "lng": -8.224454
    },
    {
    "name": "Puerto Rico",
    "alpha2code": "PR",
    "alpha3code": "PRI",
    "lat": 18.220833,
    "lng": -66.590149
    },
    {
    "name": "Qatar",
    "alpha2code": "QA",
    "alpha3code": "QAT",
    "lat": 25.354826,
    "lng": 51.183884
    },
    {
    "name": "Reunion",
    "alpha2code": "RE",
    "alpha3code": "REU",
    "lat": -21.115141,
    "lng": 55.536384
    },
    {
    "name": "Romania",
    "alpha2code": "RO",
    "alpha3code": "ROU",
    "lat": 45.943161,
    "lng": 24.96676
    },
    {
    "name": "Russia",
    "alpha2code": "RU",
    "alpha3code": "RUS",
    "lat": 61.52401,
    "lng": 105.318756
    },
    {
    "name": "Rwanda",
    "alpha2code": "RW",
    "alpha3code": "RWA",
    "lat": -1.940278,
    "lng": 29.873888
    },
    {
    "name": "Saint Barthélemy",
    "alpha2code": "BL",
    "alpha3code": "BLM",
    "lat": 17.9139222,
    "lng": -62.8338521
    },
    {
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "alpha2code": "SH",
    "alpha3code": "SHN",
    "lat": -24.143474,
    "lng": -10.030696
    },
    {
    "name": "Saint Kitts and Nevis",
    "alpha2code": "KN",
    "alpha3code": "KNA",
    "lat": 17.357822,
    "lng": -62.782998
    },
    {
    "name": "Saint Lucia",
    "alpha2code": "LC",
    "alpha3code": "LCA",
    "lat": 13.909444,
    "lng": -60.978893
    },
    {
    "name": "Saint Martin",
    "alpha2code": "MF",
    "alpha3code": "MAF",
    "lat": 18.075277,
    "lng": -63.060001
    },
    {
    "name": "Saint Pierre and Miquelon",
    "alpha2code": "PM",
    "alpha3code": "SPM",
    "lat": 46.941936,
    "lng": -56.27111
    },
    {
    "name": "Samoa",
    "alpha2code": "WS",
    "alpha3code": "WSM",
    "lat": -13.759029,
    "lng": -172.104629
    },
    {
    "name": "San Marino",
    "alpha2code": "SM",
    "alpha3code": "SMR",
    "lat": 43.94236,
    "lng": 12.457777
    },
    {
    "name": "Sao Tome and Principe",
    "alpha2code": "ST",
    "alpha3code": "STP",
    "lat": 0.18636,
    "lng": 6.613081
    },
    {
    "name": "Saudi Arabia",
    "alpha2code": "SA",
    "alpha3code": "SAU",
    "lat": 23.885942,
    "lng": 45.079162
    },
    {
    "name": "Senegal",
    "alpha2code": "SN",
    "alpha3code": "SEN",
    "lat": 14.497401,
    "lng": -14.452362
    },
    {
    "name": "Serbia",
    "alpha2code": "RS",
    "alpha3code": "SRB",
    "lat": 44.016521,
    "lng": 21.005859
    },
    {
    "name": "Seychelles",
    "alpha2code": "SC",
    "alpha3code": "SYC",
    "lat": -4.679574,
    "lng": 55.491977
    },
    {
    "name": "Sierra Leone",
    "alpha2code": "SL",
    "alpha3code": "SLE",
    "lat": 8.460555,
    "lng": -11.779889
    },
    {
    "name": "Singapore",
    "alpha2code": "SG",
    "alpha3code": "SGP",
    "lat": 1.352083,
    "lng": 103.819836
    },
    {
    "name": "Sint Maarten",
    "alpha2code": "SX",
    "alpha3code": "SXM",
    "lat": 18.0347188,
    "lng": -63.0681114
    },
    {
    "name": "Slovakia",
    "alpha2code": "SK",
    "alpha3code": "SVK",
    "lat": 48.669026,
    "lng": 19.699024
    },
    {
    "name": "Slovenia",
    "alpha2code": "SI",
    "alpha3code": "SVN",
    "lat": 46.151241,
    "lng": 14.995463
    },
    {
    "name": "Solomon Islands",
    "alpha2code": "SB",
    "alpha3code": "SLB",
    "lat": -9.64571,
    "lng": 160.156194
    },
    {
    "name": "Somalia",
    "alpha2code": "SO",
    "alpha3code": "SOM",
    "lat": 5.152149,
    "lng": 46.199616
    },
    {
    "name": "South Africa",
    "alpha2code": "ZA",
    "alpha3code": "ZAF",
    "lat": -30.559482,
    "lng": 22.937506
    },
    {
    "name": "South Georgia and the South Sandwich Islands",
    "alpha2code": "GS",
    "alpha3code": "SGS",
    "lat": -54.429579,
    "lng": -36.587909
    },
    {
    "name": "South Korea",
    "alpha2code": "KR",
    "alpha3code": "KOR",
    "lat": 35.907757,
    "lng": 127.766922
    },
    {
    "name": "South Sudan",
    "alpha2code": "SS",
    "alpha3code": "SSD",
    "lat": 7.8626845,
    "lng": 29.6949232
    },
    {
    "name": "Spain",
    "alpha2code": "ES",
    "alpha3code": "ESP",
    "lat": 40.463667,
    "lng": -3.74922
    },
    {
    "name": "Sri Lanka",
    "alpha2code": "LK",
    "alpha3code": "LKA",
    "lat": 7.873054,
    "lng": 80.771797
    },
    {
    "name": "St. Vincent Grenadines",
    "alpha2code": "VC",
    "alpha3code": "VCT",
    "lat": 12.984305,
    "lng": -61.287228
    },
    {
    "name": "Sudan",
    "alpha2code": "SD",
    "alpha3code": "SDN",
    "lat": 12.862807,
    "lng": 30.217636
    },
    {
    "name": "Suriname",
    "alpha2code": "SR",
    "alpha3code": "SUR",
    "lat": 3.919305,
    "lng": -56.027783
    },
    {
    "name": "Svalbard and Jan Mayen",
    "alpha2code": "SJ",
    "alpha3code": "SJM",
    "lat": 77.553604,
    "lng": 23.670272
    },
    {
    "name": "Sweden",
    "alpha2code": "SE",
    "alpha3code": "SWE",
    "lat": 60.128161,
    "lng": 18.643501
    },
    {
    "name": "Switzerland",
    "alpha2code": "CH",
    "alpha3code": "CHE",
    "lat": 46.818188,
    "lng": 8.227512
    },
    {
    "name": "Syria",
    "alpha2code": "SY",
    "alpha3code": "SYR",
    "lat": 34.802075,
    "lng": 38.996815
    },
    {
    "name": "Taiwan",
    "alpha2code": "TW",
    "alpha3code": "TWN",
    "lat": 23.69781,
    "lng": 120.960515
    },
    {
    "name": "Tajikistan",
    "alpha2code": "TJ",
    "alpha3code": "TJK",
    "lat": 38.861034,
    "lng": 71.276093
    },
    {
    "name": "Tanzania",
    "alpha2code": "TZ",
    "alpha3code": "TZA",
    "lat": -6.369028,
    "lng": 34.888822
    },
    {
    "name": "Thailand",
    "alpha2code": "TH",
    "alpha3code": "THA",
    "lat": 15.870032,
    "lng": 100.992541
    },
    {
    "name": "Timor-Leste",
    "alpha2code": "TL",
    "alpha3code": "TLS",
    "lat": -8.874217,
    "lng": 125.727539
    },
    {
    "name": "Togo",
    "alpha2code": "TG",
    "alpha3code": "TGO",
    "lat": 8.619543,
    "lng": 0.824782
    },
    {
    "name": "Tokelau",
    "alpha2code": "TK",
    "alpha3code": "TKL",
    "lat": -8.967363,
    "lng": -171.855881
    },
    {
    "name": "Tonga",
    "alpha2code": "TO",
    "alpha3code": "TON",
    "lat": -21.178986,
    "lng": -175.198242
    },
    {
    "name": "Trinidad and Tobago",
    "alpha2code": "TT",
    "alpha3code": "TTO",
    "lat": 10.691803,
    "lng": -61.222503
    },
    {
    "name": "Tunisia",
    "alpha2code": "TN",
    "alpha3code": "TUN",
    "lat": 33.886917,
    "lng": 9.537499
    },
    {
    "name": "Turkey",
    "alpha2code": "TR",
    "alpha3code": "TUR",
    "lat": 38.963745,
    "lng": 35.243322
    },
    {
    "name": "Turkmenistan",
    "alpha2code": "TM",
    "alpha3code": "TKM",
    "lat": 38.969719,
    "lng": 59.556278
    },
    {
    "name": "Turks and Caicos",
    "alpha2code": "TC",
    "alpha3code": "TCA",
    "lat": 21.694025,
    "lng": -71.797928
    },
    {
    "name": "Tuvalu",
    "alpha2code": "TV",
    "alpha3code": "TUV",
    "lat": -7.109535,
    "lng": 177.64933
    },
    {
    "name": "U.S. Virgin Islands",
    "alpha2code": "VI",
    "alpha3code": "VIR",
    "lat": 18.335765,
    "lng": -64.896335
    },
    {
    "name": "UAE",
    "alpha2code": "AE",
    "alpha3code": "ARE",
    "lat": 23.424076,
    "lng": 53.847818
    },
    {
    "name": "Uganda",
    "alpha2code": "UG",
    "alpha3code": "UGA",
    "lat": 1.373333,
    "lng": 32.290275
    },
    {
    "name": "UK",
    "alpha2code": "GB",
    "alpha3code": "GBR",
    "lat": 55.378051,
    "lng": -3.435973
    },
    {
    "name": "Ukraine",
    "alpha2code": "UA",
    "alpha3code": "UKR",
    "lat": 48.379433,
    "lng": 31.16558
    },
    {
    "name": "United States Minor Outlying Islands",
    "alpha2code": "UM",
    "alpha3code": "UMI",
    "lat": 19.295374,
    "lng": 166.6280441
    },
    {
    "name": "Uruguay",
    "alpha2code": "UY",
    "alpha3code": "URY",
    "lat": -32.522779,
    "lng": -55.765835
    },
    {
    "name": "USA",
    "alpha2code": "US",
    "alpha3code": "USA",
    "lat": 37.09024,
    "lng": -95.712891
    },
    {
    "name": "Uzbekistan",
    "alpha2code": "UZ",
    "alpha3code": "UZB",
    "lat": 41.377491,
    "lng": 64.585262
    },
    {
    "name": "Vanuatu",
    "alpha2code": "VU",
    "alpha3code": "VUT",
    "lat": -15.376706,
    "lng": 166.959158
    },
    {
    "name": "Vatican City",
    "alpha2code": "VA",
    "alpha3code": "VAT",
    "lat": 41.902916,
    "lng": 12.453389
    },
    {
    "name": "Venezuela",
    "alpha2code": "VE",
    "alpha3code": "VEN",
    "lat": 6.42375,
    "lng": -66.58973
    },
    {
    "name": "Vietnam",
    "alpha2code": "VN",
    "alpha3code": "VNM",
    "lat": 14.058324,
    "lng": 108.277199
    },
    {
    "name": "Wallis and Futuna",
    "alpha2code": "WF",
    "alpha3code": "WLF",
    "lat": -13.768752,
    "lng": -177.156097
    },
    {
    "name": "Western Sahara",
    "alpha2code": "EH",
    "alpha3code": "ESH",
    "lat": 24.215527,
    "lng": -12.885834
    },
    {
    "name": "Yemen",
    "alpha2code": "YE",
    "alpha3code": "YEM",
    "lat": 15.552727,
    "lng": 48.516388
    },
    {
    "name": "Zambia",
    "alpha2code": "ZM",
    "alpha3code": "ZMB",
    "lat": -13.133897,
    "lng": 27.849332
    },
    {
    "name": "Zimbabwe",
    "alpha2code": "ZW",
    "alpha3code": "ZWE",
    "lat": -19.015438,
    "lng": 29.154857
    }
    ];