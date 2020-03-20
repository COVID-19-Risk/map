var riskDatas = new Array();

riskDatas.push(
{"riskDate":"20 Mar 2020","riskDateLabel":"20 Mar","riskData":{"101":0.00035620974654,"102":0.0004187363349148,"103":0.0005054851777035,"104":0.0007371231682154,"105":0.000394057524961,"106":0.0011700759754008,"107":0.0009554310005135,"108":0.0004922339880204,"109":0.0007694826677713,"110":0.0003716722841493,"111":0.0008935518254789,"112":0.0004441042543003,"113":0.0005531945525114,"114":0.0003805548352495,"115":0.0006169089702239,"116":0.0006555228245235,"117":0.000313019758447,"118":0.000403325615478,"119":0.0004861674236721,"201":0.0001078495521432,"202":0.0001663234857928,"203":8.92950578429e-05,"204":3.66131464378e-05,"205":6.13841591919e-05,"206":9.77997718607e-05,"207":5.09332074447e-05,"208":0.0001428863318541,"209":5.78085400445e-05,"210":3.74083357615e-05,"211":0.0001240519320819,"212":8.65979714643e-05,"213":3.97828478239e-05,"214":5.1408848643e-05,"301":0.00188886126764,"302":0.0013818124619334,"303":0.0020770786630678,"304":0.000597518418831,"305":0.0008173105254079,"306":0.001184633731897,"307":0.001052404539239,"308":0.0013184337141797,"309":0.0014494836677446,"310":0.0012376763913483,"311":0.0009127057984484,"312":0.0012946388927398,"313":0.0017893290918803,"314":0.0013021203390861,"401":6.28545775048e-05,"402":8.45869250375e-05,"403":9.22876998619e-05,"404":5.78776153163e-05,"405":6.71700798526e-05,"406":4.13553141159e-05,"407":8.58171725221e-05,"408":5.17427303794e-05,"409":6.65646105608e-05,"410":7.6061678973e-05,"411":3.15858986315e-05,"412":6.54844642732e-05,"501":6.76966523026e-05,"502":6.79059229977e-05,"503":7.65790477316e-05,"504":6.96791950794e-05,"505":4.77658412021e-05,"506":0.0001542047848663,"507":4.02031757102e-05,"508":0.0001104408216629,"509":0.0001526392420171,"510":0.0001195195927129,"511":0.0001003341158701,"601":0.0003764187116537,"602":0.0006379939495911,"603":0.0014632535614576,"604":0.0009562224542389,"605":0.0005283527110631,"606":0.0005104981738763,"607":0.0007699424121679,"608":0.0003945617028802,"609":0.0008188782550849,"610":0.0007669277057652,"611":0.0001740560977196,"612":0.000158354694395,"613":0.0004090580335342,"614":0.0004322465306023,"615":0.0005674852746559,"616":0.0002115609484003,"617":0.0007443447073042,"701":5.32991565079e-05,"702":8.83611726213e-05,"703":6.65183325315e-05,"704":6.48477884724e-05,"705":7.01188556428e-05,"706":0.0001757857314203,"707":7.59405858283e-05,"708":3.78215842359e-05,"709":5.11365661333e-05,"710":5.2391114687e-05,"711":4.69015613692e-05,"712":0.0002116650137883,"713":0.0001893259030922,"714":5.59139421561e-05,"801":0.00041744391516,"802":8.35690868867e-05,"803":0.0004471836203356,"804":6.99864757293e-05,"805":0.0001654305293723,"806":0.0011796320547748,"807":0.0008180291424562,"808":0.0001858228303955,"809":0.0005437088477269,"810":0.0001407838121659,"811":0.0012757167722105,"812":0.0001474550515083,"813":0.0004708064861411,"814":7.10855138151e-05,"815":0.0003950242574395,"816":6.90903871788e-05,"901":7.361221261e-05,"902":9.49788773321e-05,"903":6.00545599162e-05,"904":4.01068404568e-05,"905":0.0001023045243513,"906":9.61214746668e-05,"907":6.96711958088e-05,"909":5.60148033215e-05,"910":4.43404412872e-05,"911":4.38403256303e-05,"912":0.0001134306945907,"913":5.45428184474e-05,"914":7.38343791093e-05,"1001":0.0001996227485092,"1002":0.0002379828931668,"1003":0.0003360522334964,"1004":0.0002014827599201,"1005":0.0002952035122265,"1006":0.0002413032477596,"1007":0.0003397457977558,"1008":0.000258888459742,"1009":0.0002284610168459,"1010":0.0001864010017091,"1011":0.0001847499451218,"1012":0.0002640952683211,"1014":0.0002847695854597,"1015":0.0003002899995707,"1016":0.0001722285274512,"1101":0.0005891417120337,"1102":0.0007650365863511,"1103":0.0003946820837869,"1104":0.000298545233572,"1105":0.0009804813610287,"1106":0.0010411858082335,"1107":0.0009696575234122,"1108":0.0003706185096233,"1109":0.0007976152207298,"1110":0.0010473263595589,"1111":0.0010692357881403,"1112":0.0005763245567985,"1113":0.0005001190215813,"1114":0.0008295329856038,"1115":0.0011549191193175,"1116":0.0010969178164524,"1201":6.31255515447e-05,"1202":5.34186363047e-05,"1203":6.4759625394e-05,"1204":5.47225054659e-05,"1205":6.70301476402e-05,"1206":5.78716498403e-05,"1207":5.19400726989e-05,"1208":4.95518371158e-05,"1209":9.12075010476e-05,"1210":4.91575925939e-05,"1212":5.87521190386e-05,"1213":8.83932879168e-05,"1214":4.84026610638e-05,"1215":4.9630895113e-05,"1301":0.0009495749093983,"1302":0.0008174050808699,"1303":0.0011027059672665,"1304":0.0013561027411123,"1305":0.0015635847883385,"1306":0.001304872149436,"1307":0.0012826222529176,"1308":0.0013204211101637,"1309":0.0015912429449653,"1310":0.0016621402670875,"1311":0.0015815296435097,"1312":0.0013515593343266,"1313":0.0010657646343007,"1314":0.0013566216395602,"1315":0.0013847702042696,"1316":0.0010918691684098,"1317":0.0011825158054755,"1318":0.0012430540794703,"1401":0.0001123413448032,"1402":0.0002143125907332,"1403":0.0002234583188653,"1404":0.0002367750945846,"1405":0.0004413165508385,"1406":0.0003034060314673,"1407":0.0001536810060541,"1408":0.0001098910113702,"1409":0.0002022213507363,"1410":0.0001965583453214,"1411":0.0001402313520497,"1412":0.0001820704979352,"1413":9.55549823543e-05,"1414":0.000205943045968,"1415":0.000325469477484,"1416":0.0002377208337996,"1417":8.76824840595e-05,"1418":0.0001587063097811,"1419":0.0001695418475537,"1420":0.0001753262131364,"1421":0.0001803588045385,"1501":0.0002554656084907,"1502":0.0005310204137368,"1503":0.000775438962804,"1504":0.0006353079911468,"1505":0.0002836524374115,"1506":0.0005698820968201,"1507":0.0004895927611806,"1508":0.000431996740121,"1509":8.99469992744e-05,"1510":0.0007242294762319,"1511":0.0005906150115066,"1512":0.0003942518917866,"1513":7.77074921247e-05,"1601":0.0018806297929904,"1602":0.0017494010244545,"1603":0.0021551087558978,"1604":0.0030164353485819,"1605":0.0025415198402316,"1606":0.0016862353784245,"1607":0.0014782798030134,"1608":0.003405391960929,"1609":0.0012460348044731,"1610":0.0022214858954858,"1701":0.0001495287032194,"1702":0.0001719328798027,"1703":0.0001106900682337,"1704":0.0004263387047855,"1705":0.0004074577872679,"1706":0.0002211314304566,"1707":0.0001148318229403,"1708":0.0003130383617984,"1709":0.000264204917142,"1710":0.000219690350673,"1711":0.000308321260064,"1712":9.89094640769e-05,"1713":0.0001378336243911,"1714":0.0002768158194274,"1801":0.0001957101609203,"1802":0.0001586381012546,"1803":0.0001645081471537,"1804":0.0008578737917179,"1805":0.0002490159399441,"1806":0.0001259422784962,"1807":0.0001136139138508,"1808":0.0002387675014363,"1809":0.0001294918707006,"1810":0.0002186579657458,"1811":7.21513970349e-05,"1812":7.98538484994e-05,"1813":0.0006728597309418,"1814":0.0001962422152341,"1815":0.0001221283572502,"1816":0.000159289567148,"1817":9.45037509938e-05,"1818":7.1988121477e-05,"1819":0.0001316072687894,"1820":0.0001932801781956,"1821":0.000149696121403,"1822":0.0001316850508582,"1823":0.0001460940598045,"1824":0.0001631087058315,"3101":1.43123433128e-05,"3102":2.40967061316e-05,"3103":2.73146750161e-05,"3104":3.07386017031e-05,"3105":1.73271546843e-05,"3106":1.18351209138e-05,"3107":1.88081513037e-05,"3108":3.00311076917e-05,"3109":1.8831890586e-05,"3110":1.53354731732e-05,"3201":9.4960731184e-06,"4101":3.8131036099e-06,"4201":3.47560194271e-05,"4202":1.71557735905e-05,"4203":4.12060962459e-05,"4204":2.54606582407e-05,"4205":3.02500436646e-05,"4206":2.69257744653e-05,"4301":0.000156114800725,"4302":0.0001400272518213,"4401":2.14901873749e-05,"4501":5.6249647962e-06,"4502":8.5497801824e-06,"4601":5.7197754737e-06,"4602":1.02613999348e-05,"4603":5.6545399569e-06,"4701":9.4445509125e-06,"4801":2.7007095979e-06,"4802":2.7462827247e-06,"4901":4.100629952e-07},"baseColor":10,"phmax":0.55,"phmin":0.00055,"legendGrades":[0.55,0.055,0.0055,0.00055]}
);
riskDatas.push(
{"riskDate":"21 Mar 2020","riskDateLabel":"21 Mar","riskData":{"101":0.0005056198223605,"102":0.00059924325245,"103":0.0007017282294523,"104":0.0010161119579721,"105":0.0005644761662657,"106":0.0015840430763273,"107":0.0013459798473844,"108":0.0007061362743095,"109":0.001090584263802,"110":0.0005334517915003,"111":0.0012081801388557,"112":0.0006374182105465,"113":0.0007905257994791,"114":0.0005402597608243,"115":0.000881095103331,"116":0.0009353372965601,"117":0.0004442752718752,"118":0.0005685309758889,"119":0.0006891697880749,"201":0.0001504024351951,"202":0.000230706433033,"203":0.0001255175208075,"204":5.13913186435e-05,"205":8.58871496983e-05,"206":0.0001362282202135,"207":7.15286352299e-05,"208":0.0002003277833101,"209":8.09990928715e-05,"210":5.25847010392e-05,"211":0.0001713971940057,"212":0.0001207464400767,"213":5.57905182009e-05,"214":7.21408157698e-05,"301":0.0025637684525274,"302":0.0019283571774208,"303":0.0028080642725892,"304":0.0008391012983107,"305":0.001147489042808,"306":0.0016740801549979,"307":0.001483153504014,"308":0.0018466249875294,"309":0.0019827790889743,"310":0.0016683084180929,"311":0.0012581001460631,"312":0.0018200868189048,"313":0.0024260165194451,"314":0.0018193394977761,"401":8.79794620897e-05,"402":0.0001173412568398,"403":0.0001295375295812,"404":8.10644078869e-05,"405":9.38480163134e-05,"406":5.78503842902e-05,"407":0.0001199653553716,"408":7.24629217779e-05,"409":9.32448041444e-05,"410":0.0001060766938793,"411":4.43337144805e-05,"412":9.16874425603e-05,"501":9.48525228524e-05,"502":9.47304506463e-05,"503":0.0001073491135829,"504":9.72887162512e-05,"505":6.68567599708e-05,"506":0.0002118743498007,"507":5.6604534749e-05,"508":0.0001536682086128,"509":0.0002117638758944,"510":0.0001679630648495,"511":0.0001397661206163,"601":0.000511856000359,"602":0.0008720577413308,"603":0.001948511379737,"604":0.0012836499759219,"605":0.0007346373140984,"606":0.0006889040006489,"607":0.0010335527616957,"608":0.0005517267138596,"609":0.0010987874410359,"610":0.0010391831204269,"611":0.0002423555588724,"612":0.0002166823745108,"613":0.000556707824533,"614":0.0005883387186579,"615":0.0007726092784132,"616":0.0002926923657695,"617":0.0009987241788039,"701":7.48990739608e-05,"702":0.0001241634892022,"703":9.34033611922e-05,"704":9.09266197549e-05,"705":9.85642074299e-05,"706":0.0002480833474609,"707":0.0001068939753518,"708":5.32769600784e-05,"709":7.17244046323e-05,"710":7.35576616327e-05,"711":6.61768443935e-05,"712":0.0002995061830315,"713":0.0002659744136742,"714":7.85563686397e-05,"801":0.0005802744714487,"802":0.0001172770596949,"803":0.0006121617677006,"804":9.89459039473e-05,"805":0.0002360899339248,"806":0.0015784998634353,"807":0.0011146337469207,"808":0.0002624009802549,"809":0.0007348507590324,"810":0.0002022409608452,"811":0.0017047868365794,"812":0.0002092884879193,"813":0.0006411405170059,"814":0.0001013970046019,"815":0.0005434796143818,"816":9.81094636482e-05,"901":0.0001041637068433,"902":0.0001322898520572,"903":8.44590598035e-05,"904":5.62041016299e-05,"905":0.0001435559273466,"906":0.0001348348745651,"907":9.74426916835e-05,"909":7.88030126158e-05,"910":6.21160757453e-05,"911":6.14667744787e-05,"912":0.0001593101535802,"913":7.70948896663e-05,"914":0.0001037412196221,"1001":0.0002848869658216,"1002":0.0003306537080131,"1003":0.0004616546815772,"1004":0.000286900364775,"1005":0.000420847186347,"1006":0.0003443182293855,"1007":0.0004616539676054,"1008":0.0003547702397725,"1009":0.0003245612078253,"1010":0.0002672188779534,"1011":0.000263895440911,"1012":0.0003774188786114,"1014":0.0004098772259534,"1015":0.0004189919991231,"1016":0.0002455902604116,"1101":0.0008271313478,"1102":0.0010687649444963,"1103":0.0005559875572183,"1104":0.0004247905136373,"1105":0.0013712722720693,"1106":0.0014289373944283,"1107":0.001340231528616,"1108":0.0005295095484013,"1109":0.0011168926829615,"1110":0.0014476245678758,"1111":0.0014769263059072,"1112":0.0008123313185669,"1113":0.0007097238085889,"1114":0.0011536048458677,"1115":0.0015726452795638,"1116":0.0015037978871863,"1201":8.87670348903e-05,"1202":7.50767423168e-05,"1203":9.10985332841e-05,"1204":7.68436154729e-05,"1205":9.33964904857e-05,"1206":8.13062518582e-05,"1207":7.2914063831e-05,"1208":6.95694123007e-05,"1209":0.0001276608575506,"1210":6.8801010047e-05,"1212":8.19148701532e-05,"1213":0.0001247799719114,"1214":6.78097794342e-05,"1215":6.9977856289e-05,"1301":0.0013150402079267,"1302":0.0011194638885086,"1303":0.0015479288995266,"1304":0.0018766631239235,"1305":0.0021287146916206,"1306":0.0018163961302745,"1307":0.0017338451318332,"1308":0.0018318725296393,"1309":0.0021845448781867,"1310":0.0022536621354905,"1311":0.0021267251970314,"1312":0.0018622509739748,"1313":0.0015149850319615,"1314":0.0018920844839189,"1315":0.0019198177193183,"1316":0.0015464784544066,"1317":0.001649550371071,"1318":0.0017465158026514,"1401":0.0001586015309849,"1402":0.0003027914983578,"1403":0.0003167505568733,"1404":0.0003340329884616,"1405":0.000619551266641,"1406":0.0004292868509301,"1407":0.0002166987720422,"1408":0.0001552326587313,"1409":0.000285767498082,"1410":0.0002784053992499,"1411":0.0001968773216256,"1412":0.0002566398110592,"1413":0.0001349211816007,"1414":0.0002926792475517,"1415":0.0004589290715418,"1416":0.0003355404979784,"1417":0.0001244241276269,"1418":0.0002247151890057,"1419":0.0002404026842694,"1420":0.0002486210919876,"1421":0.0002562402701779,"1501":0.0003618466171982,"1502":0.00074591424649,"1503":0.0010881570560125,"1504":0.0008955856220702,"1505":0.0004039446250318,"1506":0.0008045885808403,"1507":0.0006889543408359,"1508":0.0006124426632335,"1509":0.0001270349892241,"1510":0.0010188611176932,"1511":0.0008346011699699,"1512":0.0005617621913908,"1513":0.0001098406210943,"1601":0.0024651944237193,"1602":0.0023562756227523,"1603":0.0027610178892308,"1604":0.0038321841980579,"1605":0.0032789435315073,"1606":0.0022467764650893,"1607":0.0020116144292235,"1608":0.0043349321633274,"1609":0.0017476217639789,"1610":0.002904887016515,"1701":0.0002103379237201,"1702":0.0002400875999818,"1703":0.0001558131636439,"1704":0.000594902297799,"1705":0.0005738861687299,"1706":0.0003053367102012,"1707":0.0001613869533886,"1708":0.0004424323514407,"1709":0.0003726375968537,"1710":0.0003106128729732,"1711":0.0004360142895031,"1712":0.0001389766234806,"1713":0.0001942923515088,"1714":0.00039234622834,"1801":0.0002769664144629,"1802":0.0002223063130249,"1803":0.0002313115882146,"1804":0.0011670874654499,"1805":0.0003514564223402,"1806":0.0001785734553511,"1807":0.0001609373808023,"1808":0.0003325651827653,"1809":0.0001824650800277,"1810":0.0003087285259761,"1811":0.0001022095997443,"1812":0.0001127972218188,"1813":0.0009241156770272,"1814":0.0002724526823898,"1815":0.0001720901662227,"1816":0.0002248381775304,"1817":0.0001337962530456,"1818":0.0001019235806231,"1819":0.0001859925067048,"1820":0.0002738177111166,"1821":0.0002112751246014,"1822":0.0001850423479937,"1823":0.0002075824878105,"1824":0.0002309003067986,"3101":2.0632767718e-05,"3102":3.49011439909e-05,"3103":3.94341045374e-05,"3104":4.41458749373e-05,"3105":2.50527385684e-05,"3106":1.71752785805e-05,"3107":2.73161247549e-05,"3108":4.32174359889e-05,"3109":2.7195569874e-05,"3110":2.2308616271e-05,"3201":1.3572263315e-05,"4101":5.5230108304e-06,"4201":4.99986366279e-05,"4202":2.46492841678e-05,"4203":5.9119422252e-05,"4204":3.65930522709e-05,"4205":4.36491204225e-05,"4206":3.88731617618e-05,"4301":0.0002110710621102,"4302":0.000191297267392,"4401":3.0191269285e-05,"4501":7.8915089852e-06,"4502":1.18763730664e-05,"4601":7.9827458601e-06,"4602":1.42960219027e-05,"4603":7.9121807879e-06,"4701":1.32210898075e-05,"4801":3.7412853095e-06,"4802":3.805146823e-06,"4901":5.46815085e-07},"baseColor":10,"phmax":0.55,"phmin":0.00055,"legendGrades":[0.55,0.055,0.0055,0.00055]}
);
riskDatas.push(
{"riskDate":"22 Mar 2020","riskDateLabel":"22 Mar","riskData":{"101":0.0007162067317068,"102":0.0008557079111951,"103":0.0009730687797055,"104":0.0014022455218456,"105":0.0008068423670028,"106":0.0021491129831759,"107":0.0018932532802986,"108":0.0010105438354236,"109":0.0015429563600029,"110":0.0007637272469914,"111":0.0016336082832804,"112":0.0009126767240693,"113":0.0011271891505333,"114":0.000765343140726,"115":0.0012556299130593,"116":0.0013315655760222,"117":0.0006295950915744,"118":0.0007997707432208,"119":0.0009757329619192,"201":0.0002095176974896,"202":0.000319579433611,"203":0.0001762117994763,"204":7.20644430763e-05,"205":0.0001200384171804,"206":0.0001894823450248,"207":0.0001003249861621,"208":0.0002805863893661,"209":0.0001133243186293,"210":7.38184060306e-05,"211":0.00023654540504,"212":0.0001680847289159,"213":7.81394351847e-05,"214":0.0001011151366182,"301":0.0034794553504662,"302":0.0026873159072673,"303":0.0038007952726472,"304":0.0011760177158346,"305":0.0016078127608457,"306":0.0023600500033041,"307":0.0020855529287718,"308":0.00258228713126,"309":0.0027117679044393,"310":0.0022485135631106,"311":0.0017327156446846,"312":0.0025537671819095,"313":0.003287519865442,"314":0.0025383859764299,"401":0.0001229954883546,"402":0.000162723005768,"403":0.0001815908981426,"404":0.0001133913267562,"405":0.0001309916745467,"406":8.084080404e-05,"407":0.0001675481990264,"408":0.0001013484625208,"409":0.0001304601467833,"410":0.0001478276325583,"411":6.21340851713e-05,"412":0.0001282163453688,"501":0.0001327078675579,"502":0.0001319777402878,"503":0.00015023227867,"504":0.0001356321576112,"505":9.344388947e-05,"506":0.0002907193222996,"507":7.95414344479e-05,"508":0.000213497409743,"509":0.0002932170992349,"510":0.0002355519188784,"511":0.0001944926288301,"601":0.0006952850108597,"602":0.0011912020597184,"603":0.0025965760803017,"604":0.001723648526379,"605":0.0010192966891137,"606":0.0009289654435108,"607":0.0013870900679883,"608":0.0007700778583154,"609":0.0014740108398486,"610":0.0014076300723139,"611":0.0003368563902797,"612":0.0002961633204358,"613":0.0007571435359978,"614":0.0007999890844345,"615":0.0010513317271668,"616":0.0004043263278741,"617":0.0013397977446472,"701":0.0001051140631976,"702":0.0001742593315491,"703":0.0001309965067669,"704":0.0001273662274529,"705":0.0001383750445108,"706":0.000349545154944,"707":0.0001502493118569,"708":7.49356354e-05,"709":0.0001004822408568,"710":0.0001031493540674,"711":9.32178281012e-05,"712":0.000423029587133,"713":0.0003732620408583,"714":0.000110225438451,"801":0.0008049277304643,"802":0.0001643968313403,"803":0.0008366955552204,"804":0.0001396931159633,"805":0.0003361377085364,"806":0.0021130135897285,"807":0.0015169424016503,"808":0.0003696653602101,"809":0.0009928750130582,"810":0.0002897513448773,"811":0.0022793263030171,"812":0.0002963631919874,"813":0.0008725382693365,"814":0.0001443403637161,"815":0.0007462227500678,"816":0.0001390738237243,"901":0.0001471621603267,"902":0.000184049584002,"903":0.0001186199646241,"904":7.86491833503e-05,"905":0.000201231644951,"906":0.0001888885682493,"907":0.0001361143693626,"909":0.0001107096670066,"910":8.69076826372e-05,"911":8.60530055634e-05,"912":0.0002233429041141,"913":0.0001087933501476,"914":0.0001455636465875,"1001":0.0004057707199521,"1002":0.000458461146528,"1003":0.0006332214076609,"1004":0.0004077123455642,"1005":0.0005986775956342,"1006":0.000490350367951,"1007":0.0006265276192797,"1008":0.0004853592059382,"1009":0.0004601933262538,"1010":0.0003821291276001,"1011":0.0003761983138689,"1012":0.0005383091524989,"1014":0.0005885564665056,"1015":0.0005835489025556,"1016":0.0003494695179137,"1101":0.0011592406004425,"1102":0.0014909913485149,"1103":0.0007817832708446,"1104":0.000603087998165,"1105":0.001914785951245,"1106":0.0019628090300724,"1107":0.0018517771749337,"1108":0.0007547536074743,"1109":0.0015615203975042,"1110":0.002000444434314,"1111":0.0020394992888312,"1112":0.0011427496417017,"1113":0.0010049656043192,"1114":0.0016025780645107,"1115":0.002145629686252,"1116":0.0020627584755317,"1201":0.000124663698273,"1202":0.0001053686174428,"1203":0.0001279785470665,"1204":0.000107767284574,"1205":0.0001300601633,"1206":0.0001140844279893,"1207":0.0001022337618655,"1208":9.7570968162e-05,"1209":0.0001784939453049,"1210":9.61898358188e-05,"1212":0.0001141371424887,"1213":0.0001758516910812,"1214":9.4889962281e-05,"1215":9.85176128713e-05,"1301":0.0018196695814287,"1302":0.0015326035587058,"1303":0.0021687666694158,"1304":0.0025964540521876,"1305":0.0029009395144754,"1306":0.0025264818620044,"1307":0.0023468343697654,"1308":0.0025407929270102,"1309":0.0029984620288689,"1310":0.0030601878144319,"1311":0.0028671092237844,"1312":0.0025685042139647,"1313":0.0021483963932402,"1314":0.002635452685673,"1315":0.0026598624229043,"1316":0.0021859240757566,"1317":0.0022993669648064,"1318":0.0024494447413871,"1401":0.0002235699853209,"1402":0.0004271828800687,"1403":0.0004481195730441,"1404":0.0004705651824958,"1405":0.0008685098168992,"1406":0.0006061805717331,"1407":0.0003051503223774,"1408":0.0002189640434302,"1409":0.000403019027542,"1410":0.0003936585991986,"1411":0.0002758260808955,"1412":0.000361292967547,"1413":0.0001899349880719,"1414":0.0004151444733358,"1415":0.0006458952475847,"1416":0.000472906588078,"1417":0.0001761848077789,"1418":0.0003176242454332,"1419":0.000340274941516,"1420":0.0003519351538737,"1421":0.0003633065849317,"1501":0.000511701070306,"1502":0.0010465544791487,"1503":0.0015251751491133,"1504":0.0012607028887009,"1505":0.0005740862302113,"1506":0.0011341918137648,"1507":0.0009682330358976,"1508":0.0008667427166867,"1509":0.0001791125349191,"1510":0.0014314027879595,"1511":0.0011774384091246,"1512":0.0007987667245554,"1513":0.0001549802042797,"1601":0.0032351502224545,"1602":0.0031713807193376,"1603":0.0035388413522541,"1604":0.0048794009220517,"1605":0.004235441448546,"1606":0.0029948237231133,"1607":0.0027352052592202,"1608":0.0055257807708472,"1609":0.0024448441250965,"1610":0.0038005261113088,"1701":0.0002954289571057,"1702":0.0003347946405584,"1703":0.0002189843714314,"1704":0.0008286084513906,"1705":0.000806565360165,"1706":0.0004210581808834,"1707":0.0002265015539706,"1708":0.0006236621609506,"1709":0.0005244790047603,"1710":0.0004382182767713,"1711":0.0006151450752224,"1712":0.0001950074420005,"1713":0.0002734028110925,"1714":0.0005548175667248,"1801":0.0003909962431685,"1802":0.0003109401669918,"1803":0.0003247316369635,"1804":0.0015886061787786,"1805":0.0004948086676511,"1806":0.0002526385340348,"1807":0.0002275097236119,"1808":0.0004625265372297,"1809":0.0002565499502527,"1810":0.0004353341175156,"1811":0.0001445623692491,"1812":0.00015905685283,"1813":0.0012680423997719,"1814":0.0003776712751699,"1815":0.0002420894585298,"1816":0.0003169371944595,"1817":0.0001891131250375,"1818":0.0001440605270069,"1819":0.0002623348031254,"1820":0.0003868996059998,"1821":0.0002975803973377,"1822":0.0002596886359057,"1823":0.0002943631204034,"1824":0.0003263301315074,"3101":2.97243466366e-05,"3102":5.04676219471e-05,"3103":5.68496090512e-05,"3104":6.33256713528e-05,"3105":3.61863864852e-05,"3106":2.48948451488e-05,"3107":3.96066750243e-05,"3108":6.21141798154e-05,"3109":3.9220494749e-05,"3110":3.23951062312e-05,"3201":1.93853998379e-05,"4101":8.0006001193e-06,"4201":7.18191355368e-05,"4202":3.53734812948e-05,"4203":8.46948005881e-05,"4204":5.25245312444e-05,"4205":6.28756004264e-05,"4206":5.60295043627e-05,"4301":0.000285537887974,"4302":0.0002611534801424,"4401":4.23511212321e-05,"4501":1.10587015617e-05,"4502":1.64864663191e-05,"4601":1.11383576073e-05,"4602":1.99196019381e-05,"4603":1.10706543591e-05,"4701":1.85027712622e-05,"4801":5.1910559179e-06,"4802":5.2803780724e-06,"4901":7.413712955e-07},"baseColor":10,"phmax":0.55,"phmin":0.00055,"legendGrades":[0.55,0.055,0.0055,0.00055]}
);
