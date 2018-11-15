/**
 * types
 * 0 close combat
 * 1 ranged
 * 2 siege
 * 3 leader
 * 4 special (decoy)
 * 5 weather
 */


module.exports = {
  "none": {
    name: "none",
    power: 0,
    ability: null,
    img: "foot_soldier1",
    faction: "northern",
    type: 0
  },
  "redanian_foot_soldier": {
    name: "瑞达尼亚步兵",
    power: 1,
    ability: null,
    img: "foot_soldier1",
    faction: "northern",
    type: 0
  },
  "poor_fucking_infantry": {
    name: "烂渣步兵团",
    power: 1,
    ability: "tight_bond",
    img: "infantry",
    faction: "northern",
    type: 0
  },
  "yarpen_zigrin": {
    name: "亚尔潘·齐格林",
    power: 2,
    ability: null,
    img: "yarpen",
    faction: "northern",
    type: 0
  },
  "blue_stripes_commando": {
    name: "蓝旗营指挥官",
    power: 4,
    ability: "tight_bond",
    img: "commando",
    faction: "northern",
    type: 0
  },
  "sigismund_dijkstra": {
    name: "西吉斯蒙德·迪科斯彻",
    power: 4,
    ability: "spy",
    img: "dijkstra",
    faction: "northern",
    type: 0
  },
  "prince_stennis": {
    name: "史登尼斯王子",
    power: 5,
    ability: "spy",
    img: "stennis",
    faction: "northern",
    type: 0
  },
  "siegfried_of_denesle": {
    name: "丹索的齐格菲",
    power: 5,
    ability: null,
    img: "siegfried",
    faction: "northern",
    type: 0
  },
  "ves": {
    name: "微丝",
    power: 5,
    ability: null,
    img: "ves",
    faction: "northern",
    type: 0
  },
  "vernon_roche": {
    name: "弗农·罗契",
    power: 10,
    ability: "hero",
    img: "roche",
    faction: "northern",
    type: 0
  },
  "john_natalis": {
    name: "约翰·纳塔利斯",
    power: 10,
    ability: "hero",
    img: "natalis",
    faction: "northern",
    type: 0
  },
  "sheldon_skaggs": {
    name: "谢尔顿‧史卡格",
    power: 4,
    ability: null,
    img: "skaggs",
    faction: "northern",
    type: 1
  },
  "sabrina_glevissig": {
    name: "萨宾娜‧格里维希格",
    power: 4,
    ability: null,
    img: "sabrina",
    faction: "northern",
    type: 1
  },
  "crinfrid_reavers_dragon_hunter": {
    name: "钦弗里掠夺者巨龙猎人",
    power: 5,
    ability: "tight_bond",
    img: "crinfrid",
    faction: "northern",
    type: 1
  },
  "sile_de_tansarville": {
    name: "席儿·坦沙维耶",
    power: 5,
    ability: null,
    img: "sile",
    faction: "northern",
    type: 1
  },
  "keira_metz": {
    name: "凯拉·梅兹",
    power: 5,
    ability: null,
    img: "keira",
    faction: "northern",
    type: 1
  },
  "dethmold": {
    name: "戴斯摩",
    power: 6,
    ability: null,
    img: "dethmold",
    faction: "northern",
    type: 1
  },
  "kaedweni_siege_expert": {
    name: "科德温攻城专家",
    power: 1,
    ability: "morale_boost",
    img: "siege_expert1",
    faction: "northern",
    type: 2
  },
  "dun_banner_medic": {
    name: "褐旗营医疗兵",
    power: 5,
    ability: "medic",
    img: "medic",
    faction: "northern",
    type: 2
  },
  "ballista": {
    name: "弩车",
    power: 6,
    ability: null,
    img: "ballista1",
    faction: "northern",
    type: 2
  },
  "trebuchet": {
    name: "投石机",
    power: 6,
    ability: null,
    img: "trebuchet1",
    faction: "northern",
    type: 2
  },
  "thaler": {
    name: "泰勒",
    power: 1,
    ability: "spy",
    img: "thaler",
    faction: "northern",
    type: 2
  },
  "foltest_king_of_temeria": {
    name: "弗尔特斯特：泰梅利亚之王",
    power: -1,
    ability: "foltest_leader1",
    img: "foltest_king",
    faction: "northern",
    type: 3
  },
  "foltest_lord_commander": {
    name: "弗尔特斯特：君王指挥官",
    power: -1,
    ability: "foltest_leader2",
    img: "foltest_commander",
    faction: "northern",
    type: 3
  },
  "foltest_siegemaster": {
    name: "弗尔特斯特：工程专家",
    power: -1,
    ability: "foltest_leader3",
    img: "foltest_siege",
    faction: "northern",
    type: 3
  },
  "foltest_forged": {
    name: "弗尔特斯特：钢铁熔炉",
    power: -1,
    ability: "foltest_leader4",
    img: "foltest_forged",
    faction: "northern",
    type: 3
  },
  "philippa_eilhart": {
    name: "菲丽芭·艾哈特",
    power: 10,
    ability: "hero",
    img: "eilhart",
    faction: "northern",
    type: 1
  },
  "esterad_thyssen": {
    name: "艾斯特达·泰森",
    power: 10,
    ability: "hero",
    img: "thyssen",
    faction: "northern",
    type: 0
  },
  "siege_tower": {
    name: "攻城塔",
    power: 6,
    ability: null,
    img: "siege_tower",
    faction: "northern",
    type: 2
  },
  "catapult": {
    name: "投石车",
    power: 8,
    ability: "tight_bond",
    img: "catapult",
    faction: "northern",
    type: 2
  },


  "decoy": {
    name: "诱饵",
    power: -1,
    ability: "decoy",
    img: "decoy",
    faction: "neutral",
    type: 4
  },
  "scorch": {
    name: "灼烧",
    power: -1,
    ability: "scorch_card",
    img: "scorch",
    faction: "neutral",
    type: 4
  },
  "commanders_horn": {
    name: "战斗号角",
    power: -1,
    ability: "commanders_horn_card",
    img: "horn",
    faction: "neutral",
    type: 4
  },


  "impenetrable_fog": {
    name: "大雾",
    power: -1,
    ability: "weather_fog",
    img: "fog",
    faction: "neutral",
    type: 5
  },
  "biting_frost": {
    name: "霜冻",
    power: -1,
    ability: "weather_frost",
    img: "frost",
    faction: "neutral",
    type: 5
  },
  "torrential_rain": {
    name: "暴雨",
    power: -1,
    ability: "weather_rain",
    img: "rain",
    faction: "neutral",
    type: 5
  },
  "clear_weather": {
    name: "晴天",
    power: -1,
    ability: "weather_clear",
    img: "clear",
    faction: "neutral",
    type: 5
  },

  "dandelion": {
    name: "丹德里恩",
    power: 2,
    ability: "commanders_horn",
    img: "dandelion",
    faction: "neutral",
    type: 0
  },
  "avallach": {
    name: "阿瓦拉克",
    power: 0,
    ability: ["hero", "spy"],
    img: "avallach",
    faction: "neutral",
    type: 0
  },
  "villentretenmerth": {
    name: "维兰特雷坦梅斯",
    power: 7,
    ability: "scorch",
    img: "villentretenmerth",
    faction: "neutral",
    type: 0
  },

  "francesca_pureblood_elf": {
    name: "法兰茜丝卡：纯血精灵",
    power: -1,
    ability: "francesca_leader1",
    img: "francesca_pureblood",
    faction: "scoiatael",
    type: 3
  },
  "francesca_the_beautiful": {
    name: "法兰茜丝卡：美人",
    power: -1,
    ability: "francesca_leader2",
    img: "francesca_beautiful",
    faction: "scoiatael",
    type: 3
  },
  "francesca_daisy_of_the_valley": {
    name: "法兰茜丝卡：山谷中的雏菊",
    power: -1,
    ability: "francesca_leader3",
    img: "francesca_daisy",
    faction: "scoiatael",
    type: 3
  },
  "francesca_queen_of_dol_blathanna": {
    name: "法兰茜丝卡：多尔·布雷坦纳的女王",
    power: -1,
    ability: "francesca_leader4",
    img: "francesca_queen",
    faction: "scoiatael",
    type: 3
  },
  "saesenthessis": {
    name: "萨琪亚",
    power: 10,
    ability: "hero",
    img: "saesenthessis",
    faction: "scoiatael",
    type: 1
  },
  "iorveth": {
    name: "伊欧菲斯",
    power: 10,
    ability: "hero",
    img: "iorveth",
    faction: "scoiatael",
    type: 1
  },
  "isengrim_faoiltiarnah": {
    name: "伊森格林·法欧提亚纳",
    power: 10,
    ability: ["hero", "morale_boost"],
    img: "isengrim",
    faction: "scoiatael",
    type: 0
  },
  "eithne": {
    name: "艾思娜",
    power: 10,
    ability: "hero",
    img: "eithne",
    faction: "scoiatael",
    type: 1
  },
  "havekar_healer": {
    name: "私枭医生",
    power: 0,
    ability: "medic",
    img: "healer",
    faction: "scoiatael",
    type: 1
  },
  "riordain": {
    name: "李欧丹恩",
    power: 1,
    ability: null,
    img: "riordain",
    faction: "scoiatael",
    type: 1
  },
  "toruviel": {
    name: "托鲁维尔",
    power: 2,
    ability: null,
    img: "toruviel",
    faction: "scoiatael",
    type: 1
  },
  "elven_skirmisher": {
    name: "精灵好斗分子",
    power: 2,
    ability: "muster",
    musterType: "skirmisher",
    img: "elven_skirmisher2",
    faction: "scoiatael",
    type: 1
  },
  "dwarven_skirmisher": {
    name: "矮人好斗分子",
    power: 3,
    ability: "muster",
    musterType: "skirmisher",
    img: "skirmisher2",
    faction: "scoiatael",
    type: 0
  },
  "ciaran_aep_easnillien": {
    name: "席朗·依斯尼蓝",
    power: 3,
    ability: "agile",
    img: "easnillien",
    faction: "scoiatael",
    type: 1
  },
  "vrihedd_brigade_recruit": {
    name: "维里赫德见习生",
    power: 4,
    ability: null,
    img: "recruit",
    faction: "scoiatael",
    type: 1
  },
  "dol_blathanna_archer": {
    name: "多尔·布雷坦纳的女王弓箭手",
    power: 4,
    ability: null,
    img: "archer",
    faction: "scoiatael",
    type: 1
  }, /*
  "hav_caaren_medic": {
    name: "Hav’caaren Medic",
    power: 5,
    ability: null,
    img: "", //missing image
    faction: "scoiatael",
    type: 0
  },*/
  "havekar_smuggler": {
    name: "私枭支援",
    power: 5,
    ability: "muster",
    musterType: "smuggler",
    img: "smuggler1",
    faction: "scoiatael",
    type: 0
  },
  "mahakaman_defender": {
    name: "玛哈坎守护者",
    power: 5,
    ability: null,
    img: "defender2",
    faction: "scoiatael",
    type: 0
  },
  "vrihedd_brigade_veteran": {
    name: "维里赫德旅老兵",
    power: 5,
    ability: "agile",
    img: "veteran1",
    faction: "scoiatael",
    type: 0
  },
  "dennis_cranmer": {
    name: "丹尼斯·克蓝莫",
    power: 6,
    ability: null,
    img: "cranmer",
    faction: "scoiatael",
    type: 0
  },
  "filavandrel_aen_fidhail": {
    name: "费拉万卓列",
    power: 6,
    ability: "agile",
    img: "fidhail",
    faction: "scoiatael",
    type: 1
  },
  "ida_emean_aep_sivney": {
    name: "艾达·艾敏",
    power: 6,
    ability: null,
    img: "sivney",
    faction: "scoiatael",
    type: 1
  },
  "yaevinn": {
    name: "亚伊文",
    power: 6,
    ability: "agile",
    img: "yaevinn",
    faction: "scoiatael",
    type: 0
  },
  "barclay_els": {
    name: "巴克莱·艾尔斯",
    power: 6,
    ability: "agile",
    img: "barclay",
    faction: "scoiatael",
    type: 0
  },
  "dol_blathanna_scout": {
    name: "多尔布雷坦纳侦察兵",
    power: 6,
    ability: "agile",
    img: "scout2",
    faction: "scoiatael",
    type: 0
  },
  "milva": {
    name: "米尔瓦",
    power: 10,
    ability: "morale_boost",
    img: "milva",
    faction: "scoiatael",
    type: 1
  },


  "eredin_commander_of_the_red_riders": {
    name: "艾瑞汀:红骑士指挥官",
    power: -1,
    ability: "eredin_leader1",
    img: "eredin_commander",
    faction: "monster",
    type: 3
  },
  "eredin_bringer_of_death": {
    name: "艾瑞汀:死亡使者",
    power: -1,
    ability: "eredin_leader2",
    img: "eredin_bringer",
    faction: "monster",
    type: 3
  },
  "eredin_destroyer_of_worlds": {
    name: "艾瑞汀：世界毁灭者",
    power: -1,
    ability: "eredin_leader3",
    img: "eredin_destroyer",
    faction: "monster",
    type: 3
  },
  "eredin_king_of_the_wild_hunt": {
    name: "艾瑞汀：狂猎之王",
    power: -1,
    ability: "eredin_leader4",
    img: "eredin_king",
    faction: "monster",
    type: 3
  },
  "kayran": {
    name: "巨章鱼怪",
    power: 8,
    ability: ["hero", "morale_boost", "agile"],
    img: "kayran",
    faction: "monster",
    type: 1
  },
  "leshen": {
    name: "鹿首精",
    power: 10,
    ability: "hero",
    img: "leshen",
    faction: "monster",
    type: 1
  },
  "imlerith": {
    name: "伊勒瑞斯",
    power: 10,
    ability: "hero",
    img: "imlerith",
    faction: "monster",
    type: 0
  },
  "draug": {
    name: "战灵",
    power: 10,
    ability: "hero",
    img: "draug",
    faction: "monster",
    type: 0
  },
  "ghoul": {
    name: "尸鬼",
    power: 1,
    ability: "muster",
    musterType: "ghoul",
    img: "ghoul1",
    faction: "monster",
    type: 0
  },
  "nekker": {
    name: "孽鬼",
    power: 2,
    ability: "muster",
    musterType: "nekker",
    img: "nekker1",
    faction: "monster",
    type: 0
  },
  "wyvern": {
    name: "翼手龙",
    power: 2,
    ability: null,
    img: "wyvern",
    faction: "monster",
    type: 1
  },
  "foglet": {
    name: "小雾妖",
    power: 2,
    ability: null,
    img: "foglet",
    faction: "monster",
    type: 0
  },
  "celaeno_harpy": {
    name: "赛尔伊诺鹰身女妖",
    power: 2,
    ability: "agile",
    img: "celaeno_harpy",
    faction: "monster",
    type: 1
  },
  "gargoyle": {
    name: "石像鬼",
    power: 2,
    ability: null,
    img: "gargoyle",
    faction: "monster",
    type: 1
  },
  "cockatrice": {
    name: "石化鸡蛇",
    power: 2,
    ability: null,
    img: "cockatrice",
    faction: "monster",
    type: 1
  },
  "harpy": {
    name: "人面妖鸟",
    power: 2,
    ability: "agile",
    img: "harpy",
    faction: "monster",
    type: 1
  },
  "endrega": {
    name: "安德莱格",
    power: 2,
    ability: null,
    img: "endrega",
    faction: "monster",
    type: 1
  },
  "vampire_bruxa": {
    name: "吸血鬼女",
    power: 4,
    ability: "muster",
    musterType: "vampire",
    img: "vampire_bruxa",
    faction: "monster",
    type: 0
  },
  "vampire_fleder": {
    name: "吸血蝠翼魔",
    power: 4,
    ability: "muster",
    musterType: "vampire",
    img: "vampire_fleder",
    faction: "monster",
    type: 0
  },
  "vampire_garkain": {
    name: "吸血蝠翼脑魔",
    power: 4,
    ability: "muster",
    musterType: "vampire",
    img: "vampire_garkain",
    faction: "monster",
    type: 0
  },
  "vampire_ekimmara": {
    name: "吸血血魔",
    power: 4,
    ability: "muster",
    musterType: "vampire",
    img: "vampire_ekimmara",
    faction: "monster",
    type: 0
  },
  "arachas": {
    name: "蟹蜘蛛",
    power: 4,
    ability: "muster",
    musterType: "arachas",
    img: "arachas1",
    faction: "monster",
    type: 0
  },
  "botchling": {
    name: "尸婴",
    power: 4,
    ability: null,
    img: "botchling",
    faction: "monster",
    type: 0
  },
  "forktail": {
    name: "叉尾龙",
    power: 5,
    ability: null,
    img: "forktail",
    faction: "monster",
    type: 0
  },
  "plague_maiden": {
    name: "瘟疫妖女",
    power: 5,
    ability: null,
    img: "plague_maiden",
    faction: "monster",
    type: 0
  },
  "griffin": {
    name: "格里芬",
    power: 5,
    ability: null,
    img: "griffin",
    faction: "monster",
    type: 0
  },
  "werewolf": {
    name: "狼人",
    power: 5,
    ability: null,
    img: "werewolf",
    faction: "monster",
    type: 0
  },
  "frightener": {
    name: "畏惧者",
    power: 5,
    ability: null,
    img: "frightener",
    faction: "monster",
    type: 0
  },
  "ice_giant": {
    name: "冰霜巨人",
    power: 5,
    ability: null,
    img: "ice_giant",
    faction: "monster",
    type: 2
  },
  "grave_hag": {
    name: "墓穴女巫",
    power: 5,
    ability: null,
    img: "grave_hag",
    faction: "monster",
    type: 1
  },
  /*"vampire_katakan": {
    name: "Vampire: Katakan",
    power: 5,
    ability: "muster",
 musterType: "vampire",
    img: "vampire_katakan",
    faction: "monster",
    type: 0
  },*/
  "crone_whispess": {
    name: "呢喃婆",
    power: 6,
    ability: "muster",
    musterType: "crone",
    img: "crone_whispess",
    faction: "monster",
    type: 0
  },
  "crone_brewess": {
    name: "煮婆",
    power: 6,
    ability: "muster",
    musterType: "crone",
    img: "crone_brewess",
    faction: "monster",
    type: 0
  },
  "crone_weavess": {
    name: "织婆",
    power: 6,
    ability: "muster",
    musterType: "crone",
    img: "crone_weavess",
    faction: "monster",
    type: 0
  },
  "arachas_behemoth": {
    name: "巨型蟹蜘蛛",
    power: 6,
    ability: "muster",
    musterType: "arachas",
    img: "arachas_behemoth",
    faction: "monster",
    type: 2
  },
  "fire_elemental": {
    name: "火元素",
    power: 6,
    ability: null,
    img: "fire_elemental",
    faction: "monster",
    type: 2
  },
  "fiend": {
    name: "恶魔",
    power: 6,
    ability: null,
    img: "fiend",
    faction: "monster",
    type: 0
  },
  "earth_elemental": {
    name: "土元素",
    power: 6,
    ability: null,
    img: "earth_elemental",
    faction: "monster",
    type: 2
  },


  //nilfgaardian
  "emreis_relentless": {
    name: "恩希尔·恩瑞斯：冷血无情",
    power: -1,
    ability: "emreis_leader4",
    img: "emhyr_relentless",
    faction: "nilfgaardian",
    type: 3
  },
  "tibor_eggebracht": {
    name: "test",
    power: 10,
    ability: "hero",
    img: "eggebracht",
    faction: "nilfgaardian",
    type: 1
  },
  "letho_of_gulet": {
    name: "古雷特的雷索",
    power: 10,
    ability: "hero",
    img: "letho",
    faction: "nilfgaardian",
    type: 0
  },
  "morvran_voorhis": {
    name: "莫尔凡·符里斯",
    power: 10,
    ability: "hero",
    img: "voorhis",
    faction: "nilfgaardian",
    type: 2
  },
  "menno_coehoorn": {
    name: "梅诺·寇赫伦",
    power: 10,
    ability: ["hero", "medic"],
    img: "menno",
    faction: "nilfgaardian",
    type: 0
  },
  "siege_technician": {
    name: "攻城技术师",
    power: 0,
    ability: "medic",
    img: "siege_tech",
    faction: "nilfgaardian",
    type: 2
  },
  "etolian_auxiliary_archers": {
    name: "弓箭手支援",
    power: 1,
    ability: "medic",
    img: "aux_archers1",
    faction: "nilfgaardian",
    type: 1
  },
  "albrich": {
    name: "亚伯力奇",
    power: 2,
    ability: null,
    img: "albrich",
    faction: "nilfgaardian",
    type: 1
  },
  "sweers": {
    name: "杂牌军",
    power: 2,
    ability: null,
    img: "sweers",
    faction: "nilfgaardian",
    type: 2
  },
  "nausicaa_cavalry_rider": {
    name: "那乌西卡骑兵",
    power: 2,
    ability: "tight_bond",
    img: "nausicaa_cavalry_rider",
    faction: "nilfgaardian",
    type: 0
  },
  "vreemde": {
    name: "弗林姆德",
    power: 2,
    ability: null,
    img: "vreemde",
    faction: "nilfgaardian",
    type: 0
  },
  "rotten_mangonel": {
    name: "腐烂的投石机",
    power: 3,
    ability: null,
    img: "rotten_mangonel",
    faction: "nilfgaardian",
    type: 2
  },
  "morteisen": {
    name: "莫坦森",
    power: 3,
    ability: null,
    img: "morteisen",
    faction: "nilfgaardian",
    type: 0
  },
  "puttkammer": {
    name: "普特卡摩",
    power: 3,
    ability: null,
    img: "puttkammer",
    faction: "nilfgaardian",
    type: 1
  },
  "impera_brigade_guard": {
    name: "帝国禁卫军",
    power: 3,
    ability: "tight_bond",
    img: "impera_brigade_guard",
    faction: "nilfgaardian",
    type: 0
  },
  "vanhemar": {
    name: "凡赫玛",
    power: 4,
    ability: null,
    img: "vanhemar",
    faction: "nilfgaardian",
    type: 1
  },
  "vattier_de_rideaux": {
    name: "瓦提尔·德·李道克斯",
    power: 4,
    ability: "spy",
    img: "vattier",
    faction: "nilfgaardian",
    type: 0
  },
  "rainfarn": {
    name: "雷恩法",
    power: 4,
    ability: null,
    img: "rainfarn",
    faction: "nilfgaardian",
    type: 0
  },
  "cynthia": {
    name: "辛西亚",
    power: 4,
    ability: null,
    img: "cynthia",
    faction: "nilfgaardian",
    type: 1
  },
  "zerrikanian_fire_scorpion": {
    name: "瑟瑞卡尼亚火蝎",
    power: 5,
    ability: null,
    img: "fire_scorpion",
    faction: "nilfgaardian",
    type: 2
  },
  "young_emmisary": {
    name: "年轻的特使",
    power: 5,
    ability: "tight_bond",
    img: "young_emissary1",
    faction: "nilfgaardian",
    type: 0
  },
  "renuald_aep_matsen": {
    name: "雷努阿·马特森",
    power: 5,
    ability: null,
    img: "renauld",
    faction: "nilfgaardian",
    type: 1
  },
  "siege_engineer": {
    name: "攻城工程师",
    power: 6,
    ability: null,
    img: "siege_engineer",
    faction: "nilfgaardian",
    type: 2
  },
  "cahir_mawr_dyffryn_aep_ceallach": {
    name: "卡西尔·莫瓦·迪弗林·契拉克",
    power: 6,
    ability: null,
    img: "ceallach",
    faction: "nilfgaardian",
    type: 0
  },
  "fringilla_vigo": {
    name: "芙琳吉拉·薇歌",
    power: 6,
    ability: null,
    img: "vigo",
    faction: "nilfgaardian",
    type: 1
  },
  "assire_var_anahid": {
    name: "艾希蕾·阿纳兴",
    power: 6,
    ability: null,
    img: "assire_var_anahid",
    faction: "nilfgaardian",
    type: 1
  },
  "shilard_fitz_oesterlen": {
    name: "希拉德·费兹奥耶斯泰兰",
    power: 7,
    ability: "spy",
    img: "shilard",
    faction: "nilfgaardian",
    type: 0
  },
  "stefan_skellen": {
    name: "史提芬·史凯伦",
    power: 9,
    ability: "spy",
    img: "stefan_skellen",
    faction: "nilfgaardian",
    type: 0
  },
  "heavy_zerrikanian_fire_scorpion": {
    name: "瑟瑞卡尼亚重型火蝎",
    power: 10,
    ability: null,
    img: "heavy_fire_scorpion",
    faction: "nilfgaardian",
    type: 2
  },
  "black_infantry_archer": {
    name: "黑步兵弓箭手",
    power: 10,
    ability: null,
    img: "black_infantry_archer1",
    faction: "nilfgaardian",
    type: 1
  }


}
