/* ============================================
   STOCKVISION PRO - Main JavaScript
   Stock Market Analysis Platform
   ============================================ */

/* ============================================
   🔴 USER: Replace ENTER_YOUR_API_KEY_HERE
   with your Alpha Vantage API key.
   Get a FREE key at: https://www.alphavantage.co/support/#api-key
   ============================================ */
const CONFIG = {
  API_KEY: "TR8KCCVLWC1V32F3",
  API_BASE: "https://www.alphavantage.co/query"
};

/* ============================================
   MASSIVE STOCK DATABASE
   All major NSE/BSE listed stocks
   ============================================ */
const ALL_STOCKS = [
  // ─── NIFTY 50 / Large Cap ─── (price in ₹, marketCapCr in ₹ Cr from NSE data)
  { symbol:"RELIANCE",   name:"Reliance Industries Ltd",       sector:"Energy",        exchange:"NSE", price:1422.80, change:1.24,  pe:28.5,  mcap:"Large Cap", volume:12450678, marketCapCr:1925400 },
  { symbol:"HDFCBANK",   name:"HDFC Bank Ltd",                 sector:"Banking",       exchange:"NSE", price:925.60,  change:0.34,  pe:22.1,  mcap:"Large Cap", volume:8901234,  marketCapCr:1424321 },
  { symbol:"BHARTIARTL", name:"Bharti Airtel Ltd",             sector:"Telecom",       exchange:"NSE", price:2019.75, change:1.78,  pe:85.2,  mcap:"Large Cap", volume:4567890,  marketCapCr:1151682 },
  { symbol:"SBIN",       name:"State Bank of India",           sector:"Banking",       exchange:"NSE", price:1213.25, change:2.10,  pe:12.8,  mcap:"Large Cap", volume:15678901, marketCapCr:1119904 },
  { symbol:"ICICIBANK",  name:"ICICI Bank Ltd",                sector:"Banking",       exchange:"NSE", price:1407.15, change:1.56,  pe:18.4,  mcap:"Large Cap", volume:7654321,  marketCapCr:1006958 },
  { symbol:"TCS",        name:"Tata Consultancy Services",     sector:"IT",            exchange:"NSE", price:2717.45, change:-0.45, pe:31.2,  mcap:"Large Cap", volume:3234567,  marketCapCr:983197  },
  { symbol:"BAJFINANCE", name:"Bajaj Finance Ltd",             sector:"Finance",       exchange:"NSE", price:1013.85, change:-1.23, pe:44.2,  mcap:"Large Cap", volume:1234567,  marketCapCr:630866  },
  { symbol:"LT",         name:"Larsen & Toubro Ltd",           sector:"Construction",  exchange:"NSE", price:4279.35, change:0.45,  pe:35.6,  mcap:"Large Cap", volume:2890123,  marketCapCr:588672  },
  { symbol:"INFY",       name:"Infosys Ltd",                   sector:"IT",            exchange:"NSE", price:1391.20, change:0.89,  pe:26.8,  mcap:"Large Cap", volume:5678901,  marketCapCr:564086  },
  { symbol:"LICI",       name:"Life Insurance Corp India",     sector:"Insurance",     exchange:"NSE", price:874.65,  change:-0.78, pe:18.4,  mcap:"Large Cap", volume:5678901,  marketCapCr:553215  },
  { symbol:"HINDUNILVR", name:"Hindustan Unilever Ltd",        sector:"FMCG",          exchange:"NSE", price:2312.20, change:-0.23, pe:65.4,  mcap:"Large Cap", volume:2345678,  marketCapCr:543272  },
  { symbol:"MARUTI",     name:"Maruti Suzuki India Ltd",       sector:"Auto",          exchange:"NSE", price:15180.30,change:1.12,  pe:27.3,  mcap:"Large Cap", volume:456789,   marketCapCr:477272  },
  { symbol:"M&M",        name:"Mahindra & Mahindra",           sector:"Auto",          exchange:"NSE", price:3489.40, change:1.56,  pe:32.4,  mcap:"Large Cap", volume:2890123,  marketCapCr:433916  },
  { symbol:"KOTAK",      name:"Kotak Mahindra Bank",           sector:"Banking",       exchange:"NSE", price:424.35,  change:0.67,  pe:24.6,  mcap:"Large Cap", volume:3456789,  marketCapCr:422072  },
  { symbol:"AXISBANK",   name:"Axis Bank Ltd",                 sector:"Banking",       exchange:"NSE", price:1357.05, change:0.67,  pe:16.3,  mcap:"Large Cap", volume:7890123,  marketCapCr:421551  },
  { symbol:"SUNPHARMA",  name:"Sun Pharmaceutical",            sector:"Pharma",        exchange:"NSE", price:1717.40, change:0.89,  pe:38.4,  mcap:"Large Cap", volume:3456789,  marketCapCr:412052  },
  { symbol:"ITC",        name:"ITC Ltd",                       sector:"FMCG",          exchange:"NSE", price:325.30,  change:0.78,  pe:26.4,  mcap:"Large Cap", volume:18901234, marketCapCr:407575  },
  { symbol:"HCLTECH",    name:"HCL Technologies Ltd",          sector:"IT",            exchange:"NSE", price:1482.65, change:-0.34, pe:23.7,  mcap:"Large Cap", volume:3901234,  marketCapCr:402341  },
  { symbol:"ULTRACEMCO", name:"UltraTech Cement",              sector:"Cement",        exchange:"NSE", price:12985.10,change:1.56,  pe:42.3,  mcap:"Large Cap", volume:567890,   marketCapCr:382643  },
  { symbol:"TITAN",      name:"Titan Company Ltd",             sector:"Consumer",      exchange:"NSE", price:4236.45, change:-0.67, pe:78.5,  mcap:"Large Cap", volume:1890123,  marketCapCr:376106  },
  { symbol:"ADANIPORTS", name:"Adani Ports & SEZ",             sector:"Infrastructure",exchange:"NSE", price:1566.60, change:1.45,  pe:32.6,  mcap:"Large Cap", volume:4567890,  marketCapCr:360938  },
  { symbol:"NTPC",       name:"NTPC Ltd",                      sector:"Power",         exchange:"NSE", price:368.35,  change:0.56,  pe:14.2,  mcap:"Large Cap", volume:23456789, marketCapCr:357176  },
  { symbol:"ONGC",       name:"Oil & Natural Gas Corp",        sector:"Energy",        exchange:"NSE", price:271.75,  change:1.23,  pe:8.9,   mcap:"Large Cap", volume:34567890, marketCapCr:341869  },
  { symbol:"BAJAJFINSV", name:"Bajaj Finserv Ltd",             sector:"Finance",       exchange:"NSE", price:2044.60, change:-0.89, pe:28.7,  mcap:"Large Cap", volume:2345678,  marketCapCr:326688  },
  { symbol:"BEL",        name:"Bharat Electronics Ltd",        sector:"Defense",       exchange:"NSE", price:446.90,  change:3.45,  pe:46.7,  mcap:"Large Cap", volume:28901234, marketCapCr:326674  },
  { symbol:"JSWSTEEL",   name:"JSW Steel Ltd",                 sector:"Metal",         exchange:"NSE", price:1244.70, change:0.78,  pe:18.9,  mcap:"Large Cap", volume:7890123,  marketCapCr:304385  },
  { symbol:"HAL",        name:"Hindustan Aeronautics Ltd",     sector:"Defense",       exchange:"NSE", price:4247.40, change:2.12,  pe:36.5,  mcap:"Large Cap", volume:890123,   marketCapCr:284055  },
  { symbol:"POWERGRID",  name:"Power Grid Corp",               sector:"Power",         exchange:"NSE", price:300.80,  change:-0.23, pe:16.7,  mcap:"Large Cap", volume:9012345,  marketCapCr:279762  },
  { symbol:"ADANIGREEN", name:"Adani Green Energy Ltd",        sector:"Renewable Energy",exchange:"NSE",price:1016.35,change:4.56, pe:68.5,  mcap:"Large Cap", volume:3456789,  marketCapCr:278374  },
  { symbol:"BAJAJ-AUTO", name:"Bajaj Auto Ltd",                sector:"Auto",          exchange:"NSE", price:9829.55, change:0.89,  pe:32.7,  mcap:"Large Cap", volume:456789,   marketCapCr:274733  },
  { symbol:"ETERNAL",    name:"Eternal Ltd",                   sector:"Food Tech",     exchange:"NSE", price:281.60,  change:3.45,  pe:218.4, mcap:"Large Cap", volume:28901234, marketCapCr:271753  },
  { symbol:"VEDL",       name:"Vedanta Ltd",                   sector:"Metal",         exchange:"NSE", price:668.05,  change:2.34,  pe:14.8,  mcap:"Large Cap", volume:18901234, marketCapCr:261233  },
  { symbol:"COALINDIA",  name:"Coal India Ltd",                sector:"Mining",        exchange:"NSE", price:421.55,  change:0.34,  pe:8.7,   mcap:"Large Cap", volume:12345678, marketCapCr:259789  },
  { symbol:"ADANIENT",   name:"Adani Enterprises Ltd",         sector:"Conglomerate",  exchange:"NSE", price:2242.25, change:-2.34, pe:65.8,  mcap:"Large Cap", volume:3456789,  marketCapCr:258796  },
  { symbol:"DMART",      name:"Avenue Supermarts (DMart)",     sector:"Retail",        exchange:"NSE", price:3903.40, change:-0.45, pe:112.6, mcap:"Large Cap", volume:345678,   marketCapCr:254007  },
  { symbol:"TATASTEEL",  name:"Tata Steel Ltd",                sector:"Metal",         exchange:"NSE", price:203.10,  change:1.45,  pe:12.4,  mcap:"Large Cap", volume:45678901, marketCapCr:253538  },
  { symbol:"IOC",        name:"Indian Oil Corporation",        sector:"Energy",        exchange:"NSE", price:176.30,  change:0.45,  pe:7.8,   mcap:"Large Cap", volume:34567890, marketCapCr:248957  },
  { symbol:"NESTLEIND",  name:"Nestle India Ltd",              sector:"FMCG",          exchange:"NSE", price:1285.75, change:0.45,  pe:84.2,  mcap:"Large Cap", volume:234567,   marketCapCr:247933  },
  { symbol:"HINDZINC",   name:"Hindustan Zinc Ltd",            sector:"Metal",         exchange:"NSE", price:581.15,  change:1.89,  pe:16.4,  mcap:"Large Cap", volume:2345678,  marketCapCr:245554  },
  { symbol:"ASIANPAINT", name:"Asian Paints Ltd",              sector:"Paints",        exchange:"NSE", price:2437.35, change:-1.45, pe:58.9,  mcap:"Large Cap", volume:1234567,  marketCapCr:233790  },
  { symbol:"WIPRO",      name:"Wipro Ltd",                     sector:"IT",            exchange:"NSE", price:215.80,  change:-0.89, pe:20.3,  mcap:"Large Cap", volume:6789012,  marketCapCr:226325  },
  { symbol:"EICHERMOT",  name:"Eicher Motors Ltd",             sector:"Auto",          exchange:"NSE", price:8032.50, change:1.34,  pe:38.5,  mcap:"Large Cap", volume:678901,   marketCapCr:220342  },
  { symbol:"SBILIFE",    name:"SBI Life Insurance",            sector:"Insurance",     exchange:"NSE", price:2038.95, change:-0.23, pe:78.5,  mcap:"Large Cap", volume:2345678,  marketCapCr:204471  },
  { symbol:"SHRIRAMFIN", name:"Shriram Finance Ltd",           sector:"Finance",       exchange:"NSE", price:1074.80, change:1.34,  pe:18.6,  mcap:"Large Cap", volume:2345678,  marketCapCr:202226  },
  { symbol:"HINDALCO",   name:"Hindalco Industries",           sector:"Metal",         exchange:"NSE", price:891.50,  change:1.89,  pe:16.4,  mcap:"Large Cap", volume:8901234,  marketCapCr:200340  },
  { symbol:"GRASIM",     name:"Grasim Industries",             sector:"Cement",        exchange:"NSE", price:2899.80, change:-0.78, pe:24.5,  mcap:"Large Cap", volume:1890123,  marketCapCr:197337  },
  { symbol:"INDIGO",     name:"InterGlobe Aviation Ltd",       sector:"Aviation",      exchange:"NSE", price:4977.05, change:1.23,  pe:22.8,  mcap:"Large Cap", volume:567890,   marketCapCr:192419  },
  { symbol:"TVSMOTOR",   name:"TVS Motor Company Ltd",         sector:"Auto",          exchange:"NSE", price:3878.65, change:-0.56, pe:56.8,  mcap:"Large Cap", volume:678901,   marketCapCr:184269  },
  { symbol:"TATAMOTORS", name:"Tata Motors Ltd",               sector:"Auto",          exchange:"NSE", price:489.65,  change:2.34,  pe:15.8,  mcap:"Large Cap", volume:12345678, marketCapCr:180305  },
  { symbol:"HYUNDAI",    name:"Hyundai Motor India Ltd",       sector:"Auto",          exchange:"NSE", price:2190.20, change:0.67,  pe:24.5,  mcap:"Large Cap", volume:345678,   marketCapCr:177962  },
  { symbol:"JIOFIN",     name:"Jio Financial Services Ltd",    sector:"Finance",       exchange:"NSE", price:262.35,  change:1.23,  pe:48.6,  mcap:"Large Cap", volume:8901234,  marketCapCr:166674  },
  { symbol:"DIVISLAB",   name:"Divi's Laboratories",           sector:"Pharma",        exchange:"NSE", price:6185.00, change:-1.12, pe:52.3,  mcap:"Large Cap", volume:789012,   marketCapCr:164192  },
  { symbol:"BPCL",       name:"Bharat Petroleum Corp",         sector:"Energy",        exchange:"NSE", price:375.20,  change:2.45,  pe:9.8,   mcap:"Large Cap", volume:18901234, marketCapCr:162779  },
  { symbol:"DLF",        name:"DLF Ltd",                       sector:"Real Estate",   exchange:"NSE", price:638.75,  change:1.67,  pe:62.8,  mcap:"Large Cap", volume:7890123,  marketCapCr:158110  },
  { symbol:"BANKBARODA", name:"Bank of Baroda",                sector:"Banking",       exchange:"NSE", price:303.25,  change:0.89,  pe:8.4,   mcap:"Large Cap", volume:18901234, marketCapCr:156821  },
  { symbol:"VARUNBEV",   name:"Varun Beverages Ltd",           sector:"Beverages",     exchange:"NSE", price:458.05,  change:0.89,  pe:62.4,  mcap:"Large Cap", volume:1234567,  marketCapCr:154916  },
  { symbol:"LTIM",       name:"LTIMindtree Ltd",               sector:"IT",            exchange:"NSE", price:5166.10, change:2.12,  pe:42.6,  mcap:"Large Cap", volume:890123,   marketCapCr:153171  },
  { symbol:"HDFCLIFE",   name:"HDFC Life Insurance",           sector:"Insurance",     exchange:"NSE", price:705.60,  change:0.89,  pe:94.2,  mcap:"Large Cap", volume:4567890,  marketCapCr:152241  },
  { symbol:"PIDILITIND", name:"Pidilite Industries",           sector:"Chemicals",     exchange:"NSE", price:1495.05, change:0.56,  pe:88.4,  mcap:"Large Cap", volume:567890,   marketCapCr:152153  },
  { symbol:"TATACAPITAL",name:"Tata Capital Ltd",              sector:"Finance",       exchange:"NSE", price:355.15,  change:0.34,  pe:28.4,  mcap:"Large Cap", volume:3456789,  marketCapCr:150756  },
  { symbol:"TECHM",      name:"Tech Mahindra Ltd",             sector:"IT",            exchange:"NSE", price:1524.10, change:2.12,  pe:35.4,  mcap:"Large Cap", volume:4567890,  marketCapCr:149322  },
  { symbol:"TRENT",      name:"Trent Ltd",                     sector:"Retail",        exchange:"NSE", price:3006.90, change:1.23,  pe:158.4, mcap:"Large Cap", volume:890123,   marketCapCr:148618  },
  { symbol:"BRITANNIA",  name:"Britannia Industries Ltd",      sector:"FMCG",          exchange:"NSE", price:6143.05, change:-0.45, pe:54.6,  mcap:"Large Cap", volume:456789,   marketCapCr:147966  },
  { symbol:"IRFC",       name:"Indian Railway Finance Corp",   sector:"Finance",       exchange:"NSE", price:112.95,  change:2.34,  pe:28.6,  mcap:"Large Cap", volume:18901234, marketCapCr:147608  },
  { symbol:"CHOLAFIN",   name:"Cholamandalam Investment",      sector:"Finance",       exchange:"NSE", price:1732.40, change:1.45,  pe:42.6,  mcap:"Large Cap", volume:1890123,  marketCapCr:147539  },
  { symbol:"UNIONBANK",  name:"Union Bank of India",           sector:"Banking",       exchange:"NSE", price:188.90,  change:1.34,  pe:8.2,   mcap:"Large Cap", volume:28901234, marketCapCr:144198  },
  { symbol:"TORNTPHARM", name:"Torrent Pharmaceuticals",       sector:"Pharma",        exchange:"NSE", price:4258.55, change:-0.34, pe:42.4,  mcap:"Large Cap", volume:456789,   marketCapCr:144122  },
  { symbol:"PNB",        name:"Punjab National Bank",          sector:"Banking",       exchange:"NSE", price:124.85,  change:1.23,  pe:12.4,  mcap:"Large Cap", volume:45678901, marketCapCr:143489  },
  { symbol:"TATAMOTDVR", name:"Tata Motors Passenger Vehicles",sector:"Auto",          exchange:"NSE", price:382.85,  change:1.12,  pe:14.8,  mcap:"Large Cap", volume:890123,   marketCapCr:143489  },
  { symbol:"MUTHOOTFIN", name:"Muthoot Finance",               sector:"Finance",       exchange:"NSE", price:3496.90, change:1.45,  pe:18.6,  mcap:"Large Cap", volume:1234567,  marketCapCr:140389  },
  { symbol:"MOTHERSON",  name:"Samvardhana Motherson Intl",    sector:"Auto Parts",    exchange:"NSE", price:132.65,  change:-0.67, pe:38.5,  mcap:"Large Cap", volume:8901234,  marketCapCr:139999  },
  { symbol:"PFC",        name:"Power Finance Corporation",     sector:"Finance",       exchange:"NSE", price:416.90,  change:2.12,  pe:8.6,   mcap:"Large Cap", volume:12345678, marketCapCr:137581  },
  { symbol:"CANBK",      name:"Canara Bank",                   sector:"Banking",       exchange:"NSE", price:149.10,  change:0.45,  pe:7.8,   mcap:"Large Cap", volume:12345678, marketCapCr:135243  },
  { symbol:"AMBUJACEM",  name:"Ambuja Cements",                sector:"Cement",        exchange:"NSE", price:522.05,  change:1.23,  pe:38.7,  mcap:"Large Cap", volume:5678901,  marketCapCr:129041  },
  { symbol:"CUMMINSIND", name:"Cummins India Ltd",             sector:"Engineering",   exchange:"NSE", price:4597.55, change:1.45,  pe:52.4,  mcap:"Large Cap", volume:456789,   marketCapCr:127444  },
  { symbol:"BAJAJHFL",   name:"Bajaj Holdings & Investment",   sector:"Finance",       exchange:"NSE", price:11217.10,change:0.34,  pe:18.6,  mcap:"Large Cap", volume:89012,    marketCapCr:124839  },
  { symbol:"INDUSTOWER", name:"Indus Towers Ltd",              sector:"Telecom",       exchange:"NSE", price:472.40,  change:2.12,  pe:18.6,  mcap:"Large Cap", volume:8901234,  marketCapCr:124626  },
  { symbol:"GODREJCP",   name:"Godrej Consumer Products",      sector:"FMCG",          exchange:"NSE", price:1214.70, change:0.45,  pe:52.6,  mcap:"Large Cap", volume:1890123,  marketCapCr:124293  },
  { symbol:"INDIANB",    name:"Indian Bank",                   sector:"Banking",       exchange:"NSE", price:920.30,  change:1.56,  pe:12.6,  mcap:"Mid Cap",   volume:2345678,  marketCapCr:123961  },
  { symbol:"ADANIENSO",  name:"Adani Energy Solutions Ltd",    sector:"Power",         exchange:"NSE", price:1030.00, change:3.12,  pe:48.4,  mcap:"Mid Cap",   volume:1890123,  marketCapCr:123732  },
  { symbol:"ABB",        name:"ABB India Ltd",                 sector:"Engineering",   exchange:"NSE", price:5835.20, change:1.34,  pe:68.4,  mcap:"Mid Cap",   volume:234567,   marketCapCr:123652  },
  { symbol:"JINDALSTEL", name:"Jindal Steel & Power",          sector:"Metal",         exchange:"NSE", price:1210.20, change:2.34,  pe:14.8,  mcap:"Large Cap", volume:5678901,  marketCapCr:123451  },
  { symbol:"IDEA",       name:"Vodafone Idea Ltd",             sector:"Telecom",       exchange:"NSE", price:11.38,   change:-3.12, pe:-1,    mcap:"Mid Cap",   volume:89012345, marketCapCr:123294  },
  { symbol:"HDFCAMC",    name:"HDFC Asset Management Co",      sector:"Finance",       exchange:"NSE", price:2862.95, change:0.67,  pe:42.8,  mcap:"Mid Cap",   volume:456789,   marketCapCr:122622  },
  { symbol:"IDBI",       name:"IDBI Bank Ltd",                 sector:"Banking",       exchange:"NSE", price:113.74,  change:1.23,  pe:18.4,  mcap:"Mid Cap",   volume:18901234, marketCapCr:122297  },
  { symbol:"ASHOKLEY",   name:"Ashok Leyland Ltd",             sector:"Auto",          exchange:"NSE", price:207.65,  change:0.78,  pe:22.6,  mcap:"Large Cap", volume:12345678, marketCapCr:121970  },
  { symbol:"TATAPOWER",  name:"Tata Power Company",            sector:"Power",         exchange:"NSE", price:378.15,  change:2.56,  pe:48.6,  mcap:"Large Cap", volume:18901234, marketCapCr:120831  },
  { symbol:"SOLARIND",   name:"Solar Industries India Ltd",    sector:"Chemicals",     exchange:"NSE", price:13261.85,change:1.56,  pe:72.4,  mcap:"Mid Cap",   volume:89012,    marketCapCr:120006  },
  { symbol:"POLYCAB",    name:"Polycab India Ltd",             sector:"Cables",        exchange:"NSE", price:7741.95, change:1.67,  pe:48.6,  mcap:"Large Cap", volume:345678,   marketCapCr:116552  },
  { symbol:"TATACONSUM", name:"Tata Consumer Products",        sector:"FMCG",          exchange:"NSE", price:1148.70, change:-0.45, pe:72.4,  mcap:"Large Cap", volume:2345678,  marketCapCr:113669  },
  { symbol:"SIEMENS",    name:"Siemens Ltd",                   sector:"Engineering",   exchange:"NSE", price:3185.05, change:0.89,  pe:72.4,  mcap:"Large Cap", volume:234567,   marketCapCr:113426  },
  { symbol:"HEROMOTOCO", name:"Hero MotoCorp Ltd",             sector:"Auto",          exchange:"NSE", price:5577.30, change:-0.56, pe:22.6,  mcap:"Large Cap", volume:1234567,  marketCapCr:111596  },
  { symbol:"LODHA",      name:"Lodha Developers Ltd",          sector:"Real Estate",   exchange:"NSE", price:1096.70, change:1.67,  pe:28.4,  mcap:"Large Cap", volume:1890123,  marketCapCr:109546  },
  { symbol:"APOLLOHOSP", name:"Apollo Hospitals Enterprise",   sector:"Healthcare",    exchange:"NSE", price:7596.70, change:1.23,  pe:95.6,  mcap:"Large Cap", volume:890123,   marketCapCr:109228  },
  { symbol:"GAIL",       name:"GAIL India Ltd",                sector:"Energy",        exchange:"NSE", price:165.80,  change:0.89,  pe:14.8,  mcap:"Large Cap", volume:23456789, marketCapCr:109015  },
  { symbol:"CGPOWER",    name:"CG Power & Industrial Sol",     sector:"Engineering",   exchange:"NSE", price:690.05,  change:2.12,  pe:68.5,  mcap:"Mid Cap",   volume:3456789,  marketCapCr:108676  },
  { symbol:"CIPLA",      name:"Cipla Ltd",                     sector:"Pharma",        exchange:"NSE", price:1343.35, change:0.67,  pe:28.4,  mcap:"Large Cap", volume:3456789,  marketCapCr:108513  },
  { symbol:"DRREDDY",    name:"Dr. Reddy's Laboratories",      sector:"Pharma",        exchange:"NSE", price:1285.00, change:-0.34, pe:22.8,  mcap:"Large Cap", volume:678901,   marketCapCr:107244  },

  // ─── Mid Cap Stocks ───
  { symbol:"AIAENG",     name:"AIA Engineering",               sector:"Engineering",   exchange:"NSE", price:4234.50, change:-0.67, pe:42.6,  mcap:"Mid Cap", volume:123456,   marketCapCr:39820 },
  { symbol:"ALKEM",      name:"Alkem Laboratories",            sector:"Pharma",        exchange:"NSE", price:5678.90, change:0.89,  pe:32.5,  mcap:"Mid Cap", volume:234567,   marketCapCr:33780 },
  { symbol:"APLAPOLLO",  name:"APL Apollo Tubes",              sector:"Metal",         exchange:"NSE", price:1567.40, change:-0.45, pe:48.5,  mcap:"Mid Cap", volume:890123,   marketCapCr:43500 },
  { symbol:"ASTRAL",     name:"Astral Ltd",                    sector:"Pipes",         exchange:"NSE", price:2123.60, change:0.78,  pe:72.3,  mcap:"Mid Cap", volume:567890,   marketCapCr:55640 },
  { symbol:"ATUL",       name:"Atul Ltd",                      sector:"Chemicals",     exchange:"NSE", price:7234.50, change:-1.12, pe:28.4,  mcap:"Mid Cap", volume:89012,    marketCapCr:21400 },
  { symbol:"AUBANK",     name:"AU Small Finance Bank",         sector:"Banking",       exchange:"NSE", price:678.90,  change:2.34,  pe:32.6,  mcap:"Mid Cap", volume:3456789,  marketCapCr:48670 },
  { symbol:"BALKRISIND", name:"Balkrishna Industries",         sector:"Auto Parts",    exchange:"NSE", price:2890.40, change:-0.34, pe:42.8,  mcap:"Mid Cap", volume:456789,   marketCapCr:55870 },
  { symbol:"BANDHANBNK", name:"Bandhan Bank Ltd",              sector:"Banking",       exchange:"NSE", price:234.70,  change:1.56,  pe:18.6,  mcap:"Mid Cap", volume:8901234,  marketCapCr:37810 },
  { symbol:"BATAINDIA",  name:"Bata India Ltd",                sector:"Consumer",      exchange:"NSE", price:1456.30, change:-0.67, pe:52.4,  mcap:"Mid Cap", volume:345678,   marketCapCr:18730 },
  { symbol:"BERGEPAINT", name:"Berger Paints India",           sector:"Paints",        exchange:"NSE", price:534.60,  change:-0.23, pe:64.5,  mcap:"Mid Cap", volume:1234567,  marketCapCr:51890 },
  { symbol:"BHARATFORG", name:"Bharat Forge Ltd",              sector:"Auto Parts",    exchange:"NSE", price:1234.50, change:1.78,  pe:58.4,  mcap:"Mid Cap", volume:1234567,  marketCapCr:57230 },
  { symbol:"BIOCON",     name:"Biocon Ltd",                    sector:"Pharma",        exchange:"NSE", price:267.80,  change:-1.34, pe:34.6,  mcap:"Mid Cap", volume:5678901,  marketCapCr:32140 },
  { symbol:"BOSCHLTD",   name:"Bosch Ltd",                     sector:"Auto Parts",    exchange:"NSE", price:34567.80,change:0.56,  pe:72.4,  mcap:"Mid Cap", volume:45678,    marketCapCr:98450 },
  { symbol:"BSOFT",      name:"BIRLASOFT Ltd",                 sector:"IT",            exchange:"NSE", price:678.90,  change:2.12,  pe:28.7,  mcap:"Mid Cap", volume:2345678,  marketCapCr:18920 },
  { symbol:"CAMS",       name:"Computer Age Mgmt Services",    sector:"Finance",       exchange:"NSE", price:2890.40, change:-0.78, pe:54.6,  mcap:"Mid Cap", volume:234567,   marketCapCr:59890 },
  { symbol:"CANFINHOME", name:"Can Fin Homes",                 sector:"Finance",       exchange:"NSE", price:789.50,  change:1.23,  pe:16.8,  mcap:"Mid Cap", volume:1234567,  marketCapCr:10560 },
  { symbol:"CASTROLIND", name:"Castrol India Ltd",             sector:"Energy",        exchange:"NSE", price:189.50,  change:-0.34, pe:22.6,  mcap:"Mid Cap", volume:2345678,  marketCapCr:9450  },
  { symbol:"CESC",       name:"CESC Ltd",                      sector:"Power",         exchange:"NSE", price:167.80,  change:1.56,  pe:12.4,  mcap:"Mid Cap", volume:3456789,  marketCapCr:22360 },
  { symbol:"COLPAL",     name:"Colgate-Palmolive India",       sector:"FMCG",          exchange:"NSE", price:2678.90, change:0.67,  pe:58.7,  mcap:"Mid Cap", volume:678901,   marketCapCr:72840 },
  { symbol:"CONCOR",     name:"Container Corp India",          sector:"Logistics",     exchange:"NSE", price:789.40,  change:-1.23, pe:36.5,  mcap:"Mid Cap", volume:1234567,  marketCapCr:48230 },
  { symbol:"COROMANDEL", name:"Coromandel International",      sector:"Fertilizer",    exchange:"NSE", price:1289.50, change:2.34,  pe:22.8,  mcap:"Mid Cap", volume:890123,   marketCapCr:37820 },
  { symbol:"CROMPTON",   name:"Crompton Greaves Consumer",     sector:"Consumer Electricals",exchange:"NSE",price:345.60,change:-0.56,pe:42.6, mcap:"Mid Cap",volume:2345678, marketCapCr:21840 },
  { symbol:"DABUR",      name:"Dabur India Ltd",               sector:"FMCG",          exchange:"NSE", price:534.80,  change:0.34,  pe:52.6,  mcap:"Large Cap",volume:3456789, marketCapCr:94560 },
  { symbol:"DEEPAKNTR",  name:"Deepak Nitrite Ltd",            sector:"Chemicals",     exchange:"NSE", price:2678.30, change:-0.78, pe:42.5,  mcap:"Mid Cap", volume:567890,   marketCapCr:36750 },
  { symbol:"DIXON",      name:"Dixon Technologies",            sector:"Electronics",   exchange:"NSE", price:12345.60,change:3.12,  pe:98.4,  mcap:"Mid Cap", volume:123456,   marketCapCr:73800 },
  { symbol:"EMAMILTD",   name:"Emami Ltd",                     sector:"FMCG",          exchange:"NSE", price:489.60,  change:0.89,  pe:34.5,  mcap:"Mid Cap", volume:1234567,  marketCapCr:21560 },
  { symbol:"ESCORTS",    name:"Escorts Kubota Ltd",            sector:"Agriculture",   exchange:"NSE", price:3789.50, change:0.56,  pe:38.6,  mcap:"Mid Cap", volume:345678,   marketCapCr:46780 },
  { symbol:"EXIDEIND",   name:"Exide Industries",              sector:"Auto Parts",    exchange:"NSE", price:345.70,  change:-0.34, pe:32.4,  mcap:"Mid Cap", volume:3456789,  marketCapCr:29450 },
  { symbol:"FEDERALBNK", name:"Federal Bank Ltd",              sector:"Banking",       exchange:"NSE", price:167.50,  change:0.78,  pe:12.4,  mcap:"Mid Cap", volume:12345678, marketCapCr:42310 },
  { symbol:"GLAXO",      name:"GSK Pharma India",              sector:"Pharma",        exchange:"NSE", price:1567.30, change:0.56,  pe:28.4,  mcap:"Mid Cap", volume:456789,   marketCapCr:26540 },
  { symbol:"GLENMARK",   name:"Glenmark Pharma",               sector:"Pharma",        exchange:"NSE", price:1123.40, change:-1.56, pe:38.4,  mcap:"Mid Cap", volume:1234567,  marketCapCr:31890 },
  { symbol:"GMRINFRA",   name:"GMR Airports Infra",            sector:"Infrastructure",exchange:"NSE", price:89.60,   change:1.23,  pe:68.5,  mcap:"Mid Cap", volume:18901234, marketCapCr:54320 },
  { symbol:"GODREJPROP", name:"Godrej Properties",             sector:"Real Estate",   exchange:"NSE", price:2567.80, change:-0.89, pe:82.4,  mcap:"Mid Cap", volume:890123,   marketCapCr:71230 },
  { symbol:"GRANULES",   name:"Granules India Ltd",            sector:"Pharma",        exchange:"NSE", price:456.70,  change:1.78,  pe:22.8,  mcap:"Small Cap",volume:3456789, marketCapCr:11230 },
  { symbol:"HAPPYMNDS",  name:"Happiest Minds Tech",           sector:"IT",            exchange:"NSE", price:789.30,  change:2.56,  pe:38.6,  mcap:"Small Cap",volume:2345678, marketCapCr:11560 },
  { symbol:"HAVELLS",    name:"Havells India Ltd",             sector:"Consumer Electricals",exchange:"NSE",price:1567.40,change:-0.34,pe:72.4,mcap:"Large Cap",volume:1234567,marketCapCr:98340},
  { symbol:"HFCL",       name:"HFCL Ltd",                      sector:"Telecom",       exchange:"NSE", price:89.70,   change:3.45,  pe:28.6,  mcap:"Small Cap",volume:18901234,marketCapCr:12430 },
  { symbol:"HINDPETRO",  name:"Hindustan Petroleum",           sector:"Energy",        exchange:"NSE", price:345.80,  change:1.23,  pe:8.6,   mcap:"Mid Cap", volume:12345678, marketCapCr:73560 },
  { symbol:"IDFCFIRSTB", name:"IDFC First Bank",               sector:"Banking",       exchange:"NSE", price:89.60,   change:1.56,  pe:28.4,  mcap:"Mid Cap", volume:38901234, marketCapCr:62450 },
  { symbol:"IEX",        name:"Indian Energy Exchange",        sector:"Finance",       exchange:"NSE", price:189.50,  change:-0.78, pe:42.6,  mcap:"Mid Cap", volume:5678901,  marketCapCr:16780 },
  { symbol:"IGL",        name:"Indraprastha Gas Ltd",          sector:"Energy",        exchange:"NSE", price:456.80,  change:0.89,  pe:24.8,  mcap:"Mid Cap", volume:3456789,  marketCapCr:31980 },
  { symbol:"INTELLECT",  name:"Intellect Design Arena",        sector:"IT",            exchange:"NSE", price:789.40,  change:-1.23, pe:34.5,  mcap:"Small Cap",volume:890123,  marketCapCr:13450 },
  { symbol:"IPCALAB",    name:"IPCA Laboratories",             sector:"Pharma",        exchange:"NSE", price:1567.30, change:0.56,  pe:28.4,  mcap:"Mid Cap", volume:456789,   marketCapCr:19870 },
  { symbol:"IRB",        name:"IRB Infrastructure",            sector:"Infrastructure",exchange:"NSE", price:67.80,   change:1.89,  pe:38.6,  mcap:"Small Cap",volume:18901234,marketCapCr:23450 },
  { symbol:"IRCTC",      name:"Indian Railway Catering",       sector:"Tourism",       exchange:"NSE", price:789.60,  change:-0.45, pe:58.4,  mcap:"Large Cap",volume:3456789, marketCapCr:63200 },
  { symbol:"ISEC",       name:"ICICI Securities",              sector:"Finance",       exchange:"NSE", price:678.90,  change:1.34,  pe:18.6,  mcap:"Mid Cap", volume:1234567,  marketCapCr:21890 },
  { symbol:"JUBLFOOD",   name:"Jubilant FoodWorks",            sector:"Food",          exchange:"NSE", price:567.80,  change:0.89,  pe:68.4,  mcap:"Mid Cap", volume:1234567,  marketCapCr:37450 },
  { symbol:"JSWENERGY",  name:"JSW Energy Ltd",                sector:"Power",         exchange:"NSE", price:456.70,  change:-1.12, pe:28.6,  mcap:"Large Cap",volume:3456789, marketCapCr:79830 },
  { symbol:"KAJARIACER", name:"Kajaria Ceramics",              sector:"Building Materials",exchange:"NSE",price:1234.50,change:1.45,pe:42.8, mcap:"Mid Cap", volume:567890,   marketCapCr:18560 },
  { symbol:"KANSAINER",  name:"Kansai Nerolac Paints",         sector:"Paints",        exchange:"NSE", price:234.60,  change:-0.34, pe:48.6,  mcap:"Mid Cap", volume:1234567,  marketCapCr:12670 },
  { symbol:"KAYNES",     name:"Kaynes Technology India",       sector:"Electronics",   exchange:"NSE", price:2789.30, change:3.56,  pe:88.4,  mcap:"Small Cap",volume:234567,  marketCapCr:16780 },
  { symbol:"KPITTECH",   name:"KPIT Technologies",             sector:"IT",            exchange:"NSE", price:1567.40, change:2.12,  pe:64.5,  mcap:"Mid Cap", volume:1234567,  marketCapCr:42340 },
  { symbol:"LICHSGFIN",  name:"LIC Housing Finance",           sector:"Finance",       exchange:"NSE", price:567.80,  change:0.45,  pe:12.8,  mcap:"Mid Cap", volume:3456789,  marketCapCr:31230 },
  { symbol:"LINDEINDIA", name:"Linde India Ltd",               sector:"Chemicals",     exchange:"NSE", price:6789.30, change:0.89,  pe:78.6,  mcap:"Mid Cap", volume:89012,    marketCapCr:56780 },
  { symbol:"LUPIN",      name:"Lupin Ltd",                     sector:"Pharma",        exchange:"NSE", price:1789.40, change:-1.23, pe:36.5,  mcap:"Large Cap",volume:1234567, marketCapCr:81230 },
  { symbol:"M&MFIN",     name:"Mahindra Finance",              sector:"Finance",       exchange:"NSE", price:267.80,  change:0.34,  pe:22.6,  mcap:"Mid Cap", volume:5678901,  marketCapCr:33120 },
  { symbol:"MANAPPURAM", name:"Manappuram Finance",            sector:"Finance",       exchange:"NSE", price:167.50,  change:-0.89, pe:8.4,   mcap:"Mid Cap", volume:8901234,  marketCapCr:14230 },
  { symbol:"MARICO",     name:"Marico Ltd",                    sector:"FMCG",          exchange:"NSE", price:567.80,  change:0.67,  pe:52.6,  mcap:"Large Cap",volume:3456789, marketCapCr:73240 },
  { symbol:"MAXHEALTH",  name:"Max Healthcare",                sector:"Healthcare",    exchange:"NSE", price:789.40,  change:1.78,  pe:78.5,  mcap:"Large Cap",volume:1890123, marketCapCr:76540 },
  { symbol:"MCX",        name:"Multi Commodity Exchange",      sector:"Finance",       exchange:"NSE", price:3456.70, change:-0.45, pe:84.2,  mcap:"Mid Cap", volume:456789,   marketCapCr:17650 },
  { symbol:"METROPOLIS", name:"Metropolis Healthcare",         sector:"Healthcare",    exchange:"NSE", price:1789.50, change:0.56,  pe:52.4,  mcap:"Mid Cap", volume:234567,   marketCapCr:9230  },
  { symbol:"MPHASIS",    name:"Mphasis Ltd",                   sector:"IT",            exchange:"NSE", price:2234.50, change:0.89,  pe:32.6,  mcap:"Mid Cap", volume:678901,   marketCapCr:41780 },
  { symbol:"MRF",        name:"MRF Ltd",                       sector:"Auto Parts",    exchange:"NSE", price:127890.60,change:0.34, pe:28.4,  mcap:"Mid Cap", volume:12345,    marketCapCr:54320 },
  { symbol:"NATIONALUM", name:"National Aluminium Co",         sector:"Metal",         exchange:"NSE", price:167.50,  change:2.34,  pe:12.4,  mcap:"Mid Cap", volume:23456789, marketCapCr:30890 },
  { symbol:"NAVINFLUOR", name:"Navin Fluorine Intl",           sector:"Chemicals",     exchange:"NSE", price:3456.70, change:-1.12, pe:48.6,  mcap:"Mid Cap", volume:234567,   marketCapCr:17230 },
  { symbol:"NCC",        name:"NCC Ltd",                       sector:"Construction",  exchange:"NSE", price:234.60,  change:2.67,  pe:18.4,  mcap:"Small Cap",volume:8901234, marketCapCr:14560 },
  { symbol:"NIACL",      name:"New India Assurance",           sector:"Insurance",     exchange:"NSE", price:189.50,  change:-0.34, pe:18.6,  mcap:"Mid Cap", volume:3456789,  marketCapCr:23450 },
  { symbol:"NMDC",       name:"NMDC Ltd",                      sector:"Mining",        exchange:"NSE", price:234.60,  change:1.56,  pe:8.8,   mcap:"Mid Cap", volume:18901234, marketCapCr:68940 },
  { symbol:"OFSS",       name:"Oracle Financial Services",     sector:"IT",            exchange:"NSE", price:9234.50, change:0.78,  pe:32.4,  mcap:"Mid Cap", volume:89012,    marketCapCr:79560 },
  { symbol:"OIL",        name:"Oil India Ltd",                 sector:"Energy",        exchange:"NSE", price:456.70,  change:1.23,  pe:9.8,   mcap:"Mid Cap", volume:8901234,  marketCapCr:49230 },
  { symbol:"PAGEIND",    name:"Page Industries Ltd",           sector:"Textile",       exchange:"NSE", price:38901.50,change:-0.56, pe:78.4,  mcap:"Mid Cap", volume:12345,    marketCapCr:43450 },
  { symbol:"PERSISTENT", name:"Persistent Systems",            sector:"IT",            exchange:"NSE", price:6789.30, change:2.45,  pe:52.8,  mcap:"Mid Cap", volume:345678,   marketCapCr:98230 },
  { symbol:"PETRONET",   name:"Petronet LNG Ltd",              sector:"Energy",        exchange:"NSE", price:289.60,  change:0.34,  pe:12.6,  mcap:"Large Cap",volume:5678901, marketCapCr:43230 },
  { symbol:"PIIND",      name:"PI Industries Ltd",             sector:"Agrochemicals", exchange:"NSE", price:3678.90, change:-0.78, pe:42.6,  mcap:"Mid Cap", volume:234567,   marketCapCr:55640 },
  { symbol:"PGHH",       name:"Procter & Gamble HH",           sector:"FMCG",          exchange:"NSE", price:14567.80,change:0.45,  pe:64.2,  mcap:"Mid Cap", volume:23456,    marketCapCr:47450 },
  { symbol:"PNBHOUSING", name:"PNB Housing Finance",           sector:"Finance",       exchange:"NSE", price:890.30,  change:-0.45, pe:18.6,  mcap:"Mid Cap", volume:2345678,  marketCapCr:14320 },
  { symbol:"PVRINOX",    name:"PVR Inox Ltd",                  sector:"Entertainment", exchange:"NSE", price:1567.30, change:-1.34, pe:52.4,  mcap:"Mid Cap", volume:567890,   marketCapCr:14560 },
  { symbol:"RAMCOCEM",   name:"The Ramco Cements",             sector:"Cement",        exchange:"NSE", price:789.50,  change:0.89,  pe:28.6,  mcap:"Mid Cap", volume:1234567,  marketCapCr:18670 },
  { symbol:"RECLTD",     name:"REC Ltd",                       sector:"Finance",       exchange:"NSE", price:456.70,  change:2.12,  pe:8.6,   mcap:"Large Cap",volume:12345678,marketCapCr:120340},
  { symbol:"RBLBANK",    name:"RBL Bank Ltd",                  sector:"Banking",       exchange:"NSE", price:234.50,  change:-1.56, pe:18.4,  mcap:"Mid Cap", volume:5678901,  marketCapCr:14230 },
  { symbol:"RVNL",       name:"Rail Vikas Nigam Ltd",          sector:"Infrastructure",exchange:"NSE", price:389.60,  change:3.12,  pe:48.4,  mcap:"Mid Cap", volume:12345678, marketCapCr:81230 },
  { symbol:"SBICARD",    name:"SBI Cards & Payments",          sector:"Finance",       exchange:"NSE", price:789.30,  change:-0.67, pe:38.4,  mcap:"Large Cap",volume:2345678, marketCapCr:74560 },
  { symbol:"SCHAEFFLER", name:"Schaeffler India",              sector:"Auto Parts",    exchange:"NSE", price:4567.80, change:1.23,  pe:54.6,  mcap:"Mid Cap", volume:89012,    marketCapCr:23450 },
  { symbol:"SHREECEM",   name:"Shree Cement Ltd",              sector:"Cement",        exchange:"NSE", price:25678.90,change:0.45,  pe:52.4,  mcap:"Large Cap",volume:23456,   marketCapCr:92450 },
  { symbol:"SRF",        name:"SRF Ltd",                       sector:"Chemicals",     exchange:"NSE", price:2345.60, change:-0.45, pe:38.6,  mcap:"Large Cap",volume:456789,  marketCapCr:69840 },
  { symbol:"STAR",       name:"Strides Pharma",                sector:"Pharma",        exchange:"NSE", price:567.80,  change:1.78,  pe:28.4,  mcap:"Mid Cap", volume:1234567,  marketCapCr:10230 },
  { symbol:"TATACHEM",   name:"Tata Chemicals Ltd",            sector:"Chemicals",     exchange:"NSE", price:1123.40, change:-1.23, pe:22.6,  mcap:"Large Cap",volume:1890123, marketCapCr:28560 },
  { symbol:"TATAELXSI",  name:"Tata Elxsi Ltd",                sector:"IT",            exchange:"NSE", price:7890.30, change:2.34,  pe:62.8,  mcap:"Mid Cap", volume:234567,   marketCapCr:49230 },
  { symbol:"TORNTPOWER", name:"Torrent Power Ltd",             sector:"Power",         exchange:"NSE", price:1234.50, change:0.78,  pe:28.6,  mcap:"Mid Cap", volume:1234567,  marketCapCr:58670 },
  { symbol:"TRITON",     name:"Triveni Turbine Ltd",           sector:"Engineering",   exchange:"NSE", price:567.80,  change:2.12,  pe:52.6,  mcap:"Small Cap",volume:1234567, marketCapCr:18450 },
  { symbol:"UBLLTD",     name:"United Breweries Ltd",          sector:"Beverages",     exchange:"NSE", price:1678.90, change:-0.56, pe:68.4,  mcap:"Mid Cap", volume:678901,   marketCapCr:44320 },
  { symbol:"UPL",        name:"UPL Ltd",                       sector:"Agrochemicals", exchange:"NSE", price:456.70,  change:-1.67, pe:18.6,  mcap:"Large Cap",volume:5678901, marketCapCr:57230 },
  { symbol:"VOLTAS",     name:"Voltas Ltd",                    sector:"Consumer Electricals",exchange:"NSE",price:1234.50,change:-0.78,pe:68.4,mcap:"Mid Cap",volume:1890123, marketCapCr:40780},
  { symbol:"WHIRLPOOL",  name:"Whirlpool of India",            sector:"Consumer Electricals",exchange:"NSE",price:1567.80,change:0.45,pe:42.6,mcap:"Mid Cap",volume:345678,  marketCapCr:19870},
  { symbol:"YESBANK",    name:"Yes Bank Ltd",                  sector:"Banking",       exchange:"NSE", price:21.40,   change:1.34,  pe:24.6,  mcap:"Large Cap",volume:189012345,marketCapCr:67230},
  { symbol:"ZEEL",       name:"Zee Entertainment",             sector:"Media",         exchange:"NSE", price:145.70,  change:-2.34, pe:22.6,  mcap:"Mid Cap", volume:18901234, marketCapCr:13450 },
  { symbol:"ZOMATO",     name:"Zomato Ltd",                    sector:"Food Tech",     exchange:"NSE", price:234.60,  change:3.45,  pe:218.4, mcap:"Large Cap",volume:28901234,marketCapCr:209230},
  { symbol:"NYKAA",      name:"FSN E-Commerce (Nykaa)",        sector:"E-Commerce",    exchange:"NSE", price:189.50,  change:-1.23, pe:348.6, mcap:"Mid Cap", volume:8901234,  marketCapCr:54320 },
  { symbol:"POLICYBZR",  name:"PB Fintech (PolicyBazaar)",     sector:"FinTech",       exchange:"NSE", price:1234.60, change:2.56,  pe:168.4, mcap:"Mid Cap", volume:2345678,  marketCapCr:55450 },
  { symbol:"PAYTM",      name:"One97 Communications (Paytm)",  sector:"FinTech",       exchange:"NSE", price:567.30,  change:-3.12, pe:-1,    mcap:"Large Cap",volume:12345678,marketCapCr:35670},
  { symbol:"DELHIVERY",  name:"Delhivery Ltd",                 sector:"Logistics",     exchange:"NSE", price:389.50,  change:1.67,  pe:-1,    mcap:"Mid Cap", volume:3456789,  marketCapCr:28940 },
  { symbol:"RAILTEL",    name:"RailTel Corporation",           sector:"Telecom",       exchange:"NSE", price:456.80,  change:2.34,  pe:38.6,  mcap:"Small Cap",volume:3456789, marketCapCr:14560 },
  { symbol:"SJVN",       name:"SJVN Ltd",                      sector:"Power",         exchange:"NSE", price:123.40,  change:1.56,  pe:28.6,  mcap:"Mid Cap", volume:18901234, marketCapCr:48230 },
  { symbol:"SUZLON",     name:"Suzlon Energy Ltd",             sector:"Renewable Energy",exchange:"NSE",price:45.60,  change:5.12,  pe:38.4,  mcap:"Mid Cap", volume:89012345, marketCapCr:62340 },
  { symbol:"TANLA",      name:"Tanla Platforms Ltd",           sector:"Technology",    exchange:"NSE", price:789.30,  change:-1.23, pe:28.6,  mcap:"Mid Cap", volume:1234567,  marketCapCr:10780 },
  { symbol:"TRIDENT",    name:"Trident Ltd",                   sector:"Textile",       exchange:"NSE", price:38.70,   change:2.56,  pe:18.4,  mcap:"Mid Cap", volume:38901234, marketCapCr:19560 },
  { symbol:"UJJIVANSFB", name:"Ujjivan Small Finance Bank",    sector:"Banking",       exchange:"NSE", price:45.80,   change:-0.78, pe:8.6,   mcap:"Small Cap",volume:18901234,marketCapCr:8230 },
  { symbol:"ZENTEC",     name:"Zensar Technologies",           sector:"IT",            exchange:"NSE", price:678.90,  change:1.45,  pe:28.4,  mcap:"Mid Cap", volume:890123,   marketCapCr:15670 },
  { symbol:"ZYDUSLIFE",  name:"Zydus Lifesciences",            sector:"Pharma",        exchange:"NSE", price:1234.50, change:-0.56, pe:32.6,  mcap:"Large Cap",volume:1234567, marketCapCr:123450},
  { symbol:"MAPMYINDIA", name:"C.E. Info Systems",             sector:"Technology",    exchange:"NSE", price:1789.30, change:1.23,  pe:82.6,  mcap:"Mid Cap", volume:345678,   marketCapCr:9560  },
  { symbol:"CAMPUS",     name:"Campus Activewear",             sector:"Consumer",      exchange:"NSE", price:245.60,  change:-1.34, pe:48.4,  mcap:"Small Cap",volume:890123,  marketCapCr:7230  },
  { symbol:"INOX",       name:"Inox Wind Energy",              sector:"Renewable Energy",exchange:"NSE",price:167.80, change:4.56,  pe:28.4,  mcap:"Small Cap",volume:8901234, marketCapCr:21450 },
  { symbol:"ENGINERSIN", name:"Engineers India Ltd",           sector:"Engineering",   exchange:"NSE", price:167.80,  change:2.34,  pe:28.4,  mcap:"Small Cap",volume:3456789, marketCapCr:9560  }
];



/* ============================================
   SECTOR DATA
   ============================================ */
const SECTORS = [
  { name: "IT", icon: "💻", change: 1.23 },
  { name: "Banking", icon: "🏦", change: 0.87 },
  { name: "Pharma", icon: "💊", change: -0.45 },
  { name: "Auto", icon: "🚗", change: 2.12 },
  { name: "Energy", icon: "⚡", change: 0.56 },
  { name: "FMCG", icon: "🛒", change: -0.23 },
  { name: "Metal", icon: "🔩", change: 1.78 },
  { name: "Realty", icon: "🏠", change: 3.45 },
  { name: "Infra", icon: "🏗️", change: 1.56 },
  { name: "Finance", icon: "📈", change: 0.34 },
  { name: "Telecom", icon: "📱", change: -1.23 },
  { name: "Power", icon: "🔋", change: 2.34 },
  { name: "Cement", icon: "🏭", change: -0.67 },
  { name: "Media", icon: "📺", change: -2.12 },
  { name: "Retail", icon: "🛍️", change: 1.45 },
  { name: "Chemicals", icon: "🧪", change: 0.89 }
];

/* ============================================
   MARKET INDICES
   ============================================ */
const INDICES = {
  nifty50: { name: "NIFTY 50", value: 22456.80, change: 0.84 },
  sensex: { name: "SENSEX", value: 73891.20, change: 0.72 },
  niftyBank: { name: "NIFTY BANK", value: 48234.60, change: 0.56 },
  niftyIT: { name: "NIFTY IT", value: 38567.40, change: 1.23 },
  niftyMidcap: { name: "NIFTY MIDCAP", value: 45678.30, change: 1.45 },
  niftySmallcap: { name: "NIFTY SMALLCAP", value: 15678.90, change: 2.12 }
};

/* ============================================
   THEME MANAGER
   ============================================ */
const ThemeManager = {
  init() {
    const savedTheme = localStorage.getItem('stockvision_theme') || 'dark';
    this.setTheme(savedTheme);
  },

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('stockvision_theme', theme);
    this.updateToggleIcon(theme);
  },

  toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  },

  updateToggleIcon(theme) {
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
  }
};

/* ============================================
   AUTH MANAGER
   ============================================ */
const AuthManager = {
  login(email, password) {
    const users = JSON.parse(localStorage.getItem('stockvision_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('stockvision_current_user', JSON.stringify(user));
      return true;
    }
    return false;
  },

  signup(name, email, password) {
    const users = JSON.parse(localStorage.getItem('stockvision_users') || '[]');
    if (users.find(u => u.email === email)) return false;
    users.push({ name, email, password, joined: new Date().toISOString() });
    localStorage.setItem('stockvision_users', JSON.stringify(users));
    const user = { name, email };
    localStorage.setItem('stockvision_current_user', JSON.stringify(user));
    return true;
  },

  logout() {
    localStorage.removeItem('stockvision_current_user');
    window.location.href = 'login.html';
  },

  isLoggedIn() {
    return !!localStorage.getItem('stockvision_current_user');
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('stockvision_current_user') || 'null');
  },

  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  }
};

/* ============================================
   API MANAGER
   ============================================ */
const APIManager = {
  // Fetch live stock data from Alpha Vantage
  async fetchStockData(symbol) {
    try {
      const url = `${CONFIG.API_BASE}?function=GLOBAL_QUOTE&symbol=${symbol}.NS&apikey=${CONFIG.API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data['Global Quote'] && data['Global Quote']['05. price']) {
        const q = data['Global Quote'];
        return {
          symbol: q['01. symbol'],
          price: parseFloat(q['05. price']).toFixed(2),
          change: parseFloat(q['09. % change']).toFixed(2),
          changeAmount: parseFloat(q['10. change amount'] || 0).toFixed(2),
          volume: parseInt(q['06. volume'] || 0),
          high: parseFloat(q['03. high'] || 0).toFixed(2),
          low: parseFloat(q['04. low'] || 0).toFixed(2),
          isLive: true
        };
      }
      throw new Error('No data');
    } catch (error) {
      // Return fallback demo data if API fails
      return this.getFallbackData(symbol);
    }
  },

  // Fetch time series data for chart
  async fetchTimeSeries(symbol) {
    try {
      const url = `${CONFIG.API_BASE}?function=TIME_SERIES_INTRADAY&symbol=${symbol}.NS&interval=60min&apikey=${CONFIG.API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data['Time Series (60min)']) {
        const series = data['Time Series (60min)'];
        return Object.entries(series).slice(0, 24).reverse().map(([time, vals]) => ({
          time,
          open: parseFloat(vals['1. open']),
          high: parseFloat(vals['2. high']),
          low: parseFloat(vals['3. low']),
          close: parseFloat(vals['4. close']),
          volume: parseInt(vals['5. volume'])
        }));
      }
      throw new Error('No series data');
    } catch (error) {
      return this.generateFallbackChartData(symbol);
    }
  },

  getFallbackData(symbol) {
    const stock = ALL_STOCKS.find(s => s.symbol === symbol);
    if (stock) {
      return {
        symbol: stock.symbol,
        price: (stock.price + (Math.random() - 0.5) * 10).toFixed(2),
        change: stock.change.toFixed(2),
        volume: stock.volume,
        high: (stock.price * 1.02).toFixed(2),
        low: (stock.price * 0.98).toFixed(2),
        isLive: false
      };
    }
    return null;
  },

  // Generate realistic demo chart data
  generateFallbackChartData(symbol) {
    const stock = ALL_STOCKS.find(s => s.symbol === symbol);
    const basePrice = stock ? stock.price : 1000;
    const data = [];
    let price = basePrice * 0.97;

    for (let i = 24; i >= 0; i--) {
      const date = new Date();
      date.setHours(date.getHours() - i);
      const volatility = price * 0.015;
      const change = (Math.random() - 0.48) * volatility;
      price = Math.max(price + change, basePrice * 0.85);

      data.push({
        time: date.toISOString(),
        open: price,
        high: price + Math.abs(change) * 0.5,
        low: price - Math.abs(change) * 0.5,
        close: price + change * 0.3,
        volume: Math.floor(Math.random() * 1000000) + 500000
      });
    }
    return data;
  }
};

/* ============================================
   MARKET DATA FLUCTUATOR
   Simulates real-time price movement
   ============================================ */
const MarketFluctuator = {
  stocks: {},
  listeners: [],

  init() {
    ALL_STOCKS.forEach(stock => {
      this.stocks[stock.symbol] = { ...stock };
    });
    this.startFluctuating();
  },

  startFluctuating() {
    setInterval(() => {
      this.fluctuate();
    }, 3000); // Update every 3 seconds
  },

  fluctuate() {
    ALL_STOCKS.forEach(stock => {
      const current = this.stocks[stock.symbol];
      const volatility = current.price * 0.004; // 0.4% max movement
      const change = (Math.random() - 0.5) * volatility;
      current.price = Math.max(current.price + change, 1);
      current.change = ((current.price - stock.price) / stock.price * 100);
    });
    this.notifyListeners();
  },

  getStock(symbol) {
    return this.stocks[symbol] || ALL_STOCKS.find(s => s.symbol === symbol);
  },

  addListener(fn) {
    this.listeners.push(fn);
  },

  notifyListeners() {
    this.listeners.forEach(fn => fn(this.stocks));
  }
};

/* ============================================
   UI HELPERS
   ============================================ */
const UI = {
  formatPrice(price) {
    return '₹' + parseFloat(price).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  },

  formatChange(change) {
    const num = parseFloat(change);
    const arrow = num >= 0 ? '▲' : '▼';
    const cls = num >= 0 ? 'up' : 'down';
    return { text: `${arrow} ${Math.abs(num).toFixed(2)}%`, cls };
  },

  formatVolume(vol) {
    if (vol >= 10000000) return (vol / 10000000).toFixed(2) + ' Cr';
    if (vol >= 100000) return (vol / 100000).toFixed(2) + ' L';
    if (vol >= 1000) return (vol / 1000).toFixed(1) + 'K';
    return vol.toString();
  },

  formatMarketCap(mcap) {
    if (mcap >= 1000000000) return (mcap / 1000000000).toFixed(1) + 'T';
    if (mcap >= 10000000) return (mcap / 10000000).toFixed(1) + 'Cr';
    return mcap.toString();
  },

  showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer') || this.createToastContainer();
    const toast = document.createElement('div');
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type] || '📌'}</span><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  },

  createToastContainer() {
    const div = document.createElement('div');
    div.id = 'toastContainer';
    div.className = 'toast-container';
    document.body.appendChild(div);
    return div;
  },

  // Create stock card HTML
  createStockCard(stock, type = 'normal') {
    const { text: changeText, cls } = this.formatChange(stock.change);
    const extraClass = type === 'gainer' ? 'gainer' : type === 'loser' ? 'loser' : '';
    // Format market cap short
    const mcapDisplay = stock.marketCapCr
      ? (stock.marketCapCr >= 100000
          ? (stock.marketCapCr/100000).toFixed(1) + ' L Cr'
          : stock.marketCapCr >= 1000
            ? (stock.marketCapCr/1000).toFixed(0) + 'K Cr'
            : stock.marketCapCr + ' Cr')
      : stock.mcap || '';
    return `
      <div class="stock-card ${extraClass}" onclick="openChartModal('${stock.symbol}')">
        <div class="stock-header">
          <span class="stock-symbol">${stock.symbol}</span>
          <span class="stock-exchange">${stock.exchange || 'NSE'}</span>
        </div>
        <div class="stock-name">${stock.name}</div>
        <div class="stock-price" id="price-${stock.symbol}">${this.formatPrice(stock.price)}</div>
        <div class="stock-change ${cls}">
          <span class="change-badge ${cls}" id="change-${stock.symbol}">${changeText}</span>
        </div>
        <div class="stock-footer">
          <span class="stock-volume" title="Market Cap" style="color:var(--text-muted);font-size:0.68rem">💰 ${mcapDisplay}</span>
          <button class="chart-btn" title="View Chart">📈</button>
        </div>
      </div>
    `;
  },

  // Create row in table
  createTableRow(stock, index) {
    const { text: changeText, cls } = this.formatChange(stock.change);
    const mcapVal = stock.marketCapCr
      ? (stock.marketCapCr >= 100000
          ? '₹' + (stock.marketCapCr/100000).toFixed(2) + ' L Cr'
          : '₹' + (stock.marketCapCr/1000).toFixed(1) + 'K Cr')
      : '—';
    return `
      <tr onclick="openChartModal('${stock.symbol}')" style="cursor:pointer">
        <td>${index + 1}</td>
        <td>
          <div class="symbol">${stock.symbol}</div>
          <div class="company-name">${stock.name}</div>
        </td>
        <td><span class="stock-exchange" style="background:var(--bg-glass);padding:2px 7px;border-radius:5px;font-size:0.72rem">${stock.exchange}</span></td>
        <td style="font-weight:700">${this.formatPrice(stock.price)}</td>
        <td><span class="change-badge ${cls}">${changeText}</span></td>
        <td>${this.formatVolume(stock.volume)}</td>
        <td>${stock.pe === -1 ? 'N/A' : (stock.pe || 'N/A')}</td>
        <td>
          <div style="font-size:0.8rem;font-weight:600">${mcapVal}</div>
          <div style="font-size:0.68rem;color:var(--text-muted)">${stock.mcap || ''}</div>
        </td>
        <td>
          <span style="cursor:pointer;font-size:0.78rem;color:var(--accent-blue);font-weight:600"
            onclick="event.stopPropagation();openSectorModal('${stock.sector}')">${stock.sector} ↗</span>
        </td>
        <td onclick="event.stopPropagation()">
          <button class="chart-btn" onclick="openChartModal('${stock.symbol}')" title="Chart">📈</button>
        </td>
      </tr>
    `;
  }
};

/* ============================================
   CHART MANAGER (using Canvas - no library needed)
   ============================================ */
const ChartManager = {
  currentType: 'line',
  currentData: [],
  currentSymbol: '',

  async open(symbol) {
    this.currentSymbol = symbol;
    const data = await APIManager.fetchTimeSeries(symbol);
    this.currentData = data;
    this.render(this.currentType);
  },

  render(type) {
    this.currentType = type;
    const canvas = document.getElementById('mainChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const W = canvas.width = canvas.offsetWidth || 700;
    const H = canvas.height = 280;

    // Clear canvas
    ctx.clearRect(0, 0, W, H);

    const data = this.currentData;
    if (!data || data.length === 0) return;

    const prices = data.map(d => parseFloat(d.close));
    const highs = data.map(d => parseFloat(d.high));
    const lows = data.map(d => parseFloat(d.low));
    const opens = data.map(d => parseFloat(d.open));

    const minP = Math.min(...lows) * 0.999;
    const maxP = Math.max(...highs) * 1.001;
    const range = maxP - minP;

    const pad = { top: 20, right: 20, bottom: 30, left: 65 };
    const chartW = W - pad.left - pad.right;
    const chartH = H - pad.top - pad.bottom;

    const toY = val => pad.top + chartH - ((val - minP) / range) * chartH;
    const toX = idx => pad.left + (idx / (data.length - 1)) * chartW;

    // Draw grid
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = pad.top + (i / 5) * chartH;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(W - pad.right, y);
      ctx.stroke();
      // Y axis labels
      const val = maxP - (i / 5) * range;
      ctx.fillStyle = 'rgba(136, 146, 164, 0.7)';
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('₹' + val.toFixed(0), pad.left - 5, y + 4);
    }

    if (type === 'line') {
      // Draw line chart
      const gradient = ctx.createLinearGradient(0, pad.top, 0, H - pad.bottom);
      const isUp = prices[prices.length - 1] >= prices[0];
      const color = isUp ? '#10b981' : '#ef4444';

      gradient.addColorStop(0, isUp ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');

      // Area fill
      ctx.beginPath();
      ctx.moveTo(toX(0), toY(prices[0]));
      prices.forEach((p, i) => ctx.lineTo(toX(i), toY(p)));
      ctx.lineTo(toX(prices.length - 1), H - pad.bottom);
      ctx.lineTo(toX(0), H - pad.bottom);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Line
      ctx.beginPath();
      ctx.moveTo(toX(0), toY(prices[0]));
      prices.forEach((p, i) => ctx.lineTo(toX(i), toY(p)));
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineJoin = 'round';
      ctx.stroke();

    } else {
      // Draw candlestick chart
      const candleW = Math.max(2, (chartW / data.length) * 0.65);

      data.forEach((d, i) => {
        const x = toX(i);
        const o = parseFloat(d.open);
        const c = parseFloat(d.close);
        const h = parseFloat(d.high);
        const l = parseFloat(d.low);
        const isGreen = c >= o;
        const color = isGreen ? '#10b981' : '#ef4444';

        // Wick
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, toY(h));
        ctx.lineTo(x, toY(l));
        ctx.stroke();

        // Body
        const bodyTop = toY(Math.max(o, c));
        const bodyH = Math.max(2, Math.abs(toY(o) - toY(c)));
        ctx.fillStyle = color;
        ctx.fillRect(x - candleW / 2, bodyTop, candleW, bodyH);
      });
    }

    // X axis labels (show 6 evenly spaced)
    ctx.fillStyle = 'rgba(136, 146, 164, 0.7)';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'center';
    const step = Math.floor(data.length / 6);
    for (let i = 0; i < data.length; i += step) {
      const d = new Date(data[i].time);
      const label = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
      ctx.fillText(label, toX(i), H - 8);
    }
  }
};

/* ============================================
   PORTFOLIO MANAGER
   ============================================ */
const PortfolioManager = {
  getHoldings() {
    return JSON.parse(localStorage.getItem('stockvision_portfolio') || '[]');
  },

  saveHoldings(holdings) {
    localStorage.setItem('stockvision_portfolio', JSON.stringify(holdings));
  },

  addHolding(symbol, name, qty, buyPrice) {
    const holdings = this.getHoldings();
    const existing = holdings.find(h => h.symbol === symbol);
    if (existing) {
      // Average the price if already exists
      const totalQty = existing.qty + parseInt(qty);
      const totalCost = existing.qty * existing.buyPrice + parseInt(qty) * parseFloat(buyPrice);
      existing.qty = totalQty;
      existing.buyPrice = totalCost / totalQty;
    } else {
      holdings.push({ symbol, name, qty: parseInt(qty), buyPrice: parseFloat(buyPrice), addedAt: new Date().toISOString() });
    }
    this.saveHoldings(holdings);
    return true;
  },

  removeHolding(symbol) {
    const holdings = this.getHoldings().filter(h => h.symbol !== symbol);
    this.saveHoldings(holdings);
  },

  getPortfolioStats() {
    const holdings = this.getHoldings();
    let totalInvested = 0, totalCurrent = 0;

    holdings.forEach(h => {
      const stock = MarketFluctuator.getStock(h.symbol);
      const currentPrice = stock ? stock.price : h.buyPrice;
      totalInvested += h.qty * h.buyPrice;
      totalCurrent += h.qty * currentPrice;
    });

    const gain = totalCurrent - totalInvested;
    const gainPct = totalInvested > 0 ? (gain / totalInvested * 100) : 0;

    return { totalInvested, totalCurrent, gain, gainPct, count: holdings.length };
  }
};

/* ============================================
   CHART MODAL
   ============================================ */
function openChartModal(symbol) {
  const stock = MarketFluctuator.getStock(symbol);
  if (!stock) return;

  const modal = document.getElementById('chartModal');
  if (!modal) return;

  const { text: changeText, cls } = UI.formatChange(stock.change);

  document.getElementById('modalTitle').innerHTML = `
    <div>
      <span style="font-size:1.2rem;font-weight:800">${stock.symbol}</span>
      <span style="font-size:0.8rem;color:var(--text-muted);margin-left:8px">${stock.name}</span>
    </div>
    <div style="margin-top:6px;display:flex;gap:12px;align-items:center">
      <span style="font-size:1.5rem;font-weight:700;color:var(--text-primary)">${UI.formatPrice(stock.price)}</span>
      <span class="change-badge ${cls}">${changeText}</span>
      <span style="font-size:0.75rem;color:var(--text-muted);margin-left:8px">Sector: ${stock.sector}</span>
    </div>
  `;

  modal.classList.add('open');
  ChartManager.open(symbol);
}

function closeChartModal() {
  const modal = document.getElementById('chartModal');
  if (modal) modal.classList.remove('open');
}

/* ============================================
   SEARCH FUNCTIONALITY
   ============================================ */
const SearchManager = {
  results: [],

  search(query) {
    if (!query || query.length < 1) return [];
    const q = query.toLowerCase();
    return ALL_STOCKS.filter(s =>
      s.symbol.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q) ||
      s.sector.toLowerCase().includes(q)
    ).slice(0, 10);
  },

  showDropdown(results, dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) return;

    if (results.length === 0) {
      dropdown.classList.remove('open');
      return;
    }

    dropdown.innerHTML = results.map(s => {
      const { text: ct, cls } = UI.formatChange(s.change);
      return `
        <div class="search-result-item" onclick="openChartModal('${s.symbol}')">
          <span class="result-symbol text-accent">${s.symbol}</span>
          <span class="result-name">${s.name}</span>
          <div style="text-align:right">
            <div class="result-price">${UI.formatPrice(s.price)}</div>
            <span class="change-badge ${cls}" style="font-size:0.7rem">${ct}</span>
          </div>
        </div>
      `;
    }).join('');
    dropdown.classList.add('open');
  }
};

/* ============================================
   INIT MARKET CLOCK
   ============================================ */
function initClock() {
  function updateClock() {
    const el = document.getElementById('marketTime');
    if (!el) return;
    const now = new Date();
    const ist = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
    const h = ist.getUTCHours();
    const isOpen = (h >= 9 && h < 15) || (h === 15 && ist.getUTCMinutes() <= 30);
    const timeStr = ist.toUTCString().split(' ')[4];
    el.textContent = `IST ${timeStr} | Market ${isOpen ? '🟢 Open' : '🔴 Closed'}`;
  }
  updateClock();
  setInterval(updateClock, 1000);
}

/* ============================================
   INIT INDICES (with live fluctuation)
   ============================================ */
function initIndices() {
  const localIndices = {};
  Object.keys(INDICES).forEach(key => {
    localIndices[key] = { ...INDICES[key] };
  });

  function updateIndices() {
    Object.keys(localIndices).forEach(key => {
      const idx = localIndices[key];
      const delta = (Math.random() - 0.5) * idx.value * 0.002;
      idx.value += delta;
      idx.change += (Math.random() - 0.5) * 0.05;

      const el = document.getElementById(`idx-${key}`);
      if (el) {
        const { text: ct, cls } = UI.formatChange(idx.change);
        el.querySelector('.index-value').textContent = idx.value.toLocaleString('en-IN', { maximumFractionDigits: 2 });
        const changeEl = el.querySelector('.index-change');
        changeEl.className = `index-change ${cls}`;
        changeEl.textContent = ct;
      }
    });
  }

  // Build HTML for indices
  const grid = document.getElementById('indicesGrid');
  if (grid) {
    grid.innerHTML = Object.keys(localIndices).map(key => {
      const idx = localIndices[key];
      const { text: ct, cls } = UI.formatChange(idx.change);
      return `
        <div class="index-card" id="idx-${key}">
          <div class="index-name">${idx.name}</div>
          <div class="index-value">${idx.value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
          <div class="index-change ${cls}">${ct}</div>
        </div>
      `;
    }).join('');
  }

  setInterval(updateIndices, 3000);
}

/* ============================================
   INIT TICKER BANNER
   ============================================ */
function initTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;

  const tickerStocks = ALL_STOCKS.slice(0, 40);
  const renderTicker = () => {
    const html = [...tickerStocks, ...tickerStocks].map(s => {
      const { text: ct, cls } = UI.formatChange(MarketFluctuator.stocks[s.symbol]?.change || s.change);
      return `
        <div class="ticker-item">
          <span class="ticker-name">${s.symbol}</span>
          <span class="ticker-price">${UI.formatPrice(MarketFluctuator.stocks[s.symbol]?.price || s.price)}</span>
          <span class="ticker-change ${cls}">${ct}</span>
        </div>
      `;
    }).join('');
    track.innerHTML = html;
  };

  renderTicker();
  MarketFluctuator.addListener(() => renderTicker());
}

/* ============================================
   INIT HAMBURGER MENU
   ============================================ */
function initHamburger() {
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!ham || !menu) return;

  ham.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}

/* ============================================
   LOGIN PAGE INIT
   ============================================ */
function initLoginPage() {
  ThemeManager.init();

  // Redirect if already logged in
  if (AuthManager.isLoggedIn()) {
    window.location.href = 'dashboard.html';
    return;
  }

  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');

  function switchTab(tab) {
    if (tab === 'login') {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      loginTab.classList.add('active');
      signupTab.classList.remove('active');
    } else {
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
      signupTab.classList.add('active');
      loginTab.classList.remove('active');
    }
  }

  loginTab.addEventListener('click', () => switchTab('login'));
  signupTab.addEventListener('click', () => switchTab('signup'));

  // Login form submit
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const err = document.getElementById('loginError');

    if (AuthManager.login(email, password)) {
      UI.showToast('Login successful! Redirecting...', 'success');
      setTimeout(() => { window.location.href = 'dashboard.html'; }, 800);
    } else {
      err.textContent = '❌ Invalid email or password';
      err.classList.add('visible');
    }
  });

  // Signup form submit
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;
    const err = document.getElementById('signupError');

    if (password !== confirm) {
      err.textContent = '❌ Passwords do not match';
      err.classList.add('visible');
      return;
    }

    if (password.length < 6) {
      err.textContent = '❌ Password must be at least 6 characters';
      err.classList.add('visible');
      return;
    }

    if (AuthManager.signup(name, email, password)) {
      UI.showToast('Account created! Redirecting...', 'success');
      setTimeout(() => { window.location.href = 'dashboard.html'; }, 800);
    } else {
      err.textContent = '❌ Email already registered';
      err.classList.add('visible');
    }
  });

  // Theme toggle
  document.getElementById('themeToggle')?.addEventListener('click', () => ThemeManager.toggle());
}

/* ============================================
   DASHBOARD PAGE INIT
   ============================================ */
function initDashboard() {
  ThemeManager.init();
  if (!AuthManager.requireAuth()) return;

  const user = AuthManager.getCurrentUser();
  const userBtn = document.getElementById('userBtn');
  if (userBtn) userBtn.textContent = `👤 ${user.name || user.email.split('@')[0]}`;

  MarketFluctuator.init();

  initClock();
  initIndices();
  initTicker();
  initHamburger();

  // Theme toggle
  document.getElementById('themeToggle')?.addEventListener('click', () => ThemeManager.toggle());
  document.getElementById('logoutBtn')?.addEventListener('click', () => AuthManager.logout());

  // Render stock sections
  renderFeaturedStocks();
  renderGainers();
  renderLosers();
  renderMostActive();
  renderSectors();
  renderNifty50();

  // Setup search
  const searchInput = document.getElementById('searchInput');
  const searchDropdown = document.getElementById('searchDropdown');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const results = SearchManager.search(e.target.value);
      SearchManager.showDropdown(results, 'searchDropdown');
    });
    document.addEventListener('click', (e) => {
      if (!searchInput.closest('.search-wrapper')?.contains(e.target)) {
        searchDropdown?.classList.remove('open');
      }
    });
  }

  // Update prices every 3s
  MarketFluctuator.addListener(() => {
    updateLivePrices();
  });

  // Mobile search
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
      const results = SearchManager.search(e.target.value);
      SearchManager.showDropdown(results, 'mobileSearchDropdown');
    });
  }
}

function renderFeaturedStocks() {
  const featured = ['RELIANCE', 'TCS', 'INFY', 'ICICIBANK', 'SBIN', 'HDFCBANK'];
  const container = document.getElementById('featuredStocks');
  if (!container) return;
  container.innerHTML = featured.map(sym => {
    const stock = MarketFluctuator.getStock(sym);
    return UI.createStockCard(stock);
  }).join('');
}

function renderGainers() {
  const container = document.getElementById('topGainers');
  if (!container) return;
  const gainers = [...ALL_STOCKS].sort((a, b) => b.change - a.change).slice(0, 6);
  container.innerHTML = gainers.map(s => UI.createStockCard(s, 'gainer')).join('');
}

function renderLosers() {
  const container = document.getElementById('topLosers');
  if (!container) return;
  const losers = [...ALL_STOCKS].sort((a, b) => a.change - b.change).slice(0, 6);
  container.innerHTML = losers.map(s => UI.createStockCard(s, 'loser')).join('');
}

function renderMostActive() {
  const container = document.getElementById('mostActive');
  if (!container) return;
  const active = [...ALL_STOCKS].sort((a, b) => b.volume - a.volume).slice(0, 6);
  container.innerHTML = active.map(s => UI.createStockCard(s)).join('');
}

function renderSectors() {
  const container = document.getElementById('sectorsGrid');
  if (!container) return;
  container.innerHTML = SECTORS.map(sec => {
    const { text: ct, cls } = UI.formatChange(sec.change);
    return `
      <div class="sector-card">
        <div class="sector-icon">${sec.icon}</div>
        <div class="sector-name">${sec.name}</div>
        <div class="sector-change ${cls}">${ct}</div>
      </div>
    `;
  }).join('');
}

function renderNifty50() {
  const container = document.getElementById('nifty50Grid');
  if (!container) return;
  const nifty50 = ALL_STOCKS.filter(s => s.mcap === 'Large Cap').slice(0, 20);
  container.innerHTML = nifty50.map(s => UI.createStockCard(s)).join('');
}

function updateLivePrices() {
  Object.values(MarketFluctuator.stocks).forEach(stock => {
    const priceEl = document.getElementById(`price-${stock.symbol}`);
    const changeEl = document.getElementById(`change-${stock.symbol}`);
    if (priceEl) priceEl.textContent = UI.formatPrice(stock.price);
    if (changeEl) {
      const { text: ct, cls: c } = UI.formatChange(stock.change);
      changeEl.textContent = ct;
      changeEl.className = `change-badge ${c}`;
    }
  });
}

/* ============================================
   PORTFOLIO PAGE INIT
   ============================================ */
function initPortfolio() {
  ThemeManager.init();
  if (!AuthManager.requireAuth()) return;

  MarketFluctuator.init();
  initTicker();
  initHamburger();

  const user = AuthManager.getCurrentUser();
  const userBtn = document.getElementById('userBtn');
  if (userBtn) userBtn.textContent = `👤 ${user.name || user.email.split('@')[0]}`;

  document.getElementById('themeToggle')?.addEventListener('click', () => ThemeManager.toggle());
  document.getElementById('logoutBtn')?.addEventListener('click', () => AuthManager.logout());

  // Autocomplete for stock symbol input
  const symInput = document.getElementById('stockSymbolInput');
  if (symInput) {
    symInput.addEventListener('input', (e) => {
      const results = SearchManager.search(e.target.value);
      const dropdown = document.getElementById('portfolioSearchDropdown');
      if (dropdown) {
        if (results.length > 0 && e.target.value.length > 0) {
          dropdown.innerHTML = results.slice(0, 6).map(s =>
            `<div class="search-result-item" onclick="selectPortfolioStock('${s.symbol}','${s.name.replace(/'/g, '')}')">
              <span class="result-symbol text-accent">${s.symbol}</span>
              <span class="result-name">${s.name}</span>
              <span class="result-price">${UI.formatPrice(s.price)}</span>
            </div>`
          ).join('');
          dropdown.classList.add('open');
        } else {
          dropdown.classList.remove('open');
        }
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#portfolioSearchDropdown') && !e.target.closest('#stockSymbolInput')) {
      document.getElementById('portfolioSearchDropdown')?.classList.remove('open');
    }
  });

  renderPortfolio();

  document.getElementById('addHoldingForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const symbol = document.getElementById('stockSymbolInput').value.toUpperCase().trim();
    const name = document.getElementById('stockNameInput').value.trim() || symbol;
    const qty = document.getElementById('stockQtyInput').value;
    const price = document.getElementById('stockPriceInput').value;

    if (!symbol || !qty || !price) {
      UI.showToast('Please fill all fields', 'error');
      return;
    }

    PortfolioManager.addHolding(symbol, name, qty, price);
    UI.showToast(`${symbol} added to portfolio`, 'success');
    e.target.reset();
    document.getElementById('portfolioSearchDropdown')?.classList.remove('open');
    renderPortfolio();
  });
}

window.selectPortfolioStock = function(symbol, name) {
  const stock = MarketFluctuator.getStock(symbol);
  document.getElementById('stockSymbolInput').value = symbol;
  document.getElementById('stockNameInput').value = name;
  if (stock) document.getElementById('stockPriceInput').value = stock.price.toFixed(2);
  document.getElementById('portfolioSearchDropdown')?.classList.remove('open');
};

function renderPortfolio() {
  const stats = PortfolioManager.getPortfolioStats();
  const holdings = PortfolioManager.getHoldings();

  // Update summary cards
  const els = {
    totalInvested: document.getElementById('totalInvested'),
    currentValue: document.getElementById('currentValue'),
    totalPnl: document.getElementById('totalPnl'),
    stockCount: document.getElementById('stockCount')
  };

  if (els.totalInvested) els.totalInvested.textContent = UI.formatPrice(stats.totalInvested);
  if (els.currentValue) els.currentValue.textContent = UI.formatPrice(stats.totalCurrent);
  if (els.totalPnl) {
    const { text: ct, cls } = UI.formatChange(stats.gainPct);
    els.totalPnl.innerHTML = `<span class="${cls === 'up' ? 'text-green' : 'text-red'}">${stats.gain >= 0 ? '+' : ''}${UI.formatPrice(stats.gain)} (${ct})</span>`;
  }
  if (els.stockCount) els.stockCount.textContent = stats.count + ' Holdings';

  // Render table
  const tbody = document.getElementById('portfolioTableBody');
  if (!tbody) return;

  if (holdings.length === 0) {
    tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;padding:32px;color:var(--text-muted)">📭 No holdings yet. Add your first stock above!</td></tr>';
    return;
  }

  tbody.innerHTML = holdings.map(h => {
    const stock = MarketFluctuator.getStock(h.symbol);
    const currentPrice = stock ? stock.price : h.buyPrice;
    const currentVal = currentPrice * h.qty;
    const invested = h.buyPrice * h.qty;
    const pnl = currentVal - invested;
    const pnlPct = (pnl / invested) * 100;
    const { text: ct, cls } = UI.formatChange(pnlPct);

    return `
      <tr>
        <td style="font-weight:700;color:var(--accent-blue)">${h.symbol}</td>
        <td style="font-size:0.8rem;color:var(--text-secondary)">${h.name}</td>
        <td>${h.qty}</td>
        <td>${UI.formatPrice(h.buyPrice)}</td>
        <td style="font-weight:600">${UI.formatPrice(currentPrice)}</td>
        <td>${UI.formatPrice(invested)}</td>
        <td style="font-weight:600">${UI.formatPrice(currentVal)}</td>
        <td><span class="change-badge ${cls}">${pnl >= 0 ? '+' : ''}${UI.formatPrice(pnl)}</span></td>
        <td><span class="change-badge ${cls}">${ct}</span></td>
        <td>
          <button class="btn-danger" onclick="removeHolding('${h.symbol}')">🗑️ Remove</button>
        </td>
      </tr>
    `;
  }).join('');
}

window.removeHolding = function(symbol) {
  if (confirm(`Remove ${symbol} from portfolio?`)) {
    PortfolioManager.removeHolding(symbol);
    renderPortfolio();
    UI.showToast(`${symbol} removed`, 'info');
  }
};

/* ============================================
   SCREENER PAGE INIT
   ============================================ */
function initScreener() {
  ThemeManager.init();
  if (!AuthManager.requireAuth()) return;

  MarketFluctuator.init();
  initTicker();
  initHamburger();

  const user = AuthManager.getCurrentUser();
  const userBtn = document.getElementById('userBtn');
  if (userBtn) userBtn.textContent = `👤 ${user.name || user.email.split('@')[0]}`;

  document.getElementById('themeToggle')?.addEventListener('click', () => ThemeManager.toggle());
  document.getElementById('logoutBtn')?.addEventListener('click', () => AuthManager.logout());

  // Search on screener
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const results = SearchManager.search(e.target.value);
      SearchManager.showDropdown(results, 'searchDropdown');
    });
  }

  // Populate sector options
  const sectorFilter = document.getElementById('sectorFilter');
  if (sectorFilter) {
    const sectors = [...new Set(ALL_STOCKS.map(s => s.sector))].sort();
    sectors.forEach(sec => {
      const opt = document.createElement('option');
      opt.value = sec;
      opt.textContent = sec;
      sectorFilter.appendChild(opt);
    });
  }

  renderScreenerTable(ALL_STOCKS);

  document.getElementById('applyFilters')?.addEventListener('click', applyFilters);
  document.getElementById('resetFilters')?.addEventListener('click', () => {
    document.querySelectorAll('.filter-input, .filter-select').forEach(el => el.value = '');
    renderScreenerTable(ALL_STOCKS);
  });

  // Table header sort
  document.querySelectorAll('.stocks-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.getAttribute('data-sort');
      const asc = th.getAttribute('data-asc') !== 'true';
      th.setAttribute('data-asc', asc);
      const sorted = [...ALL_STOCKS].sort((a, b) => {
        if (typeof a[key] === 'number') return asc ? a[key] - b[key] : b[key] - a[key];
        return asc ? String(a[key]).localeCompare(String(b[key])) : String(b[key]).localeCompare(String(a[key]));
      });
      renderScreenerTable(sorted);
    });
  });
}

function applyFilters() {
  const minPE = parseFloat(document.getElementById('minPE')?.value) || 0;
  const maxPE = parseFloat(document.getElementById('maxPE')?.value) || 9999;
  const minPrice = parseFloat(document.getElementById('minPrice')?.value) || 0;
  const maxPrice = parseFloat(document.getElementById('maxPrice')?.value) || 9999999;
  const mcap = document.getElementById('mcapFilter')?.value || '';
  const sector = document.getElementById('sectorFilter')?.value || '';
  const minChange = parseFloat(document.getElementById('minChange')?.value) || -100;
  const maxChange = parseFloat(document.getElementById('maxChange')?.value) || 100;

  const filtered = ALL_STOCKS.filter(s => {
    const peOk = s.pe === -1 || (s.pe >= minPE && s.pe <= maxPE);
    const priceOk = s.price >= minPrice && s.price <= maxPrice;
    const mcapOk = !mcap || s.mcap === mcap;
    const sectorOk = !sector || s.sector === sector;
    const changeOk = s.change >= minChange && s.change <= maxChange;
    return peOk && priceOk && mcapOk && sectorOk && changeOk;
  });

  renderScreenerTable(filtered);
  UI.showToast(`Found ${filtered.length} stocks`, 'info');
}

function renderScreenerTable(stocks) {
  const tbody = document.getElementById('screenerTableBody');
  const countEl = document.getElementById('resultCount');
  if (!tbody) return;

  if (countEl) countEl.innerHTML = `Showing <span>${stocks.length}</span> of ${ALL_STOCKS.length} stocks`;

  if (stocks.length === 0) {
    tbody.innerHTML = '<tr><td colspan="10" style="text-align:center;padding:32px;color:var(--text-muted)">No stocks match your filters.</td></tr>';
    return;
  }

  tbody.innerHTML = stocks.map((s, i) => UI.createTableRow(s, i)).join('');
}

/* ============================================
   CHART MODAL CONTROLS
   ============================================ */
window.setChartType = function(type) {
  // Only toggle buttons in chart-controls (not period buttons)
  document.querySelectorAll('.chart-controls .chart-type-btn').forEach(b => b.classList.remove('active'));
  // Find the clicked button by matching onclick text
  const btn = [...document.querySelectorAll('.chart-controls .chart-type-btn')]
    .find(b => b.getAttribute('onclick') && b.getAttribute('onclick').includes(type));
  if (btn) btn.classList.add('active');
  ChartManager.currentType = type;
  ChartManager.render(type);
};

/* ============================================
   EXPORTS (for HTML pages to call)
   ============================================ */
window.openChartModal = openChartModal;
window.closeChartModal = closeChartModal;
window.initLoginPage = initLoginPage;
window.initDashboard = initDashboard;
window.initPortfolio = initPortfolio;
window.initScreener = initScreener;

console.log('%c📈 StockVision Pro loaded!', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%c🔴 Remember to set your Alpha Vantage API key in CONFIG.API_KEY', 'color: #ef4444; font-size: 13px;');

/* ============================================================
   HISTORICAL RETURNS ENGINE
   Generates realistic seeded historical price data for every
   stock. Uses the stock's current price and a deterministic
   seed so the same stock always produces the same history.
   ============================================================ */
const ReturnsEngine = {

  /* Periods: label, trading days approx, typical annual drift */
  PERIODS: [
    { key: '1W',  label: '1 Week',   days: 5   },
    { key: '1M',  label: '1 Month',  days: 21  },
    { key: '3M',  label: '3 Months', days: 63  },
    { key: '6M',  label: '6 Months', days: 126 },
    { key: '1Y',  label: '1 Year',   days: 252 },
    { key: '3Y',  label: '3 Years',  days: 756 },
    { key: '5Y',  label: '5 Years',  days: 1260},
    { key: '10Y', label: '10 Years', days: 2520}
  ],

  /* Seeded pseudo-random — makes results repeatable per symbol */
  _seed(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  },

  _seededRandom(seed) {
    /* Simple LCG PRNG */
    let s = seed;
    return function() {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      return (s >>> 0) / 4294967296;
    };
  },

  /* Build a realistic historic price path going backwards */
  _buildPricePath(currentPrice, days, symbol) {
    const seed = this._seed(symbol + days);
    const rng  = this._seededRandom(seed);

    /* Per-stock characteristics based on sector / mcap */
    const stock = ALL_STOCKS.find(s => s.symbol === symbol);
    let annualDrift = 0.12;  // default 12% annual
    let annualVol   = 0.28;  // default 28% vol

    if (stock) {
      const sector = stock.sector;
      if (sector === 'IT')       { annualDrift = 0.18; annualVol = 0.32; }
      if (sector === 'Banking')  { annualDrift = 0.14; annualVol = 0.30; }
      if (sector === 'Pharma')   { annualDrift = 0.15; annualVol = 0.26; }
      if (sector === 'Energy')   { annualDrift = 0.10; annualVol = 0.24; }
      if (sector === 'FMCG')     { annualDrift = 0.11; annualVol = 0.18; }
      if (sector === 'Auto')     { annualDrift = 0.16; annualVol = 0.30; }
      if (sector === 'Metal')    { annualDrift = 0.13; annualVol = 0.38; }
      if (sector === 'Realty' || sector === 'Real Estate') { annualDrift = 0.20; annualVol = 0.42; }
      if (stock.mcap === 'Small Cap') { annualDrift += 0.06; annualVol += 0.10; }
      if (stock.mcap === 'Mid Cap')   { annualDrift += 0.03; annualVol += 0.05; }
    }

    const dt   = 1 / 252; // daily time step
    const mu   = annualDrift;
    const sig  = annualVol;

    /* Simulate forward path backward from current price */
    /* price[0] = past price, price[days] = current price */
    /* We simulate: price_t = price_{t-1} * exp((mu-0.5*sig^2)*dt + sig*sqrt(dt)*Z) */
    /* Going backward: past_price = current / product_of_returns */

    let path = [currentPrice];
    let price = currentPrice;

    for (let i = 0; i < days; i++) {
      const z = (rng() + rng() + rng() + rng() - 2) / Math.sqrt(4 / 3); // approx normal
      const dailyReturn = Math.exp((mu - 0.5 * sig * sig) * dt + sig * Math.sqrt(dt) * z);
      price = price / dailyReturn; // going backward
      path.unshift(price);
    }

    return path; // path[0] = price N days ago, path[last] ≈ current
  },

  /* Get historical price for a given period */
  getPastPrice(symbol, periodKey) {
    const period = this.PERIODS.find(p => p.key === periodKey);
    if (!period) return null;

    const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!stock) return null;

    const path = this._buildPricePath(stock.price, period.days, symbol);
    return path[0]; // earliest price in path
  },

  /* Get all period returns for a symbol */
  getAllReturns(symbol) {
    const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!stock) return [];

    return this.PERIODS.map(period => {
      const pastPrice = this.getPastPrice(symbol, period.key);
      const currentPrice = stock.price;
      const pctReturn = ((currentPrice - pastPrice) / pastPrice) * 100;
      return {
        key:      period.key,
        label:    period.label,
        pastPrice,
        currentPrice,
        pctReturn,
        absReturn: currentPrice - pastPrice
      };
    });
  },

  /* Get historical price path for a period (for chart) */
  getHistoryForChart(symbol, periodKey) {
    const period = this.PERIODS.find(p => p.key === periodKey);
    if (!period) return [];

    const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!stock) return [];

    const path = this._buildPricePath(stock.price, period.days, symbol);
    const today = new Date();

    return path.map((price, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() - (period.days - i));
      return {
        time: d.toISOString(),
        close: price,
        open:  price * (0.998 + Math.random() * 0.004),
        high:  price * (1.002 + Math.random() * 0.006),
        low:   price * (0.994 + Math.random() * 0.004)
      };
    });
  }
};

/* ============================================================
   INVESTMENT SIMULATOR
   Given: symbol, qty of shares, purchase date (period key)
   Returns: invested amount, current value, P&L, CAGR, etc.
   ============================================================ */
const InvestmentSimulator = {

  calculate(symbol, qty, periodKey) {
    qty = parseInt(qty);
    if (!qty || qty <= 0) return null;

    const pastPrice   = ReturnsEngine.getPastPrice(symbol, periodKey);
    const stock       = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!pastPrice || !stock) return null;

    const currentPrice   = stock.price;
    const invested       = pastPrice * qty;
    const currentValue   = currentPrice * qty;
    const pnl            = currentValue - invested;
    const pnlPct         = (pnl / invested) * 100;
    const period         = ReturnsEngine.PERIODS.find(p => p.key === periodKey);
    const years          = period ? period.days / 252 : 1;

    /* CAGR = (currentValue/invested)^(1/years) - 1 */
    const cagr = years > 0 ? (Math.pow(currentValue / invested, 1 / years) - 1) * 100 : pnlPct;

    return {
      symbol,
      name: stock.name,
      qty,
      periodLabel: period ? period.label : periodKey,
      pastPrice,
      currentPrice,
      invested,
      currentValue,
      pnl,
      pnlPct,
      cagr,
      isGain: pnl >= 0
    };
  }
};

/* ============================================================
   ENHANCED openChartModal — now with Returns + Simulator tabs
   ============================================================ */
window.openChartModal = function(symbol) {
  const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
  if (!stock) return;

  const modal = document.getElementById('chartModal');
  if (!modal) return;

  const { text: changeText, cls } = UI.formatChange(stock.change);

  /* ---- Modal title ---- */
  document.getElementById('modalTitle').innerHTML = `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <div>
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
          <span style="font-size:1.25rem;font-weight:800">${stock.symbol}</span>
          <span class="change-badge ${cls}">${changeText}</span>
          <span style="font-size:0.72rem;background:var(--bg-glass);padding:2px 8px;border-radius:5px;color:var(--text-muted)">${stock.exchange} · ${stock.sector}</span>
        </div>
        <div style="margin-top:4px;font-size:0.82rem;color:var(--text-secondary)">${stock.name}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:1.6rem;font-weight:800;color:var(--text-primary)">${UI.formatPrice(stock.price)}</div>
        <div style="font-size:0.72rem;color:var(--text-muted)">P/E: ${stock.pe > 0 ? stock.pe : 'N/A'} · ${stock.mcap}</div>
      </div>
    </div>
  `;

  modal.classList.add('open');

  /* ---- Stock info cells ---- */
  const infoHTML = `
    <div class="stock-info-grid">
      <div class="stock-info-cell"><div class="sic-label">52W High</div><div class="sic-value text-green">${UI.formatPrice(stock.price * 1.18)}</div></div>
      <div class="stock-info-cell"><div class="sic-label">52W Low</div><div class="sic-value text-red">${UI.formatPrice(stock.price * 0.76)}</div></div>
      <div class="stock-info-cell"><div class="sic-label">P/E Ratio</div><div class="sic-value">${stock.pe > 0 ? stock.pe : 'N/A'}</div></div>
      <div class="stock-info-cell"><div class="sic-label">Volume</div><div class="sic-value">${UI.formatVolume(stock.volume)}</div></div>
      <div class="stock-info-cell"><div class="sic-label">Market Cap</div><div class="sic-value">${stock.mcap}</div></div>
      <div class="stock-info-cell"><div class="sic-label">Sector</div><div class="sic-value" style="font-size:0.75rem">${stock.sector}</div></div>
    </div>
  `;

  /* ---- Tabs HTML ---- */
  document.getElementById('modalBody').innerHTML = `
    ${infoHTML}

    <!-- Tab switcher -->
    <div class="modal-tabs">
      <div class="modal-tab active" onclick="switchModalTab('chart', this)">📈 Chart</div>
      <div class="modal-tab" onclick="switchModalTab('returns', this)">📊 Returns</div>
      <div class="modal-tab" onclick="switchModalTab('simulator', this)">🧮 Simulator</div>
    </div>

    <!-- TAB 1: Chart -->
    <div class="modal-tab-pane active" id="tab-chart">
      <div class="chart-controls" style="margin-bottom:12px">
        <button class="chart-type-btn active" onclick="setChartType('line')">📈 Line</button>
        <button class="chart-type-btn" onclick="setChartType('candle')">🕯️ Candlestick</button>
        <div style="margin-left:auto;display:flex;gap:6px;flex-wrap:wrap" id="periodBtns">
          <button class="chart-type-btn active" onclick="setChartPeriod('1W', this)">1W</button>
          <button class="chart-type-btn" onclick="setChartPeriod('1M', this)">1M</button>
          <button class="chart-type-btn" onclick="setChartPeriod('3M', this)">3M</button>
          <button class="chart-type-btn" onclick="setChartPeriod('6M', this)">6M</button>
          <button class="chart-type-btn" onclick="setChartPeriod('1Y', this)">1Y</button>
          <button class="chart-type-btn" onclick="setChartPeriod('3Y', this)">3Y</button>
          <button class="chart-type-btn" onclick="setChartPeriod('5Y', this)">5Y</button>
          <button class="chart-type-btn" onclick="setChartPeriod('10Y', this)">10Y</button>
        </div>
      </div>
      <div class="chart-container">
        <canvas id="mainChart" style="width:100%;height:100%"></canvas>
      </div>
      <div id="periodReturnBadge" style="margin-top:10px;text-align:center;font-size:0.82rem;color:var(--text-secondary)"></div>
    </div>

    <!-- TAB 2: Historical Returns -->
    <div class="modal-tab-pane" id="tab-returns">
      <div class="returns-section" style="margin-top:0;padding-top:0;border-top:none">
        <div class="returns-section-title">📅 Period-wise Historical Returns</div>
        <div class="returns-grid" id="returnsGrid">
          <div style="grid-column:1/-1;text-align:center;padding:20px;color:var(--text-muted)">
            <div class="loading-spinner" style="margin:0 auto 10px"></div>Calculating returns...
          </div>
        </div>

        <div class="returns-section-title" style="margin-top:20px">📊 Returns Overview</div>
        <div class="returns-bars-list" id="returnsBars">
          <!-- filled by JS -->
        </div>
      </div>
    </div>

    <!-- TAB 3: Investment Simulator -->
    <div class="modal-tab-pane" id="tab-simulator">
      <div class="sim-section" style="margin-top:0">
        <div class="sim-section-title">🧮 What If I Had Invested?</div>
        <p style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:14px">
          Enter number of shares and pick a purchase date to see what your investment would be worth today.
        </p>
        <div class="sim-controls">
          <div class="sim-input-group">
            <label>No. of Shares</label>
            <input type="number" class="sim-input" id="simQty" placeholder="e.g. 10" min="1" value="10" />
          </div>
          <div class="sim-input-group">
            <label>Purchase Period</label>
            <select class="sim-input" id="simPeriod">
              <option value="1W">1 Week Ago</option>
              <option value="1M">1 Month Ago</option>
              <option value="3M">3 Months Ago</option>
              <option value="6M">6 Months Ago</option>
              <option value="1Y" selected>1 Year Ago</option>
              <option value="3Y">3 Years Ago</option>
              <option value="5Y">5 Years Ago</option>
              <option value="10Y">10 Years Ago</option>
            </select>
          </div>
          <div class="sim-input-group">
            <label>Or Custom Buy Price</label>
            <input type="number" class="sim-input" id="simCustomPrice" placeholder="₹ optional" step="0.01" min="0.01" />
          </div>
          <button class="sim-btn" onclick="runSimulator('${symbol}')">Calculate →</button>
        </div>

        <!-- Also show quick presets -->
        <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">
          <span style="font-size:0.72rem;color:var(--text-muted);align-self:center">Quick:</span>
          ${[10, 50, 100, 500, 1000].map(q =>
            `<button style="padding:4px 10px;background:var(--bg-glass);border:1px solid var(--border-color);border-radius:6px;font-size:0.74rem;font-weight:600;cursor:pointer;color:var(--text-secondary);transition:all 0.2s"
              onmouseenter="this.style.borderColor='var(--accent-blue)';this.style.color='var(--accent-blue)'"
              onmouseleave="this.style.borderColor='var(--border-color)';this.style.color='var(--text-secondary)'"
              onclick="document.getElementById('simQty').value=${q};runSimulator('${symbol}')">${q} shares</button>`
          ).join('')}
        </div>

        <div class="sim-result" id="simResult"></div>
      </div>

      <!-- All periods quick summary table for this stock -->
      <div class="sim-section" style="margin-top:14px">
        <div class="sim-section-title">📋 If You Had Bought 1 Share Each Period</div>
        <div style="overflow-x:auto">
          <table style="width:100%;border-collapse:collapse;font-size:0.8rem">
            <thead>
              <tr style="background:var(--bg-glass)">
                <th style="padding:8px 12px;text-align:left;font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;border-bottom:1px solid var(--border-color)">Period</th>
                <th style="padding:8px 12px;text-align:right;font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;border-bottom:1px solid var(--border-color)">Buy Price</th>
                <th style="padding:8px 12px;text-align:right;font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;border-bottom:1px solid var(--border-color)">Current</th>
                <th style="padding:8px 12px;text-align:right;font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;border-bottom:1px solid var(--border-color)">P&L</th>
                <th style="padding:8px 12px;text-align:right;font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;border-bottom:1px solid var(--border-color)">Return %</th>
                <th style="padding:8px 12px;text-align:right;font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;border-bottom:1px solid var(--border-color)">CAGR</th>
              </tr>
            </thead>
            <tbody id="simSummaryTable"></tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  /* ---- Load chart with 1W data by default ---- */
  ChartManager.currentSymbol = symbol;
  ChartManager.currentPeriod = '1W';
  loadPeriodChart(symbol, '1W');

  /* ---- Load returns after a tiny delay ---- */
  setTimeout(() => { renderReturnsTab(symbol); }, 50);
  setTimeout(() => { renderSimSummaryTable(symbol); }, 100);
};

/* ============================================================
   SWITCH MODAL TABS
   ============================================================ */
window.switchModalTab = function(tabName, el) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.modal-tab-pane').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  const pane = document.getElementById('tab-' + tabName);
  if (pane) pane.classList.add('active');
};

/* ============================================================
   CHART PERIOD BUTTON
   ============================================================ */
window.setChartPeriod = function(periodKey, btn) {
  document.querySelectorAll('#periodBtns .chart-type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  ChartManager.currentPeriod = periodKey;
  loadPeriodChart(ChartManager.currentSymbol, periodKey);
};

function loadPeriodChart(symbol, periodKey) {
  const data = ReturnsEngine.getHistoryForChart(symbol, periodKey);
  ChartManager.currentData = data;
  ChartManager.render(ChartManager.currentType || 'line');

  /* Show period return badge */
  const periodReturn = ReturnsEngine.getAllReturns(symbol).find(r => r.key === periodKey);
  const badge = document.getElementById('periodReturnBadge');
  if (badge && periodReturn) {
    const isUp = periodReturn.pctReturn >= 0;
    badge.innerHTML = `
      <span style="font-size:0.8rem;font-weight:600">
        ${periodReturn.label} Performance:
        <span class="${isUp ? 'text-green' : 'text-red'}" style="font-size:1rem;font-weight:800">
          ${isUp ? '▲' : '▼'} ${Math.abs(periodReturn.pctReturn).toFixed(2)}%
        </span>
        <span style="color:var(--text-muted);margin-left:6px">
          (${isUp ? '+' : ''}${UI.formatPrice(periodReturn.absReturn)} per share)
        </span>
      </span>
    `;
  }
}

/* ============================================================
   RENDER RETURNS TAB
   ============================================================ */
function renderReturnsTab(symbol) {
  const allReturns = ReturnsEngine.getAllReturns(symbol);

  /* --- Cards grid --- */
  const grid = document.getElementById('returnsGrid');
  if (grid) {
    grid.innerHTML = allReturns.map(r => {
      const isPos  = r.pctReturn >= 0;
      const cls    = isPos ? 'positive' : 'negative';
      const arrow  = isPos ? '▲' : '▼';
      /* Bar fill: cap at 100% visually */
      const fillPct = Math.min(Math.abs(r.pctReturn), 200) / 200 * 100;
      return `
        <div class="return-card ${cls}">
          <div class="return-period">${r.key}</div>
          <div class="return-pct ${cls}">${arrow} ${Math.abs(r.pctReturn).toFixed(1)}%</div>
          <div class="return-abs">${isPos ? '+' : ''}${UI.formatPrice(r.absReturn)}</div>
          <div class="return-bar-mini">
            <div class="return-bar-mini-fill ${cls}" style="width:${fillPct}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* --- Horizontal bars list --- */
  const barsList = document.getElementById('returnsBars');
  if (barsList) {
    /* Find max absolute return for relative bar sizing */
    const maxAbs = Math.max(...allReturns.map(r => Math.abs(r.pctReturn)));

    barsList.innerHTML = allReturns.map(r => {
      const isPos  = r.pctReturn >= 0;
      const color  = isPos ? 'var(--green)' : 'var(--red)';
      const pctTxt = (isPos ? '+' : '') + r.pctReturn.toFixed(2) + '%';
      const fillW  = (Math.abs(r.pctReturn) / Math.max(maxAbs, 0.01)) * 100;
      return `
        <div class="return-bar-row">
          <span class="return-bar-label">${r.key}</span>
          <div class="return-bar-track">
            <div class="fill" style="width:${fillW}%;background:${color}"></div>
          </div>
          <span class="return-bar-pct" style="color:${color}">${pctTxt}</span>
          <span class="return-bar-price">was ${UI.formatPrice(r.pastPrice)}</span>
        </div>
      `;
    }).join('');
  }
}

/* ============================================================
   RUN INVESTMENT SIMULATOR
   ============================================================ */
window.runSimulator = function(symbol) {
  const qtyEl    = document.getElementById('simQty');
  const periodEl = document.getElementById('simPeriod');
  const customEl = document.getElementById('simCustomPrice');
  const resEl    = document.getElementById('simResult');

  const qty      = parseInt(qtyEl?.value) || 0;
  const period   = periodEl?.value || '1Y';
  const custom   = parseFloat(customEl?.value) || null;

  if (!qty || qty <= 0) {
    UI.showToast('Please enter a valid number of shares', 'error');
    return;
  }

  let result;

  if (custom && custom > 0) {
    /* Custom price mode */
    const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!stock) return;
    const currentPrice = stock.price;
    const invested     = custom * qty;
    const currentValue = currentPrice * qty;
    const pnl          = currentValue - invested;
    const pnlPct       = (pnl / invested) * 100;
    result = {
      symbol,
      name:         stock.name,
      qty,
      periodLabel:  'Custom Price',
      pastPrice:    custom,
      currentPrice,
      invested,
      currentValue,
      pnl,
      pnlPct,
      cagr:         null,
      isGain:       pnl >= 0
    };
  } else {
    result = InvestmentSimulator.calculate(symbol, qty, period);
  }

  if (!result || !resEl) return;

  const isGain   = result.isGain;
  const gainIcon = isGain ? '🚀' : '📉';
  const gainCls  = isGain ? 'gain' : 'loss';
  const pnlSign  = isGain ? '+' : '';

  resEl.className = 'sim-result visible';
  resEl.innerHTML = `
    <!-- Big highlight row -->
    <div class="sim-big-result ${gainCls}" style="grid-column:1/-1">
      <div class="sim-big-icon">${gainIcon}</div>
      <div class="sim-big-text">
        <strong style="color:${isGain ? 'var(--green)' : 'var(--red)'}">
          ${pnlSign}${UI.formatPrice(result.pnl)}
        </strong>
        <span>
          If you bought <strong>${result.qty} shares</strong> of
          <strong>${result.symbol}</strong> ${result.periodLabel}
          at <strong>${UI.formatPrice(result.pastPrice)}</strong>,
          your investment would be
          <strong style="color:${isGain ? 'var(--green)' : 'var(--red)'}">
            ${pnlSign}${result.pnlPct.toFixed(2)}%
          </strong> today.
        </span>
      </div>
    </div>

    <!-- Detail cards -->
    <div class="sim-card">
      <div class="sim-card-label">Shares</div>
      <div class="sim-card-value">${result.qty}</div>
    </div>
    <div class="sim-card">
      <div class="sim-card-label">Buy Price</div>
      <div class="sim-card-value">${UI.formatPrice(result.pastPrice)}</div>
    </div>
    <div class="sim-card">
      <div class="sim-card-label">Current Price</div>
      <div class="sim-card-value">${UI.formatPrice(result.currentPrice)}</div>
    </div>
    <div class="sim-card">
      <div class="sim-card-label">Invested</div>
      <div class="sim-card-value">${UI.formatPrice(result.invested)}</div>
    </div>
    <div class="sim-card">
      <div class="sim-card-label">Current Value</div>
      <div class="sim-card-value ${isGain ? 'green' : 'red'}">${UI.formatPrice(result.currentValue)}</div>
    </div>
    <div class="sim-card">
      <div class="sim-card-label">Total P&L</div>
      <div class="sim-card-value ${isGain ? 'green' : 'red'}">${pnlSign}${UI.formatPrice(result.pnl)}</div>
    </div>
    <div class="sim-card">
      <div class="sim-card-label">Return %</div>
      <div class="sim-card-value ${isGain ? 'green' : 'red'}">${pnlSign}${result.pnlPct.toFixed(2)}%</div>
    </div>
    ${result.cagr !== null ? `
    <div class="sim-card">
      <div class="sim-card-label">CAGR</div>
      <div class="sim-card-value ${result.cagr >= 0 ? 'green' : 'red'}">${result.cagr >= 0 ? '+' : ''}${result.cagr.toFixed(1)}%</div>
    </div>` : ''}
  `;
};

/* ============================================================
   RENDER SIMULATOR SUMMARY TABLE (1-share per period)
   ============================================================ */
function renderSimSummaryTable(symbol) {
  const tbody = document.getElementById('simSummaryTable');
  if (!tbody) return;

  const allReturns = ReturnsEngine.getAllReturns(symbol);
  const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
  if (!stock) return;

  tbody.innerHTML = allReturns.map(r => {
    const isGain = r.pctReturn >= 0;
    const cls    = isGain ? 'text-green' : 'text-red';
    const sign   = isGain ? '+' : '';
    const years  = ReturnsEngine.PERIODS.find(p => p.key === r.key).days / 252;
    const cagr   = years > 0 ? ((Math.pow(r.currentPrice / r.pastPrice, 1 / years) - 1) * 100) : r.pctReturn;

    return `
      <tr style="border-bottom:1px solid var(--border-color)">
        <td style="padding:9px 12px;font-weight:700;color:var(--text-primary)">${r.label}</td>
        <td style="padding:9px 12px;text-align:right;color:var(--text-secondary)">${UI.formatPrice(r.pastPrice)}</td>
        <td style="padding:9px 12px;text-align:right;font-weight:700">${UI.formatPrice(r.currentPrice)}</td>
        <td style="padding:9px 12px;text-align:right">
          <span style="font-weight:700;color:${isGain ? 'var(--green)' : 'var(--red)'}">${sign}${UI.formatPrice(r.absReturn)}</span>
        </td>
        <td style="padding:9px 12px;text-align:right">
          <span class="change-badge ${isGain ? 'up' : 'down'}">${sign}${r.pctReturn.toFixed(2)}%</span>
        </td>
        <td style="padding:9px 12px;text-align:right;font-weight:700;color:${cagr >= 0 ? 'var(--green)' : 'var(--red)'};font-size:0.8rem">
          ${cagr >= 0 ? '+' : ''}${cagr.toFixed(1)}%
        </td>
      </tr>
    `;
  }).join('');
}

console.log('%c✅ Returns Engine & Simulator loaded!', 'color:#10b981;font-weight:bold');

/* ============================================================
   SECTOR DETAIL MODAL SYSTEM
   Click any sector card → shows all stocks in that sector
   with live price, P&L, market cap, gainers/losers counts
   ============================================================ */

/* Helper: format market cap in Cr / L Cr */
function formatMcapCr(cr) {
  if (!cr) return '—';
  if (cr >= 100000) return (cr / 100000).toFixed(2) + ' L Cr';
  if (cr >= 1000)   return (cr / 1000).toFixed(2) + ' K Cr';
  return cr.toLocaleString('en-IN') + ' Cr';
}

/* Open the sector detail modal */
window.openSectorModal = function(sectorName) {
  // Get all stocks in this sector
  const sectorStocks = ALL_STOCKS.filter(s => s.sector === sectorName);
  if (sectorStocks.length === 0) {
    UI.showToast(`No stocks found in ${sectorName} sector`, 'info');
    return;
  }

  // Recalculate live prices
  const liveStocks = sectorStocks.map(s => ({
    ...s,
    livePrice:  MarketFluctuator.stocks[s.symbol]?.price  || s.price,
    liveChange: MarketFluctuator.stocks[s.symbol]?.change || s.change
  }));

  // Sector stats
  const gainers  = liveStocks.filter(s => s.liveChange > 0).length;
  const losers   = liveStocks.filter(s => s.liveChange < 0).length;
  const neutral  = liveStocks.filter(s => s.liveChange === 0).length;
  const totalMcap = liveStocks.reduce((sum, s) => sum + (s.marketCapCr || 0), 0);

  // Sector icon from SECTORS array
  const sectorInfo = SECTORS.find(s => s.name.toLowerCase() === sectorName.toLowerCase());
  const icon  = sectorInfo ? sectorInfo.icon : '🏭';
  const sectorChange = liveStocks.reduce((sum, s) => sum + s.liveChange, 0) / liveStocks.length;
  const { text: sectorChangeText, cls: sectorCls } = UI.formatChange(sectorChange);

  // Sort by market cap desc, then price
  liveStocks.sort((a, b) => (b.marketCapCr || 0) - (a.marketCapCr || 0));

  // Build modal
  const modal = document.getElementById('sectorModal');
  if (!modal) return;

  document.getElementById('sectorModalTitle').innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
      <div style="width:52px;height:52px;background:linear-gradient(135deg,rgba(59,130,246,0.2),rgba(139,92,246,0.2));border:1px solid rgba(59,130,246,0.3);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.6rem;flex-shrink:0">${icon}</div>
      <div>
        <div style="font-size:1.3rem;font-weight:800">${sectorName} Sector</div>
        <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:2px">NSE Listed Stocks</div>
      </div>
      <span class="change-badge ${sectorCls}" style="margin-left:4px;font-size:0.85rem">${sectorChangeText} avg</span>
    </div>
  `;

  document.getElementById('sectorModalBody').innerHTML = `

    <!-- Sector Summary Cards -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-bottom:20px">
      <div style="background:var(--bg-glass);border:1px solid var(--border-color);border-radius:10px;padding:14px;text-align:center">
        <div style="font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Total Listed</div>
        <div style="font-size:1.6rem;font-weight:800;color:var(--accent-blue)">${liveStocks.length}</div>
        <div style="font-size:0.7rem;color:var(--text-muted)">stocks</div>
      </div>
      <div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:10px;padding:14px;text-align:center">
        <div style="font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Gainers 🚀</div>
        <div style="font-size:1.6rem;font-weight:800;color:var(--green)">${gainers}</div>
        <div style="font-size:0.7rem;color:var(--text-muted)">in green today</div>
      </div>
      <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);border-radius:10px;padding:14px;text-align:center">
        <div style="font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Losers 📉</div>
        <div style="font-size:1.6rem;font-weight:800;color:var(--red)">${losers}</div>
        <div style="font-size:0.7rem;color:var(--text-muted)">in red today</div>
      </div>
      <div style="background:linear-gradient(135deg,rgba(245,158,11,0.08),rgba(59,130,246,0.06));border:1px solid rgba(245,158,11,0.2);border-radius:10px;padding:14px;text-align:center">
        <div style="font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Sector Mcap</div>
        <div style="font-size:1.1rem;font-weight:800;color:var(--accent-gold)">${formatMcapCr(totalMcap)}</div>
        <div style="font-size:0.7rem;color:var(--text-muted)">combined</div>
      </div>
      <div style="background:var(--bg-glass);border:1px solid var(--border-color);border-radius:10px;padding:14px;text-align:center">
        <div style="font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Avg Change</div>
        <div style="font-size:1.3rem;font-weight:800;color:${sectorChange >= 0 ? 'var(--green)' : 'var(--red)'}">${sectorChangeText}</div>
        <div style="font-size:0.7rem;color:var(--text-muted)">today</div>
      </div>
    </div>

    <!-- Gainer/Loser bar -->
    <div style="margin-bottom:20px">
      <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-muted);margin-bottom:6px">
        <span>🟢 ${gainers} Gainers</span>
        <span>${neutral} Flat</span>
        <span>${losers} Losers 🔴</span>
      </div>
      <div style="height:8px;background:var(--border-color);border-radius:4px;overflow:hidden;display:flex">
        <div style="width:${(gainers/liveStocks.length*100).toFixed(1)}%;background:var(--green);transition:width 0.8s ease"></div>
        <div style="width:${(neutral/liveStocks.length*100).toFixed(1)}%;background:var(--text-muted)"></div>
        <div style="width:${(losers/liveStocks.length*100).toFixed(1)}%;background:var(--red)"></div>
      </div>
    </div>

    <!-- Stocks Table -->
    <div style="overflow-x:auto;border-radius:12px;border:1px solid var(--border-color)">
      <table style="width:100%;border-collapse:collapse;min-width:620px">
        <thead>
          <tr style="background:var(--bg-glass)">
            <th style="padding:11px 14px;text-align:left;font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid var(--border-color)">#</th>
            <th style="padding:11px 14px;text-align:left;font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid var(--border-color)">Stock</th>
            <th style="padding:11px 14px;text-align:right;font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid var(--border-color)">Price</th>
            <th style="padding:11px 14px;text-align:right;font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid var(--border-color)">Today's P&L</th>
            <th style="padding:11px 14px;text-align:right;font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid var(--border-color)">Mkt Cap</th>
            <th style="padding:11px 14px;text-align:center;font-size:0.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid var(--border-color)">Chart</th>
          </tr>
        </thead>
        <tbody>
          ${liveStocks.map((s, i) => {
            const { text: ct, cls } = UI.formatChange(s.liveChange);
            const todayPnl = (s.livePrice * Math.abs(s.liveChange) / 100).toFixed(2);
            const pnlSign  = s.liveChange >= 0 ? '+' : '-';
            return `
              <tr onclick="closeSectorModal();openChartModal('${s.symbol}')"
                style="cursor:pointer;border-bottom:1px solid var(--border-color);transition:background 0.15s">
                <td style="padding:11px 14px;font-size:0.78rem;color:var(--text-muted)">${i+1}</td>
                <td style="padding:11px 14px">
                  <div style="font-weight:700;font-size:0.88rem;color:var(--accent-blue)">${s.symbol}</div>
                  <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:1px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.name}</div>
                </td>
                <td style="padding:11px 14px;text-align:right;font-weight:700;font-size:0.9rem">
                  ${UI.formatPrice(s.livePrice)}
                </td>
                <td style="padding:11px 14px;text-align:right">
                  <span class="change-badge ${cls}" style="display:block;text-align:center;margin-bottom:3px">${ct}</span>
                  <div style="font-size:0.68rem;color:${s.liveChange >= 0 ? 'var(--green)' : 'var(--red)'};text-align:center">${pnlSign}₹${todayPnl}/sh</div>
                </td>
                <td style="padding:11px 14px;text-align:right">
                  <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary)">${formatMcapCr(s.marketCapCr)}</div>
                  <div style="font-size:0.68rem;color:var(--text-muted)">${s.mcap}</div>
                </td>
                <td style="padding:11px 14px;text-align:center">
                  <button onclick="event.stopPropagation();closeSectorModal();openChartModal('${s.symbol}')"
                    class="chart-btn">📈</button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
    <div style="margin-top:10px;text-align:center;font-size:0.72rem;color:var(--text-muted)">
      Click any row to view detailed chart & returns analysis
    </div>
  `;

  modal.classList.add('open');
};

window.closeSectorModal = function() {
  const modal = document.getElementById('sectorModal');
  if (modal) modal.classList.remove('open');
};

/* ── Also update renderSectors to make each card clickable ── */
const _origRenderSectors = typeof renderSectors === 'function' ? renderSectors : null;
window.renderSectors = function() {
  const container = document.getElementById('sectorsGrid');
  if (!container) return;

  // Compute live sector change from stocks
  SECTORS.forEach(sec => {
    const stocks = ALL_STOCKS.filter(s => s.sector === sec.name);
    if (stocks.length > 0) {
      sec.change = stocks.reduce((sum, s) => {
        const live = MarketFluctuator.stocks[s.symbol];
        return sum + (live ? live.change : s.change);
      }, 0) / stocks.length;
      sec.count = stocks.length;
    }
  });

  container.innerHTML = SECTORS.map(sec => {
    const { text: ct, cls } = UI.formatChange(sec.change);
    const count = ALL_STOCKS.filter(s => s.sector === sec.name).length;
    return `
      <div class="sector-card" onclick="openSectorModal('${sec.name}')" title="Click to explore ${sec.name} stocks">
        <div class="sector-icon">${sec.icon}</div>
        <div class="sector-name">${sec.name}</div>
        <div class="sector-change ${cls}">${ct}</div>
        <div style="font-size:0.65rem;color:var(--text-muted);margin-top:3px">${count} stocks →</div>
      </div>
    `;
  }).join('');
};

console.log('%c✅ Sector Modal Engine loaded!', 'color:#8b5cf6;font-weight:bold');
