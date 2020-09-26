/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : b2b

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 25/09/2020 00:24:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '书籍编号',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '书籍名称',
  `price` decimal(6, 2) UNSIGNED NOT NULL DEFAULT 10.00 COMMENT '书籍价格',
  `image` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '图片URL',
  `information` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '书籍详细信息',
  `user_id` int(11) UNSIGNED NOT NULL COMMENT '外键，user表id',
  `state` enum('offsale','onsale','ontrade') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'onsale' COMMENT '书籍状态：offsale下架 onsale上架 ontrade交易中',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 18215523 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES (1, 'Stars Shine Down', 2333.50, '1.png', 'A page-turning thriller of love and betrayal from the bestselling Master of Suspense and author of If Tomorrow Comes and The Other Side of Midnight.', 1, 'onsale');
INSERT INTO `book` VALUES (2, 'Death Train', 119.00, '2.png', 'In Europe a train carrying a deadly cargo has been hijacked. When the mission looks impossible, the world calls upon UNACO.', 1, 'offsale');
INSERT INTO `book` VALUES (3, '\r\nClear and Present Danger', 288.00, '3.png', 'The CIA take on Colombian drug lords in Tom Clancy\'s fifth No 1 bestseller - now reissued with a new cover.', 2, 'ontrade');
INSERT INTO `book` VALUES (4, '\r\nWeb of Dreams', 160.00, '4.png', 'The Casteel family saga concludes with this fifth and final book as Annie and Luke return to Farthinggale Manor to finally put her past behind her. But the Manor still holds one final key to the mysteries surrounding her family.', 1, 'ontrade');
INSERT INTO `book` VALUES (5, 'To Play the King', 78.00, '5.png', 'Newly elected Prime Minister Francis Urquhart takes on the new King, in the controversial No 1 bestselling second volume in the Francis Urquhart trilogy - now reissued in a new cover.', 2, 'offsale');
INSERT INTO `book` VALUES (6, '\r\nEncounters', 67.50, '6.png', 'A captivating volume of over forty short stories full of love, hope, and fear, from the Sunday Times bestselling author of Lady of Hay.', 1, 'offsale');
INSERT INTO `book` VALUES (7, 'Nothing Lasts Forever', 148.00, '7.png', 'A page-turning novel of desire and broken dreams from the internationally bestselling author of The Other Side of Midnight and If Tomorrow Comes. Three young doctors-their hopes, their dreams, their unexpected desires… Dr.Paige Taylor: She swore it was euthanasia, but when Paige inherited a million dollars from a patient, the D.A. called it murder. Dr. Kat Hunter:She vowed never to let another man too close again-until she accepted the challenge of a deadly bet. Dr. Honey Taft: To make it in medicine, she knew she\'d need something more than the brains God gave her. Racing from the life-and-death decisions of a big major hospital to the tension-packed fireworks of a murder trial, Nothing Lasts Forever lays bare the ambitions and fears of healers and killers, lovers and betrayers. And proves once again that no reader can outguess Sidney Sheldon, the master of the unexpected.', 2, 'offsale');
INSERT INTO `book` VALUES (8, '\r\n\'48', 158.00, '8.png', 'The unmissable new action-thriller from one of the biggest names in British fiction - the No 1 bestselling author of The Ghosts of Sleath, Haunted, The Magic Cottage and The Rats.', 1, 'ontrade');
INSERT INTO `book` VALUES (9, '\r\nDoctor Who and the Abominable Snowmen', 126.00, '9.png', 'The Doctor has been to Det-Sen Monastery before, and expects the welcome of a lifetime. But the monastery is a very different place from when the Doctor last came. Fearing an attack at any moment by the legendary Yeti, the monks are prepared to defend themselves, and see the Doctor as a threat.', 1, 'onsale');
INSERT INTO `book` VALUES (10, '\r\n12 Years a Slave', 45.00, '10.png', 'Twelve Years a Slave by Solomon Northup is a memoir of a black man who was born free in New York state but kidnapped, sold into slavery and kept in bondage for 12 years in Louisiana before the American Civil War. He provided details of slave markets in Washington, DC, as well as describing at length cotton cultivation on major plantations in Louisiana', 1, 'onsale');
INSERT INTO `book` VALUES (11, '\r\nFantastic Beasts and Where to Find Them', 69.00, '11.png', 'Explore Fantastic Beasts and Where to Find Them in this intricately illustrated black & white gallery of characters and scenes from the film and designs used in its making, which is officially licensed by Warner Bros. Consumer Products. From the bustling city streets and buildings of a vibrant 1926 New York, to Tina and Queenie’s apartment and the wonders of MACUSA, this book invites you to color your way through the adventure – even from inside Newt’s case! You will also find numerous props and artifacts inside, including wands, signs and symbols, and maybe even a fantastic beast….', 1, 'onsale');
INSERT INTO `book` VALUES (12, 'Fantastic Beasts and Where to Find Them', 78.00, '12.png', 'Step inside the world of the talented art departments who, led by Academy Award(R)-winning production designer Stuart Craig, were responsible for the creation of the unforgettable characters, locations and beasts from the eagerly anticipated new adventure in J.K. Rowling\'s Wizarding World.', 47, 'onsale');
INSERT INTO `book` VALUES (13, '\r\nGreat Gatsby', 223.00, '13.png', 'WITH A NEW INTRODUCTION BY GEOFF DYERThe world and his mistress are at Jay Gatsby\'s party. But Gatsby stands apart from the crowd, isolated by a secret longing.This edition of The Great Gatsby is the result of a unique collaboration between Tiffany & Co.', 1, 'onsale');
INSERT INTO `book` VALUES (14, '\r\nTHE HOBBIT FACSIMILE FIRST EDITION', 132.00, '14.png', 'This sumptuous gift set contains a replica of the very rare first edition of The Hobbit, plus a book about the books\'s publication history and a CD of previously unreleased archive recordings featuring J.R.R. Tolkien reading from his book. The Hobbit was published on 21 September 1937 with a print run of 1,500 copies. With a beautiful cover design by the author and a coloured frontispiece painting, the book proved to be popular and was reprinted within three months, and history was already being made.', 44, 'offsale');
INSERT INTO `book` VALUES (15, 'THE ART OF THE LORD OF THE RINGS [60th Anniversary', 144.00, '15.png', 'To celebrate the 60th Anniversary of the publication of The Lord of the Rings, a sumptuous full-colour art book containing the complete collection of almost 200 sketches, drawings, paintings and maps by J.R.R. Tolkien.', 1, 'onsale');
INSERT INTO `book` VALUES (16, '\r\nThe Invincible Iron Man, Volume 1', 53.00, '16.png', 'Tony Stark - Iron Man, billionaire industrialist, and director of S.H.I.E.L.D. - faces the most overwhelming challenge of his life. Ezekiel Stane, the son of Tony\'s late business rival and archenemy Obadiah, has set his sights, his genius, and his considerable fortune on the task of destroying Tony Stark and Iron Man.', 1, 'ontrade');
INSERT INTO `book` VALUES (17, '\r\nAbominable', 86.00, '17.png', 'Bear witness as two of the Marvel Universe\'s most deadly villains make life even more unbearable for the Incredible Hulk First, watch as the Abomination - the only gamma-spawned creature able to match the Hulk\'s strength - strikes a bargain with a secret organization by promising to bring in the Hulk once and for all Then, see what happens when Crusher Creel - a.k.a. the Absorbing Man', 1, 'onsale');
INSERT INTO `book` VALUES (18, '\r\nAvengers: Hawkeye', 77.00, '18.png', 'Introducing The Ace Archer of the Avengers in some of his sharpest adventures His beginnings as a malfeasant marksman His solo stand against X-Men adversary Deathbird Plus: double-costumed debuts for Hawkeye\'s future bride Bobbi Morse, a.k.a. Agent 19, and the couple\'s whirlwind romance in Hawkeye\'s first mini-series Guest-starring the Black Widow, Spider-Man, and more Collects Hawkeye #1-4, Tales of Suspense #57, Marvel Super Action #1, Avengers #189, and Marvel Team-Up #95.', 1, 'onsale');
INSERT INTO `book` VALUES (19, '\r\nAstonishing Thor', 86.00, '19.png', 'The God of Thunder faces the fury of living planets When terrible storms threaten to tear our world apart, Thor traces the cause to Ego, the Living Planet - out of his orbit and rocketing across the solar system on an unstoppable quest to rescue his long-lost brother, held captive by the cosmic entity the Collector. but there will be no happy reunion at the end of his journey - for when Ego and Alterego meet, only one can survive...and earth surely will be destroyed. only Thor has power enough to avert the pending apocalypse - but to do so, he\'ll have to rely on the help of a wind goddess with questionable motives...and a stormy history with the God of Thunder.', 1, 'onsale');
INSERT INTO `book` VALUES (20, 'White Teeth', 79.00, '20.png', 'White Teeth？？', 1, 'onsale');
INSERT INTO `book` VALUES (21, '拾遗记', 27.00, '21.png', '《拾遗记》作者为东晋王嘉，字子年，陇西安阳(今甘肃渭源)人。该书本为19卷，被南梁宗室萧绮整理为10卷。《拾遗记》集杂史、博物于一体，语言华丽奇诡，具有很高的文学成就和艺术成就。《拾遗记》前九卷上自春皇庖牺,下至晋时事,以历史年代为经, 记述了帝王后妃、文人名士、宦官娼妓等各个阶层历史人物的异闻逸事。部分卷篇后有萧绮录语，对王嘉正文或补正、或辩难、或发挥、或评价。', 1, 'onsale');
INSERT INTO `book` VALUES (22, '边城（纪念版）', 34.00, '22.png', '《边城（纪念版）》是沈从文颇负盛名的代表作品，以20世纪30年代川湘交界的边城小镇茶峒为背景，以兼具抒情诗和小品文的优美笔触，描绘了湘西边城淳朴的世道民风和天然的生活状态。语言古朴清新，寄托着从文先生关于“美”与“爱”的美学理想，彰显了人性的至真、至善与至美。\r\n　　《边城（纪念版）》除收录《边城》外，还精选了其颇具代表性的“人性美”小说9篇，内容详实，全新修订，带领读者重寻湘西世界的自由朴野之美。', 1, 'onsale');
INSERT INTO `book` VALUES (23, '文学履途：漫游在伟大故事诞生之地', 55.00, '23.png', '纳博科夫如何在穿越美国的旅途中写出了《洛丽塔》？\r\n\r\n在牛津，刘易斯·卡罗尔如何创作出了《爱丽丝漫游奇境记》？\r\n\r\n爱丽丝·门罗与温哥华这座城市之间，有着怎样深层的联系？\r\n\r\n博尔赫斯在故乡布宜诺斯艾利斯留下了那些痕迹，这座城市又如何塑造了他？\r\n\r\n本书是《纽约时报》“文学履途”专栏的集结，收录了38篇与伟大作家有关的旅行地的游记。风格各异的《纽约时报》专栏作者，用文字带领我们探寻文学家在自然与城市中留下的“遗产”，以及他们创造出的那些不朽作品的源头。', 1, 'offsale');
INSERT INTO `book` VALUES (24, '北京女子图鉴', 24.00, '24.png', '那些年生活在北京的我们，是怎样成为了我们？\r\n\r\n★10个北漂故事，1个北京太太们的篇外故事，超过30个不同的人。\r\n\r\n那些年生活在北京的我们，是怎样成为了我们？\r\n\r\n★10个北漂故事，1个北京太太们的篇外故事，超过30个不同的人。\r\n来京十九年，我哭过许多次，也见过许多人哭，尤其是那些女子——\r\n\r\n那些在心碎以后，化着漂亮的妆，穿着性感的衣服，然后在酒吧醉到不省人事，哭着说“可我还是想他”的女子；\r\n\r\n那些被老板骂得狗血淋头，躲在楼梯间里蹲在地上捂住嘴偷偷哭的女子；', 1, 'onsale');
INSERT INTO `book` VALUES (25, '天边一星子', 53.00, '25.png', '本书是青年实力作家邓安庆全新短篇小说集，共收录《天边一星子》《跳蚤》《迷路火光》等8篇极具代表性的短篇作品。\r\n\r\n疏离的父母、故乡的少年、城市里短暂交集的阿姨……每一个人物都令人联想到自己的亲人、童年的玩伴、可爱的陌生人等亲切原初的记忆。生活中虽然有烦扰，但身处热闹人间，总有一些深藏的温暖、隐约的牵绊，如天边的一颗星子，指引人心。', 1, 'onsale');
INSERT INTO `book` VALUES (26, '盛世小民', 45.00, '26.png', '年轻时为生个儿子不惜一切代价的贺家湾村民贺世跃，人到中年却遇到了新的挑战：自己省吃俭用拼尽全力，也无法在城里给儿子买一套婚房。为了达成这个目标，无奈之下的贺世跃竟出人意料地走上了极端。\r\n\r\n　　故事以贺世跃的死作结，却留给儿子无尽的悲伤，也留给读者心惊肉跳的震撼！\r\n\r\n　　然而这正是在新时期对于旧观念*强烈的规劝：父亲可以付出一切，但如此惨痛的代价，叫儿子如何承受？', 1, 'onsale');
INSERT INTO `book` VALUES (27, '唐诗三百首（儿童注音美绘本）', 23.00, '27.png', '这本《唐诗三百首》，甄选适合孩子认知规律的经典古诗。这是适合孩子学习的、容易理解和吟诵、流传广泛的版本。加上通俗易懂的精要讲解，更能培养孩子对诗歌的兴趣。同时配以精美的图画，让孩子可以体会古诗情景交融的美。', 1, 'onsale');
INSERT INTO `book` VALUES (28, '伊索寓言', 34.00, '28.png', '《伊索寓言》的故事大多数都来自于民间，是作者社会低层人民的生活和思想感情的反映和描写。编者精选了其中较为简短有趣、通俗易懂的篇目，配置以纯手绘的彩图，并加注了标准的汉语拼音。读者阅读起来会有一种畅快淋漓的感觉，并能从中学会怎样辨别是非好坏，怎样变得聪明、智慧。', 1, 'onsale');
INSERT INTO `book` VALUES (29, '小学生美绘本四大名著：三国演义', 36.00, '29.png', '《三国演义》是中国四大古典名著之一，小说描写了从东汉末年到西晋初年间近百年的历史变迁，有大家耳熟能详的经典故事：桃园结义、青梅煮酒、三顾茅庐、草船借箭、三气周瑜、七擒孟获……有气势磅礴的战争场面，有叱咤风云的英雄人物，其中诸葛亮、周瑜、关羽、张飞、曹操、刘备等众多英雄人物的故事尤为小朋友所喜爱。', 1, 'onsale');
INSERT INTO `book` VALUES (30, '一百个人的十年', 37.50, '30.png', '已经过去，它对众多人的生活产生了深刻的影响。“**”是什么？“**”的真相到底是什么？“**”到底对人产生了什么样的影响？《一百的人的十年》为我们似乎提供了一个清晰的答案。作者冯骥才试图以一百个各不相同的经历，尽可能反映这一经历十年、全社会大劫难异常复杂的全貌。通过记录普通人的经历，反映生活本质的真实。《一百个人的十年》将使“**”的受难者们感受到某种东西以使内心获得宁静，使那些“**”的制造者们从中受到人类良知的提醒而引起终生不安。', 1, 'onsale');
INSERT INTO `book` VALUES (31, '活着', 43.50, '31.png', '述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫如洗。他的父亲被他活活气死，母亲则在穷困中患了重病，福贵前去求药，却在途中被国民党抓去当壮丁。经过几番波折回到家里，才知道母亲早已去世，妻子家珍含辛茹苦地养大两个儿女。', 1, 'onsale');
INSERT INTO `book` VALUES (32, '天才在左 疯子在右', 38.00, '32.png', '这本书，是一群误入歧途的天才的故事，也是一群入院治疗的疯子的故事。这本书，是作者高铭耗时4年深入医院精神科、公安部等神秘机构，和数百名“非常态人类”直接接触后，以访谈形式记录了生活在社会另一个角落的人群（精神病患者、心理障碍者等边缘人）的所思所想。', 1, 'onsale');
INSERT INTO `book` VALUES (33, '岁月如刀 我来领教', 15.00, '33.png', '你从来不缺梦想，不缺意气风发，缺的是应对这个世界的手段。\r\n\r\n一个厌恶了职场世俗的年轻人，辞职开了一家西餐厅，取名YOUNG ZONE，要向世人证明自己年轻的力量。\r\n\r\n然而餐厅生意一直很差，他无比沮丧，直到有一天，店里开始经常出现一个叫Belinda的客人……这个年轻人的努力仿佛有了方向……\r\n\r\n不亏待每一份热情，不讨好任何的冷漠，不挥霍信任，不怠慢自己。在你被社会碰的头破血流时，这本书帮你避开风雨。', 1, 'onsale');
INSERT INTO `book` VALUES (34, '上学记', 19.50, '34.png', '《上学记》是著名学者何兆武先生的个人口述史。何先生生于1921年，在北平读小学和中学，在西南联大读大学和研究生，共七年，读过四个系，之后在清华大学任教。《上学记》写的就是何先生1949年以前的求学生涯，其中西南联大的七年是主要篇幅。何先生以治哲学史和思想史的思想底蕴，以谦和率真的学者姿态，以历史亲历者的回忆和感受，讲述在特殊的年代，尤其是抗战烽火中，一代人的青春和理想、知识和风雅。书出版后，好评如潮，当然也引起了一些争议。但何先生说：“为尊者讳、为贤者讳，并不是真正对人的尊重。一个人的思想本来是活泼的、与时俱进的，又何必一定要把它弄成一种思想上的木乃伊，让人去顶礼膜拜呢？”', 1, 'onsale');
INSERT INTO `book` VALUES (35, '乌合之众', 24.00, '35.png', '乌合之众》是法国著名社会心理学家古斯塔夫.勒庞的重要著作，该书首次出版于1895年，迄今已有一百多年的历史，被誉为大众心理学的开山之作。该书深入浅出地剖析了群体的种种特点及其成因，精致地描述了集体心态，对人们理解集体行为的作用以及对社会心理学的思考发挥了巨大影响。', 1, 'onsale');
INSERT INTO `book` VALUES (36, '曙光集', 23.60, '36.png', '《曙光集》可以说是这二十多年间作者的心路历程，他走过的，他思考的，他了解的，他关心的，他热爱的，以及他期望的一切。《曙光集》仍然采用了Selected Papers的排序方法。', 1, 'onsale');
INSERT INTO `book` VALUES (37, '飞花令里读诗词', 26.00, '37.png', '本书以诗词作为载体，从诗歌的缘起——《诗经》《楚辞》，到唐宋诗词，明清佳句，精心遴选了近百位位诗人的近200首经典古诗词，依循古代飞花令的行令规则以及现代人的阅读习惯，选取诗词中经常出现的春、夏、秋、冬、风、霜、雨、雪、花、云、月、夜等几十个常见字进行编排，每一首诗词后均配有相应的注释与优美的文字赏析，带领读者在诗香词海之间开启一场唯美动人的诗词文化之旅。', 1, 'ontrade');
INSERT INTO `book` VALUES (38, '余生很长，别慌张，别失望', 51.00, '38.png', '余生很长，别慌张，别失望。有的人22岁毕业，到27岁才找到工作；有的人没上过大学，却创办了世界yiliu的企业；有的人25岁结婚，但婚姻并不幸福；有的人30岁依然单身，但每天都很快乐……所以，不要去羡慕别人的成功，也别过分谴责自己的错误。每个人都有属于自己的时刻表，别让任何人打乱你人生的节奏。', 1, 'onsale');
INSERT INTO `book` VALUES (39, '浮生六记', 23.00, '39.png', '浮生六记》是清代文人沈复写作的自传散文。因其以真言述真情，从不刻意造作，得以浑然天成，独树一帜，达\"乐而不淫，哀而不伤\"之境界，深为后世文人所推崇，流传至今，已成经典。', 1, 'onsale');
INSERT INTO `book` VALUES (40, '皮囊', 38.00, '40.png', '《皮囊》是蔡崇达的第一部文学作品，一部有着小说阅读质感的散文集。作者本着对故乡亲人的情感，用客观、细致、冷静的方式，讲述一系列刻在骨肉间的故事,体现一个福建渔业小镇上的风土人情和时代变迁。作者通过本书，与读者分享其对三大现代人共通命题的思考，回答那些我们始终要面对的问题——亲人的生老病死、理想与现实的差距、故乡与远方的选择。', 1, 'onsale');
INSERT INTO `book` VALUES (18215521, 't1', 1.00, 'book5.png', 't2', 47, 'offsale');
INSERT INTO `book` VALUES (18215522, 'testbook', 100.00, 'book1.png', 'this is for test', 47, 'onsale');

-- ----------------------------
-- Table structure for trade
-- ----------------------------
DROP TABLE IF EXISTS `trade`;
CREATE TABLE `trade`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '交易编号',
  `time` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '交易时间',
  `book_id` int(11) UNSIGNED NOT NULL COMMENT '外键，书籍编号',
  `buyer_user_id` int(11) UNSIGNED NOT NULL COMMENT '购买用户的编号',
  `state` enum('on','off') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'on为交易发起，off为交易结束',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `buyer_user_id`(`buyer_user_id`) USING BTREE,
  INDEX `book_id`(`book_id`) USING BTREE,
  CONSTRAINT `trade_ibfk_2` FOREIGN KEY (`buyer_user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `trade_ibfk_3` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 18215538 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of trade
-- ----------------------------
INSERT INTO `trade` VALUES (3, '', 3, 1, 'on');
INSERT INTO `trade` VALUES (4, '', 4, 2, 'on');
INSERT INTO `trade` VALUES (18215524, '1600526901477', 5, 2, 'off');
INSERT INTO `trade` VALUES (18215528, '1600527183381', 7, 2, 'off');
INSERT INTO `trade` VALUES (18215530, '1600527366059', 8, 2, 'on');
INSERT INTO `trade` VALUES (18215532, '1600698700579', 14, 44, 'off');
INSERT INTO `trade` VALUES (18215534, '1600773306530', 16, 47, 'on');
INSERT INTO `trade` VALUES (18215536, '1600773464933', 12, 47, 'off');
INSERT INTO `trade` VALUES (18215537, '1600773924635', 37, 47, 'on');
INSERT INTO `trade` VALUES (18215538, '1600963959825', 23, 1, 'off');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户编号',
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '密码 MD5加密',
  `tel` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '电话号',
  `head` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '头像URL',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '111111', '111111', '1', 'a.jpg');
INSERT INTO `user` VALUES (2, '222222', '222222', '2', '2');
INSERT INTO `user` VALUES (44, '333333', '333333', NULL, NULL);
INSERT INTO `user` VALUES (45, '444444', '444444', NULL, NULL);
INSERT INTO `user` VALUES (46, '2222221', '2222221', NULL, NULL);
INSERT INTO `user` VALUES (47, '555555', '555556', NULL, NULL);
INSERT INTO `user` VALUES (48, 'test123', 'test12', NULL, NULL);
INSERT INTO `user` VALUES (49, 'test333', 'test333', NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
