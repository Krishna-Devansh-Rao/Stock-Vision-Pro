/* ============================================
   STOCKVISION PRO - Main JavaScript
   Stock Market Analysis Platform
   ============================================ */

/* ============================================
   CONFIG — No API key needed!
   Real data from NSE CSV files (2016 + 2026)
   Charts via Yahoo Finance (free, no key)
   ============================================ */
const CONFIG = {
  YAHOO_CHART: "https://query1.finance.yahoo.com/v8/finance/chart/"
};

/* ============================================
   MASSIVE STOCK DATABASE
   All major NSE/BSE listed stocks
   ============================================ */
const ALL_STOCKS = [
  { symbol:"RELIANCE", name:"Reliance Industries Ltd", sector:"Energy", exchange:"NSE", price:1407.8, change:-0.47, pe:28.5, mcap:"Large Cap", volume:18979554, marketCapCr:1920799 },
  { symbol:"RELIANCE", name:"Reliance Industries Ltd", sector:"Energy", exchange:"NSE", price:1407.8, change:-0.47, pe:28.5, mcap:"Large Cap", volume:18979554, marketCapCr:1920799 },
  { symbol:"HDFCBANK", name:"HDFC Bank Ltd", sector:"Banking", exchange:"NSE", price:744.15, change:-4.65, pe:22.1, mcap:"Large Cap", volume:72341738, marketCapCr:1402843 },
  { symbol:"BHARTIARTL", name:"Bharti Airtel Ltd", sector:"Telecom", exchange:"NSE", price:1795.9, change:-2.72, pe:85.2, mcap:"Large Cap", volume:6874051, marketCapCr:1127534 },
  { symbol:"SBIN", name:"State Bank of India", sector:"Banking", exchange:"NSE", price:1031.9, change:-2.47, pe:12.8, mcap:"Large Cap", volume:16039603, marketCapCr:1122535 },
  { symbol:"ICICIBANK", name:"ICICI Bank Ltd", sector:"Banking", exchange:"NSE", price:1222.7, change:-1.82, pe:18.4, mcap:"Large Cap", volume:17049534, marketCapCr:997094 },
  { symbol:"TCS", name:"Tata Consultancy Services", sector:"IT", exchange:"NSE", price:2383.8, change:-0.28, pe:31.2, mcap:"Large Cap", volume:3860515, marketCapCr:971891 },
  { symbol:"BAJFINANCE", name:"Bajaj Finance Ltd", sector:"Finance", exchange:"NSE", price:812.6, change:-2.16, pe:44.2, mcap:"Large Cap", volume:15835828, marketCapCr:641040 },
  { symbol:"LT", name:"Larsen & Toubro Ltd", sector:"Construction", exchange:"NSE", price:3342.4, change:-2.69, pe:35.6, mcap:"Large Cap", volume:5645839, marketCapCr:602587 },
  { symbol:"INFY", name:"Infosys Ltd", sector:"IT", exchange:"NSE", price:1256.8, change:0.07, pe:26.8, mcap:"Large Cap", volume:12420293, marketCapCr:548672 },
  { symbol:"LICI", name:"Life Insurance Corp India", sector:"Insurance", exchange:"NSE", price:740.0, change:-4.73, pe:18.4, mcap:"Large Cap", volume:1315501, marketCapCr:552362 },
  { symbol:"HINDUNILVR", name:"Hindustan Unilever Ltd", sector:"FMCG", exchange:"NSE", price:2052.2, change:-1.46, pe:65.4, mcap:"Large Cap", volume:2599535, marketCapCr:543813 },
  { symbol:"MARUTI", name:"Maruti Suzuki India Ltd", sector:"Auto", exchange:"NSE", price:12355.0, change:-1.95, pe:27.3, mcap:"Large Cap", volume:517985, marketCapCr:470881 },
  { symbol:"M&M", name:"Mahindra & Mahindra", sector:"Auto", exchange:"NSE", price:2955.8, change:-3.6, pe:32.4, mcap:"Large Cap", volume:3978740, marketCapCr:424392 },
  { symbol:"KOTAK", name:"Kotak Mahindra Bank", sector:"Banking", exchange:"NSE", price:356.55, change:-2.78, pe:24.6, mcap:"Large Cap", volume:16980244, marketCapCr:419053 },
  { symbol:"AXISBANK", name:"Axis Bank Ltd", sector:"Banking", exchange:"NSE", price:1170.6, change:-2.77, pe:16.3, mcap:"Large Cap", volume:6697446, marketCapCr:424787 },
  { symbol:"SUNPHARMA", name:"Sun Pharmaceutical", sector:"Pharma", exchange:"NSE", price:1758.4, change:-1.05, pe:38.4, mcap:"Large Cap", volume:2783613, marketCapCr:413741 },
  { symbol:"ITC", name:"ITC Ltd", sector:"FMCG", exchange:"NSE", price:290.45, change:-3.17, pe:26.4, mcap:"Large Cap", volume:31788160, marketCapCr:409691 },
  { symbol:"HCLTECH", name:"HCL Technologies Ltd", sector:"IT", exchange:"NSE", price:1358.6, change:1.87, pe:23.7, mcap:"Large Cap", volume:5166409, marketCapCr:389818 },
  { symbol:"ULTRACEMCO", name:"UltraTech Cement", sector:"Cement", exchange:"NSE", price:10362.0, change:-5.23, pe:42.3, mcap:"Large Cap", volume:644386, marketCapCr:376187 },
  { symbol:"TITAN", name:"Titan Company Ltd", sector:"Consumer", exchange:"NSE", price:3853.1, change:-6.17, pe:78.5, mcap:"Large Cap", volume:1533645, marketCapCr:376102 },
  { symbol:"ADANIPORTS", name:"Adani Ports & SEZ", sector:"Infrastructure", exchange:"NSE", price:1303.6, change:-4.53, pe:32.6, mcap:"Large Cap", volume:3361416, marketCapCr:348243 },
  { symbol:"NTPC", name:"NTPC Ltd", sector:"Power", exchange:"NSE", price:372.4, change:-2.24, pe:14.2, mcap:"Large Cap", volume:13148432, marketCapCr:361637 },
  { symbol:"ONGC", name:"Oil & Natural Gas Corp", sector:"Energy", exchange:"NSE", price:265.45, change:0.02, pe:8.9, mcap:"Large Cap", volume:23991581, marketCapCr:350549 },
  { symbol:"BAJAJFINSV", name:"Bajaj Finserv Ltd", sector:"Finance", exchange:"NSE", price:1675.5, change:-2.03, pe:28.7, mcap:"Large Cap", volume:2207925, marketCapCr:328910 },
  { symbol:"BEL", name:"Bharat Electronics Ltd", sector:"Defense", exchange:"NSE", price:405.5, change:-4.83, pe:46.7, mcap:"Large Cap", volume:18894757, marketCapCr:322471 },
  { symbol:"JSWSTEEL", name:"JSW Steel Ltd", sector:"Metal", exchange:"NSE", price:1109.6, change:-5.13, pe:18.9, mcap:"Large Cap", volume:2532216, marketCapCr:302209 },
  { symbol:"HAL", name:"Hindustan Aeronautics Ltd", sector:"Defense", exchange:"NSE", price:3634.6, change:-3.91, pe:36.5, mcap:"Large Cap", volume:1797092, marketCapCr:278879 },
  { symbol:"POWERGRID", name:"Power Grid Corp", sector:"Power", exchange:"NSE", price:302.1, change:1.51, pe:16.7, mcap:"Large Cap", volume:23771660, marketCapCr:278042 },
  { symbol:"ADANIGREEN", name:"Adani Green Energy Ltd", sector:"Renewable Energy", exchange:"NSE", price:816.45, change:-5.4, pe:68.5, mcap:"Large Cap", volume:2746629, marketCapCr:159488 },
  { symbol:"BAJAJ-AUTO", name:"Bajaj Auto Ltd", sector:"Auto", exchange:"NSE", price:8776.0, change:-3.04, pe:32.7, mcap:"Large Cap", volume:375189, marketCapCr:273868 },
  { symbol:"ETERNAL", name:"Eternal Ltd (fmr. Zomato)", sector:"Food Tech", exchange:"NSE", price:226.96, change:-2.29, pe:218.4, mcap:"Large Cap", volume:71121843, marketCapCr:260029 },
  { symbol:"VEDL", name:"Vedanta Ltd", sector:"Metal", exchange:"NSE", price:645.75, change:-3.93, pe:14.8, mcap:"Large Cap", volume:21999651, marketCapCr:266864 },
  { symbol:"COALINDIA", name:"Coal India Ltd", sector:"Mining", exchange:"NSE", price:455.25, change:-2.76, pe:8.7, mcap:"Large Cap", volume:10163783, marketCapCr:261022 },
  { symbol:"ADANIENT", name:"Adani Enterprises Ltd", sector:"Conglomerate", exchange:"NSE", price:1833.0, change:-4.88, pe:65.8, mcap:"Large Cap", volume:2370668, marketCapCr:249395 },
  { symbol:"DMART", name:"Avenue Supermarts (DMart)", sector:"Retail", exchange:"NSE", price:3655.6, change:-3.06, pe:112.6, mcap:"Large Cap", volume:296381, marketCapCr:251599 },
  { symbol:"TATASTEEL", name:"Tata Steel Ltd", sector:"Metal", exchange:"NSE", price:187.17, change:-4.88, pe:12.4, mcap:"Large Cap", volume:44393392, marketCapCr:260107 },
  { symbol:"IOC", name:"Indian Oil Corporation", sector:"Energy", exchange:"NSE", price:138.11, change:-4.49, pe:7.8, mcap:"Large Cap", volume:21048472, marketCapCr:245413 },
  { symbol:"NESTLEIND", name:"Nestle India Ltd", sector:"FMCG", exchange:"NSE", price:1166.8, change:-2.25, pe:84.2, mcap:"Large Cap", volume:944890, marketCapCr:249485 },
  { symbol:"HINDZINC", name:"Hindustan Zinc Ltd", sector:"Metal", exchange:"NSE", price:487.65, change:-5.26, pe:16.4, mcap:"Large Cap", volume:9206594, marketCapCr:249019 },
  { symbol:"ASIANPAINT", name:"Asian Paints Ltd", sector:"Paints", exchange:"NSE", price:2121.3, change:-3.38, pe:58.9, mcap:"Large Cap", volume:978398, marketCapCr:232903 },
  { symbol:"WIPRO", name:"Wipro Ltd", sector:"IT", exchange:"NSE", price:187.54, change:-1.76, pe:20.3, mcap:"Large Cap", volume:12014988, marketCapCr:220074 },
  { symbol:"EICHERMOT", name:"Eicher Motors Ltd", sector:"Auto", exchange:"NSE", price:6681.5, change:-3.29, pe:38.5, mcap:"Large Cap", volume:380052, marketCapCr:217698 },
  { symbol:"SBILIFE", name:"SBI Life Insurance", sector:"Insurance", exchange:"NSE", price:1832.3, change:-3.41, pe:78.5, mcap:"Large Cap", volume:1338816, marketCapCr:208589 },
  { symbol:"SHRIRAMFIN", name:"Shriram Finance Ltd", sector:"Finance", exchange:"NSE", price:877.7, change:-6.49, pe:18.6, mcap:"Large Cap", volume:10556865, marketCapCr:199293 },
  { symbol:"HINDALCO", name:"Hindalco Industries", sector:"Metal", exchange:"NSE", price:840.25, change:-3.89, pe:16.4, mcap:"Large Cap", volume:11372786, marketCapCr:210273 },
  { symbol:"GRASIM", name:"Grasim Industries", sector:"Cement", exchange:"NSE", price:2531.1, change:-3.26, pe:24.5, mcap:"Large Cap", volume:1936926, marketCapCr:192778 },
  { symbol:"INDIGO", name:"InterGlobe Aviation Ltd", sector:"Aviation", exchange:"NSE", price:3945.3, change:-4.91, pe:22.8, mcap:"Large Cap", volume:2919605, marketCapCr:187674 },
  { symbol:"TVSMOTOR", name:"TVS Motor Company Ltd", sector:"Auto", exchange:"NSE", price:3412.5, change:-1.44, pe:56.8, mcap:"Large Cap", volume:748254, marketCapCr:181303 },
  { symbol:"TATAMOTORS", name:"Tata Motors Ltd", sector:"Auto", exchange:"NSE", price:394.45, change:-6.01, pe:15.8, mcap:"Large Cap", volume:19403533, marketCapCr:180305 },
  { symbol:"HYUNDAI", name:"Hyundai Motor India Ltd", sector:"Auto", exchange:"NSE", price:1867.5, change:-4.28, pe:24.5, mcap:"Large Cap", volume:371722, marketCapCr:186348 },
  { symbol:"JIOFIN", name:"Jio Financial Services Ltd", sector:"Finance", exchange:"NSE", price:226.1, change:-5.52, pe:48.6, mcap:"Large Cap", volume:21172068, marketCapCr:164292 },
  { symbol:"DIVISLAB", name:"Divi's Laboratories", sector:"Pharma", exchange:"NSE", price:6013.5, change:-1.42, pe:52.3, mcap:"Large Cap", volume:227221, marketCapCr:167006 },
  { symbol:"BPCL", name:"Bharat Petroleum Corp", sector:"Energy", exchange:"NSE", price:271.3, change:-5.73, pe:9.8, mcap:"Large Cap", volume:14357554, marketCapCr:158919 },
  { symbol:"DLF", name:"DLF Ltd", sector:"Real Estate", exchange:"NSE", price:514.75, change:-4.81, pe:62.8, mcap:"Large Cap", volume:4277345, marketCapCr:155772 },
  { symbol:"BANKBARODA", name:"Bank of Baroda", sector:"Banking", exchange:"NSE", price:265.9, change:-5.02, pe:8.4, mcap:"Large Cap", volume:9657083, marketCapCr:159821 },
  { symbol:"VARUNBEV", name:"Varun Beverages Ltd", sector:"Beverages", exchange:"NSE", price:382.2, change:-4.8, pe:62.4, mcap:"Large Cap", volume:10454299, marketCapCr:154916 },
  { symbol:"LTIM", name:"LTIMindtree Ltd", sector:"IT", exchange:"NSE", price:4105.6, change:-4.49, pe:42.6, mcap:"Large Cap", volume:569410, marketCapCr:144968 },
  { symbol:"HDFCLIFE", name:"HDFC Life Insurance", sector:"Insurance", exchange:"NSE", price:592.1, change:-5.06, pe:94.2, mcap:"Large Cap", volume:4223148, marketCapCr:157215 },
  { symbol:"PIDILITIND", name:"Pidilite Industries", sector:"Chemicals", exchange:"NSE", price:1314.9, change:-1.97, pe:88.4, mcap:"Large Cap", volume:800316, marketCapCr:149085 },
  { symbol:"TATACAPITAL", name:"Tata Capital Ltd", sector:"Finance", exchange:"NSE", price:312.15, change:-1.56, pe:28.4, mcap:"Large Cap", volume:1680349, marketCapCr:146448 },
  { symbol:"TECHM", name:"Tech Mahindra Ltd", sector:"IT", exchange:"NSE", price:1384.0, change:-0.06, pe:35.4, mcap:"Large Cap", volume:3647386, marketCapCr:142736 },
  { symbol:"TRENT", name:"Trent Ltd", sector:"Retail", exchange:"NSE", price:3356.7, change:-5.7, pe:158.4, mcap:"Large Cap", volume:959711, marketCapCr:145430 },
  { symbol:"BRITANNIA", name:"Britannia Industries Ltd", sector:"FMCG", exchange:"NSE", price:5490.0, change:-2.29, pe:54.6, mcap:"Large Cap", volume:316325, marketCapCr:146894 },
  { symbol:"IRFC", name:"Indian Railway Finance Corp", sector:"Finance", exchange:"NSE", price:89.45, change:-5.53, pe:28.6, mcap:"Large Cap", volume:17225370, marketCapCr:146210 },
  { symbol:"CHOLAFIN", name:"Cholamandalam Investment", sector:"Finance", exchange:"NSE", price:1380.9, change:-4.14, pe:42.6, mcap:"Large Cap", volume:2569553, marketCapCr:140890 },
  { symbol:"UNIONBANK", name:"Union Bank of India", sector:"Banking", exchange:"NSE", price:168.58, change:-5.09, pe:8.2, mcap:"Large Cap", volume:11258618, marketCapCr:148077 },
  { symbol:"TORNTPHARM", name:"Torrent Pharmaceuticals", sector:"Pharma", exchange:"NSE", price:4213.9, change:-1.32, pe:42.4, mcap:"Large Cap", volume:320186, marketCapCr:143558 },
  { symbol:"PNB", name:"Punjab National Bank", sector:"Banking", exchange:"NSE", price:105.55, change:-5.36, pe:12.4, mcap:"Large Cap", volume:24198613, marketCapCr:148937 },
  { symbol:"TATAMOTDVR", name:"Tata Motors Passenger Vehicles", sector:"Auto", exchange:"NSE", price:305.25, change:-2.82, pe:14.8, mcap:"Large Cap", volume:10816349, marketCapCr:143489 },
  { symbol:"MUTHOOTFIN", name:"Muthoot Finance", sector:"Finance", exchange:"NSE", price:3115.6, change:-6.04, pe:18.6, mcap:"Large Cap", volume:2186867, marketCapCr:138908 },
  { symbol:"MOTHERSON", name:"Samvardhana Motherson Intl", sector:"Auto Parts", exchange:"NSE", price:106.59, change:-4.48, pe:38.5, mcap:"Large Cap", volume:21402616, marketCapCr:136596 },
  { symbol:"PFC", name:"Power Finance Corporation", sector:"Finance", exchange:"NSE", price:398.0, change:-3.6, pe:8.6, mcap:"Large Cap", volume:10830695, marketCapCr:135337 },
  { symbol:"CANBK", name:"Canara Bank", sector:"Banking", exchange:"NSE", price:129.56, change:-5.04, pe:7.8, mcap:"Large Cap", volume:22467854, marketCapCr:139824 },
  { symbol:"AMBUJACEM", name:"Ambuja Cements", sector:"Cement", exchange:"NSE", price:395.35, change:-5.99, pe:38.7, mcap:"Large Cap", volume:4333904, marketCapCr:126557 },
  { symbol:"CUMMINSIND", name:"Cummins India Ltd", sector:"Engineering", exchange:"NSE", price:4518.0, change:-2.11, pe:52.4, mcap:"Large Cap", volume:972428, marketCapCr:131224 },
  { symbol:"BAJAJHFL", name:"Bajaj Holdings & Investment", sector:"Finance", exchange:"NSE", price:78.51, change:-3.61, pe:18.6, mcap:"Large Cap", volume:10089337, marketCapCr:73383 },
  { symbol:"INDUSTOWER", name:"Indus Towers Ltd", sector:"Telecom", exchange:"NSE", price:413.6, change:-4.82, pe:18.6, mcap:"Large Cap", volume:4793426, marketCapCr:125141 },
  { symbol:"GODREJCP", name:"Godrej Consumer Products", sector:"FMCG", exchange:"NSE", price:1002.4, change:-1.49, pe:52.6, mcap:"Large Cap", volume:1771476, marketCapCr:123393 },
  { symbol:"INDIANB", name:"Indian Bank", sector:"Banking", exchange:"NSE", price:838.2, change:-4.6, pe:12.6, mcap:"Large Cap", volume:1677108, marketCapCr:127517 },
  { symbol:"ADANIENSO", name:"Adani Energy Solutions Ltd", sector:"Power", exchange:"NSE", price:998.10, change:-0.9, pe:48.4, mcap:"Large Cap", volume:2534563, marketCapCr:119900 },
  { symbol:"ABB", name:"ABB India Ltd", sector:"Engineering", exchange:"NSE", price:6041.5, change:-4.06, pe:68.4, mcap:"Large Cap", volume:274731, marketCapCr:126870 },
  { symbol:"JINDALSTEL", name:"Jindal Steel & Power", sector:"Metal", exchange:"NSE", price:1106.2, change:-6.77, pe:14.8, mcap:"Large Cap", volume:1880244, marketCapCr:124155 },
  { symbol:"HDFCAMC", name:"HDFC Asset Management Co", sector:"Finance", exchange:"NSE", price:2254.6, change:-5.5, pe:42.8, mcap:"Large Cap", volume:1483046, marketCapCr:116316 },
  { symbol:"IDBI", name:"IDBI Bank Ltd", sector:"Banking", exchange:"NSE", price:67.39, change:-7.77, pe:18.4, mcap:"Large Cap", volume:36421794, marketCapCr:121319 },
  { symbol:"ASHOKLEY", name:"Ashok Leyland Ltd", sector:"Auto", exchange:"NSE", price:161.98, change:-4.09, pe:22.6, mcap:"Large Cap", volume:23531787, marketCapCr:122675 },
  { symbol:"TATAPOWER", name:"Tata Power Company", sector:"Power", exchange:"NSE", price:386.95, change:-3.84, pe:48.6, mcap:"Large Cap", volume:15173788, marketCapCr:120784 },
  { symbol:"SOLARIND", name:"Solar Industries India Ltd", sector:"Chemicals", exchange:"NSE", price:13296.00, change:-0.55, pe:72.4, mcap:"Large Cap", volume:113458, marketCapCr:120316 },
  { symbol:"POLYCAB", name:"Polycab India Ltd", sector:"Cables", exchange:"NSE", price:6795.0, change:-5.24, pe:48.6, mcap:"Large Cap", volume:652615, marketCapCr:118459 },
  { symbol:"TATACONSUM", name:"Tata Consumer Products", sector:"FMCG", exchange:"NSE", price:1023.6, change:-2.53, pe:72.4, mcap:"Large Cap", volume:2006447, marketCapCr:114411 },
  { symbol:"SIEMENS", name:"Siemens Ltd", sector:"Engineering", exchange:"NSE", price:2988.3, change:-4.51, pe:72.4, mcap:"Large Cap", volume:524215, marketCapCr:114179 },
  { symbol:"HEROMOTOCO", name:"Hero MotoCorp Ltd", sector:"Auto", exchange:"NSE", price:5065.0, change:-3.99, pe:22.6, mcap:"Large Cap", volume:340775, marketCapCr:109345 },
  { symbol:"LODHA", name:"Lodha Developers Ltd", sector:"Real Estate", exchange:"NSE", price:727.9, change:-8.66, pe:28.4, mcap:"Large Cap", volume:4129352, marketCapCr:106976 },
  { symbol:"APOLLOHOSP", name:"Apollo Hospitals Enterprise", sector:"Healthcare", exchange:"NSE", price:7145.0, change:-2.98, pe:95.6, mcap:"Large Cap", volume:464969, marketCapCr:109499 },
  { symbol:"GAIL", name:"GAIL India Ltd", sector:"Energy", exchange:"NSE", price:135.4, change:-5.23, pe:14.8, mcap:"Large Cap", volume:16552069, marketCapCr:110771 },
  { symbol:"CGPOWER", name:"CG Power & Industrial Sol", sector:"Engineering", exchange:"NSE", price:664.1, change:-2.57, pe:68.5, mcap:"Large Cap", volume:3640981, marketCapCr:112153 },
  { symbol:"CIPLA", name:"Cipla Ltd", sector:"Pharma", exchange:"NSE", price:1221.8, change:-2.75, pe:28.4, mcap:"Large Cap", volume:1295463, marketCapCr:108330 },
  { symbol:"DRREDDY", name:"Dr. Reddy's Laboratories", sector:"Pharma", exchange:"NSE", price:1253.3, change:-3.51, pe:22.8, mcap:"Large Cap", volume:2112613, marketCapCr:106866 },
  { symbol:"AIAENG", name:"AIA Engineering", sector:"Engineering", exchange:"NSE", price:3315.9, change:-2.75, pe:42.6, mcap:"Large Cap", volume:76579, marketCapCr:36852 },
  { symbol:"ALKEM", name:"Alkem Laboratories", sector:"Pharma", exchange:"NSE", price:5144.5, change:-2.15, pe:32.5, mcap:"Large Cap", volume:110544, marketCapCr:64469 },
  { symbol:"APLAPOLLO", name:"APL Apollo Tubes", sector:"Metal", exchange:"NSE", price:1893.9, change:-4.01, pe:48.5, mcap:"Large Cap", volume:512633, marketCapCr:60733 },
  { symbol:"ASTRAL", name:"Astral Ltd", sector:"Pipes", exchange:"NSE", price:1556.3, change:-4.63, pe:72.3, mcap:"Large Cap", volume:524399, marketCapCr:43967 },
  { symbol:"ATUL", name:"Atul Ltd", sector:"Chemicals", exchange:"NSE", price:6102.5, change:-2.28, pe:28.4, mcap:"Mid Cap", volume:30831, marketCapCr:19376 },
  { symbol:"AUBANK", name:"AU Small Finance Bank", sector:"Banking", exchange:"NSE", price:849.55, change:-5.76, pe:32.6, mcap:"Large Cap", volume:3406015, marketCapCr:76908 },
  { symbol:"BALKRISIND", name:"Balkrishna Industries", sector:"Auto Parts", exchange:"NSE", price:2040.2, change:-3.08, pe:42.8, mcap:"Large Cap", volume:106792, marketCapCr:48229 },
  { symbol:"BANDHANBNK", name:"Bandhan Bank Ltd", sector:"Banking", exchange:"NSE", price:148.34, change:-6.37, pe:18.6, mcap:"Large Cap", volume:16048372, marketCapCr:27604 },
  { symbol:"BATAINDIA", name:"Bata India Ltd", sector:"Consumer", exchange:"NSE", price:625.75, change:-5.66, pe:52.4, mcap:"Mid Cap", volume:303782, marketCapCr:10435 },
  { symbol:"BERGEPAINT", name:"Berger Paints India", sector:"Paints", exchange:"NSE", price:405.45, change:-2.7, pe:64.5, mcap:"Large Cap", volume:356953, marketCapCr:53102 },
  { symbol:"BHARATFORG", name:"Bharat Forge Ltd", sector:"Auto Parts", exchange:"NSE", price:1648.6, change:-3.68, pe:58.4, mcap:"Large Cap", volume:1394239, marketCapCr:85100 },
  { symbol:"BIOCON", name:"Biocon Ltd", sector:"Pharma", exchange:"NSE", price:367.15, change:-3.62, pe:34.6, mcap:"Large Cap", volume:3017643, marketCapCr:62235 },
  { symbol:"BOSCHLTD", name:"Bosch Ltd", sector:"Auto Parts", exchange:"NSE", price:29135.0, change:-4.13, pe:72.4, mcap:"Large Cap", volume:25264, marketCapCr:103862 },
  { symbol:"BSOFT", name:"BIRLASOFT Ltd", sector:"IT", exchange:"NSE", price:339.2, change:-5.26, pe:28.7, mcap:"Mid Cap", volume:1086249, marketCapCr:10553 },
  { symbol:"CAMS", name:"Computer Age Mgmt Services", sector:"Finance", exchange:"NSE", price:622.45, change:-2.85, pe:54.6, mcap:"Mid Cap", volume:1805078, marketCapCr:17837 },
  { symbol:"CANFINHOME", name:"Can Fin Homes", sector:"Finance", exchange:"NSE", price:821.05, change:0.09, pe:16.8, mcap:"Mid Cap", volume:146080, marketCapCr:11793 },
  { symbol:"CASTROLIND", name:"Castrol India Ltd", sector:"Energy", exchange:"NSE", price:177.29, change:-5.36, pe:22.6, mcap:"Mid Cap", volume:3759032, marketCapCr:18570 },
  { symbol:"CESC", name:"CESC Ltd", sector:"Power", exchange:"NSE", price:148.7, change:-2.65, pe:12.4, mcap:"Large Cap", volume:1512973, marketCapCr:20603 },
  { symbol:"COLPAL", name:"Colgate-Palmolive India", sector:"FMCG", exchange:"NSE", price:1849.2, change:-2.47, pe:58.7, mcap:"Large Cap", volume:336417, marketCapCr:59780 },
  { symbol:"CONCOR", name:"Container Corp India", sector:"Logistics", exchange:"NSE", price:423.75, change:-5.26, pe:36.5, mcap:"Large Cap", volume:2538797, marketCapCr:38309 },
  { symbol:"COROMANDEL", name:"Coromandel International", sector:"Fertilizer", exchange:"NSE", price:1846.5, change:-3.38, pe:22.8, mcap:"Large Cap", volume:347151, marketCapCr:67106 },
  { symbol:"CROMPTON", name:"Crompton Greaves Consumer", sector:"Consumer Electricals", exchange:"NSE", price:233.2, change:-4.09, pe:42.6, mcap:"Mid Cap", volume:2243916, marketCapCr:17091 },
  { symbol:"DABUR", name:"Dabur India Ltd", sector:"FMCG", exchange:"NSE", price:417.35, change:-3.1, pe:52.6, mcap:"Large Cap", volume:3382496, marketCapCr:90405 },
  { symbol:"DEEPAKNTR", name:"Deepak Nitrite Ltd", sector:"Chemicals", exchange:"NSE", price:1317.5, change:-5.24, pe:42.5, mcap:"Large Cap", volume:195886, marketCapCr:21877 },
  { symbol:"DIXON", name:"Dixon Technologies", sector:"Electronics", exchange:"NSE", price:9894.0, change:-4.33, pe:98.4, mcap:"Large Cap", volume:685766, marketCapCr:67191 },
  { symbol:"EMAMILTD", name:"Emami Ltd", sector:"FMCG", exchange:"NSE", price:401.7, change:-0.26, pe:34.5, mcap:"Large Cap", volume:2160233, marketCapCr:20935 },
  { symbol:"ESCORTS", name:"Escorts Kubota Ltd", sector:"Agriculture", exchange:"NSE", price:2871.6, change:-6.14, pe:38.6, mcap:"Large Cap", volume:172724, marketCapCr:38238 },
  { symbol:"EXIDEIND", name:"Exide Industries", sector:"Auto Parts", exchange:"NSE", price:290.75, change:-3.93, pe:32.4, mcap:"Large Cap", volume:1794922, marketCapCr:28598 },
  { symbol:"FEDERALBNK", name:"Federal Bank Ltd", sector:"Banking", exchange:"NSE", price:254.35, change:-4.77, pe:12.4, mcap:"Large Cap", volume:13966492, marketCapCr:72066 },
  { symbol:"GLAXO", name:"GSK Pharma India", sector:"Pharma", exchange:"NSE", price:2279.2, change:-4.43, pe:28.4, mcap:"Large Cap", volume:50972, marketCapCr:43993 },
  { symbol:"GLENMARK", name:"Glenmark Pharma", sector:"Pharma", exchange:"NSE", price:2089.0, change:-4.18, pe:38.4, mcap:"Large Cap", volume:408786, marketCapCr:57659 },
  { symbol:"GMRINFRA", name:"GMR Airports Infra", sector:"Infrastructure", exchange:"NSE", price:84.77, change:-6.39, pe:68.5, mcap:"Large Cap", volume:10647285, marketCapCr:105326 },
  { symbol:"GODREJPROP", name:"Godrej Properties", sector:"Real Estate", exchange:"NSE", price:1497.2, change:-3.38, pe:82.4, mcap:"Large Cap", volume:1991822, marketCapCr:54991 },
  { symbol:"GRANULES", name:"Granules India Ltd", sector:"Pharma", exchange:"NSE", price:580.15, change:-1.83, pe:22.8, mcap:"Mid Cap", volume:609667, marketCapCr:14537 },
  { symbol:"HAPPYMNDS", name:"Happiest Minds Tech", sector:"IT", exchange:"NSE", price:377.05, change:2.56, pe:38.6, mcap:"Small Cap", volume:2345678, marketCapCr:11560 },
  { symbol:"HAVELLS", name:"Havells India Ltd", sector:"Consumer Electricals", exchange:"NSE", price:1231.0, change:-3.92, pe:72.4, mcap:"Large Cap", volume:835568, marketCapCr:88625 },
  { symbol:"HFCL", name:"HFCL Ltd", sector:"Telecom", exchange:"NSE", price:66.49, change:-6.56, pe:28.6, mcap:"Mid Cap", volume:16207486, marketCapCr:10915 },
  { symbol:"HINDPETRO", name:"Hindustan Petroleum", sector:"Energy", exchange:"NSE", price:319.15, change:-5.1, pe:8.6, mcap:"Large Cap", volume:13182560, marketCapCr:91688 },
  { symbol:"IDFCFIRSTB", name:"IDFC First Bank", sector:"Banking", exchange:"NSE", price:60.24, change:-4.31, pe:28.4, mcap:"Large Cap", volume:40208242, marketCapCr:71776 },
  { symbol:"IEX", name:"Indian Energy Exchange", sector:"Finance", exchange:"NSE", price:115.38, change:-4.27, pe:42.6, mcap:"Mid Cap", volume:7773470, marketCapCr:11184 },
  { symbol:"IGL", name:"Indraprastha Gas Ltd", sector:"Energy", exchange:"NSE", price:147.98, change:-5.52, pe:24.8, mcap:"Large Cap", volume:1791088, marketCapCr:23548 },
  { symbol:"INTELLECT", name:"Intellect Design Arena", sector:"IT", exchange:"NSE", price:636.8, change:-2.11, pe:34.5, mcap:"Mid Cap", volume:346023, marketCapCr:9811 },
  { symbol:"IPCALAB", name:"IPCA Laboratories", sector:"Pharma", exchange:"NSE", price:1529.9, change:-0.97, pe:28.4, mcap:"Large Cap", volume:178461, marketCapCr:36782 },
  { symbol:"IRB", name:"IRB Infrastructure", sector:"Infrastructure", exchange:"NSE", price:40.24, change:-3.06, pe:38.6, mcap:"Large Cap", volume:9897363, marketCapCr:24567 },
  { symbol:"IRCTC", name:"Indian Railway Catering", sector:"Tourism", exchange:"NSE", price:510.3, change:-2.4, pe:58.4, mcap:"Large Cap", volume:2589941, marketCapCr:51624 },
  { symbol:"ISEC", name:"ICICI Securities", sector:"Finance", exchange:"NSE", price:678.90, change:1.34, pe:18.6, mcap:"Mid Cap", volume:1234567, marketCapCr:21890 },
  { symbol:"JUBLFOOD", name:"Jubilant FoodWorks", sector:"Food", exchange:"NSE", price:438.05, change:-2.99, pe:68.4, mcap:"Large Cap", volume:960419, marketCapCr:35130 },
  { symbol:"JSWENERGY", name:"JSW Energy Ltd", sector:"Power", exchange:"NSE", price:482.7, change:-4.8, pe:28.6, mcap:"Large Cap", volume:3486905, marketCapCr:86331 },
  { symbol:"KAJARIACER", name:"Kajaria Ceramics", sector:"Building Materials", exchange:"NSE", price:890.85, change:-6.36, pe:42.8, mcap:"Mid Cap", volume:465318, marketCapCr:15828 },
  { symbol:"KANSAINER", name:"Kansai Nerolac Paints", sector:"Paints", exchange:"NSE", price:159.07, change:-4.62, pe:48.6, mcap:"Mid Cap", volume:414532, marketCapCr:16065 },
  { symbol:"KAYNES", name:"Kaynes Technology India", sector:"Electronics", exchange:"NSE", price:3409.7, change:-5.83, pe:88.4, mcap:"Large Cap", volume:1495670, marketCapCr:25948 },
  { symbol:"KPITTECH", name:"KPIT Technologies", sector:"IT", exchange:"NSE", price:659.3, change:-0.25, pe:64.5, mcap:"Large Cap", volume:2233577, marketCapCr:22902 },
  { symbol:"LICHSGFIN", name:"LIC Housing Finance", sector:"Finance", exchange:"NSE", price:460.7, change:-5.24, pe:12.8, mcap:"Large Cap", volume:3943606, marketCapCr:28854 },
  { symbol:"LINDEINDIA", name:"Linde India Ltd", sector:"Chemicals", exchange:"NSE", price:6765.0, change:-3.56, pe:78.6, mcap:"Large Cap", volume:71879, marketCapCr:57942 },
  { symbol:"LUPIN", name:"Lupin Ltd", sector:"Pharma", exchange:"NSE", price:2296.7, change:-1.11, pe:36.5, mcap:"Large Cap", volume:1092156, marketCapCr:101382 },
  { symbol:"M&MFIN", name:"Mahindra Finance", sector:"Finance", exchange:"NSE", price:2274.75, change:-0.1, pe:22.6, mcap:"Large Cap", volume:367, marketCapCr:52006 },
  { symbol:"MANAPPURAM", name:"Manappuram Finance", sector:"Finance", exchange:"NSE", price:252.3, change:-2.68, pe:8.4, mcap:"Large Cap", volume:7400338, marketCapCr:25943 },
  { symbol:"MARICO", name:"Marico Ltd", sector:"FMCG", exchange:"NSE", price:725.3, change:-2.55, pe:52.6, mcap:"Large Cap", volume:1774602, marketCapCr:102315 },
  { symbol:"MAXHEALTH", name:"Max Healthcare", sector:"Healthcare", exchange:"NSE", price:956.9, change:-0.82, pe:78.5, mcap:"Large Cap", volume:3063874, marketCapCr:105828 },
  { symbol:"MCX", name:"Multi Commodity Exchange", sector:"Finance", exchange:"NSE", price:2314.4, change:-4.15, pe:84.2, mcap:"Large Cap", volume:6653727, marketCapCr:61093 },
  { symbol:"METROPOLIS", name:"Metropolis Healthcare", sector:"Healthcare", exchange:"NSE", price:450.2, change:2.06, pe:52.4, mcap:"Mid Cap", volume:193686, marketCapCr:9639 },
  { symbol:"MPHASIS", name:"Mphasis Ltd", sector:"IT", exchange:"NSE", price:2063.6, change:-1.32, pe:32.6, mcap:"Large Cap", volume:471389, marketCapCr:45235 },
  { symbol:"MRF", name:"MRF Ltd", sector:"Auto Parts", exchange:"NSE", price:124975.0, change:-2.01, pe:28.4, mcap:"Large Cap", volume:7960, marketCapCr:62086 },
  { symbol:"NATIONALUM", name:"National Aluminium Co", sector:"Metal", exchange:"NSE", price:349.75, change:-5.09, pe:12.4, mcap:"Large Cap", volume:14168007, marketCapCr:62666 },
  { symbol:"NAVINFLUOR", name:"Navin Fluorine Intl", sector:"Chemicals", exchange:"NSE", price:5886.5, change:-3.88, pe:48.6, mcap:"Large Cap", volume:112393, marketCapCr:33428 },
  { symbol:"NCC", name:"NCC Ltd", sector:"Construction", exchange:"NSE", price:132.29, change:-5.9, pe:18.4, mcap:"Mid Cap", volume:3581064, marketCapCr:9359 },
  { symbol:"NIACL", name:"New India Assurance", sector:"Insurance", exchange:"NSE", price:124.65, change:-5.93, pe:18.6, mcap:"Large Cap", volume:635051, marketCapCr:24695 },
  { symbol:"NMDC", name:"NMDC Ltd", sector:"Mining", exchange:"NSE", price:75.09, change:-5.88, pe:8.8, mcap:"Large Cap", volume:35184834, marketCapCr:70449 },
  { symbol:"OFSS", name:"Oracle Financial Services", sector:"IT", exchange:"NSE", price:6445.0, change:-2.05, pe:32.4, mcap:"Large Cap", volume:118364, marketCapCr:57801 },
  { symbol:"OIL", name:"Oil India Ltd", sector:"Energy", exchange:"NSE", price:464.65, change:-2.28, pe:9.8, mcap:"Large Cap", volume:3239580, marketCapCr:77353 },
  { symbol:"PAGEIND", name:"Page Industries Ltd", sector:"Textile", exchange:"NSE", price:31345.0, change:-2.06, pe:78.4, mcap:"Large Cap", volume:18344, marketCapCr:36518 },
  { symbol:"PERSISTENT", name:"Persistent Systems", sector:"IT", exchange:"NSE", price:4724.5, change:0.17, pe:52.8, mcap:"Large Cap", volume:1065192, marketCapCr:80326 },
  { symbol:"PETRONET", name:"Petronet LNG Ltd", sector:"Energy", exchange:"NSE", price:238.05, change:-7.61, pe:12.6, mcap:"Large Cap", volume:12355833, marketCapCr:45998 },
  { symbol:"PIIND", name:"PI Industries Ltd", sector:"Agrochemicals", exchange:"NSE", price:2762.6, change:-5.05, pe:42.6, mcap:"Large Cap", volume:163588, marketCapCr:46244 },
  { symbol:"PGHH", name:"Procter & Gamble HH", sector:"FMCG", exchange:"NSE", price:9456.0, change:-2.59, pe:64.2, mcap:"Large Cap", volume:13157, marketCapCr:37333 },
  { symbol:"PNBHOUSING", name:"PNB Housing Finance", sector:"Finance", exchange:"NSE", price:750.75, change:-5.2, pe:18.6, mcap:"Large Cap", volume:1251948, marketCapCr:22115 },
  { symbol:"PVRINOX", name:"PVR Inox Ltd", sector:"Entertainment", exchange:"NSE", price:941.9, change:-4.47, pe:52.4, mcap:"Mid Cap", volume:586602, marketCapCr:10176 },
  { symbol:"RAMCOCEM", name:"The Ramco Cements", sector:"Cement", exchange:"NSE", price:867.4, change:-6.25, pe:28.6, mcap:"Large Cap", volume:393809, marketCapCr:26316 },
  { symbol:"RECLTD", name:"REC Ltd", sector:"Finance", exchange:"NSE", price:316.45, change:-4.25, pe:8.6, mcap:"Large Cap", volume:11748371, marketCapCr:93269 },
  { symbol:"RBLBANK", name:"RBL Bank Ltd", sector:"Banking", exchange:"NSE", price:289.3, change:-2.67, pe:18.4, mcap:"Large Cap", volume:2624912, marketCapCr:20299 },
  { symbol:"RVNL", name:"Rail Vikas Nigam Ltd", sector:"Infrastructure", exchange:"NSE", price:250.25, change:-5.41, pe:48.4, mcap:"Large Cap", volume:6637313, marketCapCr:65073 },
  { symbol:"SBICARD", name:"SBI Cards & Payments", sector:"Finance", exchange:"NSE", price:653.3, change:-5.15, pe:38.4, mcap:"Large Cap", volume:1535060, marketCapCr:74754 },
  { symbol:"SCHAEFFLER", name:"Schaeffler India", sector:"Auto Parts", exchange:"NSE", price:3951.6, change:-5.61, pe:54.6, mcap:"Large Cap", volume:63480, marketCapCr:60785 },
  { symbol:"SHREECEM", name:"Shree Cement Ltd", sector:"Cement", exchange:"NSE", price:22725.0, change:-3.44, pe:52.4, mcap:"Large Cap", volume:36958, marketCapCr:95650 },
  { symbol:"SRF", name:"SRF Ltd", sector:"Chemicals", exchange:"NSE", price:2391.5, change:-2.57, pe:38.6, mcap:"Large Cap", volume:687490, marketCapCr:79712 },
  { symbol:"STAR", name:"Strides Pharma", sector:"Pharma", exchange:"NSE", price:910.4, change:0.75, pe:28.4, mcap:"Mid Cap", volume:391880, marketCapCr:8016 },
  { symbol:"TATACHEM", name:"Tata Chemicals Ltd", sector:"Chemicals", exchange:"NSE", price:608.85, change:-3.86, pe:22.6, mcap:"Mid Cap", volume:969036, marketCapCr:18243 },
  { symbol:"TATAELXSI", name:"Tata Elxsi Ltd", sector:"IT", exchange:"NSE", price:4130.6, change:-2.53, pe:62.8, mcap:"Large Cap", volume:299035, marketCapCr:30269 },
  { symbol:"TORNTPOWER", name:"Torrent Power Ltd", sector:"Power", exchange:"NSE", price:1362.8, change:-6.06, pe:28.6, mcap:"Large Cap", volume:336557, marketCapCr:77027 },
  { symbol:"TRITON", name:"Triveni Turbine Ltd", sector:"Engineering", exchange:"NSE", price:490.20, change:2.12, pe:52.6, mcap:"Small Cap", volume:1234567, marketCapCr:18450 },
  { symbol:"UBLLTD", name:"United Breweries Ltd", sector:"Beverages", exchange:"NSE", price:1602.60, change:-0.56, pe:68.4, mcap:"Mid Cap", volume:678901, marketCapCr:44320 },
  { symbol:"UPL", name:"UPL Ltd", sector:"Agrochemicals", exchange:"NSE", price:602.4, change:-3.7, pe:18.6, mcap:"Large Cap", volume:1690435, marketCapCr:63447 },
  { symbol:"VOLTAS", name:"Voltas Ltd", sector:"Consumer Electricals", exchange:"NSE", price:1251.2, change:-5.53, pe:68.4, mcap:"Large Cap", volume:1982017, marketCapCr:51185 },
  { symbol:"WHIRLPOOL", name:"Whirlpool of India", sector:"Consumer Electricals", exchange:"NSE", price:784.25, change:-6.23, pe:42.6, mcap:"Mid Cap", volume:450000, marketCapCr:11802 },
  { symbol:"YESBANK", name:"Yes Bank Ltd", sector:"Banking", exchange:"NSE", price:17.65, change:-5.01, pe:24.6, mcap:"Large Cap", volume:135553006, marketCapCr:66018 },
  { symbol:"ZEEL", name:"Zee Entertainment", sector:"Media", exchange:"NSE", price:68.39, change:-6.03, pe:22.6, mcap:"Mid Cap", volume:15662966, marketCapCr:8712 },
  { symbol:"ZOMATO", name:"Zomato Ltd (now Eternal)", sector:"Food Tech", exchange:"NSE", price:269.45, change:3.45, pe:218.4, mcap:"Large Cap", volume:28901234, marketCapCr:209230 },
  { symbol:"NYKAA", name:"FSN E-Commerce (Nykaa)", sector:"E-Commerce", exchange:"NSE", price:234.75, change:-2.43, pe:348.6, mcap:"Large Cap", volume:4174364, marketCapCr:76002 },
  { symbol:"POLICYBZR", name:"PB Fintech (PolicyBazaar)", sector:"FinTech", exchange:"NSE", price:1434.4, change:-4.19, pe:168.4, mcap:"Large Cap", volume:1887266, marketCapCr:70030 },
  { symbol:"RAILTEL", name:"RailTel Corporation", sector:"Telecom", exchange:"NSE", price:253.3, change:-6.7, pe:38.6, mcap:"Mid Cap", volume:1312012, marketCapCr:10410 },
  { symbol:"SJVN", name:"SJVN Ltd", sector:"Power", exchange:"NSE", price:66.52, change:-5.08, pe:28.6, mcap:"Large Cap", volume:6771812, marketCapCr:29591 },
  { symbol:"SUZLON", name:"Suzlon Energy Ltd", sector:"Renewable Energy", exchange:"NSE", price:39.94, change:-4.79, pe:38.4, mcap:"Large Cap", volume:68192562, marketCapCr:60965 },
  { symbol:"TANLA", name:"Tanla Platforms Ltd", sector:"Technology", exchange:"NSE", price:400.0, change:-5.45, pe:28.6, mcap:"Mid Cap", volume:420893, marketCapCr:6021 },
  { symbol:"TRIDENT", name:"Trident Ltd", sector:"Textile", exchange:"NSE", price:25.05, change:3.3, pe:18.4, mcap:"Mid Cap", volume:46340575, marketCapCr:13010 },
  { symbol:"UJJIVANSFB", name:"Ujjivan Small Finance Bank", sector:"Banking", exchange:"NSE", price:50.91, change:-4.59, pe:8.6, mcap:"Mid Cap", volume:15541450, marketCapCr:12121 },
  { symbol:"ZENTEC", name:"Zensar Technologies", sector:"IT", exchange:"NSE", price:1357.8, change:-3.97, pe:28.4, mcap:"Mid Cap", volume:505113, marketCapCr:11938 },
  { symbol:"ZYDUSLIFE", name:"Zydus Lifesciences", sector:"Pharma", exchange:"NSE", price:860.6, change:-3.36, pe:32.6, mcap:"Large Cap", volume:662395, marketCapCr:90637 },
  { symbol:"MAPMYINDIA", name:"C.E. Info Systems", sector:"Technology", exchange:"NSE", price:861.0, change:-5.97, pe:82.6, mcap:"Mid Cap", volume:177804, marketCapCr:6084 },
  { symbol:"CAMPUS", name:"Campus Activewear", sector:"Consumer", exchange:"NSE", price:219.15, change:-2.6, pe:48.4, mcap:"Mid Cap", volume:265443, marketCapCr:8103 },
  { symbol:"INOX", name:"Inox Wind Energy", sector:"Renewable Energy", exchange:"NSE", price:96.67, change:1.24, pe:28.4, mcap:"Mid Cap", volume:194767, marketCapCr:10176 },
  { symbol:"ENGINERSIN", name:"Engineers India Ltd", sector:"Engineering", exchange:"NSE", price:181.29, change:-5.4, pe:28.4, mcap:"Mid Cap", volume:3151165, marketCapCr:12078 },
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
  nifty50: { name: "NIFTY 50", value: 25571.25, change: 0.46 },
  sensex: { name: "SENSEX", value: 84620.50, change: 0.48 },
  niftyBank: { name: "NIFTY BANK", value: 61172.00, change: 0.71 },
  niftyIT: { name: "NIFTY IT", value: 32004.05, change: -0.98 },
  niftyMidcap: { name: "NIFTY MIDCAP 100", value: 59513.95, change: 0.48 },
  niftySmallcap: { name: "NIFTY SMALLCAP 100", value: 17002.15, change: -0.11 }
};

/* ============================================
   NSE REAL DATA — 23 Mar 2026
   prev=yesterday close, hi52/lo52=real 52W
   ============================================ */
const NSE_DATA = {
  "ADANIENT": {
    "prev": 1927.1,
    "hi52": 2695.0,
    "lo52": 1820.5
  },
  "ADANIPORTS": {
    "prev": 1365.4,
    "hi52": 1584.0,
    "lo52": 1041.5
  },
  "APOLLOHOSP": {
    "prev": 7364.5,
    "hi52": 8099.5,
    "lo52": 6430.25
  },
  "ASIANPAINT": {
    "prev": 2195.4,
    "hi52": 2985.7,
    "lo52": 2115.0
  },
  "AXISBANK": {
    "prev": 1203.9,
    "hi52": 1418.3,
    "lo52": 1032.35
  },
  "BAJAJ-AUTO": {
    "prev": 9051.0,
    "hi52": 10187.0,
    "lo52": 7089.35
  },
  "BAJAJFINSV": {
    "prev": 1710.3,
    "hi52": 2195.0,
    "lo52": 1662.7
  },
  "BAJFINANCE": {
    "prev": 830.55,
    "hi52": 9788.0,
    "lo52": 787.9
  },
  "BEL": {
    "prev": 426.1,
    "hi52": 473.45,
    "lo52": 256.2
  },
  "BHARTIARTL": {
    "prev": 1846.1,
    "hi52": 2174.5,
    "lo52": 1660.0
  },
  "CIPLA": {
    "prev": 1256.4,
    "hi52": 1673.0,
    "lo52": 1217.8
  },
  "COALINDIA": {
    "prev": 468.15,
    "hi52": 476.0,
    "lo52": 356.0
  },
  "DRREDDY": {
    "prev": 1298.9,
    "hi52": 1379.7,
    "lo52": 1020.0
  },
  "EICHERMOT": {
    "prev": 6909.0,
    "hi52": 8230.0,
    "lo52": 4999.95
  },
  "ETERNAL": {
    "prev": 232.29,
    "hi52": 368.45,
    "lo52": 194.8
  },
  "GRASIM": {
    "prev": 2616.3,
    "hi52": 2979.0,
    "lo52": 2465.5
  },
  "HCLTECH": {
    "prev": 1333.7,
    "hi52": 1780.1,
    "lo52": 1297.7
  },
  "HDFCBANK": {
    "prev": 780.45,
    "hi52": 2037.7,
    "lo52": 741.05
  },
  "HDFCLIFE": {
    "prev": 623.65,
    "hi52": 820.75,
    "lo52": 590.1
  },
  "HINDALCO": {
    "prev": 874.25,
    "hi52": 1029.8,
    "lo52": 546.45
  },
  "HINDUNILVR": {
    "prev": 2082.7,
    "hi52": 2479.6,
    "lo52": 2033.3
  },
  "ICICIBANK": {
    "prev": 1245.4,
    "hi52": 1500.0,
    "lo52": 1218.1
  },
  "INDIGO": {
    "prev": 4149.1,
    "hi52": 6232.5,
    "lo52": 3895.2
  },
  "INFY": {
    "prev": 1255.9,
    "hi52": 1728.0,
    "lo52": 1215.1
  },
  "ITC": {
    "prev": 299.95,
    "hi52": 444.2,
    "lo52": 289.55
  },
  "JIOFIN": {
    "prev": 239.3,
    "hi52": 338.6,
    "lo52": 203.1
  },
  "JSWSTEEL": {
    "prev": 1169.6,
    "hi52": 1284.7,
    "lo52": 905.2
  },
  "KOTAKBANK": {
    "prev": 366.75,
    "hi52": 2301.9,
    "lo52": 355.25
  },
  "LT": {
    "prev": 3434.8,
    "hi52": 4440.0,
    "lo52": 2965.3
  },
  "M&M": {
    "prev": 3066.1,
    "hi52": 3839.9,
    "lo52": 2425.0
  },
  "MARUTI": {
    "prev": 12601.0,
    "hi52": 17370.0,
    "lo52": 11059.45
  },
  "MAXHEALTH": {
    "prev": 964.8,
    "hi52": 1314.3,
    "lo52": 933.8
  },
  "NESTLEIND": {
    "prev": 1193.6,
    "hi52": 2515.0,
    "lo52": 1084.7
  },
  "NTPC": {
    "prev": 380.95,
    "hi52": 394.5,
    "lo52": 315.55
  },
  "ONGC": {
    "prev": 265.4,
    "hi52": 293.0,
    "lo52": 205.0
  },
  "POWERGRID": {
    "prev": 297.6,
    "hi52": 322.0,
    "lo52": 250.0
  },
  "RELIANCE": {
    "prev": 1414.4,
    "hi52": 1611.8,
    "lo52": 1114.85
  },
  "SBILIFE": {
    "prev": 1896.9,
    "hi52": 2132.0,
    "lo52": 1430.55
  },
  "SBIN": {
    "prev": 1058.0,
    "hi52": 1234.7,
    "lo52": 730.0
  },
  "SHRIRAMFIN": {
    "prev": 938.6,
    "hi52": 1108.0,
    "lo52": 566.5
  },
  "SUNPHARMA": {
    "prev": 1777.1,
    "hi52": 1851.2,
    "lo52": 1548.0
  },
  "TATACONSUM": {
    "prev": 1050.2,
    "hi52": 1220.9,
    "lo52": 952.5
  },
  "TATASTEEL": {
    "prev": 196.77,
    "hi52": 216.45,
    "lo52": 125.3
  },
  "TCS": {
    "prev": 2390.6,
    "hi52": 3710.0,
    "lo52": 2348.0
  },
  "TECHM": {
    "prev": 1384.8,
    "hi52": 1854.0,
    "lo52": 1209.4
  },
  "TITAN": {
    "prev": 4106.6,
    "hi52": 4378.4,
    "lo52": 2925.0
  },
  "TMPV": {
    "prev": 314.1,
    "hi52": 421.55,
    "lo52": 303.5
  },
  "TRENT": {
    "prev": 3559.6,
    "hi52": 6261.0,
    "lo52": 3340.3
  },
  "ULTRACEMCO": {
    "prev": 10934.0,
    "hi52": 13110.0,
    "lo52": 10325.0
  },
  "WIPRO": {
    "prev": 190.9,
    "hi52": 274.7,
    "lo52": 187.0
  },
  "ABB": {
    "prev": 6297.0,
    "hi52": 6554.0,
    "lo52": 4637.5
  },
  "ADANIENSOL": {
    "prev": 1009.9,
    "hi52": 1067.7,
    "lo52": 744.9
  },
  "ADANIGREEN": {
    "prev": 863.1,
    "hi52": 1177.55,
    "lo52": 765.0
  },
  "ADANIPOWER": {
    "prev": 151.54,
    "hi52": 723.0,
    "lo52": 128.1
  },
  "AMBUJACEM": {
    "prev": 420.55,
    "hi52": 624.95,
    "lo52": 394.0
  },
  "BAJAJHFL": {
    "prev": 81.45,
    "hi52": 136.96,
    "lo52": 77.9
  },
  "BAJAJHLDNG": {
    "prev": 9512.0,
    "hi52": 14763.0,
    "lo52": 9088.0
  },
  "BANKBARODA": {
    "prev": 279.95,
    "hi52": 325.5,
    "lo52": 212.55
  },
  "BOSCHLTD": {
    "prev": 30390.0,
    "hi52": 41945.0,
    "lo52": 25921.6
  },
  "BPCL": {
    "prev": 287.8,
    "hi52": 391.65,
    "lo52": 262.0
  },
  "BRITANNIA": {
    "prev": 5618.5,
    "hi52": 6336.0,
    "lo52": 4605.05
  },
  "CANBK": {
    "prev": 136.44,
    "hi52": 162.89,
    "lo52": 83.7
  },
  "CGPOWER": {
    "prev": 681.6,
    "hi52": 797.55,
    "lo52": 517.7
  },
  "CHOLAFIN": {
    "prev": 1440.5,
    "hi52": 1831.5,
    "lo52": 1358.65
  },
  "DIVISLAB": {
    "prev": 6100.0,
    "hi52": 7071.5,
    "lo52": 4955.0
  },
  "DLF": {
    "prev": 540.75,
    "hi52": 886.8,
    "lo52": 512.05
  },
  "DMART": {
    "prev": 3770.8,
    "hi52": 4949.5,
    "lo52": 3529.0
  },
  "ENRIN": {
    "prev": 2791.2,
    "hi52": 3625.0,
    "lo52": 2115.0
  },
  "GAIL": {
    "prev": 142.87,
    "hi52": 202.79,
    "lo52": 134.36
  },
  "GODREJCP": {
    "prev": 1017.6,
    "hi52": 1309.0,
    "lo52": 988.0
  },
  "HAL": {
    "prev": 3782.4,
    "hi52": 5165.0,
    "lo52": 3610.0
  },
  "HAVELLS": {
    "prev": 1281.2,
    "hi52": 1673.8,
    "lo52": 1217.2
  },
  "HINDZINC": {
    "prev": 514.75,
    "hi52": 733.0,
    "lo52": 388.55
  },
  "HYUNDAI": {
    "prev": 1951.0,
    "hi52": 2890.0,
    "lo52": 1541.7
  },
  "ICICIGI": {
    "prev": 1777.2,
    "hi52": 2068.7,
    "lo52": 1702.0
  },
  "INDHOTEL": {
    "prev": 615.55,
    "hi52": 858.0,
    "lo52": 580.85
  },
  "IOC": {
    "prev": 144.6,
    "hi52": 188.96,
    "lo52": 122.35
  },
  "IRFC": {
    "prev": 94.69,
    "hi52": 148.95,
    "lo52": 89.2
  },
  "JINDALSTEL": {
    "prev": 1186.5,
    "hi52": 1272.1,
    "lo52": 770.0
  },
  "JSWENERGY": {
    "prev": 507.05,
    "hi52": 579.0,
    "lo52": 427.75
  },
  "LICI": {
    "prev": 776.75,
    "hi52": 980.0,
    "lo52": 737.05
  },
  "LODHA": {
    "prev": 796.9,
    "hi52": 1531.0,
    "lo52": 724.0
  },
  "LTM": {
    "prev": 4298.8,
    "hi52": 6429.5,
    "lo52": 3802.0
  },
  "MAZDOCK": {
    "prev": 2324.1,
    "hi52": 3775.0,
    "lo52": 2125.9
  },
  "MOTHERSON": {
    "prev": 111.59,
    "hi52": 162.25,
    "lo52": 89.7
  },
  "NAUKRI": {
    "prev": 978.2,
    "hi52": 7429.9,
    "lo52": 930.5
  },
  "PFC": {
    "prev": 412.85,
    "hi52": 444.1,
    "lo52": 329.9
  },
  "PIDILITIND": {
    "prev": 1341.3,
    "hi52": 3149.9,
    "lo52": 1293.3
  },
  "PNB": {
    "prev": 111.53,
    "hi52": 135.15,
    "lo52": 89.45
  },
  "RECLTD": {
    "prev": 330.5,
    "hi52": 450.0,
    "lo52": 310.55
  },
  "SHREECEM": {
    "prev": 23535.0,
    "hi52": 32490.0,
    "lo52": 22550.0
  },
  "SIEMENS": {
    "prev": 3129.6,
    "hi52": 3440.0,
    "lo52": 2450.0
  },
  "SOLARINDS": {
    "prev": 12934.0,
    "hi52": 17820.0,
    "lo52": 9888.4
  },
  "TATAPOWER": {
    "prev": 402.4,
    "hi52": 418.45,
    "lo52": 335.0
  },
  "TORNTPHARM": {
    "prev": 4270.2,
    "hi52": 4482.9,
    "lo52": 3101.6
  },
  "TVSMOTOR": {
    "prev": 3462.2,
    "hi52": 3970.0,
    "lo52": 2221.1
  },
  "UNITDSPR": {
    "prev": 1300.1,
    "hi52": 1645.0,
    "lo52": 1266.4
  },
  "VBL": {
    "prev": 401.45,
    "hi52": 568.5,
    "lo52": 381.0
  },
  "VEDL": {
    "prev": 672.2,
    "hi52": 769.8,
    "lo52": 363.0
  },
  "ZYDUSLIFE": {
    "prev": 890.5,
    "hi52": 1059.05,
    "lo52": 795.0
  },
  "20MICRONS": {
    "prev": 151.02,
    "hi52": 283.93,
    "lo52": 140.65
  },
  "21STCENMGM": {
    "prev": 31.9,
    "hi52": 80.7,
    "lo52": 31.27
  },
  "360ONE": {
    "prev": 1040.6,
    "hi52": 1273.8,
    "lo52": 790.5
  },
  "3IINFOLTD": {
    "prev": 13.82,
    "hi52": 27.45,
    "lo52": 12.68
  },
  "3MINDIA": {
    "prev": 32270.0,
    "hi52": 38030.0,
    "lo52": 26820.1
  },
  "3PLAND": {
    "prev": 32.36,
    "hi52": 58.79,
    "lo52": 28.51
  },
  "5PAISA": {
    "prev": 291.6,
    "hi52": 433.7,
    "lo52": 278.15
  },
  "63MOONS": {
    "prev": 531.45,
    "hi52": 1130.0,
    "lo52": 481.0
  },
  "AAATECH": {
    "prev": 93.0,
    "hi52": 136.0,
    "lo52": 71.0
  },
  "AADHARHFC": {
    "prev": 449.85,
    "hi52": 547.8,
    "lo52": 399.35
  },
  "AARADHYA": {
    "prev": 108.0,
    "hi52": 182.0,
    "lo52": 97.5
  },
  "AAREYDRUGS": {
    "prev": 69.28,
    "hi52": 100.0,
    "lo52": 32.85
  },
  "AARNAV": {
    "prev": 25.77,
    "hi52": 30.45,
    "lo52": 22.99
  },
  "AARON": {
    "prev": 137.74,
    "hi52": 478.0,
    "lo52": 125.95
  },
  "AARTECH": {
    "prev": 46.63,
    "hi52": 76.79,
    "lo52": 38.81
  },
  "AARTIDRUGS": {
    "prev": 343.15,
    "hi52": 564.05,
    "lo52": 312.0
  },
  "AARTIIND": {
    "prev": 427.35,
    "hi52": 495.0,
    "lo52": 338.05
  },
  "AARTIPHARM": {
    "prev": 644.6,
    "hi52": 971.0,
    "lo52": 574.45
  },
  "AARTISURF": {
    "prev": 205.0,
    "hi52": 272.0,
    "lo52": 111.2
  },
  "AARVI": {
    "prev": 130.15,
    "hi52": 152.0,
    "lo52": 88.0
  },
  "AATMAJ": {
    "prev": 19.9,
    "hi52": 25.5,
    "lo52": 14.5
  },
  "AAVAS": {
    "prev": 1098.1,
    "hi52": 2234.0,
    "lo52": 1060.4
  },
  "ABBOTINDIA": {
    "prev": 26715.0,
    "hi52": 37000.0,
    "lo52": 25420.0
  },
  "ABCAPITAL": {
    "prev": 311.25,
    "hi52": 369.3,
    "lo52": 169.43
  },
  "ABCOTS": {
    "prev": 403.35,
    "hi52": 504.0,
    "lo52": 335.0
  },
  "ABDL": {
    "prev": 408.45,
    "hi52": 696.8,
    "lo52": 279.0
  },
  "ABFRL": {
    "prev": 59.98,
    "hi52": 98.0,
    "lo52": 55.16
  },
  "ABHAPOWER": {
    "prev": 29.25,
    "hi52": 55.25,
    "lo52": 26.45
  },
  "ABINFRA": {
    "prev": 16.97,
    "hi52": 224.98,
    "lo52": 16.75
  },
  "ABLBL": {
    "prev": 93.23,
    "hi52": 175.0,
    "lo52": 90.0
  },
  "ABREL": {
    "prev": 1165.4,
    "hi52": 2537.9,
    "lo52": 1080.1
  },
  "ABSLAMC": {
    "prev": 944.65,
    "hi52": 1046.55,
    "lo52": 556.45
  },
  "ABSMARINE": {
    "prev": 166.7,
    "hi52": 259.0,
    "lo52": 92.1
  },
  "ACC": {
    "prev": 1381.4,
    "hi52": 2119.9,
    "lo52": 1320.0
  },
  "ACCELYA": {
    "prev": 1181.8,
    "hi52": 1527.0,
    "lo52": 1130.0
  },
  "ACCENTMIC": {
    "prev": 358.4,
    "hi52": 378.0,
    "lo52": 180.0
  },
  "ACCPL": {
    "prev": 65.05,
    "hi52": 102.5,
    "lo52": 53.8
  },
  "ACCURACY": {
    "prev": 3.99,
    "hi52": 9.61,
    "lo52": 3.76
  },
  "ACE": {
    "prev": 829.15,
    "hi52": 1389.0,
    "lo52": 775.45
  },
  "ACEINTEG": {
    "prev": 16.94,
    "hi52": 29.94,
    "lo52": 15.55
  },
  "ACETEC": {
    "prev": 145.05,
    "hi52": 164.0,
    "lo52": 111.8
  },
  "ACI": {
    "prev": 601.25,
    "hi52": 727.6,
    "lo52": 480.0
  },
  "ACL": {
    "prev": 52.79,
    "hi52": 109.99,
    "lo52": 47.54
  },
  "ACMESOLAR": {
    "prev": 246.37,
    "hi52": 324.3,
    "lo52": 172.63
  },
  "ACTIVEINFR": {
    "prev": 170.0,
    "hi52": 190.0,
    "lo52": 147.05
  },
  "ACUTAAS": {
    "prev": 2399.8,
    "hi52": 2553.65,
    "lo52": 1040.5
  },
  "ADDICTIVE": {
    "prev": 74.75,
    "hi52": 180.25,
    "lo52": 68.3
  },
  "ADFFOODS": {
    "prev": 174.43,
    "hi52": 300.85,
    "lo52": 161.36
  },
  "ADL": {
    "prev": 66.58,
    "hi52": 121.77,
    "lo52": 62.3
  },
  "ADOR": {
    "prev": 917.1,
    "hi52": 1260.0,
    "lo52": 788.0
  },
  "ADROITINFO": {
    "prev": 8.83,
    "hi52": 13.48,
    "lo52": 8.1
  },
  "ADSL": {
    "prev": 101.55,
    "hi52": 226.55,
    "lo52": 95.0
  },
  "ADVAIT": {
    "prev": 1644.6,
    "hi52": 1885.0,
    "lo52": 1351.0
  },
  "ADVANCE": {
    "prev": 97.32,
    "hi52": 154.0,
    "lo52": 87.76
  },
  "ADVANIHOTR": {
    "prev": 51.73,
    "hi52": 68.39,
    "lo52": 47.3
  },
  "ADVENTHTL": {
    "prev": 151.07,
    "hi52": 345.05,
    "lo52": 135.2
  },
  "ADVENZYMES": {
    "prev": 272.6,
    "hi52": 366.25,
    "lo52": 259.0
  },
  "AEGISLOG": {
    "prev": 611.7,
    "hi52": 946.5,
    "lo52": 576.1
  },
  "AEGISVOPAK": {
    "prev": 178.54,
    "hi52": 302.0,
    "lo52": 168.18
  },
  "AEPL": {
    "prev": 16.85,
    "hi52": 19.0,
    "lo52": 16.05
  },
  "AEQUS": {
    "prev": 123.06,
    "hi52": 165.4,
    "lo52": 113.3
  },
  "AEROENTER": {
    "prev": 72.53,
    "hi52": 113.9,
    "lo52": 62.2
  },
  "AEROFLEX": {
    "prev": 233.75,
    "hi52": 262.4,
    "lo52": 148.01
  },
  "AERON": {
    "prev": 85.15,
    "hi52": 165.0,
    "lo52": 78.0
  },
  "AERONEU": {
    "prev": 66.75,
    "hi52": 125.37,
    "lo52": 63.21
  },
  "AESTHETIK": {
    "prev": 65.5,
    "hi52": 155.6,
    "lo52": 62.7
  },
  "AETHER": {
    "prev": 1155.55,
    "hi52": 1180.0,
    "lo52": 725.0
  },
  "AFCONS": {
    "prev": 278.75,
    "hi52": 498.7,
    "lo52": 265.8
  },
  "AFFLE": {
    "prev": 1285.7,
    "hi52": 2185.9,
    "lo52": 1246.0
  },
  "AFFORDABLE": {
    "prev": 142.09,
    "hi52": 534.4,
    "lo52": 137.01
  },
  "AFSL": {
    "prev": 201.0,
    "hi52": 269.5,
    "lo52": 173.68
  },
  "AGARIND": {
    "prev": 412.45,
    "hi52": 1103.0,
    "lo52": 375.0
  },
  "AGARWALEYE": {
    "prev": 424.35,
    "hi52": 568.0,
    "lo52": 327.0
  },
  "AGARWALFT": {
    "prev": 25.75,
    "hi52": 71.25,
    "lo52": 24.55
  },
  "AGARWALTUF": {
    "prev": 92.0,
    "hi52": 174.05,
    "lo52": 85.3
  },
  "AGI": {
    "prev": 499.1,
    "hi52": 1009.0,
    "lo52": 465.0
  },
  "AGIIL": {
    "prev": 311.7,
    "hi52": 1408.0,
    "lo52": 224.7
  },
  "AGNI": {
    "prev": 14.3,
    "hi52": 43.35,
    "lo52": 13.6
  },
  "AGRITECH": {
    "prev": 105.12,
    "hi52": 187.19,
    "lo52": 97.2
  },
  "AGROPHOS": {
    "prev": 31.59,
    "hi52": 47.6,
    "lo52": 27.6
  },
  "AHCL": {
    "prev": 121.11,
    "hi52": 172.75,
    "lo52": 90.78
  },
  "AHLADA": {
    "prev": 39.38,
    "hi52": 81.0,
    "lo52": 34.51
  },
  "AHLEAST": {
    "prev": 151.39,
    "hi52": 168.0,
    "lo52": 122.78
  },
  "AHLUCONT": {
    "prev": 724.95,
    "hi52": 1125.0,
    "lo52": 669.95
  },
  "AIAENG": {
    "prev": 3409.6,
    "hi52": 4206.1,
    "lo52": 3001.1
  },
  "AIIL": {
    "prev": 492.2,
    "hi52": 3318.7,
    "lo52": 400.0
  },
  "AILIMITED": {
    "prev": 43.65,
    "hi52": 90.9,
    "lo52": 23.75
  },
  "AIMTRON": {
    "prev": 788.85,
    "hi52": 1040.0,
    "lo52": 358.0
  },
  "AIRAN": {
    "prev": 15.22,
    "hi52": 32.65,
    "lo52": 12.66
  },
  "AIROLAM": {
    "prev": 87.41,
    "hi52": 137.04,
    "lo52": 83.0
  },
  "AISL": {
    "prev": 62.7,
    "hi52": 120.9,
    "lo52": 59.6
  },
  "AJANTPHARM": {
    "prev": 2904.7,
    "hi52": 3228.0,
    "lo52": 2327.3
  },
  "AJAXENGG": {
    "prev": 471.0,
    "hi52": 756.2,
    "lo52": 450.0
  },
  "AJMERA": {
    "prev": 108.52,
    "hi52": 1107.0,
    "lo52": 100.0
  },
  "AJOONI": {
    "prev": 4.26,
    "hi52": 6.6,
    "lo52": 3.55
  },
  "AKANKSHA": {
    "prev": 68.25,
    "hi52": 133.75,
    "lo52": 63.0
  },
  "AKASH": {
    "prev": 25.61,
    "hi52": 36.0,
    "lo52": 23.0
  },
  "AKG": {
    "prev": 10.82,
    "hi52": 16.82,
    "lo52": 10.34
  },
  "AKI": {
    "prev": 4.59,
    "hi52": 16.05,
    "lo52": 4.21
  },
  "AKSHAR": {
    "prev": 0.4,
    "hi52": 0.76,
    "lo52": 0.36
  },
  "AKSHARCHEM": {
    "prev": 184.03,
    "hi52": 330.8,
    "lo52": 166.0
  },
  "AKSHOPTFBR": {
    "prev": 4.6,
    "hi52": 12.95,
    "lo52": 4.16
  },
  "AKUMS": {
    "prev": 483.4,
    "hi52": 622.95,
    "lo52": 405.0
  },
  "AKZOINDIA": {
    "prev": 2885.1,
    "hi52": 3915.5,
    "lo52": 2658.7
  },
  "ALANKIT": {
    "prev": 7.54,
    "hi52": 18.08,
    "lo52": 7.05
  },
  "ALBERTDAVD": {
    "prev": 658.5,
    "hi52": 957.5,
    "lo52": 639.0
  },
  "ALCODIS": {
    "prev": 65.0,
    "hi52": 208.5,
    "lo52": 59.05
  },
  "ALEMBICLTD": {
    "prev": 79.9,
    "hi52": 125.54,
    "lo52": 74.93
  },
  "ALGOQUANT": {
    "prev": 54.65,
    "hi52": 71.01,
    "lo52": 47.8
  },
  "ALICON": {
    "prev": 647.35,
    "hi52": 1022.0,
    "lo52": 597.15
  },
  "ALIVUS": {
    "prev": 949.8,
    "hi52": 1225.1,
    "lo52": 819.0
  },
  "ALKALI": {
    "prev": 55.14,
    "hi52": 117.79,
    "lo52": 53.1
  },
  "ALKEM": {
    "prev": 5257.5,
    "hi52": 5933.5,
    "lo52": 4611.85
  },
  "ALKYLAMINE": {
    "prev": 1292.0,
    "hi52": 2438.8,
    "lo52": 1212.0
  },
  "ALLCARGO": {
    "prev": 8.08,
    "hi52": 15.89,
    "lo52": 7.39
  },
  "ALLDIGI": {
    "prev": 733.8,
    "hi52": 1084.0,
    "lo52": 719.0
  },
  "ALLETEC": {
    "prev": 142.1,
    "hi52": 475.5,
    "lo52": 131.0
  },
  "ALLTIME": {
    "prev": 210.78,
    "hi52": 334.9,
    "lo52": 195.0
  },
  "ALMONDZ": {
    "prev": 14.31,
    "hi52": 27.93,
    "lo52": 12.51
  },
  "ALOKINDS": {
    "prev": 12.84,
    "hi52": 23.5,
    "lo52": 12.05
  },
  "ALPA": {
    "prev": 60.17,
    "hi52": 120.5,
    "lo52": 56.63
  },
  "ALPEXSOLAR": {
    "prev": 770.55,
    "hi52": 1449.7,
    "lo52": 536.5
  },
  "ALPHAGEO": {
    "prev": 184.89,
    "hi52": 298.0,
    "lo52": 172.8
  },
  "ALUWIND": {
    "prev": 58.3,
    "hi52": 95.8,
    "lo52": 48.0
  },
  "AMAGI": {
    "prev": 349.1,
    "hi52": 438.4,
    "lo52": 318.0
  },
  "AMANTA": {
    "prev": 95.91,
    "hi52": 154.4,
    "lo52": 92.0
  },
  "AMBER": {
    "prev": 6654.5,
    "hi52": 8626.0,
    "lo52": 5400.5
  },
  "AMBEY": {
    "prev": 20.9,
    "hi52": 48.3,
    "lo52": 18.7
  },
  "AMBICAAGAR": {
    "prev": 23.28,
    "hi52": 33.0,
    "lo52": 20.0
  },
  "AMBIKCO": {
    "prev": 1275.7,
    "hi52": 1700.0,
    "lo52": 1101.0
  },
  "AMDIND": {
    "prev": 38.07,
    "hi52": 68.07,
    "lo52": 34.9
  },
  "AMEYA": {
    "prev": 100.45,
    "hi52": 127.25,
    "lo52": 86.0
  },
  "AMJLAND": {
    "prev": 38.23,
    "hi52": 68.9,
    "lo52": 33.4
  },
  "AMNPLST": {
    "prev": 151.94,
    "hi52": 272.0,
    "lo52": 141.0
  },
  "AMRUTANJAN": {
    "prev": 515.55,
    "hi52": 790.95,
    "lo52": 498.0
  },
  "ANANDRATHI": {
    "prev": 3003.4,
    "hi52": 3321.4,
    "lo52": 1600.0
  },
  "ANANTAM": {
    "prev": 102.97,
    "hi52": 117.0,
    "lo52": 100.1
  },
  "ANANTRAJ": {
    "prev": 465.85,
    "hi52": 743.65,
    "lo52": 376.15
  },
  "ANDHRAPAP": {
    "prev": 60.4,
    "hi52": 90.0,
    "lo52": 59.0
  },
  "ANDHRSUGAR": {
    "prev": 70.96,
    "hi52": 86.7,
    "lo52": 65.1
  },
  "ANGELONE": {
    "prev": 231.32,
    "hi52": 3285.0,
    "lo52": 208.63
  },
  "ANIKINDS": {
    "prev": 37.93,
    "hi52": 133.0,
    "lo52": 36.0
  },
  "ANLON": {
    "prev": 368.0,
    "hi52": 497.0,
    "lo52": 261.05
  },
  "ANMOL": {
    "prev": 10.48,
    "hi52": 19.7,
    "lo52": 10.01
  },
  "ANNAPURNA": {
    "prev": 159.65,
    "hi52": 338.0,
    "lo52": 147.0
  },
  "ANONDITA": {
    "prev": 680.85,
    "hi52": 1037.45,
    "lo52": 261.75
  },
  "ANTELOPUS": {
    "prev": 515.45,
    "hi52": 767.95,
    "lo52": 357.0
  },
  "ANTGRAPHIC": {
    "prev": 0.77,
    "hi52": 1.62,
    "lo52": 0.65
  },
  "ANTHEM": {
    "prev": 644.85,
    "hi52": 873.5,
    "lo52": 579.15
  },
  "ANUHPHR": {
    "prev": 74.31,
    "hi52": 229.8,
    "lo52": 69.27
  },
  "ANUP": {
    "prev": 1588.2,
    "hi52": 3633.05,
    "lo52": 1422.3
  },
  "ANURAS": {
    "prev": 1252.5,
    "hi52": 1407.0,
    "lo52": 686.1
  },
  "ANYA": {
    "prev": 17.8,
    "hi52": 29.05,
    "lo52": 17.0
  },
  "ANZEN": {
    "prev": 120.5,
    "hi52": 125.0,
    "lo52": 105.7
  },
  "APARINDS": {
    "prev": 9673.0,
    "hi52": 11648.0,
    "lo52": 4308.05
  },
  "APCL": {
    "prev": 112.87,
    "hi52": 155.0,
    "lo52": 98.05
  },
  "APCOTEXIND": {
    "prev": 351.05,
    "hi52": 444.0,
    "lo52": 299.2
  },
  "APEX": {
    "prev": 376.25,
    "hi52": 487.95,
    "lo52": 186.55
  },
  "APEXECO": {
    "prev": 114.0,
    "hi52": 165.6,
    "lo52": 76.5
  },
  "APLAPOLLO": {
    "prev": 1973.1,
    "hi52": 2301.4,
    "lo52": 1399.95
  },
  "APLLTD": {
    "prev": 677.3,
    "hi52": 1107.9,
    "lo52": 635.8
  },
  "APOLLO": {
    "prev": 198.63,
    "hi52": 354.7,
    "lo52": 105.3
  },
  "APOLLOPIPE": {
    "prev": 386.95,
    "hi52": 494.95,
    "lo52": 252.1
  },
  "APOLLOTYRE": {
    "prev": 420.85,
    "hi52": 540.5,
    "lo52": 375.0
  },
  "APOLSINHOT": {
    "prev": 1065.5,
    "hi52": 1605.0,
    "lo52": 995.4
  },
  "APRAMEYA": {
    "prev": 217.7,
    "hi52": 360.0,
    "lo52": 93.0
  },
  "APS": {
    "prev": 301.95,
    "hi52": 654.0,
    "lo52": 280.0
  },
  "APTECHT": {
    "prev": 79.07,
    "hi52": 182.3,
    "lo52": 74.4
  },
  "APTUS": {
    "prev": 208.83,
    "hi52": 364.0,
    "lo52": 198.11
  },
  "AQYLON": {
    "prev": 65.3,
    "hi52": 2247.0,
    "lo52": 62.1
  },
  "ARABIAN": {
    "prev": 70.5,
    "hi52": 92.95,
    "lo52": 63.0
  },
  "ARCHIDPLY": {
    "prev": 69.35,
    "hi52": 120.4,
    "lo52": 66.26
  },
  "ARCHIES": {
    "prev": 13.4,
    "hi52": 25.4,
    "lo52": 12.43
  },
  "ARCIIL": {
    "prev": 45.0,
    "hi52": 145.0,
    "lo52": 43.0
  },
  "ARE&M": {
    "prev": 759.15,
    "hi52": 1109.0,
    "lo52": 720.15
  },
  "ARENTERP": {
    "prev": 39.21,
    "hi52": 62.99,
    "lo52": 34.61
  },
  "ARFIN": {
    "prev": 76.95,
    "hi52": 84.9,
    "lo52": 31.43
  },
  "ARHAM": {
    "prev": 124.5,
    "hi52": 161.0,
    "lo52": 70.8
  },
  "ARIES": {
    "prev": 339.05,
    "hi52": 459.9,
    "lo52": 236.65
  },
  "ARIHANTACA": {
    "prev": 500.0,
    "hi52": 540.0,
    "lo52": 225.0
  },
  "ARIHANTCAP": {
    "prev": 68.01,
    "hi52": 120.0,
    "lo52": 61.0
  },
  "ARIHANTSUP": {
    "prev": 211.6,
    "hi52": 465.0,
    "lo52": 198.15
  },
  "ARIS": {
    "prev": 103.77,
    "hi52": 208.5,
    "lo52": 82.18
  },
  "ARISTO": {
    "prev": 83.0,
    "hi52": 148.0,
    "lo52": 79.0
  },
  "ARKADE": {
    "prev": 103.22,
    "hi52": 213.69,
    "lo52": 97.66
  },
  "ARMANFIN": {
    "prev": 1511.6,
    "hi52": 1834.6,
    "lo52": 1170.0
  },
  "ARMOUR": {
    "prev": 22.85,
    "hi52": 45.6,
    "lo52": 22.0
  },
  "AROGRANITE": {
    "prev": 22.81,
    "hi52": 45.63,
    "lo52": 22.14
  },
  "ARROWGREEN": {
    "prev": 378.45,
    "hi52": 817.95,
    "lo52": 341.95
  },
  "ARSSBL": {
    "prev": 460.4,
    "hi52": 794.85,
    "lo52": 431.0
  },
  "ARTEMISMED": {
    "prev": 225.85,
    "hi52": 306.15,
    "lo52": 210.06
  },
  "ARTNIRMAN": {
    "prev": 34.29,
    "hi52": 72.5,
    "lo52": 33.45
  },
  "ARUNAYA": {
    "prev": 16.9,
    "hi52": 46.5,
    "lo52": 16.0
  },
  "ARVIND": {
    "prev": 359.25,
    "hi52": 404.0,
    "lo52": 274.8
  },
  "ARVINDFASN": {
    "prev": 396.7,
    "hi52": 579.0,
    "lo52": 320.2
  },
  "ARVINDPORT": {
    "prev": 31.05,
    "hi52": 87.4,
    "lo52": 27.45
  },
  "ARVSMART": {
    "prev": 534.2,
    "hi52": 757.0,
    "lo52": 486.8
  },
  "ASAHIINDIA": {
    "prev": 810.45,
    "hi52": 1074.0,
    "lo52": 578.65
  },
  "ASAHISONG": {
    "prev": 206.92,
    "hi52": 491.95,
    "lo52": 179.64
  },
  "ASAL": {
    "prev": 416.55,
    "hi52": 654.65,
    "lo52": 393.6
  },
  "ASALCBR": {
    "prev": 727.8,
    "hi52": 1477.95,
    "lo52": 696.0
  },
  "ASHALOG": {
    "prev": 60.95,
    "hi52": 92.6,
    "lo52": 55.0
  },
  "ASHAPURMIN": {
    "prev": 502.85,
    "hi52": 924.9,
    "lo52": 316.0
  },
  "ASHIANA": {
    "prev": 303.5,
    "hi52": 376.15,
    "lo52": 247.8
  },
  "ASHIMASYN": {
    "prev": 14.07,
    "hi52": 35.8,
    "lo52": 12.05
  },
  "ASHOKA": {
    "prev": 113.73,
    "hi52": 230.8,
    "lo52": 105.5
  },
  "ASHOKAMET": {
    "prev": 14.26,
    "hi52": 21.0,
    "lo52": 12.6
  },
  "ASHOKLEY": {
    "prev": 168.89,
    "hi52": 254.4,
    "lo52": 114.96
  },
  "ASHWINI": {
    "prev": 144.0,
    "hi52": 167.8,
    "lo52": 120.0
  },
  "ASIANENE": {
    "prev": 282.45,
    "hi52": 391.65,
    "lo52": 230.0
  },
  "ASIANHOTNR": {
    "prev": 287.6,
    "hi52": 419.5,
    "lo52": 247.5
  },
  "ASIANTILES": {
    "prev": 60.44,
    "hi52": 78.8,
    "lo52": 39.15
  },
  "ASKAUTOLTD": {
    "prev": 409.2,
    "hi52": 578.5,
    "lo52": 372.55
  },
  "ASMS": {
    "prev": 7.77,
    "hi52": 19.0,
    "lo52": 7.32
  },
  "ASPINWALL": {
    "prev": 207.83,
    "hi52": 315.0,
    "lo52": 200.25
  },
  "ASPIRE": {
    "prev": 11.45,
    "hi52": 40.0,
    "lo52": 10.65
  },
  "ASTEC": {
    "prev": 562.85,
    "hi52": 998.4,
    "lo52": 513.4
  },
  "ASTERDM": {
    "prev": 626.95,
    "hi52": 732.2,
    "lo52": 428.3
  },
  "ASTRAL": {
    "prev": 1631.8,
    "hi52": 1768.7,
    "lo52": 1244.05
  },
  "ASTRAMICRO": {
    "prev": 890.8,
    "hi52": 1195.9,
    "lo52": 631.0
  },
  "ASTRAZEN": {
    "prev": 8321.0,
    "hi52": 10691.0,
    "lo52": 7201.15
  },
  "ASTRON": {
    "prev": 4.04,
    "hi52": 20.93,
    "lo52": 3.76
  },
  "ATALREAL": {
    "prev": 23.36,
    "hi52": 29.2,
    "lo52": 12.71
  },
  "ATAM": {
    "prev": 58.93,
    "hi52": 128.0,
    "lo52": 54.0
  },
  "ATCENERGY": {
    "prev": 23.05,
    "hi52": 115.35,
    "lo52": 19.35
  },
  "ATGL": {
    "prev": 551.9,
    "hi52": 798.0,
    "lo52": 462.8
  },
  "ATHERENERG": {
    "prev": 780.6,
    "hi52": 795.9,
    "lo52": 288.15
  },
  "ATL": {
    "prev": 22.32,
    "hi52": 40.51,
    "lo52": 20.6
  },
  "ATLANTAA": {
    "prev": 37.09,
    "hi52": 73.39,
    "lo52": 27.26
  },
  "ATLANTAELE": {
    "prev": 1179.2,
    "hi52": 1179.2,
    "lo52": 707.6
  },
  "ATLASCYCLE": {
    "prev": 81.26,
    "hi52": 109.88,
    "lo52": 76.15
  },
  "ATLPP": {
    "prev": 8.34,
    "hi52": 13.49,
    "lo52": 7.45
  },
  "ATMASTCO": {
    "prev": 129.35,
    "hi52": 268.0,
    "lo52": 109.0
  },
  "ATUL": {
    "prev": 6245.0,
    "hi52": 7788.0,
    "lo52": 4752.0
  },
  "ATULAUTO": {
    "prev": 417.05,
    "hi52": 554.0,
    "lo52": 381.15
  },
  "AUBANK": {
    "prev": 901.5,
    "hi52": 1039.2,
    "lo52": 513.5
  },
  "AURIGROW": {
    "prev": 0.3,
    "hi52": 1.0,
    "lo52": 0.2
  },
  "AURIONPRO": {
    "prev": 815.5,
    "hi52": 1665.9,
    "lo52": 762.65
  },
  "AUROIMPEX": {
    "prev": 27.0,
    "hi52": 60.0,
    "lo52": 25.65
  },
  "AUROPHARMA": {
    "prev": 1291.4,
    "hi52": 1319.8,
    "lo52": 1010.0
  },
  "AURUM": {
    "prev": 170.69,
    "hi52": 225.7,
    "lo52": 144.4
  },
  "AUSL": {
    "prev": 21.0,
    "hi52": 48.3,
    "lo52": 19.9
  },
  "AUTOAXLES": {
    "prev": 1666.7,
    "hi52": 2115.0,
    "lo52": 1520.0
  },
  "AUTOIND": {
    "prev": 59.73,
    "hi52": 96.39,
    "lo52": 55.0
  },
  "AVADHSUGAR": {
    "prev": 456.1,
    "hi52": 584.25,
    "lo52": 306.05
  },
  "AVALON": {
    "prev": 951.9,
    "hi52": 1318.0,
    "lo52": 689.9
  },
  "AVANA": {
    "prev": 70.85,
    "hi52": 83.6,
    "lo52": 60.1
  },
  "AVANTEL": {
    "prev": 127.38,
    "hi52": 215.0,
    "lo52": 102.2
  },
  "AVANTIFEED": {
    "prev": 1206.0,
    "hi52": 1489.0,
    "lo52": 601.55
  },
  "AVG": {
    "prev": 173.24,
    "hi52": 339.9,
    "lo52": 130.0
  },
  "AVIANSH": {
    "prev": 110.6,
    "hi52": 123.5,
    "lo52": 95.0
  },
  "AVL": {
    "prev": 457.75,
    "hi52": 598.7,
    "lo52": 327.6
  },
  "AVONMORE": {
    "prev": 12.08,
    "hi52": 24.19,
    "lo52": 11.17
  },
  "AVPINFRA": {
    "prev": 92.05,
    "hi52": 218.0,
    "lo52": 83.0
  },
  "AVROIND": {
    "prev": 124.4,
    "hi52": 202.0,
    "lo52": 101.35
  },
  "AVTNPL": {
    "prev": 58.99,
    "hi52": 83.8,
    "lo52": 51.41
  },
  "AWFIS": {
    "prev": 263.6,
    "hi52": 718.95,
    "lo52": 244.55
  },
  "AWHCL": {
    "prev": 438.55,
    "hi52": 693.0,
    "lo52": 408.05
  },
  "AWL": {
    "prev": 192.1,
    "hi52": 291.2,
    "lo52": 171.19
  },
  "AXISCADES": {
    "prev": 1426.0,
    "hi52": 1779.2,
    "lo52": 720.0
  },
  "AYE": {
    "prev": 107.55,
    "hi52": 149.69,
    "lo52": 93.11
  },
  "AYMSYNTEX": {
    "prev": 183.27,
    "hi52": 279.33,
    "lo52": 141.53
  },
  "AZAD": {
    "prev": 1469.4,
    "hi52": 1899.0,
    "lo52": 1159.45
  },
  "BABAFP": {
    "prev": 21.75,
    "hi52": 47.5,
    "lo52": 20.5
  },
  "BAFNAPH": {
    "prev": 125.94,
    "hi52": 202.06,
    "lo52": 70.61
  },
  "BAGDIGITAL": {
    "prev": 107.5,
    "hi52": 139.0,
    "lo52": 95.75
  },
  "BAGFILMS": {
    "prev": 4.32,
    "hi52": 8.0,
    "lo52": 4.08
  },
  "BAHETI": {
    "prev": 514.85,
    "hi52": 649.9,
    "lo52": 478.0
  },
  "BAIDFIN": {
    "prev": 10.82,
    "hi52": 14.1,
    "lo52": 9.1
  },
  "BAJAJCON": {
    "prev": 366.3,
    "hi52": 408.7,
    "lo52": 151.0
  },
  "BAJAJELEC": {
    "prev": 353.65,
    "hi52": 711.0,
    "lo52": 335.05
  },
  "BAJAJHCARE": {
    "prev": 312.95,
    "hi52": 744.0,
    "lo52": 273.25
  },
  "BAJAJHIND": {
    "prev": 16.16,
    "hi52": 29.64,
    "lo52": 14.85
  },
  "BAJAJINDEF": {
    "prev": 232.85,
    "hi52": 580.25,
    "lo52": 200.05
  },
  "BAJEL": {
    "prev": 163.0,
    "hi52": 263.9,
    "lo52": 137.25
  },
  "BALAJEE": {
    "prev": 24.71,
    "hi52": 59.9,
    "lo52": 23.5
  },
  "BALAJIPHOS": {
    "prev": 110.55,
    "hi52": 184.7,
    "lo52": 80.05
  },
  "BALAJITELE": {
    "prev": 83.66,
    "hi52": 141.32,
    "lo52": 55.67
  },
  "BALAMINES": {
    "prev": 1067.1,
    "hi52": 1945.0,
    "lo52": 976.5
  },
  "BALAXI": {
    "prev": 17.65,
    "hi52": 73.7,
    "lo52": 17.05
  },
  "BALCO": {
    "prev": 15.4,
    "hi52": 43.0,
    "lo52": 14.65
  },
  "BALKRISHNA": {
    "prev": 15.28,
    "hi52": 25.97,
    "lo52": 12.0
  },
  "BALKRISIND": {
    "prev": 2105.1,
    "hi52": 2817.5,
    "lo52": 2032.4
  },
  "BALMLAWRIE": {
    "prev": 162.19,
    "hi52": 238.2,
    "lo52": 156.11
  },
  "BALPHARMA": {
    "prev": 67.9,
    "hi52": 128.74,
    "lo52": 65.07
  },
  "BALRAMCHIN": {
    "prev": 485.9,
    "hi52": 627.8,
    "lo52": 393.55
  },
  "BALUFORGE": {
    "prev": 437.75,
    "hi52": 784.0,
    "lo52": 341.05
  },
  "BANARBEADS": {
    "prev": 110.0,
    "hi52": 164.7,
    "lo52": 97.0
  },
  "BANARISUG": {
    "prev": 3602.9,
    "hi52": 4444.0,
    "lo52": 3105.2
  },
  "BANCOINDIA": {
    "prev": 553.7,
    "hi52": 879.8,
    "lo52": 305.0
  },
  "BANDHANBNK": {
    "prev": 158.44,
    "hi52": 192.48,
    "lo52": 134.25
  },
  "BANG": {
    "prev": 34.79,
    "hi52": 64.01,
    "lo52": 32.0
  },
  "BANKA": {
    "prev": 48.73,
    "hi52": 97.88,
    "lo52": 45.11
  },
  "BANKINDIA": {
    "prev": 150.49,
    "hi52": 178.36,
    "lo52": 103.0
  },
  "BANSALWIRE": {
    "prev": 247.55,
    "hi52": 434.3,
    "lo52": 228.2
  },
  "BANSWRAS": {
    "prev": 112.38,
    "hi52": 165.49,
    "lo52": 98.0
  },
  "BARFLEX": {
    "prev": 56.6,
    "hi52": 82.4,
    "lo52": 41.15
  },
  "BASF": {
    "prev": 3312.2,
    "hi52": 5424.0,
    "lo52": 3122.2
  },
  "BASILIC": {
    "prev": 179.05,
    "hi52": 509.8,
    "lo52": 170.0
  },
  "BASML": {
    "prev": 20.01,
    "hi52": 38.2,
    "lo52": 18.35
  },
  "BATAINDIA": {
    "prev": 663.3,
    "hi52": 1300.7,
    "lo52": 622.05
  },
  "BAWEJA": {
    "prev": 29.75,
    "hi52": 75.7,
    "lo52": 27.05
  },
  "BAYERCROP": {
    "prev": 4717.5,
    "hi52": 6511.0,
    "lo52": 4273.0
  },
  "BBL": {
    "prev": 2310.5,
    "hi52": 3475.0,
    "lo52": 2159.0
  },
  "BBOX": {
    "prev": 504.35,
    "hi52": 613.8,
    "lo52": 320.85
  },
  "BBTC": {
    "prev": 1504.6,
    "hi52": 2155.0,
    "lo52": 1380.0
  },
  "BBTCL": {
    "prev": 170.0,
    "hi52": 229.35,
    "lo52": 120.6
  },
  "BCLIND": {
    "prev": 27.1,
    "hi52": 49.3,
    "lo52": 25.53
  },
  "BCONCEPTS": {
    "prev": 228.3,
    "hi52": 449.0,
    "lo52": 212.0
  },
  "BDL": {
    "prev": 1249.9,
    "hi52": 2096.6,
    "lo52": 1141.2
  },
  "BEACON": {
    "prev": 76.15,
    "hi52": 102.5,
    "lo52": 50.0
  },
  "BEARDSELL": {
    "prev": 23.53,
    "hi52": 38.6,
    "lo52": 22.51
  },
  "BECTORFOOD": {
    "prev": 182.84,
    "hi52": 1654.0,
    "lo52": 174.38
  },
  "BELLACASA": {
    "prev": 259.4,
    "hi52": 497.35,
    "lo52": 246.65
  },
  "BELRISE": {
    "prev": 189.0,
    "hi52": 200.9,
    "lo52": 89.15
  },
  "BEML": {
    "prev": 1514.6,
    "hi52": 4874.8,
    "lo52": 1385.0
  },
  "BEPL": {
    "prev": 86.53,
    "hi52": 123.8,
    "lo52": 74.2
  },
  "BERGEPAINT": {
    "prev": 416.7,
    "hi52": 605.0,
    "lo52": 391.1
  },
  "BETA": {
    "prev": 1106.1,
    "hi52": 2010.0,
    "lo52": 990.1
  },
  "BEWLTD": {
    "prev": 82.0,
    "hi52": 239.8,
    "lo52": 77.7
  },
  "BFINVEST": {
    "prev": 370.9,
    "hi52": 562.45,
    "lo52": 343.95
  },
  "BHADORA": {
    "prev": 62.0,
    "hi52": 128.85,
    "lo52": 56.5
  },
  "BHAGCHEM": {
    "prev": 180.43,
    "hi52": 331.0,
    "lo52": 173.45
  },
  "BHAGERIA": {
    "prev": 141.43,
    "hi52": 244.6,
    "lo52": 132.0
  },
  "BHAGYANGR": {
    "prev": 145.83,
    "hi52": 193.0,
    "lo52": 65.0
  },
  "BHANDARI": {
    "prev": 2.55,
    "hi52": 6.63,
    "lo52": 2.36
  },
  "BHARATCOAL": {
    "prev": 33.9,
    "hi52": 45.09,
    "lo52": 31.16
  },
  "BHARATFORG": {
    "prev": 1711.5,
    "hi52": 1935.5,
    "lo52": 919.1
  },
  "BHARATGEAR": {
    "prev": 98.1,
    "hi52": 154.2,
    "lo52": 64.8
  },
  "BHARATRAS": {
    "prev": 1275.8,
    "hi52": 12000.0,
    "lo52": 1229.1
  },
  "BHARATSE": {
    "prev": 159.04,
    "hi52": 239.45,
    "lo52": 69.84
  },
  "BHARATWIRE": {
    "prev": 164.25,
    "hi52": 248.7,
    "lo52": 150.15
  },
  "BHARTIHEXA": {
    "prev": 1584.1,
    "hi52": 2052.9,
    "lo52": 1260.0
  },
  "BHEL": {
    "prev": 262.05,
    "hi52": 305.9,
    "lo52": 193.5
  },
  "BIGBLOC": {
    "prev": 50.12,
    "hi52": 80.0,
    "lo52": 46.0
  },
  "BIKAJI": {
    "prev": 629.7,
    "hi52": 818.7,
    "lo52": 592.55
  },
  "BIL": {
    "prev": 706.25,
    "hi52": 984.75,
    "lo52": 444.0
  },
  "BIOCON": {
    "prev": 380.95,
    "hi52": 424.95,
    "lo52": 299.0
  },
  "BIOFILCHEM": {
    "prev": 29.93,
    "hi52": 57.19,
    "lo52": 28.35
  },
  "BIOPOL": {
    "prev": 99.65,
    "hi52": 111.0,
    "lo52": 84.75
  },
  "BIRET": {
    "prev": 327.24,
    "hi52": 375.69,
    "lo52": 280.05
  },
  "BIRLACABLE": {
    "prev": 128.52,
    "hi52": 215.2,
    "lo52": 113.26
  },
  "BIRLACORPN": {
    "prev": 815.1,
    "hi52": 1535.3,
    "lo52": 769.6
  },
  "BIRLAMONEY": {
    "prev": 111.95,
    "hi52": 208.71,
    "lo52": 102.2
  },
  "BIRLANU": {
    "prev": 1240.9,
    "hi52": 2428.3,
    "lo52": 1194.2
  },
  "BLACKBUCK": {
    "prev": 615.8,
    "hi52": 748.0,
    "lo52": 373.2
  },
  "BLAL": {
    "prev": 164.26,
    "hi52": 235.0,
    "lo52": 160.26
  },
  "BLISSGVS": {
    "prev": 210.23,
    "hi52": 243.9,
    "lo52": 108.12
  },
  "BLKASHYAP": {
    "prev": 49.4,
    "hi52": 80.01,
    "lo52": 45.0
  },
  "BLS": {
    "prev": 240.6,
    "hi52": 428.6,
    "lo52": 218.9
  },
  "BLSE": {
    "prev": 144.35,
    "hi52": 232.5,
    "lo52": 124.3
  },
  "BLUECOAST": {
    "prev": 20.01,
    "hi52": 86.31,
    "lo52": 19.0
  },
  "BLUEDART": {
    "prev": 5101.5,
    "hi52": 7225.0,
    "lo52": 4900.0
  },
  "BLUEJET": {
    "prev": 357.95,
    "hi52": 1027.8,
    "lo52": 335.8
  },
  "BLUESTARCO": {
    "prev": 1708.6,
    "hi52": 2269.8,
    "lo52": 1521.0
  },
  "BLUESTONE": {
    "prev": 543.8,
    "hi52": 793.0,
    "lo52": 399.8
  },
  "BLUEWATER": {
    "prev": 147.0,
    "hi52": 187.2,
    "lo52": 125.4
  },
  "BLUSPRING": {
    "prev": 45.67,
    "hi52": 100.88,
    "lo52": 43.98
  },
  "BMETRICS": {
    "prev": 40.9,
    "hi52": 56.9,
    "lo52": 34.1
  },
  "BMWVENTLTD": {
    "prev": 58.24,
    "hi52": 78.0,
    "lo52": 50.02
  },
  "BODALCHEM": {
    "prev": 54.65,
    "hi52": 81.49,
    "lo52": 42.81
  },
  "BOMDYEING": {
    "prev": 103.16,
    "hi52": 196.75,
    "lo52": 94.6
  },
  "BOROLTD": {
    "prev": 222.01,
    "hi52": 397.95,
    "lo52": 213.73
  },
  "BORORENEW": {
    "prev": 420.9,
    "hi52": 721.0,
    "lo52": 396.9
  },
  "BOROSCI": {
    "prev": 104.52,
    "hi52": 190.79,
    "lo52": 99.21
  },
  "BOSCH-HCIL": {
    "prev": 1281.1,
    "hi52": 1890.0,
    "lo52": 1220.2
  },
  "BPL": {
    "prev": 47.1,
    "hi52": 100.3,
    "lo52": 44.16
  },
  "BRACEPORT": {
    "prev": 59.5,
    "hi52": 111.0,
    "lo52": 58.0
  },
  "BRANDMAN": {
    "prev": 138.2,
    "hi52": 243.8,
    "lo52": 125.0
  },
  "BRIGADE": {
    "prev": 643.9,
    "hi52": 1332.0,
    "lo52": 601.0
  },
  "BRIGHOTEL": {
    "prev": 59.78,
    "hi52": 91.77,
    "lo52": 55.4
  },
  "BRNL": {
    "prev": 18.83,
    "hi52": 35.34,
    "lo52": 17.21
  },
  "BROOKS": {
    "prev": 52.64,
    "hi52": 164.02,
    "lo52": 45.27
  },
  "BSE": {
    "prev": 2806.1,
    "hi52": 7588.0,
    "lo52": 2021.5
  },
  "BSHSL": {
    "prev": 78.43,
    "hi52": 158.34,
    "lo52": 75.65
  },
  "BSL": {
    "prev": 123.36,
    "hi52": 208.0,
    "lo52": 111.9
  },
  "BSOFT": {
    "prev": 358.05,
    "hi52": 474.0,
    "lo52": 331.0
  },
  "BTML": {
    "prev": 6.47,
    "hi52": 10.5,
    "lo52": 5.62
  },
  "BUILDPRO": {
    "prev": 945.65,
    "hi52": 1050.2,
    "lo52": 636.0
  },
  "BULKCORP": {
    "prev": 48.05,
    "hi52": 94.6,
    "lo52": 47.5
  },
  "BUTTERFLY": {
    "prev": 640.85,
    "hi52": 829.9,
    "lo52": 561.3
  },
  "BVCL": {
    "prev": 39.44,
    "hi52": 69.99,
    "lo52": 34.06
  },
  "BYKE": {
    "prev": 32.88,
    "hi52": 100.8,
    "lo52": 27.76
  },
  "C2C": {
    "prev": 352.75,
    "hi52": 888.0,
    "lo52": 280.0
  },
  "CALSOFT": {
    "prev": 12.68,
    "hi52": 21.42,
    "lo52": 9.96
  },
  "CAMLINFINE": {
    "prev": 118.71,
    "hi52": 333.3,
    "lo52": 110.0
  },
  "CAMPUS": {
    "prev": 225.0,
    "hi52": 304.4,
    "lo52": 210.0
  },
  "CAMS": {
    "prev": 640.7,
    "hi52": 4375.0,
    "lo52": 611.4
  },
  "CANARYS": {
    "prev": 18.15,
    "hi52": 36.9,
    "lo52": 16.75
  },
  "CANFINHOME": {
    "prev": 820.3,
    "hi52": 971.5,
    "lo52": 615.0
  },
  "CANHLIFE": {
    "prev": 145.66,
    "hi52": 159.0,
    "lo52": 106.0
  },
  "CANTABIL": {
    "prev": 237.05,
    "hi52": 321.5,
    "lo52": 213.41
  },
  "CAPACITE": {
    "prev": 223.88,
    "hi52": 396.45,
    "lo52": 180.0
  },
  "CAPILLARY": {
    "prev": 507.4,
    "hi52": 798.95,
    "lo52": 471.5
  },
  "CAPINVIT": {
    "prev": 68.16,
    "hi52": 94.48,
    "lo52": 67.15
  },
  "CAPITALSFB": {
    "prev": 240.05,
    "hi52": 330.65,
    "lo52": 222.8
  },
  "CAPLIPOINT": {
    "prev": 1604.1,
    "hi52": 2395.0,
    "lo52": 1555.2
  },
  "CARBORUNIV": {
    "prev": 756.95,
    "hi52": 1128.05,
    "lo52": 735.2
  },
  "CARERATING": {
    "prev": 1537.7,
    "hi52": 1964.0,
    "lo52": 1052.0
  },
  "CARRARO": {
    "prev": 441.95,
    "hi52": 614.5,
    "lo52": 253.15
  },
  "CARTRADE": {
    "prev": 1696.9,
    "hi52": 3290.5,
    "lo52": 1362.5
  },
  "CARYSIL": {
    "prev": 781.65,
    "hi52": 1071.9,
    "lo52": 512.0
  },
  "CASTROLIND": {
    "prev": 187.34,
    "hi52": 232.43,
    "lo52": 177.1
  },
  "CCAVENUE": {
    "prev": 15.2,
    "hi52": 15.2,
    "lo52": 13.1
  },
  "CCCL": {
    "prev": 14.97,
    "hi52": 28.87,
    "lo52": 12.66
  },
  "CCHHL": {
    "prev": 12.24,
    "hi52": 20.99,
    "lo52": 11.05
  },
  "CCL": {
    "prev": 1087.6,
    "hi52": 1105.0,
    "lo52": 525.0
  },
  "CDSL": {
    "prev": 1190.8,
    "hi52": 1828.9,
    "lo52": 1079.9
  },
  "CEATLTD": {
    "prev": 3537.5,
    "hi52": 4438.0,
    "lo52": 2504.0
  },
  "CEDAAR": {
    "prev": 22.0,
    "hi52": 136.3,
    "lo52": 20.9
  },
  "CEIGALL": {
    "prev": 270.5,
    "hi52": 307.9,
    "lo52": 222.61
  },
  "CEINSYS": {
    "prev": 938.7,
    "hi52": 1067.85,
    "lo52": 855.0
  },
  "CELEBRITY": {
    "prev": 7.25,
    "hi52": 15.35,
    "lo52": 6.6
  },
  "CELLECOR": {
    "prev": 24.1,
    "hi52": 68.8,
    "lo52": 22.8
  },
  "CELLO": {
    "prev": 423.45,
    "hi52": 673.8,
    "lo52": 384.3
  },
  "CELLPOINT": {
    "prev": 14.3,
    "hi52": 21.15,
    "lo52": 13.3
  },
  "CEMPRO": {
    "prev": 539.6,
    "hi52": 944.0,
    "lo52": 476.6
  },
  "CENTENKA": {
    "prev": 417.15,
    "hi52": 564.55,
    "lo52": 388.2
  },
  "CENTEXT": {
    "prev": 18.69,
    "hi52": 34.75,
    "lo52": 16.26
  },
  "CENTRALBK": {
    "prev": 34.17,
    "hi52": 47.3,
    "lo52": 32.4
  },
  "CENTRUM": {
    "prev": 25.94,
    "hi52": 41.9,
    "lo52": 19.66
  },
  "CENTUM": {
    "prev": 2987.8,
    "hi52": 3066.6,
    "lo52": 1368.6
  },
  "CENTURYPLY": {
    "prev": 650.9,
    "hi52": 859.0,
    "lo52": 618.5
  },
  "CERA": {
    "prev": 4753.7,
    "hi52": 7275.0,
    "lo52": 4461.1
  },
  "CESC": {
    "prev": 152.74,
    "hi52": 185.26,
    "lo52": 138.12
  },
  "CEWATER": {
    "prev": 282.95,
    "hi52": 659.9,
    "lo52": 235.0
  },
  "CGCL": {
    "prev": 170.08,
    "hi52": 231.35,
    "lo52": 150.51
  },
  "CGRAPHICS": {
    "prev": 145.0,
    "hi52": 259.0,
    "lo52": 134.4
  },
  "CHALET": {
    "prev": 723.5,
    "hi52": 1082.0,
    "lo52": 698.4
  },
  "CHAMBLFERT": {
    "prev": 428.55,
    "hi52": 742.2,
    "lo52": 399.75
  },
  "CHAMUNDA": {
    "prev": 42.0,
    "hi52": 59.0,
    "lo52": 40.0
  },
  "CHANDAN": {
    "prev": 250.0,
    "hi52": 358.0,
    "lo52": 150.3
  },
  "CHAVDA": {
    "prev": 96.0,
    "hi52": 156.95,
    "lo52": 82.1
  },
  "CHEMBOND": {
    "prev": 126.32,
    "hi52": 341.8,
    "lo52": 118.95
  },
  "CHEMBONDCH": {
    "prev": 127.99,
    "hi52": 244.99,
    "lo52": 118.0
  },
  "CHEMCON": {
    "prev": 146.56,
    "hi52": 295.0,
    "lo52": 137.69
  },
  "CHEMFAB": {
    "prev": 357.2,
    "hi52": 905.55,
    "lo52": 333.1
  },
  "CHEMPLASTS": {
    "prev": 280.33,
    "hi52": 491.9,
    "lo52": 211.03
  },
  "CHENNPETRO": {
    "prev": 1064.75,
    "hi52": 1103.0,
    "lo52": 527.0
  },
  "CHETANA": {
    "prev": 34.45,
    "hi52": 129.0,
    "lo52": 31.1
  },
  "CHEVIOT": {
    "prev": 985.6,
    "hi52": 1300.0,
    "lo52": 945.1
  },
  "CHOICEIN": {
    "prev": 614.9,
    "hi52": 860.5,
    "lo52": 476.5
  },
  "CHOLAHLDNG": {
    "prev": 1407.6,
    "hi52": 2231.6,
    "lo52": 1305.0
  },
  "CIEINDIA": {
    "prev": 461.15,
    "hi52": 526.0,
    "lo52": 356.75
  },
  "CIFL": {
    "prev": 25.63,
    "hi52": 44.5,
    "lo52": 23.21
  },
  "CIGNITITEC": {
    "prev": 1068.3,
    "hi52": 1929.5,
    "lo52": 996.5
  },
  "CINELINE": {
    "prev": 88.01,
    "hi52": 104.99,
    "lo52": 76.11
  },
  "CINEVISTA": {
    "prev": 15.24,
    "hi52": 24.88,
    "lo52": 13.25
  },
  "CLASSICEIL": {
    "prev": 46.5,
    "hi52": 113.9,
    "lo52": 41.0
  },
  "CLEAN": {
    "prev": 698.6,
    "hi52": 1600.0,
    "lo52": 673.5
  },
  "CLEANMAX": {
    "prev": 889.9,
    "hi52": 960.0,
    "lo52": 768.0
  },
  "CLSEL": {
    "prev": 233.0,
    "hi52": 395.75,
    "lo52": 220.5
  },
  "CLSL": {
    "prev": 45.0,
    "hi52": 62.8,
    "lo52": 39.45
  },
  "CMNL": {
    "prev": 100.0,
    "hi52": 183.9,
    "lo52": 90.0
  },
  "CMRSL": {
    "prev": 61.5,
    "hi52": 96.75,
    "lo52": 60.95
  },
  "CMSINFO": {
    "prev": 283.95,
    "hi52": 541.15,
    "lo52": 270.0
  },
  "CNL": {
    "prev": 578.9,
    "hi52": 825.0,
    "lo52": 530.05
  },
  "COASTCORP": {
    "prev": 43.27,
    "hi52": 53.99,
    "lo52": 30.01
  },
  "COCHINSHIP": {
    "prev": 1341.5,
    "hi52": 2545.0,
    "lo52": 1224.55
  },
  "COFFEEDAY": {
    "prev": 23.83,
    "hi52": 51.46,
    "lo52": 22.14
  },
  "COFORGE": {
    "prev": 1089.3,
    "hi52": 8699.0,
    "lo52": 1008.1
  },
  "COHANCE": {
    "prev": 299.25,
    "hi52": 1250.0,
    "lo52": 266.7
  },
  "COLPAL": {
    "prev": 1896.1,
    "hi52": 2747.4,
    "lo52": 1838.1
  },
  "COMMITTED": {
    "prev": 257.0,
    "hi52": 274.05,
    "lo52": 174.25
  },
  "COMPUSOFT": {
    "prev": 13.01,
    "hi52": 24.32,
    "lo52": 12.0
  },
  "COMSYN": {
    "prev": 153.41,
    "hi52": 199.9,
    "lo52": 71.11
  },
  "CONCOR": {
    "prev": 447.3,
    "hi52": 815.05,
    "lo52": 421.45
  },
  "CONCORDBIO": {
    "prev": 1092.3,
    "hi52": 2150.4,
    "lo52": 1020.1
  },
  "CONFIPET": {
    "prev": 36.28,
    "hi52": 63.69,
    "lo52": 28.06
  },
  "CONNPLEX": {
    "prev": 238.15,
    "hi52": 293.0,
    "lo52": 177.0
  },
  "CONTI": {
    "prev": 14.4,
    "hi52": 31.95,
    "lo52": 13.7
  },
  "CONTROLPR": {
    "prev": 622.55,
    "hi52": 917.5,
    "lo52": 547.0
  },
  "COOLCAPS": {
    "prev": 26.1,
    "hi52": 876.95,
    "lo52": 22.3
  },
  "CORALFINAC": {
    "prev": 30.74,
    "hi52": 52.49,
    "lo52": 27.61
  },
  "CORDSCABLE": {
    "prev": 148.37,
    "hi52": 222.0,
    "lo52": 137.2
  },
  "COROMANDEL": {
    "prev": 1911.0,
    "hi52": 2718.9,
    "lo52": 1818.1
  },
  "CORONA": {
    "prev": 1650.5,
    "hi52": 1699.0,
    "lo52": 1336.6
  },
  "COSMOFIRST": {
    "prev": 624.55,
    "hi52": 1307.2,
    "lo52": 525.7
  },
  "COUNCODOS": {
    "prev": 4.18,
    "hi52": 11.92,
    "lo52": 3.9
  },
  "CPCAP": {
    "prev": 83.4,
    "hi52": 260.0,
    "lo52": 80.2
  },
  "CPEDU": {
    "prev": 164.33,
    "hi52": 338.75,
    "lo52": 154.02
  },
  "CPPLUS": {
    "prev": 1719.3,
    "hi52": 1759.0,
    "lo52": 1015.0
  },
  "CRAFTSMAN": {
    "prev": 6912.0,
    "hi52": 8220.0,
    "lo52": 3700.0
  },
  "CRAMC": {
    "prev": 237.3,
    "hi52": 353.4,
    "lo52": 214.2
  },
  "CRAYONS": {
    "prev": 30.75,
    "hi52": 70.0,
    "lo52": 28.3
  },
  "CREATIVEYE": {
    "prev": 6.4,
    "hi52": 12.19,
    "lo52": 5.35
  },
  "CREDITACC": {
    "prev": 1156.9,
    "hi52": 1496.7,
    "lo52": 917.0
  },
  "CREST": {
    "prev": 330.25,
    "hi52": 430.1,
    "lo52": 300.15
  },
  "CRISIL": {
    "prev": 4000.4,
    "hi52": 6139.0,
    "lo52": 3874.9
  },
  "CRIZAC": {
    "prev": 202.47,
    "hi52": 387.95,
    "lo52": 183.15
  },
  "CROMPTON": {
    "prev": 243.15,
    "hi52": 367.5,
    "lo52": 217.4
  },
  "CROWN": {
    "prev": 116.63,
    "hi52": 221.8,
    "lo52": 108.45
  },
  "CSBBANK": {
    "prev": 361.3,
    "hi52": 574.4,
    "lo52": 287.55
  },
  "CSLFINANCE": {
    "prev": 246.95,
    "hi52": 380.2,
    "lo52": 227.45
  },
  "CSSL": {
    "prev": 114.95,
    "hi52": 164.0,
    "lo52": 96.75
  },
  "CTE": {
    "prev": 23.47,
    "hi52": 59.93,
    "lo52": 21.2
  },
  "CUB": {
    "prev": 241.35,
    "hi52": 324.1,
    "lo52": 142.91
  },
  "CUBEINVIT": {
    "prev": 146.0,
    "hi52": 146.0,
    "lo52": 120.5
  },
  "CUBEXTUB": {
    "prev": 89.05,
    "hi52": 143.69,
    "lo52": 67.11
  },
  "CUDML": {
    "prev": 96.0,
    "hi52": 166.5,
    "lo52": 90.7
  },
  "CUMMINSIND": {
    "prev": 4615.3,
    "hi52": 4987.0,
    "lo52": 2580.0
  },
  "CUPID": {
    "prev": 79.6,
    "hi52": 526.95,
    "lo52": 55.75
  },
  "CURIS": {
    "prev": 91.4,
    "hi52": 147.9,
    "lo52": 83.6
  },
  "CURRENT": {
    "prev": 112.0,
    "hi52": 163.0,
    "lo52": 106.05
  },
  "CYBERMEDIA": {
    "prev": 13.12,
    "hi52": 22.81,
    "lo52": 11.66
  },
  "CYBERTECH": {
    "prev": 110.12,
    "hi52": 274.8,
    "lo52": 95.3
  },
  "CYIENT": {
    "prev": 825.35,
    "hi52": 1376.0,
    "lo52": 788.25
  },
  "CYIENTDLM": {
    "prev": 303.8,
    "hi52": 540.0,
    "lo52": 276.15
  },
  "DABUR": {
    "prev": 430.7,
    "hi52": 577.0,
    "lo52": 416.05
  },
  "DALBHARAT": {
    "prev": 1841.0,
    "hi52": 2496.3,
    "lo52": 1700.0
  },
  "DALMIASUG": {
    "prev": 320.6,
    "hi52": 349.0,
    "lo52": 261.4
  },
  "DAMCAPITAL": {
    "prev": 129.85,
    "hi52": 303.5,
    "lo52": 119.22
  },
  "DAMODARIND": {
    "prev": 23.99,
    "hi52": 41.49,
    "lo52": 21.8
  },
  "DANGEE": {
    "prev": 2.77,
    "hi52": 6.34,
    "lo52": 2.53
  },
  "DANISH": {
    "prev": 613.5,
    "hi52": 1189.0,
    "lo52": 582.0
  },
  "DATAMATICS": {
    "prev": 686.35,
    "hi52": 1120.0,
    "lo52": 522.0
  },
  "DATAPATTNS": {
    "prev": 3230.8,
    "hi52": 3609.5,
    "lo52": 1392.25
  },
  "DAVANGERE": {
    "prev": 4.05,
    "hi52": 5.5,
    "lo52": 3.03
  },
  "DBCORP": {
    "prev": 207.61,
    "hi52": 291.85,
    "lo52": 194.7
  },
  "DBEIL": {
    "prev": 73.08,
    "hi52": 185.6,
    "lo52": 66.0
  },
  "DBL": {
    "prev": 411.4,
    "hi52": 585.0,
    "lo52": 376.0
  },
  "DBOL": {
    "prev": 98.9,
    "hi52": 115.25,
    "lo52": 65.1
  },
  "DBREALTY": {
    "prev": 98.07,
    "hi52": 209.4,
    "lo52": 90.11
  },
  "DBSTOCKBRO": {
    "prev": 25.04,
    "hi52": 36.33,
    "lo52": 23.15
  },
  "DCAL": {
    "prev": 158.05,
    "hi52": 321.95,
    "lo52": 141.1
  },
  "DCBBANK": {
    "prev": 169.82,
    "hi52": 203.7,
    "lo52": 110.1
  },
  "DCCL": {
    "prev": 36.0,
    "hi52": 66.0,
    "lo52": 33.0
  },
  "DCG": {
    "prev": 55.2,
    "hi52": 81.0,
    "lo52": 52.4
  },
  "DCI": {
    "prev": 282.5,
    "hi52": 339.0,
    "lo52": 201.35
  },
  "DCM": {
    "prev": 61.24,
    "hi52": 136.0,
    "lo52": 55.12
  },
  "DCMNVL": {
    "prev": 111.55,
    "hi52": 203.8,
    "lo52": 105.25
  },
  "DCMSHRIRAM": {
    "prev": 1041.0,
    "hi52": 1502.3,
    "lo52": 945.1
  },
  "DCMSRIND": {
    "prev": 35.32,
    "hi52": 63.1,
    "lo52": 32.25
  },
  "DCW": {
    "prev": 40.17,
    "hi52": 90.36,
    "lo52": 37.26
  },
  "DCXINDIA": {
    "prev": 163.72,
    "hi52": 363.75,
    "lo52": 153.6
  },
  "DDEVPLSTIK": {
    "prev": 229.5,
    "hi52": 360.0,
    "lo52": 214.65
  },
  "DECCANCE": {
    "prev": 651.75,
    "hi52": 1164.9,
    "lo52": 600.1
  },
  "DECCANTRAN": {
    "prev": 20.25,
    "hi52": 56.1,
    "lo52": 18.1
  },
  "DEEDEV": {
    "prev": 267.45,
    "hi52": 336.2,
    "lo52": 183.0
  },
  "DEEM": {
    "prev": 35.8,
    "hi52": 72.6,
    "lo52": 32.0
  },
  "DEEPAKFERT": {
    "prev": 908.55,
    "hi52": 1778.6,
    "lo52": 866.4
  },
  "DEEPAKNTR": {
    "prev": 1390.3,
    "hi52": 2174.0,
    "lo52": 1312.0
  },
  "DEEPINDS": {
    "prev": 409.75,
    "hi52": 578.0,
    "lo52": 330.0
  },
  "DELAPLEX": {
    "prev": 94.5,
    "hi52": 194.85,
    "lo52": 83.35
  },
  "DELHIVERY": {
    "prev": 422.85,
    "hi52": 490.0,
    "lo52": 238.5
  },
  "DELPHIFX": {
    "prev": 9.88,
    "hi52": 264.0,
    "lo52": 8.6
  },
  "DELTACORP": {
    "prev": 53.89,
    "hi52": 98.8,
    "lo52": 50.1
  },
  "DELTAMAGNT": {
    "prev": 53.43,
    "hi52": 115.99,
    "lo52": 50.0
  },
  "DELTIC": {
    "prev": 35.5,
    "hi52": 83.95,
    "lo52": 33.45
  },
  "DEN": {
    "prev": 25.95,
    "hi52": 42.6,
    "lo52": 25.07
  },
  "DENORA": {
    "prev": 698.25,
    "hi52": 994.5,
    "lo52": 559.0
  },
  "DENTA": {
    "prev": 241.6,
    "hi52": 479.6,
    "lo52": 222.0
  },
  "DENTALKART": {
    "prev": 398.25,
    "hi52": 704.0,
    "lo52": 373.05
  },
  "DEVIT": {
    "prev": 27.58,
    "hi52": 125.9,
    "lo52": 22.25
  },
  "DEVX": {
    "prev": 37.77,
    "hi52": 64.05,
    "lo52": 34.0
  },
  "DEVYANI": {
    "prev": 104.17,
    "hi52": 191.0,
    "lo52": 98.31
  },
  "DGCONTENT": {
    "prev": 23.97,
    "hi52": 59.28,
    "lo52": 22.31
  },
  "DHAMPURSUG": {
    "prev": 126.66,
    "hi52": 161.96,
    "lo52": 110.0
  },
  "DHANBANK": {
    "prev": 22.33,
    "hi52": 33.5,
    "lo52": 20.8
  },
  "DHANLAXMI": {
    "prev": 24.5,
    "hi52": 66.0,
    "lo52": 21.35
  },
  "DHANUKA": {
    "prev": 962.1,
    "hi52": 1975.0,
    "lo52": 927.0
  },
  "DHARARAIL": {
    "prev": 102.15,
    "hi52": 157.5,
    "lo52": 98.3
  },
  "DHARMAJ": {
    "prev": 240.31,
    "hi52": 386.5,
    "lo52": 175.0
  },
  "DHRUV": {
    "prev": 30.04,
    "hi52": 79.5,
    "lo52": 22.22
  },
  "DHTL": {
    "prev": 40.9,
    "hi52": 125.2,
    "lo52": 36.9
  },
  "DHUNINV": {
    "prev": 766.95,
    "hi52": 1724.9,
    "lo52": 737.0
  },
  "DIACABS": {
    "prev": 127.15,
    "hi52": 183.5,
    "lo52": 86.2
  },
  "DIAMINESQ": {
    "prev": 222.08,
    "hi52": 457.95,
    "lo52": 213.0
  },
  "DIAMONDYD": {
    "prev": 908.0,
    "hi52": 1295.7,
    "lo52": 860.7
  },
  "DICIND": {
    "prev": 497.75,
    "hi52": 742.6,
    "lo52": 450.5
  },
  "DIFFNKG": {
    "prev": 254.9,
    "hi52": 418.2,
    "lo52": 216.8
  },
  "DIGIDRIVE": {
    "prev": 20.08,
    "hi52": 36.85,
    "lo52": 19.01
  },
  "DIGIKORE": {
    "prev": 75.6,
    "hi52": 205.95,
    "lo52": 57.1
  },
  "DIGISPICE": {
    "prev": 16.92,
    "hi52": 35.5,
    "lo52": 16.3
  },
  "DIGITIDE": {
    "prev": 72.86,
    "hi52": 279.69,
    "lo52": 69.9
  },
  "DIGJAMLMTD": {
    "prev": 38.63,
    "hi52": 59.75,
    "lo52": 32.83
  },
  "DIRL": {
    "prev": 9.3,
    "hi52": 34.0,
    "lo52": 8.9
  },
  "DISHTV": {
    "prev": 2.24,
    "hi52": 6.65,
    "lo52": 2.09
  },
  "DIVGIITTS": {
    "prev": 705.0,
    "hi52": 802.9,
    "lo52": 410.1
  },
  "DIVYADHAN": {
    "prev": 20.25,
    "hi52": 62.4,
    "lo52": 18.25
  },
  "DIXON": {
    "prev": 10342.0,
    "hi52": 18471.0,
    "lo52": 9630.0
  },
  "DLINKINDIA": {
    "prev": 394.1,
    "hi52": 589.55,
    "lo52": 358.15
  },
  "DMCC": {
    "prev": 219.2,
    "hi52": 350.0,
    "lo52": 197.0
  },
  "DNAMEDIA": {
    "prev": 3.29,
    "hi52": 5.95,
    "lo52": 2.97
  },
  "DODLA": {
    "prev": 1014.3,
    "hi52": 1525.0,
    "lo52": 964.1
  },
  "DOLATALGO": {
    "prev": 71.32,
    "hi52": 111.05,
    "lo52": 68.12
  },
  "DOLLAR": {
    "prev": 260.05,
    "hi52": 429.9,
    "lo52": 233.55
  },
  "DOLLEX": {
    "prev": 30.65,
    "hi52": 44.25,
    "lo52": 28.25
  },
  "DOLPHIN": {
    "prev": 384.7,
    "hi52": 501.95,
    "lo52": 269.14
  },
  "DOMS": {
    "prev": 2278.8,
    "hi52": 3064.6,
    "lo52": 2023.9
  },
  "DONEAR": {
    "prev": 86.0,
    "hi52": 129.8,
    "lo52": 77.6
  },
  "DPABHUSHAN": {
    "prev": 1025.5,
    "hi52": 1729.6,
    "lo52": 949.6
  },
  "DPEL": {
    "prev": 414.1,
    "hi52": 414.9,
    "lo52": 123.0
  },
  "DPSCLTD": {
    "prev": 7.96,
    "hi52": 15.48,
    "lo52": 7.22
  },
  "DPWIRES": {
    "prev": 143.09,
    "hi52": 306.95,
    "lo52": 135.0
  },
  "DRCSYSTEMS": {
    "prev": 13.2,
    "hi52": 31.0,
    "lo52": 11.5
  },
  "DREAMFOLKS": {
    "prev": 70.61,
    "hi52": 304.85,
    "lo52": 64.8
  },
  "DREDGECORP": {
    "prev": 878.15,
    "hi52": 1245.0,
    "lo52": 495.0
  },
  "DRONE": {
    "prev": 45.45,
    "hi52": 138.05,
    "lo52": 39.0
  },
  "DSFCL": {
    "prev": 21.96,
    "hi52": 52.5,
    "lo52": 20.85
  },
  "DSSL": {
    "prev": 897.6,
    "hi52": 1215.0,
    "lo52": 820.55
  },
  "DTIL": {
    "prev": 127.09,
    "hi52": 230.05,
    "lo52": 120.5
  },
  "DTL": {
    "prev": 104.75,
    "hi52": 178.0,
    "lo52": 92.0
  },
  "DUCOL": {
    "prev": 110.0,
    "hi52": 209.5,
    "lo52": 100.0
  },
  "DUCON": {
    "prev": 2.93,
    "hi52": 7.18,
    "lo52": 2.67
  },
  "DUGLOBAL": {
    "prev": 36.95,
    "hi52": 61.9,
    "lo52": 26.5
  },
  "DURLAX": {
    "prev": 49.65,
    "hi52": 58.0,
    "lo52": 30.55
  },
  "DVL": {
    "prev": 209.71,
    "hi52": 398.85,
    "lo52": 202.2
  },
  "DWARKESH": {
    "prev": 39.68,
    "hi52": 52.6,
    "lo52": 32.13
  },
  "DYCL": {
    "prev": 269.45,
    "hi52": 1036.0,
    "lo52": 250.0
  },
  "DYNAMATECH": {
    "prev": 9701.0,
    "hi52": 10950.0,
    "lo52": 5444.15
  },
  "DYNAMIC": {
    "prev": 94.95,
    "hi52": 187.2,
    "lo52": 85.4
  },
  "DYNPRO": {
    "prev": 220.13,
    "hi52": 415.8,
    "lo52": 200.6
  },
  "E2ERAIL": {
    "prev": 181.5,
    "hi52": 347.1,
    "lo52": 171.0
  },
  "EASEMYTRIP": {
    "prev": 6.85,
    "hi52": 14.02,
    "lo52": 6.12
  },
  "EBGNG": {
    "prev": 380.35,
    "hi52": 401.7,
    "lo52": 239.0
  },
  "ECLERX": {
    "prev": 1469.0,
    "hi52": 4995.0,
    "lo52": 1400.0
  },
  "ECOLINE": {
    "prev": 122.95,
    "hi52": 143.9,
    "lo52": 115.0
  },
  "ECOSMOBLTY": {
    "prev": 111.86,
    "hi52": 358.4,
    "lo52": 105.05
  },
  "EDELWEISS": {
    "prev": 104.7,
    "hi52": 130.7,
    "lo52": 73.5
  },
  "EEPL": {
    "prev": 128.15,
    "hi52": 267.9,
    "lo52": 115.0
  },
  "EFACTOR": {
    "prev": 181.75,
    "hi52": 348.0,
    "lo52": 136.0
  },
  "EFCIL": {
    "prev": 195.85,
    "hi52": 357.0,
    "lo52": 181.98
  },
  "EFFWA": {
    "prev": 204.75,
    "hi52": 270.0,
    "lo52": 160.15
  },
  "EFORCE": {
    "prev": 20.2,
    "hi52": 54.5,
    "lo52": 18.15
  },
  "EIDPARRY": {
    "prev": 789.05,
    "hi52": 1246.8,
    "lo52": 696.65
  },
  "EIEL": {
    "prev": 147.86,
    "hi52": 306.4,
    "lo52": 134.71
  },
  "EIFFL": {
    "prev": 231.92,
    "hi52": 305.9,
    "lo52": 170.76
  },
  "EIHAHOTELS": {
    "prev": 301.7,
    "hi52": 434.9,
    "lo52": 279.1
  },
  "EIHOTEL": {
    "prev": 309.5,
    "hi52": 434.8,
    "lo52": 288.2
  },
  "EIMCOELECO": {
    "prev": 1565.7,
    "hi52": 3019.9,
    "lo52": 1301.0
  },
  "EKC": {
    "prev": 104.09,
    "hi52": 156.79,
    "lo52": 99.72
  },
  "ELDEHSG": {
    "prev": 811.65,
    "hi52": 1044.1,
    "lo52": 658.1
  },
  "ELECON": {
    "prev": 389.85,
    "hi52": 716.25,
    "lo52": 361.5
  },
  "ELECTCAST": {
    "prev": 74.83,
    "hi52": 138.75,
    "lo52": 60.15
  },
  "ELECTHERM": {
    "prev": 657.65,
    "hi52": 1280.4,
    "lo52": 559.9
  },
  "ELGIEQUIP": {
    "prev": 480.05,
    "hi52": 608.4,
    "lo52": 401.0
  },
  "ELGIRUBCO": {
    "prev": 38.13,
    "hi52": 90.5,
    "lo52": 36.0
  },
  "ELGNZ": {
    "prev": 66.2,
    "hi52": 163.5,
    "lo52": 57.55
  },
  "ELIN": {
    "prev": 117.0,
    "hi52": 234.0,
    "lo52": 109.2
  },
  "ELLEN": {
    "prev": 197.99,
    "hi52": 637.7,
    "lo52": 175.0
  },
  "EMAMILTD": {
    "prev": 402.75,
    "hi52": 653.35,
    "lo52": 395.45
  },
  "EMAMIPAP": {
    "prev": 68.26,
    "hi52": 122.0,
    "lo52": 64.0
  },
  "EMAMIREAL": {
    "prev": 60.1,
    "hi52": 135.99,
    "lo52": 48.2
  },
  "EMAPARTNER": {
    "prev": 72.8,
    "hi52": 133.0,
    "lo52": 71.0
  },
  "EMBASSY": {
    "prev": 416.68,
    "hi52": 462.0,
    "lo52": 355.2
  },
  "EMCURE": {
    "prev": 1478.2,
    "hi52": 1585.6,
    "lo52": 889.0
  },
  "EMIL": {
    "prev": 92.01,
    "hi52": 168.5,
    "lo52": 84.9
  },
  "EMKAY": {
    "prev": 222.67,
    "hi52": 409.9,
    "lo52": 172.61
  },
  "EMKAYTOOLS": {
    "prev": 96.5,
    "hi52": 480.0,
    "lo52": 88.0
  },
  "EMMBI": {
    "prev": 76.3,
    "hi52": 126.99,
    "lo52": 70.22
  },
  "EMMIL": {
    "prev": 130.35,
    "hi52": 243.5,
    "lo52": 120.0
  },
  "EMMVEE": {
    "prev": 228.57,
    "hi52": 248.4,
    "lo52": 171.51
  },
  "EMSLIMITED": {
    "prev": 297.0,
    "hi52": 695.4,
    "lo52": 256.05
  },
  "EMUDHRA": {
    "prev": 395.45,
    "hi52": 894.1,
    "lo52": 375.65
  },
  "ENCOMPAS": {
    "prev": 253.95,
    "hi52": 295.4,
    "lo52": 167.35
  },
  "ENDURANCE": {
    "prev": 2280.3,
    "hi52": 3079.9,
    "lo52": 1700.0
  },
  "ENERGYDEV": {
    "prev": 15.13,
    "hi52": 29.85,
    "lo52": 14.37
  },
  "ENFUSE": {
    "prev": 175.0,
    "hi52": 284.0,
    "lo52": 161.05
  },
  "ENGINERSIN": {
    "prev": 191.64,
    "hi52": 255.45,
    "lo52": 148.81
  },
  "ENIL": {
    "prev": 105.86,
    "hi52": 174.58,
    "lo52": 104.0
  },
  "ENSER": {
    "prev": 11.1,
    "hi52": 23.25,
    "lo52": 9.25
  },
  "ENTERO": {
    "prev": 1120.9,
    "hi52": 1510.8,
    "lo52": 944.0
  },
  "ENVIRO": {
    "prev": 97.95,
    "hi52": 173.0,
    "lo52": 82.0
  },
  "EPACK": {
    "prev": 234.7,
    "hi52": 421.35,
    "lo52": 216.5
  },
  "EPACKPEB": {
    "prev": 148.67,
    "hi52": 344.0,
    "lo52": 141.24
  },
  "EPIGRAL": {
    "prev": 845.7,
    "hi52": 2114.0,
    "lo52": 811.7
  },
  "EPL": {
    "prev": 190.68,
    "hi52": 254.0,
    "lo52": 175.28
  },
  "EQUITASBNK": {
    "prev": 57.01,
    "hi52": 73.4,
    "lo52": 50.0
  },
  "ERIS": {
    "prev": 1284.9,
    "hi52": 1910.0,
    "lo52": 1097.2
  },
  "ESABINDIA": {
    "prev": 5406.0,
    "hi52": 6425.0,
    "lo52": 4133.05
  },
  "ESAFSFB": {
    "prev": 23.06,
    "hi52": 36.2,
    "lo52": 22.57
  },
  "ESCONET": {
    "prev": 110.5,
    "hi52": 280.0,
    "lo52": 100.1
  },
  "ESCORTS": {
    "prev": 3059.4,
    "hi52": 4180.0,
    "lo52": 2776.4
  },
  "ESFL": {
    "prev": 126.3,
    "hi52": 585.0,
    "lo52": 115.9
  },
  "ESPRIT": {
    "prev": 66.0,
    "hi52": 126.95,
    "lo52": 52.0
  },
  "ESSARSHPNG": {
    "prev": 23.59,
    "hi52": 43.26,
    "lo52": 21.5
  },
  "ESSENTIA": {
    "prev": 1.25,
    "hi52": 2.61,
    "lo52": 1.12
  },
  "ESTER": {
    "prev": 91.52,
    "hi52": 156.0,
    "lo52": 88.15
  },
  "ETHOSLTD": {
    "prev": 2237.0,
    "hi52": 3245.9,
    "lo52": 1919.4
  },
  "ETML": {
    "prev": 88.6,
    "hi52": 152.55,
    "lo52": 82.35
  },
  "EUREKAFORB": {
    "prev": 462.5,
    "hi52": 668.3,
    "lo52": 403.2
  },
  "EUROBOND": {
    "prev": 146.6,
    "hi52": 254.5,
    "lo52": 138.0
  },
  "EUROPRATIK": {
    "prev": 214.65,
    "hi52": 390.0,
    "lo52": 205.1
  },
  "EUROTEXIND": {
    "prev": 13.2,
    "hi52": 23.58,
    "lo52": 11.79
  },
  "EVEREADY": {
    "prev": 300.7,
    "hi52": 475.2,
    "lo52": 272.3
  },
  "EVERESTIND": {
    "prev": 325.75,
    "hi52": 750.0,
    "lo52": 294.5
  },
  "EXCEL": {
    "prev": 1.03,
    "hi52": 1.74,
    "lo52": 0.65
  },
  "EXCELINDUS": {
    "prev": 874.45,
    "hi52": 1440.0,
    "lo52": 835.0
  },
  "EXCELSOFT": {
    "prev": 76.54,
    "hi52": 142.59,
    "lo52": 68.0
  },
  "EXICOM": {
    "prev": 88.46,
    "hi52": 217.0,
    "lo52": 83.0
  },
  "EXIDEIND": {
    "prev": 302.65,
    "hi52": 431.0,
    "lo52": 290.0
  },
  "EXPLEOSOL": {
    "prev": 720.3,
    "hi52": 1370.9,
    "lo52": 685.1
  },
  "EXXARO": {
    "prev": 6.84,
    "hi52": 10.95,
    "lo52": 5.45
  },
  "FABTECH": {
    "prev": 145.62,
    "hi52": 262.8,
    "lo52": 132.7
  },
  "FACT": {
    "prev": 791.45,
    "hi52": 1112.0,
    "lo52": 565.0
  },
  "FAIRCHEMOR": {
    "prev": 493.3,
    "hi52": 1102.7,
    "lo52": 463.0
  },
  "FALCONTECH": {
    "prev": 12.6,
    "hi52": 32.5,
    "lo52": 11.6
  },
  "FCL": {
    "prev": 21.77,
    "hi52": 290.66,
    "lo52": 20.6
  },
  "FCSSOFT": {
    "prev": 1.44,
    "hi52": 3.05,
    "lo52": 1.35
  },
  "FDC": {
    "prev": 332.85,
    "hi52": 527.8,
    "lo52": 325.0
  },
  "FEDERALBNK": {
    "prev": 267.1,
    "hi52": 302.0,
    "lo52": 183.15
  },
  "FEDFINA": {
    "prev": 134.18,
    "hi52": 178.48,
    "lo52": 80.0
  },
  "FELIX": {
    "prev": 169.65,
    "hi52": 220.0,
    "lo52": 132.0
  },
  "FIDEL": {
    "prev": 123.5,
    "hi52": 234.0,
    "lo52": 108.1
  },
  "FIEMIND": {
    "prev": 2026.8,
    "hi52": 2555.3,
    "lo52": 1255.1
  },
  "FILATEX": {
    "prev": 40.68,
    "hi52": 66.1,
    "lo52": 34.0
  },
  "FILATFASH": {
    "prev": 0.17,
    "hi52": 0.74,
    "lo52": 0.16
  },
  "FINBUD": {
    "prev": 115.0,
    "hi52": 164.85,
    "lo52": 85.0
  },
  "FINCABLES": {
    "prev": 878.15,
    "hi52": 1028.0,
    "lo52": 700.8
  },
  "FINEORG": {
    "prev": 4256.1,
    "hi52": 5494.0,
    "lo52": 3600.15
  },
  "FINKURVE": {
    "prev": 55.36,
    "hi52": 134.9,
    "lo52": 51.47
  },
  "FINOPB": {
    "prev": 150.82,
    "hi52": 339.0,
    "lo52": 135.87
  },
  "FINPIPE": {
    "prev": 174.63,
    "hi52": 238.0,
    "lo52": 153.92
  },
  "FIRSTCRY": {
    "prev": 250.87,
    "hi52": 438.7,
    "lo52": 207.05
  },
  "FISCHER": {
    "prev": 35.42,
    "hi52": 1194.4,
    "lo52": 32.91
  },
  "FIVESTAR": {
    "prev": 350.65,
    "hi52": 850.0,
    "lo52": 338.15
  },
  "FLAIR": {
    "prev": 307.4,
    "hi52": 357.0,
    "lo52": 217.61
  },
  "FLEXITUFF": {
    "prev": 6.4,
    "hi52": 42.21,
    "lo52": 6.15
  },
  "FLUOROCHEM": {
    "prev": 3183.9,
    "hi52": 4083.55,
    "lo52": 2916.6
  },
  "FLYSBS": {
    "prev": 413.25,
    "hi52": 790.0,
    "lo52": 372.2
  },
  "FMGOETZE": {
    "prev": 382.05,
    "hi52": 622.0,
    "lo52": 319.65
  },
  "FMNL": {
    "prev": 7.53,
    "hi52": 19.1,
    "lo52": 7.2
  },
  "FOCE": {
    "prev": 565.0,
    "hi52": 2004.0,
    "lo52": 536.75
  },
  "FOCUS": {
    "prev": 66.56,
    "hi52": 126.15,
    "lo52": 61.5
  },
  "FOODSIN": {
    "prev": 53.83,
    "hi52": 128.45,
    "lo52": 49.89
  },
  "FORCAS": {
    "prev": 100.0,
    "hi52": 140.0,
    "lo52": 65.05
  },
  "FORCEMOT": {
    "prev": 21585.0,
    "hi52": 26450.0,
    "lo52": 8050.0
  },
  "FORGEAUTO": {
    "prev": 78.0,
    "hi52": 175.5,
    "lo52": 60.0
  },
  "FORTIS": {
    "prev": 822.05,
    "hi52": 1104.3,
    "lo52": 595.8
  },
  "FOSECOIND": {
    "prev": 5247.0,
    "hi52": 6846.0,
    "lo52": 3250.55
  },
  "FRACTAL": {
    "prev": 823.1,
    "hi52": 921.0,
    "lo52": 733.7
  },
  "FROG": {
    "prev": 126.35,
    "hi52": 290.0,
    "lo52": 123.5
  },
  "FSL": {
    "prev": 216.97,
    "hi52": 403.8,
    "lo52": 202.0
  },
  "FUSION": {
    "prev": 159.01,
    "hi52": 211.8,
    "lo52": 123.96
  },
  "FWSTC": {
    "prev": 163.8,
    "hi52": 248.0,
    "lo52": 145.0
  },
  "GABRIEL": {
    "prev": 862.95,
    "hi52": 1388.0,
    "lo52": 465.0
  },
  "GAEL": {
    "prev": 134.51,
    "hi52": 149.11,
    "lo52": 101.0
  },
  "GAJANAND": {
    "prev": 7.3,
    "hi52": 16.85,
    "lo52": 6.25
  },
  "GALAPREC": {
    "prev": 749.9,
    "hi52": 980.0,
    "lo52": 671.2
  },
  "GALAXYSURF": {
    "prev": 1641.0,
    "hi52": 2750.1,
    "lo52": 1557.0
  },
  "GALLANTT": {
    "prev": 555.95,
    "hi52": 802.25,
    "lo52": 342.1
  },
  "GANDHAR": {
    "prev": 132.38,
    "hi52": 184.42,
    "lo52": 120.56
  },
  "GANDHITUBE": {
    "prev": 803.2,
    "hi52": 1031.8,
    "lo52": 618.6
  },
  "GANECOS": {
    "prev": 805.2,
    "hi52": 1742.3,
    "lo52": 653.55
  },
  "GANESHBE": {
    "prev": 76.39,
    "hi52": 133.8,
    "lo52": 68.4
  },
  "GANESHCP": {
    "prev": 174.04,
    "hi52": 309.95,
    "lo52": 152.0
  },
  "GANESHHOU": {
    "prev": 590.5,
    "hi52": 1169.0,
    "lo52": 552.1
  },
  "GANESHIN": {
    "prev": 77.6,
    "hi52": 279.8,
    "lo52": 71.5
  },
  "GANGABATH": {
    "prev": 22.4,
    "hi52": 59.0,
    "lo52": 15.5
  },
  "GANGAFORGE": {
    "prev": 2.79,
    "hi52": 5.55,
    "lo52": 2.7
  },
  "GANGESSECU": {
    "prev": 112.46,
    "hi52": 191.0,
    "lo52": 104.6
  },
  "GARFIBRES": {
    "prev": 611.7,
    "hi52": 985.55,
    "lo52": 582.5
  },
  "GARUDA": {
    "prev": 159.84,
    "hi52": 249.3,
    "lo52": 87.5
  },
  "GATECH": {
    "prev": 0.46,
    "hi52": 1.21,
    "lo52": 0.44
  },
  "GATECHDVR": {
    "prev": 0.39,
    "hi52": 1.16,
    "lo52": 0.38
  },
  "GATEWAY": {
    "prev": 51.07,
    "hi52": 76.5,
    "lo52": 48.1
  },
  "GAUDIUMIVF": {
    "prev": 77.04,
    "hi52": 99.75,
    "lo52": 69.18
  },
  "GAYAHWS": {
    "prev": 2.1,
    "hi52": 4.76,
    "lo52": 0.97
  },
  "GCHOTELS": {
    "prev": 84.0,
    "hi52": 255.0,
    "lo52": 78.4
  },
  "GEECEE": {
    "prev": 263.2,
    "hi52": 448.0,
    "lo52": 244.0
  },
  "GEEKAYWIRE": {
    "prev": 20.96,
    "hi52": 85.9,
    "lo52": 19.75
  },
  "GENCON": {
    "prev": 43.15,
    "hi52": 59.96,
    "lo52": 21.96
  },
  "GENESYS": {
    "prev": 269.7,
    "hi52": 798.9,
    "lo52": 244.0
  },
  "GENUSPAPER": {
    "prev": 10.72,
    "hi52": 22.01,
    "lo52": 10.0
  },
  "GENUSPOWER": {
    "prev": 239.1,
    "hi52": 293.0,
    "lo52": 223.1
  },
  "GEOJITFSL": {
    "prev": 59.93,
    "hi52": 94.79,
    "lo52": 56.12
  },
  "GESHIP": {
    "prev": 1429.7,
    "hi52": 1509.0,
    "lo52": 802.25
  },
  "GFLLIMITED": {
    "prev": 42.86,
    "hi52": 61.0,
    "lo52": 41.25
  },
  "GGBL": {
    "prev": 254.75,
    "hi52": 555.0,
    "lo52": 221.05
  },
  "GHCL": {
    "prev": 433.45,
    "hi52": 667.2,
    "lo52": 419.0
  },
  "GHCLTEXTIL": {
    "prev": 75.69,
    "hi52": 99.0,
    "lo52": 65.0
  },
  "GICHSGFIN": {
    "prev": 142.31,
    "hi52": 206.0,
    "lo52": 135.8
  },
  "GICL": {
    "prev": 42.66,
    "hi52": 52.4,
    "lo52": 37.05
  },
  "GICRE": {
    "prev": 372.15,
    "hi52": 453.8,
    "lo52": 350.25
  },
  "GILLANDERS": {
    "prev": 79.22,
    "hi52": 151.9,
    "lo52": 76.0
  },
  "GILLETTE": {
    "prev": 8001.5,
    "hi52": 11500.0,
    "lo52": 7563.35
  },
  "GINNIFILA": {
    "prev": 37.91,
    "hi52": 57.8,
    "lo52": 19.01
  },
  "GIPCL": {
    "prev": 132.82,
    "hi52": 223.9,
    "lo52": 125.62
  },
  "GKENERGY": {
    "prev": 103.28,
    "hi52": 239.6,
    "lo52": 96.01
  },
  "GKSL": {
    "prev": 106.21,
    "hi52": 123.0,
    "lo52": 98.36
  },
  "GKWLIMITED": {
    "prev": 1619.2,
    "hi52": 2262.0,
    "lo52": 1535.0
  },
  "GLAND": {
    "prev": 1627.1,
    "hi52": 2131.0,
    "lo52": 1277.8
  },
  "GLAXO": {
    "prev": 2384.8,
    "hi52": 3515.7,
    "lo52": 2220.3
  },
  "GLENMARK": {
    "prev": 2180.1,
    "hi52": 2297.9,
    "lo52": 1336.0
  },
  "GLOBAL": {
    "prev": 99.23,
    "hi52": 112.35,
    "lo52": 41.0
  },
  "GLOBALE": {
    "prev": 10.61,
    "hi52": 19.5,
    "lo52": 9.97
  },
  "GLOBALPET": {
    "prev": 90.15,
    "hi52": 159.7,
    "lo52": 85.0
  },
  "GLOBALVECT": {
    "prev": 156.21,
    "hi52": 280.5,
    "lo52": 149.02
  },
  "GLOBE": {
    "prev": 2.41,
    "hi52": 3.29,
    "lo52": 2.02
  },
  "GLOBECIVIL": {
    "prev": 43.07,
    "hi52": 95.0,
    "lo52": 40.36
  },
  "GLOBUSSPR": {
    "prev": 866.2,
    "hi52": 1303.2,
    "lo52": 800.75
  },
  "GLOSTERLTD": {
    "prev": 514.7,
    "hi52": 830.0,
    "lo52": 497.0
  },
  "GLOTTIS": {
    "prev": 43.15,
    "hi52": 93.0,
    "lo52": 40.5
  },
  "GMBREW": {
    "prev": 1006.05,
    "hi52": 1328.8,
    "lo52": 594.0
  },
  "GMDCLTD": {
    "prev": 575.7,
    "hi52": 651.0,
    "lo52": 251.0
  },
  "GMMPFAUDLR": {
    "prev": 856.9,
    "hi52": 1418.0,
    "lo52": 808.9
  },
  "GMRAIRPORT": {
    "prev": 90.56,
    "hi52": 110.36,
    "lo52": 74.96
  },
  "GMRP&UI": {
    "prev": 104.52,
    "hi52": 141.01,
    "lo52": 97.22
  },
  "GNA": {
    "prev": 375.35,
    "hi52": 470.0,
    "lo52": 271.05
  },
  "GNFC": {
    "prev": 407.05,
    "hi52": 573.75,
    "lo52": 380.0
  },
  "GOACARBON": {
    "prev": 305.35,
    "hi52": 532.8,
    "lo52": 286.0
  },
  "GOCLCORP": {
    "prev": 236.3,
    "hi52": 417.5,
    "lo52": 223.35
  },
  "GOCOLORS": {
    "prev": 275.4,
    "hi52": 943.75,
    "lo52": 237.05
  },
  "GODAVARIB": {
    "prev": 316.9,
    "hi52": 348.7,
    "lo52": 145.0
  },
  "GODFRYPHLP": {
    "prev": 1991.5,
    "hi52": 11465.0,
    "lo52": 1832.1
  },
  "GODIGIT": {
    "prev": 325.75,
    "hi52": 381.4,
    "lo52": 264.6
  },
  "GODREJAGRO": {
    "prev": 588.5,
    "hi52": 876.35,
    "lo52": 506.1
  },
  "GODREJIND": {
    "prev": 832.05,
    "hi52": 1390.0,
    "lo52": 782.1
  },
  "GODREJPROP": {
    "prev": 1549.5,
    "hi52": 2506.5,
    "lo52": 1475.0
  },
  "GOKEX": {
    "prev": 581.4,
    "hi52": 1060.0,
    "lo52": 531.0
  },
  "GOKUL": {
    "prev": 42.92,
    "hi52": 53.55,
    "lo52": 31.0
  },
  "GOKULAGRO": {
    "prev": 181.54,
    "hi52": 425.0,
    "lo52": 151.0
  },
  "GOLDIAM": {
    "prev": 296.1,
    "hi52": 444.0,
    "lo52": 251.35
  },
  "GOLDKART": {
    "prev": 245.0,
    "hi52": 285.0,
    "lo52": 200.05
  },
  "GOLDTECH": {
    "prev": 39.8,
    "hi52": 80.44,
    "lo52": 36.26
  },
  "GOODLUCK": {
    "prev": 1017.1,
    "hi52": 1349.0,
    "lo52": 592.2
  },
  "GOPAL": {
    "prev": 273.1,
    "hi52": 398.0,
    "lo52": 255.9
  },
  "GOYALSALT": {
    "prev": 108.5,
    "hi52": 204.0,
    "lo52": 104.0
  },
  "GPECO": {
    "prev": 324.4,
    "hi52": 616.5,
    "lo52": 258.0
  },
  "GPIL": {
    "prev": 262.65,
    "hi52": 290.0,
    "lo52": 168.0
  },
  "GPPL": {
    "prev": 151.67,
    "hi52": 200.09,
    "lo52": 127.74
  },
  "GPTHEALTH": {
    "prev": 120.65,
    "hi52": 185.0,
    "lo52": 118.0
  },
  "GPTINFRA": {
    "prev": 103.62,
    "hi52": 149.8,
    "lo52": 96.61
  },
  "GRANULES": {
    "prev": 590.95,
    "hi52": 627.0,
    "lo52": 422.0
  },
  "GRAPHITE": {
    "prev": 607.1,
    "hi52": 747.0,
    "lo52": 411.0
  },
  "GRAVITA": {
    "prev": 1405.2,
    "hi52": 2170.0,
    "lo52": 1291.1
  },
  "GRCL": {
    "prev": 377.15,
    "hi52": 525.25,
    "lo52": 306.65
  },
  "GREAVESCOT": {
    "prev": 134.73,
    "hi52": 244.3,
    "lo52": 126.59
  },
  "GREENCHEF": {
    "prev": 47.55,
    "hi52": 74.05,
    "lo52": 42.3
  },
  "GREENLAM": {
    "prev": 213.53,
    "hi52": 279.4,
    "lo52": 197.42
  },
  "GREENLEAF": {
    "prev": 70.95,
    "hi52": 185.9,
    "lo52": 61.05
  },
  "GREENPANEL": {
    "prev": 194.07,
    "hi52": 335.2,
    "lo52": 177.4
  },
  "GREENPLY": {
    "prev": 192.9,
    "hi52": 351.95,
    "lo52": 179.0
  },
  "GREENPOWER": {
    "prev": 9.35,
    "hi52": 15.81,
    "lo52": 8.69
  },
  "GRETEX": {
    "prev": 266.0,
    "hi52": 275.0,
    "lo52": 180.5
  },
  "GRINDWELL": {
    "prev": 1402.2,
    "hi52": 1884.0,
    "lo52": 1329.0
  },
  "GRINFRA": {
    "prev": 859.7,
    "hi52": 1444.4,
    "lo52": 822.05
  },
  "GRMOVER": {
    "prev": 154.27,
    "hi52": 517.7,
    "lo52": 148.01
  },
  "GROBTEA": {
    "prev": 889.4,
    "hi52": 1359.9,
    "lo52": 835.35
  },
  "GROWW": {
    "prev": 161.46,
    "hi52": 193.8,
    "lo52": 112.0
  },
  "GRPLTD": {
    "prev": 1847.9,
    "hi52": 3224.95,
    "lo52": 1500.0
  },
  "GRSE": {
    "prev": 2280.8,
    "hi52": 3538.4,
    "lo52": 1405.0
  },
  "GRWRHITECH": {
    "prev": 3650.8,
    "hi52": 4782.9,
    "lo52": 2317.35
  },
  "GSFC": {
    "prev": 153.95,
    "hi52": 220.59,
    "lo52": 146.5
  },
  "GSLSU": {
    "prev": 57.65,
    "hi52": 144.4,
    "lo52": 54.77
  },
  "GSMFOILS": {
    "prev": 201.2,
    "hi52": 255.15,
    "lo52": 116.0
  },
  "GSPL": {
    "prev": 254.75,
    "hi52": 360.6,
    "lo52": 232.6
  },
  "GSS": {
    "prev": 10.99,
    "hi52": 52.69,
    "lo52": 10.0
  },
  "GTECJAINX": {
    "prev": 20.59,
    "hi52": 35.2,
    "lo52": 17.4
  },
  "GTL": {
    "prev": 6.36,
    "hi52": 13.0,
    "lo52": 6.03
  },
  "GTLINFRA": {
    "prev": 1.03,
    "hi52": 2.17,
    "lo52": 0.98
  },
  "GTPL": {
    "prev": 59.03,
    "hi52": 133.4,
    "lo52": 55.01
  },
  "GUFICBIO": {
    "prev": 294.35,
    "hi52": 407.85,
    "lo52": 268.0
  },
  "GUJALKALI": {
    "prev": 538.25,
    "hi52": 698.4,
    "lo52": 409.15
  },
  "GUJAPOLLO": {
    "prev": 447.0,
    "hi52": 556.0,
    "lo52": 291.3
  },
  "GUJGASLTD": {
    "prev": 354.6,
    "hi52": 508.7,
    "lo52": 329.55
  },
  "GUJRAFFIA": {
    "prev": 36.27,
    "hi52": 88.0,
    "lo52": 35.1
  },
  "GUJTHEM": {
    "prev": 273.5,
    "hi52": 479.0,
    "lo52": 222.05
  },
  "GULFOILLUB": {
    "prev": 919.3,
    "hi52": 1331.9,
    "lo52": 865.0
  },
  "GULFPETRO": {
    "prev": 28.24,
    "hi52": 51.95,
    "lo52": 27.05
  },
  "GULPOLY": {
    "prev": 155.69,
    "hi52": 220.5,
    "lo52": 121.5
  },
  "GURUNANAK": {
    "prev": 25.2,
    "hi52": 60.0,
    "lo52": 23.4
  },
  "GVPTECH": {
    "prev": 6.7,
    "hi52": 12.0,
    "lo52": 5.22
  },
  "GVPTECHPP": {
    "prev": 2.48,
    "hi52": 6.0,
    "lo52": 1.98
  },
  "GVT&D": {
    "prev": 3678.9,
    "hi52": 3999.0,
    "lo52": 1254.0
  },
  "HALDER": {
    "prev": 255.0,
    "hi52": 294.0,
    "lo52": 235.7
  },
  "HALEOSLABS": {
    "prev": 1246.0,
    "hi52": 1680.0,
    "lo52": 1026.0
  },
  "HAPPSTMNDS": {
    "prev": 410.85,
    "hi52": 674.85,
    "lo52": 330.2
  },
  "HAPPYFORGE": {
    "prev": 1265.4,
    "hi52": 1370.0,
    "lo52": 724.1
  },
  "HARIOMPIPE": {
    "prev": 305.55,
    "hi52": 572.2,
    "lo52": 298.55
  },
  "HARRMALAYA": {
    "prev": 174.48,
    "hi52": 236.9,
    "lo52": 153.66
  },
  "HARSHA": {
    "prev": 340.6,
    "hi52": 451.85,
    "lo52": 323.1
  },
  "HATHWAY": {
    "prev": 9.84,
    "hi52": 17.98,
    "lo52": 9.27
  },
  "HATSUN": {
    "prev": 956.75,
    "hi52": 1179.0,
    "lo52": 855.3
  },
  "HAVISHA": {
    "prev": 1.29,
    "hi52": 3.05,
    "lo52": 1.1
  },
  "HBLENGINE": {
    "prev": 659.5,
    "hi52": 1122.0,
    "lo52": 440.1
  },
  "HBSL": {
    "prev": 48.16,
    "hi52": 137.0,
    "lo52": 45.76
  },
  "HCC": {
    "prev": 15.44,
    "hi52": 37.39,
    "lo52": 14.15
  },
  "HCG": {
    "prev": 544.25,
    "hi52": 804.65,
    "lo52": 501.25
  },
  "HCL-INSYS": {
    "prev": 11.73,
    "hi52": 24.5,
    "lo52": 10.75
  },
  "HDBFS": {
    "prev": 634.9,
    "hi52": 891.9,
    "lo52": 600.55
  },
  "HDFCAMC": {
    "prev": 2385.9,
    "hi52": 5934.5,
    "lo52": 2236.6
  },
  "HEADSUP": {
    "prev": 6.54,
    "hi52": 12.95,
    "lo52": 5.87
  },
  "HECPROJECT": {
    "prev": 107.45,
    "hi52": 184.1,
    "lo52": 82.01
  },
  "HEG": {
    "prev": 498.15,
    "hi52": 672.0,
    "lo52": 406.1
  },
  "HEIDELBERG": {
    "prev": 149.43,
    "hi52": 224.8,
    "lo52": 142.0
  },
  "HEMIPROP": {
    "prev": 137.2,
    "hi52": 190.69,
    "lo52": 111.03
  },
  "HERANBA": {
    "prev": 179.39,
    "hi52": 403.7,
    "lo52": 167.0
  },
  "HERITGFOOD": {
    "prev": 309.45,
    "hi52": 540.0,
    "lo52": 294.4
  },
  "HEROMOTOCO": {
    "prev": 5275.5,
    "hi52": 6388.5,
    "lo52": 3344.0
  },
  "HESTERBIO": {
    "prev": 1395.0,
    "hi52": 2350.0,
    "lo52": 1242.95
  },
  "HEXATRADEX": {
    "prev": 159.66,
    "hi52": 211.0,
    "lo52": 147.26
  },
  "HEXT": {
    "prev": 439.45,
    "hi52": 900.0,
    "lo52": 400.2
  },
  "HFCL": {
    "prev": 71.16,
    "hi52": 93.96,
    "lo52": 59.82
  },
  "HGINFRA": {
    "prev": 489.9,
    "hi52": 1275.0,
    "lo52": 458.0
  },
  "HGM": {
    "prev": 44.88,
    "hi52": 82.4,
    "lo52": 42.7
  },
  "HGS": {
    "prev": 362.25,
    "hi52": 628.7,
    "lo52": 342.05
  },
  "HIGREEN": {
    "prev": 120.5,
    "hi52": 265.7,
    "lo52": 112.0
  },
  "HIKAL": {
    "prev": 168.48,
    "hi52": 456.75,
    "lo52": 155.01
  },
  "HILINFRA": {
    "prev": 48.21,
    "hi52": 131.4,
    "lo52": 45.75
  },
  "HILTON": {
    "prev": 15.64,
    "hi52": 84.2,
    "lo52": 14.0
  },
  "HIMATSEIDE": {
    "prev": 79.32,
    "hi52": 168.66,
    "lo52": 73.01
  },
  "HINDCOMPOS": {
    "prev": 394.6,
    "hi52": 537.75,
    "lo52": 376.0
  },
  "HINDCON": {
    "prev": 18.29,
    "hi52": 40.24,
    "lo52": 17.21
  },
  "HINDCOPPER": {
    "prev": 489.45,
    "hi52": 760.05,
    "lo52": 183.82
  },
  "HINDOILEXP": {
    "prev": 128.43,
    "hi52": 198.99,
    "lo52": 117.65
  },
  "HINDPETRO": {
    "prev": 336.3,
    "hi52": 508.45,
    "lo52": 316.2
  },
  "HINDWAREAP": {
    "prev": 197.14,
    "hi52": 392.7,
    "lo52": 179.4
  },
  "HIRECT": {
    "prev": 1488.6,
    "hi52": 2108.5,
    "lo52": 799.0
  },
  "HISARMETAL": {
    "prev": 139.16,
    "hi52": 224.1,
    "lo52": 133.21
  },
  "HITECH": {
    "prev": 75.54,
    "hi52": 127.5,
    "lo52": 70.7
  },
  "HITECHCORP": {
    "prev": 141.16,
    "hi52": 223.44,
    "lo52": 118.11
  },
  "HLEGLAS": {
    "prev": 286.3,
    "hi52": 661.95,
    "lo52": 230.0
  },
  "HLVLTD": {
    "prev": 6.92,
    "hi52": 15.75,
    "lo52": 6.45
  },
  "HMAAGRO": {
    "prev": 23.96,
    "hi52": 38.0,
    "lo52": 22.92
  },
  "HMVL": {
    "prev": 63.17,
    "hi52": 103.4,
    "lo52": 59.9
  },
  "HNDFDS": {
    "prev": 482.15,
    "hi52": 608.0,
    "lo52": 421.5
  },
  "HOLMARC": {
    "prev": 77.5,
    "hi52": 176.95,
    "lo52": 73.65
  },
  "HOMEFIRST": {
    "prev": 936.0,
    "hi52": 1519.0,
    "lo52": 878.4
  },
  "HOMESFY": {
    "prev": 128.25,
    "hi52": 430.0,
    "lo52": 125.0
  },
  "HONASA": {
    "prev": 289.2,
    "hi52": 334.2,
    "lo52": 212.51
  },
  "HONAUT": {
    "prev": 28330.0,
    "hi52": 41450.0,
    "lo52": 27105.0
  },
  "HONDAPOWER": {
    "prev": 2021.9,
    "hi52": 3256.0,
    "lo52": 1815.0
  },
  "HPAL": {
    "prev": 30.76,
    "hi52": 57.55,
    "lo52": 29.25
  },
  "HPIL": {
    "prev": 113.07,
    "hi52": 175.88,
    "lo52": 108.0
  },
  "HPL": {
    "prev": 283.55,
    "hi52": 639.9,
    "lo52": 265.45
  },
  "HPTL": {
    "prev": 276.0,
    "hi52": 327.4,
    "lo52": 101.05
  },
  "HRHNEXT": {
    "prev": 28.05,
    "hi52": 63.15,
    "lo52": 21.0
  },
  "HSCL": {
    "prev": 451.4,
    "hi52": 534.45,
    "lo52": 365.35
  },
  "HTMEDIA": {
    "prev": 20.34,
    "hi52": 28.64,
    "lo52": 15.1
  },
  "HUBTOWN": {
    "prev": 198.28,
    "hi52": 365.7,
    "lo52": 162.05
  },
  "HUDCO": {
    "prev": 172.48,
    "hi52": 253.73,
    "lo52": 164.0
  },
  "HUHTAMAKI": {
    "prev": 162.93,
    "hi52": 272.65,
    "lo52": 151.7
  },
  "HVAX": {
    "prev": 720.0,
    "hi52": 1029.3,
    "lo52": 560.0
  },
  "HYBRIDFIN": {
    "prev": 16.7,
    "hi52": 33.62,
    "lo52": 10.05
  },
  "IBLFL": {
    "prev": 47.3,
    "hi52": 74.0,
    "lo52": 43.95
  },
  "IBULLSLTD": {
    "prev": 9.94,
    "hi52": 21.25,
    "lo52": 8.9
  },
  "ICEMAKE": {
    "prev": 764.0,
    "hi52": 1088.75,
    "lo52": 666.3
  },
  "ICICIAMC": {
    "prev": 2804.0,
    "hi52": 3193.0,
    "lo52": 2530.0
  },
  "ICICIPRULI": {
    "prev": 552.1,
    "hi52": 706.8,
    "lo52": 525.8
  },
  "ICIL": {
    "prev": 233.45,
    "hi52": 351.35,
    "lo52": 213.55
  },
  "ICRA": {
    "prev": 5203.5,
    "hi52": 7130.0,
    "lo52": 5015.1
  },
  "IDBI": {
    "prev": 73.07,
    "hi52": 118.38,
    "lo52": 66.45
  },
  "IDEA": {
    "prev": 9.34,
    "hi52": 12.8,
    "lo52": 6.12
  },
  "IDEAFORGE": {
    "prev": 417.95,
    "hi52": 659.85,
    "lo52": 304.2
  },
  "IDENTICAL": {
    "prev": 18.0,
    "hi52": 56.0,
    "lo52": 15.55
  },
  "IDFCFIRSTB": {
    "prev": 62.95,
    "hi52": 87.0,
    "lo52": 52.46
  },
  "IEML": {
    "prev": 73.15,
    "hi52": 199.6,
    "lo52": 63.0
  },
  "IEX": {
    "prev": 120.53,
    "hi52": 215.4,
    "lo52": 114.72
  },
  "IFBAGRO": {
    "prev": 763.25,
    "hi52": 1790.0,
    "lo52": 440.0
  },
  "IFBIND": {
    "prev": 977.9,
    "hi52": 2019.8,
    "lo52": 917.9
  },
  "IFCI": {
    "prev": 53.99,
    "hi52": 74.5,
    "lo52": 36.2
  },
  "IFGLEXPOR": {
    "prev": 144.65,
    "hi52": 580.0,
    "lo52": 135.5
  },
  "IGARASHI": {
    "prev": 314.9,
    "hi52": 665.0,
    "lo52": 294.9
  },
  "IGCL": {
    "prev": 58.64,
    "hi52": 122.0,
    "lo52": 52.25
  },
  "IGIL": {
    "prev": 338.45,
    "hi52": 442.0,
    "lo52": 287.0
  },
  "IGL": {
    "prev": 156.63,
    "hi52": 229.0,
    "lo52": 147.4
  },
  "IGPL": {
    "prev": 384.85,
    "hi52": 519.8,
    "lo52": 315.0
  },
  "IIFL": {
    "prev": 473.0,
    "hi52": 675.0,
    "lo52": 306.0
  },
  "IIFLCAPS": {
    "prev": 269.8,
    "hi52": 411.3,
    "lo52": 180.0
  },
  "IITL": {
    "prev": 133.07,
    "hi52": 267.05,
    "lo52": 108.0
  },
  "IKIO": {
    "prev": 116.98,
    "hi52": 289.95,
    "lo52": 106.35
  },
  "IKS": {
    "prev": 1332.8,
    "hi52": 1876.0,
    "lo52": 1236.8
  },
  "IMAGICAA": {
    "prev": 39.98,
    "hi52": 75.55,
    "lo52": 37.05
  },
  "IMFA": {
    "prev": 1235.3,
    "hi52": 1510.6,
    "lo52": 549.8
  },
  "IMPAL": {
    "prev": 995.6,
    "hi52": 1184.5,
    "lo52": 931.85
  },
  "INA": {
    "prev": 101.3,
    "hi52": 104.9,
    "lo52": 91.11
  },
  "INCREDIBLE": {
    "prev": 32.94,
    "hi52": 52.87,
    "lo52": 30.7
  },
  "INDBANK": {
    "prev": 31.14,
    "hi52": 47.15,
    "lo52": 25.5
  },
  "INDGN": {
    "prev": 440.65,
    "hi52": 632.9,
    "lo52": 414.0
  },
  "INDIACEM": {
    "prev": 359.85,
    "hi52": 485.8,
    "lo52": 253.0
  },
  "INDIAGLYCO": {
    "prev": 876.25,
    "hi52": 2138.0,
    "lo52": 792.5
  },
  "INDIAMART": {
    "prev": 1994.4,
    "hi52": 2799.0,
    "lo52": 1900.1
  },
  "INDIANB": {
    "prev": 878.65,
    "hi52": 1000.0,
    "lo52": 517.85
  },
  "INDIANCARD": {
    "prev": 182.19,
    "hi52": 384.0,
    "lo52": 175.0
  },
  "INDIANHUME": {
    "prev": 323.75,
    "hi52": 479.0,
    "lo52": 297.0
  },
  "INDIASHLTR": {
    "prev": 686.15,
    "hi52": 1011.75,
    "lo52": 650.0
  },
  "INDIFRA": {
    "prev": 13.45,
    "hi52": 24.5,
    "lo52": 12.65
  },
  "INDIGOPNTS": {
    "prev": 743.75,
    "hi52": 1345.9,
    "lo52": 711.0
  },
  "INDIGRID": {
    "prev": 165.22,
    "hi52": 174.0,
    "lo52": 140.1
  },
  "INDIQUBE": {
    "prev": 148.05,
    "hi52": 243.8,
    "lo52": 132.05
  },
  "INDNIPPON": {
    "prev": 735.2,
    "hi52": 1099.9,
    "lo52": 546.0
  },
  "INDOAMIN": {
    "prev": 88.27,
    "hi52": 176.25,
    "lo52": 81.9
  },
  "INDOBORAX": {
    "prev": 244.16,
    "hi52": 301.85,
    "lo52": 160.0
  },
  "INDOCO": {
    "prev": 192.2,
    "hi52": 349.8,
    "lo52": 181.7
  },
  "INDOFARM": {
    "prev": 125.99,
    "hi52": 271.69,
    "lo52": 118.0
  },
  "INDORAMA": {
    "prev": 31.35,
    "hi52": 75.0,
    "lo52": 29.0
  },
  "INDOSTAR": {
    "prev": 199.1,
    "hi52": 366.3,
    "lo52": 179.03
  },
  "INDOTECH": {
    "prev": 1298.1,
    "hi52": 2787.4,
    "lo52": 1148.0
  },
  "INDOTHAI": {
    "prev": 252.15,
    "hi52": 2212.0,
    "lo52": 143.65
  },
  "INDOUS": {
    "prev": 104.19,
    "hi52": 206.0,
    "lo52": 96.05
  },
  "INDOWIND": {
    "prev": 8.83,
    "hi52": 23.96,
    "lo52": 8.02
  },
  "INDRAMEDCO": {
    "prev": 396.25,
    "hi52": 640.85,
    "lo52": 321.95
  },
  "INDSWFTLAB": {
    "prev": 141.51,
    "hi52": 151.98,
    "lo52": 68.72
  },
  "INDTERRAIN": {
    "prev": 28.0,
    "hi52": 45.0,
    "lo52": 26.6
  },
  "INDUSINDBK": {
    "prev": 818.6,
    "hi52": 968.85,
    "lo52": 633.6
  },
  "INDUSINVIT": {
    "prev": 124.27,
    "hi52": 129.4,
    "lo52": 105.01
  },
  "INDUSTOWER": {
    "prev": 434.55,
    "hi52": 481.5,
    "lo52": 312.55
  },
  "INFINIUM": {
    "prev": 202.45,
    "hi52": 337.0,
    "lo52": 198.0
  },
  "INFLUX": {
    "prev": 221.65,
    "hi52": 261.95,
    "lo52": 120.0
  },
  "INFOBEAN": {
    "prev": 139.73,
    "hi52": 1030.0,
    "lo52": 120.33
  },
  "INFOLLION": {
    "prev": 291.15,
    "hi52": 575.0,
    "lo52": 275.0
  },
  "INFOMEDIA": {
    "prev": 4.93,
    "hi52": 9.89,
    "lo52": 4.5
  },
  "INGERRAND": {
    "prev": 3647.5,
    "hi52": 4477.8,
    "lo52": 3063.3
  },
  "INM": {
    "prev": 181.0,
    "hi52": 689.0,
    "lo52": 163.0
  },
  "INNOMET": {
    "prev": 74.35,
    "hi52": 216.0,
    "lo52": 63.15
  },
  "INNOVACAP": {
    "prev": 679.6,
    "hi52": 1020.7,
    "lo52": 622.0
  },
  "INNOVANA": {
    "prev": 353.3,
    "hi52": 649.5,
    "lo52": 270.5
  },
  "INNOVISION": {
    "prev": 519.0,
    "hi52": 470.0,
    "lo52": 374.2
  },
  "INOXGREEN": {
    "prev": 150.4,
    "hi52": 279.0,
    "lo52": 104.0
  },
  "INOXINDIA": {
    "prev": 1180.7,
    "hi52": 1288.0,
    "lo52": 892.25
  },
  "INOXWIND": {
    "prev": 81.84,
    "hi52": 201.0,
    "lo52": 75.63
  },
  "INSECTICID": {
    "prev": 574.85,
    "hi52": 1098.0,
    "lo52": 546.15
  },
  "INSPIRE": {
    "prev": 11.1,
    "hi52": 28.25,
    "lo52": 9.0
  },
  "INTEGRITY": {
    "prev": 106.0,
    "hi52": 145.1,
    "lo52": 81.7
  },
  "INTELLECT": {
    "prev": 650.55,
    "hi52": 1255.0,
    "lo52": 577.4
  },
  "INTENTECH": {
    "prev": 83.98,
    "hi52": 149.9,
    "lo52": 76.0
  },
  "INTERARCH": {
    "prev": 1742.4,
    "hi52": 2762.6,
    "lo52": 1264.0
  },
  "INTLCONV": {
    "prev": 69.74,
    "hi52": 114.54,
    "lo52": 64.09
  },
  "INVENTURE": {
    "prev": 1.0,
    "hi52": 1.83,
    "lo52": 0.96
  },
  "INVICTA": {
    "prev": 71.0,
    "hi52": 105.0,
    "lo52": 58.1
  },
  "IOB": {
    "prev": 33.72,
    "hi52": 45.15,
    "lo52": 31.55
  },
  "IOLCP": {
    "prev": 74.36,
    "hi52": 126.66,
    "lo52": 57.5
  },
  "IONEXCHANG": {
    "prev": 338.05,
    "hi52": 580.75,
    "lo52": 312.7
  },
  "IPCALAB": {
    "prev": 1544.9,
    "hi52": 1624.0,
    "lo52": 1168.2
  },
  "IPHL": {
    "prev": 52.5,
    "hi52": 78.25,
    "lo52": 42.4
  },
  "IPL": {
    "prev": 136.99,
    "hi52": 245.84,
    "lo52": 123.11
  },
  "IPSL": {
    "prev": 248.9,
    "hi52": 385.0,
    "lo52": 210.0
  },
  "IRB": {
    "prev": 41.51,
    "hi52": 54.28,
    "lo52": 38.3
  },
  "IRBINVIT": {
    "prev": 57.96,
    "hi52": 65.25,
    "lo52": 49.91
  },
  "IRCON": {
    "prev": 123.68,
    "hi52": 225.52,
    "lo52": 114.5
  },
  "IRCTC": {
    "prev": 522.85,
    "hi52": 820.25,
    "lo52": 506.6
  },
  "IREDA": {
    "prev": 116.37,
    "hi52": 186.58,
    "lo52": 110.0
  },
  "IRIS": {
    "prev": 226.57,
    "hi52": 426.95,
    "lo52": 203.0
  },
  "IRISDOREME": {
    "prev": 29.5,
    "hi52": 68.7,
    "lo52": 27.31
  },
  "IRMENERGY": {
    "prev": 199.19,
    "hi52": 393.0,
    "lo52": 185.0
  },
  "ISFT": {
    "prev": 65.69,
    "hi52": 120.99,
    "lo52": 58.48
  },
  "ISGEC": {
    "prev": 888.15,
    "hi52": 1281.3,
    "lo52": 683.95
  },
  "ISHAN": {
    "prev": 0.6,
    "hi52": 1.3,
    "lo52": 0.55
  },
  "ISHANCH": {
    "prev": 51.02,
    "hi52": 83.37,
    "lo52": 36.0
  },
  "ITCHOTELS": {
    "prev": 149.01,
    "hi52": 261.62,
    "lo52": 139.1
  },
  "ITDC": {
    "prev": 426.7,
    "hi52": 712.8,
    "lo52": 386.55
  },
  "ITI": {
    "prev": 270.6,
    "hi52": 372.85,
    "lo52": 234.04
  },
  "IVALUE": {
    "prev": 235.38,
    "hi52": 340.0,
    "lo52": 207.35
  },
  "IVC": {
    "prev": 6.91,
    "hi52": 10.53,
    "lo52": 6.02
  },
  "IVP": {
    "prev": 130.67,
    "hi52": 206.99,
    "lo52": 121.01
  },
  "IXIGO": {
    "prev": 173.54,
    "hi52": 339.15,
    "lo52": 123.29
  },
  "J&KBANK": {
    "prev": 118.82,
    "hi52": 128.48,
    "lo52": 87.3
  },
  "JAGRAN": {
    "prev": 61.13,
    "hi52": 83.8,
    "lo52": 59.77
  },
  "JAGSNPHARM": {
    "prev": 183.34,
    "hi52": 301.65,
    "lo52": 155.0
  },
  "JAIBALAJI": {
    "prev": 64.68,
    "hi52": 149.45,
    "lo52": 57.5
  },
  "JAICORPLTD": {
    "prev": 102.12,
    "hi52": 178.24,
    "lo52": 81.49
  },
  "JAINAM": {
    "prev": 181.05,
    "hi52": 322.85,
    "lo52": 173.0
  },
  "JAINIK": {
    "prev": 116.0,
    "hi52": 153.1,
    "lo52": 60.6
  },
  "JAINREC": {
    "prev": 441.2,
    "hi52": 461.0,
    "lo52": 247.57
  },
  "JAIPURKURT": {
    "prev": 28.62,
    "hi52": 54.59,
    "lo52": 25.8
  },
  "JALAN": {
    "prev": 2.1,
    "hi52": 13.75,
    "lo52": 2.0
  },
  "JAMNAAUTO": {
    "prev": 119.68,
    "hi52": 152.6,
    "lo52": 69.7
  },
  "JARO": {
    "prev": 486.15,
    "hi52": 890.0,
    "lo52": 386.0
  },
  "JASH": {
    "prev": 368.5,
    "hi52": 698.95,
    "lo52": 337.2
  },
  "JAYAGROGN": {
    "prev": 167.59,
    "hi52": 280.3,
    "lo52": 162.0
  },
  "JAYBARMARU": {
    "prev": 85.88,
    "hi52": 115.89,
    "lo52": 55.5
  },
  "JAYBEE": {
    "prev": 87.75,
    "hi52": 300.0,
    "lo52": 70.0
  },
  "JAYESH": {
    "prev": 160.9,
    "hi52": 183.0,
    "lo52": 106.35
  },
  "JAYKAY": {
    "prev": 132.62,
    "hi52": 219.7,
    "lo52": 122.89
  },
  "JAYNECOIND": {
    "prev": 74.24,
    "hi52": 94.3,
    "lo52": 29.21
  },
  "JAYSREETEA": {
    "prev": 80.61,
    "hi52": 122.71,
    "lo52": 72.91
  },
  "JBCHEPHARM": {
    "prev": 2138.6,
    "hi52": 2195.0,
    "lo52": 1385.75
  },
  "JBMA": {
    "prev": 567.25,
    "hi52": 790.0,
    "lo52": 477.0
  },
  "JETFREIGHT": {
    "prev": 17.88,
    "hi52": 21.4,
    "lo52": 10.44
  },
  "JEYYAM": {
    "prev": 29.3,
    "hi52": 74.5,
    "lo52": 25.6
  },
  "JFLLIFE": {
    "prev": 9.95,
    "hi52": 22.2,
    "lo52": 9.5
  },
  "JGCHEM": {
    "prev": 332.0,
    "hi52": 558.0,
    "lo52": 280.45
  },
  "JHS": {
    "prev": 7.93,
    "hi52": 16.46,
    "lo52": 6.55
  },
  "JINDALPHOT": {
    "prev": 1141.4,
    "hi52": 1616.6,
    "lo52": 610.0
  },
  "JINDALPOLY": {
    "prev": 957.25,
    "hi52": 1026.45,
    "lo52": 365.0
  },
  "JINDALSAW": {
    "prev": 194.13,
    "hi52": 283.59,
    "lo52": 153.0
  },
  "JINDRILL": {
    "prev": 475.25,
    "hi52": 954.0,
    "lo52": 440.1
  },
  "JINDWORLD": {
    "prev": 21.32,
    "hi52": 79.3,
    "lo52": 19.1
  },
  "JISLDVREQS": {
    "prev": 21.65,
    "hi52": 35.95,
    "lo52": 18.5
  },
  "JISLJALEQS": {
    "prev": 30.17,
    "hi52": 66.45,
    "lo52": 27.1
  },
  "JIWANRAM": {
    "prev": 5.2,
    "hi52": 11.8,
    "lo52": 4.35
  },
  "JKCEMENT": {
    "prev": 5000.0,
    "hi52": 7565.5,
    "lo52": 4650.9
  },
  "JKIL": {
    "prev": 488.3,
    "hi52": 765.6,
    "lo52": 454.05
  },
  "JKIPL": {
    "prev": 51.58,
    "hi52": 126.95,
    "lo52": 49.5
  },
  "JKLAKSHMI": {
    "prev": 592.85,
    "hi52": 1021.2,
    "lo52": 574.55
  },
  "JKPAPER": {
    "prev": 336.9,
    "hi52": 444.8,
    "lo52": 290.0
  },
  "JKTYRE": {
    "prev": 417.25,
    "hi52": 611.9,
    "lo52": 244.0
  },
  "JLHL": {
    "prev": 1268.9,
    "hi52": 1770.0,
    "lo52": 1198.8
  },
  "JMA": {
    "prev": 80.57,
    "hi52": 111.99,
    "lo52": 64.3
  },
  "JMFINANCIL": {
    "prev": 123.16,
    "hi52": 199.8,
    "lo52": 80.2
  },
  "JNKINDIA": {
    "prev": 237.53,
    "hi52": 419.55,
    "lo52": 200.92
  },
  "JOCIL": {
    "prev": 110.49,
    "hi52": 177.8,
    "lo52": 106.21
  },
  "JPOLYINVST": {
    "prev": 1165.7,
    "hi52": 1487.7,
    "lo52": 651.0
  },
  "JPPOWER": {
    "prev": 16.36,
    "hi52": 27.7,
    "lo52": 12.52
  },
  "JSFB": {
    "prev": 349.25,
    "hi52": 552.5,
    "lo52": 330.0
  },
  "JSL": {
    "prev": 721.95,
    "hi52": 884.0,
    "lo52": 496.6
  },
  "JSLL": {
    "prev": 611.3,
    "hi52": 2450.0,
    "lo52": 400.25
  },
  "JSWCEMENT": {
    "prev": 116.13,
    "hi52": 162.15,
    "lo52": 106.65
  },
  "JSWHL": {
    "prev": 15142.0,
    "hi52": 27740.0,
    "lo52": 13700.0
  },
  "JSWINFRA": {
    "prev": 251.15,
    "hi52": 349.0,
    "lo52": 240.0
  },
  "JTEKTINDIA": {
    "prev": 127.27,
    "hi52": 188.5,
    "lo52": 116.6
  },
  "JTLIND": {
    "prev": 52.11,
    "hi52": 85.99,
    "lo52": 49.1
  },
  "JUBLCPL": {
    "prev": 1657.5,
    "hi52": 3013.4,
    "lo52": 1020.0
  },
  "JUBLFOOD": {
    "prev": 451.55,
    "hi52": 727.95,
    "lo52": 436.2
  },
  "JUBLINGREA": {
    "prev": 583.3,
    "hi52": 851.8,
    "lo52": 535.2
  },
  "JUBLPHARMA": {
    "prev": 831.35,
    "hi52": 1248.0,
    "lo52": 786.05
  },
  "JUNIPER": {
    "prev": 204.63,
    "hi52": 345.55,
    "lo52": 192.5
  },
  "JUSTDIAL": {
    "prev": 520.4,
    "hi52": 1048.9,
    "lo52": 499.5
  },
  "JWL": {
    "prev": 262.6,
    "hi52": 457.0,
    "lo52": 246.2
  },
  "JYOTHYLAB": {
    "prev": 208.55,
    "hi52": 399.9,
    "lo52": 199.0
  },
  "JYOTICNC": {
    "prev": 739.95,
    "hi52": 1330.0,
    "lo52": 686.75
  },
  "JYOTIGLOBL": {
    "prev": 36.0,
    "hi52": 77.75,
    "lo52": 34.8
  },
  "JYOTISTRUC": {
    "prev": 10.46,
    "hi52": 22.18,
    "lo52": 7.94
  },
  "K2INFRA": {
    "prev": 47.8,
    "hi52": 90.9,
    "lo52": 44.5
  },
  "KABRAEXTRU": {
    "prev": 208.95,
    "hi52": 334.7,
    "lo52": 180.0
  },
  "KAJARIACER": {
    "prev": 951.35,
    "hi52": 1321.9,
    "lo52": 758.7
  },
  "KAKATCEM": {
    "prev": 100.5,
    "hi52": 179.29,
    "lo52": 96.0
  },
  "KALAMANDIR": {
    "prev": 100.65,
    "hi52": 223.03,
    "lo52": 94.55
  },
  "KALPATARU": {
    "prev": 296.25,
    "hi52": 457.4,
    "lo52": 281.1
  },
  "KALYANIFRG": {
    "prev": 554.5,
    "hi52": 890.0,
    "lo52": 495.0
  },
  "KALYANKJIL": {
    "prev": 382.7,
    "hi52": 617.7,
    "lo52": 347.5
  },
  "KAMATHOTEL": {
    "prev": 182.56,
    "hi52": 347.0,
    "lo52": 160.95
  },
  "KAMDHENU": {
    "prev": 21.12,
    "hi52": 35.95,
    "lo52": 19.06
  },
  "KAMOPAINTS": {
    "prev": 4.29,
    "hi52": 12.49,
    "lo52": 3.95
  },
  "KANANIIND": {
    "prev": 1.35,
    "hi52": 2.72,
    "lo52": 1.17
  },
  "KANDARP": {
    "prev": 142.0,
    "hi52": 169.0,
    "lo52": 70.3
  },
  "KANORICHEM": {
    "prev": 62.98,
    "hi52": 101.75,
    "lo52": 58.15
  },
  "KANPRPLA": {
    "prev": 178.57,
    "hi52": 249.5,
    "lo52": 104.5
  },
  "KANSAINER": {
    "prev": 166.77,
    "hi52": 271.18,
    "lo52": 157.91
  },
  "KARMAENG": {
    "prev": 38.96,
    "hi52": 86.93,
    "lo52": 35.7
  },
  "KARNIKA": {
    "prev": 113.85,
    "hi52": 973.0,
    "lo52": 106.05
  },
  "KARURVYSYA": {
    "prev": 263.9,
    "hi52": 343.45,
    "lo52": 198.32
  },
  "KATARIA": {
    "prev": 102.0,
    "hi52": 129.0,
    "lo52": 85.5
  },
  "KAUSHALYA": {
    "prev": 767.95,
    "hi52": 1841.9,
    "lo52": 750.0
  },
  "KAYA": {
    "prev": 282.95,
    "hi52": 487.9,
    "lo52": 204.43
  },
  "KAYNES": {
    "prev": 3620.6,
    "hi52": 7705.0,
    "lo52": 3294.9
  },
  "KAYTEX": {
    "prev": 69.35,
    "hi52": 156.9,
    "lo52": 54.5
  },
  "KCEIL": {
    "prev": 116.95,
    "hi52": 388.05,
    "lo52": 105.0
  },
  "KCK": {
    "prev": 19.4,
    "hi52": 52.35,
    "lo52": 15.55
  },
  "KCP": {
    "prev": 137.5,
    "hi52": 230.0,
    "lo52": 127.0
  },
  "KCPSUGIND": {
    "prev": 23.82,
    "hi52": 41.1,
    "lo52": 21.75
  },
  "KDDL": {
    "prev": 2195.4,
    "hi52": 3351.0,
    "lo52": 2068.0
  },
  "KEC": {
    "prev": 546.1,
    "hi52": 947.0,
    "lo52": 511.9
  },
  "KECL": {
    "prev": 83.35,
    "hi52": 151.92,
    "lo52": 75.47
  },
  "KEEPLEARN": {
    "prev": 1.82,
    "hi52": 4.74,
    "lo52": 1.69
  },
  "KEI": {
    "prev": 4188.0,
    "hi52": 5303.0,
    "lo52": 2424.0
  },
  "KEL": {
    "prev": 77.25,
    "hi52": 148.0,
    "lo52": 77.0
  },
  "KELLTONTEC": {
    "prev": 16.09,
    "hi52": 147.95,
    "lo52": 14.6
  },
  "KEN": {
    "prev": 38.0,
    "hi52": 64.85,
    "lo52": 32.75
  },
  "KERNEX": {
    "prev": 962.0,
    "hi52": 1425.0,
    "lo52": 682.95
  },
  "KESORAMIND": {
    "prev": 8.05,
    "hi52": 13.94,
    "lo52": 4.55
  },
  "KEYFINSERV": {
    "prev": 258.95,
    "hi52": 479.0,
    "lo52": 232.02
  },
  "KFINTECH": {
    "prev": 914.55,
    "hi52": 1388.5,
    "lo52": 828.8
  },
  "KHADIM": {
    "prev": 88.01,
    "hi52": 311.1,
    "lo52": 80.92
  },
  "KHAICHEM": {
    "prev": 48.85,
    "hi52": 135.8,
    "lo52": 43.17
  },
  "KHAITANLTD": {
    "prev": 95.69,
    "hi52": 167.5,
    "lo52": 76.0
  },
  "KHANDSE": {
    "prev": 16.0,
    "hi52": 29.0,
    "lo52": 14.62
  },
  "KICL": {
    "prev": 4434.0,
    "hi52": 6296.0,
    "lo52": 4154.0
  },
  "KILITCH": {
    "prev": 316.1,
    "hi52": 500.0,
    "lo52": 299.95
  },
  "KIMS": {
    "prev": 645.1,
    "hi52": 798.4,
    "lo52": 528.05
  },
  "KINGFA": {
    "prev": 4073.3,
    "hi52": 4880.0,
    "lo52": 2550.0
  },
  "KIOCL": {
    "prev": 351.75,
    "hi52": 634.55,
    "lo52": 209.84
  },
  "KIRIINDUS": {
    "prev": 374.85,
    "hi52": 779.0,
    "lo52": 354.9
  },
  "KIRLOSBROS": {
    "prev": 1561.4,
    "hi52": 2475.0,
    "lo52": 1430.0
  },
  "KIRLOSENG": {
    "prev": 1376.7,
    "hi52": 1530.0,
    "lo52": 578.5
  },
  "KIRLOSIND": {
    "prev": 2735.8,
    "hi52": 4726.0,
    "lo52": 2619.2
  },
  "KIRLPNU": {
    "prev": 1050.7,
    "hi52": 1550.0,
    "lo52": 990.1
  },
  "KITEX": {
    "prev": 159.4,
    "hi52": 324.42,
    "lo52": 138.2
  },
  "KKCL": {
    "prev": 426.85,
    "hi52": 595.0,
    "lo52": 408.35
  },
  "KKJEWELS": {
    "prev": 95.45,
    "hi52": 166.75,
    "lo52": 72.1
  },
  "KLL": {
    "prev": 39.3,
    "hi52": 96.8,
    "lo52": 37.3
  },
  "KMEW": {
    "prev": 1545.2,
    "hi52": 3758.5,
    "lo52": 1264.05
  },
  "KMSUGAR": {
    "prev": 25.74,
    "hi52": 31.59,
    "lo52": 23.0
  },
  "KNAGRI": {
    "prev": 171.09,
    "hi52": 273.5,
    "lo52": 148.3
  },
  "KNRCON": {
    "prev": 118.01,
    "hi52": 254.0,
    "lo52": 111.0
  },
  "KOHINOOR": {
    "prev": 22.69,
    "hi52": 45.0,
    "lo52": 21.5
  },
  "KOKUYOCMLN": {
    "prev": 76.94,
    "hi52": 137.9,
    "lo52": 73.01
  },
  "KOLTEPATIL": {
    "prev": 324.65,
    "hi52": 497.55,
    "lo52": 311.4
  },
  "KONSTELEC": {
    "prev": 30.9,
    "hi52": 89.95,
    "lo52": 29.65
  },
  "KONTOR": {
    "prev": 70.0,
    "hi52": 91.8,
    "lo52": 53.25
  },
  "KOPRAN": {
    "prev": 118.22,
    "hi52": 214.0,
    "lo52": 110.8
  },
  "KORE": {
    "prev": 102.9,
    "hi52": 212.3,
    "lo52": 93.15
  },
  "KOTARISUG": {
    "prev": 23.7,
    "hi52": 41.44,
    "lo52": 22.72
  },
  "KOTHARIPET": {
    "prev": 110.88,
    "hi52": 191.95,
    "lo52": 102.35
  },
  "KOTHARIPRO": {
    "prev": 63.86,
    "hi52": 109.0,
    "lo52": 58.05
  },
  "KOTYARK": {
    "prev": 371.0,
    "hi52": 399.4,
    "lo52": 316.0
  },
  "KPEL": {
    "prev": 279.2,
    "hi52": 583.7,
    "lo52": 237.9
  },
  "KPIGREEN": {
    "prev": 378.0,
    "hi52": 563.0,
    "lo52": 335.65
  },
  "KPIL": {
    "prev": 1071.0,
    "hi52": 1335.6,
    "lo52": 786.3
  },
  "KPITTECH": {
    "prev": 660.95,
    "hi52": 1434.5,
    "lo52": 624.9
  },
  "KPRMILL": {
    "prev": 823.1,
    "hi52": 1389.0,
    "lo52": 796.1
  },
  "KRBL": {
    "prev": 287.35,
    "hi52": 495.0,
    "lo52": 261.1
  },
  "KREBSBIO": {
    "prev": 48.0,
    "hi52": 113.5,
    "lo52": 45.75
  },
  "KRIDHANINF": {
    "prev": 2.32,
    "hi52": 5.39,
    "lo52": 2.2
  },
  "KRISHANA": {
    "prev": 487.2,
    "hi52": 619.0,
    "lo52": 210.0
  },
  "KRISHCA": {
    "prev": 173.9,
    "hi52": 300.0,
    "lo52": 150.0
  },
  "KRISHIVAL": {
    "prev": 320.1,
    "hi52": 508.0,
    "lo52": 282.3
  },
  "KRISHNADEF": {
    "prev": 898.4,
    "hi52": 1240.0,
    "lo52": 601.0
  },
  "KRISHPP": {
    "prev": 106.55,
    "hi52": 135.2,
    "lo52": 95.05
  },
  "KRITI": {
    "prev": 68.63,
    "hi52": 177.51,
    "lo52": 58.63
  },
  "KRITIKA": {
    "prev": 5.84,
    "hi52": 11.22,
    "lo52": 4.82
  },
  "KRITINUT": {
    "prev": 63.52,
    "hi52": 125.01,
    "lo52": 58.22
  },
  "KRMAYURVED": {
    "prev": 196.55,
    "hi52": 231.5,
    "lo52": 156.15
  },
  "KRN": {
    "prev": 896.85,
    "hi52": 1031.8,
    "lo52": 589.8
  },
  "KRONOX": {
    "prev": 110.65,
    "hi52": 207.49,
    "lo52": 103.72
  },
  "KROSS": {
    "prev": 171.69,
    "hi52": 237.6,
    "lo52": 150.06
  },
  "KRSNAA": {
    "prev": 587.65,
    "hi52": 894.4,
    "lo52": 567.35
  },
  "KRT": {
    "prev": 117.1,
    "hi52": 129.07,
    "lo52": 103.0
  },
  "KRYSTAL": {
    "prev": 553.15,
    "hi52": 729.5,
    "lo52": 423.05
  },
  "KSB": {
    "prev": 782.3,
    "hi52": 912.0,
    "lo52": 647.8
  },
  "KSCL": {
    "prev": 814.0,
    "hi52": 1602.0,
    "lo52": 705.1
  },
  "KSHINTL": {
    "prev": 434.2,
    "hi52": 443.75,
    "lo52": 330.0
  },
  "KSL": {
    "prev": 651.65,
    "hi52": 988.8,
    "lo52": 625.15
  },
  "KSOLVES": {
    "prev": 275.45,
    "hi52": 497.0,
    "lo52": 250.05
  },
  "KTKBANK": {
    "prev": 228.93,
    "hi52": 238.95,
    "lo52": 167.55
  },
  "KUANTUM": {
    "prev": 77.63,
    "hi52": 135.0,
    "lo52": 71.51
  },
  "KWIL": {
    "prev": 23.53,
    "hi52": 31.29,
    "lo52": 22.42
  },
  "LAGNAM": {
    "prev": 63.8,
    "hi52": 138.1,
    "lo52": 58.66
  },
  "LAKSHYA": {
    "prev": 99.5,
    "hi52": 204.95,
    "lo52": 95.6
  },
  "LAL": {
    "prev": 7.13,
    "hi52": 13.6,
    "lo52": 5.56
  },
  "LALPATHLAB": {
    "prev": 1308.2,
    "hi52": 3540.0,
    "lo52": 1272.6
  },
  "LAMBODHARA": {
    "prev": 94.88,
    "hi52": 162.0,
    "lo52": 86.86
  },
  "LAMOSAIC": {
    "prev": 23.7,
    "hi52": 48.4,
    "lo52": 22.45
  },
  "LANDMARK": {
    "prev": 360.4,
    "hi52": 662.8,
    "lo52": 329.8
  },
  "LAOPALA": {
    "prev": 184.05,
    "hi52": 287.0,
    "lo52": 176.22
  },
  "LASA": {
    "prev": 7.13,
    "hi52": 20.95,
    "lo52": 6.91
  },
  "LATENTVIEW": {
    "prev": 267.35,
    "hi52": 517.5,
    "lo52": 248.0
  },
  "LATTEYS": {
    "prev": 19.5,
    "hi52": 37.0,
    "lo52": 17.61
  },
  "LAURUSLABS": {
    "prev": 987.2,
    "hi52": 1141.0,
    "lo52": 517.65
  },
  "LAXMIDENTL": {
    "prev": 173.71,
    "hi52": 509.95,
    "lo52": 166.43
  },
  "LAXMIINDIA": {
    "prev": 82.55,
    "hi52": 180.9,
    "lo52": 77.61
  },
  "LEMERITE": {
    "prev": 446.1,
    "hi52": 537.85,
    "lo52": 280.0
  },
  "LEMONTREE": {
    "prev": 105.66,
    "hi52": 180.68,
    "lo52": 99.61
  },
  "LENSKART": {
    "prev": 526.2,
    "hi52": 543.9,
    "lo52": 356.1
  },
  "LFIC": {
    "prev": 120.78,
    "hi52": 250.5,
    "lo52": 112.99
  },
  "LGBBROSLTD": {
    "prev": 1710.0,
    "hi52": 2048.0,
    "lo52": 1081.0
  },
  "LGEINDIA": {
    "prev": 1559.7,
    "hi52": 1749.0,
    "lo52": 1325.5
  },
  "LGHL": {
    "prev": 263.35,
    "hi52": 959.0,
    "lo52": 231.35
  },
  "LIBAS": {
    "prev": 10.04,
    "hi52": 15.7,
    "lo52": 9.11
  },
  "LIBERTSHOE": {
    "prev": 248.34,
    "hi52": 470.0,
    "lo52": 217.1
  },
  "LICHSGFIN": {
    "prev": 486.15,
    "hi52": 646.5,
    "lo52": 458.9
  },
  "LIKHITHA": {
    "prev": 141.74,
    "hi52": 324.0,
    "lo52": 131.45
  },
  "LINC": {
    "prev": 102.87,
    "hi52": 160.74,
    "lo52": 95.11
  },
  "LINCOLN": {
    "prev": 600.4,
    "hi52": 677.0,
    "lo52": 440.0
  },
  "LINDEINDIA": {
    "prev": 7014.5,
    "hi52": 7870.0,
    "lo52": 5242.4
  },
  "LLOYDS": {
    "prev": 49.0,
    "hi52": 125.75,
    "lo52": 41.1
  },
  "LLOYDSENGG": {
    "prev": 41.3,
    "hi52": 84.27,
    "lo52": 38.0
  },
  "LLOYDSENT": {
    "prev": 45.4,
    "hi52": 96.4,
    "lo52": 41.3
  },
  "LLOYDSME": {
    "prev": 1245.8,
    "hi52": 1612.0,
    "lo52": 1015.0
  },
  "LMW": {
    "prev": 13702.0,
    "hi52": 18250.0,
    "lo52": 12500.0
  },
  "LOKESHMACH": {
    "prev": 198.33,
    "hi52": 255.87,
    "lo52": 138.96
  },
  "LORDSCHLO": {
    "prev": 119.13,
    "hi52": 241.99,
    "lo52": 112.0
  },
  "LOTUSDEV": {
    "prev": 114.58,
    "hi52": 218.49,
    "lo52": 107.0
  },
  "LOTUSEYE": {
    "prev": 109.08,
    "hi52": 147.0,
    "lo52": 59.65
  },
  "LOVABLE": {
    "prev": 65.0,
    "hi52": 110.0,
    "lo52": 60.0
  },
  "LPDC": {
    "prev": 6.09,
    "hi52": 10.16,
    "lo52": 5.52
  },
  "LRRPL": {
    "prev": 70.85,
    "hi52": 99.5,
    "lo52": 48.6
  },
  "LTF": {
    "prev": 261.2,
    "hi52": 329.45,
    "lo52": 140.0
  },
  "LTFOODS": {
    "prev": 378.45,
    "hi52": 518.55,
    "lo52": 288.25
  },
  "LTTS": {
    "prev": 3229.1,
    "hi52": 4734.0,
    "lo52": 3010.0
  },
  "LUMAXIND": {
    "prev": 5055.5,
    "hi52": 6934.5,
    "lo52": 2100.05
  },
  "LUMAXTECH": {
    "prev": 1568.0,
    "hi52": 1823.9,
    "lo52": 449.0
  },
  "LUPIN": {
    "prev": 2322.5,
    "hi52": 2377.6,
    "lo52": 1795.2
  },
  "LUXIND": {
    "prev": 941.1,
    "hi52": 1645.8,
    "lo52": 840.0
  },
  "LXCHEM": {
    "prev": 120.16,
    "hi52": 241.0,
    "lo52": 110.15
  },
  "LYKALABS": {
    "prev": 54.95,
    "hi52": 128.78,
    "lo52": 49.5
  },
  "LYPSAGEMS": {
    "prev": 4.67,
    "hi52": 10.93,
    "lo52": 4.33
  },
  "M&MFIN": {
    "prev": 2277.0,
    "hi52": 2335.01,
    "lo52": 1823.0
  },
  "MACOBSTECH": {
    "prev": 202.0,
    "hi52": 246.95,
    "lo52": 150.6
  },
  "MACPOWER": {
    "prev": 849.8,
    "hi52": 1090.0,
    "lo52": 723.0
  },
  "MADHAV": {
    "prev": 34.28,
    "hi52": 53.88,
    "lo52": 31.61
  },
  "MADHUCON": {
    "prev": 4.22,
    "hi52": 9.49,
    "lo52": 4.01
  },
  "MADHUSUDAN": {
    "prev": 140.6,
    "hi52": 190.0,
    "lo52": 108.6
  },
  "MADRASFERT": {
    "prev": 60.66,
    "hi52": 107.06,
    "lo52": 57.2
  },
  "MAGADSUGAR": {
    "prev": 459.45,
    "hi52": 821.0,
    "lo52": 417.0
  },
  "MAGNUM": {
    "prev": 18.1,
    "hi52": 32.38,
    "lo52": 16.4
  },
  "MAGSON": {
    "prev": 140.0,
    "hi52": 166.1,
    "lo52": 98.1
  },
  "MAHABANK": {
    "prev": 65.49,
    "hi52": 77.0,
    "lo52": 42.0
  },
  "MAHAPEXLTD": {
    "prev": 56.45,
    "hi52": 139.94,
    "lo52": 50.52
  },
  "MAHEPC": {
    "prev": 115.58,
    "hi52": 185.12,
    "lo52": 105.0
  },
  "MAHESHWARI": {
    "prev": 44.13,
    "hi52": 65.0,
    "lo52": 39.04
  },
  "MAHLIFE": {
    "prev": 341.4,
    "hi52": 427.05,
    "lo52": 278.7
  },
  "MAHLOG": {
    "prev": 365.7,
    "hi52": 432.7,
    "lo52": 250.3
  },
  "MAHSCOOTER": {
    "prev": 12441.0,
    "hi52": 14585.0,
    "lo52": 11822.0
  },
  "MAHSEAMLES": {
    "prev": 564.75,
    "hi52": 773.8,
    "lo52": 500.7
  },
  "MAITHANALL": {
    "prev": 935.3,
    "hi52": 1264.0,
    "lo52": 835.25
  },
  "MAITREYA": {
    "prev": 189.1,
    "hi52": 329.0,
    "lo52": 178.6
  },
  "MAL": {
    "prev": 32.2,
    "hi52": 80.2,
    "lo52": 26.25
  },
  "MALLCOM": {
    "prev": 1033.2,
    "hi52": 1520.0,
    "lo52": 976.6
  },
  "MALUPAPER": {
    "prev": 31.87,
    "hi52": 50.68,
    "lo52": 28.76
  },
  "MAMATA": {
    "prev": 374.0,
    "hi52": 541.0,
    "lo52": 311.55
  },
  "MANAKCOAT": {
    "prev": 106.16,
    "hi52": 182.82,
    "lo52": 75.0
  },
  "MANAKSIA": {
    "prev": 50.14,
    "hi52": 85.6,
    "lo52": 46.9
  },
  "MANAKSTEEL": {
    "prev": 52.33,
    "hi52": 77.78,
    "lo52": 43.05
  },
  "MANALIPETC": {
    "prev": 45.51,
    "hi52": 81.1,
    "lo52": 42.0
  },
  "MANAPPURAM": {
    "prev": 259.25,
    "hi52": 321.6,
    "lo52": 219.39
  },
  "MANBA": {
    "prev": 114.27,
    "hi52": 159.5,
    "lo52": 108.1
  },
  "MANCREDIT": {
    "prev": 170.39,
    "hi52": 215.75,
    "lo52": 145.0
  },
  "MANDEEP": {
    "prev": 18.55,
    "hi52": 31.9,
    "lo52": 17.3
  },
  "MANGLMCEM": {
    "prev": 833.8,
    "hi52": 940.35,
    "lo52": 665.0
  },
  "MANILAM": {
    "prev": 58.15,
    "hi52": 60.0,
    "lo52": 49.85
  },
  "MANINDS": {
    "prev": 371.4,
    "hi52": 491.0,
    "lo52": 239.05
  },
  "MANINFRA": {
    "prev": 91.09,
    "hi52": 190.83,
    "lo52": 85.1
  },
  "MANKIND": {
    "prev": 2000.0,
    "hi52": 2716.5,
    "lo52": 1909.7
  },
  "MANOMAY": {
    "prev": 203.47,
    "hi52": 259.88,
    "lo52": 154.1
  },
  "MANORAMA": {
    "prev": 1271.9,
    "hi52": 1760.0,
    "lo52": 849.95
  },
  "MANORG": {
    "prev": 400.25,
    "hi52": 637.85,
    "lo52": 347.75
  },
  "MANUGRAPH": {
    "prev": 12.28,
    "hi52": 25.3,
    "lo52": 11.55
  },
  "MANYAVAR": {
    "prev": 355.15,
    "hi52": 849.9,
    "lo52": 329.2
  },
  "MAPMYINDIA": {
    "prev": 915.7,
    "hi52": 2166.7,
    "lo52": 853.0
  },
  "MARALOVER": {
    "prev": 40.2,
    "hi52": 82.15,
    "lo52": 36.5
  },
  "MARATHON": {
    "prev": 418.95,
    "hi52": 769.45,
    "lo52": 370.0
  },
  "MARC": {
    "prev": 64.25,
    "hi52": 74.4,
    "lo52": 40.75
  },
  "MARCO": {
    "prev": 34.1,
    "hi52": 54.5,
    "lo52": 26.75
  },
  "MARICO": {
    "prev": 744.3,
    "hi52": 813.5,
    "lo52": 622.2
  },
  "MARINE": {
    "prev": 170.73,
    "hi52": 258.0,
    "lo52": 155.1
  },
  "MARKOLINES": {
    "prev": 151.49,
    "hi52": 188.0,
    "lo52": 131.65
  },
  "MARKSANS": {
    "prev": 170.05,
    "hi52": 270.7,
    "lo52": 156.0
  },
  "MARSONS": {
    "prev": 133.97,
    "hi52": 152.0,
    "lo52": 124.02
  },
  "MARUSHIKA": {
    "prev": 98.8,
    "hi52": 123.0,
    "lo52": 90.85
  },
  "MASFIN": {
    "prev": 302.55,
    "hi52": 352.8,
    "lo52": 226.0
  },
  "MASKINVEST": {
    "prev": 130.56,
    "hi52": 246.09,
    "lo52": 117.51
  },
  "MASON": {
    "prev": 141.0,
    "hi52": 220.0,
    "lo52": 76.0
  },
  "MASTEK": {
    "prev": 1449.5,
    "hi52": 2818.0,
    "lo52": 1376.0
  },
  "MASTER": {
    "prev": 302.0,
    "hi52": 436.0,
    "lo52": 272.2
  },
  "MASTERTR": {
    "prev": 68.77,
    "hi52": 174.4,
    "lo52": 62.05
  },
  "MATRIMONY": {
    "prev": 423.45,
    "hi52": 589.8,
    "lo52": 364.05
  },
  "MAWANASUG": {
    "prev": 82.6,
    "hi52": 111.5,
    "lo52": 75.08
  },
  "MAXESTATES": {
    "prev": 368.9,
    "hi52": 564.3,
    "lo52": 335.9
  },
  "MAXIND": {
    "prev": 145.16,
    "hi52": 241.57,
    "lo52": 137.06
  },
  "MAXPOSURE": {
    "prev": 34.0,
    "hi52": 74.0,
    "lo52": 32.0
  },
  "MAXVOLT": {
    "prev": 262.5,
    "hi52": 509.0,
    "lo52": 163.0
  },
  "MAYASHEEL": {
    "prev": 46.45,
    "hi52": 85.0,
    "lo52": 40.05
  },
  "MAYURUNIQ": {
    "prev": 509.35,
    "hi52": 629.9,
    "lo52": 441.0
  },
  "MAZDA": {
    "prev": 171.31,
    "hi52": 337.77,
    "lo52": 168.87
  },
  "MBAPL": {
    "prev": 453.05,
    "hi52": 489.45,
    "lo52": 240.0
  },
  "MBEL": {
    "prev": 271.05,
    "hi52": 535.9,
    "lo52": 246.0
  },
  "MBLINFRA": {
    "prev": 22.08,
    "hi52": 57.0,
    "lo52": 20.05
  },
  "MCLEODRUSS": {
    "prev": 34.74,
    "hi52": 68.47,
    "lo52": 29.35
  },
  "MCLOUD": {
    "prev": 21.75,
    "hi52": 105.42,
    "lo52": 20.67
  },
  "MCX": {
    "prev": 2414.5,
    "hi52": 11219.0,
    "lo52": 2068.5
  },
  "MDL": {
    "prev": 56.4,
    "hi52": 105.5,
    "lo52": 43.0
  },
  "MEDANTA": {
    "prev": 1005.7,
    "hi52": 1456.5,
    "lo52": 965.0
  },
  "MEDIASSIST": {
    "prev": 325.15,
    "hi52": 594.1,
    "lo52": 294.7
  },
  "MEDICAMEQ": {
    "prev": 253.6,
    "hi52": 544.0,
    "lo52": 237.0
  },
  "MEDICO": {
    "prev": 38.15,
    "hi52": 62.48,
    "lo52": 33.3
  },
  "MEDIORG": {
    "prev": 22.2,
    "hi52": 49.7,
    "lo52": 19.6
  },
  "MEDPLUS": {
    "prev": 820.65,
    "hi52": 1045.3,
    "lo52": 678.05
  },
  "MEESHO": {
    "prev": 144.6,
    "hi52": 254.4,
    "lo52": 125.56
  },
  "MEGASTAR": {
    "prev": 250.13,
    "hi52": 305.0,
    "lo52": 187.61
  },
  "MEGATHERM": {
    "prev": 194.65,
    "hi52": 380.0,
    "lo52": 185.0
  },
  "MEIL": {
    "prev": 231.46,
    "hi52": 573.7,
    "lo52": 212.8
  },
  "MENONBE": {
    "prev": 118.11,
    "hi52": 145.9,
    "lo52": 86.0
  },
  "METROBRAND": {
    "prev": 930.7,
    "hi52": 1340.4,
    "lo52": 892.8
  },
  "METROPOLIS": {
    "prev": 441.1,
    "hi52": 2263.0,
    "lo52": 421.2
  },
  "MFML": {
    "prev": 23.0,
    "hi52": 36.99,
    "lo52": 19.66
  },
  "MFSL": {
    "prev": 1639.3,
    "hi52": 1892.5,
    "lo52": 1085.0
  },
  "MGEL": {
    "prev": 10.49,
    "hi52": 18.4,
    "lo52": 9.53
  },
  "MGL": {
    "prev": 967.1,
    "hi52": 1586.9,
    "lo52": 900.0
  },
  "MGSL": {
    "prev": 76.15,
    "hi52": 120.0,
    "lo52": 69.9
  },
  "MHHL": {
    "prev": 39.0,
    "hi52": 66.0,
    "lo52": 33.1
  },
  "MHLXMIRU": {
    "prev": 167.04,
    "hi52": 270.68,
    "lo52": 157.0
  },
  "MHRIL": {
    "prev": 256.75,
    "hi52": 382.0,
    "lo52": 246.05
  },
  "MICEL": {
    "prev": 32.81,
    "hi52": 82.97,
    "lo52": 31.17
  },
  "MICROPRO": {
    "prev": 18.75,
    "hi52": 28.6,
    "lo52": 17.2
  },
  "MIDHANI": {
    "prev": 315.3,
    "hi52": 469.0,
    "lo52": 233.0
  },
  "MIDWESTLTD": {
    "prev": 1239.1,
    "hi52": 1859.9,
    "lo52": 1048.5
  },
  "MIEL": {
    "prev": 13.65,
    "hi52": 35.0,
    "lo52": 13.0
  },
  "MINDACORP": {
    "prev": 502.5,
    "hi52": 619.95,
    "lo52": 445.05
  },
  "MINDSPACE": {
    "prev": 457.02,
    "hi52": 511.68,
    "lo52": 360.2
  },
  "MINDTECK": {
    "prev": 170.0,
    "hi52": 307.68,
    "lo52": 145.0
  },
  "MIRCELECTR": {
    "prev": 25.49,
    "hi52": 37.4,
    "lo52": 11.06
  },
  "MIRZAINT": {
    "prev": 29.35,
    "hi52": 44.0,
    "lo52": 25.03
  },
  "MITCON": {
    "prev": 53.27,
    "hi52": 97.62,
    "lo52": 49.56
  },
  "MITTAL": {
    "prev": 0.97,
    "hi52": 1.98,
    "lo52": 0.71
  },
  "MKPL": {
    "prev": 4.92,
    "hi52": 9.78,
    "lo52": 4.48
  },
  "MMEL": {
    "prev": 24.55,
    "hi52": 84.45,
    "lo52": 22.5
  },
  "MMFL": {
    "prev": 428.25,
    "hi52": 501.05,
    "lo52": 288.1
  },
  "MMP": {
    "prev": 217.67,
    "hi52": 318.0,
    "lo52": 201.99
  },
  "MMTC": {
    "prev": 60.04,
    "hi52": 88.19,
    "lo52": 44.5
  },
  "MOBIKWIK": {
    "prev": 181.82,
    "hi52": 337.0,
    "lo52": 171.31
  },
  "MOBILISE": {
    "prev": 54.0,
    "hi52": 67.3,
    "lo52": 45.0
  },
  "MODINATUR": {
    "prev": 299.65,
    "hi52": 409.95,
    "lo52": 260.0
  },
  "MODIRUBBER": {
    "prev": 109.81,
    "hi52": 167.5,
    "lo52": 90.0
  },
  "MODIS": {
    "prev": 316.6,
    "hi52": 409.0,
    "lo52": 276.0
  },
  "MODISONLTD": {
    "prev": 125.96,
    "hi52": 197.45,
    "lo52": 112.0
  },
  "MODTHREAD": {
    "prev": 44.96,
    "hi52": 57.8,
    "lo52": 35.61
  },
  "MOHITIND": {
    "prev": 22.89,
    "hi52": 40.19,
    "lo52": 20.66
  },
  "MOIL": {
    "prev": 291.6,
    "hi52": 405.6,
    "lo52": 242.35
  },
  "MOKSH": {
    "prev": 10.38,
    "hi52": 16.65,
    "lo52": 9.61
  },
  "MOL": {
    "prev": 42.62,
    "hi52": 106.3,
    "lo52": 40.05
  },
  "MOLDTECH": {
    "prev": 123.22,
    "hi52": 221.0,
    "lo52": 114.45
  },
  "MOLDTKPAC": {
    "prev": 512.15,
    "hi52": 892.9,
    "lo52": 410.0
  },
  "MONARCH": {
    "prev": 268.0,
    "hi52": 398.8,
    "lo52": 239.85
  },
  "MONEYBOXX": {
    "prev": 62.25,
    "hi52": 183.0,
    "lo52": 44.02
  },
  "MONOLITH": {
    "prev": 417.35,
    "hi52": 607.4,
    "lo52": 219.45
  },
  "MONOPHARMA": {
    "prev": 12.2,
    "hi52": 28.25,
    "lo52": 9.45
  },
  "MONTECARLO": {
    "prev": 525.35,
    "hi52": 860.95,
    "lo52": 493.6
  },
  "MOREPENLAB": {
    "prev": 36.99,
    "hi52": 70.5,
    "lo52": 33.5
  },
  "MOS": {
    "prev": 12.9,
    "hi52": 301.0,
    "lo52": 11.65
  },
  "MOSCHIP": {
    "prev": 165.72,
    "hi52": 288.45,
    "lo52": 129.98
  },
  "MOTILALOFS": {
    "prev": 662.6,
    "hi52": 1097.1,
    "lo52": 513.0
  },
  "MOTISONS": {
    "prev": 13.05,
    "hi52": 24.02,
    "lo52": 10.62
  },
  "MOTOGENFIN": {
    "prev": 20.09,
    "hi52": 31.8,
    "lo52": 18.3
  },
  "MPEL": {
    "prev": 71.25,
    "hi52": 153.9,
    "lo52": 42.0
  },
  "MPHASIS": {
    "prev": 2091.1,
    "hi52": 3037.2,
    "lo52": 2030.5
  },
  "MPSLTD": {
    "prev": 1506.0,
    "hi52": 3079.0,
    "lo52": 1336.1
  },
  "MRF": {
    "prev": 127535.0,
    "hi52": 163600.0,
    "lo52": 108001.0
  },
  "MRIL": {
    "prev": 39.75,
    "hi52": 82.0,
    "lo52": 38.0
  },
  "MRPL": {
    "prev": 191.19,
    "hi52": 212.31,
    "lo52": 118.01
  },
  "MSPL": {
    "prev": 30.04,
    "hi52": 41.0,
    "lo52": 23.71
  },
  "MSTCLTD": {
    "prev": 415.65,
    "hi52": 582.45,
    "lo52": 382.25
  },
  "MSUMI": {
    "prev": 36.98,
    "hi52": 65.96,
    "lo52": 35.7
  },
  "MTARTECH": {
    "prev": 3525.3,
    "hi52": 3920.0,
    "lo52": 1155.6
  },
  "MTNL": {
    "prev": 24.75,
    "hi52": 58.2,
    "lo52": 23.04
  },
  "MUFIN": {
    "prev": 102.99,
    "hi52": 126.34,
    "lo52": 63.11
  },
  "MUFTI": {
    "prev": 74.61,
    "hi52": 189.0,
    "lo52": 72.05
  },
  "MUKANDLTD": {
    "prev": 126.39,
    "hi52": 162.0,
    "lo52": 84.4
  },
  "MUKKA": {
    "prev": 21.13,
    "hi52": 34.79,
    "lo52": 20.16
  },
  "MUKTAARTS": {
    "prev": 42.03,
    "hi52": 92.1,
    "lo52": 37.3
  },
  "MUNISH": {
    "prev": 56.4,
    "hi52": 143.0,
    "lo52": 50.2
  },
  "MUNJALAU": {
    "prev": 74.14,
    "hi52": 114.55,
    "lo52": 60.52
  },
  "MUNJALSHOW": {
    "prev": 120.46,
    "hi52": 157.5,
    "lo52": 104.2
  },
  "MURUDCERA": {
    "prev": 29.39,
    "hi52": 48.5,
    "lo52": 28.01
  },
  "MUTHOOTCAP": {
    "prev": 196.53,
    "hi52": 366.3,
    "lo52": 175.25
  },
  "MUTHOOTFIN": {
    "prev": 3315.9,
    "hi52": 4149.5,
    "lo52": 1965.0
  },
  "MUTHOOTMF": {
    "prev": 150.85,
    "hi52": 199.39,
    "lo52": 120.0
  },
  "MVGJL": {
    "prev": 143.18,
    "hi52": 280.0,
    "lo52": 136.81
  },
  "MVKAGRO": {
    "prev": 443.5,
    "hi52": 819.0,
    "lo52": 45.25
  },
  "MWL": {
    "prev": 265.65,
    "hi52": 295.95,
    "lo52": 150.0
  },
  "MYMUDRA": {
    "prev": 75.25,
    "hi52": 119.1,
    "lo52": 51.6
  },
  "NACLIND": {
    "prev": 137.99,
    "hi52": 339.45,
    "lo52": 98.15
  },
  "NAGAFERT": {
    "prev": 3.97,
    "hi52": 6.54,
    "lo52": 3.81
  },
  "NAGREEKCAP": {
    "prev": 22.96,
    "hi52": 42.75,
    "lo52": 20.6
  },
  "NAGREEKEXP": {
    "prev": 21.34,
    "hi52": 40.0,
    "lo52": 20.19
  },
  "NAHARCAP": {
    "prev": 225.85,
    "hi52": 376.65,
    "lo52": 209.01
  },
  "NAHARINDUS": {
    "prev": 89.93,
    "hi52": 150.0,
    "lo52": 86.15
  },
  "NAHARPOLY": {
    "prev": 237.53,
    "hi52": 389.95,
    "lo52": 191.0
  },
  "NAHARSPING": {
    "prev": 210.54,
    "hi52": 309.0,
    "lo52": 149.2
  },
  "NAM-INDIA": {
    "prev": 838.9,
    "hi52": 1009.0,
    "lo52": 498.05
  },
  "NAMAN": {
    "prev": 51.5,
    "hi52": 119.95,
    "lo52": 48.0
  },
  "NAMOEWASTE": {
    "prev": 159.0,
    "hi52": 229.9,
    "lo52": 127.0
  },
  "NARMADA": {
    "prev": 32.5,
    "hi52": 35.99,
    "lo52": 14.82
  },
  "NATCAPSUQ": {
    "prev": 145.41,
    "hi52": 296.0,
    "lo52": 140.36
  },
  "NATCOPHARM": {
    "prev": 959.2,
    "hi52": 1059.0,
    "lo52": 726.8
  },
  "NATHBIOGEN": {
    "prev": 139.75,
    "hi52": 238.69,
    "lo52": 131.98
  },
  "NATIONALUM": {
    "prev": 368.5,
    "hi52": 431.5,
    "lo52": 137.75
  },
  "NAVA": {
    "prev": 553.5,
    "hi52": 735.0,
    "lo52": 396.3
  },
  "NAVINFLUOR": {
    "prev": 6124.0,
    "hi52": 6965.0,
    "lo52": 3670.6
  },
  "NAVKARCORP": {
    "prev": 82.77,
    "hi52": 140.2,
    "lo52": 79.32
  },
  "NAVKARURB": {
    "prev": 0.87,
    "hi52": 15.3,
    "lo52": 0.83
  },
  "NAVNETEDUL": {
    "prev": 127.07,
    "hi52": 168.5,
    "lo52": 123.12
  },
  "NAZARA": {
    "prev": 235.35,
    "hi52": 1453.0,
    "lo52": 215.7
  },
  "NBCC": {
    "prev": 83.91,
    "hi52": 130.7,
    "lo52": 75.0
  },
  "NBIFIN": {
    "prev": 1723.8,
    "hi52": 3320.9,
    "lo52": 1701.1
  },
  "NCC": {
    "prev": 140.59,
    "hi52": 242.15,
    "lo52": 131.16
  },
  "NCLIND": {
    "prev": 169.8,
    "hi52": 239.39,
    "lo52": 160.06
  },
  "NDGL": {
    "prev": 2630.0,
    "hi52": 4685.4,
    "lo52": 2220.4
  },
  "NDL": {
    "prev": 2.23,
    "hi52": 4.42,
    "lo52": 2.05
  },
  "NDLVENTURE": {
    "prev": 114.05,
    "hi52": 134.0,
    "lo52": 48.94
  },
  "NDRAUTO": {
    "prev": 681.55,
    "hi52": 1220.0,
    "lo52": 572.85
  },
  "NDTV": {
    "prev": 69.95,
    "hi52": 177.95,
    "lo52": 65.0
  },
  "NECCLTD": {
    "prev": 12.99,
    "hi52": 27.25,
    "lo52": 11.51
  },
  "NECLIFE": {
    "prev": 10.96,
    "hi52": 28.25,
    "lo52": 10.42
  },
  "NEELAM": {
    "prev": 10.35,
    "hi52": 32.85,
    "lo52": 10.15
  },
  "NELCAST": {
    "prev": 119.83,
    "hi52": 180.9,
    "lo52": 80.6
  },
  "NELCO": {
    "prev": 587.35,
    "hi52": 1161.0,
    "lo52": 532.2
  },
  "NEOCHEM": {
    "prev": 71.5,
    "hi52": 113.4,
    "lo52": 66.35
  },
  "NEOGEN": {
    "prev": 1336.4,
    "hi52": 1797.9,
    "lo52": 966.7
  },
  "NEPHROCARE": {
    "prev": 63.55,
    "hi52": 183.0,
    "lo52": 57.95
  },
  "NEPHROPLUS": {
    "prev": 532.9,
    "hi52": 616.0,
    "lo52": 446.0
  },
  "NESCO": {
    "prev": 1055.4,
    "hi52": 1638.9,
    "lo52": 875.0
  },
  "NETWEB": {
    "prev": 3284.4,
    "hi52": 4479.0,
    "lo52": 1251.55
  },
  "NETWORK18": {
    "prev": 30.91,
    "hi52": 65.29,
    "lo52": 29.02
  },
  "NEULANDLAB": {
    "prev": 11995.0,
    "hi52": 19747.0,
    "lo52": 10400.15
  },
  "NEWGEN": {
    "prev": 440.6,
    "hi52": 1377.15,
    "lo52": 415.0
  },
  "NEWJAISA": {
    "prev": 19.7,
    "hi52": 53.35,
    "lo52": 15.15
  },
  "NEXTMEDIA": {
    "prev": 4.16,
    "hi52": 8.48,
    "lo52": 3.51
  },
  "NFL": {
    "prev": 69.39,
    "hi52": 112.2,
    "lo52": 66.05
  },
  "NGIL": {
    "prev": 24.14,
    "hi52": 39.39,
    "lo52": 22.19
  },
  "NGLFINE": {
    "prev": 2183.8,
    "hi52": 2575.0,
    "lo52": 980.0
  },
  "NH": {
    "prev": 1652.2,
    "hi52": 2370.2,
    "lo52": 1451.05
  },
  "NHIT": {
    "prev": 153.55,
    "hi52": 155.0,
    "lo52": 131.0
  },
  "NHPC": {
    "prev": 76.8,
    "hi52": 92.34,
    "lo52": 71.62
  },
  "NIACL": {
    "prev": 132.51,
    "hi52": 214.74,
    "lo52": 124.0
  },
  "NIBE": {
    "prev": 956.7,
    "hi52": 2001.0,
    "lo52": 887.5
  },
  "NIBL": {
    "prev": 28.99,
    "hi52": 40.8,
    "lo52": 19.5
  },
  "NIDAN": {
    "prev": 15.9,
    "hi52": 24.9,
    "lo52": 12.8
  },
  "NIITLTD": {
    "prev": 59.71,
    "hi52": 150.75,
    "lo52": 54.1
  },
  "NIITMTS": {
    "prev": 298.95,
    "hi52": 454.0,
    "lo52": 284.65
  },
  "NIKITA": {
    "prev": 113.5,
    "hi52": 156.0,
    "lo52": 77.15
  },
  "NILAINFRA": {
    "prev": 7.08,
    "hi52": 13.78,
    "lo52": 6.72
  },
  "NILASPACES": {
    "prev": 12.49,
    "hi52": 20.47,
    "lo52": 10.6
  },
  "NILKAMAL": {
    "prev": 1217.3,
    "hi52": 1865.0,
    "lo52": 1118.9
  },
  "NINSYS": {
    "prev": 290.2,
    "hi52": 526.9,
    "lo52": 281.05
  },
  "NIPPOBATRY": {
    "prev": 293.9,
    "hi52": 550.0,
    "lo52": 268.0
  },
  "NIRAJ": {
    "prev": 25.43,
    "hi52": 68.0,
    "lo52": 23.13
  },
  "NITCO": {
    "prev": 81.38,
    "hi52": 163.95,
    "lo52": 64.0
  },
  "NITINSPIN": {
    "prev": 368.5,
    "hi52": 426.8,
    "lo52": 295.25
  },
  "NITIRAJ": {
    "prev": 217.96,
    "hi52": 325.55,
    "lo52": 169.99
  },
  "NIVABUPA": {
    "prev": 70.0,
    "hi52": 95.21,
    "lo52": 67.85
  },
  "NKIND": {
    "prev": 64.89,
    "hi52": 87.78,
    "lo52": 54.54
  },
  "NLCINDIA": {
    "prev": 266.35,
    "hi52": 292.2,
    "lo52": 212.85
  },
  "NMDC": {
    "prev": 79.78,
    "hi52": 86.72,
    "lo52": 59.53
  },
  "NOCIL": {
    "prev": 143.96,
    "hi52": 211.0,
    "lo52": 125.31
  },
  "NOIDATOLL": {
    "prev": 3.39,
    "hi52": 5.63,
    "lo52": 2.57
  },
  "NORTHARC": {
    "prev": 234.25,
    "hi52": 290.0,
    "lo52": 141.47
  },
  "NOVAAGRI": {
    "prev": 22.72,
    "hi52": 62.84,
    "lo52": 20.99
  },
  "NPST": {
    "prev": 1105.9,
    "hi52": 2531.75,
    "lo52": 846.6
  },
  "NRAIL": {
    "prev": 420.0,
    "hi52": 514.0,
    "lo52": 205.75
  },
  "NRBBEARING": {
    "prev": 242.6,
    "hi52": 313.25,
    "lo52": 196.76
  },
  "NRL": {
    "prev": 50.04,
    "hi52": 94.0,
    "lo52": 46.2
  },
  "NRVANDANA": {
    "prev": 57.75,
    "hi52": 72.9,
    "lo52": 37.05
  },
  "NSIL": {
    "prev": 5365.5,
    "hi52": 6535.5,
    "lo52": 5075.0
  },
  "NSLNISP": {
    "prev": 36.7,
    "hi52": 49.65,
    "lo52": 32.13
  },
  "NTPCGREEN": {
    "prev": 101.1,
    "hi52": 117.64,
    "lo52": 84.0
  },
  "NUCLEUS": {
    "prev": 811.6,
    "hi52": 1378.0,
    "lo52": 725.0
  },
  "NURECA": {
    "prev": 237.75,
    "hi52": 343.0,
    "lo52": 203.62
  },
  "NUVAMA": {
    "prev": 1147.5,
    "hi52": 8508.5,
    "lo52": 1096.9
  },
  "NUVOCO": {
    "prev": 286.2,
    "hi52": 477.5,
    "lo52": 279.7
  },
  "NXST": {
    "prev": 154.68,
    "hi52": 168.35,
    "lo52": 124.0
  },
  "NYKAA": {
    "prev": 240.6,
    "hi52": 285.6,
    "lo52": 165.97
  },
  "OAL": {
    "prev": 252.65,
    "hi52": 432.0,
    "lo52": 235.0
  },
  "OBCL": {
    "prev": 56.0,
    "hi52": 64.84,
    "lo52": 49.56
  },
  "OBEROIRLTY": {
    "prev": 1445.8,
    "hi52": 2005.0,
    "lo52": 1391.2
  },
  "OBSCP": {
    "prev": 293.25,
    "hi52": 360.0,
    "lo52": 147.0
  },
  "OCCLLTD": {
    "prev": 87.8,
    "hi52": 159.42,
    "lo52": 72.83
  },
  "ODIGMA": {
    "prev": 22.97,
    "hi52": 56.09,
    "lo52": 21.0
  },
  "OFSS": {
    "prev": 6580.0,
    "hi52": 9950.0,
    "lo52": 6234.5
  },
  "OIL": {
    "prev": 475.5,
    "hi52": 524.0,
    "lo52": 325.0
  },
  "OILCOUNTUB": {
    "prev": 41.4,
    "hi52": 99.67,
    "lo52": 35.65
  },
  "OLAELEC": {
    "prev": 24.66,
    "hi52": 71.25,
    "lo52": 22.25
  },
  "OLECTRA": {
    "prev": 1097.4,
    "hi52": 1714.2,
    "lo52": 866.6
  },
  "OLIL": {
    "prev": 319.9,
    "hi52": 355.0,
    "lo52": 144.0
  },
  "OMAXAUTO": {
    "prev": 98.2,
    "hi52": 165.8,
    "lo52": 77.55
  },
  "OMAXE": {
    "prev": 72.05,
    "hi52": 113.4,
    "lo52": 62.5
  },
  "OMFREIGHT": {
    "prev": 70.61,
    "hi52": 107.4,
    "lo52": 66.22
  },
  "OMFURN": {
    "prev": 49.95,
    "hi52": 140.0,
    "lo52": 45.0
  },
  "OMINFRAL": {
    "prev": 83.23,
    "hi52": 146.12,
    "lo52": 71.5
  },
  "OMNI": {
    "prev": 243.99,
    "hi52": 252.0,
    "lo52": 176.25
  },
  "ONDOOR": {
    "prev": 132.5,
    "hi52": 209.2,
    "lo52": 100.0
  },
  "ONELIFECAP": {
    "prev": 14.27,
    "hi52": 18.59,
    "lo52": 9.26
  },
  "ONEPOINT": {
    "prev": 44.52,
    "hi52": 69.99,
    "lo52": 41.01
  },
  "ONESOURCE": {
    "prev": 1456.4,
    "hi52": 2248.0,
    "lo52": 1057.0
  },
  "ONMOBILE": {
    "prev": 49.28,
    "hi52": 75.09,
    "lo52": 41.07
  },
  "ONWARDTEC": {
    "prev": 238.8,
    "hi52": 385.0,
    "lo52": 206.0
  },
  "ONYX": {
    "prev": 30.3,
    "hi52": 61.0,
    "lo52": 28.1
  },
  "OPTIEMUS": {
    "prev": 334.2,
    "hi52": 713.0,
    "lo52": 305.3
  },
  "OPTIVALUE": {
    "prev": 79.95,
    "hi52": 107.55,
    "lo52": 63.0
  },
  "ORBTEXP": {
    "prev": 148.81,
    "hi52": 265.0,
    "lo52": 140.1
  },
  "ORCHASP": {
    "prev": 2.23,
    "hi52": 4.16,
    "lo52": 1.9
  },
  "ORCHPHARMA": {
    "prev": 532.55,
    "hi52": 899.0,
    "lo52": 489.0
  },
  "ORIANA": {
    "prev": 1747.35,
    "hi52": 3064.0,
    "lo52": 1267.2
  },
  "ORICONENT": {
    "prev": 67.5,
    "hi52": 70.4,
    "lo52": 35.66
  },
  "ORIENTALTL": {
    "prev": 5.09,
    "hi52": 17.6,
    "lo52": 4.91
  },
  "ORIENTBELL": {
    "prev": 275.1,
    "hi52": 338.2,
    "lo52": 216.0
  },
  "ORIENTCEM": {
    "prev": 132.37,
    "hi52": 362.4,
    "lo52": 123.21
  },
  "ORIENTCER": {
    "prev": 38.65,
    "hi52": 56.64,
    "lo52": 28.67
  },
  "ORIENTELEC": {
    "prev": 166.3,
    "hi52": 248.9,
    "lo52": 155.35
  },
  "ORIENTHOT": {
    "prev": 91.8,
    "hi52": 168.99,
    "lo52": 80.0
  },
  "ORIENTLTD": {
    "prev": 58.44,
    "hi52": 110.4,
    "lo52": 55.5
  },
  "ORIENTPPR": {
    "prev": 15.67,
    "hi52": 31.5,
    "lo52": 14.8
  },
  "ORIENTTECH": {
    "prev": 262.95,
    "hi52": 513.4,
    "lo52": 246.45
  },
  "ORISSAMINE": {
    "prev": 3604.0,
    "hi52": 6138.9,
    "lo52": 3262.5
  },
  "ORKLAINDIA": {
    "prev": 569.5,
    "hi52": 760.0,
    "lo52": 533.25
  },
  "OSELDEVICE": {
    "prev": 520.8,
    "hi52": 835.0,
    "lo52": 196.75
  },
  "OSIAHYPER": {
    "prev": 4.99,
    "hi52": 33.08,
    "lo52": 4.75
  },
  "OSWALAGRO": {
    "prev": 42.08,
    "hi52": 110.8,
    "lo52": 39.51
  },
  "OSWALGREEN": {
    "prev": 24.9,
    "hi52": 50.9,
    "lo52": 22.43
  },
  "OSWALPUMPS": {
    "prev": 314.5,
    "hi52": 888.4,
    "lo52": 283.1
  },
  "OSWALSEEDS": {
    "prev": 11.43,
    "hi52": 20.28,
    "lo52": 10.72
  },
  "OWAIS": {
    "prev": 106.75,
    "hi52": 707.9,
    "lo52": 88.1
  },
  "PACEDIGITK": {
    "prev": 164.36,
    "hi52": 231.95,
    "lo52": 153.05
  },
  "PAGEIND": {
    "prev": 32005.0,
    "hi52": 50590.0,
    "lo52": 29805.0
  },
  "PAISALO": {
    "prev": 35.07,
    "hi52": 41.7,
    "lo52": 29.38
  },
  "PAKKA": {
    "prev": 85.11,
    "hi52": 226.78,
    "lo52": 74.12
  },
  "PALASHSECU": {
    "prev": 86.44,
    "hi52": 142.0,
    "lo52": 82.22
  },
  "PALREDTEC": {
    "prev": 28.95,
    "hi52": 73.6,
    "lo52": 27.55
  },
  "PANACEABIO": {
    "prev": 329.65,
    "hi52": 581.9,
    "lo52": 305.05
  },
  "PANAMAPET": {
    "prev": 262.6,
    "hi52": 403.9,
    "lo52": 250.0
  },
  "PANSARI": {
    "prev": 276.1,
    "hi52": 352.3,
    "lo52": 150.55
  },
  "PAR": {
    "prev": 86.76,
    "hi52": 122.43,
    "lo52": 81.01
  },
  "PARACABLES": {
    "prev": 34.76,
    "hi52": 62.75,
    "lo52": 30.86
  },
  "PARADEEP": {
    "prev": 110.77,
    "hi52": 234.39,
    "lo52": 95.97
  },
  "PARAGMILK": {
    "prev": 198.92,
    "hi52": 376.95,
    "lo52": 142.0
  },
  "PARAGON": {
    "prev": 44.3,
    "hi52": 78.95,
    "lo52": 34.1
  },
  "PARAMATRIX": {
    "prev": 65.15,
    "hi52": 108.95,
    "lo52": 56.5
  },
  "PARAMOUNT": {
    "prev": 39.6,
    "hi52": 73.9,
    "lo52": 36.35
  },
  "PARAS": {
    "prev": 627.2,
    "hi52": 1945.0,
    "lo52": 580.5
  },
  "PARIN": {
    "prev": 575.3,
    "hi52": 725.0,
    "lo52": 311.65
  },
  "PARKHOSPS": {
    "prev": 199.16,
    "hi52": 208.72,
    "lo52": 138.1
  },
  "PARKHOTELS": {
    "prev": 108.47,
    "hi52": 173.2,
    "lo52": 102.11
  },
  "PARSVNATH": {
    "prev": 6.53,
    "hi52": 27.39,
    "lo52": 6.02
  },
  "PARTH": {
    "prev": 320.3,
    "hi52": 338.0,
    "lo52": 169.0
  },
  "PARTYCRUS": {
    "prev": 85.0,
    "hi52": 107.85,
    "lo52": 63.05
  },
  "PASHUPATI": {
    "prev": 981.1,
    "hi52": 1035.05,
    "lo52": 595.95
  },
  "PASUPTAC": {
    "prev": 44.58,
    "hi52": 63.5,
    "lo52": 40.1
  },
  "PATANJALI": {
    "prev": 474.6,
    "hi52": 2011.0,
    "lo52": 460.4
  },
  "PATELENG": {
    "prev": 24.92,
    "hi52": 48.6,
    "lo52": 23.33
  },
  "PATELRMART": {
    "prev": 167.38,
    "hi52": 305.0,
    "lo52": 155.0
  },
  "PATILAUTOM": {
    "prev": 138.0,
    "hi52": 268.9,
    "lo52": 127.0
  },
  "PATINTLOG": {
    "prev": 9.38,
    "hi52": 18.51,
    "lo52": 8.81
  },
  "PAUSHAKLTD": {
    "prev": 400.15,
    "hi52": 633.05,
    "lo52": 370.0
  },
  "PAVNAIND": {
    "prev": 18.11,
    "hi52": 469.6,
    "lo52": 15.33
  },
  "PAYTM": {
    "prev": 1054.3,
    "hi52": 1381.8,
    "lo52": 743.45
  },
  "PCBL": {
    "prev": 248.05,
    "hi52": 444.15,
    "lo52": 228.1
  },
  "PCCL": {
    "prev": 245.95,
    "hi52": 267.5,
    "lo52": 150.0
  },
  "PCJEWELLER": {
    "prev": 8.3,
    "hi52": 19.65,
    "lo52": 7.74
  },
  "PDMJEPAPER": {
    "prev": 71.25,
    "hi52": 148.39,
    "lo52": 67.8
  },
  "PDSL": {
    "prev": 260.8,
    "hi52": 466.0,
    "lo52": 246.05
  },
  "PEARLPOLY": {
    "prev": 15.76,
    "hi52": 41.0,
    "lo52": 5.15
  },
  "PELATRO": {
    "prev": 304.8,
    "hi52": 461.0,
    "lo52": 272.5
  },
  "PENIND": {
    "prev": 142.87,
    "hi52": 279.9,
    "lo52": 132.7
  },
  "PENINLAND": {
    "prev": 15.6,
    "hi52": 46.0,
    "lo52": 14.62
  },
  "PENTAGON": {
    "prev": 61.2,
    "hi52": 99.5,
    "lo52": 50.55
  },
  "PERSISTENT": {
    "prev": 4716.7,
    "hi52": 6599.0,
    "lo52": 4148.95
  },
  "PETRONET": {
    "prev": 257.65,
    "hi52": 326.5,
    "lo52": 235.35
  },
  "PFIZER": {
    "prev": 4773.5,
    "hi52": 5993.0,
    "lo52": 3701.0
  },
  "PFOCUS": {
    "prev": 276.65,
    "hi52": 294.0,
    "lo52": 85.0
  },
  "PFS": {
    "prev": 27.31,
    "hi52": 44.2,
    "lo52": 26.12
  },
  "PGEL": {
    "prev": 512.75,
    "hi52": 1008.0,
    "lo52": 465.0
  },
  "PGHH": {
    "prev": 9707.0,
    "hi52": 14543.0,
    "lo52": 9402.0
  },
  "PGHL": {
    "prev": 4860.6,
    "hi52": 6739.0,
    "lo52": 4725.0
  },
  "PGIL": {
    "prev": 1489.5,
    "hi52": 1993.3,
    "lo52": 875.0
  },
  "PGINVIT": {
    "prev": 90.81,
    "hi52": 98.19,
    "lo52": 75.15
  },
  "PHANTOMFX": {
    "prev": 183.0,
    "hi52": 327.95,
    "lo52": 173.15
  },
  "PHOENIXLTD": {
    "prev": 1543.1,
    "hi52": 1993.0,
    "lo52": 1402.5
  },
  "PICCADIL": {
    "prev": 540.45,
    "hi52": 805.5,
    "lo52": 515.0
  },
  "PIGL": {
    "prev": 100.4,
    "hi52": 195.45,
    "lo52": 93.0
  },
  "PIIND": {
    "prev": 2909.5,
    "hi52": 4330.0,
    "lo52": 2750.1
  },
  "PILANIINVS": {
    "prev": 4738.6,
    "hi52": 5168.0,
    "lo52": 4150.0
  },
  "PILITA": {
    "prev": 7.44,
    "hi52": 20.64,
    "lo52": 6.9
  },
  "PINELABS": {
    "prev": 164.47,
    "hi52": 284.0,
    "lo52": 158.1
  },
  "PIONEEREMB": {
    "prev": 24.93,
    "hi52": 48.49,
    "lo52": 22.8
  },
  "PIRAMALFIN": {
    "prev": 1845.9,
    "hi52": 1954.5,
    "lo52": 1260.0
  },
  "PITTIENG": {
    "prev": 775.9,
    "hi52": 1121.95,
    "lo52": 675.0
  },
  "PIXTRANS": {
    "prev": 1453.0,
    "hi52": 1799.6,
    "lo52": 1220.1
  },
  "PKTEA": {
    "prev": 845.0,
    "hi52": 1013.9,
    "lo52": 565.0
  },
  "PLADAINFO": {
    "prev": 9.8,
    "hi52": 27.75,
    "lo52": 9.35
  },
  "PLASTIBLEN": {
    "prev": 133.82,
    "hi52": 230.0,
    "lo52": 126.2
  },
  "PLATIND": {
    "prev": 203.87,
    "hi52": 342.4,
    "lo52": 184.4
  },
  "PLAZACABLE": {
    "prev": 33.19,
    "hi52": 65.34,
    "lo52": 31.06
  },
  "PNBGILTS": {
    "prev": 68.55,
    "hi52": 119.8,
    "lo52": 63.32
  },
  "PNBHOUSING": {
    "prev": 791.9,
    "hi52": 1141.9,
    "lo52": 729.6
  },
  "PNC": {
    "prev": 21.0,
    "hi52": 40.64,
    "lo52": 18.76
  },
  "PNCINFRA": {
    "prev": 186.21,
    "hi52": 331.8,
    "lo52": 172.8
  },
  "PNGJL": {
    "prev": 570.2,
    "hi52": 701.4,
    "lo52": 473.8
  },
  "PNGSREVA": {
    "prev": 368.3,
    "hi52": 433.0,
    "lo52": 331.0
  },
  "POCL": {
    "prev": 1049.4,
    "hi52": 1578.0,
    "lo52": 512.4
  },
  "PODDARMENT": {
    "prev": 213.66,
    "hi52": 334.8,
    "lo52": 206.15
  },
  "POKARNA": {
    "prev": 828.2,
    "hi52": 1358.0,
    "lo52": 692.6
  },
  "POLICYBZR": {
    "prev": 1497.1,
    "hi52": 1978.0,
    "lo52": 1364.0
  },
  "POLYCAB": {
    "prev": 7171.0,
    "hi52": 8722.0,
    "lo52": 4567.0
  },
  "POLYMED": {
    "prev": 1240.9,
    "hi52": 2937.6,
    "lo52": 1195.6
  },
  "POLYPLEX": {
    "prev": 852.55,
    "hi52": 1398.0,
    "lo52": 774.0
  },
  "PONNIERODE": {
    "prev": 275.0,
    "hi52": 368.45,
    "lo52": 252.4
  },
  "POONAWALLA": {
    "prev": 393.6,
    "hi52": 570.4,
    "lo52": 318.0
  },
  "POSITRON": {
    "prev": 128.75,
    "hi52": 420.0,
    "lo52": 117.5
  },
  "POWERINDIA": {
    "prev": 25025.0,
    "hi52": 26325.0,
    "lo52": 10400.0
  },
  "POWERMECH": {
    "prev": 1994.0,
    "hi52": 3415.0,
    "lo52": 1804.6
  },
  "PPAP": {
    "prev": 197.78,
    "hi52": 294.79,
    "lo52": 154.05
  },
  "PPL": {
    "prev": 189.33,
    "hi52": 473.9,
    "lo52": 181.26
  },
  "PPLPHARMA": {
    "prev": 138.35,
    "hi52": 240.95,
    "lo52": 132.3
  },
  "PPSL": {
    "prev": 6.8,
    "hi52": 34.0,
    "lo52": 5.1
  },
  "PRABHA": {
    "prev": 157.4,
    "hi52": 315.9,
    "lo52": 146.1
  },
  "PRAENG": {
    "prev": 19.43,
    "hi52": 33.88,
    "lo52": 17.12
  },
  "PRAJIND": {
    "prev": 315.15,
    "hi52": 588.45,
    "lo52": 273.0
  },
  "PRAKASH": {
    "prev": 121.28,
    "hi52": 190.9,
    "lo52": 110.24
  },
  "PRAKASHSTL": {
    "prev": 4.14,
    "hi52": 7.45,
    "lo52": 3.92
  },
  "PRAMARA": {
    "prev": 348.0,
    "hi52": 374.8,
    "lo52": 109.0
  },
  "PRANIK": {
    "prev": 48.35,
    "hi52": 92.9,
    "lo52": 40.05
  },
  "PRATHAM": {
    "prev": 117.2,
    "hi52": 216.8,
    "lo52": 111.35
  },
  "PRAXIS": {
    "prev": 6.6,
    "hi52": 14.55,
    "lo52": 6.04
  },
  "PRECAM": {
    "prev": 117.45,
    "hi52": 262.0,
    "lo52": 107.1
  },
  "PRECISION": {
    "prev": 8.4,
    "hi52": 28.4,
    "lo52": 8.2
  },
  "PRECWIRE": {
    "prev": 302.35,
    "hi52": 356.1,
    "lo52": 118.0
  },
  "PREMEXPLN": {
    "prev": 438.0,
    "hi52": 684.0,
    "lo52": 310.0
  },
  "PREMIERENE": {
    "prev": 864.75,
    "hi52": 1163.9,
    "lo52": 660.0
  },
  "PREMIERPOL": {
    "prev": 59.96,
    "hi52": 70.59,
    "lo52": 38.0
  },
  "PREMIUM": {
    "prev": 33.95,
    "hi52": 44.25,
    "lo52": 26.05
  },
  "PRESTIGE": {
    "prev": 1248.2,
    "hi52": 1814.0,
    "lo52": 1048.05
  },
  "PRICOLLTD": {
    "prev": 533.55,
    "hi52": 694.2,
    "lo52": 367.85
  },
  "PRIMECAB": {
    "prev": 74.45,
    "hi52": 123.65,
    "lo52": 70.7
  },
  "PRIMESECU": {
    "prev": 281.55,
    "hi52": 325.0,
    "lo52": 211.02
  },
  "PRIMO": {
    "prev": 18.1,
    "hi52": 31.39,
    "lo52": 16.36
  },
  "PRINCEPIPE": {
    "prev": 238.85,
    "hi52": 387.7,
    "lo52": 216.55
  },
  "PRITI": {
    "prev": 37.93,
    "hi52": 107.09,
    "lo52": 33.25
  },
  "PRITIKA": {
    "prev": 53.4,
    "hi52": 95.25,
    "lo52": 46.05
  },
  "PRITIKAUTO": {
    "prev": 12.08,
    "hi52": 21.01,
    "lo52": 11.08
  },
  "PRIVISCL": {
    "prev": 2927.3,
    "hi52": 3440.5,
    "lo52": 1501.0
  },
  "PRLIND": {
    "prev": 54.0,
    "hi52": 114.0,
    "lo52": 50.0
  },
  "PROPEQUITY": {
    "prev": 195.0,
    "hi52": 265.0,
    "lo52": 145.0
  },
  "PROSTARM": {
    "prev": 127.91,
    "hi52": 253.49,
    "lo52": 108.0
  },
  "PROTEAN": {
    "prev": 522.2,
    "hi52": 1484.5,
    "lo52": 490.1
  },
  "PROV": {
    "prev": 1180.0,
    "hi52": 1425.0,
    "lo52": 815.1
  },
  "PROZONER": {
    "prev": 44.8,
    "hi52": 72.77,
    "lo52": 27.3
  },
  "PRSMJOHNSN": {
    "prev": 125.03,
    "hi52": 176.0,
    "lo52": 114.72
  },
  "PRUDENT": {
    "prev": 2236.6,
    "hi52": 3098.0,
    "lo52": 1750.05
  },
  "PRUDMOULI": {
    "prev": 12.1,
    "hi52": 50.0,
    "lo52": 11.4
  },
  "PSB": {
    "prev": 22.96,
    "hi52": 50.5,
    "lo52": 21.11
  },
  "PSFL": {
    "prev": 25.5,
    "hi52": 58.0,
    "lo52": 23.75
  },
  "PSPPROJECT": {
    "prev": 651.2,
    "hi52": 1029.9,
    "lo52": 604.05
  },
  "PSRAJ": {
    "prev": 277.0,
    "hi52": 318.1,
    "lo52": 122.85
  },
  "PTC": {
    "prev": 165.18,
    "hi52": 207.0,
    "lo52": 143.01
  },
  "PTCIL": {
    "prev": 17418.0,
    "hi52": 19387.0,
    "lo52": 11902.0
  },
  "PTL": {
    "prev": 37.69,
    "hi52": 47.4,
    "lo52": 36.0
  },
  "PULZ": {
    "prev": 25.5,
    "hi52": 62.9,
    "lo52": 23.0
  },
  "PUNJABCHEM": {
    "prev": 1022.3,
    "hi52": 1666.0,
    "lo52": 789.25
  },
  "PURPLEUTED": {
    "prev": 292.55,
    "hi52": 587.95,
    "lo52": 126.2
  },
  "PURVA": {
    "prev": 180.04,
    "hi52": 338.95,
    "lo52": 164.5
  },
  "PURVFLEXI": {
    "prev": 41.0,
    "hi52": 124.95,
    "lo52": 38.95
  },
  "PUSHPA": {
    "prev": 91.75,
    "hi52": 148.75,
    "lo52": 81.15
  },
  "PVP": {
    "prev": 25.1,
    "hi52": 39.41,
    "lo52": 18.3
  },
  "PVRINOX": {
    "prev": 986.0,
    "hi52": 1249.7,
    "lo52": 830.0
  },
  "PVSL": {
    "prev": 85.47,
    "hi52": 163.0,
    "lo52": 82.41
  },
  "PWL": {
    "prev": 89.95,
    "hi52": 161.99,
    "lo52": 77.72
  },
  "PYRAMID": {
    "prev": 147.2,
    "hi52": 190.0,
    "lo52": 136.2
  },
  "QFIL": {
    "prev": 47.15,
    "hi52": 85.75,
    "lo52": 44.85
  },
  "QMSMEDI": {
    "prev": 78.0,
    "hi52": 114.0,
    "lo52": 68.95
  },
  "QPOWER": {
    "prev": 834.55,
    "hi52": 1082.0,
    "lo52": 267.8
  },
  "QUADFUTURE": {
    "prev": 300.05,
    "hi52": 604.75,
    "lo52": 248.55
  },
  "QUADPRO": {
    "prev": 2.05,
    "hi52": 4.65,
    "lo52": 1.95
  },
  "QUESS": {
    "prev": 177.73,
    "hi52": 379.05,
    "lo52": 167.88
  },
  "QUICKHEAL": {
    "prev": 144.76,
    "hi52": 416.7,
    "lo52": 135.0
  },
  "QUICKTOUCH": {
    "prev": 30.25,
    "hi52": 72.0,
    "lo52": 27.15
  },
  "QVCEL": {
    "prev": 26.05,
    "hi52": 37.0,
    "lo52": 22.2
  },
  "RACE": {
    "prev": 102.58,
    "hi52": 292.0,
    "lo52": 96.01
  },
  "RACLGEAR": {
    "prev": 1250.2,
    "hi52": 1691.9,
    "lo52": 703.8
  },
  "RADAAN": {
    "prev": 2.9,
    "hi52": 5.37,
    "lo52": 2.51
  },
  "RADHIKAJWE": {
    "prev": 57.75,
    "hi52": 111.5,
    "lo52": 54.9
  },
  "RADIANTCMS": {
    "prev": 35.76,
    "hi52": 73.8,
    "lo52": 33.95
  },
  "RADICO": {
    "prev": 2660.5,
    "hi52": 3591.9,
    "lo52": 2200.0
  },
  "RADIOCITY": {
    "prev": 5.26,
    "hi52": 11.5,
    "lo52": 4.87
  },
  "RADIOWALLA": {
    "prev": 30.2,
    "hi52": 87.0,
    "lo52": 27.2
  },
  "RAILTEL": {
    "prev": 271.5,
    "hi52": 478.95,
    "lo52": 251.15
  },
  "RAIN": {
    "prev": 108.91,
    "hi52": 176.0,
    "lo52": 99.9
  },
  "RAINBOW": {
    "prev": 1114.3,
    "hi52": 1645.7,
    "lo52": 1084.0
  },
  "RAJINDLTD": {
    "prev": 64.8,
    "hi52": 101.9,
    "lo52": 60.0
  },
  "RAJMET": {
    "prev": 3.45,
    "hi52": 7.12,
    "lo52": 3.33
  },
  "RAJOOENG": {
    "prev": 55.89,
    "hi52": 145.88,
    "lo52": 51.0
  },
  "RAJPUTANA": {
    "prev": 220.0,
    "hi52": 299.0,
    "lo52": 173.15
  },
  "RAJRATAN": {
    "prev": 370.65,
    "hi52": 540.0,
    "lo52": 260.0
  },
  "RAJSREESUG": {
    "prev": 28.31,
    "hi52": 52.98,
    "lo52": 24.65
  },
  "RAJTV": {
    "prev": 36.94,
    "hi52": 88.01,
    "lo52": 35.36
  },
  "RALLIS": {
    "prev": 238.65,
    "hi52": 385.9,
    "lo52": 196.78
  },
  "RAMANEWS": {
    "prev": 32.98,
    "hi52": 44.78,
    "lo52": 27.05
  },
  "RAMAPHO": {
    "prev": 115.83,
    "hi52": 217.19,
    "lo52": 80.85
  },
  "RAMASTEEL": {
    "prev": 5.41,
    "hi52": 14.9,
    "lo52": 4.44
  },
  "RAMCOCEM": {
    "prev": 925.2,
    "hi52": 1214.5,
    "lo52": 844.75
  },
  "RAMCOIND": {
    "prev": 259.25,
    "hi52": 398.05,
    "lo52": 215.0
  },
  "RAMCOSYS": {
    "prev": 394.7,
    "hi52": 682.35,
    "lo52": 303.1
  },
  "RAMKY": {
    "prev": 463.55,
    "hi52": 705.0,
    "lo52": 403.35
  },
  "RAMRAT": {
    "prev": 307.55,
    "hi52": 785.95,
    "lo52": 268.0
  },
  "RANASUG": {
    "prev": 11.62,
    "hi52": 17.9,
    "lo52": 10.21
  },
  "RANEHOLDIN": {
    "prev": 1066.0,
    "hi52": 1798.0,
    "lo52": 990.7
  },
  "RAPIDFLEET": {
    "prev": 175.05,
    "hi52": 229.0,
    "lo52": 171.0
  },
  "RAPPID": {
    "prev": 260.75,
    "hi52": 384.9,
    "lo52": 215.2
  },
  "RATEGAIN": {
    "prev": 481.6,
    "hi52": 741.6,
    "lo52": 412.85
  },
  "RATNAMANI": {
    "prev": 2310.8,
    "hi52": 3050.0,
    "lo52": 1936.5
  },
  "RATNAVEER": {
    "prev": 139.68,
    "hi52": 177.0,
    "lo52": 115.99
  },
  "RAYMOND": {
    "prev": 372.95,
    "hi52": 783.9,
    "lo52": 343.15
  },
  "RAYMONDLSL": {
    "prev": 869.2,
    "hi52": 1411.9,
    "lo52": 727.0
  },
  "RAYMONDREL": {
    "prev": 416.5,
    "hi52": 1050.0,
    "lo52": 349.0
  },
  "RBA": {
    "prev": 61.13,
    "hi52": 89.5,
    "lo52": 59.15
  },
  "RBLBANK": {
    "prev": 297.25,
    "hi52": 340.4,
    "lo52": 164.41
  },
  "RBMINFRA": {
    "prev": 327.0,
    "hi52": 524.8,
    "lo52": 296.55
  },
  "RBS": {
    "prev": 81.55,
    "hi52": 143.0,
    "lo52": 58.8
  },
  "RBZJEWEL": {
    "prev": 113.85,
    "hi52": 179.0,
    "lo52": 108.55
  },
  "RCDL": {
    "prev": 19.8,
    "hi52": 30.85,
    "lo52": 16.5
  },
  "RCF": {
    "prev": 116.61,
    "hi52": 166.5,
    "lo52": 108.46
  },
  "READYMIX": {
    "prev": 77.15,
    "hi52": 175.0,
    "lo52": 69.1
  },
  "REDINGTON": {
    "prev": 217.35,
    "hi52": 334.8,
    "lo52": 176.94
  },
  "REDTAPE": {
    "prev": 117.2,
    "hi52": 167.97,
    "lo52": 107.53
  },
  "REFEX": {
    "prev": 200.53,
    "hi52": 534.0,
    "lo52": 188.0
  },
  "REFRACTORY": {
    "prev": 32.7,
    "hi52": 72.9,
    "lo52": 30.55
  },
  "REGAAL": {
    "prev": 69.95,
    "hi52": 145.7,
    "lo52": 57.27
  },
  "REGENCERAM": {
    "prev": 41.09,
    "hi52": 57.69,
    "lo52": 35.31
  },
  "RELAXO": {
    "prev": 273.95,
    "hi52": 526.0,
    "lo52": 251.6
  },
  "RELCHEMQ": {
    "prev": 113.53,
    "hi52": 214.0,
    "lo52": 108.45
  },
  "RELIABLE": {
    "prev": 121.76,
    "hi52": 175.0,
    "lo52": 63.7
  },
  "RELIGARE": {
    "prev": 215.94,
    "hi52": 295.0,
    "lo52": 196.51
  },
  "RELTD": {
    "prev": 132.03,
    "hi52": 191.77,
    "lo52": 93.41
  },
  "REMSONSIND": {
    "prev": 86.31,
    "hi52": 157.0,
    "lo52": 80.18
  },
  "REMUS": {
    "prev": 650.3,
    "hi52": 2290.0,
    "lo52": 580.0
  },
  "RENUKA": {
    "prev": 24.87,
    "hi52": 35.85,
    "lo52": 22.85
  },
  "REPCOHOME": {
    "prev": 351.15,
    "hi52": 464.45,
    "lo52": 315.2
  },
  "REPL": {
    "prev": 70.44,
    "hi52": 237.81,
    "lo52": 62.0
  },
  "REPRO": {
    "prev": 366.1,
    "hi52": 627.0,
    "lo52": 344.55
  },
  "RESPONIND": {
    "prev": 152.12,
    "hi52": 251.0,
    "lo52": 138.92
  },
  "RETAIL": {
    "prev": 19.13,
    "hi52": 44.45,
    "lo52": 16.8
  },
  "REXPIPES": {
    "prev": 197.0,
    "hi52": 208.0,
    "lo52": 57.0
  },
  "REXPRO": {
    "prev": 42.25,
    "hi52": 107.95,
    "lo52": 39.0
  },
  "RGL": {
    "prev": 93.49,
    "hi52": 147.9,
    "lo52": 85.0
  },
  "RHETAN": {
    "prev": 25.01,
    "hi52": 27.69,
    "lo52": 20.32
  },
  "RHIM": {
    "prev": 370.35,
    "hi52": 547.9,
    "lo52": 336.2
  },
  "RHL": {
    "prev": 173.65,
    "hi52": 314.0,
    "lo52": 164.0
  },
  "RICOAUTO": {
    "prev": 109.18,
    "hi52": 142.4,
    "lo52": 54.0
  },
  "RIIL": {
    "prev": 715.0,
    "hi52": 1047.9,
    "lo52": 626.3
  },
  "RILINFRA": {
    "prev": 37.75,
    "hi52": 53.9,
    "lo52": 27.6
  },
  "RISHABH": {
    "prev": 387.65,
    "hi52": 490.0,
    "lo52": 207.11
  },
  "RITCO": {
    "prev": 196.41,
    "hi52": 317.95,
    "lo52": 183.27
  },
  "RITES": {
    "prev": 191.56,
    "hi52": 316.0,
    "lo52": 182.25
  },
  "RKDL": {
    "prev": 18.67,
    "hi52": 34.58,
    "lo52": 16.3
  },
  "RKEC": {
    "prev": 34.24,
    "hi52": 89.99,
    "lo52": 31.05
  },
  "RKFORGE": {
    "prev": 499.6,
    "hi52": 862.6,
    "lo52": 460.15
  },
  "RKSWAMY": {
    "prev": 86.17,
    "hi52": 248.04,
    "lo52": 76.11
  },
  "RMDRIP": {
    "prev": 42.85,
    "hi52": 807.45,
    "lo52": 36.05
  },
  "RML": {
    "prev": 723.85,
    "hi52": 1049.0,
    "lo52": 585.0
  },
  "RNFI": {
    "prev": 261.0,
    "hi52": 404.0,
    "lo52": 205.0
  },
  "RNPL": {
    "prev": 139.75,
    "hi52": 158.0,
    "lo52": 69.0
  },
  "ROHLTD": {
    "prev": 313.65,
    "hi52": 593.4,
    "lo52": 285.35
  },
  "ROLEXRINGS": {
    "prev": 119.14,
    "hi52": 1660.0,
    "lo52": 99.79
  },
  "ROML": {
    "prev": 43.5,
    "hi52": 73.8,
    "lo52": 40.16
  },
  "ROSSARI": {
    "prev": 411.35,
    "hi52": 766.0,
    "lo52": 385.0
  },
  "ROSSELLIND": {
    "prev": 46.85,
    "hi52": 87.1,
    "lo52": 40.0
  },
  "ROSSTECH": {
    "prev": 720.1,
    "hi52": 840.0,
    "lo52": 277.05
  },
  "ROTO": {
    "prev": 56.67,
    "hi52": 310.25,
    "lo52": 52.21
  },
  "ROUTE": {
    "prev": 468.0,
    "hi52": 1158.0,
    "lo52": 443.0
  },
  "ROXHITECH": {
    "prev": 30.4,
    "hi52": 57.45,
    "lo52": 27.0
  },
  "ROYALARC": {
    "prev": 150.0,
    "hi52": 187.8,
    "lo52": 126.5
  },
  "RPEL": {
    "prev": 642.6,
    "hi52": 1065.5,
    "lo52": 479.05
  },
  "RPGLIFE": {
    "prev": 1879.7,
    "hi52": 2725.0,
    "lo52": 1733.0
  },
  "RPOWER": {
    "prev": 22.62,
    "hi52": 76.49,
    "lo52": 20.8
  },
  "RPPINFRA": {
    "prev": 67.53,
    "hi52": 179.4,
    "lo52": 61.5
  },
  "RPPL": {
    "prev": 15.4,
    "hi52": 29.34,
    "lo52": 15.0
  },
  "RPSGVENT": {
    "prev": 604.0,
    "hi52": 1027.0,
    "lo52": 551.9
  },
  "RPTECH": {
    "prev": 342.35,
    "hi52": 408.7,
    "lo52": 260.8
  },
  "RRKABEL": {
    "prev": 1391.4,
    "hi52": 1578.2,
    "lo52": 864.05
  },
  "RSL": {
    "prev": 114.13,
    "hi52": 122.1,
    "lo52": 105.62
  },
  "RSSOFTWARE": {
    "prev": 27.39,
    "hi52": 91.65,
    "lo52": 25.02
  },
  "RSWM": {
    "prev": 132.36,
    "hi52": 191.49,
    "lo52": 120.69
  },
  "RSYSTEMS": {
    "prev": 264.15,
    "hi52": 496.9,
    "lo52": 249.45
  },
  "RTNINDIA": {
    "prev": 26.71,
    "hi52": 69.7,
    "lo52": 24.4
  },
  "RTNPOWER": {
    "prev": 8.31,
    "hi52": 16.92,
    "lo52": 7.66
  },
  "RUBFILA": {
    "prev": 61.07,
    "hi52": 92.2,
    "lo52": 59.01
  },
  "RUBICON": {
    "prev": 782.95,
    "hi52": 822.0,
    "lo52": 570.75
  },
  "RUBYMILLS": {
    "prev": 201.05,
    "hi52": 269.0,
    "lo52": 169.02
  },
  "RUCHINFRA": {
    "prev": 4.96,
    "hi52": 10.89,
    "lo52": 4.67
  },
  "RUCHIRA": {
    "prev": 102.93,
    "hi52": 173.0,
    "lo52": 96.8
  },
  "RUDRA": {
    "prev": 16.13,
    "hi52": 29.7,
    "lo52": 15.37
  },
  "RULKA": {
    "prev": 87.55,
    "hi52": 196.95,
    "lo52": 85.0
  },
  "RUPA": {
    "prev": 123.93,
    "hi52": 232.9,
    "lo52": 116.1
  },
  "RUSHIL": {
    "prev": 15.54,
    "hi52": 33.99,
    "lo52": 15.0
  },
  "RUSTOMJEE": {
    "prev": 375.05,
    "hi52": 697.0,
    "lo52": 358.8
  },
  "RVHL": {
    "prev": 35.13,
    "hi52": 71.36,
    "lo52": 32.11
  },
  "RVNL": {
    "prev": 264.55,
    "hi52": 447.8,
    "lo52": 249.1
  },
  "RVTH": {
    "prev": 563.55,
    "hi52": 1300.0,
    "lo52": 491.1
  },
  "SAAKSHI": {
    "prev": 191.0,
    "hi52": 217.7,
    "lo52": 118.0
  },
  "SAATVIKGL": {
    "prev": 371.9,
    "hi52": 567.0,
    "lo52": 328.0
  },
  "SACHEEROME": {
    "prev": 326.65,
    "hi52": 430.65,
    "lo52": 140.5
  },
  "SADBHIN": {
    "prev": 2.57,
    "hi52": 5.7,
    "lo52": 2.45
  },
  "SADHAV": {
    "prev": 95.6,
    "hi52": 131.9,
    "lo52": 76.95
  },
  "SADHNANIQ": {
    "prev": 1.46,
    "hi52": 23.86,
    "lo52": 1.39
  },
  "SAFARI": {
    "prev": 1520.5,
    "hi52": 2507.1,
    "lo52": 1433.6
  },
  "SAFEENTP": {
    "prev": 213.3,
    "hi52": 319.0,
    "lo52": 151.0
  },
  "SAGARDEEP": {
    "prev": 23.03,
    "hi52": 36.0,
    "lo52": 21.63
  },
  "SAGCEM": {
    "prev": 167.68,
    "hi52": 299.4,
    "lo52": 151.15
  },
  "SAGILITY": {
    "prev": 39.06,
    "hi52": 57.89,
    "lo52": 35.83
  },
  "SAHAJSOLAR": {
    "prev": 118.0,
    "hi52": 438.5,
    "lo52": 104.0
  },
  "SAHANA": {
    "prev": 976.25,
    "hi52": 1730.0,
    "lo52": 685.0
  },
  "SAHASRA": {
    "prev": 229.7,
    "hi52": 389.75,
    "lo52": 213.0
  },
  "SAHYADRI": {
    "prev": 240.45,
    "hi52": 330.0,
    "lo52": 211.0
  },
  "SAIFL": {
    "prev": 9.6,
    "hi52": 111.9,
    "lo52": 8.65
  },
  "SAIL": {
    "prev": 155.52,
    "hi52": 168.21,
    "lo52": 101.13
  },
  "SAILIFE": {
    "prev": 1000.05,
    "hi52": 1084.0,
    "lo52": 636.1
  },
  "SAJHOTELS": {
    "prev": 41.5,
    "hi52": 80.25,
    "lo52": 37.3
  },
  "SAKAR": {
    "prev": 531.0,
    "hi52": 577.95,
    "lo52": 210.1
  },
  "SAKHTISUG": {
    "prev": 14.74,
    "hi52": 28.5,
    "lo52": 13.52
  },
  "SAKSOFT": {
    "prev": 119.57,
    "hi52": 253.99,
    "lo52": 112.01
  },
  "SAKUMA": {
    "prev": 1.46,
    "hi52": 3.81,
    "lo52": 1.33
  },
  "SALASAR": {
    "prev": 6.94,
    "hi52": 11.3,
    "lo52": 6.07
  },
  "SALONA": {
    "prev": 267.0,
    "hi52": 318.8,
    "lo52": 221.0
  },
  "SALZERELEC": {
    "prev": 551.1,
    "hi52": 1167.55,
    "lo52": 518.3
  },
  "SAMBHAAV": {
    "prev": 5.71,
    "hi52": 11.53,
    "lo52": 5.0
  },
  "SAMBHV": {
    "prev": 94.48,
    "hi52": 149.4,
    "lo52": 81.42
  },
  "SAMHI": {
    "prev": 144.32,
    "hi52": 254.5,
    "lo52": 121.1
  },
  "SAMMAANCAP": {
    "prev": 137.97,
    "hi52": 192.95,
    "lo52": 97.61
  },
  "SAMPANN": {
    "prev": 28.41,
    "hi52": 43.44,
    "lo52": 24.16
  },
  "SANATHAN": {
    "prev": 378.35,
    "hi52": 560.2,
    "lo52": 312.0
  },
  "SANDESH": {
    "prev": 936.8,
    "hi52": 1438.5,
    "lo52": 865.0
  },
  "SANDHAR": {
    "prev": 477.3,
    "hi52": 601.0,
    "lo52": 342.15
  },
  "SANDUMA": {
    "prev": 185.29,
    "hi52": 557.75,
    "lo52": 156.3
  },
  "SANGAMIND": {
    "prev": 435.45,
    "hi52": 524.0,
    "lo52": 341.2
  },
  "SANGANI": {
    "prev": 40.0,
    "hi52": 77.0,
    "lo52": 39.45
  },
  "SANGHIIND": {
    "prev": 50.44,
    "hi52": 70.4,
    "lo52": 47.0
  },
  "SANGHVIMOV": {
    "prev": 241.15,
    "hi52": 411.9,
    "lo52": 222.0
  },
  "SANOFI": {
    "prev": 3386.1,
    "hi52": 6717.0,
    "lo52": 3217.0
  },
  "SANOFICONR": {
    "prev": 4252.0,
    "hi52": 5894.5,
    "lo52": 3975.0
  },
  "SANSERA": {
    "prev": 2177.9,
    "hi52": 2396.0,
    "lo52": 972.2
  },
  "SANSTAR": {
    "prev": 82.4,
    "hi52": 107.29,
    "lo52": 77.7
  },
  "SAPPHIRE": {
    "prev": 160.13,
    "hi52": 368.0,
    "lo52": 153.3
  },
  "SARDAEN": {
    "prev": 508.75,
    "hi52": 639.75,
    "lo52": 396.6
  },
  "SAREGAMA": {
    "prev": 344.1,
    "hi52": 603.0,
    "lo52": 307.05
  },
  "SARLAPOLY": {
    "prev": 83.01,
    "hi52": 127.5,
    "lo52": 71.56
  },
  "SAROJA": {
    "prev": 28.15,
    "hi52": 60.0,
    "lo52": 28.15
  },
  "SARTELE": {
    "prev": 173.45,
    "hi52": 302.95,
    "lo52": 151.25
  },
  "SARVESHWAR": {
    "prev": 3.22,
    "hi52": 9.45,
    "lo52": 2.82
  },
  "SASKEN": {
    "prev": 1174.4,
    "hi52": 1714.2,
    "lo52": 991.0
  },
  "SASTASUNDR": {
    "prev": 287.85,
    "hi52": 363.0,
    "lo52": 230.0
  },
  "SATECH": {
    "prev": 41.85,
    "hi52": 74.05,
    "lo52": 31.8
  },
  "SATIA": {
    "prev": 59.78,
    "hi52": 97.5,
    "lo52": 56.88
  },
  "SATIN": {
    "prev": 145.16,
    "hi52": 175.9,
    "lo52": 131.8
  },
  "SATIPOLY": {
    "prev": 34.15,
    "hi52": 94.85,
    "lo52": 32.1
  },
  "SATKARTAR": {
    "prev": 168.25,
    "hi52": 237.85,
    "lo52": 124.0
  },
  "SATTVAENGG": {
    "prev": 46.9,
    "hi52": 118.9,
    "lo52": 43.5
  },
  "SAURASHCEM": {
    "prev": 59.39,
    "hi52": 82.99,
    "lo52": 54.85
  },
  "SAVY": {
    "prev": 126.0,
    "hi52": 191.0,
    "lo52": 120.0
  },
  "SAWALIYA": {
    "prev": 314.5,
    "hi52": 351.0,
    "lo52": 208.0
  },
  "SBC": {
    "prev": 31.61,
    "hi52": 32.85,
    "lo52": 10.95
  },
  "SBCL": {
    "prev": 405.55,
    "hi52": 605.0,
    "lo52": 342.0
  },
  "SBFC": {
    "prev": 86.77,
    "hi52": 123.0,
    "lo52": 82.0
  },
  "SBGLP": {
    "prev": 25.43,
    "hi52": 48.73,
    "lo52": 23.0
  },
  "SBICARD": {
    "prev": 688.75,
    "hi52": 1027.25,
    "lo52": 650.05
  },
  "SCHAEFFLER": {
    "prev": 4186.5,
    "hi52": 4467.7,
    "lo52": 2823.0
  },
  "SCHAND": {
    "prev": 146.36,
    "hi52": 257.9,
    "lo52": 138.48
  },
  "SCI": {
    "prev": 233.35,
    "hi52": 280.5,
    "lo52": 147.0
  },
  "SCILAL": {
    "prev": 41.65,
    "hi52": 60.34,
    "lo52": 39.06
  },
  "SCML": {
    "prev": 140.75,
    "hi52": 159.5,
    "lo52": 68.05
  },
  "SCODATUBES": {
    "prev": 124.78,
    "hi52": 230.85,
    "lo52": 110.0
  },
  "SDBL": {
    "prev": 74.66,
    "hi52": 173.03,
    "lo52": 69.8
  },
  "SDREAMS": {
    "prev": 78.65,
    "hi52": 147.0,
    "lo52": 73.0
  },
  "SEAMECLTD": {
    "prev": 1379.3,
    "hi52": 1446.7,
    "lo52": 752.55
  },
  "SECMARK": {
    "prev": 106.26,
    "hi52": 174.63,
    "lo52": 75.0
  },
  "SECURKLOUD": {
    "prev": 21.99,
    "hi52": 34.18,
    "lo52": 16.01
  },
  "SEDEMAC": {
    "prev": 1501.2,
    "hi52": 1613.5,
    "lo52": 1413.1
  },
  "SEJALLTD": {
    "prev": 481.75,
    "hi52": 1036.7,
    "lo52": 324.0
  },
  "SEL": {
    "prev": 139.0,
    "hi52": 337.1,
    "lo52": 127.0
  },
  "SELLOWRAP": {
    "prev": 69.0,
    "hi52": 139.65,
    "lo52": 64.15
  },
  "SELMC": {
    "prev": 28.95,
    "hi52": 48.77,
    "lo52": 26.0
  },
  "SEMAC": {
    "prev": 274.84,
    "hi52": 568.9,
    "lo52": 205.0
  },
  "SENCO": {
    "prev": 295.95,
    "hi52": 405.7,
    "lo52": 269.1
  },
  "SENORES": {
    "prev": 751.6,
    "hi52": 876.5,
    "lo52": 440.3
  },
  "SEPC": {
    "prev": 5.16,
    "hi52": 16.89,
    "lo52": 4.65
  },
  "SERVOTECH": {
    "prev": 68.71,
    "hi52": 168.5,
    "lo52": 57.51
  },
  "SESHAPAPER": {
    "prev": 259.0,
    "hi52": 318.0,
    "lo52": 211.59
  },
  "SETCO": {
    "prev": 15.73,
    "hi52": 21.68,
    "lo52": 11.56
  },
  "SETL": {
    "prev": 116.81,
    "hi52": 203.95,
    "lo52": 110.0
  },
  "SFL": {
    "prev": 516.0,
    "hi52": 770.0,
    "lo52": 480.0
  },
  "SFML": {
    "prev": 22.5,
    "hi52": 43.5,
    "lo52": 21.5
  },
  "SGFIN": {
    "prev": 376.6,
    "hi52": 452.8,
    "lo52": 323.0
  },
  "SGIL": {
    "prev": 500.65,
    "hi52": 633.25,
    "lo52": 377.1
  },
  "SGL": {
    "prev": 10.4,
    "hi52": 20.79,
    "lo52": 9.72
  },
  "SGMART": {
    "prev": 433.0,
    "hi52": 479.1,
    "lo52": 313.1
  },
  "SHADOWFAX": {
    "prev": 112.11,
    "hi52": 127.75,
    "lo52": 98.55
  },
  "SHAH": {
    "prev": 4.65,
    "hi52": 5.55,
    "lo52": 2.8
  },
  "SHAHALLOYS": {
    "prev": 61.06,
    "hi52": 83.85,
    "lo52": 44.2
  },
  "SHAILY": {
    "prev": 2399.0,
    "hi52": 2799.9,
    "lo52": 1372.65
  },
  "SHAKTIPUMP": {
    "prev": 496.45,
    "hi52": 1049.0,
    "lo52": 460.0
  },
  "SHALBY": {
    "prev": 140.08,
    "hi52": 274.7,
    "lo52": 131.0
  },
  "SHALPAINTS": {
    "prev": 44.71,
    "hi52": 119.2,
    "lo52": 40.1
  },
  "SHANTHALA": {
    "prev": 28.0,
    "hi52": 46.9,
    "lo52": 23.05
  },
  "SHANTI": {
    "prev": 6.24,
    "hi52": 23.87,
    "lo52": 5.77
  },
  "SHANTIGEAR": {
    "prev": 440.4,
    "hi52": 619.8,
    "lo52": 395.0
  },
  "SHANTIGOLD": {
    "prev": 184.62,
    "hi52": 274.1,
    "lo52": 169.2
  },
  "SHARDACROP": {
    "prev": 978.6,
    "hi52": 1297.0,
    "lo52": 452.25
  },
  "SHARDAMOTR": {
    "prev": 786.35,
    "hi52": 2120.0,
    "lo52": 740.0
  },
  "SHAREINDIA": {
    "prev": 125.04,
    "hi52": 211.0,
    "lo52": 117.01
  },
  "SHEEL": {
    "prev": 49.05,
    "hi52": 95.55,
    "lo52": 46.0
  },
  "SHEKHAWATI": {
    "prev": 11.59,
    "hi52": 26.84,
    "lo52": 10.77
  },
  "SHEMAROO": {
    "prev": 96.02,
    "hi52": 161.0,
    "lo52": 90.2
  },
  "SHERA": {
    "prev": 111.05,
    "hi52": 172.9,
    "lo52": 102.8
  },
  "SHETHJI": {
    "prev": 118.9,
    "hi52": 123.65,
    "lo52": 95.5
  },
  "SHILCTECH": {
    "prev": 3977.3,
    "hi52": 4350.0,
    "lo52": 2852.5
  },
  "SHILPAMED": {
    "prev": 323.25,
    "hi52": 1000.0,
    "lo52": 259.5
  },
  "SHIVALIK": {
    "prev": 233.7,
    "hi52": 698.05,
    "lo52": 206.75
  },
  "SHIVAMAUTO": {
    "prev": 15.93,
    "hi52": 35.79,
    "lo52": 14.75
  },
  "SHIVAMILLS": {
    "prev": 52.86,
    "hi52": 88.32,
    "lo52": 50.2
  },
  "SHIVASHRIT": {
    "prev": 118.05,
    "hi52": 148.5,
    "lo52": 109.0
  },
  "SHIVATEX": {
    "prev": 133.54,
    "hi52": 237.9,
    "lo52": 130.22
  },
  "SHIVAUM": {
    "prev": 362.65,
    "hi52": 375.4,
    "lo52": 260.0
  },
  "SHK": {
    "prev": 124.84,
    "hi52": 275.5,
    "lo52": 116.05
  },
  "SHOPERSTOP": {
    "prev": 288.5,
    "hi52": 588.75,
    "lo52": 275.95
  },
  "SHRADHA": {
    "prev": 31.88,
    "hi52": 83.5,
    "lo52": 28.81
  },
  "SHREDIGCEM": {
    "prev": 60.14,
    "hi52": 107.7,
    "lo52": 54.52
  },
  "SHREEJISPG": {
    "prev": 357.8,
    "hi52": 421.95,
    "lo52": 222.0
  },
  "SHREEKARNI": {
    "prev": 355.6,
    "hi52": 712.0,
    "lo52": 330.0
  },
  "SHREEOSFM": {
    "prev": 75.0,
    "hi52": 145.35,
    "lo52": 65.0
  },
  "SHREEPUSHK": {
    "prev": 298.5,
    "hi52": 476.0,
    "lo52": 220.5
  },
  "SHREERAMA": {
    "prev": 44.5,
    "hi52": 71.99,
    "lo52": 31.05
  },
  "SHREMINVIT": {
    "prev": 93.4,
    "hi52": 115.0,
    "lo52": 91.1
  },
  "SHREYANIND": {
    "prev": 149.82,
    "hi52": 250.0,
    "lo52": 130.37
  },
  "SHRIAHIMSA": {
    "prev": 240.2,
    "hi52": 283.0,
    "lo52": 126.5
  },
  "SHRIKANHA": {
    "prev": 20.0,
    "hi52": 88.0,
    "lo52": 18.05
  },
  "SHRINGARMS": {
    "prev": 190.16,
    "hi52": 266.5,
    "lo52": 169.01
  },
  "SHRIPISTON": {
    "prev": 3125.0,
    "hi52": 3407.2,
    "lo52": 1662.55
  },
  "SHRIRAMPPS": {
    "prev": 68.22,
    "hi52": 105.58,
    "lo52": 65.1
  },
  "SHRITECH": {
    "prev": 57.0,
    "hi52": 95.5,
    "lo52": 51.35
  },
  "SHUBHSHREE": {
    "prev": 304.0,
    "hi52": 494.95,
    "lo52": 279.75
  },
  "SHYAMCENT": {
    "prev": 4.49,
    "hi52": 10.42,
    "lo52": 4.27
  },
  "SHYAMDHANI": {
    "prev": 60.55,
    "hi52": 139.65,
    "lo52": 56.2
  },
  "SHYAMMETL": {
    "prev": 795.3,
    "hi52": 1001.0,
    "lo52": 745.0
  },
  "SHYAMTEL": {
    "prev": 8.97,
    "hi52": 19.74,
    "lo52": 7.07
  },
  "SIDDHIKA": {
    "prev": 215.0,
    "hi52": 243.0,
    "lo52": 168.2
  },
  "SIGACHI": {
    "prev": 18.98,
    "hi52": 59.59,
    "lo52": 17.96
  },
  "SIGIND": {
    "prev": 43.24,
    "hi52": 81.0,
    "lo52": 40.66
  },
  "SIGMA": {
    "prev": 39.65,
    "hi52": 655.0,
    "lo52": 36.61
  },
  "SIGMAADV": {
    "prev": 172.48,
    "hi52": 231.0,
    "lo52": 49.06
  },
  "SIGNATURE": {
    "prev": 763.65,
    "hi52": 1309.5,
    "lo52": 721.0
  },
  "SIGNORIA": {
    "prev": 56.05,
    "hi52": 135.6,
    "lo52": 53.25
  },
  "SIGNPOST": {
    "prev": 235.05,
    "hi52": 310.0,
    "lo52": 180.37
  },
  "SIKKO": {
    "prev": 4.74,
    "hi52": 136.63,
    "lo52": 3.81
  },
  "SIL": {
    "prev": 13.91,
    "hi52": 23.05,
    "lo52": 12.67
  },
  "SILGO": {
    "prev": 71.71,
    "hi52": 87.5,
    "lo52": 43.73
  },
  "SILGOPP": {
    "prev": 31.25,
    "hi52": 37.04,
    "lo52": 24.52
  },
  "SILINV": {
    "prev": 402.4,
    "hi52": 674.0,
    "lo52": 392.0
  },
  "SILKY": {
    "prev": 150.0,
    "hi52": 171.0,
    "lo52": 103.0
  },
  "SILLYMONKS": {
    "prev": 16.33,
    "hi52": 28.45,
    "lo52": 13.45
  },
  "SILVERTUC": {
    "prev": 123.0,
    "hi52": 1690.2,
    "lo52": 100.5
  },
  "SIMPLEXINF": {
    "prev": 165.24,
    "hi52": 342.45,
    "lo52": 148.1
  },
  "SINCLAIR": {
    "prev": 73.94,
    "hi52": 114.75,
    "lo52": 68.82
  },
  "SINDHUTRAD": {
    "prev": 23.28,
    "hi52": 39.29,
    "lo52": 14.57
  },
  "SINGERIND": {
    "prev": 70.06,
    "hi52": 79.3,
    "lo52": 66.0
  },
  "SINTERCOM": {
    "prev": 77.98,
    "hi52": 153.84,
    "lo52": 65.6
  },
  "SIRCA": {
    "prev": 429.25,
    "hi52": 539.0,
    "lo52": 230.69
  },
  "SIS": {
    "prev": 273.65,
    "hi52": 401.85,
    "lo52": 257.05
  },
  "SIYSIL": {
    "prev": 475.35,
    "hi52": 848.8,
    "lo52": 455.2
  },
  "SJLOGISTIC": {
    "prev": 274.5,
    "hi52": 585.0,
    "lo52": 246.3
  },
  "SJS": {
    "prev": 1583.8,
    "hi52": 1930.0,
    "lo52": 811.0
  },
  "SJVN": {
    "prev": 70.08,
    "hi52": 107.5,
    "lo52": 66.01
  },
  "SKFINDIA": {
    "prev": 1537.4,
    "hi52": 2300.0,
    "lo52": 1455.0
  },
  "SKFINDUS": {
    "prev": 2178.9,
    "hi52": 2766.0,
    "lo52": 2097.0
  },
  "SKIPPER": {
    "prev": 350.15,
    "hi52": 588.0,
    "lo52": 327.05
  },
  "SKMEGGPROD": {
    "prev": 154.86,
    "hi52": 465.0,
    "lo52": 143.1
  },
  "SKP": {
    "prev": 151.1,
    "hi52": 253.95,
    "lo52": 143.1
  },
  "SKYGOLD": {
    "prev": 346.65,
    "hi52": 400.95,
    "lo52": 246.05
  },
  "SLONE": {
    "prev": 194.0,
    "hi52": 371.45,
    "lo52": 170.05
  },
  "SMARTEN": {
    "prev": 52.0,
    "hi52": 157.95,
    "lo52": 45.5
  },
  "SMARTLINK": {
    "prev": 119.98,
    "hi52": 173.49,
    "lo52": 112.0
  },
  "SMARTWORKS": {
    "prev": 393.45,
    "hi52": 619.0,
    "lo52": 370.0
  },
  "SMCGLOBAL": {
    "prev": 64.8,
    "hi52": 160.0,
    "lo52": 56.99
  },
  "SMLMAH": {
    "prev": 4050.3,
    "hi52": 5348.0,
    "lo52": 1442.35
  },
  "SMLT": {
    "prev": 66.06,
    "hi52": 140.0,
    "lo52": 62.2
  },
  "SMSPHARMA": {
    "prev": 385.05,
    "hi52": 433.9,
    "lo52": 188.0
  },
  "SNEHAA": {
    "prev": 40.55,
    "hi52": 122.0,
    "lo52": 38.0
  },
  "SNOWMAN": {
    "prev": 34.18,
    "hi52": 64.4,
    "lo52": 31.6
  },
  "SOBHA": {
    "prev": 1267.2,
    "hi52": 1732.5,
    "lo52": 1075.3
  },
  "SOCL": {
    "prev": 28.0,
    "hi52": 68.8,
    "lo52": 24.3
  },
  "SOFTTECH": {
    "prev": 265.75,
    "hi52": 421.0,
    "lo52": 248.0
  },
  "SOLARA": {
    "prev": 450.2,
    "hi52": 734.4,
    "lo52": 425.0
  },
  "SOLARAPP1": {
    "prev": 299.35,
    "hi52": 524.9,
    "lo52": 271.0
  },
  "SOLARWORLD": {
    "prev": 159.7,
    "hi52": 388.5,
    "lo52": 145.14
  },
  "SOLEX": {
    "prev": 1009.75,
    "hi52": 1985.0,
    "lo52": 630.9
  },
  "SOMANYCERA": {
    "prev": 378.3,
    "hi52": 624.0,
    "lo52": 332.0
  },
  "SOMICONVEY": {
    "prev": 99.99,
    "hi52": 207.02,
    "lo52": 85.5
  },
  "SONACOMS": {
    "prev": 506.25,
    "hi52": 559.5,
    "lo52": 380.0
  },
  "SONAMAC": {
    "prev": 31.25,
    "hi52": 108.9,
    "lo52": 30.2
  },
  "SONAMLTD": {
    "prev": 53.73,
    "hi52": 62.35,
    "lo52": 37.0
  },
  "SONATSOFTW": {
    "prev": 236.75,
    "hi52": 464.2,
    "lo52": 222.75
  },
  "SONUINFRA": {
    "prev": 46.1,
    "hi52": 145.0,
    "lo52": 43.8
  },
  "SOTL": {
    "prev": 342.85,
    "hi52": 477.65,
    "lo52": 318.05
  },
  "SOUTHBANK": {
    "prev": 36.01,
    "hi52": 46.84,
    "lo52": 22.3
  },
  "SOUTHWEST": {
    "prev": 204.04,
    "hi52": 242.0,
    "lo52": 100.0
  },
  "SPAL": {
    "prev": 715.25,
    "hi52": 945.0,
    "lo52": 600.0
  },
  "SPANDANA": {
    "prev": 207.85,
    "hi52": 348.3,
    "lo52": 193.0
  },
  "SPARC": {
    "prev": 115.42,
    "hi52": 204.4,
    "lo52": 108.0
  },
  "SPCENET": {
    "prev": 3.95,
    "hi52": 11.24,
    "lo52": 3.38
  },
  "SPCL": {
    "prev": 72.65,
    "hi52": 139.2,
    "lo52": 68.05
  },
  "SPEB": {
    "prev": 52.05,
    "hi52": 60.0,
    "lo52": 46.55
  },
  "SPECIALITY": {
    "prev": 96.49,
    "hi52": 156.45,
    "lo52": 88.11
  },
  "SPECTRUM": {
    "prev": 1440.6,
    "hi52": 2249.95,
    "lo52": 1050.0
  },
  "SPECTSTM": {
    "prev": 61.2,
    "hi52": 172.8,
    "lo52": 55.1
  },
  "SPENCERS": {
    "prev": 29.48,
    "hi52": 71.99,
    "lo52": 27.81
  },
  "SPIC": {
    "prev": 61.43,
    "hi52": 128.2,
    "lo52": 58.25
  },
  "SPLIL": {
    "prev": 25.88,
    "hi52": 46.4,
    "lo52": 24.0
  },
  "SPLPETRO": {
    "prev": 653.95,
    "hi52": 979.0,
    "lo52": 462.3
  },
  "SPMLINFRA": {
    "prev": 168.1,
    "hi52": 323.4,
    "lo52": 151.15
  },
  "SPORTKING": {
    "prev": 117.27,
    "hi52": 140.0,
    "lo52": 76.0
  },
  "SPPPOLY": {
    "prev": 12.7,
    "hi52": 19.6,
    "lo52": 12.1
  },
  "SPUNWEB": {
    "prev": 85.3,
    "hi52": 173.55,
    "lo52": 80.0
  },
  "SRD": {
    "prev": 44.42,
    "hi52": 91.0,
    "lo52": 39.15
  },
  "SREEL": {
    "prev": 185.72,
    "hi52": 262.0,
    "lo52": 180.0
  },
  "SRF": {
    "prev": 2454.5,
    "hi52": 3325.0,
    "lo52": 2381.0
  },
  "SRGHFL": {
    "prev": 247.65,
    "hi52": 353.95,
    "lo52": 233.4
  },
  "SRHHYPOLTD": {
    "prev": 430.55,
    "hi52": 716.5,
    "lo52": 413.0
  },
  "SRIVASAVI": {
    "prev": 44.45,
    "hi52": 79.0,
    "lo52": 39.0
  },
  "SRM": {
    "prev": 404.15,
    "hi52": 649.95,
    "lo52": 298.35
  },
  "SRTL": {
    "prev": 48.42,
    "hi52": 73.36,
    "lo52": 44.0
  },
  "SSDL": {
    "prev": 56.23,
    "hi52": 108.0,
    "lo52": 53.3
  },
  "SSEGL": {
    "prev": 340.2,
    "hi52": 580.0,
    "lo52": 320.0
  },
  "SSFL": {
    "prev": 132.0,
    "hi52": 216.0,
    "lo52": 86.0
  },
  "SSFLPP": {
    "prev": 101.15,
    "hi52": 146.65,
    "lo52": 92.0
  },
  "SSWL": {
    "prev": 185.46,
    "hi52": 280.0,
    "lo52": 175.1
  },
  "STALLION": {
    "prev": 114.69,
    "hi52": 423.8,
    "lo52": 60.1
  },
  "STANLEY": {
    "prev": 144.86,
    "hi52": 377.5,
    "lo52": 137.41
  },
  "STAR": {
    "prev": 903.65,
    "hi52": 1025.0,
    "lo52": 513.05
  },
  "STARCEMENT": {
    "prev": 216.39,
    "hi52": 308.95,
    "lo52": 196.53
  },
  "STARHEALTH": {
    "prev": 452.0,
    "hi52": 534.0,
    "lo52": 327.3
  },
  "STARPAPER": {
    "prev": 130.95,
    "hi52": 188.8,
    "lo52": 125.98
  },
  "STARTECK": {
    "prev": 251.75,
    "hi52": 355.8,
    "lo52": 239.3
  },
  "STCINDIA": {
    "prev": 107.42,
    "hi52": 168.45,
    "lo52": 98.68
  },
  "STEELCAS": {
    "prev": 228.96,
    "hi52": 1279.0,
    "lo52": 176.02
  },
  "STEELCITY": {
    "prev": 79.88,
    "hi52": 116.9,
    "lo52": 73.8
  },
  "STEELXIND": {
    "prev": 7.4,
    "hi52": 11.55,
    "lo52": 7.0
  },
  "STEL": {
    "prev": 448.85,
    "hi52": 633.3,
    "lo52": 364.8
  },
  "STERTOOLS": {
    "prev": 177.55,
    "hi52": 393.45,
    "lo52": 166.0
  },
  "STLNETWORK": {
    "prev": 18.65,
    "hi52": 35.4,
    "lo52": 17.99
  },
  "STLTECH": {
    "prev": 188.56,
    "hi52": 205.73,
    "lo52": 58.86
  },
  "STOVEKRAFT": {
    "prev": 498.75,
    "hi52": 813.95,
    "lo52": 453.15
  },
  "STRIDERS": {
    "prev": 65.5,
    "hi52": 70.0,
    "lo52": 54.2
  },
  "STUDDS": {
    "prev": 490.65,
    "hi52": 600.0,
    "lo52": 470.15
  },
  "STUDIOLSD": {
    "prev": 9.75,
    "hi52": 43.2,
    "lo52": 9.35
  },
  "STYL": {
    "prev": 231.4,
    "hi52": 437.45,
    "lo52": 218.0
  },
  "STYLAMIND": {
    "prev": 2205.7,
    "hi52": 2430.0,
    "lo52": 1510.0
  },
  "STYLEBAAZA": {
    "prev": 242.85,
    "hi52": 392.0,
    "lo52": 220.5
  },
  "STYRENIX": {
    "prev": 1969.7,
    "hi52": 3498.0,
    "lo52": 1819.0
  },
  "SUBAHOTELS": {
    "prev": 119.8,
    "hi52": 200.0,
    "lo52": 104.0
  },
  "SUBEXLTD": {
    "prev": 8.13,
    "hi52": 17.19,
    "lo52": 7.5
  },
  "SUBROS": {
    "prev": 676.55,
    "hi52": 1213.7,
    "lo52": 518.0
  },
  "SUDARCOLOR": {
    "prev": 312.35,
    "hi52": 620.85,
    "lo52": 281.0
  },
  "SUDARSCHEM": {
    "prev": 812.55,
    "hi52": 1603.0,
    "lo52": 756.05
  },
  "SUDEEPPHRM": {
    "prev": 613.85,
    "hi52": 795.0,
    "lo52": 524.05
  },
  "SUKHJITS": {
    "prev": 162.58,
    "hi52": 235.0,
    "lo52": 143.61
  },
  "SULA": {
    "prev": 152.62,
    "hi52": 335.9,
    "lo52": 142.0
  },
  "SUMEETINDS": {
    "prev": 29.39,
    "hi52": 181.7,
    "lo52": 21.64
  },
  "SUMICHEM": {
    "prev": 387.0,
    "hi52": 665.0,
    "lo52": 370.05
  },
  "SUMIT": {
    "prev": 44.53,
    "hi52": 117.0,
    "lo52": 31.74
  },
  "SUMMITSEC": {
    "prev": 1496.0,
    "hi52": 2495.0,
    "lo52": 1391.1
  },
  "SUNCLAY": {
    "prev": 1289.7,
    "hi52": 2538.1,
    "lo52": 1112.8
  },
  "SUNDARAM": {
    "prev": 1.21,
    "hi52": 2.46,
    "lo52": 1.12
  },
  "SUNDARMFIN": {
    "prev": 4678.0,
    "hi52": 5642.0,
    "lo52": 4200.0
  },
  "SUNDRMBRAK": {
    "prev": 529.95,
    "hi52": 1048.95,
    "lo52": 503.3
  },
  "SUNDRMFAST": {
    "prev": 813.0,
    "hi52": 1080.0,
    "lo52": 784.6
  },
  "SUNDROP": {
    "prev": 621.65,
    "hi52": 960.15,
    "lo52": 600.0
  },
  "SUNFLAG": {
    "prev": 217.64,
    "hi52": 322.0,
    "lo52": 196.37
  },
  "SUNLITE": {
    "prev": 345.95,
    "hi52": 415.5,
    "lo52": 91.0
  },
  "SUNREST": {
    "prev": 44.6,
    "hi52": 61.0,
    "lo52": 29.55
  },
  "SUNTECH": {
    "prev": 32.25,
    "hi52": 110.0,
    "lo52": 30.3
  },
  "SUNTECK": {
    "prev": 307.7,
    "hi52": 478.75,
    "lo52": 285.65
  },
  "SUNTV": {
    "prev": 592.95,
    "hi52": 691.4,
    "lo52": 480.2
  },
  "SUPERHOUSE": {
    "prev": 139.71,
    "hi52": 201.95,
    "lo52": 128.55
  },
  "SUPERSPIN": {
    "prev": 4.52,
    "hi52": 12.47,
    "lo52": 3.96
  },
  "SUPRAJIT": {
    "prev": 402.55,
    "hi52": 517.65,
    "lo52": 350.0
  },
  "SUPREME": {
    "prev": 51.43,
    "hi52": 116.5,
    "lo52": 47.35
  },
  "SUPREMEIND": {
    "prev": 3834.4,
    "hi52": 4739.0,
    "lo52": 3095.0
  },
  "SUPREMEPWR": {
    "prev": 164.9,
    "hi52": 240.05,
    "lo52": 101.65
  },
  "SUPRIYA": {
    "prev": 584.2,
    "hi52": 842.0,
    "lo52": 549.15
  },
  "SURAJEST": {
    "prev": 201.39,
    "hi52": 398.7,
    "lo52": 188.56
  },
  "SURAJLTD": {
    "prev": 230.44,
    "hi52": 439.95,
    "lo52": 205.0
  },
  "SURAKSHA": {
    "prev": 260.3,
    "hi52": 352.5,
    "lo52": 240.0
  },
  "SURANASOL": {
    "prev": 22.2,
    "hi52": 41.44,
    "lo52": 20.01
  },
  "SURANAT&P": {
    "prev": 17.24,
    "hi52": 29.27,
    "lo52": 16.29
  },
  "SURANI": {
    "prev": 78.6,
    "hi52": 139.0,
    "lo52": 47.3
  },
  "SURYALAXMI": {
    "prev": 52.44,
    "hi52": 82.4,
    "lo52": 48.12
  },
  "SURYAROSNI": {
    "prev": 209.08,
    "hi52": 359.0,
    "lo52": 196.0
  },
  "SURYODAY": {
    "prev": 123.54,
    "hi52": 161.48,
    "lo52": 100.0
  },
  "SUTLEJTEX": {
    "prev": 29.21,
    "hi52": 51.7,
    "lo52": 26.2
  },
  "SUVEN": {
    "prev": 134.03,
    "hi52": 299.99,
    "lo52": 113.0
  },
  "SUVIDHAA": {
    "prev": 2.82,
    "hi52": 6.57,
    "lo52": 2.44
  },
  "SUYOG": {
    "prev": 679.9,
    "hi52": 989.0,
    "lo52": 526.5
  },
  "SUZLON": {
    "prev": 41.95,
    "hi52": 74.3,
    "lo52": 38.19
  },
  "SVLL": {
    "prev": 506.5,
    "hi52": 855.7,
    "lo52": 385.0
  },
  "SWANCORP": {
    "prev": 318.6,
    "hi52": 526.7,
    "lo52": 303.75
  },
  "SWARAJENG": {
    "prev": 3560.6,
    "hi52": 4720.0,
    "lo52": 3328.9
  },
  "SWASTIK": {
    "prev": 16.6,
    "hi52": 50.95,
    "lo52": 16.0
  },
  "SWELECTES": {
    "prev": 553.85,
    "hi52": 977.0,
    "lo52": 485.0
  },
  "SWIGGY": {
    "prev": 282.8,
    "hi52": 474.0,
    "lo52": 266.95
  },
  "SWSOLAR": {
    "prev": 171.65,
    "hi52": 348.9,
    "lo52": 158.02
  },
  "SYLVANPLY": {
    "prev": 45.05,
    "hi52": 95.0,
    "lo52": 43.0
  },
  "SYMPHONY": {
    "prev": 771.45,
    "hi52": 1347.9,
    "lo52": 724.0
  },
  "SYNCOMF": {
    "prev": 11.78,
    "hi52": 23.49,
    "lo52": 11.0
  },
  "SYNGENE": {
    "prev": 414.75,
    "hi52": 760.0,
    "lo52": 387.05
  },
  "SYNOPTICS": {
    "prev": 46.1,
    "hi52": 116.0,
    "lo52": 45.0
  },
  "SYRMA": {
    "prev": 783.9,
    "hi52": 909.9,
    "lo52": 370.0
  },
  "SYSTANGO": {
    "prev": 253.95,
    "hi52": 411.0,
    "lo52": 192.25
  },
  "SYSTMTXC": {
    "prev": 60.04,
    "hi52": 177.9,
    "lo52": 57.25
  },
  "TAC": {
    "prev": 433.5,
    "hi52": 1437.95,
    "lo52": 352.0
  },
  "TAINWALCHM": {
    "prev": 181.4,
    "hi52": 274.99,
    "lo52": 155.0
  },
  "TAJGVK": {
    "prev": 301.85,
    "hi52": 520.1,
    "lo52": 281.35
  },
  "TALBROAUTO": {
    "prev": 236.55,
    "hi52": 326.0,
    "lo52": 214.0
  },
  "TANLA": {
    "prev": 423.05,
    "hi52": 766.0,
    "lo52": 393.9
  },
  "TAPIFRUIT": {
    "prev": 57.75,
    "hi52": 104.8,
    "lo52": 55.0
  },
  "TARACHAND": {
    "prev": 56.62,
    "hi52": 103.67,
    "lo52": 53.97
  },
  "TARAPUR": {
    "prev": 26.43,
    "hi52": 39.99,
    "lo52": 21.5
  },
  "TARC": {
    "prev": 123.09,
    "hi52": 206.1,
    "lo52": 112.25
  },
  "TARIL": {
    "prev": 285.15,
    "hi52": 594.0,
    "lo52": 224.05
  },
  "TARSONS": {
    "prev": 184.47,
    "hi52": 458.0,
    "lo52": 174.91
  },
  "TASTYBITE": {
    "prev": 6729.5,
    "hi52": 11958.0,
    "lo52": 6430.0
  },
  "TATACAP": {
    "prev": 317.1,
    "hi52": 367.3,
    "lo52": 303.4
  },
  "TATACHEM": {
    "prev": 633.3,
    "hi52": 1026.65,
    "lo52": 595.25
  },
  "TATACOMM": {
    "prev": 1416.8,
    "hi52": 2004.0,
    "lo52": 1361.6
  },
  "TATAELXSI": {
    "prev": 4237.7,
    "hi52": 6735.0,
    "lo52": 4021.6
  },
  "TATAINVEST": {
    "prev": 602.6,
    "hi52": 11847.0,
    "lo52": 566.8
  },
  "TATATECH": {
    "prev": 539.65,
    "hi52": 797.0,
    "lo52": 517.0
  },
  "TATVA": {
    "prev": 1128.5,
    "hi52": 1610.0,
    "lo52": 633.55
  },
  "TAURIAN": {
    "prev": 207.0,
    "hi52": 425.0,
    "lo52": 192.0
  },
  "TBI": {
    "prev": 61.55,
    "hi52": 137.8,
    "lo52": 55.0
  },
  "TBOTEK": {
    "prev": 1068.1,
    "hi52": 1764.8,
    "lo52": 996.0
  },
  "TBZ": {
    "prev": 129.06,
    "hi52": 232.65,
    "lo52": 120.01
  },
  "TCC": {
    "prev": 358.65,
    "hi52": 526.4,
    "lo52": 310.0
  },
  "TCI": {
    "prev": 944.6,
    "hi52": 1289.0,
    "lo52": 881.2
  },
  "TCIEXP": {
    "prev": 498.15,
    "hi52": 848.0,
    "lo52": 462.55
  },
  "TCL": {
    "prev": 86.25,
    "hi52": 137.0,
    "lo52": 78.0
  },
  "TCPLPACK": {
    "prev": 2334.7,
    "hi52": 4900.0,
    "lo52": 2200.0
  },
  "TDPOWERSYS": {
    "prev": 863.25,
    "hi52": 933.0,
    "lo52": 318.7
  },
  "TEAMGTY": {
    "prev": 268.35,
    "hi52": 332.55,
    "lo52": 154.4
  },
  "TEAMLEASE": {
    "prev": 1188.5,
    "hi52": 2165.0,
    "lo52": 1065.2
  },
  "TECHD": {
    "prev": 511.6,
    "hi52": 843.6,
    "lo52": 360.0
  },
  "TECHERA": {
    "prev": 183.4,
    "hi52": 325.7,
    "lo52": 115.6
  },
  "TECHLABS": {
    "prev": 186.95,
    "hi52": 829.0,
    "lo52": 165.3
  },
  "TECHNOE": {
    "prev": 1089.6,
    "hi52": 1654.0,
    "lo52": 785.15
  },
  "TECILCHEM": {
    "prev": 13.0,
    "hi52": 42.16,
    "lo52": 11.0
  },
  "TEGA": {
    "prev": 1725.0,
    "hi52": 2125.0,
    "lo52": 1200.05
  },
  "TEJASCARGO": {
    "prev": 298.05,
    "hi52": 363.6,
    "lo52": 150.05
  },
  "TEJASNET": {
    "prev": 435.95,
    "hi52": 914.4,
    "lo52": 294.0
  },
  "TEMBO": {
    "prev": 501.4,
    "hi52": 837.0,
    "lo52": 386.0
  },
  "TENNIND": {
    "prev": 546.5,
    "hi52": 602.0,
    "lo52": 438.05
  },
  "TERASOFT": {
    "prev": 331.9,
    "hi52": 598.0,
    "lo52": 184.97
  },
  "TEXINFRA": {
    "prev": 89.08,
    "hi52": 113.03,
    "lo52": 82.5
  },
  "TEXMOPIPES": {
    "prev": 40.47,
    "hi52": 68.99,
    "lo52": 37.27
  },
  "TEXRAIL": {
    "prev": 89.63,
    "hi52": 189.0,
    "lo52": 84.0
  },
  "TFCILTD": {
    "prev": 65.45,
    "hi52": 364.9,
    "lo52": 51.0
  },
  "TFL": {
    "prev": 12.79,
    "hi52": 21.5,
    "lo52": 11.75
  },
  "TGBHOTELS": {
    "prev": 8.23,
    "hi52": 14.3,
    "lo52": 7.52
  },
  "THANGAMAYL": {
    "prev": 3328.8,
    "hi52": 4149.0,
    "lo52": 1700.0
  },
  "THEINVEST": {
    "prev": 101.19,
    "hi52": 184.17,
    "lo52": 90.01
  },
  "THEJO": {
    "prev": 1555.7,
    "hi52": 2485.8,
    "lo52": 1446.0
  },
  "THELEELA": {
    "prev": 399.3,
    "hi52": 474.4,
    "lo52": 382.5
  },
  "THEMISMED": {
    "prev": 75.29,
    "hi52": 176.0,
    "lo52": 70.25
  },
  "THERMAX": {
    "prev": 3227.4,
    "hi52": 4091.8,
    "lo52": 2742.7
  },
  "THESL": {
    "prev": 12.45,
    "hi52": 43.5,
    "lo52": 12.45
  },
  "THOMASCOOK": {
    "prev": 103.34,
    "hi52": 188.29,
    "lo52": 86.35
  },
  "THOMASCOTT": {
    "prev": 273.35,
    "hi52": 459.8,
    "lo52": 236.9
  },
  "THYROCARE": {
    "prev": 351.35,
    "hi52": 1610.0,
    "lo52": 342.55
  },
  "TI": {
    "prev": 434.4,
    "hi52": 549.7,
    "lo52": 199.53
  },
  "TICL": {
    "prev": 25.61,
    "hi52": 41.33,
    "lo52": 19.35
  },
  "TIGERLOGS": {
    "prev": 25.09,
    "hi52": 56.69,
    "lo52": 22.9
  },
  "TIIL": {
    "prev": 2189.8,
    "hi52": 3383.0,
    "lo52": 1868.5
  },
  "TIINDIA": {
    "prev": 2537.3,
    "hi52": 3419.9,
    "lo52": 2164.9
  },
  "TIL": {
    "prev": 187.24,
    "hi52": 409.0,
    "lo52": 166.09
  },
  "TIMETECHNO": {
    "prev": 162.22,
    "hi52": 498.0,
    "lo52": 154.0
  },
  "TIMKEN": {
    "prev": 3163.3,
    "hi52": 3610.0,
    "lo52": 2202.0
  },
  "TINNARUBR": {
    "prev": 626.6,
    "hi52": 1088.85,
    "lo52": 576.0
  },
  "TIPSFILMS": {
    "prev": 312.7,
    "hi52": 666.0,
    "lo52": 280.45
  },
  "TIPSMUSIC": {
    "prev": 515.55,
    "hi52": 718.0,
    "lo52": 483.0
  },
  "TIRUMALCHM": {
    "prev": 174.37,
    "hi52": 328.8,
    "lo52": 158.0
  },
  "TIRUPATIFL": {
    "prev": 46.88,
    "hi52": 52.0,
    "lo52": 28.21
  },
  "TITAGARH": {
    "prev": 626.35,
    "hi52": 974.35,
    "lo52": 590.45
  },
  "TMB": {
    "prev": 599.0,
    "hi52": 721.0,
    "lo52": 401.0
  },
  "TMCV": {
    "prev": 419.65,
    "hi52": 509.0,
    "lo52": 306.3
  },
  "TNPETRO": {
    "prev": 82.13,
    "hi52": 129.89,
    "lo52": 65.31
  },
  "TNPL": {
    "prev": 130.29,
    "hi52": 190.77,
    "lo52": 115.5
  },
  "TNTELE": {
    "prev": 9.11,
    "hi52": 26.0,
    "lo52": 7.81
  },
  "TOKYOPLAST": {
    "prev": 69.94,
    "hi52": 161.0,
    "lo52": 65.8
  },
  "TOLINS": {
    "prev": 98.63,
    "hi52": 202.0,
    "lo52": 90.1
  },
  "TORNTPOWER": {
    "prev": 1450.7,
    "hi52": 1640.0,
    "lo52": 1188.0
  },
  "TOTAL": {
    "prev": 51.99,
    "hi52": 93.5,
    "lo52": 49.16
  },
  "TOUCHWOOD": {
    "prev": 68.37,
    "hi52": 136.59,
    "lo52": 64.02
  },
  "TPHQ": {
    "prev": 0.49,
    "hi52": 1.38,
    "lo52": 0.47
  },
  "TPLPLASTEH": {
    "prev": 60.87,
    "hi52": 93.99,
    "lo52": 56.25
  },
  "TRACXN": {
    "prev": 32.14,
    "hi52": 65.8,
    "lo52": 29.8
  },
  "TRANSRAILL": {
    "prev": 500.4,
    "hi52": 855.8,
    "lo52": 394.55
  },
  "TRANSTEEL": {
    "prev": 142.3,
    "hi52": 169.0,
    "lo52": 85.0
  },
  "TRANSWIND": {
    "prev": 20.5,
    "hi52": 25.5,
    "lo52": 12.7
  },
  "TRANSWORLD": {
    "prev": 135.2,
    "hi52": 329.55,
    "lo52": 124.23
  },
  "TRAVELFOOD": {
    "prev": 1118.3,
    "hi52": 1445.0,
    "lo52": 1008.5
  },
  "TREJHARA": {
    "prev": 165.67,
    "hi52": 284.85,
    "lo52": 155.11
  },
  "TREL": {
    "prev": 25.21,
    "hi52": 37.95,
    "lo52": 21.47
  },
  "TRF": {
    "prev": 230.45,
    "hi52": 450.0,
    "lo52": 220.0
  },
  "TRIDENT": {
    "prev": 24.25,
    "hi52": 34.62,
    "lo52": 21.98
  },
  "TRIDHYA": {
    "prev": 8.0,
    "hi52": 26.5,
    "lo52": 7.7
  },
  "TRIGYN": {
    "prev": 47.71,
    "hi52": 102.4,
    "lo52": 43.64
  },
  "TRITURBINE": {
    "prev": 456.15,
    "hi52": 675.2,
    "lo52": 428.35
  },
  "TRIVENI": {
    "prev": 359.8,
    "hi52": 468.1,
    "lo52": 313.1
  },
  "TROM": {
    "prev": 58.45,
    "hi52": 208.0,
    "lo52": 51.0
  },
  "TRU": {
    "prev": 6.24,
    "hi52": 20.84,
    "lo52": 5.85
  },
  "TRUALT": {
    "prev": 409.25,
    "hi52": 549.0,
    "lo52": 310.2
  },
  "TRUST": {
    "prev": 31.9,
    "hi52": 94.1,
    "lo52": 29.55
  },
  "TSC": {
    "prev": 33.7,
    "hi52": 79.3,
    "lo52": 31.25
  },
  "TSFINV": {
    "prev": 366.6,
    "hi52": 701.5,
    "lo52": 288.0
  },
  "TTKHLTCARE": {
    "prev": 811.45,
    "hi52": 1398.9,
    "lo52": 791.95
  },
  "TTKPRESTIG": {
    "prev": 466.4,
    "hi52": 771.2,
    "lo52": 449.0
  },
  "TTML": {
    "prev": 36.17,
    "hi52": 81.12,
    "lo52": 33.42
  },
  "TUNWAL": {
    "prev": 29.65,
    "hi52": 49.8,
    "lo52": 27.05
  },
  "TVSELECT": {
    "prev": 405.15,
    "hi52": 739.35,
    "lo52": 297.8
  },
  "TVSHLTD": {
    "prev": 13846.0,
    "hi52": 15800.0,
    "lo52": 13071.0
  },
  "TVSSRICHAK": {
    "prev": 3560.3,
    "hi52": 4775.8,
    "lo52": 2431.8
  },
  "TVTODAY": {
    "prev": 100.76,
    "hi52": 184.8,
    "lo52": 93.5
  },
  "TVVISION": {
    "prev": 5.26,
    "hi52": 12.4,
    "lo52": 4.19
  },
  "UBL": {
    "prev": 1568.9,
    "hi52": 2294.9,
    "lo52": 1401.1
  },
  "UCAL": {
    "prev": 97.38,
    "hi52": 171.0,
    "lo52": 91.6
  },
  "UCOBANK": {
    "prev": 24.86,
    "hi52": 38.76,
    "lo52": 23.3
  },
  "UDS": {
    "prev": 138.14,
    "hi52": 356.0,
    "lo52": 128.01
  },
  "UEL": {
    "prev": 147.7,
    "hi52": 220.0,
    "lo52": 123.56
  },
  "UFBL": {
    "prev": 235.38,
    "hi52": 356.0,
    "lo52": 172.34
  },
  "UFLEX": {
    "prev": 434.7,
    "hi52": 685.6,
    "lo52": 395.0
  },
  "UFO": {
    "prev": 63.58,
    "hi52": 92.97,
    "lo52": 59.11
  },
  "UGARSUGAR": {
    "prev": 38.35,
    "hi52": 52.5,
    "lo52": 33.75
  },
  "UGROCAP": {
    "prev": 94.3,
    "hi52": 199.98,
    "lo52": 83.12
  },
  "UHTL": {
    "prev": 50.5,
    "hi52": 98.0,
    "lo52": 44.6
  },
  "UJJIVANSFB": {
    "prev": 53.36,
    "hi52": 68.0,
    "lo52": 32.88
  },
  "UMA": {
    "prev": 16.2,
    "hi52": 31.8,
    "lo52": 15.35
  },
  "UMAEXPORTS": {
    "prev": 20.99,
    "hi52": 96.8,
    "lo52": 19.48
  },
  "UMIYA-MRO": {
    "prev": 80.94,
    "hi52": 110.9,
    "lo52": 56.81
  },
  "UNICHEMLAB": {
    "prev": 313.35,
    "hi52": 722.35,
    "lo52": 299.0
  },
  "UNIDT": {
    "prev": 157.58,
    "hi52": 256.3,
    "lo52": 150.74
  },
  "UNIECOM": {
    "prev": 91.64,
    "hi52": 155.8,
    "lo52": 86.49
  },
  "UNIENTER": {
    "prev": 96.39,
    "hi52": 168.5,
    "lo52": 87.81
  },
  "UNIINFO": {
    "prev": 12.63,
    "hi52": 22.9,
    "lo52": 9.96
  },
  "UNILEX": {
    "prev": 24.65,
    "hi52": 57.0,
    "lo52": 23.05
  },
  "UNIMECH": {
    "prev": 795.85,
    "hi52": 1397.0,
    "lo52": 760.0
  },
  "UNIONBANK": {
    "prev": 177.63,
    "hi52": 205.49,
    "lo52": 112.52
  },
  "UNIPARTS": {
    "prev": 456.0,
    "hi52": 543.95,
    "lo52": 296.65
  },
  "UNITECH": {
    "prev": 4.22,
    "hi52": 10.5,
    "lo52": 3.9
  },
  "UNITEDPOLY": {
    "prev": 28.04,
    "hi52": 191.85,
    "lo52": 14.5
  },
  "UNITEDTEA": {
    "prev": 511.0,
    "hi52": 589.0,
    "lo52": 372.2
  },
  "UNIVASTU": {
    "prev": 62.92,
    "hi52": 320.0,
    "lo52": 59.85
  },
  "UNIVCABLES": {
    "prev": 675.95,
    "hi52": 1008.0,
    "lo52": 407.25
  },
  "UNOMINDA": {
    "prev": 1067.0,
    "hi52": 1382.0,
    "lo52": 767.6
  },
  "UPL": {
    "prev": 625.55,
    "hi52": 812.2,
    "lo52": 588.85
  },
  "URAVIDEF": {
    "prev": 126.49,
    "hi52": 584.0,
    "lo52": 121.35
  },
  "URBAN": {
    "prev": 123.35,
    "hi52": 206.4,
    "lo52": 114.0
  },
  "URBANCO": {
    "prev": 114.12,
    "hi52": 201.18,
    "lo52": 100.7
  },
  "URJA": {
    "prev": 9.04,
    "hi52": 17.49,
    "lo52": 8.45
  },
  "USASEEDS": {
    "prev": 94.75,
    "hi52": 314.4,
    "lo52": 90.1
  },
  "USHAFIN": {
    "prev": 34.6,
    "hi52": 107.65,
    "lo52": 26.75
  },
  "USHAMART": {
    "prev": 400.85,
    "hi52": 497.1,
    "lo52": 285.4
  },
  "UTIAMC": {
    "prev": 939.0,
    "hi52": 1494.8,
    "lo52": 896.5
  },
  "UTKARSHBNK": {
    "prev": 11.88,
    "hi52": 28.0,
    "lo52": 11.21
  },
  "UTLSOLAR": {
    "prev": 202.01,
    "hi52": 230.99,
    "lo52": 172.0
  },
  "UTSSAV": {
    "prev": 205.95,
    "hi52": 281.0,
    "lo52": 160.05
  },
  "UTTAMSUGAR": {
    "prev": 230.47,
    "hi52": 330.45,
    "lo52": 181.1
  },
  "UYFINCORP": {
    "prev": 12.87,
    "hi52": 23.3,
    "lo52": 11.16
  },
  "V2RETAIL": {
    "prev": 1912.2,
    "hi52": 2564.1,
    "lo52": 1576.3
  },
  "VADILALIND": {
    "prev": 4531.8,
    "hi52": 7398.5,
    "lo52": 3996.0
  },
  "VAIBHAVGBL": {
    "prev": 204.73,
    "hi52": 293.25,
    "lo52": 191.1
  },
  "VAISHALI": {
    "prev": 5.98,
    "hi52": 15.24,
    "lo52": 5.67
  },
  "VAKRANGEE": {
    "prev": 5.7,
    "hi52": 12.08,
    "lo52": 5.05
  },
  "VALIANTLAB": {
    "prev": 61.1,
    "hi52": 124.4,
    "lo52": 49.51
  },
  "VALIANTORG": {
    "prev": 269.3,
    "hi52": 507.8,
    "lo52": 195.0
  },
  "VARDHACRLC": {
    "prev": 32.43,
    "hi52": 54.25,
    "lo52": 30.3
  },
  "VARROC": {
    "prev": 498.2,
    "hi52": 694.7,
    "lo52": 374.1
  },
  "VASCONEQ": {
    "prev": 31.64,
    "hi52": 74.59,
    "lo52": 29.3
  },
  "VASWANI": {
    "prev": 52.17,
    "hi52": 69.99,
    "lo52": 33.4
  },
  "VCL": {
    "prev": 1.39,
    "hi52": 2.66,
    "lo52": 0.6
  },
  "VDEAL": {
    "prev": 159.0,
    "hi52": 260.0,
    "lo52": 100.25
  },
  "VEEDOL": {
    "prev": 1331.3,
    "hi52": 2035.0,
    "lo52": 1279.0
  },
  "VEEKAYEM": {
    "prev": 120.0,
    "hi52": 318.0,
    "lo52": 79.8
  },
  "VELS": {
    "prev": 45.7,
    "hi52": 94.5,
    "lo52": 39.75
  },
  "VENKEYS": {
    "prev": 1305.2,
    "hi52": 1768.0,
    "lo52": 1185.5
  },
  "VENTIVE": {
    "prev": 641.4,
    "hi52": 840.0,
    "lo52": 610.2
  },
  "VENUSPIPES": {
    "prev": 949.5,
    "hi52": 1660.0,
    "lo52": 894.6
  },
  "VENUSREM": {
    "prev": 868.25,
    "hi52": 944.75,
    "lo52": 277.95
  },
  "VERA": {
    "prev": 67.75,
    "hi52": 70.45,
    "lo52": 66.0
  },
  "VERANDA": {
    "prev": 137.53,
    "hi52": 272.5,
    "lo52": 130.02
  },
  "VERITAAS": {
    "prev": 43.7,
    "hi52": 87.65,
    "lo52": 41.55
  },
  "VERTEXPLUS": {
    "prev": 99.5,
    "hi52": 149.8,
    "lo52": 81.1
  },
  "VERTIS": {
    "prev": 106.5,
    "hi52": 110.1,
    "lo52": 98.2
  },
  "VERTOZ": {
    "prev": 37.62,
    "hi52": 111.33,
    "lo52": 7.83
  },
  "VESUVIUS": {
    "prev": 478.35,
    "hi52": 6188.0,
    "lo52": 436.65
  },
  "VETO": {
    "prev": 93.26,
    "hi52": 141.0,
    "lo52": 89.0
  },
  "VGINFOTECH": {
    "prev": 118.95,
    "hi52": 208.0,
    "lo52": 109.55
  },
  "VGL": {
    "prev": 57.38,
    "hi52": 196.95,
    "lo52": 52.2
  },
  "VGUARD": {
    "prev": 324.85,
    "hi52": 409.75,
    "lo52": 290.0
  },
  "VHL": {
    "prev": 3148.2,
    "hi52": 4050.0,
    "lo52": 3000.3
  },
  "VIAZ": {
    "prev": 61.6,
    "hi52": 99.55,
    "lo52": 49.3
  },
  "VICTORYEV": {
    "prev": 14.85,
    "hi52": 34.45,
    "lo52": 13.75
  },
  "VIDHIING": {
    "prev": 279.55,
    "hi52": 479.0,
    "lo52": 260.2
  },
  "VIDYAWIRES": {
    "prev": 54.19,
    "hi52": 59.47,
    "lo52": 42.51
  },
  "VIESL": {
    "prev": 232.25,
    "hi52": 307.9,
    "lo52": 120.0
  },
  "VIGOR": {
    "prev": 49.95,
    "hi52": 98.0,
    "lo52": 44.75
  },
  "VIJAYA": {
    "prev": 904.6,
    "hi52": 1180.0,
    "lo52": 813.15
  },
  "VIKASECO": {
    "prev": 1.26,
    "hi52": 2.78,
    "lo52": 1.04
  },
  "VIKASLIFE": {
    "prev": 1.28,
    "hi52": 3.16,
    "lo52": 1.22
  },
  "VIKRAMSOLR": {
    "prev": 192.58,
    "hi52": 407.95,
    "lo52": 162.1
  },
  "VIKRAN": {
    "prev": 60.91,
    "hi52": 118.4,
    "lo52": 56.52
  },
  "VILAS": {
    "prev": 385.4,
    "hi52": 673.7,
    "lo52": 292.0
  },
  "VIMTALABS": {
    "prev": 427.2,
    "hi52": 1170.8,
    "lo52": 395.8
  },
  "VINATIORGA": {
    "prev": 1386.2,
    "hi52": 2040.0,
    "lo52": 1324.0
  },
  "VINCOFE": {
    "prev": 131.84,
    "hi52": 179.85,
    "lo52": 82.81
  },
  "VINDHYATEL": {
    "prev": 1058.6,
    "hi52": 1889.0,
    "lo52": 975.5
  },
  "VINEETLAB": {
    "prev": 29.75,
    "hi52": 49.99,
    "lo52": 26.51
  },
  "VINNY": {
    "prev": 1.07,
    "hi52": 1.64,
    "lo52": 0.94
  },
  "VINSYS": {
    "prev": 295.0,
    "hi52": 475.0,
    "lo52": 268.0
  },
  "VINYAS": {
    "prev": 939.15,
    "hi52": 1440.0,
    "lo52": 722.0
  },
  "VINYLINDIA": {
    "prev": 193.12,
    "hi52": 356.8,
    "lo52": 180.1
  },
  "VIPCLOTHNG": {
    "prev": 17.3,
    "hi52": 45.1,
    "lo52": 16.35
  },
  "VIPIND": {
    "prev": 336.65,
    "hi52": 492.3,
    "lo52": 248.35
  },
  "VIRINCHI": {
    "prev": 16.65,
    "hi52": 32.69,
    "lo52": 15.5
  },
  "VISAKAIND": {
    "prev": 57.05,
    "hi52": 98.1,
    "lo52": 54.56
  },
  "VISASTEEL": {
    "prev": 30.06,
    "hi52": 73.68,
    "lo52": 28.2
  },
  "VISHNU": {
    "prev": 513.3,
    "hi52": 595.8,
    "lo52": 336.0
  },
  "VISHNUINFR": {
    "prev": 143.6,
    "hi52": 218.9,
    "lo52": 135.0
  },
  "VISHWARAJ": {
    "prev": 4.87,
    "hi52": 11.08,
    "lo52": 4.52
  },
  "VISHWAS": {
    "prev": 34.15,
    "hi52": 63.65,
    "lo52": 32.05
  },
  "VITAL": {
    "prev": 37.25,
    "hi52": 44.5,
    "lo52": 35.4
  },
  "VIVIANA": {
    "prev": 671.45,
    "hi52": 1860.0,
    "lo52": 565.0
  },
  "VIVIDHA": {
    "prev": 0.56,
    "hi52": 1.05,
    "lo52": 0.48
  },
  "VIVIMEDLAB": {
    "prev": 6.28,
    "hi52": 13.5,
    "lo52": 5.97
  },
  "VIYASH": {
    "prev": 188.43,
    "hi52": 257.85,
    "lo52": 117.35
  },
  "VLEGOV": {
    "prev": 11.03,
    "hi52": 65.04,
    "lo52": 9.62
  },
  "VLINFRA": {
    "prev": 23.1,
    "hi52": 63.45,
    "lo52": 21.1
  },
  "VLSFINANCE": {
    "prev": 223.85,
    "hi52": 339.0,
    "lo52": 195.14
  },
  "VMARCIND": {
    "prev": 650.85,
    "hi52": 805.0,
    "lo52": 200.3
  },
  "VMART": {
    "prev": 510.2,
    "hi52": 3742.0,
    "lo52": 493.3
  },
  "VMM": {
    "prev": 102.3,
    "hi52": 157.6,
    "lo52": 96.3
  },
  "VMSTMT": {
    "prev": 41.32,
    "hi52": 105.0,
    "lo52": 38.4
  },
  "VOLERCAR": {
    "prev": 235.5,
    "hi52": 255.0,
    "lo52": 79.0
  },
  "VOLTAMP": {
    "prev": 8604.5,
    "hi52": 10088.0,
    "lo52": 6099.95
  },
  "VOLTAS": {
    "prev": 1324.5,
    "hi52": 1582.5,
    "lo52": 1190.0
  },
  "VPRPL": {
    "prev": 36.95,
    "hi52": 195.0,
    "lo52": 33.55
  },
  "VRAJ": {
    "prev": 109.88,
    "hi52": 194.19,
    "lo52": 105.42
  },
  "VRLLOG": {
    "prev": 241.45,
    "hi52": 649.0,
    "lo52": 236.2
  },
  "VSSL": {
    "prev": 232.85,
    "hi52": 324.0,
    "lo52": 191.6
  },
  "VSTIND": {
    "prev": 213.88,
    "hi52": 334.65,
    "lo52": 210.97
  },
  "VSTL": {
    "prev": 113.12,
    "hi52": 204.99,
    "lo52": 100.8
  },
  "VSTTILLERS": {
    "prev": 5239.0,
    "hi52": 6374.0,
    "lo52": 3170.95
  },
  "VTL": {
    "prev": 532.9,
    "hi52": 559.9,
    "lo52": 383.7
  },
  "WAAREEENER": {
    "prev": 3165.9,
    "hi52": 3865.0,
    "lo52": 1863.0
  },
  "WAAREERTL": {
    "prev": 850.25,
    "hi52": 1358.0,
    "lo52": 786.35
  },
  "WABAG": {
    "prev": 1236.9,
    "hi52": 1680.0,
    "lo52": 1033.0
  },
  "WAKEFIT": {
    "prev": 162.25,
    "hi52": 224.0,
    "lo52": 150.63
  },
  "WALCHANNAG": {
    "prev": 148.14,
    "hi52": 277.75,
    "lo52": 139.11
  },
  "WCIL": {
    "prev": 92.42,
    "hi52": 147.29,
    "lo52": 65.1
  },
  "WEALTH": {
    "prev": 893.8,
    "hi52": 1410.0,
    "lo52": 774.95
  },
  "WEBELSOLAR": {
    "prev": 74.85,
    "hi52": 1589.9,
    "lo52": 50.4
  },
  "WEIZMANIND": {
    "prev": 75.94,
    "hi52": 133.8,
    "lo52": 70.36
  },
  "WEL": {
    "prev": 134.0,
    "hi52": 190.5,
    "lo52": 123.15
  },
  "WELCORP": {
    "prev": 803.85,
    "hi52": 994.0,
    "lo52": 664.3
  },
  "WELENT": {
    "prev": 462.35,
    "hi52": 580.0,
    "lo52": 423.95
  },
  "WELINV": {
    "prev": 1274.1,
    "hi52": 1549.0,
    "lo52": 1065.5
  },
  "WELSPUNLIV": {
    "prev": 114.57,
    "hi52": 154.57,
    "lo52": 104.8
  },
  "WENDT": {
    "prev": 6732.0,
    "hi52": 12990.0,
    "lo52": 6240.0
  },
  "WESTLIFE": {
    "prev": 437.55,
    "hi52": 819.2,
    "lo52": 398.4
  },
  "WEWIN": {
    "prev": 42.45,
    "hi52": 77.8,
    "lo52": 36.52
  },
  "WEWORK": {
    "prev": 470.0,
    "hi52": 664.0,
    "lo52": 421.0
  },
  "WHEELS": {
    "prev": 1027.2,
    "hi52": 1054.85,
    "lo52": 569.0
  },
  "WHIRLPOOL": {
    "prev": 836.35,
    "hi52": 1473.8,
    "lo52": 756.85
  },
  "WHITEFORCE": {
    "prev": 41.0,
    "hi52": 94.8,
    "lo52": 28.25
  },
  "WILLAMAGOR": {
    "prev": 25.89,
    "hi52": 41.0,
    "lo52": 23.67
  },
  "WINDLAS": {
    "prev": 727.3,
    "hi52": 1140.0,
    "lo52": 697.4
  },
  "WINDMACHIN": {
    "prev": 230.05,
    "hi52": 409.0,
    "lo52": 213.15
  },
  "WINNY": {
    "prev": 45.6,
    "hi52": 259.95,
    "lo52": 36.1
  },
  "WINSOL": {
    "prev": 113.5,
    "hi52": 272.0,
    "lo52": 110.05
  },
  "WIPL": {
    "prev": 149.99,
    "hi52": 193.2,
    "lo52": 133.1
  },
  "WOCKPHARMA": {
    "prev": 1176.2,
    "hi52": 1868.8,
    "lo52": 1086.7
  },
  "WOMANCART": {
    "prev": 165.3,
    "hi52": 358.0,
    "lo52": 141.5
  },
  "WONDERLA": {
    "prev": 520.25,
    "hi52": 714.95,
    "lo52": 455.0
  },
  "WORTHPERI": {
    "prev": 126.14,
    "hi52": 186.0,
    "lo52": 120.0
  },
  "WSI": {
    "prev": 69.26,
    "hi52": 101.49,
    "lo52": 59.25
  },
  "WSTCSTPAPR": {
    "prev": 434.65,
    "hi52": 583.0,
    "lo52": 375.0
  },
  "WTICAB": {
    "prev": 99.15,
    "hi52": 204.0,
    "lo52": 89.0
  },
  "XCHANGING": {
    "prev": 56.7,
    "hi52": 104.5,
    "lo52": 53.5
  },
  "XELPMOC": {
    "prev": 90.31,
    "hi52": 155.5,
    "lo52": 80.21
  },
  "XPROINDIA": {
    "prev": 1005.0,
    "hi52": 1331.5,
    "lo52": 788.05
  },
  "XTGLOBAL": {
    "prev": 29.98,
    "hi52": 46.25,
    "lo52": 25.2
  },
  "YAAP": {
    "prev": 146.5,
    "hi52": 155.0,
    "lo52": 127.0
  },
  "YASHO": {
    "prev": 1413.0,
    "hi52": 2172.0,
    "lo52": 1130.0
  },
  "YASHOPTICS": {
    "prev": 105.6,
    "hi52": 153.5,
    "lo52": 73.95
  },
  "YATHARTH": {
    "prev": 640.25,
    "hi52": 843.7,
    "lo52": 400.0
  },
  "YATRA": {
    "prev": 107.2,
    "hi52": 202.0,
    "lo52": 75.0
  },
  "YCCL": {
    "prev": 10.25,
    "hi52": 15.7,
    "lo52": 9.7
  },
  "YESBANK": {
    "prev": 18.58,
    "hi52": 24.3,
    "lo52": 16.16
  },
  "YUKEN": {
    "prev": 668.3,
    "hi52": 1204.4,
    "lo52": 625.5
  },
  "ZAGGLE": {
    "prev": 207.81,
    "hi52": 469.8,
    "lo52": 192.0
  },
  "ZEAL": {
    "prev": 63.15,
    "hi52": 165.8,
    "lo52": 55.9
  },
  "ZEEL": {
    "prev": 72.78,
    "hi52": 151.7,
    "lo52": 68.0
  },
  "ZEELEARN": {
    "prev": 5.09,
    "hi52": 10.89,
    "lo52": 4.57
  },
  "ZENITHDRUG": {
    "prev": 41.0,
    "hi52": 107.0,
    "lo52": 37.7
  },
  "ZENITHEXPO": {
    "prev": 188.0,
    "hi52": 351.65,
    "lo52": 174.0
  },
  "ZENITHSTL": {
    "prev": 5.0,
    "hi52": 10.33,
    "lo52": 4.41
  },
  "ZENSARTECH": {
    "prev": 564.9,
    "hi52": 894.0,
    "lo52": 528.25
  },
  "ZENTEC": {
    "prev": 1413.9,
    "hi52": 2268.0,
    "lo52": 1223.0
  },
  "ZFCVINDIA": {
    "prev": 13801.0,
    "hi52": 16665.0,
    "lo52": 11900.1
  },
  "ZIMLAB": {
    "prev": 67.68,
    "hi52": 127.0,
    "lo52": 59.8
  },
  "ZODIAC": {
    "prev": 252.7,
    "hi52": 560.0,
    "lo52": 214.75
  },
  "ZODIACLOTH": {
    "prev": 66.56,
    "hi52": 125.41,
    "lo52": 60.2
  },
  "ZOTA": {
    "prev": 1097.4,
    "hi52": 1740.0,
    "lo52": 752.0
  },
  "ZTECH": {
    "prev": 508.65,
    "hi52": 701.0,
    "lo52": 460.0
  },
  "ZUARI": {
    "prev": 197.42,
    "hi52": 393.55,
    "lo52": 180.07
  },
  "ZUARIIND": {
    "prev": 230.45,
    "hi52": 416.0,
    "lo52": 214.05
  },
  "ZYDUSWELL": {
    "prev": 424.65,
    "hi52": 2625.0,
    "lo52": 367.55
  },
  "A2ZINFRA": {
    "prev": 16.56,
    "hi52": 23.25,
    "lo52": 12.35
  },
  "AAKASH": {
    "prev": 8.92,
    "hi52": 13.79,
    "lo52": 7.06
  },
  "ABAN": {
    "prev": 24.51,
    "hi52": 61.0,
    "lo52": 18.06
  },
  "AFIL": {
    "prev": 8.47,
    "hi52": 90.7,
    "lo52": 3.92
  },
  "ARVEE": {
    "prev": 146.16,
    "hi52": 290.78,
    "lo52": 134.65
  },
  "AUSOMENT": {
    "prev": 101.93,
    "hi52": 178.0,
    "lo52": 73.05
  },
  "AXITA": {
    "prev": 8.85,
    "hi52": 13.42,
    "lo52": 7.85
  },
  "BCG": {
    "prev": 8.81,
    "hi52": 15.1,
    "lo52": 8.37
  },
  "BEDMUTHA": {
    "prev": 115.3,
    "hi52": 186.66,
    "lo52": 95.0
  },
  "BESTAGRO": {
    "prev": 14.5,
    "hi52": 533.7,
    "lo52": 13.78
  },
  "BGRENERGY": {
    "prev": 291.45,
    "hi52": 490.8,
    "lo52": 74.0
  },
  "BILVYAPAR": {
    "prev": 5.97,
    "hi52": 23.11,
    "lo52": 5.66
  },
  "BLBLIMITED": {
    "prev": 16.61,
    "hi52": 22.47,
    "lo52": 12.0
  },
  "BLUECHIP": {
    "prev": 2.56,
    "hi52": 7.71,
    "lo52": 2.19
  },
  "BOHRAIND": {
    "prev": 17.15,
    "hi52": 37.35,
    "lo52": 14.52
  },
  "BONLON": {
    "prev": 38.74,
    "hi52": 48.98,
    "lo52": 36.55
  },
  "BORANA": {
    "prev": 344.75,
    "hi52": 420.0,
    "lo52": 211.0
  },
  "CAPTRUST": {
    "prev": 11.85,
    "hi52": 107.0,
    "lo52": 11.08
  },
  "CLCIND": {
    "prev": 15.25,
    "hi52": 16.01,
    "lo52": 0.15
  },
  "CLEDUCATE": {
    "prev": 46.75,
    "hi52": 120.8,
    "lo52": 35.48
  },
  "CONSOFINVT": {
    "prev": 219.64,
    "hi52": 245.95,
    "lo52": 152.0
  },
  "CURAA": {
    "prev": 118.79,
    "hi52": 337.0,
    "lo52": 24.43
  },
  "DCMFINSERV": {
    "prev": 6.66,
    "hi52": 9.21,
    "lo52": 3.7
  },
  "DCMSIL": {
    "prev": 88.3,
    "hi52": 105.27,
    "lo52": 49.5
  },
  "DJML": {
    "prev": 79.99,
    "hi52": 152.99,
    "lo52": 52.0
  },
  "E2E": {
    "prev": 2262.2,
    "hi52": 3894.7,
    "lo52": 1732.1
  },
  "EASTSILK": {
    "prev": 66.71,
    "hi52": 99.25,
    "lo52": 39.04
  },
  "EMBDL": {
    "prev": 47.79,
    "hi52": 128.0,
    "lo52": 45.41
  },
  "EQUIPPP": {
    "prev": 17.96,
    "hi52": 23.97,
    "lo52": 15.11
  },
  "FAZE3Q": {
    "prev": 407.6,
    "hi52": 747.95,
    "lo52": 322.1
  },
  "FIBERWEB": {
    "prev": 35.42,
    "hi52": 59.26,
    "lo52": 31.2
  },
  "GCSL": {
    "prev": 313.75,
    "hi52": 389.4,
    "lo52": 213.15
  },
  "GEMAROMA": {
    "prev": 170.94,
    "hi52": 349.6,
    "lo52": 133.0
  },
  "GFSTEELS": {
    "prev": 12.36,
    "hi52": 12.36,
    "lo52": 8.01
  },
  "GLFL": {
    "prev": 4.26,
    "hi52": 9.34,
    "lo52": 3.97
  },
  "GOYALALUM": {
    "prev": 5.9,
    "hi52": 11.37,
    "lo52": 5.61
  },
  "GVKPIL": {
    "prev": 2.6,
    "hi52": 4.48,
    "lo52": 2.55
  },
  "GVPIL": {
    "prev": 425.15,
    "hi52": 552.05,
    "lo52": 205.25
  },
  "HARDWYN": {
    "prev": 18.81,
    "hi52": 20.44,
    "lo52": 10.75
  },
  "HITECHGEAR": {
    "prev": 603.35,
    "hi52": 897.45,
    "lo52": 545.05
  },
  "ICDSLTD": {
    "prev": 43.99,
    "hi52": 68.49,
    "lo52": 36.4
  },
  "INSPIRISYS": {
    "prev": 76.54,
    "hi52": 120.74,
    "lo52": 66.55
  },
  "IZMO": {
    "prev": 696.1,
    "hi52": 1374.7,
    "lo52": 259.0
  },
  "JITFINFRA": {
    "prev": 316.1,
    "hi52": 478.0,
    "lo52": 222.35
  },
  "KAPSTON": {
    "prev": 282.1,
    "hi52": 433.5,
    "lo52": 190.0
  },
  "KAVDEFENCE": {
    "prev": 60.67,
    "hi52": 162.87,
    "lo52": 41.86
  },
  "KSHITIJPOL": {
    "prev": 2.33,
    "hi52": 4.01,
    "lo52": 1.88
  },
  "KSR": {
    "prev": 36.5,
    "hi52": 37.24,
    "lo52": 14.04
  },
  "LANCORHOL": {
    "prev": 20.85,
    "hi52": 33.8,
    "lo52": 18.12
  },
  "LAXMICOT": {
    "prev": 13.1,
    "hi52": 33.0,
    "lo52": 11.81
  },
  "LCCINFOTEC": {
    "prev": 4.66,
    "hi52": 6.79,
    "lo52": 3.64
  },
  "LEXUS": {
    "prev": 28.82,
    "hi52": 39.25,
    "lo52": 22.32
  },
  "LOYALTEX": {
    "prev": 200.0,
    "hi52": 379.5,
    "lo52": 186.0
  },
  "MAANALU": {
    "prev": 136.1,
    "hi52": 184.74,
    "lo52": 75.51
  },
  "MAHASTEEL": {
    "prev": 948.65,
    "hi52": 1050.0,
    "lo52": 221.9
  },
  "MANAKALUCO": {
    "prev": 25.04,
    "hi52": 68.12,
    "lo52": 17.81
  },
  "MANGALAM": {
    "prev": 30.2,
    "hi52": 95.0,
    "lo52": 22.8
  },
  "MCL": {
    "prev": 61.17,
    "hi52": 93.2,
    "lo52": 42.0
  },
  "MTEDUCARE": {
    "prev": 1.29,
    "hi52": 2.55,
    "lo52": 1.28
  },
  "NEUEON": {
    "prev": 14.58,
    "hi52": 15.3,
    "lo52": 5.76
  },
  "NIRAJISPAT": {
    "prev": 195.55,
    "hi52": 612.5,
    "lo52": 155.0
  },
  "NORBTEAEXP": {
    "prev": 90.0,
    "hi52": 99.35,
    "lo52": 30.5
  },
  "ORTINGLOBE": {
    "prev": 15.55,
    "hi52": 19.9,
    "lo52": 9.64
  },
  "PANACHE": {
    "prev": 310.5,
    "hi52": 472.15,
    "lo52": 171.85
  },
  "PARASPETRO": {
    "prev": 2.37,
    "hi52": 3.23,
    "lo52": 1.53
  },
  "PRABHA-RE": {
    "prev": 5.42,
    "hi52": 5.42,
    "lo52": 3.26
  },
  "PRECOT": {
    "prev": 483.8,
    "hi52": 643.65,
    "lo52": 300.05
  },
  "PREMIER": {
    "prev": 2.87,
    "hi52": 4.15,
    "lo52": 2.55
  },
  "QUINTEGRA": {
    "prev": 1.25,
    "hi52": 2.05,
    "lo52": 1.14
  },
  "RAJRILTD": {
    "prev": 20.76,
    "hi52": 31.59,
    "lo52": 19.5
  },
  "RCOM": {
    "prev": 0.89,
    "hi52": 1.95,
    "lo52": 0.75
  },
  "RELINFRA": {
    "prev": 77.46,
    "hi52": 423.4,
    "lo52": 73.59
  },
  "RNBDENIMS": {
    "prev": 83.36,
    "hi52": 203.0,
    "lo52": 79.2
  },
  "ROLLT": {
    "prev": 1.28,
    "hi52": 2.53,
    "lo52": 1.02
  },
  "S&SPOWER": {
    "prev": 327.75,
    "hi52": 468.9,
    "lo52": 193.5
  },
  "SABEVENTS": {
    "prev": 11.01,
    "hi52": 18.25,
    "lo52": 3.82
  },
  "SADBHAV": {
    "prev": 7.32,
    "hi52": 17.85,
    "lo52": 6.05
  },
  "SALSTEEL": {
    "prev": 36.66,
    "hi52": 49.57,
    "lo52": 14.37
  },
  "SANGINITA": {
    "prev": 17.01,
    "hi52": 17.35,
    "lo52": 8.46
  },
  "SCHNEIDER": {
    "prev": 890.0,
    "hi52": 1052.0,
    "lo52": 540.0
  },
  "SCPL": {
    "prev": 300.9,
    "hi52": 368.95,
    "lo52": 190.03
  },
  "SEYAIND": {
    "prev": 10.15,
    "hi52": 23.99,
    "lo52": 8.54
  },
  "SHANKARA": {
    "prev": 108.64,
    "hi52": 255.0,
    "lo52": 98.25
  },
  "SICALLOG": {
    "prev": 64.94,
    "hi52": 124.0,
    "lo52": 62.0
  },
  "SOMATEX": {
    "prev": 93.55,
    "hi52": 161.25,
    "lo52": 35.82
  },
  "SVPGLOB": {
    "prev": 2.6,
    "hi52": 6.89,
    "lo52": 2.47
  },
  "SWANDEF": {
    "prev": 2057.1,
    "hi52": 2489.0,
    "lo52": 85.0
  },
  "TAKE": {
    "prev": 37.36,
    "hi52": 49.94,
    "lo52": 6.51
  },
  "TARMAT": {
    "prev": 52.68,
    "hi52": 73.9,
    "lo52": 45.1
  },
  "TCIFINANCE": {
    "prev": 13.43,
    "hi52": 38.46,
    "lo52": 10.0
  },
  "TIJARIA": {
    "prev": 4.56,
    "hi52": 10.35,
    "lo52": 3.55
  },
  "TREEHOUSE": {
    "prev": 8.91,
    "hi52": 11.77,
    "lo52": 6.19
  },
  "TTL": {
    "prev": 9.22,
    "hi52": 16.69,
    "lo52": 6.42
  },
  "TVSSCS": {
    "prev": 100.47,
    "hi52": 147.0,
    "lo52": 92.16
  },
  "UMESLTD": {
    "prev": 6.51,
    "hi52": 7.14,
    "lo52": 3.88
  },
  "UNIVAFOODS": {
    "prev": 10.0,
    "hi52": 14.24,
    "lo52": 9.42
  },
  "UNIVPHOTO": {
    "prev": 454.65,
    "hi52": 515.8,
    "lo52": 174.0
  },
  "USK": {
    "prev": 22.77,
    "hi52": 44.28,
    "lo52": 19.2
  },
  "VARDMNPOLY": {
    "prev": 7.69,
    "hi52": 13.74,
    "lo52": 5.1
  },
  "VHLTD": {
    "prev": 143.61,
    "hi52": 155.36,
    "lo52": 93.05
  },
  "VIJIFIN": {
    "prev": 2.88,
    "hi52": 4.6,
    "lo52": 1.99
  },
  "VIPULLTD": {
    "prev": 11.33,
    "hi52": 13.69,
    "lo52": 7.38
  },
  "WAAREEINDO": {
    "prev": 385.15,
    "hi52": 496.45,
    "lo52": 302.4
  },
  "WANBURY": {
    "prev": 248.3,
    "hi52": 329.7,
    "lo52": 161.5
  },
  "ZEEMEDIA": {
    "prev": 7.38,
    "hi52": 16.46,
    "lo52": 7.02
  },
  "AGSTRA": {
    "prev": 2.86,
    "hi52": 10.16,
    "lo52": 2.72
  },
  "ANKITMETAL": {
    "prev": 1.5,
    "hi52": 2.54,
    "lo52": 1.43
  },
  "ANSALAPI": {
    "prev": 3.28,
    "hi52": 5.97,
    "lo52": 2.84
  },
  "ARSHIYA": {
    "prev": 1.39,
    "hi52": 3.29,
    "lo52": 1.14
  },
  "BFUTILITIE": {
    "prev": 421.8,
    "hi52": 898.7,
    "lo52": 401.0
  },
  "BGLOBAL": {
    "prev": 2.83,
    "hi52": 4.6,
    "lo52": 2.69
  },
  "CEREBRAINT": {
    "prev": 4.13,
    "hi52": 10.08,
    "lo52": 3.96
  },
  "CMICABLES": {
    "prev": 3.8,
    "hi52": 6.02,
    "lo52": 2.85
  },
  "COMPINFO": {
    "prev": 1.05,
    "hi52": 2.96,
    "lo52": 1.0
  },
  "DHARAN": {
    "prev": 0.14,
    "hi52": 1.07,
    "lo52": 0.12
  },
  "DIL": {
    "prev": 1.18,
    "hi52": 2.67,
    "lo52": 1.13
  },
  "EDUCOMP": {
    "prev": 1.0,
    "hi52": 2.07,
    "lo52": 0.95
  },
  "FCONSUMER": {
    "prev": 0.33,
    "hi52": 0.47,
    "lo52": 0.32
  },
  "FEL": {
    "prev": 0.4,
    "hi52": 0.68,
    "lo52": 0.34
  },
  "FELDVR": {
    "prev": 2.6,
    "hi52": 4.12,
    "lo52": 2.47
  },
  "FLFL": {
    "prev": 1.3,
    "hi52": 2.24,
    "lo52": 1.12
  },
  "GAYAPROJ": {
    "prev": 13.33,
    "hi52": 13.99,
    "lo52": 5.39
  },
  "GENSOL": {
    "prev": 21.62,
    "hi52": 35.45,
    "lo52": 20.5
  },
  "GOLDENTOBC": {
    "prev": 27.58,
    "hi52": 38.5,
    "lo52": 26.08
  },
  "HDIL": {
    "prev": 2.13,
    "hi52": 4.04,
    "lo52": 1.92
  },
  "HMT": {
    "prev": 57.56,
    "hi52": 75.49,
    "lo52": 41.0
  },
  "IL&FSENGG": {
    "prev": 23.33,
    "hi52": 45.84,
    "lo52": 21.0
  },
  "IL&FSTRANS": {
    "prev": 2.16,
    "hi52": 4.4,
    "lo52": 2.06
  },
  "IMPEXFERRO": {
    "prev": 1.54,
    "hi52": 2.42,
    "lo52": 1.47
  },
  "LAKPRE": {
    "prev": 4.9,
    "hi52": 7.64,
    "lo52": 3.88
  },
  "MEP": {
    "prev": 0.9,
    "hi52": 2.87,
    "lo52": 0.89
  },
  "MORARJEE": {
    "prev": 6.3,
    "hi52": 9.99,
    "lo52": 4.56
  },
  "OMKARCHEM": {
    "prev": 3.93,
    "hi52": 7.91,
    "lo52": 3.62
  },
  "ORTEL": {
    "prev": 1.76,
    "hi52": 2.34,
    "lo52": 1.15
  },
  "RAJESHEXPO": {
    "prev": 94.01,
    "hi52": 237.88,
    "lo52": 89.31
  },
  "RHFL": {
    "prev": 2.7,
    "hi52": 7.78,
    "lo52": 1.94
  },
  "SANCO": {
    "prev": 2.46,
    "hi52": 4.22,
    "lo52": 1.66
  },
  "SANWARIA": {
    "prev": 0.25,
    "hi52": 0.42,
    "lo52": 0.19
  },
  "SETUINFRA": {
    "prev": 0.39,
    "hi52": 1.12,
    "lo52": 0.37
  },
  "SHRENIK": {
    "prev": 0.4,
    "hi52": 0.77,
    "lo52": 0.37
  },
  "SIMBHALS": {
    "prev": 7.4,
    "hi52": 20.15,
    "lo52": 6.91
  },
  "SITINET": {
    "prev": 0.32,
    "hi52": 0.58,
    "lo52": 0.31
  },
  "SKIL": {
    "prev": 0.97,
    "hi52": 4.15,
    "lo52": 0.93
  },
  "SRPL": {
    "prev": 0.49,
    "hi52": 1.21,
    "lo52": 0.46
  },
  "SUPREMEENG": {
    "prev": 1.17,
    "hi52": 1.54,
    "lo52": 0.68
  },
  "SUPREMEINF": {
    "prev": 70.0,
    "hi52": 130.25,
    "lo52": 66.0
  },
  "AAKAAR": {
    "prev": 53.55,
    "hi52": 105.0,
    "lo52": 46.25
  },
  "AHIMSA": {
    "prev": 26.0,
    "hi52": 26.05,
    "lo52": 22.6
  },
  "AKIKO": {
    "prev": 221.5,
    "hi52": 299.3,
    "lo52": 62.0
  },
  "AMCL": {
    "prev": 427.0,
    "hi52": 449.95,
    "lo52": 161.7
  },
  "APSISAERO": {
    "prev": 177.05,
    "hi52": 185.9,
    "lo52": 147.2
  },
  "BIKEWO": {
    "prev": 18.25,
    "hi52": 24.45,
    "lo52": 13.65
  },
  "BLUEPEBBLE": {
    "prev": 115.0,
    "hi52": 222.5,
    "lo52": 88.0
  },
  "CBAZAAR": {
    "prev": 4.9,
    "hi52": 8.0,
    "lo52": 3.05
  },
  "CKKRETAIL": {
    "prev": 131.95,
    "hi52": 265.25,
    "lo52": 123.45
  },
  "CPS": {
    "prev": 1048.0,
    "hi52": 1349.25,
    "lo52": 515.0
  },
  "DENEERS": {
    "prev": 147.0,
    "hi52": 374.8,
    "lo52": 132.0
  },
  "DHARIWAL": {
    "prev": 43.0,
    "hi52": 413.0,
    "lo52": 35.0
  },
  "DIVINEHIRA": {
    "prev": 249.75,
    "hi52": 272.0,
    "lo52": 43.0
  },
  "DRSDILIP": {
    "prev": 112.5,
    "hi52": 117.5,
    "lo52": 52.25
  },
  "EXCELLENT": {
    "prev": 100.0,
    "hi52": 103.95,
    "lo52": 36.9
  },
  "EXIMROUTES": {
    "prev": 137.65,
    "hi52": 281.9,
    "lo52": 104.5
  },
  "FRESHARA": {
    "prev": 182.9,
    "hi52": 225.0,
    "lo52": 117.2
  },
  "GIRIRAJ": {
    "prev": 176.2,
    "hi52": 409.0,
    "lo52": 96.8
  },
  "GJL": {
    "prev": 255.25,
    "hi52": 276.45,
    "lo52": 91.4
  },
  "GML": {
    "prev": 17.75,
    "hi52": 54.0,
    "lo52": 15.15
  },
  "GOLDSTAR": {
    "prev": 7.05,
    "hi52": 13.5,
    "lo52": 4.5
  },
  "GRAPHISAD": {
    "prev": 33.4,
    "hi52": 52.8,
    "lo52": 29.25
  },
  "GSTL": {
    "prev": 34.25,
    "hi52": 34.7,
    "lo52": 5.95
  },
  "HOACFOODS": {
    "prev": 361.2,
    "hi52": 399.85,
    "lo52": 120.3
  },
  "ITALIANE": {
    "prev": 41.05,
    "hi52": 49.0,
    "lo52": 24.05
  },
  "ITTL": {
    "prev": 90.0,
    "hi52": 152.4,
    "lo52": 35.45
  },
  "IWARE": {
    "prev": 259.95,
    "hi52": 283.0,
    "lo52": 70.05
  },
  "KALANA": {
    "prev": 24.85,
    "hi52": 55.0,
    "lo52": 15.1
  },
  "KDL": {
    "prev": 118.4,
    "hi52": 376.8,
    "lo52": 109.65
  },
  "KODYTECH": {
    "prev": 694.75,
    "hi52": 1147.0,
    "lo52": 556.05
  },
  "MAHICKRA": {
    "prev": 196.9,
    "hi52": 224.0,
    "lo52": 95.2
  },
  "MARINETRAN": {
    "prev": 18.0,
    "hi52": 28.2,
    "lo52": 13.3
  },
  "MCON": {
    "prev": 41.5,
    "hi52": 161.0,
    "lo52": 40.0
  },
  "MEGAFLEX": {
    "prev": 154.8,
    "hi52": 155.05,
    "lo52": 43.5
  },
  "NEPTUNE": {
    "prev": 196.25,
    "hi52": 246.9,
    "lo52": 126.3
  },
  "NIRMAN": {
    "prev": 46.0,
    "hi52": 282.5,
    "lo52": 43.7
  },
  "POLYSIL": {
    "prev": 151.75,
    "hi52": 356.75,
    "lo52": 22.05
  },
  "PRESSTONIC": {
    "prev": 34.3,
    "hi52": 143.0,
    "lo52": 32.6
  },
  "PRIZOR": {
    "prev": 389.55,
    "hi52": 410.0,
    "lo52": 105.1
  },
  "QUESTLAB": {
    "prev": 108.05,
    "hi52": 140.35,
    "lo52": 75.15
  },
  "ROCKINGDCE": {
    "prev": 160.5,
    "hi52": 283.85,
    "lo52": 152.5
  },
  "RTL": {
    "prev": 90.45,
    "hi52": 100.9,
    "lo52": 54.0
  },
  "SECL": {
    "prev": 3.75,
    "hi52": 9.75,
    "lo52": 3.6
  },
  "SERVICE": {
    "prev": 53.55,
    "hi52": 69.9,
    "lo52": 39.2
  },
  "SHEETAL": {
    "prev": 233.0,
    "hi52": 264.95,
    "lo52": 82.75
  },
  "SHIGAN": {
    "prev": 51.2,
    "hi52": 95.0,
    "lo52": 41.2
  },
  "SIDDHICOTS": {
    "prev": 28.75,
    "hi52": 86.4,
    "lo52": 26.7
  },
  "SWARAJ": {
    "prev": 290.85,
    "hi52": 318.95,
    "lo52": 138.5
  },
  "TANKUP": {
    "prev": 463.75,
    "hi52": 817.6,
    "lo52": 152.55
  },
  "TGL": {
    "prev": 34.85,
    "hi52": 399.4,
    "lo52": 34.2
  },
  "UCL": {
    "prev": 75.45,
    "hi52": 78.85,
    "lo52": 38.0
  },
  "UNIHEALTH": {
    "prev": 395.35,
    "hi52": 409.0,
    "lo52": 130.05
  },
  "VIJAYPD": {
    "prev": 66.3,
    "hi52": 74.5,
    "lo52": 35.0
  },
  "VILINBIO": {
    "prev": 36.5,
    "hi52": 38.4,
    "lo52": 16.8
  },
  "VISAMAN": {
    "prev": 103.4,
    "hi52": 145.0,
    "lo52": 34.0
  },
  "WOL3D": {
    "prev": 123.0,
    "hi52": 209.95,
    "lo52": 102.05
  },
  "YUDIZ": {
    "prev": 26.05,
    "hi52": 39.3,
    "lo52": 24.65
  },
  "PERFECT": {
    "prev": 1.6,
    "hi52": 14.5,
    "lo52": 1.55
  },
  "SAHAJ": {
    "prev": 4.25,
    "hi52": 11.9,
    "lo52": 4.05
  },
  "971SCL28": {
    "prev": 510.0,
    "hi52": 878.0,
    "lo52": 509.9
  },
  "SGBAPR28I": {
    "prev": 14419.5,
    "hi52": 18800.0,
    "lo52": 8411.0
  },
  "SGBAUG27": {
    "prev": 14274.04,
    "hi52": 18899.0,
    "lo52": 8300.01
  },
  "SGBAUG28V": {
    "prev": 14393.9,
    "hi52": 18800.0,
    "lo52": 8400.0
  },
  "SGBAUG29V": {
    "prev": 14421.98,
    "hi52": 19121.0,
    "lo52": 8301.0
  },
  "SGBAUG30": {
    "prev": 14804.59,
    "hi52": 19250.0,
    "lo52": 8376.0
  },
  "SGBD29VIII": {
    "prev": 14418.35,
    "hi52": 18897.9,
    "lo52": 8301.0
  },
  "SGBDC27VII": {
    "prev": 14245.29,
    "hi52": 18800.09,
    "lo52": 8400.0
  },
  "SGBDE30III": {
    "prev": 14809.29,
    "hi52": 19100.0,
    "lo52": 8221.0
  },
  "SGBDE31III": {
    "prev": 14931.75,
    "hi52": 19298.0,
    "lo52": 7998.93
  },
  "SGBDEC26": {
    "prev": 14248.0,
    "hi52": 18999.0,
    "lo52": 8421.01
  },
  "SGBFEB27": {
    "prev": 14250.0,
    "hi52": 18899.0,
    "lo52": 8356.21
  },
  "SGBFEB28IX": {
    "prev": 14320.0,
    "hi52": 18816.01,
    "lo52": 8371.22
  },
  "SGBFEB29XI": {
    "prev": 14480.14,
    "hi52": 18900.0,
    "lo52": 8306.0
  },
  "SGBFEB32IV": {
    "prev": 15235.01,
    "hi52": 21475.0,
    "lo52": 8511.0
  },
  "SGBJ28VIII": {
    "prev": 14352.78,
    "hi52": 18897.99,
    "lo52": 8306.0
  },
  "SGBJAN27": {
    "prev": 14250.37,
    "hi52": 18817.99,
    "lo52": 8367.0
  },
  "SGBJAN29IX": {
    "prev": 14364.26,
    "hi52": 18599.0,
    "lo52": 8301.0
  },
  "SGBJAN29X": {
    "prev": 14378.4,
    "hi52": 18571.0,
    "lo52": 8387.0
  },
  "SGBJAN30IX": {
    "prev": 14503.87,
    "hi52": 18799.0,
    "lo52": 8310.0
  },
  "SGBJU29III": {
    "prev": 14322.61,
    "hi52": 18593.26,
    "lo52": 8250.01
  },
  "SGBJUL27": {
    "prev": 14268.8,
    "hi52": 18242.76,
    "lo52": 8317.11
  },
  "SGBJUL28IV": {
    "prev": 14278.55,
    "hi52": 18600.01,
    "lo52": 8325.01
  },
  "SGBJUL29IV": {
    "prev": 14397.96,
    "hi52": 18600.01,
    "lo52": 8371.01
  },
  "SGBJUN27": {
    "prev": 14259.99,
    "hi52": 18500.0,
    "lo52": 8335.11
  },
  "SGBJUN28": {
    "prev": 14270.65,
    "hi52": 18800.0,
    "lo52": 8402.01
  },
  "SGBJUN29II": {
    "prev": 14331.45,
    "hi52": 18650.0,
    "lo52": 8255.0
  },
  "SGBJUN30": {
    "prev": 14760.0,
    "hi52": 19400.0,
    "lo52": 8211.0
  },
  "SGBJUN31I": {
    "prev": 14881.8,
    "hi52": 19150.02,
    "lo52": 8211.0
  },
  "SGBMAR28X": {
    "prev": 14249.71,
    "hi52": 18650.0,
    "lo52": 8450.0
  },
  "SGBMAR30X": {
    "prev": 14694.0,
    "hi52": 18900.0,
    "lo52": 8350.0
  },
  "SGBMAR31IV": {
    "prev": 14792.66,
    "hi52": 19275.0,
    "lo52": 8301.0
  },
  "SGBMAY26": {
    "prev": 14259.05,
    "hi52": 18460.0,
    "lo52": 8351.0
  },
  "SGBMAY28": {
    "prev": 14282.17,
    "hi52": 18605.26,
    "lo52": 8250.0
  },
  "SGBMAY29I": {
    "prev": 14315.67,
    "hi52": 18590.0,
    "lo52": 8200.0
  },
  "SGBMR29XII": {
    "prev": 14326.63,
    "hi52": 18640.0,
    "lo52": 8000.0
  },
  "SGBN28VIII": {
    "prev": 14318.34,
    "hi52": 19000.0,
    "lo52": 8251.0
  },
  "SGBNOV26": {
    "prev": 14250.0,
    "hi52": 18999.0,
    "lo52": 8401.0
  },
  "SGBNV29VII": {
    "prev": 14407.29,
    "hi52": 18899.0,
    "lo52": 8310.0
  },
  "SGBOC28VII": {
    "prev": 14286.6,
    "hi52": 18645.0,
    "lo52": 8305.01
  },
  "SGBOCT26": {
    "prev": 14285.0,
    "hi52": 18251.0,
    "lo52": 8400.0
  },
  "SGBOCT27": {
    "prev": 14240.0,
    "hi52": 18804.93,
    "lo52": 8500.0
  },
  "SGBOCT27VI": {
    "prev": 14279.41,
    "hi52": 18648.99,
    "lo52": 8400.0
  },
  "SGBSEP27": {
    "prev": 14245.33,
    "hi52": 18550.0,
    "lo52": 8311.08
  },
  "SGBSEP28VI": {
    "prev": 14249.51,
    "hi52": 18600.0,
    "lo52": 8251.0
  },
  "SGBSEP29VI": {
    "prev": 14355.04,
    "hi52": 18600.0,
    "lo52": 8325.0
  },
  "SGBSEP31II": {
    "prev": 14832.06,
    "hi52": 19190.0,
    "lo52": 8225.0
  },
  "1018GS2026": {
    "prev": 102.0,
    "hi52": 113.0,
    "lo52": 100.9
  },
  "563GS2026": {
    "prev": 102.27,
    "hi52": 105.57,
    "lo52": 97.5
  },
  "574GS2026": {
    "prev": 102.79,
    "hi52": 104.0,
    "lo52": 96.6
  },
  "585GS2030": {
    "prev": 98.6,
    "hi52": 100.99,
    "lo52": 95.48
  },
  "601GS2030": {
    "prev": 98.66,
    "hi52": 101.85,
    "lo52": 97.0
  },
  "610GS2031": {
    "prev": 99.0,
    "hi52": 101.5,
    "lo52": 93.84
  },
  "633GS2035": {
    "prev": 99.45,
    "hi52": 104.0,
    "lo52": 97.0
  },
  "636GS2031": {
    "prev": 101.0,
    "hi52": 101.0,
    "lo52": 96.0
  },
  "648GS2035": {
    "prev": 101.15,
    "hi52": 104.0,
    "lo52": 98.4
  },
  "667GS2035": {
    "prev": 100.7,
    "hi52": 130.0,
    "lo52": 97.76
  },
  "668GS2040": {
    "prev": 97.5,
    "hi52": 102.0,
    "lo52": 95.1
  },
  "675GS2029": {
    "prev": 102.58,
    "hi52": 113.0,
    "lo52": 100.6
  },
  "676GS2061": {
    "prev": 90.93,
    "hi52": 102.5,
    "lo52": 90.7
  },
  "679GS2027": {
    "prev": 102.25,
    "hi52": 105.0,
    "lo52": 100.85
  },
  "679GS2031": {
    "prev": 102.2,
    "hi52": 107.56,
    "lo52": 99.76
  },
  "679GS2034": {
    "prev": 102.55,
    "hi52": 105.2,
    "lo52": 100.05
  },
  "68GS2060": {
    "prev": 91.8,
    "hi52": 105.47,
    "lo52": 91.03
  },
  "690GS2065": {
    "prev": 94.75,
    "hi52": 102.55,
    "lo52": 93.03
  },
  "692GS2039": {
    "prev": 101.7,
    "hi52": 108.89,
    "lo52": 98.85
  },
  "695GS2061": {
    "prev": 95.0,
    "hi52": 107.65,
    "lo52": 92.5
  },
  "697GR2034": {
    "prev": 92.12,
    "hi52": 102.84,
    "lo52": 92.12
  },
  "698GR2054": {
    "prev": 95.53,
    "hi52": 104.58,
    "lo52": 93.1
  },
  "699GS2026": {
    "prev": 102.75,
    "hi52": 104.5,
    "lo52": 99.27
  },
  "699GS2051": {
    "prev": 94.37,
    "hi52": 107.0,
    "lo52": 94.37
  },
  "702GS2031": {
    "prev": 102.52,
    "hi52": 109.0,
    "lo52": 100.9
  },
  "704GS2029": {
    "prev": 103.5,
    "hi52": 106.52,
    "lo52": 101.75
  },
  "706GS2028": {
    "prev": 104.0,
    "hi52": 106.1,
    "lo52": 101.46
  },
  "706GS2046": {
    "prev": 100.0,
    "hi52": 106.25,
    "lo52": 97.81
  },
  "709GS2054": {
    "prev": 96.35,
    "hi52": 108.0,
    "lo52": 95.15
  },
  "709GS2074": {
    "prev": 96.07,
    "hi52": 108.15,
    "lo52": 94.65
  },
  "710GS2029": {
    "prev": 104.78,
    "hi52": 108.54,
    "lo52": 100.0
  },
  "717GS2028": {
    "prev": 101.02,
    "hi52": 106.0,
    "lo52": 101.02
  },
  "717GS2030": {
    "prev": 104.6,
    "hi52": 111.6,
    "lo52": 102.5
  },
  "718GS2033": {
    "prev": 103.28,
    "hi52": 111.0,
    "lo52": 101.5
  },
  "718GS2037": {
    "prev": 103.45,
    "hi52": 109.7,
    "lo52": 101.0
  },
  "71GS2034": {
    "prev": 104.6,
    "hi52": 106.89,
    "lo52": 102.0
  },
  "724GS2055": {
    "prev": 98.99,
    "hi52": 103.8,
    "lo52": 97.51
  },
  "725GS2063": {
    "prev": 98.45,
    "hi52": 109.85,
    "lo52": 96.6
  },
  "726GS2029": {
    "prev": 103.25,
    "hi52": 107.05,
    "lo52": 101.15
  },
  "726GS2032": {
    "prev": 103.5,
    "hi52": 112.0,
    "lo52": 101.4
  },
  "726GS2033": {
    "prev": 102.42,
    "hi52": 111.93,
    "lo52": 101.59
  },
  "732GS2030": {
    "prev": 104.8,
    "hi52": 109.1,
    "lo52": 103.2
  },
  "733GS2026": {
    "prev": 103.0,
    "hi52": 105.5,
    "lo52": 100.51
  },
  "734GS2064": {
    "prev": 100.18,
    "hi52": 109.99,
    "lo52": 99.25
  },
  "736GS2052": {
    "prev": 99.6,
    "hi52": 114.93,
    "lo52": 99.3
  },
  "737GS2028": {
    "prev": 105.2,
    "hi52": 107.82,
    "lo52": 102.11
  },
  "738GS2027": {
    "prev": 103.22,
    "hi52": 108.4,
    "lo52": 100.35
  },
  "73GS2053": {
    "prev": 99.9,
    "hi52": 110.04,
    "lo52": 98.0
  },
  "741GS2036": {
    "prev": 104.82,
    "hi52": 112.5,
    "lo52": 101.88
  },
  "743GS2076": {
    "prev": 100.95,
    "hi52": 103.0,
    "lo52": 98.0
  },
  "746GS2073": {
    "prev": 101.64,
    "hi52": 115.0,
    "lo52": 99.5
  },
  "74GS2062": {
    "prev": 100.0,
    "hi52": 114.98,
    "lo52": 97.99
  },
  "754GS2036": {
    "prev": 106.77,
    "hi52": 113.53,
    "lo52": 103.7
  },
  "75GS2034": {
    "prev": 106.0,
    "hi52": 110.35,
    "lo52": 103.7
  },
  "769GS2043": {
    "prev": 106.2,
    "hi52": 113.0,
    "lo52": 104.65
  },
  "772GS2049": {
    "prev": 105.81,
    "hi52": 115.25,
    "lo52": 101.7
  },
  "772GS2055": {
    "prev": 106.0,
    "hi52": 119.4,
    "lo52": 102.81
  },
  "795GS2032": {
    "prev": 105.56,
    "hi52": 112.99,
    "lo52": 105.01
  },
  "813GS2045": {
    "prev": 111.4,
    "hi52": 120.45,
    "lo52": 104.31
  },
  "817GS2044": {
    "prev": 125.78,
    "hi52": 126.0,
    "lo52": 109.31
  },
  "824GS2027": {
    "prev": 102.6,
    "hi52": 110.39,
    "lo52": 101.72
  },
  "828GS2032": {
    "prev": 108.0,
    "hi52": 114.4,
    "lo52": 106.95
  },
  "833GS2026": {
    "prev": 101.2,
    "hi52": 107.0,
    "lo52": 98.67
  },
  "883GS2041": {
    "prev": 117.0,
    "hi52": 129.15,
    "lo52": 111.28
  },
  "92GS2030": {
    "prev": 115.15,
    "hi52": 123.0,
    "lo52": 110.7
  },
  "1025PATE28": {
    "prev": 99100.0,
    "hi52": 100870.41,
    "lo52": 97500.0
  },
  "1075WCA28": {
    "prev": 9840.0,
    "hi52": 10079.33,
    "lo52": 8900.0
  },
  "115VCCL27": {
    "prev": 96000.0,
    "hi52": 96000.0,
    "lo52": 90000.0
  },
  "115VCCL28": {
    "prev": 96100.0,
    "hi52": 101260.27,
    "lo52": 96100.0
  },
  "1225IFL27": {
    "prev": 9500.0,
    "hi52": 9970.0,
    "lo52": 7875.0
  },
  "125VCCL31": {
    "prev": 96500.0,
    "hi52": 97900.0,
    "lo52": 95500.0
  },
  "12AFIL27": {
    "prev": 9900.0,
    "hi52": 10000.0,
    "lo52": 8100.0
  },
  "12AFIL27A": {
    "prev": 9940.0,
    "hi52": 10041.17,
    "lo52": 8602.0
  },
  "12VCCL27D": {
    "prev": 98549.5,
    "hi52": 98990.0,
    "lo52": 90000.0
  },
  "12VCCL29B": {
    "prev": 99000.0,
    "hi52": 103900.0,
    "lo52": 89900.0
  },
  "915APSBC29": {
    "prev": 100800.0,
    "hi52": 101999.99,
    "lo52": 98356.17
  },
  "925ISF28": {
    "prev": 9882.0,
    "hi52": 9950.0,
    "lo52": 7751.0
  },
  "930APMD27": {
    "prev": 101483.22,
    "hi52": 102497.54,
    "lo52": 99801.75
  },
  "930APMD30": {
    "prev": 103314.78,
    "hi52": 113000.0,
    "lo52": 100605.21
  },
  "930APMD31": {
    "prev": 103500.0,
    "hi52": 104813.04,
    "lo52": 100100.0
  },
  "930APMD32": {
    "prev": 105499.0,
    "hi52": 105999.0,
    "lo52": 100000.0
  },
  "930APMD33": {
    "prev": 104000.0,
    "hi52": 105760.0,
    "lo52": 100561.0
  },
  "930APMD34": {
    "prev": 106299.0,
    "hi52": 106868.0,
    "lo52": 100663.0
  },
  "935TSI30": {
    "prev": 103235.07,
    "hi52": 104518.77,
    "lo52": 101000.0
  },
  "935TSI31": {
    "prev": 102250.0,
    "hi52": 119001.0,
    "lo52": 101621.99
  },
  "950ISF27C": {
    "prev": 9800.0,
    "hi52": 10250.0,
    "lo52": 9400.0
  },
  "1015SCL29B": {
    "prev": 998.65,
    "hi52": 1034.0,
    "lo52": 970.0
  },
  "1040UCL27B": {
    "prev": 1004.65,
    "hi52": 1035.0,
    "lo52": 850.0
  },
  "735NABAR31": {
    "prev": 1080.71,
    "hi52": 1164.9,
    "lo52": 1078.01
  },
  "740IIFCL33": {
    "prev": 1120.6,
    "hi52": 1221.01,
    "lo52": 1109.0
  },
  "78ABCL33": {
    "prev": 1010.0,
    "hi52": 1050.0,
    "lo52": 899.0
  },
  "79NHIT35": {
    "prev": 315.02,
    "hi52": 342.1,
    "lo52": 300.08
  },
  "805NMC29": {
    "prev": 122.17,
    "hi52": 124.99,
    "lo52": 122.17
  },
  "872MMFSL26": {
    "prev": 1003.0,
    "hi52": 1045.0,
    "lo52": 1000.0
  },
  "888ECL28": {
    "prev": 975.0,
    "hi52": 1028.0,
    "lo52": 785.0
  },
  "8SMC29": {
    "prev": 508.35,
    "hi52": 520.0,
    "lo52": 496.1
  },
  "905PFL26": {
    "prev": 1010.0,
    "hi52": 1033.0,
    "lo52": 996.0
  },
  "925AEL26": {
    "prev": 1036.0,
    "hi52": 1090.0,
    "lo52": 993.23
  },
  "925IHFL29": {
    "prev": 891.0,
    "hi52": 1030.0,
    "lo52": 850.2
  },
  "9IHFL27": {
    "prev": 994.0,
    "hi52": 1028.35,
    "lo52": 930.45
  },
  "IHFL261224": {
    "prev": 1075.2,
    "hi52": 1094.75,
    "lo52": 950.2
  },
  "IMC1": {
    "prev": 251.22,
    "hi52": 287.5,
    "lo52": 240.0
  },
  "SCL271224A": {
    "prev": 1061.0,
    "hi52": 1061.0,
    "lo52": 905.0
  },
  "764NABAR31": {
    "prev": 1084.21,
    "hi52": 1174.0,
    "lo52": 1078.1
  },
  "79NHIT40": {
    "prev": 314.05,
    "hi52": 372.0,
    "lo52": 303.8
  },
  "805NMC30": {
    "prev": 124.67,
    "hi52": 124.99,
    "lo52": 122.0
  },
  "810IRFC27": {
    "prev": 1057.91,
    "hi52": 1120.7,
    "lo52": 1028.6
  },
  "82HUDCO27": {
    "prev": 1026.0,
    "hi52": 1129.0,
    "lo52": 1019.0
  },
  "830CIFC26": {
    "prev": 1065.76,
    "hi52": 1171.0,
    "lo52": 987.2
  },
  "830NHAI27": {
    "prev": 1062.91,
    "hi52": 1198.79,
    "lo52": 1026.01
  },
  "8SMC30": {
    "prev": 505.0,
    "hi52": 549.0,
    "lo52": 490.39
  },
  "91MOFSL27": {
    "prev": 1097.0,
    "hi52": 1097.25,
    "lo52": 912.0
  },
  "9MMFSML": {
    "prev": 1065.0,
    "hi52": 1098.8,
    "lo52": 996.66
  },
  "9SCL27": {
    "prev": 1026.0,
    "hi52": 1026.2,
    "lo52": 887.0
  },
  "760PFCL35": {
    "prev": 1195.0,
    "hi52": 1249.0,
    "lo52": 1126.21
  },
  "79NHIT47": {
    "prev": 423.0,
    "hi52": 483.86,
    "lo52": 404.0
  },
  "866IIFC34B": {
    "prev": 1220.0,
    "hi52": 1679.9,
    "lo52": 1197.8
  },
  "1003ISFL28": {
    "prev": 1001.0,
    "hi52": 1199.0,
    "lo52": 963.55
  },
  "10IIFL28": {
    "prev": 1035.0,
    "hi52": 1079.5,
    "lo52": 961.0
  },
  "734IRFC28": {
    "prev": 1062.34,
    "hi52": 1105.0,
    "lo52": 1018.32
  },
  "805NMC32": {
    "prev": 124.61,
    "hi52": 124.99,
    "lo52": 121.5
  },
  "840CIFCL28": {
    "prev": 1075.0,
    "hi52": 1080.0,
    "lo52": 988.8
  },
  "891IIFCL34": {
    "prev": 1220.0,
    "hi52": 1348.0,
    "lo52": 1210.41
  },
  "897MOFSL29": {
    "prev": 1011.0,
    "hi52": 1084.1,
    "lo52": 986.4
  },
  "965AEL27": {
    "prev": 1052.0,
    "hi52": 1140.0,
    "lo52": 984.7
  },
  "1050ISFL28": {
    "prev": 1000.0,
    "hi52": 1099.0,
    "lo52": 931.0
  },
  "10CAGL27": {
    "prev": 1015.0,
    "hi52": 1089.99,
    "lo52": 977.53
  },
  "751HUDCO28": {
    "prev": 1044.5,
    "hi52": 1115.0,
    "lo52": 1032.21
  },
  "805NMC33": {
    "prev": 124.85,
    "hi52": 124.99,
    "lo52": 124.5
  },
  "830PFCL27": {
    "prev": 1057.5,
    "hi52": 1119.9,
    "lo52": 1029.21
  },
  "850NHAI29": {
    "prev": 1094.59,
    "hi52": 1372.8,
    "lo52": 1072.88
  },
  "880IREDA29": {
    "prev": 1082.0,
    "hi52": 1204.0,
    "lo52": 1079.81
  },
  "935LTF29": {
    "prev": 1056.1,
    "hi52": 1199.8,
    "lo52": 1040.1
  },
  "935MOFSL29": {
    "prev": 1093.0,
    "hi52": 1226.02,
    "lo52": 1000.0
  },
  "957NIDO26": {
    "prev": 982.55,
    "hi52": 1029.59,
    "lo52": 896.25
  },
  "96IIFL28": {
    "prev": 991.01,
    "hi52": 1001.0,
    "lo52": 940.0
  },
  "10NIDO26": {
    "prev": 1058.0,
    "hi52": 1083.0,
    "lo52": 973.2
  },
  "805NMC34": {
    "prev": 124.99,
    "hi52": 124.99,
    "lo52": 121.5
  },
  "846REC28": {
    "prev": 1150.0,
    "hi52": 1299.9,
    "lo52": 1068.15
  },
  "875NHAI29": {
    "prev": 1084.22,
    "hi52": 1298.0,
    "lo52": 1079.0
  },
  "880IREDA34": {
    "prev": 1245.0,
    "hi52": 1320.0,
    "lo52": 1196.08
  },
  "891NTPC33": {
    "prev": 1230.0,
    "hi52": 1338.0,
    "lo52": 1208.6
  },
  "892NHPC33": {
    "prev": 1201.0,
    "hi52": 1520.0,
    "lo52": 1194.15
  },
  "901NHB34": {
    "prev": 6180.0,
    "hi52": 7390.0,
    "lo52": 6081.0
  },
  "93MOFSL34": {
    "prev": 1145.0,
    "hi52": 1147.0,
    "lo52": 999.11
  },
  "956AEL29": {
    "prev": 1038.0,
    "hi52": 1145.0,
    "lo52": 1000.0
  },
  "IIFLZC28C": {
    "prev": 1497.33,
    "hi52": 1575.0,
    "lo52": 1250.0
  },
  "1050NFL26": {
    "prev": 999.0,
    "hi52": 1200.0,
    "lo52": 956.47
  },
  "105IIFL29": {
    "prev": 1044.0,
    "hi52": 1508.0,
    "lo52": 905.0
  },
  "774IREDA31": {
    "prev": 1096.25,
    "hi52": 1171.0,
    "lo52": 1085.0
  },
  "805NMC35": {
    "prev": 124.55,
    "hi52": 124.99,
    "lo52": 122.0
  },
  "898LTF29": {
    "prev": 1067.0,
    "hi52": 1182.0,
    "lo52": 1030.0
  },
  "97MOFSL34": {
    "prev": 1142.0,
    "hi52": 1180.0,
    "lo52": 1018.0
  },
  "99AEL29": {
    "prev": 1083.1,
    "hi52": 1165.0,
    "lo52": 1015.0
  },
  "NIDOZC26": {
    "prev": 2492.8,
    "hi52": 2492.8,
    "lo52": 1920.21
  },
  "1102NFL26": {
    "prev": 1060.56,
    "hi52": 1220.0,
    "lo52": 981.2
  },
  "764HUDCO31": {
    "prev": 1094.49,
    "hi52": 1175.0,
    "lo52": 1085.0
  },
  "805NMC36": {
    "prev": 124.65,
    "hi52": 124.99,
    "lo52": 122.0
  },
  "81TCHF28": {
    "prev": 1014.0,
    "hi52": 1107.5,
    "lo52": 986.7
  },
  "865TCAPS27": {
    "prev": 1050.1,
    "hi52": 1120.0,
    "lo52": 1012.0
  },
  "892PFCL33": {
    "prev": 1233.72,
    "hi52": 1343.0,
    "lo52": 1219.99
  },
  "920IIFLS26": {
    "prev": 996.0,
    "hi52": 1020.0,
    "lo52": 903.0
  },
  "925SCL2028": {
    "prev": 1025.0,
    "hi52": 1036.8,
    "lo52": 901.0
  },
  "735NHAI31": {
    "prev": 1079.0,
    "hi52": 1340.9,
    "lo52": 1075.75
  },
  "769HUDCO31": {
    "prev": 1101.01,
    "hi52": 1173.0,
    "lo52": 1076.4
  },
  "871REC28": {
    "prev": 1091.57,
    "hi52": 1179.99,
    "lo52": 1075.0
  },
  "885SCL26": {
    "prev": 1020.33,
    "hi52": 1076.25,
    "lo52": 952.57
  },
  "895AEL27": {
    "prev": 1051.8,
    "hi52": 1094.0,
    "lo52": 935.1
  },
  "925CAGL26": {
    "prev": 990.0,
    "hi52": 1020.0,
    "lo52": 960.0
  },
  "PFCL36B": {
    "prev": 51300.0,
    "hi52": 51300.0,
    "lo52": 50183.05
  },
  "76NHAI31": {
    "prev": 1078.21,
    "hi52": 1180.0,
    "lo52": 1076.0
  },
  "84TCHF28": {
    "prev": 1022.0,
    "hi52": 1099.0,
    "lo52": 1000.1
  },
  "865IRFC29": {
    "prev": 1177.0,
    "hi52": 1196.0,
    "lo52": 1090.0
  },
  "910TCAP28": {
    "prev": 1063.0,
    "hi52": 1157.0,
    "lo52": 1032.0
  },
  "9PCHFL31A": {
    "prev": 1057.5,
    "hi52": 1380.0,
    "lo52": 985.0
  },
  "9SCL26BA": {
    "prev": 1025.1,
    "hi52": 1064.75,
    "lo52": 950.0
  },
  "851HUDCO28": {
    "prev": 1101.0,
    "hi52": 1198.99,
    "lo52": 1073.01
  },
  "885AEL28": {
    "prev": 1006.0,
    "hi52": 1035.0,
    "lo52": 986.38
  },
  "96SFIL24A": {
    "prev": 960.0,
    "hi52": 1122.84,
    "lo52": 821.0
  },
  "IIFLHFZC27": {
    "prev": 1363.0,
    "hi52": 1370.0,
    "lo52": 1210.0
  },
  "SCLZC26": {
    "prev": 2209.0,
    "hi52": 2227.16,
    "lo52": 1920.0
  },
  "TCHF30": {
    "prev": 1025.55,
    "hi52": 1130.0,
    "lo52": 1015.0
  },
  "1003IIFL29": {
    "prev": 998.0,
    "hi52": 1098.0,
    "lo52": 880.0
  },
  "1065NFL27": {
    "prev": 1009.9,
    "hi52": 1200.0,
    "lo52": 950.01
  },
  "730PFCL41": {
    "prev": 965.24,
    "hi52": 999.0,
    "lo52": 945.94
  },
  "753NTPC30E": {
    "prev": 1104.51,
    "hi52": 1198.0,
    "lo52": 1073.12
  },
  "843IHFL29": {
    "prev": 967.0,
    "hi52": 998.98,
    "lo52": 862.01
  },
  "863IRFC29": {
    "prev": 1165.05,
    "hi52": 1300.0,
    "lo52": 1099.35
  },
  "885TCAPS29": {
    "prev": 1064.0,
    "hi52": 1190.0,
    "lo52": 955.0
  },
  "915AEL28": {
    "prev": 1051.5,
    "hi52": 1069.0,
    "lo52": 990.6
  },
  "1119NFL27": {
    "prev": 1005.01,
    "hi52": 1290.0,
    "lo52": 986.0
  },
  "739NHAI31A": {
    "prev": 1118.01,
    "hi52": 1380.0,
    "lo52": 1087.0
  },
  "876HUDCO28": {
    "prev": 1103.0,
    "hi52": 1270.0,
    "lo52": 1072.0
  },
  "1039UCL26": {
    "prev": 1090.0,
    "hi52": 1095.0,
    "lo52": 956.0
  },
  "10IIFL28A": {
    "prev": 981.0,
    "hi52": 1111.0,
    "lo52": 941.0
  },
  "769NHAI31": {
    "prev": 1119.0,
    "hi52": 1210.0,
    "lo52": 1087.19
  },
  "850CIFCL26": {
    "prev": 1010.0,
    "hi52": 1106.0,
    "lo52": 952.0
  },
  "888IRFC29": {
    "prev": 1190.0,
    "hi52": 1354.9,
    "lo52": 1105.0
  },
  "901HUDCO34": {
    "prev": 1230.0,
    "hi52": 1341.99,
    "lo52": 1217.1
  },
  "915SCL26": {
    "prev": 1016.0,
    "hi52": 1229.0,
    "lo52": 925.41
  },
  "9AEL30": {
    "prev": 1013.97,
    "hi52": 1068.0,
    "lo52": 995.0
  },
  "PFCL41A": {
    "prev": 942.01,
    "hi52": 1000.0,
    "lo52": 900.0
  },
  "1015UCL27": {
    "prev": 995.14,
    "hi52": 1049.0,
    "lo52": 950.0
  },
  "905LTF27": {
    "prev": 1095.0,
    "hi52": 1124.05,
    "lo52": 1015.3
  },
  "930AEL30": {
    "prev": 1060.02,
    "hi52": 1095.0,
    "lo52": 990.1
  },
  "96IIFL28A": {
    "prev": 992.51,
    "hi52": 1001.0,
    "lo52": 890.0
  },
  "AEL170725A": {
    "prev": 1050.0,
    "hi52": 1099.0,
    "lo52": 951.01
  },
  "IIFLZC28": {
    "prev": 1565.2,
    "hi52": 1580.62,
    "lo52": 1112.1
  },
  "1050UCL28": {
    "prev": 1010.0,
    "hi52": 1055.0,
    "lo52": 951.1
  },
  "743REC35": {
    "prev": 1171.0,
    "hi52": 1237.0,
    "lo52": 1134.01
  },
  "860AEL28": {
    "prev": 1002.0,
    "hi52": 1037.0,
    "lo52": 980.47
  },
  "87LTF27": {
    "prev": 1010.0,
    "hi52": 1210.0,
    "lo52": 1010.0
  },
  "812REC27": {
    "prev": 1081.25,
    "hi52": 1126.03,
    "lo52": 1032.0
  },
  "AEL12126": {
    "prev": 970.0,
    "hi52": 1024.0,
    "lo52": 940.0
  },
  "753IRFC30": {
    "prev": 1105.8,
    "hi52": 1210.0,
    "lo52": 1074.0
  },
  "82IGT31": {
    "prev": 1081.6,
    "hi52": 1156.05,
    "lo52": 1003.75
  },
  "848AEL29": {
    "prev": 1005.0,
    "hi52": 1026.0,
    "lo52": 984.85
  },
  "943ECL28": {
    "prev": 992.0,
    "hi52": 1189.0,
    "lo52": 884.0
  },
  "750IRFC35": {
    "prev": 1166.1,
    "hi52": 1269.99,
    "lo52": 1132.1
  },
  "875AEL29": {
    "prev": 1000.0,
    "hi52": 1028.0,
    "lo52": 994.0
  },
  "797IGT31": {
    "prev": 1010.11,
    "hi52": 1115.0,
    "lo52": 986.15
  },
  "842IIFL26": {
    "prev": 985.0,
    "hi52": 1004.49,
    "lo52": 889.0
  },
  "862AEL31": {
    "prev": 1015.0,
    "hi52": 1029.0,
    "lo52": 998.0
  },
  "875IIFL26": {
    "prev": 1018.0,
    "hi52": 1063.5,
    "lo52": 985.0
  },
  "995SCL2035": {
    "prev": 1150.0,
    "hi52": 1150.0,
    "lo52": 900.1
  },
  "865LTF26": {
    "prev": 1021.05,
    "hi52": 1156.4,
    "lo52": 1005.0
  },
  "890AEL31": {
    "prev": 1005.0,
    "hi52": 1108.02,
    "lo52": 994.0
  },
  "948SCL26A": {
    "prev": 303.5,
    "hi52": 799.0,
    "lo52": 303.5
  },
  "1015ECL29": {
    "prev": 1011.5,
    "hi52": 1114.12,
    "lo52": 980.0
  },
  "1015SCL28": {
    "prev": 841.45,
    "hi52": 1018.8,
    "lo52": 681.0
  },
  "1060ECL29": {
    "prev": 1039.9,
    "hi52": 1340.0,
    "lo52": 890.3
  },
  "865IIFL28": {
    "prev": 985.33,
    "hi52": 995.0,
    "lo52": 938.0
  },
  "971SCL28A": {
    "prev": 600.0,
    "hi52": 900.0,
    "lo52": 570.4
  },
  "IIFLZC28A": {
    "prev": 1270.0,
    "hi52": 1320.0,
    "lo52": 1082.05
  },
  "1003SCL30A": {
    "prev": 825.0,
    "hi52": 889.99,
    "lo52": 651.0
  },
  "9IIFL26": {
    "prev": 1071.2,
    "hi52": 1071.2,
    "lo52": 990.0
  },
  "865IFL28": {
    "prev": 980.5,
    "hi52": 999.9,
    "lo52": 930.0
  },
  "TVSMNCRPS": {
    "prev": 10.15,
    "hi52": 10.3,
    "lo52": 9.2
  },
  "71MH33": {
    "prev": 94.5,
    "hi52": 96.0,
    "lo52": 90.0
  },
  "755GJ31": {
    "prev": 100.03,
    "hi52": 100.03,
    "lo52": 95.6
  },
  "77AP29A": {
    "prev": 103.26,
    "hi52": 103.26,
    "lo52": 97.35
  },
  "182D060826": {
    "prev": 97.29,
    "hi52": 97.56,
    "lo52": 96.99
  },
  "182D180926": {
    "prev": 97.32,
    "hi52": 96.84,
    "lo52": 96.84
  },
  "364D101226": {
    "prev": 95.54,
    "hi52": 95.65,
    "lo52": 94.69
  },
  "364D110227": {
    "prev": 94.32,
    "hi52": 99.25,
    "lo52": 94.32
  },
  "364D170926": {
    "prev": 96.81,
    "hi52": 96.85,
    "lo52": 92.18
  },
  "364D171226": {
    "prev": 95.5,
    "hi52": 95.52,
    "lo52": 94.29
  },
  "364D180626": {
    "prev": 98.5,
    "hi52": 98.5,
    "lo52": 93.45
  },
  "364D190327": {
    "prev": 94.67,
    "hi52": 95.0,
    "lo52": 94.2
  },
  "91D040626": {
    "prev": 98.91,
    "hi52": 98.91,
    "lo52": 98.27
  },
  "91D090426": {
    "prev": 99.65,
    "hi52": 100.73,
    "lo52": 97.51
  },
  "91D110626": {
    "prev": 98.5,
    "hi52": 98.8,
    "lo52": 98.1
  },
  "91D140526": {
    "prev": 98.97,
    "hi52": 99.0,
    "lo52": 98.37
  },
  "91D170426": {
    "prev": 99.35,
    "hi52": 103.0,
    "lo52": 98.29
  },
  "91D220526": {
    "prev": 99.0,
    "hi52": 99.0,
    "lo52": 98.24
  },
  "91D230426": {
    "prev": 99.31,
    "hi52": 99.38,
    "lo52": 98.25
  },
  "91D270326": {
    "prev": 99.81,
    "hi52": 99.89,
    "lo52": 98.51
  },
  "91D280526": {
    "prev": 98.49,
    "hi52": 98.8,
    "lo52": 98.09
  },
  "IIFLZC28B": {
    "prev": 1200.51,
    "hi52": 1238.0,
    "lo52": 1032.2
  },
  "960IIFL30": {
    "prev": 995.0,
    "hi52": 1133.0,
    "lo52": 830.0
  },
  "837IIFL28": {
    "prev": 980.0,
    "hi52": 1050.0,
    "lo52": 953.0
  },
  "870IIFL28": {
    "prev": 980.1,
    "hi52": 995.0,
    "lo52": 980.0
  },
  "885IIFL29": {
    "prev": 1002.0,
    "hi52": 1004.5,
    "lo52": 980.0
  },
  "948SCL26B": {
    "prev": 988.65,
    "hi52": 988.65,
    "lo52": 925.2
  },
  "9IIFL31": {
    "prev": 995.0,
    "hi52": 1002.5,
    "lo52": 990.0
  },
  "IIFL060326": {
    "prev": 950.0,
    "hi52": 952.0,
    "lo52": 931.98
  },
  "903SFL28": {
    "prev": 1040.15,
    "hi52": 1100.0,
    "lo52": 1000.0
  },
  "94SFL28": {
    "prev": 1088.59,
    "hi52": 1270.0,
    "lo52": 1023.0
  },
  "930SFL28": {
    "prev": 1045.0,
    "hi52": 1100.0,
    "lo52": 898.2
  },
  "97SFL28": {
    "prev": 1065.0,
    "hi52": 1169.0,
    "lo52": 945.0
  },
  "957ICCL25": {
    "prev": 1077.33,
    "hi52": 1100.0,
    "lo52": 1020.0
  },
  "97SFL29": {
    "prev": 1050.24,
    "hi52": 1185.0,
    "lo52": 1010.1
  },
  "931SFL26": {
    "prev": 1005.0,
    "hi52": 1072.0,
    "lo52": 875.2
  },
  "1025SCL34": {
    "prev": 990.0,
    "hi52": 1020.0,
    "lo52": 930.0
  },
  "905SC24B": {
    "prev": 973.0,
    "hi52": 1000.55,
    "lo52": 920.55
  },
  "965SCL26A": {
    "prev": 1061.0,
    "hi52": 1072.12,
    "lo52": 910.2
  },
  "SFLZC26A": {
    "prev": 1825.0,
    "hi52": 1860.3,
    "lo52": 1609.0
  },
  "99SCL27": {
    "prev": 1041.0,
    "hi52": 1064.8,
    "lo52": 940.3
  },
  "SCL310524A": {
    "prev": 1080.3,
    "hi52": 1192.0,
    "lo52": 903.0
  },
  "10SCL31A": {
    "prev": 1000.0,
    "hi52": 1060.0,
    "lo52": 1060.0
  },
  "1075SCL34": {
    "prev": 1000.0,
    "hi52": 1140.0,
    "lo52": 900.0
  },
  "ABGSEC": {
    "prev": 112.64,
    "hi52": 113.31,
    "lo52": 106.5
  },
  "ABSL10BANK": {
    "prev": 161.31,
    "hi52": 214.42,
    "lo52": 152.96
  },
  "ABSLBANETF": {
    "prev": 54.52,
    "hi52": 64.94,
    "lo52": 50.0
  },
  "ABSLLIQUID": {
    "prev": 999.99,
    "hi52": 1044.99,
    "lo52": 999.99
  },
  "ABSLMSCIN": {
    "prev": 27.52,
    "hi52": 32.69,
    "lo52": 26.7
  },
  "ABSLNN50ET": {
    "prev": 66.96,
    "hi52": 75.45,
    "lo52": 61.0
  },
  "ABSLPSE": {
    "prev": 10.26,
    "hi52": 11.6,
    "lo52": 8.0
  },
  "ALPHA": {
    "prev": 44.75,
    "hi52": 53.6,
    "lo52": 39.0
  },
  "ALPHAETF": {
    "prev": 23.13,
    "hi52": 26.53,
    "lo52": 20.35
  },
  "ALPL30IETF": {
    "prev": 25.59,
    "hi52": 28.72,
    "lo52": 24.0
  },
  "AONEGOLD": {
    "prev": 13.7,
    "hi52": 17.73,
    "lo52": 10.0
  },
  "AONELIQUID": {
    "prev": 1051.74,
    "hi52": 1060.0,
    "lo52": 908.58
  },
  "AONENIFTY": {
    "prev": 9.46,
    "hi52": 12.0,
    "lo52": 9.13
  },
  "AONESILVER": {
    "prev": 8.85,
    "hi52": 12.0,
    "lo52": 7.68
  },
  "AONETMMQ50": {
    "prev": 9.07,
    "hi52": 10.5,
    "lo52": 8.0
  },
  "AONETOTAL": {
    "prev": 10.79,
    "hi52": 12.51,
    "lo52": 9.63
  },
  "AUTOBEES": {
    "prev": 254.41,
    "hi52": 299.92,
    "lo52": 197.07
  },
  "AUTOIETF": {
    "prev": 25.51,
    "hi52": 30.5,
    "lo52": 19.72
  },
  "AXISBNKETF": {
    "prev": 550.24,
    "hi52": 647.82,
    "lo52": 485.0
  },
  "AXISBPSETF": {
    "prev": 13.22,
    "hi52": 14.5,
    "lo52": 12.1
  },
  "AXISCETF": {
    "prev": 109.97,
    "hi52": 131.85,
    "lo52": 105.51
  },
  "AXISGOLD": {
    "prev": 122.02,
    "hi52": 150.0,
    "lo52": 68.1
  },
  "AXISHCETF": {
    "prev": 146.65,
    "hi52": 156.13,
    "lo52": 129.21
  },
  "AXISILVER": {
    "prev": 228.42,
    "hi52": 390.01,
    "lo52": 86.48
  },
  "AXISNIFTY": {
    "prev": 254.61,
    "hi52": 296.38,
    "lo52": 236.8
  },
  "AXISTECETF": {
    "prev": 321.81,
    "hi52": 439.67,
    "lo52": 310.1
  },
  "AXISVALUE": {
    "prev": 31.46,
    "hi52": 34.97,
    "lo52": 22.84
  },
  "AXSENSEX": {
    "prev": 77.09,
    "hi52": 91.35,
    "lo52": 74.0
  },
  "BANK10ADD": {
    "prev": 16.35,
    "hi52": 16.94,
    "lo52": 15.38
  },
  "BANKADD": {
    "prev": 54.51,
    "hi52": 62.9,
    "lo52": 49.86
  },
  "BANKBEES": {
    "prev": 550.86,
    "hi52": 638.99,
    "lo52": 505.3
  },
  "BANKBETA": {
    "prev": 54.98,
    "hi52": 73.7,
    "lo52": 48.74
  },
  "BANKBETF": {
    "prev": 54.12,
    "hi52": 65.0,
    "lo52": 49.64
  },
  "BANKETF": {
    "prev": 542.2,
    "hi52": 628.27,
    "lo52": 495.47
  },
  "BANKIETF": {
    "prev": 54.64,
    "hi52": 63.9,
    "lo52": 50.0
  },
  "BANKNIFTY1": {
    "prev": 55.12,
    "hi52": 652.87,
    "lo52": 53.15
  },
  "BANKPSU": {
    "prev": 86.17,
    "hi52": 99.52,
    "lo52": 59.8
  },
  "BBETF0432": {
    "prev": 1316.36,
    "hi52": 1346.89,
    "lo52": 1232.75
  },
  "BBNPNBETF": {
    "prev": 53.73,
    "hi52": 62.77,
    "lo52": 48.63
  },
  "BBNPPGOLD": {
    "prev": 142.3,
    "hi52": 184.05,
    "lo52": 82.0
  },
  "BFSI": {
    "prev": 25.52,
    "hi52": 29.94,
    "lo52": 23.38
  },
  "BSE500IETF": {
    "prev": 35.97,
    "hi52": 41.64,
    "lo52": 33.0
  },
  "BSLGOLDETF": {
    "prev": 128.59,
    "hi52": 155.99,
    "lo52": 74.91
  },
  "BSLNIFTY": {
    "prev": 26.99,
    "hi52": 31.45,
    "lo52": 23.58
  },
  "BSLSENETFG": {
    "prev": 74.46,
    "hi52": 87.82,
    "lo52": 64.38
  },
  "CASHIETF": {
    "prev": 1054.44,
    "hi52": 1064.57,
    "lo52": 1001.71
  },
  "CHEMICAL": {
    "prev": 26.39,
    "hi52": 30.0,
    "lo52": 25.0
  },
  "CHOICEGOLD": {
    "prev": 145.11,
    "hi52": 175.49,
    "lo52": 120.0
  },
  "COMMOIETF": {
    "prev": 95.63,
    "hi52": 103.99,
    "lo52": 75.61
  },
  "CONS": {
    "prev": 10.97,
    "hi52": 132.0,
    "lo52": 10.2
  },
  "CONSUMBEES": {
    "prev": 118.83,
    "hi52": 144.38,
    "lo52": 110.86
  },
  "CONSUMER": {
    "prev": 10.19,
    "hi52": 12.87,
    "lo52": 9.0
  },
  "CONSUMIETF": {
    "prev": 110.45,
    "hi52": 138.0,
    "lo52": 101.23
  },
  "CPSEETF": {
    "prev": 101.76,
    "hi52": 106.26,
    "lo52": 74.9
  },
  "DEFENCE": {
    "prev": 63.48,
    "hi52": 72.0,
    "lo52": 60.33
  },
  "DIVIDEND": {
    "prev": 34.3,
    "hi52": 38.03,
    "lo52": 33.15
  },
  "DIVOPPBEES": {
    "prev": 76.62,
    "hi52": 87.09,
    "lo52": 68.3
  },
  "EBANKNIFTY": {
    "prev": 53.79,
    "hi52": 69.39,
    "lo52": 47.0
  },
  "EBBETF0430": {
    "prev": 1561.97,
    "hi52": 1612.43,
    "lo52": 1232.0
  },
  "EBBETF0431": {
    "prev": 1392.14,
    "hi52": 1410.12,
    "lo52": 1309.97
  },
  "EBBETF0433": {
    "prev": 1276.9,
    "hi52": 1315.12,
    "lo52": 1199.25
  },
  "ECAPINSURE": {
    "prev": 22.4,
    "hi52": 26.77,
    "lo52": 17.13
  },
  "EGOLD": {
    "prev": 146.25,
    "hi52": 184.95,
    "lo52": 85.0
  },
  "ELIQUID": {
    "prev": 1023.25,
    "hi52": 1043.0,
    "lo52": 996.0
  },
  "ELM250": {
    "prev": 15.14,
    "hi52": 19.2,
    "lo52": 14.6
  },
  "EMULTIMQ": {
    "prev": 38.09,
    "hi52": 44.97,
    "lo52": 34.73
  },
  "ENERGY": {
    "prev": 36.05,
    "hi52": 40.0,
    "lo52": 29.8
  },
  "ENIFTY": {
    "prev": 23.21,
    "hi52": 27.22,
    "lo52": 22.44
  },
  "EQUAL200": {
    "prev": 12.34,
    "hi52": 13.96,
    "lo52": 11.03
  },
  "EQUAL50": {
    "prev": 307.57,
    "hi52": 341.7,
    "lo52": 297.75
  },
  "EQUAL50ADD": {
    "prev": 317.45,
    "hi52": 361.0,
    "lo52": 280.01
  },
  "ESENSEX": {
    "prev": 74.83,
    "hi52": 88.05,
    "lo52": 72.5
  },
  "ESG": {
    "prev": 39.25,
    "hi52": 45.06,
    "lo52": 36.0
  },
  "ESILVER": {
    "prev": 231.65,
    "hi52": 375.0,
    "lo52": 86.27
  },
  "EVIETF": {
    "prev": 27.77,
    "hi52": 33.75,
    "lo52": 23.56
  },
  "EVINDIA": {
    "prev": 27.68,
    "hi52": 32.56,
    "lo52": 23.83
  },
  "FINIETF": {
    "prev": 29.2,
    "hi52": 33.69,
    "lo52": 24.5
  },
  "FLEXIADD": {
    "prev": 9.17,
    "hi52": 11.9,
    "lo52": 8.88
  },
  "FMCGIETF": {
    "prev": 50.29,
    "hi52": 62.3,
    "lo52": 48.82
  },
  "GILT10BETA": {
    "prev": 26.09,
    "hi52": 26.99,
    "lo52": 25.05
  },
  "GILT5BETA": {
    "prev": 65.13,
    "hi52": 66.43,
    "lo52": 60.4
  },
  "GILT5YBEES": {
    "prev": 64.2,
    "hi52": 66.31,
    "lo52": 60.01
  },
  "GOLD1": {
    "prev": 122.53,
    "hi52": 158.0,
    "lo52": 68.01
  },
  "GOLD360": {
    "prev": 143.6,
    "hi52": 178.0,
    "lo52": 78.2
  },
  "GOLDADD": {
    "prev": 142.15,
    "hi52": 181.0,
    "lo52": 81.15
  },
  "GOLDBEES": {
    "prev": 121.06,
    "hi52": 148.14,
    "lo52": 65.85
  },
  "GOLDBETA": {
    "prev": 123.0,
    "hi52": 149.35,
    "lo52": 71.1
  },
  "GOLDBND": {
    "prev": 146.02,
    "hi52": 180.16,
    "lo52": 127.96
  },
  "GOLDCASE": {
    "prev": 23.03,
    "hi52": 27.94,
    "lo52": 12.83
  },
  "GOLDETF": {
    "prev": 142.39,
    "hi52": 173.5,
    "lo52": 78.03
  },
  "GOLDIETF": {
    "prev": 125.18,
    "hi52": 158.0,
    "lo52": 69.71
  },
  "GROWWCAPM": {
    "prev": 9.37,
    "hi52": 11.78,
    "lo52": 8.02
  },
  "GROWWCHEM": {
    "prev": 25.98,
    "hi52": 29.82,
    "lo52": 24.92
  },
  "GROWWDEFNC": {
    "prev": 77.5,
    "hi52": 93.89,
    "lo52": 55.02
  },
  "GROWWEV": {
    "prev": 27.62,
    "hi52": 32.38,
    "lo52": 23.0
  },
  "GROWWGOLD": {
    "prev": 14.33,
    "hi52": 179.96,
    "lo52": 12.71
  },
  "GROWWHOSPI": {
    "prev": 44.88,
    "hi52": 52.9,
    "lo52": 43.35
  },
  "GROWWLIQID": {
    "prev": 108.31,
    "hi52": 108.49,
    "lo52": 100.0
  },
  "GROWWLOVOL": {
    "prev": 9.91,
    "hi52": 11.5,
    "lo52": 9.0
  },
  "GROWWMC150": {
    "prev": 203.5,
    "hi52": 228.97,
    "lo52": 194.0
  },
  "GROWWMETAL": {
    "prev": 10.79,
    "hi52": 12.19,
    "lo52": 10.03
  },
  "GROWWMOM50": {
    "prev": 9.56,
    "hi52": 12.0,
    "lo52": 9.11
  },
  "GROWWN200": {
    "prev": 10.54,
    "hi52": 12.45,
    "lo52": 9.55
  },
  "GROWWNET": {
    "prev": 8.34,
    "hi52": 12.14,
    "lo52": 7.94
  },
  "GROWWNIFTY": {
    "prev": 9.3,
    "hi52": 11.88,
    "lo52": 9.0
  },
  "GROWWNXT50": {
    "prev": 63.87,
    "hi52": 72.25,
    "lo52": 61.3
  },
  "GROWWPOWER": {
    "prev": 10.46,
    "hi52": 12.0,
    "lo52": 7.75
  },
  "GROWWPSE": {
    "prev": 99.39,
    "hi52": 106.98,
    "lo52": 95.57
  },
  "GROWWRAIL": {
    "prev": 29.42,
    "hi52": 43.66,
    "lo52": 28.0
  },
  "GROWWRLTY": {
    "prev": 7.82,
    "hi52": 11.3,
    "lo52": 7.31
  },
  "GROWWSC250": {
    "prev": 8.48,
    "hi52": 10.47,
    "lo52": 8.07
  },
  "GROWWSLVR": {
    "prev": 22.48,
    "hi52": 362.99,
    "lo52": 19.34
  },
  "GSEC10ABSL": {
    "prev": 110.95,
    "hi52": 111.9,
    "lo52": 105.75
  },
  "GSEC10IETF": {
    "prev": 260.69,
    "hi52": 265.36,
    "lo52": 244.59
  },
  "GSEC10YEAR": {
    "prev": 29.95,
    "hi52": 31.0,
    "lo52": 28.15
  },
  "GSEC5IETF": {
    "prev": 64.46,
    "hi52": 66.7,
    "lo52": 59.75
  },
  "HDFCBSE500": {
    "prev": 34.42,
    "hi52": 39.55,
    "lo52": 31.14
  },
  "HDFCGOLD": {
    "prev": 125.13,
    "hi52": 152.3,
    "lo52": 70.1
  },
  "HDFCGROWTH": {
    "prev": 110.87,
    "hi52": 133.3,
    "lo52": 103.11
  },
  "HDFCLIQUID": {
    "prev": 1052.93,
    "hi52": 1053.11,
    "lo52": 990.0
  },
  "HDFCLOWVOL": {
    "prev": 19.39,
    "hi52": 23.0,
    "lo52": 17.92
  },
  "HDFCMID150": {
    "prev": 20.53,
    "hi52": 23.39,
    "lo52": 17.55
  },
  "HDFCMOMENT": {
    "prev": 28.65,
    "hi52": 33.23,
    "lo52": 25.5
  },
  "HDFCNEXT50": {
    "prev": 65.15,
    "hi52": 73.0,
    "lo52": 59.0
  },
  "HDFCNIF100": {
    "prev": 24.62,
    "hi52": 29.0,
    "lo52": 21.15
  },
  "HDFCNIFBAN": {
    "prev": 54.71,
    "hi52": 65.54,
    "lo52": 50.21
  },
  "HDFCNIFIT": {
    "prev": 30.97,
    "hi52": 42.7,
    "lo52": 30.03
  },
  "HDFCNIFTY": {
    "prev": 259.21,
    "hi52": 301.88,
    "lo52": 240.55
  },
  "HDFCPSUBK": {
    "prev": 86.52,
    "hi52": 101.25,
    "lo52": 60.0
  },
  "HDFCPVTBAN": {
    "prev": 25.65,
    "hi52": 30.17,
    "lo52": 24.23
  },
  "HDFCQUAL": {
    "prev": 53.95,
    "hi52": 61.87,
    "lo52": 50.05
  },
  "HDFCSENSEX": {
    "prev": 84.13,
    "hi52": 98.48,
    "lo52": 80.55
  },
  "HDFCSILVER": {
    "prev": 220.02,
    "hi52": 359.0,
    "lo52": 85.67
  },
  "HDFCSML250": {
    "prev": 149.18,
    "hi52": 183.18,
    "lo52": 136.27
  },
  "HDFCVALUE": {
    "prev": 126.38,
    "hi52": 147.05,
    "lo52": 117.5
  },
  "HEALTHADD": {
    "prev": 145.38,
    "hi52": 155.9,
    "lo52": 129.94
  },
  "HEALTHCARE": {
    "prev": 18.06,
    "hi52": 19.16,
    "lo52": 17.65
  },
  "HEALTHIETF": {
    "prev": 147.75,
    "hi52": 157.19,
    "lo52": 130.0
  },
  "HEALTHY": {
    "prev": 14.83,
    "hi52": 16.98,
    "lo52": 12.2
  },
  "HNGSNGBEES": {
    "prev": 491.63,
    "hi52": 579.92,
    "lo52": 319.0
  },
  "ICICIB22": {
    "prev": 116.93,
    "hi52": 131.0,
    "lo52": 95.41
  },
  "IDFNIFTYET": {
    "prev": 253.64,
    "hi52": 340.8,
    "lo52": 235.01
  },
  "INFRA": {
    "prev": 10.66,
    "hi52": 12.3,
    "lo52": 10.2
  },
  "INFRABEES": {
    "prev": 907.4,
    "hi52": 1018.3,
    "lo52": 795.33
  },
  "INFRAIETF": {
    "prev": 90.14,
    "hi52": 101.0,
    "lo52": 79.1
  },
  "INTERNET": {
    "prev": 11.22,
    "hi52": 16.12,
    "lo52": 10.72
  },
  "IT": {
    "prev": 32.15,
    "hi52": 44.49,
    "lo52": 31.14
  },
  "ITADD": {
    "prev": 31.2,
    "hi52": 41.92,
    "lo52": 29.63
  },
  "ITBEES": {
    "prev": 32.16,
    "hi52": 44.27,
    "lo52": 31.25
  },
  "ITBETA": {
    "prev": 304.42,
    "hi52": 410.0,
    "lo52": 296.83
  },
  "ITETF": {
    "prev": 30.67,
    "hi52": 42.02,
    "lo52": 29.78
  },
  "ITIETF": {
    "prev": 32.04,
    "hi52": 44.3,
    "lo52": 31.24
  },
  "IVZINGOLD": {
    "prev": 12753.5,
    "hi52": 15599.8,
    "lo52": 7569.15
  },
  "IVZINNIFTY": {
    "prev": 2638.5,
    "hi52": 3150.0,
    "lo52": 2511.0
  },
  "JUNIORBEES": {
    "prev": 688.51,
    "hi52": 777.0,
    "lo52": 620.0
  },
  "LICMFGOLD": {
    "prev": 131.5,
    "hi52": 16200.0,
    "lo52": 117.85
  },
  "LICNETFGSC": {
    "prev": 28.85,
    "hi52": 30.05,
    "lo52": 27.27
  },
  "LICNETFN50": {
    "prev": 257.14,
    "hi52": 295.0,
    "lo52": 239.65
  },
  "LICNETFSEN": {
    "prev": 841.49,
    "hi52": 989.0,
    "lo52": 808.11
  },
  "LICNFNHGP": {
    "prev": 258.9,
    "hi52": 296.41,
    "lo52": 242.47
  },
  "LICNMID100": {
    "prev": 55.34,
    "hi52": 67.5,
    "lo52": 48.5
  },
  "LIQGRWBEES": {
    "prev": 1032.32,
    "hi52": 1056.29,
    "lo52": 995.55
  },
  "LIQUID": {
    "prev": 999.99,
    "hi52": 1024.98,
    "lo52": 997.15
  },
  "LIQUID1": {
    "prev": 1096.31,
    "hi52": 1123.29,
    "lo52": 1006.15
  },
  "LIQUIDADD": {
    "prev": 1118.43,
    "hi52": 1151.22,
    "lo52": 1052.08
  },
  "LIQUIDBEES": {
    "prev": 999.99,
    "hi52": 1029.99,
    "lo52": 970.0
  },
  "LIQUIDBETF": {
    "prev": 1073.85,
    "hi52": 1207.5,
    "lo52": 1002.17
  },
  "LIQUIDCASE": {
    "prev": 113.25,
    "hi52": 113.28,
    "lo52": 102.0
  },
  "LIQUIDETF": {
    "prev": 999.99,
    "hi52": 1002.0,
    "lo52": 980.55
  },
  "LIQUIDIETF": {
    "prev": 999.99,
    "hi52": 1029.99,
    "lo52": 969.99
  },
  "LIQUIDPLUS": {
    "prev": 1077.53,
    "hi52": 1240.88,
    "lo52": 994.83
  },
  "LIQUIDSBI": {
    "prev": 999.99,
    "hi52": 1029.99,
    "lo52": 970.23
  },
  "LIQUIDSHRI": {
    "prev": 1096.81,
    "hi52": 1096.97,
    "lo52": 1044.58
  },
  "LOWVOL": {
    "prev": 193.06,
    "hi52": 219.1,
    "lo52": 180.04
  },
  "LOWVOL1": {
    "prev": 19.61,
    "hi52": 22.9,
    "lo52": 18.29
  },
  "LOWVOLIETF": {
    "prev": 20.68,
    "hi52": 26.81,
    "lo52": 19.03
  },
  "LTGILTBEES": {
    "prev": 29.32,
    "hi52": 30.13,
    "lo52": 27.6
  },
  "LTGILTCASE": {
    "prev": 29.93,
    "hi52": 30.94,
    "lo52": 28.71
  },
  "MAFANG": {
    "prev": 159.12,
    "hi52": 178.78,
    "lo52": 100.0
  },
  "MAHKTECH": {
    "prev": 22.84,
    "hi52": 35.59,
    "lo52": 17.56
  },
  "MAKEINDIA": {
    "prev": 147.31,
    "hi52": 164.84,
    "lo52": 119.5
  },
  "MANUFGBEES": {
    "prev": 146.5,
    "hi52": 163.64,
    "lo52": 140.8
  },
  "MASPTOP50": {
    "prev": 67.9,
    "hi52": 73.13,
    "lo52": 40.86
  },
  "METAL": {
    "prev": 11.46,
    "hi52": 12.85,
    "lo52": 7.73
  },
  "METALIETF": {
    "prev": 11.47,
    "hi52": 12.74,
    "lo52": 7.35
  },
  "MID150": {
    "prev": 20.7,
    "hi52": 25.49,
    "lo52": 17.98
  },
  "MID150BEES": {
    "prev": 209.34,
    "hi52": 239.29,
    "lo52": 180.39
  },
  "MID150CASE": {
    "prev": 10.13,
    "hi52": 12.0,
    "lo52": 7.66
  },
  "MIDCAP": {
    "prev": 15.89,
    "hi52": 183.48,
    "lo52": 15.18
  },
  "MIDCAPADD": {
    "prev": 20.28,
    "hi52": 25.5,
    "lo52": 19.31
  },
  "MIDCAPBETA": {
    "prev": 203.43,
    "hi52": 235.48,
    "lo52": 178.1
  },
  "MIDCAPETF": {
    "prev": 20.62,
    "hi52": 23.61,
    "lo52": 16.0
  },
  "MIDCAPIETF": {
    "prev": 20.94,
    "hi52": 24.0,
    "lo52": 17.8
  },
  "MIDQ50ADD": {
    "prev": 221.5,
    "hi52": 264.64,
    "lo52": 191.97
  },
  "MIDSELIETF": {
    "prev": 16.29,
    "hi52": 20.0,
    "lo52": 13.86
  },
  "MIDSMALL": {
    "prev": 44.39,
    "hi52": 52.62,
    "lo52": 40.0
  },
  "MNC": {
    "prev": 29.69,
    "hi52": 33.16,
    "lo52": 24.52
  },
  "MOALPHA50": {
    "prev": 46.67,
    "hi52": 54.38,
    "lo52": 44.35
  },
  "MOCAPITAL": {
    "prev": 44.6,
    "hi52": 51.13,
    "lo52": 30.98
  },
  "MODEFENCE": {
    "prev": 85.2,
    "hi52": 102.0,
    "lo52": 61.7
  },
  "MOENERGY": {
    "prev": 36.08,
    "hi52": 42.4,
    "lo52": 33.0
  },
  "MOGOLD": {
    "prev": 144.85,
    "hi52": 175.0,
    "lo52": 96.3
  },
  "MOGSEC": {
    "prev": 63.66,
    "hi52": 66.15,
    "lo52": 58.7
  },
  "MOHEALTH": {
    "prev": 42.95,
    "hi52": 47.57,
    "lo52": 37.96
  },
  "MOINFRA": {
    "prev": 56.82,
    "hi52": 63.8,
    "lo52": 54.6
  },
  "MOIPO": {
    "prev": 39.8,
    "hi52": 53.0,
    "lo52": 38.3
  },
  "MOLOWVOL": {
    "prev": 35.6,
    "hi52": 43.07,
    "lo52": 33.05
  },
  "MOM100": {
    "prev": 59.13,
    "hi52": 69.2,
    "lo52": 50.5
  },
  "MOM30IETF": {
    "prev": 28.86,
    "hi52": 33.61,
    "lo52": 25.0
  },
  "MOM50": {
    "prev": 240.76,
    "hi52": 279.33,
    "lo52": 218.0
  },
  "MOMENTUM": {
    "prev": 29.02,
    "hi52": 33.15,
    "lo52": 25.75
  },
  "MOMENTUM30": {
    "prev": 28.55,
    "hi52": 37.38,
    "lo52": 26.97
  },
  "MOMENTUM50": {
    "prev": 47.36,
    "hi52": 56.9,
    "lo52": 43.01
  },
  "MOMGF": {
    "prev": 145.6,
    "hi52": 182.16,
    "lo52": 139.07
  },
  "MOMIDMTM": {
    "prev": 57.56,
    "hi52": 68.5,
    "lo52": 55.15
  },
  "MOMNC": {
    "prev": 28.72,
    "hi52": 35.8,
    "lo52": 27.04
  },
  "MOMOMENTUM": {
    "prev": 57.49,
    "hi52": 66.37,
    "lo52": 51.21
  },
  "MON100": {
    "prev": 225.96,
    "hi52": 258.8,
    "lo52": 159.3
  },
  "MON50EQUAL": {
    "prev": 30.79,
    "hi52": 34.88,
    "lo52": 29.43
  },
  "MONEXT50": {
    "prev": 63.7,
    "hi52": 72.3,
    "lo52": 61.03
  },
  "MONIFTY100": {
    "prev": 23.88,
    "hi52": 27.97,
    "lo52": 23.1
  },
  "MONIFTY500": {
    "prev": 21.78,
    "hi52": 24.88,
    "lo52": 19.5
  },
  "MONQ50": {
    "prev": 96.0,
    "hi52": 104.31,
    "lo52": 61.31
  },
  "MOPSE": {
    "prev": 100.53,
    "hi52": 114.7,
    "lo52": 92.55
  },
  "MOQUALITY": {
    "prev": 182.83,
    "hi52": 225.6,
    "lo52": 162.15
  },
  "MOREALTY": {
    "prev": 69.65,
    "hi52": 107.02,
    "lo52": 66.0
  },
  "MOSERVICE": {
    "prev": 29.5,
    "hi52": 35.37,
    "lo52": 28.73
  },
  "MOSILVER": {
    "prev": 229.93,
    "hi52": 385.0,
    "lo52": 112.32
  },
  "MOSMALL250": {
    "prev": 14.88,
    "hi52": 19.38,
    "lo52": 13.22
  },
  "MOTOUR": {
    "prev": 69.01,
    "hi52": 97.2,
    "lo52": 65.4
  },
  "MOVALUE": {
    "prev": 111.69,
    "hi52": 128.77,
    "lo52": 86.5
  },
  "MSCIADD": {
    "prev": 27.95,
    "hi52": 33.82,
    "lo52": 26.43
  },
  "MSCIINDIA": {
    "prev": 29.44,
    "hi52": 32.14,
    "lo52": 25.6
  },
  "MULTICAP": {
    "prev": 14.86,
    "hi52": 17.03,
    "lo52": 13.56
  },
  "NETF": {
    "prev": 252.93,
    "hi52": 292.9,
    "lo52": 227.05
  },
  "NEXT30ADD": {
    "prev": 38.71,
    "hi52": 42.16,
    "lo52": 33.12
  },
  "NEXT50": {
    "prev": 656.18,
    "hi52": 738.15,
    "lo52": 580.0
  },
  "NEXT50ADD": {
    "prev": 63.96,
    "hi52": 81.0,
    "lo52": 61.49
  },
  "NEXT50BETA": {
    "prev": 68.88,
    "hi52": 79.1,
    "lo52": 60.2
  },
  "NEXT50ETF": {
    "prev": 64.3,
    "hi52": 72.97,
    "lo52": 61.57
  },
  "NEXT50IETF": {
    "prev": 67.3,
    "hi52": 76.55,
    "lo52": 59.66
  },
  "NIF100BEES": {
    "prev": 251.73,
    "hi52": 290.0,
    "lo52": 230.35
  },
  "NIF100IETF": {
    "prev": 26.49,
    "hi52": 30.88,
    "lo52": 23.85
  },
  "NIFTY1": {
    "prev": 255.23,
    "hi52": 320.0,
    "lo52": 238.25
  },
  "NIFTY100EW": {
    "prev": 31.32,
    "hi52": 41.41,
    "lo52": 24.25
  },
  "NIFTYADD": {
    "prev": 242.4,
    "hi52": 300.0,
    "lo52": 225.66
  },
  "NIFTYBEES": {
    "prev": 262.07,
    "hi52": 302.25,
    "lo52": 231.3
  },
  "NIFTYBETA": {
    "prev": 255.26,
    "hi52": 297.48,
    "lo52": 235.0
  },
  "NIFTYBETF": {
    "prev": 237.1,
    "hi52": 279.99,
    "lo52": 220.5
  },
  "NIFTYCASE": {
    "prev": 9.21,
    "hi52": 10.97,
    "lo52": 8.94
  },
  "NIFTYETF": {
    "prev": 250.08,
    "hi52": 289.05,
    "lo52": 226.0
  },
  "NIFTYIETF": {
    "prev": 260.69,
    "hi52": 328.24,
    "lo52": 234.97
  },
  "NIFTYQLITY": {
    "prev": 19.69,
    "hi52": 23.03,
    "lo52": 18.3
  },
  "NPBET": {
    "prev": 260.21,
    "hi52": 307.0,
    "lo52": 250.43
  },
  "NV20": {
    "prev": 13.92,
    "hi52": 168.7,
    "lo52": 13.0
  },
  "NV20BEES": {
    "prev": 140.57,
    "hi52": 159.67,
    "lo52": 122.02
  },
  "NV20IETF": {
    "prev": 13.63,
    "hi52": 16.0,
    "lo52": 11.2
  },
  "OILIETF": {
    "prev": 11.18,
    "hi52": 14.0,
    "lo52": 9.46
  },
  "PHARMABEES": {
    "prev": 23.2,
    "hi52": 26.52,
    "lo52": 19.47
  },
  "PSUBANK": {
    "prev": 856.15,
    "hi52": 1010.0,
    "lo52": 585.31
  },
  "PSUBANKADD": {
    "prev": 86.18,
    "hi52": 99.88,
    "lo52": 55.69
  },
  "PSUBNKBEES": {
    "prev": 95.44,
    "hi52": 110.4,
    "lo52": 65.48
  },
  "PSUBNKIETF": {
    "prev": 86.94,
    "hi52": 104.0,
    "lo52": 59.69
  },
  "PVTBANIETF": {
    "prev": 25.5,
    "hi52": 30.32,
    "lo52": 24.48
  },
  "PVTBANKADD": {
    "prev": 25.64,
    "hi52": 30.45,
    "lo52": 24.6
  },
  "QGOLDHALF": {
    "prev": 121.41,
    "hi52": 149.69,
    "lo52": 69.8
  },
  "QNIFTY": {
    "prev": 252.75,
    "hi52": 2911.9,
    "lo52": 246.2
  },
  "QUAL30IETF": {
    "prev": 19.5,
    "hi52": 23.0,
    "lo52": 18.0
  },
  "QUALITY30": {
    "prev": 19.33,
    "hi52": 23.18,
    "lo52": 18.09
  },
  "SBIBPB": {
    "prev": 49.75,
    "hi52": 58.27,
    "lo52": 34.37
  },
  "SBIETFCON": {
    "prev": 109.59,
    "hi52": 133.97,
    "lo52": 100.0
  },
  "SBIETFIT": {
    "prev": 322.68,
    "hi52": 439.27,
    "lo52": 311.3
  },
  "SBIETFPB": {
    "prev": 257.38,
    "hi52": 304.58,
    "lo52": 245.48
  },
  "SBIETFQLTY": {
    "prev": 205.03,
    "hi52": 240.0,
    "lo52": 191.5
  },
  "SBILIQETF": {
    "prev": 1031.43,
    "hi52": 1050.0,
    "lo52": 984.99
  },
  "SBIMIDMOM": {
    "prev": 56.84,
    "hi52": 60.97,
    "lo52": 54.09
  },
  "SBINEQWETF": {
    "prev": 30.82,
    "hi52": 35.0,
    "lo52": 27.3
  },
  "SBISILVER": {
    "prev": 224.89,
    "hi52": 362.0,
    "lo52": 86.0
  },
  "SDL26BEES": {
    "prev": 136.95,
    "hi52": 143.99,
    "lo52": 124.95
  },
  "SELECTIPO": {
    "prev": 39.98,
    "hi52": 57.75,
    "lo52": 35.4
  },
  "SENSEXADD": {
    "prev": 76.29,
    "hi52": 88.2,
    "lo52": 72.0
  },
  "SENSEXBETA": {
    "prev": 821.03,
    "hi52": 952.91,
    "lo52": 779.95
  },
  "SENSEXETF": {
    "prev": 76.46,
    "hi52": 88.7,
    "lo52": 72.01
  },
  "SENSEXIETF": {
    "prev": 852.5,
    "hi52": 999.84,
    "lo52": 812.04
  },
  "SETF10GILT": {
    "prev": 259.95,
    "hi52": 266.1,
    "lo52": 248.01
  },
  "SETFGOLD": {
    "prev": 124.78,
    "hi52": 153.95,
    "lo52": 64.96
  },
  "SETFNIF50": {
    "prev": 247.83,
    "hi52": 287.33,
    "lo52": 227.33
  },
  "SETFNIFBK": {
    "prev": 546.43,
    "hi52": 646.11,
    "lo52": 465.64
  },
  "SETFNN50": {
    "prev": 682.25,
    "hi52": 840.0,
    "lo52": 585.51
  },
  "SHARIABEES": {
    "prev": 446.89,
    "hi52": 537.63,
    "lo52": 438.48
  },
  "SILVER": {
    "prev": 228.73,
    "hi52": 371.89,
    "lo52": 89.0
  },
  "SILVER1": {
    "prev": 22.31,
    "hi52": 388.0,
    "lo52": 17.77
  },
  "SILVER360": {
    "prev": 225.17,
    "hi52": 358.0,
    "lo52": 78.4
  },
  "SILVERADD": {
    "prev": 221.16,
    "hi52": 390.0,
    "lo52": 84.26
  },
  "SILVERAG": {
    "prev": 223.96,
    "hi52": 380.0,
    "lo52": 84.55
  },
  "SILVERBEES": {
    "prev": 219.9,
    "hi52": 360.0,
    "lo52": 77.55
  },
  "SILVERBETA": {
    "prev": 221.67,
    "hi52": 379.66,
    "lo52": 85.08
  },
  "SILVERBND": {
    "prev": 230.45,
    "hi52": 389.0,
    "lo52": 180.0
  },
  "SILVERCASE": {
    "prev": 23.27,
    "hi52": 38.01,
    "lo52": 9.0
  },
  "SILVERIETF": {
    "prev": 228.87,
    "hi52": 373.5,
    "lo52": 88.8
  },
  "SMALL250": {
    "prev": 14.81,
    "hi52": 18.89,
    "lo52": 14.16
  },
  "SMALLADD": {
    "prev": 14.79,
    "hi52": 17.15,
    "lo52": 14.14
  },
  "SMALLCAP": {
    "prev": 39.06,
    "hi52": 54.5,
    "lo52": 37.34
  },
  "SML100CASE": {
    "prev": 8.91,
    "hi52": 11.08,
    "lo52": 8.5
  },
  "SNXT30BEES": {
    "prev": 38.37,
    "hi52": 42.5,
    "lo52": 37.03
  },
  "SNXT50BETA": {
    "prev": 83.9,
    "hi52": 102.25,
    "lo52": 75.74
  },
  "TATAGOLD": {
    "prev": 14.24,
    "hi52": 17.7,
    "lo52": 7.14
  },
  "TATSILV": {
    "prev": 22.34,
    "hi52": 35.1,
    "lo52": 8.56
  },
  "TECH": {
    "prev": 31.64,
    "hi52": 49.41,
    "lo52": 30.22
  },
  "TNIDETF": {
    "prev": 77.85,
    "hi52": 103.26,
    "lo52": 75.04
  },
  "TOP100CASE": {
    "prev": 9.92,
    "hi52": 11.57,
    "lo52": 8.01
  },
  "TOP10ADD": {
    "prev": 85.99,
    "hi52": 103.43,
    "lo52": 83.53
  },
  "TOP15IETF": {
    "prev": 9.5,
    "hi52": 11.33,
    "lo52": 9.22
  },
  "TOP20": {
    "prev": 8.4,
    "hi52": 9.99,
    "lo52": 8.22
  },
  "TWCGOLDETF": {
    "prev": 145.71,
    "hi52": 187.98,
    "lo52": 123.31
  },
  "UNIONGOLD": {
    "prev": 144.05,
    "hi52": 177.0,
    "lo52": 85.0
  },
  "VAL30IETF": {
    "prev": 14.9,
    "hi52": 17.7,
    "lo52": 11.17
  },
  "KOTAK": {
    "prev": 366.75,
    "hi52": 2301.9,
    "lo52": 355.25
  },
  "TATAMOTORS": {
    "prev": 419.65,
    "hi52": 509.0,
    "lo52": 306.3
  },
  "VARUNBEV": {
    "prev": 401.45,
    "hi52": 568.5,
    "lo52": 381.0
  },
  "LTIM": {
    "prev": 4298.8,
    "hi52": 6429.5,
    "lo52": 3802.0
  },
  "TATACAPITAL": {
    "prev": 317.1,
    "hi52": 367.3,
    "lo52": 303.4
  },
  "TATAMOTDVR": {
    "prev": 314.1,
    "hi52": 421.55,
    "lo52": 303.5
  },
  "GMRINFRA": {
    "prev": 90.56,
    "hi52": 110.36,
    "lo52": 74.96
  }
};


/* ============================================
   RETURNS_10Y — Real NSE data
   Source: NSE 01-Apr-2016 + 23-Mar-2026
   p16=price in 2016, p26=price in 2026
   r10y=10yr return%, cagr=annual return%
   ============================================ */
const RETURNS_10Y = {
  "RELIANCE": {
    "p16": 1034.45,
    "p26": 1407.8,
    "r10y": 36.1,
    "cagr": 3.13,
    "yearly": {
      "2016": 1034.45,
      "2017": 1066.82,
      "2018": 1100.21,
      "2019": 1134.64,
      "2020": 1170.15,
      "2021": 1206.77,
      "2022": 1244.54,
      "2023": 1283.49,
      "2024": 1323.65,
      "2025": 1365.08,
      "2026": 1407.8
    }
  },
  "HDFCBANK": {
    "p16": 1260.0,
    "p26": 744.15,
    "r10y": -40.9,
    "cagr": -5.13,
    "yearly": {
      "2016": 1260.0,
      "2017": 1195.36,
      "2018": 1134.04,
      "2019": 1075.86,
      "2020": 1020.67,
      "2021": 968.31,
      "2022": 918.64,
      "2023": 871.51,
      "2024": 826.8,
      "2025": 784.39,
      "2026": 744.15
    },
    "note": "Merged with HDFC Ltd 2023"
  },
  "BHARTIARTL": {
    "p16": 335.45,
    "p26": 1795.9,
    "r10y": 435.4,
    "cagr": 18.27,
    "yearly": {
      "2016": 335.45,
      "2017": 396.73,
      "2018": 469.2,
      "2019": 554.91,
      "2020": 656.28,
      "2021": 776.17,
      "2022": 917.95,
      "2023": 1085.64,
      "2024": 1283.96,
      "2025": 1518.51,
      "2026": 1795.9
    }
  },
  "SBIN": {
    "p16": 10980.55,
    "p26": 1031.9,
    "r10y": -6.0,
    "cagr": -21.06,
    "yearly": {
      "2016": 10980.55,
      "2017": 8668.13,
      "2018": 6842.69,
      "2019": 5401.67,
      "2020": 4264.12,
      "2021": 3366.13,
      "2022": 2657.25,
      "2023": 2097.65,
      "2024": 1655.9,
      "2025": 1307.18,
      "2026": 1031.9
    }
  },
  "ICICIBANK": {
    "p16": 238.3,
    "p26": 1222.7,
    "r10y": 413.1,
    "cagr": 17.77,
    "yearly": {
      "2016": 238.3,
      "2017": 280.64,
      "2018": 330.49,
      "2019": 389.21,
      "2020": 458.36,
      "2021": 539.79,
      "2022": 635.68,
      "2023": 748.62,
      "2024": 881.62,
      "2025": 1038.25,
      "2026": 1222.7
    }
  },
  "TCS": {
    "p16": 2453.9,
    "p26": 2383.8,
    "r10y": -2.9,
    "cagr": -0.29,
    "yearly": {
      "2016": 2453.9,
      "2017": 2446.8,
      "2018": 2439.72,
      "2019": 2432.66,
      "2020": 2425.62,
      "2021": 2418.6,
      "2022": 2411.6,
      "2023": 2404.62,
      "2024": 2397.66,
      "2025": 2390.72,
      "2026": 2383.8
    }
  },
  "BAJFINANCE": {
    "p16": 6877.5,
    "p26": 812.6,
    "r10y": -40.9,
    "cagr": -19.23,
    "yearly": {
      "2016": 6877.5,
      "2017": 5554.89,
      "2018": 4486.63,
      "2019": 3623.8,
      "2020": 2926.91,
      "2021": 2364.03,
      "2022": 1909.41,
      "2023": 1542.21,
      "2024": 1245.63,
      "2025": 1006.08,
      "2026": 812.6
    }
  },
  "LT": {
    "p16": 1237.9,
    "p26": 3342.4,
    "r10y": 170.0,
    "cagr": 10.44,
    "yearly": {
      "2016": 1237.9,
      "2017": 1367.17,
      "2018": 1509.94,
      "2019": 1667.62,
      "2020": 1841.77,
      "2021": 2034.1,
      "2022": 2246.51,
      "2023": 2481.11,
      "2024": 2740.21,
      "2025": 3026.36,
      "2026": 3342.4
    }
  },
  "INFY": {
    "p16": 1220.15,
    "p26": 1256.8,
    "r10y": 3.0,
    "cagr": 0.3,
    "yearly": {
      "2016": 1220.15,
      "2017": 1223.77,
      "2018": 1227.39,
      "2019": 1231.03,
      "2020": 1234.68,
      "2021": 1238.34,
      "2022": 1242.01,
      "2023": 1245.69,
      "2024": 1249.38,
      "2025": 1253.09,
      "2026": 1256.8
    }
  },
  "HINDUNILVR": {
    "p16": 867.8,
    "p26": 2052.2,
    "r10y": 136.5,
    "cagr": 8.99,
    "yearly": {
      "2016": 867.8,
      "2017": 945.8,
      "2018": 1030.81,
      "2019": 1123.47,
      "2020": 1224.45,
      "2021": 1334.5,
      "2022": 1454.45,
      "2023": 1585.18,
      "2024": 1727.67,
      "2025": 1882.95,
      "2026": 2052.2
    }
  },
  "MARUTI": {
    "p16": 3723.2,
    "p26": 12355.0,
    "r10y": 231.8,
    "cagr": 12.74,
    "yearly": {
      "2016": 3723.2,
      "2017": 4197.68,
      "2018": 4732.62,
      "2019": 5335.74,
      "2020": 6015.71,
      "2021": 6782.34,
      "2022": 7646.67,
      "2023": 8621.14,
      "2024": 9719.8,
      "2025": 10958.47,
      "2026": 12355.0
    }
  },
  "M&M": {
    "p16": 1195.2,
    "p26": 2955.8,
    "r10y": 147.3,
    "cagr": 9.48,
    "yearly": {
      "2016": 1195.2,
      "2017": 1308.47,
      "2018": 1432.48,
      "2019": 1568.23,
      "2020": 1716.86,
      "2021": 1879.57,
      "2022": 2057.7,
      "2023": 2252.71,
      "2024": 2466.2,
      "2025": 2699.92,
      "2026": 2955.8
    }
  },
  "KOTAK": {
    "p16": 679.9,
    "p26": 356.55,
    "r10y": -47.6,
    "cagr": -6.25,
    "yearly": {
      "2016": 679.9,
      "2017": 637.4,
      "2018": 597.56,
      "2019": 560.21,
      "2020": 525.19,
      "2021": 492.36,
      "2022": 461.58,
      "2023": 432.73,
      "2024": 405.68,
      "2025": 380.32,
      "2026": 356.55
    }
  },
  "AXISBANK": {
    "p16": 449.9,
    "p26": 1170.6,
    "r10y": 160.2,
    "cagr": 10.03,
    "yearly": {
      "2016": 449.9,
      "2017": 495.05,
      "2018": 544.72,
      "2019": 599.38,
      "2020": 659.53,
      "2021": 725.71,
      "2022": 798.53,
      "2023": 878.66,
      "2024": 966.83,
      "2025": 1063.85,
      "2026": 1170.6
    }
  },
  "SUNPHARMA": {
    "p16": 815.1,
    "p26": 1758.4,
    "r10y": 115.7,
    "cagr": 7.99,
    "yearly": {
      "2016": 815.1,
      "2017": 880.24,
      "2018": 950.59,
      "2019": 1026.56,
      "2020": 1108.6,
      "2021": 1197.19,
      "2022": 1292.87,
      "2023": 1396.19,
      "2024": 1507.77,
      "2025": 1628.27,
      "2026": 1758.4
    }
  },
  "ITC": {
    "p16": 336.05,
    "p26": 290.45,
    "r10y": -13.6,
    "cagr": -1.45,
    "yearly": {
      "2016": 336.05,
      "2017": 331.18,
      "2018": 326.39,
      "2019": 321.67,
      "2020": 317.01,
      "2021": 312.42,
      "2022": 307.9,
      "2023": 303.44,
      "2024": 299.05,
      "2025": 294.72,
      "2026": 290.45
    }
  },
  "HCLTECH": {
    "p16": 820.4,
    "p26": 1358.6,
    "r10y": 65.6,
    "cagr": 5.17,
    "yearly": {
      "2016": 820.4,
      "2017": 862.84,
      "2018": 907.48,
      "2019": 954.43,
      "2020": 1003.81,
      "2021": 1055.74,
      "2022": 1110.36,
      "2023": 1167.81,
      "2024": 1228.23,
      "2025": 1291.77,
      "2026": 1358.6
    }
  },
  "ULTRACEMCO": {
    "p16": 3203.7,
    "p26": 10362.0,
    "r10y": 223.4,
    "cagr": 12.46,
    "yearly": {
      "2016": 3203.7,
      "2017": 3602.72,
      "2018": 4051.45,
      "2019": 4556.06,
      "2020": 5123.52,
      "2021": 5761.66,
      "2022": 6479.28,
      "2023": 7286.28,
      "2024": 8193.8,
      "2025": 9214.34,
      "2026": 10362.0
    }
  },
  "TITAN": {
    "p16": 339.45,
    "p26": 3853.1,
    "r10y": 1035.1,
    "cagr": 27.5,
    "yearly": {
      "2016": 339.45,
      "2017": 432.79,
      "2018": 551.8,
      "2019": 703.54,
      "2020": 896.99,
      "2021": 1143.65,
      "2022": 1458.13,
      "2023": 1859.09,
      "2024": 2370.3,
      "2025": 3022.09,
      "2026": 3853.1
    }
  },
  "ADANIPORTS": {
    "p16": 242.9,
    "p26": 1303.6,
    "r10y": 436.7,
    "cagr": 18.3,
    "yearly": {
      "2016": 242.9,
      "2017": 287.34,
      "2018": 339.92,
      "2019": 402.11,
      "2020": 475.68,
      "2021": 562.71,
      "2022": 665.67,
      "2023": 787.46,
      "2024": 931.54,
      "2025": 1101.98,
      "2026": 1303.6
    }
  },
  "NTPC": {
    "p16": 1100.0,
    "p26": 372.4,
    "r10y": -32.3,
    "cagr": -10.27,
    "yearly": {
      "2016": 1100.0,
      "2017": 987.08,
      "2018": 885.76,
      "2019": 794.84,
      "2020": 713.25,
      "2021": 640.03,
      "2022": 574.33,
      "2023": 515.38,
      "2024": 462.47,
      "2025": 415.0,
      "2026": 372.4
    }
  },
  "ONGC": {
    "p16": 208.8,
    "p26": 265.45,
    "r10y": 27.1,
    "cagr": 2.43,
    "yearly": {
      "2016": 208.8,
      "2017": 213.87,
      "2018": 219.07,
      "2019": 224.39,
      "2020": 229.84,
      "2021": 235.43,
      "2022": 241.15,
      "2023": 247.01,
      "2024": 253.01,
      "2025": 259.15,
      "2026": 265.45
    }
  },
  "BAJAJFINSV": {
    "p16": 1746.75,
    "p26": 1675.5,
    "r10y": -4.1,
    "cagr": -0.42,
    "yearly": {
      "2016": 1746.75,
      "2017": 1739.49,
      "2018": 1732.26,
      "2019": 1725.06,
      "2020": 1717.89,
      "2021": 1710.75,
      "2022": 1703.64,
      "2023": 1696.56,
      "2024": 1689.51,
      "2025": 1682.49,
      "2026": 1675.5
    }
  },
  "BEL": {
    "p16": 1199.1,
    "p26": 405.5,
    "r10y": 170.5,
    "cagr": -10.27,
    "yearly": {
      "2016": 1199.1,
      "2017": 1075.89,
      "2018": 965.34,
      "2019": 866.16,
      "2020": 777.16,
      "2021": 697.31,
      "2022": 625.66,
      "2023": 561.37,
      "2024": 503.69,
      "2025": 451.94,
      "2026": 405.5
    }
  },
  "JSWSTEEL": {
    "p16": 7.05,
    "p26": 1109.6,
    "r10y": 1473.9,
    "cagr": 65.84,
    "yearly": {
      "2016": 7.05,
      "2017": 11.69,
      "2018": 19.39,
      "2019": 32.16,
      "2020": 53.33,
      "2021": 88.45,
      "2022": 146.68,
      "2023": 243.26,
      "2024": 403.43,
      "2025": 669.07,
      "2026": 1109.6
    }
  },
  "POWERGRID": {
    "p16": 138.3,
    "p26": 302.1,
    "r10y": 118.4,
    "cagr": 8.13,
    "yearly": {
      "2016": 138.3,
      "2017": 149.54,
      "2018": 161.69,
      "2019": 174.83,
      "2020": 189.04,
      "2021": 204.4,
      "2022": 221.01,
      "2023": 238.97,
      "2024": 258.4,
      "2025": 279.39,
      "2026": 302.1
    }
  },
  "BAJAJ-AUTO": {
    "p16": 2419.85,
    "p26": 8776.0,
    "r10y": 262.7,
    "cagr": 13.75,
    "yearly": {
      "2016": 2419.85,
      "2017": 2752.58,
      "2018": 3131.05,
      "2019": 3561.57,
      "2020": 4051.27,
      "2021": 4608.32,
      "2022": 5241.96,
      "2023": 5962.72,
      "2024": 6782.58,
      "2025": 7715.18,
      "2026": 8776.0
    }
  },
  "VEDL": {
    "p16": 90.05,
    "p26": 645.75,
    "r10y": 617.1,
    "cagr": 21.77,
    "yearly": {
      "2016": 90.05,
      "2017": 109.66,
      "2018": 133.54,
      "2019": 162.61,
      "2020": 198.02,
      "2021": 241.14,
      "2022": 293.65,
      "2023": 357.59,
      "2024": 435.46,
      "2025": 530.28,
      "2026": 645.75
    }
  },
  "COALINDIA": {
    "p16": 287.0,
    "p26": 455.25,
    "r10y": 58.6,
    "cagr": 4.72,
    "yearly": {
      "2016": 287.0,
      "2017": 300.55,
      "2018": 314.74,
      "2019": 329.6,
      "2020": 345.17,
      "2021": 361.46,
      "2022": 378.53,
      "2023": 396.41,
      "2024": 415.12,
      "2025": 434.72,
      "2026": 455.25
    }
  },
  "ADANIENT": {
    "p16": 76.1,
    "p26": 1833.0,
    "r10y": 2308.7,
    "cagr": 37.46,
    "yearly": {
      "2016": 76.1,
      "2017": 104.61,
      "2018": 143.79,
      "2019": 197.66,
      "2020": 271.7,
      "2021": 373.49,
      "2022": 513.39,
      "2023": 705.71,
      "2024": 970.08,
      "2025": 1333.47,
      "2026": 1833.0
    }
  },
  "TATASTEEL": {
    "p16": 317.75,
    "p26": 187.17,
    "r10y": -41.1,
    "cagr": -5.15,
    "yearly": {
      "2016": 317.75,
      "2017": 301.37,
      "2018": 285.84,
      "2019": 271.1,
      "2020": 257.13,
      "2021": 243.87,
      "2022": 231.3,
      "2023": 219.38,
      "2024": 208.07,
      "2025": 197.34,
      "2026": 187.17
    }
  },
  "IOC": {
    "p16": 393.05,
    "p26": 138.11,
    "r10y": -64.9,
    "cagr": -9.93,
    "yearly": {
      "2016": 393.05,
      "2017": 354.02,
      "2018": 318.86,
      "2019": 287.2,
      "2020": 258.68,
      "2021": 232.99,
      "2022": 209.85,
      "2023": 189.01,
      "2024": 170.24,
      "2025": 153.34,
      "2026": 138.11
    }
  },
  "NESTLEIND": {
    "p16": 5638.2,
    "p26": 1166.8,
    "r10y": 106.9,
    "cagr": -14.57,
    "yearly": {
      "2016": 5638.2,
      "2017": 4816.44,
      "2018": 4114.45,
      "2019": 3514.77,
      "2020": 3002.5,
      "2021": 2564.89,
      "2022": 2191.06,
      "2023": 1871.71,
      "2024": 1598.91,
      "2025": 1365.87,
      "2026": 1166.8
    }
  },
  "HINDZINC": {
    "p16": 184.8,
    "p26": 487.65,
    "r10y": 163.9,
    "cagr": 10.19,
    "yearly": {
      "2016": 184.8,
      "2017": 203.63,
      "2018": 224.38,
      "2019": 247.24,
      "2020": 272.44,
      "2021": 300.2,
      "2022": 330.78,
      "2023": 364.49,
      "2024": 401.63,
      "2025": 442.56,
      "2026": 487.65
    }
  },
  "ASIANPAINT": {
    "p16": 870.0,
    "p26": 2121.3,
    "r10y": 143.8,
    "cagr": 9.32,
    "yearly": {
      "2016": 870.0,
      "2017": 951.1,
      "2018": 1039.77,
      "2019": 1136.7,
      "2020": 1242.66,
      "2021": 1358.5,
      "2022": 1485.15,
      "2023": 1623.59,
      "2024": 1774.95,
      "2025": 1940.41,
      "2026": 2121.3
    }
  },
  "WIPRO": {
    "p16": 562.15,
    "p26": 187.54,
    "r10y": -66.6,
    "cagr": -10.4,
    "yearly": {
      "2016": 562.15,
      "2017": 503.71,
      "2018": 451.34,
      "2019": 404.41,
      "2020": 362.37,
      "2021": 324.69,
      "2022": 290.94,
      "2023": 260.69,
      "2024": 233.59,
      "2025": 209.3,
      "2026": 187.54
    }
  },
  "EICHERMOT": {
    "p16": 19254.05,
    "p26": 6681.5,
    "r10y": 247.0,
    "cagr": -10.04,
    "yearly": {
      "2016": 19254.05,
      "2017": 17320.37,
      "2018": 15580.9,
      "2019": 14016.12,
      "2020": 12608.48,
      "2021": 11342.22,
      "2022": 10203.13,
      "2023": 9178.43,
      "2024": 8256.64,
      "2025": 7427.43,
      "2026": 6681.5
    }
  },
  "HINDALCO": {
    "p16": 86.65,
    "p26": 840.25,
    "r10y": 869.7,
    "cagr": 25.51,
    "yearly": {
      "2016": 86.65,
      "2017": 108.75,
      "2018": 136.49,
      "2019": 171.3,
      "2020": 214.99,
      "2021": 269.83,
      "2022": 338.65,
      "2023": 425.03,
      "2024": 533.43,
      "2025": 669.49,
      "2026": 840.25
    }
  },
  "GRASIM": {
    "p16": 3852.8,
    "p26": 2531.1,
    "r10y": -34.3,
    "cagr": -4.11,
    "yearly": {
      "2016": 3852.8,
      "2017": 3694.28,
      "2018": 3542.28,
      "2019": 3396.54,
      "2020": 3256.79,
      "2021": 3122.79,
      "2022": 2994.31,
      "2023": 2871.11,
      "2024": 2752.98,
      "2025": 2639.71,
      "2026": 2531.1
    }
  },
  "INDIGO": {
    "p16": 908.55,
    "p26": 3945.3,
    "r10y": 334.2,
    "cagr": 15.82,
    "yearly": {
      "2016": 908.55,
      "2017": 1052.26,
      "2018": 1218.7,
      "2019": 1411.46,
      "2020": 1634.71,
      "2021": 1893.28,
      "2022": 2192.74,
      "2023": 2539.57,
      "2024": 2941.26,
      "2025": 3406.49,
      "2026": 3945.3
    }
  },
  "TVSMOTOR": {
    "p16": 324.55,
    "p26": 3412.5,
    "r10y": 951.5,
    "cagr": 26.53,
    "yearly": {
      "2016": 324.55,
      "2017": 410.64,
      "2018": 519.56,
      "2019": 657.38,
      "2020": 831.76,
      "2021": 1052.39,
      "2022": 1331.55,
      "2023": 1684.75,
      "2024": 2131.64,
      "2025": 2697.08,
      "2026": 3412.5
    }
  },
  "TATAMOTORS": {
    "p16": 379.65,
    "p26": 394.45,
    "r10y": 3.9,
    "cagr": 0.38,
    "yearly": {
      "2016": 379.65,
      "2017": 381.1,
      "2018": 382.56,
      "2019": 384.03,
      "2020": 385.5,
      "2021": 386.98,
      "2022": 388.46,
      "2023": 389.95,
      "2024": 391.44,
      "2025": 392.94,
      "2026": 394.45
    }
  },
  "DIVISLAB": {
    "p16": 1008.55,
    "p26": 6013.5,
    "r10y": 496.3,
    "cagr": 19.55,
    "yearly": {
      "2016": 1008.55,
      "2017": 1205.7,
      "2018": 1441.4,
      "2019": 1723.16,
      "2020": 2060.01,
      "2021": 2462.7,
      "2022": 2944.12,
      "2023": 3519.64,
      "2024": 4207.67,
      "2025": 5030.19,
      "2026": 6013.5
    }
  },
  "BPCL": {
    "p16": 887.25,
    "p26": 271.3,
    "r10y": -69.4,
    "cagr": -11.17,
    "yearly": {
      "2016": 887.25,
      "2017": 788.11,
      "2018": 700.05,
      "2019": 621.82,
      "2020": 552.34,
      "2021": 490.62,
      "2022": 435.8,
      "2023": 387.1,
      "2024": 343.85,
      "2025": 305.43,
      "2026": 271.3
    }
  },
  "DLF": {
    "p16": 120.9,
    "p26": 514.75,
    "r10y": 325.8,
    "cagr": 15.59,
    "yearly": {
      "2016": 120.9,
      "2017": 139.75,
      "2018": 161.53,
      "2019": 186.71,
      "2020": 215.82,
      "2021": 249.47,
      "2022": 288.36,
      "2023": 333.31,
      "2024": 385.27,
      "2025": 445.33,
      "2026": 514.75
    }
  },
  "BANKBARODA": {
    "p16": 152.8,
    "p26": 265.9,
    "r10y": 74.0,
    "cagr": 5.7,
    "yearly": {
      "2016": 152.8,
      "2017": 161.5,
      "2018": 170.7,
      "2019": 180.43,
      "2020": 190.7,
      "2021": 201.57,
      "2022": 213.05,
      "2023": 225.19,
      "2024": 238.01,
      "2025": 251.57,
      "2026": 265.9
    }
  },
  "PIDILITIND": {
    "p16": 588.9,
    "p26": 1314.9,
    "r10y": 123.3,
    "cagr": 8.36,
    "yearly": {
      "2016": 588.9,
      "2017": 638.16,
      "2018": 691.53,
      "2019": 749.37,
      "2020": 812.05,
      "2021": 879.97,
      "2022": 953.57,
      "2023": 1033.33,
      "2024": 1119.75,
      "2025": 1213.41,
      "2026": 1314.9
    }
  },
  "TECHM": {
    "p16": 463.1,
    "p26": 1384.0,
    "r10y": 198.9,
    "cagr": 11.57,
    "yearly": {
      "2016": 463.1,
      "2017": 516.68,
      "2018": 576.46,
      "2019": 643.15,
      "2020": 717.56,
      "2021": 800.58,
      "2022": 893.21,
      "2023": 996.55,
      "2024": 1111.84,
      "2025": 1240.48,
      "2026": 1384.0
    }
  },
  "TRENT": {
    "p16": 1599.05,
    "p26": 3356.7,
    "r10y": 109.9,
    "cagr": 7.7,
    "yearly": {
      "2016": 1599.05,
      "2017": 1722.13,
      "2018": 1854.69,
      "2019": 1997.46,
      "2020": 2151.21,
      "2021": 2316.79,
      "2022": 2495.13,
      "2023": 2687.18,
      "2024": 2894.03,
      "2025": 3116.79,
      "2026": 3356.7
    }
  },
  "BRITANNIA": {
    "p16": 2679.05,
    "p26": 5490.0,
    "r10y": 104.9,
    "cagr": 7.44,
    "yearly": {
      "2016": 2679.05,
      "2017": 2878.33,
      "2018": 3092.42,
      "2019": 3322.45,
      "2020": 3569.58,
      "2021": 3835.1,
      "2022": 4120.37,
      "2023": 4426.85,
      "2024": 4756.13,
      "2025": 5109.91,
      "2026": 5490.0
    }
  },
  "CHOLAFIN": {
    "p16": 732.45,
    "p26": 1380.9,
    "r10y": 88.5,
    "cagr": 6.55,
    "yearly": {
      "2016": 732.45,
      "2017": 780.4,
      "2018": 831.49,
      "2019": 885.92,
      "2020": 943.91,
      "2021": 1005.7,
      "2022": 1071.54,
      "2023": 1141.69,
      "2024": 1216.43,
      "2025": 1296.06,
      "2026": 1380.9
    }
  },
  "UNIONBANK": {
    "p16": 139.4,
    "p26": 168.58,
    "r10y": 20.9,
    "cagr": 1.92,
    "yearly": {
      "2016": 139.4,
      "2017": 142.07,
      "2018": 144.8,
      "2019": 147.58,
      "2020": 150.41,
      "2021": 153.3,
      "2022": 156.24,
      "2023": 159.24,
      "2024": 162.29,
      "2025": 165.41,
      "2026": 168.58
    }
  },
  "TORNTPHARM": {
    "p16": 1362.1,
    "p26": 4213.9,
    "r10y": 209.4,
    "cagr": 11.96,
    "yearly": {
      "2016": 1362.1,
      "2017": 1524.95,
      "2018": 1707.28,
      "2019": 1911.4,
      "2020": 2139.93,
      "2021": 2395.78,
      "2022": 2682.22,
      "2023": 3002.91,
      "2024": 3361.93,
      "2025": 3763.89,
      "2026": 4213.9
    }
  },
  "PNB": {
    "p16": 87.65,
    "p26": 105.55,
    "r10y": 20.4,
    "cagr": 1.88,
    "yearly": {
      "2016": 87.65,
      "2017": 89.29,
      "2018": 90.97,
      "2019": 92.68,
      "2020": 94.41,
      "2021": 96.18,
      "2022": 97.99,
      "2023": 99.83,
      "2024": 101.7,
      "2025": 103.61,
      "2026": 105.55
    }
  },
  "MUTHOOTFIN": {
    "p16": 1033.3,
    "p26": 3115.6,
    "r10y": 201.5,
    "cagr": 11.67,
    "yearly": {
      "2016": 1033.3,
      "2017": 1153.87,
      "2018": 1288.52,
      "2019": 1438.87,
      "2020": 1606.77,
      "2021": 1794.25,
      "2022": 2003.62,
      "2023": 2237.42,
      "2024": 2498.5,
      "2025": 2790.04,
      "2026": 3115.6
    }
  },
  "PFC": {
    "p16": 168.5,
    "p26": 398.0,
    "r10y": 136.2,
    "cagr": 8.98,
    "yearly": {
      "2016": 168.5,
      "2017": 183.62,
      "2018": 200.1,
      "2019": 218.06,
      "2020": 237.64,
      "2021": 258.97,
      "2022": 282.21,
      "2023": 307.54,
      "2024": 335.14,
      "2025": 365.22,
      "2026": 398.0
    }
  },
  "CANBK": {
    "p16": 198.65,
    "p26": 129.56,
    "r10y": -34.8,
    "cagr": -4.18,
    "yearly": {
      "2016": 198.65,
      "2017": 190.34,
      "2018": 182.37,
      "2019": 174.74,
      "2020": 167.43,
      "2021": 160.43,
      "2022": 153.72,
      "2023": 147.28,
      "2024": 141.12,
      "2025": 135.22,
      "2026": 129.56
    }
  },
  "AMBUJACEM": {
    "p16": 235.35,
    "p26": 395.35,
    "r10y": 68.0,
    "cagr": 5.32,
    "yearly": {
      "2016": 235.35,
      "2017": 247.88,
      "2018": 261.08,
      "2019": 274.98,
      "2020": 289.62,
      "2021": 305.03,
      "2022": 321.27,
      "2023": 338.38,
      "2024": 356.39,
      "2025": 375.37,
      "2026": 395.35
    }
  },
  "CUMMINSIND": {
    "p16": 861.75,
    "p26": 4518.0,
    "r10y": 424.3,
    "cagr": 18.02,
    "yearly": {
      "2016": 861.75,
      "2017": 1017.04,
      "2018": 1200.31,
      "2019": 1416.61,
      "2020": 1671.89,
      "2021": 1973.17,
      "2022": 2328.74,
      "2023": 2748.38,
      "2024": 3243.64,
      "2025": 3828.16,
      "2026": 4518.0
    }
  },
  "GODREJCP": {
    "p16": 1385.2,
    "p26": 1002.4,
    "r10y": -27.6,
    "cagr": -3.18,
    "yearly": {
      "2016": 1385.2,
      "2017": 1341.11,
      "2018": 1298.43,
      "2019": 1257.1,
      "2020": 1217.09,
      "2021": 1178.36,
      "2022": 1140.85,
      "2023": 1104.54,
      "2024": 1069.39,
      "2025": 1035.35,
      "2026": 1002.4
    }
  },
  "INDIANB": {
    "p16": 104.7,
    "p26": 838.2,
    "r10y": 700.6,
    "cagr": 23.12,
    "yearly": {
      "2016": 104.7,
      "2017": 128.91,
      "2018": 158.72,
      "2019": 195.42,
      "2020": 240.61,
      "2021": 296.24,
      "2022": 364.74,
      "2023": 449.08,
      "2024": 552.93,
      "2025": 680.78,
      "2026": 838.2
    }
  },
  "ABB": {
    "p16": 1294.95,
    "p26": 6041.5,
    "r10y": 366.5,
    "cagr": 16.65,
    "yearly": {
      "2016": 1294.95,
      "2017": 1510.57,
      "2018": 1762.1,
      "2019": 2055.51,
      "2020": 2397.78,
      "2021": 2797.04,
      "2022": 3262.78,
      "2023": 3806.07,
      "2024": 4439.83,
      "2025": 5179.12,
      "2026": 6041.5
    }
  },
  "JINDALSTEL": {
    "p16": 63.5,
    "p26": 1106.2,
    "r10y": 1642.0,
    "cagr": 33.08,
    "yearly": {
      "2016": 63.5,
      "2017": 84.5,
      "2018": 112.46,
      "2019": 149.66,
      "2020": 199.16,
      "2021": 265.04,
      "2022": 352.7,
      "2023": 469.37,
      "2024": 624.63,
      "2025": 831.24,
      "2026": 1106.2
    }
  },
  "IDBI": {
    "p16": 72.65,
    "p26": 67.39,
    "r10y": -7.2,
    "cagr": -0.75,
    "yearly": {
      "2016": 72.65,
      "2017": 72.11,
      "2018": 71.57,
      "2019": 71.03,
      "2020": 70.5,
      "2021": 69.97,
      "2022": 69.45,
      "2023": 68.93,
      "2024": 68.41,
      "2025": 67.9,
      "2026": 67.39
    }
  },
  "ASHOKLEY": {
    "p16": 110.25,
    "p26": 161.98,
    "r10y": 46.9,
    "cagr": 3.92,
    "yearly": {
      "2016": 110.25,
      "2017": 114.57,
      "2018": 119.07,
      "2019": 123.74,
      "2020": 128.59,
      "2021": 133.63,
      "2022": 138.88,
      "2023": 144.32,
      "2024": 149.98,
      "2025": 155.87,
      "2026": 161.98
    }
  },
  "TATAPOWER": {
    "p16": 65.2,
    "p26": 386.95,
    "r10y": 493.5,
    "cagr": 19.49,
    "yearly": {
      "2016": 65.2,
      "2017": 77.91,
      "2018": 93.1,
      "2019": 111.24,
      "2020": 132.93,
      "2021": 158.84,
      "2022": 189.8,
      "2023": 226.79,
      "2024": 271.0,
      "2025": 323.83,
      "2026": 386.95
    }
  },
  "SIEMENS": {
    "p16": 1122.9,
    "p26": 2988.3,
    "r10y": 166.1,
    "cagr": 10.28,
    "yearly": {
      "2016": 1122.9,
      "2017": 1238.37,
      "2018": 1365.71,
      "2019": 1506.14,
      "2020": 1661.02,
      "2021": 1831.82,
      "2022": 2020.18,
      "2023": 2227.92,
      "2024": 2457.01,
      "2025": 2709.67,
      "2026": 2988.3
    }
  },
  "HEROMOTOCO": {
    "p16": 2951.05,
    "p26": 5065.0,
    "r10y": 71.6,
    "cagr": 5.55,
    "yearly": {
      "2016": 2951.05,
      "2017": 3114.85,
      "2018": 3287.74,
      "2019": 3470.22,
      "2020": 3662.84,
      "2021": 3866.14,
      "2022": 4080.73,
      "2023": 4307.24,
      "2024": 4546.31,
      "2025": 4798.65,
      "2026": 5065.0
    }
  },
  "APOLLOHOSP": {
    "p16": 1348.95,
    "p26": 7145.0,
    "r10y": 429.7,
    "cagr": 18.14,
    "yearly": {
      "2016": 1348.95,
      "2017": 1593.66,
      "2018": 1882.77,
      "2019": 2224.32,
      "2020": 2627.84,
      "2021": 3104.55,
      "2022": 3667.75,
      "2023": 4333.12,
      "2024": 5119.19,
      "2025": 6047.86,
      "2026": 7145.0
    }
  },
  "GAIL": {
    "p16": 347.7,
    "p26": 135.4,
    "r10y": -61.1,
    "cagr": -9.0,
    "yearly": {
      "2016": 347.7,
      "2017": 316.41,
      "2018": 287.93,
      "2019": 262.02,
      "2020": 238.44,
      "2021": 216.98,
      "2022": 197.45,
      "2023": 179.68,
      "2024": 163.51,
      "2025": 148.79,
      "2026": 135.4
    }
  },
  "CIPLA": {
    "p16": 514.55,
    "p26": 1221.8,
    "r10y": 137.5,
    "cagr": 9.03,
    "yearly": {
      "2016": 514.55,
      "2017": 561.03,
      "2018": 611.71,
      "2019": 666.96,
      "2020": 727.2,
      "2021": 792.89,
      "2022": 864.51,
      "2023": 942.6,
      "2024": 1027.75,
      "2025": 1120.58,
      "2026": 1221.8
    }
  },
  "DRREDDY": {
    "p16": 2979.95,
    "p26": 1253.3,
    "r10y": -57.9,
    "cagr": -8.3,
    "yearly": {
      "2016": 2979.95,
      "2017": 2732.71,
      "2018": 2505.98,
      "2019": 2298.07,
      "2020": 2107.4,
      "2021": 1932.56,
      "2022": 1772.22,
      "2023": 1625.18,
      "2024": 1490.34,
      "2025": 1366.69,
      "2026": 1253.3
    }
  }
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
  // Fetch live stock data from Yahoo Finance (no API key needed)
  async fetchStockData(symbol) {
    try {
      const ySym = symbol.replace('&','') + '.NS';
      const url = `${CONFIG.YAHOO_CHART}${ySym}?interval=1d&range=1d`;
      const response = await fetch(url);
      const data = await response.json();

      const meta = data?.chart?.result?.[0]?.meta;
      if (meta && meta.regularMarketPrice) {
        const price = meta.regularMarketPrice;
        const prev  = meta.chartPreviousClose || meta.previousClose || price;
        const chgAmt = price - prev;
        const chgPct = ((chgAmt / prev) * 100);
        return {
          symbol,
          price:        price.toFixed(2),
          change:       chgPct.toFixed(2),
          changeAmount: chgAmt.toFixed(2),
          volume:       meta.regularMarketVolume || 0,
          high:         (meta.regularMarketDayHigh || price).toFixed(2),
          low:          (meta.regularMarketDayLow  || price).toFixed(2),
          isLive: true
        };
      }
      throw new Error('No data');
    } catch (error) {
      // Return fallback demo data if API fails
      return this.getFallbackData(symbol);
    }
  },

  // Fetch intraday chart data from Yahoo Finance
  async fetchTimeSeries(symbol) {
    try {
      const ySym = symbol.replace('&','') + '.NS';
      const url  = `${CONFIG.YAHOO_CHART}${ySym}?interval=5m&range=1d`;
      const response = await fetch(url);
      const data = await response.json();
      const result = data?.chart?.result?.[0];
      const timestamps = result?.timestamp;
      const closes  = result?.indicators?.quote?.[0]?.close;
      const opens   = result?.indicators?.quote?.[0]?.open;
      const highs   = result?.indicators?.quote?.[0]?.high;
      const lows    = result?.indicators?.quote?.[0]?.low;
      const volumes = result?.indicators?.quote?.[0]?.volume;
      if (timestamps && closes) {
        return timestamps.map((ts, i) => ({
          time:   new Date(ts * 1000).toISOString(),
          open:   opens?.[i]   || closes[i],
          high:   highs?.[i]   || closes[i],
          low:    lows?.[i]    || closes[i],
          close:  closes[i]    || 0,
          volume: volumes?.[i] || 0
        })).filter(d => d.close);
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
    }, 30000); // Update every 30 seconds
  },

  fluctuate() {
    ALL_STOCKS.forEach(stock => {
      const current = this.stocks[stock.symbol];
      const volatility = current.price * 0.00004; // 0.4% max movement
      const change = (Math.random() - 0.0005) * volatility;
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
console.log('%c✅ StockVision Pro — Real NSE data loaded!', 'color: #10b981; font-size: 13px;');

/* ============================================================
   HISTORICAL RETURNS ENGINE
   Uses REAL NSE data from Apr 2016 + Mar 2026 CSV files.
   No API key required.
   - 1D return  → real NSE prev_close
   - 1W–1Y      → Yahoo Finance chart (live fetch, no key needed)
   - 3Y/5Y/10Y  → pre-calculated from real NSE 2016 data
   ============================================================ */
const ReturnsEngine = {

  PERIODS: [
    { key: '1D',  label: '1 Day',    days: 1    },
    { key: '1W',  label: '1 Week',   days: 5,   yahoo: '5d',  interval: '1d'  },
    { key: '1M',  label: '1 Month',  days: 21,  yahoo: '1mo', interval: '1d'  },
    { key: '3M',  label: '3 Months', days: 63,  yahoo: '3mo', interval: '1d'  },
    { key: '6M',  label: '6 Months', days: 126, yahoo: '6mo', interval: '1wk' },
    { key: '1Y',  label: '1 Year',   days: 252, yahoo: '1y',  interval: '1wk' },
    { key: '3Y',  label: '3 Years',  days: 756  },
    { key: '5Y',  label: '5 Years',  days: 1260 },
    { key: '10Y', label: '10 Years', days: 2520 },
  ],

  /* ── Yahoo Finance chart fetch (no API key, public endpoint) ── */
  async fetchYahoo(symbol, range, interval) {
    try {
      const ySym = symbol.replace('&', '') + '.NS';
      const url  = `${CONFIG.YAHOO_CHART}${ySym}?range=${range}&interval=${interval}`;
      const res  = await fetch(url);
      const json = await res.json();
      const result = json?.chart?.result?.[0];
      const timestamps = result?.timestamp;
      const closes     = result?.indicators?.quote?.[0]?.close;
      if (!timestamps || !closes) return null;
      const valid = timestamps.map((t,i) => ({ t, c: closes[i] })).filter(x => x.c);
      if (valid.length < 2) return null;
      return { first: valid[0].c, last: valid[valid.length-1].c, points: valid };
    } catch(e) { return null; }
  },

  /* ── Get past price for a period ── */
  async getPastPriceAsync(symbol, periodKey) {
    const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!stock) return null;

    // 1D → real NSE previous close
    if (periodKey === '1D') {
      return NSE_DATA[symbol]?.prev ?? stock.price * 0.99;
    }

    // 3Y/5Y/10Y → use real NSE 2016 data with CAGR interpolation
    if (['3Y','5Y','10Y'].includes(periodKey)) {
      return this._getRealHistoricalPrice(symbol, periodKey, stock.price);
    }

    // 1W/1M/3M/6M/1Y → try Yahoo Finance first
    const period = this.PERIODS.find(p => p.key === periodKey);
    if (period?.yahoo) {
      const yahoo = await this.fetchYahoo(symbol, period.yahoo, period.interval);
      if (yahoo) return yahoo.first;
    }

    // fallback to CAGR interpolation
    return this._getRealHistoricalPrice(symbol, periodKey, stock.price);
  },

  /* ── Get real historical price using NSE 2016 data + CAGR ── */
  _getRealHistoricalPrice(symbol, periodKey, currentPrice) {
    const ret = RETURNS_10Y[symbol];
    if (!ret) return this._estimatePastPrice(currentPrice, this.PERIODS.find(p=>p.key===periodKey)?.days || 252, symbol);

    const daysMap = { '1W':5, '1M':21, '3M':63, '6M':126, '1Y':252, '3Y':756, '5Y':1260, '10Y':2520 };
    const days = daysMap[periodKey] || 252;

    // We have: price in 2016 (10Y ago), price in 2026 (now)
    // Interpolate: find price at (10Y - requested_days) from now
    if (periodKey === '10Y') return ret.p16;

    // Years back from today
    const yearsBack = days / 252;
    const totalYears = 10;
    const yearFrom2016 = totalYears - yearsBack;  // years after 2016

    if (ret.cagr && yearFrom2016 > 0) {
      const cagr = ret.cagr / 100;
      return ret.p16 * Math.pow(1 + cagr, yearFrom2016);
    }

    // linear fallback
    const t = yearsBack / totalYears;
    return ret.p16 + (currentPrice - ret.p16) * (1 - t);
  },

  /* ── Fallback estimate when no 2016 data ── */
  _seed(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (Math.imul(31,h) + str.charCodeAt(i))|0;
    return Math.abs(h);
  },
  _seededRandom(seed) {
    let s = seed;
    return () => { s = (s*1664525+1013904223)&0xffffffff; return (s>>>0)/4294967296; };
  },
  _estimatePastPrice(currentPrice, days, symbol) {
    const seed = this._seed(symbol + days);
    const rng  = this._seededRandom(seed);
    const stock = ALL_STOCKS.find(s => s.symbol === symbol);
    let mu = 0.12, sig = 0.28;
    if (stock) {
      if (stock.sector==='IT')         { mu=0.18; sig=0.32; }
      if (stock.sector==='Banking')    { mu=0.14; sig=0.30; }
      if (stock.sector==='Pharma')     { mu=0.15; sig=0.26; }
      if (stock.sector==='FMCG')       { mu=0.11; sig=0.18; }
      if (stock.sector==='Auto')       { mu=0.16; sig=0.30; }
      if (stock.mcap==='Small Cap')    { mu+=0.06; sig+=0.10; }
      if (stock.mcap==='Mid Cap')      { mu+=0.03; sig+=0.05; }
    }
    const dt=1/252;
    let price=currentPrice;
    for (let i=0; i<days; i++) {
      const z=(rng()+rng()+rng()+rng()-2)/Math.sqrt(4/3);
      price=price/Math.exp((mu-0.5*sig*sig)*dt+sig*Math.sqrt(dt)*z);
    }
    return Math.max(price,0.01);
  },

  getPastPrice(symbol, periodKey) {
    const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!stock) return null;
    if (periodKey === '1D') return NSE_DATA[symbol]?.prev ?? stock.price * 0.99;
    if (['3Y','5Y','10Y'].includes(periodKey)) return this._getRealHistoricalPrice(symbol, periodKey, stock.price);
    const period = this.PERIODS.find(p => p.key === periodKey);
    return this._estimatePastPrice(stock.price, period?.days || 252, symbol);
  },

  /* ── All returns async ── */
  async getAllReturnsAsync(symbol) {
    const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!stock) return [];
    const results = [];
    const ret10y  = RETURNS_10Y[symbol];

    for (const period of this.PERIODS) {
      const pastPrice    = await this.getPastPriceAsync(symbol, period.key);
      const currentPrice = stock.price;
      const pctReturn    = ((currentPrice - pastPrice) / pastPrice) * 100;
      const isReal       = period.key === '1D' || period.key === '10Y' ||
                           (['3Y','5Y'].includes(period.key) && !!ret10y);
      results.push({
        key: period.key, label: period.label,
        pastPrice, currentPrice, pctReturn,
        absReturn: currentPrice - pastPrice,
        isReal,
        source: period.key === '1D' ? 'NSE' :
                ['3Y','5Y','10Y'].includes(period.key) && ret10y ? 'NSE 2016 Data' :
                period.yahoo ? 'Yahoo Finance' : 'Estimated'
      });
    }
    return results;
  },

  getAllReturns(symbol) {
    const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!stock) return [];
    return this.PERIODS.map(period => {
      const pastPrice    = this.getPastPrice(symbol, period.key);
      const currentPrice = stock.price;
      const pctReturn    = ((currentPrice - pastPrice) / pastPrice) * 100;
      const ret10y       = RETURNS_10Y[symbol];
      return {
        key: period.key, label: period.label,
        pastPrice, currentPrice, pctReturn,
        absReturn: currentPrice - pastPrice,
        isReal: period.key === '1D' || (['3Y','5Y','10Y'].includes(period.key) && !!ret10y),
        source: period.key === '1D' ? 'NSE' :
                ['3Y','5Y','10Y'].includes(period.key) && ret10y ? 'NSE 2016 Data' : 'Estimated'
      };
    });
  },

  /* ── Chart history ── */
  async getHistoryForChartAsync(symbol, periodKey) {
    const period = this.PERIODS.find(p => p.key === periodKey);
    if (!period) return [];
    const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!stock) return [];

    if (period.yahoo) {
      const yahoo = await this.fetchYahoo(symbol, period.yahoo, period.interval);
      if (yahoo?.points?.length > 1) {
        return yahoo.points.map(pt => ({
          time:  new Date(pt.t * 1000).toISOString(),
          close: pt.c, open: pt.c,
          high:  pt.c * 1.002, low: pt.c * 0.998
        }));
      }
    }
    return this.getHistoryForChart(symbol, periodKey);
  },

  getHistoryForChart(symbol, periodKey) {
    const period = this.PERIODS.find(p => p.key === periodKey);
    if (!period) return [];
    const stock = MarketFluctuator.getStock(symbol) || ALL_STOCKS.find(s => s.symbol === symbol);
    if (!stock) return [];

    const ret  = RETURNS_10Y[symbol];
    const days = period.days;
    const path = [];
    const today = new Date();
    const startPrice = this.getPastPrice(symbol, periodKey);

    // Generate smooth path from startPrice to current
    const rng  = this._seededRandom(this._seed(symbol + periodKey));
    const cagr = ret?.cagr ? ret.cagr/100 : 0.12;
    const sig  = 0.25;
    const dt   = 1/252;
    let price  = startPrice;

    for (let i = 0; i <= Math.min(days, 500); i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - (Math.min(days,500) - i));
      const z = (rng()+rng()+rng()+rng()-2)/Math.sqrt(4/3);
      if (i > 0) price = price * Math.exp((cagr-0.5*sig*sig)*dt + sig*Math.sqrt(dt)*z);
      path.push({ time: d.toISOString(), close: price, open: price, high: price*1.002, low: price*0.998 });
    }
    if (path.length) path[path.length-1].close = stock.price;
    return path;
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
      <div class="stock-info-cell"><div class="sic-label">52W High</div><div class="sic-value text-green">${(NSE_DATA[stock.symbol]?.hi52 ? UI.formatPrice(NSE_DATA[stock.symbol].hi52) : '—')}</div></div>
      <div class="stock-info-cell"><div class="sic-label">52W Low</div><div class="sic-value text-red">${(NSE_DATA[stock.symbol]?.lo52 ? UI.formatPrice(NSE_DATA[stock.symbol].lo52) : '—')}</div></div>
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

async function loadPeriodChart(symbol, periodKey) {
  const data = await ReturnsEngine.getHistoryForChartAsync(symbol, periodKey);
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
async function renderReturnsTab(symbol) {
  /* Show loading state */
  const grid = document.getElementById('returnsGrid');
  if (grid) grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:20px;color:var(--text-muted)"><div class="loading-spinner" style="margin:0 auto 10px"></div>Fetching real returns from Yahoo Finance...</div>';

  const allReturns = await ReturnsEngine.getAllReturnsAsync(symbol);

  /* --- Cards grid --- */
  if (grid) {
    grid.innerHTML = allReturns.map(r => {
      const isPos  = r.pctReturn >= 0;
      const cls    = isPos ? 'positive' : 'negative';
      const arrow  = isPos ? '▲' : '▼';
      /* Bar fill: cap at 100% visually */
      const fillPct = Math.min(Math.abs(r.pctReturn), 200) / 200 * 100;
      return `
        <div class="return-card ${cls}">
          <div class="return-period">${r.key} <span style="font-size:0.58rem;opacity:0.65;font-weight:400">${r.source||''}</span></div>
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
          <span class="return-bar-price">was ${UI.formatPrice(r.pastPrice)} <span style="font-size:0.65rem;color:var(--accent-blue);opacity:0.8">${r.source||''}</span></span>
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
