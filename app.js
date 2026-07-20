const STORAGE_KEY = "ielts-vocab-studio-pwa-v1";
const bands = ["2.5", "3.0", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0", "6.5", "7.0", "7.5", "8.0", "8.5", "9.0"];
const bandIcons = {
  "2.5": "B2.5",
  "3.0": "B3",
  "3.5": "B3.5",
  "4.0": "B4",
  "4.5": "B4.5",
  "5.0": "B5",
  "5.5": "B5.5",
  "6.0": "B6",
  "6.5": "B6.5",
  "7.0": "B7",
  "7.5": "B7.5",
  "8.0": "B8",
  "8.5": "B8.5",
  "9.0": "B9"
};
const topicIcons = {
  academic: "icon-learn",
  argument: "icon-scale",
  business: "icon-briefcase",
  culture: "icon-users",
  development: "icon-topics",
  economy: "icon-scale",
  education: "icon-learn",
  environment: "icon-leaf",
  food: "icon-heart",
  government: "icon-building",
  health: "icon-heart",
  housing: "icon-building",
  logic: "icon-grammar",
  media: "icon-ai",
  place: "icon-building",
  science: "icon-flask",
  society: "icon-users",
  technology: "icon-ai",
  tourism: "icon-plane",
  travel: "icon-plane",
  work: "icon-briefcase"
};

const bandInfo = {
  "2.5": ["Survival words", "Core words for simple daily sentences."],
  "3.0": ["Everyday communication", "Words for habits, places, people, and objects."],
  "3.5": ["Basic opinions", "Words for likes, dislikes, and simple reasons."],
  "4.0": ["Topic foundations", "Familiar IELTS Speaking Part 1 vocabulary."],
  "4.5": ["Clear explanations", "Words for reasons, results, and examples."],
  "5.0": ["Developed answers", "Words that help expand Speaking and Writing ideas."],
  "5.5": ["Academic bridges", "Words that move from everyday English into academic English."],
  "6.0": ["Task 2 essentials", "Useful words and phrases for IELTS essays."],
  "6.5": ["Stronger collocations", "More natural combinations for lexical resource."],
  "7.0": ["Precise academic language", "Specific words for clearer arguments."],
  "7.5": ["Nuanced expression", "Words for degree, balance, and conditions."],
  "8.0": ["High-scoring control", "Academic words with stronger control."],
  "8.5": ["Sophisticated argument", "Words for deeper and more balanced reasoning."],
  "9.0": ["Native-like precision", "Precise high-level words for advanced IELTS writing."]
};

const recommendationSources = [
  { source: "English Profile", url: "https://www.englishprofile.org/wordlists", focus: "CEFR vocabulary levels" },
  { source: "Victoria University of Wellington AWL", url: "https://www.wgtn.ac.nz/lals/resources/academicwordlist", focus: "Academic Word List" },
  { source: "IELTS Liz", url: "https://ieltsliz.com/vocabulary/", focus: "IELTS topic vocabulary" },
  { source: "British Council LearnEnglish", url: "https://learnenglish.britishcouncil.org/english-levels/improve-your-english-level/improve-your-ielts-writing-skills", focus: "IELTS writing practice" }
];

const studyModes = {
  ielts: "IELTS Vocab",
  communication: "Giao tiếp",
  toeic: "TOEIC",
  "global-english": "Cambridge Global English 1-9"
};

const grammarBanks = [
  {
    title: "Adverbs for transitions",
    icon: "INFO",
    items: [
      ["however", "introduce contrast", "Many people prefer cars; however, public transport is more sustainable."],
      ["therefore", "show result", "Online courses are flexible; therefore, they suit working adults."],
      ["moreover", "add a stronger point", "The policy is affordable; moreover, it benefits low-income families."],
      ["nevertheless", "contrast after concession", "The scheme is expensive; nevertheless, it may reduce pollution."],
      ["consequently", "formal result", "Fuel prices increased; consequently, commuting became more expensive."],
      ["meanwhile", "show two things happening at the same time", "Cities expand rapidly; meanwhile, rural areas lose workers."]
    ]
  },
  {
    title: "Quantifiers",
    icon: "INFO",
    items: [
      ["many", "countable plural nouns", "Many students use apps to revise vocabulary."],
      ["much", "uncountable nouns", "Much information online is difficult to verify."],
      ["a great deal of", "formal uncountable amount", "A great deal of money is spent on advertising."],
      ["a number of", "countable plural nouns", "A number of cities have introduced bike lanes."],
      ["the majority of", "more than half", "The majority of young people use social media daily."],
      ["a minority of", "less than half", "A minority of workers prefer night shifts."]
    ]
  },
  {
    title: "Quantity adjectives",
    icon: "INFO",
    items: [
      ["substantial", "large and important", "Substantial investment is needed in public transport."],
      ["limited", "not enough", "Rural areas may have limited access to hospitals."],
      ["sufficient", "enough for a purpose", "Schools need sufficient funding for digital resources."],
      ["excessive", "too much", "Excessive screen time can harm children's sleep."],
      ["considerable", "large enough to notice", "Tourism brings considerable income to local communities."],
      ["minimal", "very small", "Some policies have only minimal impact on behaviour."]
    ]
  }
];

const toeicWords = [
  ["invoice", "a list of goods or services and their cost"],
  ["deadline", "the latest time by which work must be finished"],
  ["shipment", "goods sent from one place to another"],
  ["appointment", "an arranged meeting"],
  ["refund", "money returned to a customer"],
  ["venue", "a place where an event happens"],
  ["itinerary", "a travel plan"],
  ["supplier", "a company that provides goods"],
  ["conference", "a large formal meeting"],
  ["reservation", "an arrangement to keep a seat, room, or table"]
];

const stageWords = [
  ["stage 1", "classroom object", "pencil"],
  ["stage 1", "classroom object", "book"],
  ["stage 1", "classroom object", "desk"],
  ["stage 1", "classroom person", "teacher"],
  ["stage 1", "classroom person", "student"],
  ["stage 1", "colour word", "yellow"],
  ["stage 1", "number word", "ten"],
  ["stage 1", "family word", "mother"],
  ["stage 1", "animal word", "cat"],
  ["stage 1", "action word", "listen"],
  ["stage 1", "school instruction", "open"],
  ["stage 1", "school instruction", "write"],

  ["stage 2", "daily routine", "brush teeth"],
  ["stage 2", "daily routine", "wake up"],
  ["stage 2", "daily routine", "have breakfast"],
  ["stage 2", "time word", "morning"],
  ["stage 2", "time word", "evening"],
  ["stage 2", "food word", "vegetables"],
  ["stage 2", "food word", "sandwich"],
  ["stage 2", "place word", "playground"],
  ["stage 2", "weather word", "cloudy"],
  ["stage 2", "feeling word", "happy"],
  ["stage 2", "ability word", "can"],
  ["stage 2", "question word", "where"],

  ["stage 3", "animal habitat", "forest"],
  ["stage 3", "animal habitat", "river"],
  ["stage 3", "animal word", "insect"],
  ["stage 3", "nature word", "plant"],
  ["stage 3", "body word", "wings"],
  ["stage 3", "movement word", "climb"],
  ["stage 3", "story word", "character"],
  ["stage 3", "story word", "adventure"],
  ["stage 3", "school subject", "music"],
  ["stage 3", "maths word", "measure"],
  ["stage 3", "grammar word", "because"],
  ["stage 3", "comparison word", "different"],

  ["stage 4", "school subject", "science"],
  ["stage 4", "school subject", "history"],
  ["stage 4", "geography word", "continent"],
  ["stage 4", "geography word", "map"],
  ["stage 4", "weather word", "temperature"],
  ["stage 4", "materials word", "metal"],
  ["stage 4", "materials word", "plastic"],
  ["stage 4", "process word", "experiment"],
  ["stage 4", "thinking word", "predict"],
  ["stage 4", "reading word", "paragraph"],
  ["stage 4", "community word", "neighbourhood"],
  ["stage 4", "environment word", "recycle"],

  ["stage 5", "community place", "library"],
  ["stage 5", "community place", "museum"],
  ["stage 5", "community place", "market"],
  ["stage 5", "technology word", "website"],
  ["stage 5", "technology word", "password"],
  ["stage 5", "health word", "nutrition"],
  ["stage 5", "health word", "exercise"],
  ["stage 5", "culture word", "tradition"],
  ["stage 5", "culture word", "festival"],
  ["stage 5", "writing word", "opinion"],
  ["stage 5", "linking word", "however"],
  ["stage 5", "responsibility word", "respect"],

  ["stage 6", "healthy habit", "balanced diet"],
  ["stage 6", "healthy habit", "physical activity"],
  ["stage 6", "science word", "energy"],
  ["stage 6", "science word", "electricity"],
  ["stage 6", "environment word", "pollution"],
  ["stage 6", "environment word", "habitat"],
  ["stage 6", "social word", "community"],
  ["stage 6", "thinking word", "evidence"],
  ["stage 6", "thinking word", "conclusion"],
  ["stage 6", "media word", "advertisement"],
  ["stage 6", "history word", "ancient"],
  ["stage 6", "geography word", "climate"],

  ["stage 7", "environment word", "recycling"],
  ["stage 7", "environment word", "conservation"],
  ["stage 7", "global topic", "migration"],
  ["stage 7", "global topic", "urbanisation"],
  ["stage 7", "science word", "ecosystem"],
  ["stage 7", "technology word", "innovation"],
  ["stage 7", "citizenship word", "rights"],
  ["stage 7", "citizenship word", "responsibility"],
  ["stage 7", "argument word", "advantage"],
  ["stage 7", "argument word", "disadvantage"],
  ["stage 7", "research word", "source"],
  ["stage 7", "analysis word", "compare"],

  ["stage 8", "global issue", "climate change"],
  ["stage 8", "global issue", "food security"],
  ["stage 8", "global issue", "inequality"],
  ["stage 8", "science word", "biodiversity"],
  ["stage 8", "technology word", "artificial intelligence"],
  ["stage 8", "media word", "misinformation"],
  ["stage 8", "economy word", "trade"],
  ["stage 8", "society word", "identity"],
  ["stage 8", "argument word", "perspective"],
  ["stage 8", "argument word", "impact"],
  ["stage 8", "academic word", "analyse"],
  ["stage 8", "academic word", "evaluate"],

  ["stage 9", "academic skill", "critical thinking"],
  ["stage 9", "academic skill", "synthesis"],
  ["stage 9", "academic skill", "interpretation"],
  ["stage 9", "global issue", "sustainability"],
  ["stage 9", "global issue", "human rights"],
  ["stage 9", "science word", "genetic engineering"],
  ["stage 9", "technology word", "digital ethics"],
  ["stage 9", "society word", "social mobility"],
  ["stage 9", "economy word", "globalisation"],
  ["stage 9", "argument word", "counterargument"],
  ["stage 9", "research word", "reliability"],
  ["stage 9", "writing word", "thesis statement"]
];

const officialStageUnits = {
  "stage-7": [
    {
      value: "stage7-unit1",
      title: "Unit 1: Making connections",
      subtitle: "Meeting, greeting, gifts, family and school connections",
      words: ["meeting", "greeting", "custom", "gesture", "handshake", "bow", "tradition", "gift", "present", "receive", "advice", "relative", "family member", "family history", "relationship", "generation", "school community", "classmate", "connection", "respect", "polite", "appropriate", "introduce", "welcome"]
    },
    {
      value: "stage7-unit2",
      title: "Unit 2: Time to celebrate",
      subtitle: "Festivals, special occasions, New Year and celebrations",
      words: ["celebration", "festival", "occasion", "New Year", "Diwali", "Chinese New Year", "fireworks", "lantern", "dragon", "spring", "parade", "costume", "ceremony", "decorate", "tradition", "symbol", "calendar", "annual", "wedding", "birthday", "anniversary", "April Fools' Day", "joke", "poem"]
    },
    {
      value: "stage7-unit3",
      title: "Unit 3: What we wear, what we waste",
      subtitle: "Clothes, style, materials, waste and recycling",
      words: ["style", "stylish", "fashion", "clothes", "T-shirt", "cotton", "plastic", "silver", "fabric", "material", "ancient", "Egyptian", "significance", "waste", "reuse", "reduce", "recycle", "recycling", "environment", "sustainable", "locally", "globally", "consumer", "pollution", "throw away", "repair"]
    },
    {
      value: "stage7-unit4",
      title: "Unit 4: From A to B",
      subtitle: "Transport systems, journeys, cities and quality of life",
      words: ["transport", "transport system", "public transport", "rail", "road", "water transport", "journey", "travel", "route", "commute", "vehicle", "traffic", "passenger", "station", "harbour", "canal", "city", "compare", "quality of life", "urban", "Venice", "danger", "environmental threat", "destination", "infrastructure"]
    },
    {
      value: "stage7-unit5",
      title: "Unit 5: The great outdoors",
      subtitle: "School trips, nature, outdoor camps, adventure and future plans",
      words: ["outdoors", "school trip", "camp", "outdoor camp", "nature", "well-being", "fresh air", "equipment", "backpack", "map", "compass", "route", "adventure", "explore", "landscape", "New Zealand", "Australia", "prediction", "future plan", "hiking", "shelter", "safety", "challenge", "wildlife", "journey"]
    },
    {
      value: "stage7-unit6",
      title: "Unit 6: Sports and games",
      subtitle: "Sports equipment, achievement, Paralympics, Olympics and fair play",
      words: ["sport", "game", "equipment", "athlete", "training", "quality", "succeed", "success", "determination", "teamwork", "Winter Paralympic Games", "football", "score", "final score", "Olympics", "ancient Olympics", "discus", "javelin", "long jump", "running", "race", "fair", "profile", "competitive", "champion"]
    },
    {
      value: "stage7-unit7",
      title: "Unit 7: Success",
      subtitle: "Jobs, science, entrepreneurs, personality and role models",
      words: ["success", "work", "job", "career", "electrician", "firefighter", "scientist", "inventor", "entrepreneur", "disability", "problem", "solution", "personality", "curious", "determined", "role model", "profile", "autobiography", "presentation", "quiz", "invention", "engineering", "electricity", "chemical", "evacuate", "achievement"]
    },
    {
      value: "stage7-unit8",
      title: "Unit 8: In the news",
      subtitle: "Magazines, newspapers, reports, fake news and social media",
      words: ["news", "school magazine", "newspaper", "article", "headline", "editor", "reporter", "issue", "print", "puzzle", "advert", "daily", "local newspaper", "national newspaper", "fake news", "true", "false", "source", "social media", "post", "share", "comment", "human interest story", "autobiography", "implied meaning"]
    },
    {
      value: "stage7-unit9",
      title: "Unit 9: The digital world",
      subtitle: "Digital communication, robots, screen time, instructions and technology",
      words: ["digital", "digital communication", "contact list", "downloaded", "uploaded", "Touch ID", "Wi-Fi", "voice recognition", "search", "emoji", "link", "camera", "robot", "digital tablet", "humanoid", "built-in facial recognition", "technology", "charge", "malfunction", "survey", "instruction", "logical order", "farming technology", "screen time", "online"]
    }
  ]
};

function stageUnitsFor(stageValue = state?.band || "stage-1") {
  return officialStageUnits[stageValue] || [{
    value: "source-needed",
    title: "Add official book units",
    subtitle: "Waiting for the exact Cambridge Global English unit list"
  }];
}

function currentStageUnit() {
  return stageUnitsFor(state.band).find((unit) => unit.value === state.stageUnit) || stageUnitsFor(state.band)[0];
}

function hasOfficialStageUnits() {
  return Array.isArray(officialStageUnits[state.band]) && officialStageUnits[state.band].length > 0;
}

const stageWordDetails = {
  pencil: ["/ˈpen.səl/", "bút chì: một đồ vật dùng để viết hoặc vẽ, có thể tẩy và sửa dễ dàng", "A writing object with graphite inside, useful for writing, drawing, and correcting school work."],
  book: ["/bʊk/", "sách: vật có nhiều trang để đọc, học hoặc ghi thông tin", "A set of pages with words or pictures, useful for reading, learning, and finding information."],
  desk: ["/desk/", "bàn học: nơi học sinh đặt sách vở, viết bài hoặc làm việc trong lớp", "A table used for studying, writing, reading, or keeping school things during a lesson."],
  teacher: ["/ˈtiː.tʃər/", "giáo viên: người giúp học sinh học kiến thức và luyện kỹ năng", "A person who helps students learn, practise, ask questions, and understand new ideas."],
  student: ["/ˈstjuː.dənt/", "học sinh: người học ở trường hoặc trong một lớp học", "A person who learns a subject, practises skills, and takes part in lessons."],
  yellow: ["/ˈjel.əʊ/", "màu vàng: màu sáng giống mặt trời hoặc quả chuối chín", "A bright colour like the sun, useful for describing objects, clothes, food, and pictures."],
  ten: ["/ten/", "số mười: số đứng sau chín và trước mười một", "The number after nine, useful for counting people, objects, minutes, or points."],
  mother: ["/ˈmʌð.ər/", "mẹ: người phụ nữ chăm sóc con trong gia đình", "A female parent, often used when talking about family, care, and daily life."],
  cat: ["/kæt/", "con mèo: vật nuôi nhỏ, thường có lông mềm và kêu meo meo", "A small pet animal, useful for talking about animals, homes, and preferences."],
  listen: ["/ˈlɪs.ən/", "lắng nghe: chú ý vào âm thanh hoặc lời người khác nói", "To pay attention to sounds or to what someone is saying."],
  open: ["/ˈəʊ.pən/", "mở: làm cho một vật không còn đóng lại", "To move something so it is not closed, such as a book, door, or box."],
  write: ["/raɪt/", "viết: tạo chữ, từ hoặc câu trên giấy hay màn hình", "To make letters, words, or sentences on paper or on a screen."],
  "brush teeth": ["/brʌʃ tiːθ/", "đánh răng: làm sạch răng bằng bàn chải và kem đánh răng", "To clean your teeth with a toothbrush, usually in the morning and before bed."],
  "wake up": ["/weɪk ʌp/", "thức dậy: ngừng ngủ và bắt đầu một ngày mới", "To stop sleeping and become ready to start the day."],
  "have breakfast": ["/hæv ˈbrek.fəst/", "ăn sáng: ăn bữa đầu tiên trong ngày", "To eat the first meal of the day, usually in the morning."],
  morning: ["/ˈmɔː.nɪŋ/", "buổi sáng: phần đầu của ngày", "The early part of the day, useful for talking about routines and time."],
  evening: ["/ˈiːv.nɪŋ/", "buổi tối: thời gian cuối ngày sau buổi chiều", "The later part of the day, useful for talking about routines, family time, and plans."],
  vegetables: ["/ˈvedʒ.tə.bəlz/", "rau củ: thực phẩm từ cây, thường tốt cho sức khỏe", "Plant foods such as carrots or spinach, useful for talking about healthy eating."],
  sandwich: ["/ˈsæn.wɪdʒ/", "bánh sandwich: món ăn có nhân ở giữa các lát bánh mì", "Food made with bread and a filling, useful for talking about meals or packed lunches."],
  playground: ["/ˈpleɪ.ɡraʊnd/", "sân chơi: nơi trẻ em chơi và vận động", "A place where children play, run, climb, and spend time with friends."],
  cloudy: ["/ˈklaʊ.di/", "nhiều mây: thời tiết có nhiều mây trên bầu trời", "Weather with many clouds in the sky, useful for describing the day."],
  happy: ["/ˈhæp.i/", "vui vẻ: cảm thấy tốt, hài lòng hoặc phấn khởi", "Feeling good or pleased, useful for talking about emotions and experiences."],
  can: ["/kæn/", "có thể: dùng để nói về khả năng hoặc sự cho phép", "A word used to talk about ability or permission."],
  where: ["/weər/", "ở đâu: từ để hỏi về địa điểm", "A question word used to ask about a place or position."],
  "balanced diet": ["/ˌbæl.ənst ˈdaɪ.ət/", "chế độ ăn cân bằng", "A way of eating different healthy foods in the right amounts."],
  "physical activity": ["/ˌfɪz.ɪ.kəl ækˈtɪv.ə.ti/", "hoạt động thể chất", "Movement such as sport, exercise, or active play that keeps the body healthy."],
  energy: ["/ˈen.ə.dʒi/", "năng lượng", "The power that makes people, machines, or natural processes work."],
  electricity: ["/ɪˌlekˈtrɪs.ə.ti/", "điện", "A form of energy used for lights, machines, and technology."],
  pollution: ["/pəˈluː.ʃən/", "sự ô nhiễm", "Harmful substances or noise that damage air, water, land, or health."],
  habitat: ["/ˈhæb.ɪ.tæt/", "môi trường sống", "The natural place where an animal or plant lives."],
  community: ["/kəˈmjuː.nə.ti/", "cộng đồng", "A group of people who live, study, or work together."],
  evidence: ["/ˈev.ɪ.dəns/", "bằng chứng", "Facts or information that help show whether something is true."],
  conclusion: ["/kənˈkluː.ʒən/", "kết luận", "The final idea you reach after thinking about information."],
  advertisement: ["/ədˈvɜː.tɪs.mənt/", "quảng cáo", "A message that tries to persuade people to buy or notice something."],
  ancient: ["/ˈeɪn.ʃənt/", "cổ đại", "Very old, especially from a long time in history."],
  climate: ["/ˈklaɪ.mət/", "khí hậu", "The usual weather conditions of a place over a long period."],
  recycling: ["/ˌriːˈsaɪ.klɪŋ/", "tái chế", "The process of using old materials again to make new things."],
  conservation: ["/ˌkɒn.səˈveɪ.ʃən/", "sự bảo tồn", "The protection of nature, resources, or important places."],
  migration: ["/maɪˈɡreɪ.ʃən/", "sự di cư", "The movement of people or animals from one place to another."],
  urbanisation: ["/ˌɜː.bən.aɪˈzeɪ.ʃən/", "đô thị hóa", "The growth of towns and cities as more people live there."],
  ecosystem: ["/ˈiː.kəʊˌsɪs.təm/", "hệ sinh thái", "A community of living things and their environment."],
  innovation: ["/ˌɪn.əˈveɪ.ʃən/", "sự đổi mới", "A new idea, method, or invention that improves something."],
  rights: ["/raɪts/", "quyền lợi", "The basic freedoms or fair treatment people should have."],
  responsibility: ["/rɪˌspɒn.səˈbɪl.ə.ti/", "trách nhiệm", "A duty to do something or care for something."],
  advantage: ["/ədˈvɑːn.tɪdʒ/", "lợi thế", "A good or useful point about something."],
  disadvantage: ["/ˌdɪs.ədˈvɑːn.tɪdʒ/", "bất lợi", "A bad or difficult point about something."],
  source: ["/sɔːs/", "nguồn", "Where information, material, or help comes from."],
  compare: ["/kəmˈpeə/", "so sánh", "To look at two or more things and see how they are similar or different."],
  "climate change": ["/ˈklaɪ.mət tʃeɪndʒ/", "biến đổi khí hậu", "Long-term changes in the world's weather and temperature patterns."],
  "food security": ["/fuːd sɪˈkjʊə.rə.ti/", "an ninh lương thực", "A situation where people can get enough safe and healthy food."],
  inequality: ["/ˌɪn.ɪˈkwɒl.ə.ti/", "sự bất bình đẳng", "An unfair difference between groups of people."],
  biodiversity: ["/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/", "đa dạng sinh học", "The variety of animals, plants, and living things in an area."],
  "artificial intelligence": ["/ˌɑː.tɪˈfɪʃ.əl ɪnˈtel.ɪ.dʒəns/", "trí tuệ nhân tạo", "Computer technology that can do tasks that usually need human intelligence."],
  misinformation: ["/ˌmɪs.ɪn.fəˈmeɪ.ʃən/", "thông tin sai lệch", "Wrong or misleading information."],
  trade: ["/treɪd/", "thương mại", "The activity of buying, selling, or exchanging goods and services."],
  identity: ["/aɪˈden.tə.ti/", "bản sắc", "Who a person or group is, including their qualities, culture, or beliefs."],
  perspective: ["/pəˈspek.tɪv/", "góc nhìn", "A way of thinking about or seeing something."],
  impact: ["/ˈɪm.pækt/", "tác động", "A strong effect or influence on someone or something."],
  analyse: ["/ˈæn.əl.aɪz/", "phân tích", "To study something carefully to understand it."],
  evaluate: ["/ɪˈvæl.ju.eɪt/", "đánh giá", "To judge the value, quality, or importance of something."],
  "critical thinking": ["/ˌkrɪt.ɪ.kəl ˈθɪŋ.kɪŋ/", "tư duy phản biện", "The skill of judging information carefully before forming an opinion."],
  synthesis: ["/ˈsɪn.θə.sɪs/", "sự tổng hợp", "The process of combining ideas or information into a whole."],
  interpretation: ["/ɪnˌtɜː.prəˈteɪ.ʃən/", "sự diễn giải", "An explanation of the meaning of information, text, or events."],
  sustainability: ["/səˌsteɪ.nəˈbɪl.ə.ti/", "tính bền vững", "The ability to continue without damaging the future."],
  "human rights": ["/ˌhjuː.mən ˈraɪts/", "nhân quyền", "Basic rights and freedoms that every person should have."],
  "genetic engineering": ["/dʒəˌnet.ɪk ˌen.dʒɪˈnɪə.rɪŋ/", "kỹ thuật di truyền", "Changing the genes of living things for science, medicine, or farming."],
  "digital ethics": ["/ˌdɪdʒ.ɪ.təl ˈeθ.ɪks/", "đạo đức số", "Rules and values for using technology responsibly."],
  "social mobility": ["/ˌsəʊ.ʃəl məʊˈbɪl.ə.ti/", "dịch chuyển xã hội", "The ability to move to a different social or economic position."],
  globalisation: ["/ˌɡləʊ.bəl.aɪˈzeɪ.ʃən/", "toàn cầu hóa", "The process by which countries, economies, and cultures become more connected."],
  counterargument: ["/ˈkaʊn.tərˌɑːɡ.jə.mənt/", "lập luận phản biện", "An argument against another argument."],
  reliability: ["/rɪˌlaɪ.əˈbɪl.ə.ti/", "độ đáng tin cậy", "The quality of being trusted or depended on."],
  "thesis statement": ["/ˈθiː.sɪs ˌsteɪt.mənt/", "luận điểm chính", "A sentence that states the main idea of an essay or argument."]
};

const speakingForecastQuestions = {
  1: [
    "Do you prefer studying in the morning or in the evening? Why?",
    "What kind of apps do you use most often?",
    "Do people in your city use public transport often?",
    "How do you usually learn new words?",
    "Do you prefer spending free time indoors or outdoors?"
  ],
  2: [
    "Describe a useful skill you learned recently. You should say what it was, how you learned it, why it was useful, and how you will use it in the future.",
    "Describe a place in your city that you enjoy visiting. You should say where it is, what people do there, why you like it, and how it could be improved.",
    "Describe a time when technology helped you solve a problem. You should say what happened, what technology you used, how it helped, and how you felt.",
    "Describe an important decision you made. You should say what the decision was, why you made it, who helped you, and whether it was successful."
  ],
  3: [
    "How can governments encourage people to use public transport?",
    "Do you think technology makes students more independent?",
    "Why do some people find it difficult to change their habits?",
    "Should schools focus more on practical skills or academic knowledge?",
    "How might cities change in the next twenty years?"
  ]
};

const communicationGrammarBanks = [
  {
    title: "Everyday connectors",
    icon: "INFO",
    items: [
      ["also", "add a simple idea", "I like this cafe. Also, the staff are friendly."],
      ["but", "show contrast", "I want to go out, but I have homework."],
      ["so", "show result", "It was raining, so we stayed home."],
      ["then", "sequence actions", "We had dinner, then we watched a film."],
      ["actually", "softly correct or add detail", "Actually, I prefer tea to coffee."],
      ["by the way", "change topic naturally", "By the way, are you free tomorrow?"]
    ]
  },
  {
    title: "Conversation quantifiers",
    icon: "INFO",
    items: [
      ["a lot of", "many or much in daily speech", "I have a lot of things to do."],
      ["some", "an unknown amount", "Can I have some water?"],
      ["a few", "a small number", "I have a few close friends."],
      ["a little", "a small amount", "I need a little time."],
      ["enough", "as much as needed", "We have enough chairs."],
      ["too much", "more than needed", "I spend too much time online."]
    ]
  },
  {
    title: "Polite phrases",
    icon: "INFO",
    items: [
      ["Could you...?", "make a polite request", "Could you help me with this form?"],
      ["Would you like...?", "offer something", "Would you like some coffee?"],
      ["I'm afraid...", "soften bad news", "I'm afraid I can't come today."],
      ["That sounds...", "react naturally", "That sounds interesting."],
      ["I was wondering...", "ask indirectly", "I was wondering if you could explain it again."],
      ["No worries", "respond casually", "No worries, we can do it tomorrow."]
    ]
  }
];

const toeicGrammarBanks = [
  {
    title: "TOEIC sentence patterns",
    icon: "INFO",
    items: [
      ["subject-verb agreement", "match singular/plural subjects", "The manager approves the schedule."],
      ["passive voice", "common in notices", "The meeting has been postponed."],
      ["relative clauses", "add workplace details", "Employees who arrive early may register first."],
      ["conditionals", "explain policy", "If you need assistance, contact reception."],
      ["prepositions", "time/place accuracy", "The report is due by Friday."],
      ["comparatives", "compare business options", "This supplier is more reliable than the previous one."]
    ]
  },
  {
    title: "Business quantifiers",
    icon: "INFO",
    items: [
      ["several", "more than two", "Several applicants were invited."],
      ["numerous", "many, formal", "Numerous clients requested refunds."],
      ["sufficient", "enough", "We have sufficient stock."],
      ["limited", "not much", "Limited seating is available."],
      ["additional", "extra", "Additional information is required."],
      ["each", "every single one", "Each participant must sign the form."]
    ]
  },
  {
    title: "Email transitions",
    icon: "INFO",
    items: [
      ["regarding", "introduce topic", "Regarding your invoice, please see the attachment."],
      ["therefore", "show result", "The venue is unavailable; therefore, the event was moved."],
      ["in addition", "add formal detail", "In addition, all staff must attend training."],
      ["as a result", "show business consequence", "Sales increased; as a result, we hired more staff."],
      ["otherwise", "warn about result", "Please confirm today; otherwise, your booking may be cancelled."],
      ["on behalf of", "represent someone", "I am writing on behalf of the finance team."]
    ]
  }
];

const stageGrammarBanks = [
  {
    title: "Stage sentence builders",
    icon: "INFO",
    items: [
      ["I can...", "talk about ability", "I can describe my classroom."],
      ["There is / There are", "describe places", "There are many books in the library."],
      ["because", "give a reason", "I like science because it is interesting."],
      ["first / next / finally", "tell a process", "First, plant the seed. Next, water it."],
      ["always / sometimes / never", "talk about routines", "I sometimes read after school."],
      ["should", "give advice", "We should protect animals."]
    ]
  },
  {
    title: "Stage quantifiers",
    icon: "INFO",
    items: [
      ["some", "not exact", "There are some pencils on the desk."],
      ["many", "a large number", "Many animals live in forests."],
      ["a few", "a small number", "I have a few questions."],
      ["enough", "as much as needed", "We have enough time."],
      ["more / less", "compare amounts", "We need more water and less plastic."],
      ["all / most / some", "group ideas", "Most students like projects."]
    ]
  },
  {
    title: "Stage connectors",
    icon: "INFO",
    items: [
      ["and", "add information", "I like maths and English."],
      ["but", "show difference", "It is sunny, but it is cold."],
      ["so", "show result", "I was tired, so I went home."],
      ["when", "talk about time", "I read when I get home."],
      ["if", "talk about condition", "If it rains, we stay inside."],
      ["while", "two actions together", "I listen while I draw."]
    ]
  }
];

const communicationWords = [
  ["greeting", "a polite way to start a conversation"],
  ["small talk", "light everyday conversation"],
  ["appointment", "a planned time to meet someone"],
  ["directions", "instructions about how to get somewhere"],
  ["suggestion", "an idea you offer to someone"],
  ["apology", "something you say when you are sorry"],
  ["invitation", "a request for someone to join an event"],
  ["preference", "something you like more than another thing"],
  ["request", "a polite thing you ask for"],
  ["opinion", "what you think about something"]
];

const communicationSpeakingQuestions = {
  1: ["How was your day?", "What do you usually do after school or work?", "What kind of food do you like?", "How do you usually travel around your city?"],
  2: ["Role-play: invite a friend to study with you this weekend.", "Role-play: ask for directions to a library.", "Role-play: order a drink politely.", "Role-play: apologise for being late."],
  3: ["What makes a conversation friendly?", "Why is polite language important?", "How can people become more confident speakers?", "What topics are easy to talk about with new friends?"]
};

const toeicSpeakingQuestions = {
  1: ["Read this workplace notice aloud: The meeting will begin at nine in Conference Room B.", "Read this announcement aloud: Please submit your travel expenses by Friday."],
  2: ["Describe a busy office reception area.", "Describe a business meeting in progress.", "Describe a team working on a project."],
  3: ["Do you prefer working alone or in a team? Why?", "What makes customer service effective?", "How should companies train new employees?", "Why is punctuality important at work?"]
};

const stageSpeakingQuestions = {
  1: ["What is your favourite subject?", "Describe your classroom.", "What animals do you like?", "What do you do after school?"],
  2: ["Describe a picture of your school day.", "Talk about a healthy habit.", "Describe a place in your community.", "Tell me about an animal and its habitat."],
  3: ["Why should students read every day?", "How can children help the environment?", "What makes a good friend?", "Why is teamwork important at school?"]
};

const curriculumConfigs = {
  ielts: {
    label: "IELTS Vocab",
    icon: "IELTS",
    theme: "ielts",
    levelKicker: "IELTS ladder",
    levelTitle: "Band cards",
    defaultLevel: "2.5",
    levels: bands.map((band) => ({ value: band, title: `Band ${band}`, subtitle: bandInfo[band][0], icon: bandIcons[band] })),
    grammar: grammarBanks,
    speaking: { labels: { 1: "Part 1", 2: "Part 2", 3: "Part 3" }, questions: speakingForecastQuestions, note: "Quarterly IELTS forecast-style rotation." },
    gameScopes: [{ value: "band", label: "Current IELTS band" }, { value: "topics", label: "IELTS topics" }],
    defaultGameScope: "band"
  },
  communication: {
    label: "Giao tiếp",
    icon: "CHAT",
    theme: "communication",
    levelKicker: "Daily English",
    levelTitle: "Conversation stages",
    defaultLevel: "daily",
    levels: [
      { value: "daily", title: "Daily talk", subtitle: "Home, food, routines", icon: "DAY" },
      { value: "travel", title: "Travel talk", subtitle: "Directions and places", icon: "TRV" },
      { value: "school", title: "School talk", subtitle: "Classroom and friends", icon: "SCH" },
      { value: "work", title: "Work talk", subtitle: "Polite workplace English", icon: "WRK" }
    ],
    grammar: communicationGrammarBanks,
    speaking: { labels: { 1: "Warm-up", 2: "Role play", 3: "Real chat" }, questions: communicationSpeakingQuestions, note: "Real-life conversation rotation." },
    gameScopes: [{ value: "communication", label: "Communication vocabulary" }],
    defaultGameScope: "communication"
  },
  toeic: {
    label: "TOEIC",
    icon: "TOEIC",
    theme: "toeic",
    levelKicker: "TOEIC goals",
    levelTitle: "Score targets",
    defaultLevel: "550",
    levels: [
      { value: "350", title: "TOEIC 350+", subtitle: "Workplace basics", icon: "1" },
      { value: "550", title: "TOEIC 550+", subtitle: "Office communication", icon: "2" },
      { value: "750", title: "TOEIC 750+", subtitle: "Business fluency", icon: "3" },
      { value: "900", title: "TOEIC 900+", subtitle: "High precision", icon: "4" }
    ],
    grammar: toeicGrammarBanks,
    speaking: { labels: { 1: "Read", 2: "Describe", 3: "Opinion" }, questions: toeicSpeakingQuestions, note: "Business English and TOEIC Speaking-style prompts." },
    gameScopes: [{ value: "toeic", label: "TOEIC vocabulary" }],
    defaultGameScope: "toeic"
  },
  "global-english": {
    label: "Cambridge Global English 1-9",
    icon: "STAGE",
    theme: "cambridge",
    levelKicker: "Vinschool pathway",
    levelTitle: "Stages 1-9",
    defaultLevel: "stage-1",
    levels: Array.from({ length: 9 }, (_, index) => ({ value: `stage-${index + 1}`, title: `Stage ${index + 1}`, subtitle: `Cambridge Global English Stage ${index + 1}`, icon: `${index + 1}` })),
    grammar: stageGrammarBanks,
    speaking: { labels: { 1: "Talk", 2: "Picture", 3: "Think" }, questions: stageSpeakingQuestions, note: "Stage-based school speaking practice." },
    gameScopes: [{ value: "stages", label: "Stages 1-9 vocabulary" }],
    defaultGameScope: "stages"
  }
};

const ieltsTopicBanks = [
  topicBank("education", "Education", "education", ["curriculum", "tuition", "literacy", "discipline", "assessment", "scholarship", "classroom", "qualification", "academic pressure", "lifelong learning"]),
  topicBank("environment", "Environment", "environment", ["biodiversity", "deforestation", "emissions", "conservation", "ecosystem", "habitat loss", "renewable energy", "carbon footprint", "waste management", "climate resilience"]),
  topicBank("technology", "Technology", "technology", ["automation", "artificial intelligence", "digital literacy", "cybersecurity", "data privacy", "innovation", "online platform", "screen time", "remote access", "virtual learning"]),
  topicBank("health", "Health", "health", ["public health", "preventive care", "obesity", "mental wellbeing", "nutrition", "sedentary lifestyle", "healthcare system", "vaccination", "life expectancy", "medical treatment"]),
  topicBank("work", "Work and Careers", "work", ["employment", "job satisfaction", "work-life balance", "remote work", "career prospects", "salary", "promotion", "workplace culture", "flexible schedule", "professional development"]),
  topicBank("cities", "Cities and Urban Life", "place", ["urbanisation", "housing shortage", "public transport", "traffic congestion", "green space", "city planning", "high-rise building", "commuting", "urban poverty", "local amenities"]),
  topicBank("transport", "Transport", "travel", ["rail network", "road safety", "fuel efficiency", "traffic jam", "public transit", "cycling lane", "pedestrian area", "commuter", "vehicle emissions", "transport infrastructure"]),
  topicBank("family", "Family and Relationships", "society", ["parenting", "childcare", "generation gap", "family bond", "elderly care", "household duties", "single-parent family", "extended family", "peer pressure", "emotional support"]),
  topicBank("crime", "Crime and Law", "society", ["law enforcement", "criminal behaviour", "rehabilitation", "deterrent", "prison sentence", "juvenile crime", "victim", "community service", "legal system", "reoffending"]),
  topicBank("media", "Media and Advertising", "technology", ["mass media", "advertising campaign", "consumer behaviour", "media bias", "news coverage", "influencer", "target audience", "misinformation", "brand loyalty", "social media platform"]),
  topicBank("globalisation", "Globalisation", "society", ["international trade", "cultural exchange", "global market", "outsourcing", "multinational company", "economic integration", "cultural identity", "migration", "global supply chain", "cross-border cooperation"]),
  topicBank("culture", "Culture and Tradition", "society", ["cultural heritage", "traditional values", "custom", "festival", "national identity", "cultural diversity", "preserve culture", "local tradition", "art form", "historical site"]),
  topicBank("tourism", "Travel and Tourism", "travel", ["tourist attraction", "hospitality", "eco-tourism", "local economy", "souvenir", "tourism revenue", "overcrowding", "cultural site", "travel restriction", "sustainable tourism"]),
  topicBank("food", "Food and Diet", "health", ["balanced diet", "processed food", "organic produce", "food security", "eating habits", "fast food", "home-cooked meal", "food waste", "sugar intake", "nutrition label"]),
  topicBank("sports", "Sports and Fitness", "health", ["physical activity", "team sport", "competitive sport", "fitness routine", "sportsmanship", "athlete", "exercise habit", "public facility", "training programme", "sedentary behaviour"]),
  topicBank("housing", "Housing and Architecture", "place", ["affordable housing", "rental market", "residential area", "property price", "urban density", "living space", "housing policy", "neighbourhood", "construction", "home ownership"]),
  topicBank("money", "Money and Consumerism", "society", ["consumer culture", "saving habit", "household budget", "financial literacy", "debt", "disposable income", "materialism", "shopping habit", "cost of living", "purchasing power"]),
  topicBank("science", "Science and Research", "academic", ["scientific evidence", "research findings", "experiment", "breakthrough", "innovation", "laboratory", "ethical concern", "data analysis", "medical research", "space exploration"]),
  topicBank("animals", "Animals and Nature", "environment", ["wildlife", "endangered species", "animal welfare", "conservation area", "natural habitat", "poaching", "biodiversity", "domestic animal", "ecosystem balance", "species extinction"]),
  topicBank("communication", "Communication", "technology", ["face-to-face interaction", "body language", "online communication", "social connection", "language barrier", "instant messaging", "public speaking", "misunderstanding", "digital communication", "interpersonal skills"]),
  topicBank("government", "Government and Policy", "government", ["public policy", "taxpayer", "welfare", "regulation", "public spending", "infrastructure investment", "subsidy", "law-making", "public service", "national priority"]),
  topicBank("inequality", "Inequality and Poverty", "society", ["income gap", "social mobility", "poverty line", "disadvantaged group", "equal opportunity", "wealth distribution", "living standard", "social welfare", "economic hardship", "marginalised community"]),
  topicBank("energy", "Energy and Resources", "environment", ["fossil fuel", "solar power", "wind energy", "energy consumption", "natural resource", "energy efficiency", "power plant", "resource depletion", "renewable source", "electricity demand"]),
  topicBank("internet", "Internet and Social Media", "technology", ["online identity", "digital footprint", "privacy setting", "viral content", "online community", "internet access", "cyberbullying", "content moderation", "algorithm", "information overload"]),
  topicBank("children", "Children and Childhood", "society", ["child development", "early education", "play-based learning", "parental guidance", "child safety", "screen exposure", "social skills", "childhood obesity", "learning environment", "emotional development"]),
  topicBank("elderly", "Ageing Population", "society", ["elderly care", "retirement", "pension", "ageing society", "healthcare demand", "social isolation", "life expectancy", "senior citizen", "intergenerational support", "care home"]),
  topicBank("art", "Art and Creativity", "society", ["creative expression", "performing arts", "visual art", "public funding", "art gallery", "cultural value", "creative industry", "art education", "musical performance", "artistic talent"]),
  topicBank("language", "Language Learning", "education", ["bilingualism", "fluency", "pronunciation", "grammar accuracy", "language acquisition", "mother tongue", "foreign language", "communication skill", "vocabulary range", "language barrier"]),
  topicBank("business", "Business and Economy", "work", ["entrepreneurship", "startup", "market competition", "profit margin", "economic growth", "small business", "customer demand", "business model", "productivity", "investment"]),
  topicBank("public-space", "Public Spaces and Community", "place", ["public park", "community centre", "shared space", "local facility", "neighbourhood safety", "social cohesion", "urban design", "public library", "recreational area", "community engagement"]),
  topicBank("digital-privacy", "Digital Privacy", "technology", ["personal data", "privacy breach", "data protection", "surveillance", "online consent", "privacy regulation", "facial recognition", "digital footprint", "encrypted message", "user tracking"]),
  topicBank("artificial-intelligence", "Artificial Intelligence", "technology", ["machine learning", "algorithmic bias", "automation", "human oversight", "AI ethics", "predictive system", "robotic process", "intelligent software", "job displacement", "decision-making system"]),
  topicBank("automation-jobs", "Automation and Jobs", "work", ["routine labour", "workforce transition", "reskilling", "technological unemployment", "productivity gain", "manual task", "human labour", "industrial automation", "future workforce", "labour market"]),
  topicBank("remote-work", "Remote Work", "work", ["home office", "flexible arrangement", "virtual meeting", "employee autonomy", "digital collaboration", "workplace isolation", "productivity tracking", "hybrid model", "commuting reduction", "remote workforce"]),
  topicBank("mental-health", "Mental Health", "health", ["stress management", "anxiety", "emotional wellbeing", "counselling service", "social support", "mental resilience", "workplace stress", "academic pressure", "psychological health", "burnout"]),
  topicBank("public-health", "Public Health Systems", "health", ["healthcare access", "preventive medicine", "public hospital", "medical funding", "health inequality", "emergency care", "primary care", "disease prevention", "health campaign", "patient care"]),
  topicBank("urban-planning", "Urban Planning", "place", ["zoning policy", "walkable city", "mixed-use development", "urban density", "public transport hub", "green corridor", "city infrastructure", "housing supply", "smart city", "urban renewal"]),
  topicBank("rural-development", "Rural Development", "place", ["rural infrastructure", "agricultural community", "regional investment", "rural healthcare", "local employment", "internet access", "village economy", "rural school", "transport connection", "community resilience"]),
  topicBank("migration", "Migration and Immigration", "society", ["economic migrant", "refugee", "integration", "border policy", "cultural adaptation", "host community", "labour migration", "language barrier", "citizenship", "social inclusion"]),
  topicBank("population-growth", "Population Growth", "society", ["birth rate", "population density", "demographic pressure", "resource demand", "urban expansion", "family planning", "population policy", "overpopulation", "public services", "demographic change"]),
  topicBank("gender-equality", "Gender Equality", "society", ["gender gap", "equal pay", "workplace discrimination", "female leadership", "gender stereotype", "parental leave", "career opportunity", "women's rights", "gender representation", "social norm"]),
  topicBank("education-reform", "Education Reform", "education", ["standardised testing", "student-centred learning", "teacher training", "curriculum reform", "digital classroom", "assessment method", "school funding", "vocational education", "critical thinking", "learning outcome"]),
  topicBank("higher-education", "Higher Education", "education", ["university degree", "tuition fee", "student debt", "research university", "academic freedom", "graduate employment", "campus life", "higher education funding", "degree value", "university admission"]),
  topicBank("vocational-training", "Vocational Training", "education", ["technical skill", "apprenticeship", "trade school", "practical training", "industry partnership", "employability", "skill shortage", "hands-on learning", "certificate programme", "work readiness"]),
  topicBank("online-learning", "Online Learning", "education", ["virtual classroom", "self-paced course", "online assessment", "learning platform", "digital resource", "student engagement", "remote instruction", "internet connection", "interactive lesson", "e-learning access"]),
  topicBank("climate-change", "Climate Change", "environment", ["global warming", "sea-level rise", "extreme weather", "carbon emission", "climate policy", "adaptation strategy", "mitigation measure", "flood risk", "climate justice", "green transition"]),
  topicBank("water-scarcity", "Water Scarcity", "environment", ["freshwater supply", "water shortage", "drought", "water conservation", "irrigation", "clean water access", "groundwater", "water management", "desalination", "water pollution"]),
  topicBank("plastic-waste", "Plastic Waste", "environment", ["single-use plastic", "microplastic", "recycling scheme", "packaging waste", "plastic ban", "marine pollution", "waste sorting", "circular economy", "biodegradable material", "consumer packaging"]),
  topicBank("air-pollution", "Air Pollution", "environment", ["vehicle emission", "industrial smoke", "air quality", "particulate matter", "respiratory disease", "clean air policy", "pollution monitoring", "urban smog", "low-emission zone", "public transport use"]),
  topicBank("renewable-energy", "Renewable Energy", "environment", ["solar panel", "wind turbine", "energy storage", "green energy", "hydropower", "renewable transition", "electric grid", "energy subsidy", "low-carbon economy", "clean technology"]),
  topicBank("nuclear-energy", "Nuclear Energy", "environment", ["nuclear power", "radioactive waste", "energy security", "power station", "nuclear safety", "low-carbon electricity", "public concern", "reactor", "waste disposal", "energy debate"]),
  topicBank("biodiversity-loss", "Biodiversity Loss", "environment", ["species decline", "habitat destruction", "ecosystem service", "conservation effort", "wildlife protection", "invasive species", "genetic diversity", "deforestation", "marine ecosystem", "species recovery"]),
  topicBank("ocean-conservation", "Ocean Conservation", "environment", ["marine habitat", "overfishing", "coral reef", "ocean acidification", "marine reserve", "plastic debris", "coastal ecosystem", "fish stock", "sea level", "marine biodiversity"]),
  topicBank("sustainable-living", "Sustainable Living", "environment", ["eco-friendly habit", "minimalism", "reusable product", "ethical consumption", "energy saving", "low-waste lifestyle", "local produce", "sustainable choice", "carbon footprint", "green household"]),
  topicBank("consumer-behaviour", "Consumer Behaviour", "society", ["buying habit", "brand preference", "impulse purchase", "consumer choice", "advertising influence", "shopping trend", "customer loyalty", "ethical consumer", "online review", "price sensitivity"]),
  topicBank("digital-currency", "Digital Currency", "economy", ["cashless payment", "cryptocurrency", "digital wallet", "financial transaction", "online banking", "payment security", "central bank", "financial technology", "transaction fee", "digital economy"]),
  topicBank("taxation", "Taxation", "government", ["income tax", "tax revenue", "tax burden", "progressive tax", "public spending", "tax avoidance", "government budget", "taxpayer", "corporate tax", "fiscal policy"]),
  topicBank("welfare-state", "Welfare State", "government", ["social welfare", "unemployment benefit", "public assistance", "pension system", "income support", "welfare dependency", "safety net", "state support", "means-tested benefit", "social protection"]),
  topicBank("public-transport-policy", "Public Transport Policy", "government", ["fare subsidy", "bus network", "rail investment", "transport planning", "commuter route", "service reliability", "public transit", "urban mobility", "transport funding", "ticket pricing"]),
  topicBank("traffic-management", "Traffic Management", "travel", ["congestion charge", "road capacity", "traffic flow", "speed limit", "parking policy", "road pricing", "traffic signal", "rush hour", "vehicle restriction", "commuter behaviour"]),
  topicBank("road-safety", "Road Safety", "travel", ["seat belt", "speeding", "drunk driving", "road accident", "pedestrian safety", "traffic law", "driver education", "vehicle inspection", "safe crossing", "cycling safety"]),
  topicBank("space-exploration", "Space Exploration", "science", ["space mission", "satellite", "astronaut", "scientific discovery", "space technology", "space funding", "planetary research", "rocket launch", "space agency", "human exploration"]),
  topicBank("medical-ethics", "Medical Ethics", "health", ["patient consent", "genetic testing", "medical privacy", "end-of-life care", "clinical trial", "ethical dilemma", "organ donation", "health data", "doctor-patient relationship", "bioethics"]),
  topicBank("genetic-engineering", "Genetic Engineering", "science", ["gene editing", "genetic modification", "designer baby", "genetic disease", "biotechnology", "ethical concern", "crop modification", "DNA testing", "genetic research", "medical breakthrough"]),
  topicBank("food-security", "Food Security", "food", ["crop yield", "food supply", "agricultural production", "food shortage", "famine", "supply chain", "sustainable farming", "food distribution", "nutrition access", "global hunger"]),
  topicBank("agriculture", "Agriculture and Farming", "environment", ["organic farming", "crop rotation", "pesticide", "soil fertility", "farm labour", "agricultural subsidy", "livestock", "irrigation system", "rural livelihood", "sustainable agriculture"]),
  topicBank("fashion", "Fashion and Clothing", "society", ["fast fashion", "ethical fashion", "textile waste", "clothing brand", "consumer trend", "personal style", "fashion industry", "sustainable fabric", "dress code", "manufacturing labour"]),
  topicBank("beauty-standards", "Beauty Standards", "society", ["body image", "social pressure", "beauty ideal", "cosmetic surgery", "self-esteem", "media representation", "appearance", "body positivity", "advertising image", "cultural standard"]),
  topicBank("celebrity-culture", "Celebrity Culture", "media", ["public figure", "fame", "role model", "media attention", "celebrity endorsement", "private life", "fan culture", "public image", "influencer", "social influence"]),
  topicBank("entertainment", "Entertainment", "media", ["streaming service", "film industry", "music festival", "leisure activity", "video game", "audience", "creative content", "entertainment value", "online platform", "cultural product"]),
  topicBank("reading-habits", "Reading Habits", "education", ["digital book", "reading culture", "literary skill", "library access", "reading comprehension", "fiction", "non-fiction", "book market", "screen reading", "reading motivation"]),
  topicBank("libraries", "Libraries and Museums", "culture", ["public library", "museum collection", "cultural institution", "historical artefact", "public access", "educational resource", "exhibition", "heritage preservation", "community learning", "digital archive"]),
  topicBank("heritage-preservation", "Heritage Preservation", "culture", ["historic building", "heritage site", "restoration", "cultural memory", "traditional craft", "preservation policy", "architectural heritage", "UNESCO site", "local identity", "tourism pressure"]),
  topicBank("volunteering", "Volunteering", "society", ["community service", "charity work", "volunteer programme", "social contribution", "civic engagement", "non-profit organisation", "helping others", "public spirit", "local project", "social responsibility"]),
  topicBank("civic-engagement", "Civic Engagement", "government", ["public participation", "voting", "community voice", "citizen responsibility", "public debate", "local council", "civil society", "political awareness", "campaign", "grassroots movement"]),
  topicBank("international-aid", "International Aid", "government", ["foreign aid", "humanitarian support", "development assistance", "aid dependency", "disaster relief", "global responsibility", "poverty reduction", "aid programme", "international donor", "capacity building"]),
  topicBank("human-rights", "Human Rights", "society", ["civil liberty", "freedom of speech", "equal treatment", "minority rights", "legal protection", "discrimination", "social justice", "basic rights", "human dignity", "rights violation"]),
  topicBank("privacy-surveillance", "Privacy and Surveillance", "technology", ["CCTV", "public surveillance", "state monitoring", "personal freedom", "security measure", "privacy concern", "surveillance camera", "data collection", "law enforcement", "civil liberty"]),
  topicBank("misinformation", "Misinformation", "media", ["fake news", "fact-checking", "media literacy", "online rumour", "misleading claim", "information source", "public trust", "content moderation", "viral post", "digital literacy"]),
  topicBank("news-journalism", "News and Journalism", "media", ["press freedom", "investigative journalism", "news outlet", "editorial bias", "media ownership", "public interest", "source reliability", "breaking news", "journalistic ethics", "news consumption"]),
  topicBank("education-technology", "Education Technology", "education", ["learning app", "digital classroom", "interactive whiteboard", "adaptive learning", "online assessment", "educational software", "student data", "virtual tutor", "learning analytics", "technology integration"]),
  topicBank("critical-thinking", "Critical Thinking", "education", ["logical reasoning", "evidence evaluation", "problem solving", "independent judgement", "analytical skill", "argument analysis", "questioning assumptions", "reasoned opinion", "decision making", "intellectual curiosity"]),
  topicBank("creativity-innovation", "Creativity and Innovation", "development", ["creative thinking", "original idea", "innovation culture", "entrepreneurial mindset", "design thinking", "creative problem-solving", "invention", "experimentation", "risk-taking", "creative economy"]),
  topicBank("leadership", "Leadership", "work", ["decision-making", "team management", "strategic vision", "leadership style", "accountability", "communication skill", "motivation", "workplace trust", "organisational culture", "ethical leadership"]),
  topicBank("teamwork", "Teamwork", "work", ["collaboration", "team spirit", "shared goal", "group project", "conflict resolution", "mutual support", "communication", "team performance", "collective effort", "role distribution"]),
  topicBank("entrepreneurship", "Entrepreneurship", "business", ["startup founder", "business risk", "market opportunity", "venture capital", "business plan", "innovation", "small enterprise", "customer base", "profitability", "entrepreneurial skill"]),
  topicBank("global-economy", "Global Economy", "economy", ["trade agreement", "economic downturn", "inflation", "global recession", "supply chain", "export market", "foreign investment", "currency fluctuation", "economic recovery", "market stability"]),
  topicBank("supply-chains", "Supply Chains", "business", ["logistics", "manufacturing hub", "distribution network", "supplier", "inventory", "delivery delay", "global supply chain", "production cost", "transport route", "supply disruption"]),
  topicBank("inflation-cost-living", "Inflation and Cost of Living", "economy", ["price rise", "household expense", "purchasing power", "living cost", "inflation rate", "wage growth", "essential goods", "rent increase", "energy bill", "financial pressure"]),
  topicBank("housing-affordability", "Housing Affordability", "housing", ["mortgage", "rental cost", "property market", "housing supply", "affordable home", "tenant", "landlord", "home ownership", "housing demand", "urban housing"]),
  topicBank("age-discrimination", "Age Discrimination", "society", ["ageism", "older worker", "youth employment", "workplace bias", "retirement age", "age diversity", "generational stereotype", "employment opportunity", "senior employee", "intergenerational fairness"]),
  topicBank("digital-divide", "Digital Divide", "technology", ["internet access", "technology gap", "rural connectivity", "digital inclusion", "low-income household", "online service", "device access", "digital skill", "connectivity barrier", "educational inequality"]),
  topicBank("natural-disasters", "Natural Disasters", "environment", ["earthquake", "flood", "hurricane", "disaster preparedness", "emergency response", "evacuation", "relief effort", "climate risk", "infrastructure damage", "recovery plan"]),
  topicBank("disaster-management", "Disaster Management", "government", ["risk assessment", "emergency planning", "early warning system", "rescue operation", "public safety", "crisis response", "disaster relief", "community preparedness", "reconstruction", "coordination"]),
  topicBank("public-safety", "Public Safety", "government", ["crime prevention", "emergency service", "community policing", "public order", "safety regulation", "risk reduction", "security measure", "public trust", "safe neighbourhood", "law enforcement"]),
  topicBank("ethics-technology", "Ethics in Technology", "technology", ["ethical design", "algorithmic fairness", "responsible innovation", "technology misuse", "data ethics", "human dignity", "digital rights", "transparency", "accountability", "AI governance"]),
  topicBank("workplace-diversity", "Workplace Diversity", "work", ["inclusive workplace", "diverse team", "equal opportunity", "workplace bias", "cultural awareness", "gender balance", "minority representation", "inclusive hiring", "diversity training", "organisational inclusion"]),
  topicBank("urban-green-spaces", "Urban Green Spaces", "environment", ["public park", "green corridor", "urban forest", "recreational space", "air quality", "mental wellbeing", "biodiversity", "city planning", "community garden", "environmental benefit"]),
  topicBank("noise-pollution", "Noise Pollution", "environment", ["traffic noise", "industrial noise", "sound barrier", "urban noise", "hearing damage", "noise regulation", "residential area", "construction noise", "quality of life", "public complaint"]),
  topicBank("overtourism", "Overtourism", "tourism", ["tourist overcrowding", "local resentment", "visitor cap", "heritage damage", "tourism pressure", "seasonal tourism", "local residents", "tourism management", "sustainable visitor", "destination capacity"])
];

const vocabulary = [
  word("2.5", "home", "/hoʊm/", "nhà", "place", "A place where someone lives.", "I study English at home every evening.", ["stay at home", "go home", "family home"], ["homeless", "homely"], "Use this for IELTS Speaking Part 1 accommodation questions."),
  word("2.5", "food", "/fuːd/", "thức ăn", "health", "Things people eat.", "Healthy food can improve people's energy.", ["fresh food", "fast food", "local food"], ["feed", "foodie"], "A basic word for lifestyle, health, and culture topics."),
  word("3.0", "travel", "/ˈtræv.əl/", "du lịch, di chuyển", "travel", "To go from one place to another.", "Travel helps people understand different cultures.", ["travel abroad", "business travel", "travel costs"], ["traveller", "travelling"], "Useful for tourism, culture, and transport topics."),
  word("3.5", "important", "/ɪmˈpɔːr.tənt/", "quan trọng", "logic", "Having great value or effect.", "It is important to protect the environment.", ["highly important", "important role", "important factor"], ["importance"], "Upgrade later with crucial, vital, and essential."),
  word("4.0", "improve", "/ɪmˈpruːv/", "cải thiện", "development", "To become or make something better.", "Reading every day can improve vocabulary.", ["improve skills", "improve quality", "greatly improve"], ["improvement"], "A cleaner verb than make better."),
  word("4.5", "benefit", "/ˈben.ə.fɪt/", "lợi ích", "argument", "An advantage or helpful effect.", "One benefit of studying abroad is independence.", ["economic benefit", "long-term benefit", "bring benefits"], ["beneficial"], "Can work as both a noun and a verb."),
  word("5.0", "environment", "/ɪnˈvaɪ.rən.mənt/", "môi trường", "environment", "The natural world or the conditions around people.", "Protecting the environment requires public action.", ["natural environment", "urban environment", "environmental damage"], ["environmental"], "A core IELTS topic word."),
  word("5.5", "access", "/ˈæk.ses/", "quyền tiếp cận", "society", "The ability or right to use something.", "Rural students often have limited access to online courses.", ["access to education", "internet access", "equal access"], ["accessible"], "Remember the pattern access to something."),
  word("6.0", "mitigate", "/ˈmɪt.ə.ɡeɪt/", "giảm nhẹ", "environment", "To make a problem less serious.", "Planting trees can help mitigate the effects of climate change.", ["mitigate risk", "mitigate damage", "mitigate climate change"], ["mitigation"], "Strong for solution essays."),
  word("6.5", "sustainable", "/səˈsteɪ.nə.bəl/", "bền vững", "environment", "Able to continue without harming the future.", "Cities need sustainable transport systems.", ["sustainable development", "sustainable energy", "sustainable lifestyle"], ["sustainability"], "Important for environment and development topics."),
  word("7.0", "prevalent", "/ˈprev.əl.ənt/", "phổ biến", "society", "Common in a particular place or time.", "Online learning has become increasingly prevalent.", ["highly prevalent", "prevalent among", "prevalent issue"], ["prevalence"], "A stronger alternative to very common."),
  word("7.5", "trade-off", "/ˈtreɪd.ɔːf/", "sự đánh đổi", "argument", "A balance between two competing things.", "There is a trade-off between convenience and privacy.", ["clear trade-off", "policy trade-off", "trade-off between"], ["trade off"], "Useful for discuss-both-views essays."),
  word("8.0", "exacerbate", "/ɪɡˈzæs.ɚ.beɪt/", "làm trầm trọng thêm", "society", "To make a bad situation worse.", "Poor urban planning can exacerbate traffic congestion.", ["exacerbate inequality", "exacerbate tensions", "exacerbate the problem"], ["exacerbation"], "A high-value academic verb."),
  word("8.5", "equitable", "/ˈek.wə.t̬ə.bəl/", "công bằng", "society", "Fair and reasonable for everyone.", "An equitable tax system can support vulnerable groups.", ["equitable access", "equitable society", "more equitable"], ["equity"], "More academic and precise than fair."),
  word("9.0", "ubiquitous", "/juːˈbɪk.wə.t̬əs/", "có mặt khắp nơi", "technology", "Existing almost everywhere.", "Smartphones have become ubiquitous in modern society.", ["ubiquitous technology", "increasingly ubiquitous", "ubiquitous presence"], ["ubiquity"], "Use instead of everywhere when appropriate."),
  word("9.0", "ameliorate", "/əˈmiː.li.ə.reɪt/", "cải thiện, làm tốt hơn", "government", "To improve a difficult situation.", "Targeted subsidies can ameliorate poverty in rural areas.", ["ameliorate poverty", "ameliorate conditions", "ameliorate the situation"], ["amelioration"], "Very academic; use only when the collocation fits.")
];

vocabulary.push(
  word("2.5", "family", "/ˈfæm.əl.i/", "gia đình", "society", "A group of related people.", "Family support can help children study better.", ["close family", "family member", "family life"], ["familial"], "Useful for Speaking Part 1 and simple personal examples."),
  word("2.5", "friend", "/frend/", "bạn bè", "society", "A person you know and like.", "Friends can influence a young person's choices.", ["close friend", "make friends", "old friend"], ["friendship"], "Good for everyday IELTS Speaking answers."),
  word("2.5", "city", "/ˈsɪt.i/", "thành phố", "place", "A large town.", "Many people move to the city for work.", ["big city", "city centre", "city life"], ["urban"], "Use with transport, housing, and work topics."),
  word("2.5", "money", "/ˈmʌn.i/", "tiền", "society", "Coins, notes, or digital value used to buy things.", "Money is not the only measure of success.", ["save money", "spend money", "public money"], ["monetary"], "Simple but useful for society and work topics."),
  word("2.5", "learn", "/lɝːn/", "học", "education", "To get knowledge or a skill.", "Children learn languages more easily when they practise daily.", ["learn a skill", "learn from mistakes", "lifelong learning"], ["learner"], "A core education verb."),
  word("2.5", "help", "/help/", "giúp đỡ", "society", "To make it easier for someone to do something.", "Technology can help students access information.", ["help people", "help with homework", "help reduce"], ["helpful"], "Use it before upgrading to assist or support."),
  word("2.5", "place", "/pleɪs/", "nơi chốn", "place", "A position, area, or location.", "A quiet place is useful for study.", ["public place", "safe place", "place to live"], ["placement"], "Good for accommodation and city descriptions."),
  word("2.5", "time", "/taɪm/", "thời gian", "work", "Minutes, hours, days, and years.", "People need more free time to relax.", ["free time", "spend time", "save time"], ["timely"], "Very flexible across Speaking and Writing."),

  word("3.0", "study", "/ˈstʌd.i/", "học tập", "education", "To learn about a subject.", "Many students study English to work abroad.", ["study hard", "study abroad", "study skills"], ["student"], "Use for education and future plans."),
  word("3.0", "job", "/dʒɑːb/", "công việc", "work", "Work that someone does to earn money.", "A good job can improve a person's quality of life.", ["full-time job", "part-time job", "job market"], ["employment"], "A foundation word for work topics."),
  word("3.0", "online", "/ˌɑːnˈlaɪn/", "trực tuyến", "technology", "Using the internet.", "Online classes are convenient for busy people.", ["online course", "online shopping", "online learning"], ["digital"], "Common in technology and education topics."),
  word("3.0", "traffic", "/ˈtræf.ɪk/", "giao thông", "travel", "Vehicles moving on roads.", "Traffic is a serious problem in large cities.", ["heavy traffic", "traffic jam", "traffic congestion"], ["transport"], "Good for city and transport essays."),
  word("3.0", "safe", "/seɪf/", "an toàn", "society", "Not dangerous.", "Public spaces should be safe for children.", ["feel safe", "safe environment", "road safety"], ["safety"], "Useful for simple opinion answers."),
  word("3.0", "cheap", "/tʃiːp/", "rẻ", "argument", "Costing little money.", "Cheap public transport can reduce car use.", ["cheap price", "cheap option", "relatively cheap"], ["affordable"], "Upgrade later to affordable."),
  word("3.0", "clean", "/kliːn/", "sạch", "environment", "Not dirty.", "Clean water is essential for public health.", ["clean air", "clean water", "clean energy"], ["cleanliness"], "Simple but strong in environment topics."),
  word("3.0", "change", "/tʃeɪndʒ/", "thay đổi", "development", "To become different.", "Technology has changed the way people communicate.", ["major change", "climate change", "social change"], ["changing"], "Very common in IELTS questions."),
  word("3.0", "reason", "/ˈriː.zən/", "lý do", "logic", "Why something happens.", "One reason is that cities offer better jobs.", ["main reason", "valid reason", "reason for"], ["reasonable"], "Helps build explanations."),

  word("3.5", "advantage", "/ədˈvæn.t̬ɪdʒ/", "lợi thế", "argument", "A good point or benefit.", "One advantage of online learning is flexibility.", ["main advantage", "clear advantage", "competitive advantage"], ["advantageous"], "Core for advantages/disadvantages essays."),
  word("3.5", "disadvantage", "/ˌdɪs.ədˈvæn.t̬ɪdʒ/", "bất lợi", "argument", "A bad point or drawback.", "A disadvantage of living alone is loneliness.", ["major disadvantage", "clear disadvantage", "disadvantage of"], ["disadvantaged"], "Pair it with advantage."),
  word("3.5", "example", "/ɪɡˈzæm.pəl/", "ví dụ", "logic", "Something that shows an idea.", "For example, buses can reduce the number of cars.", ["clear example", "specific example", "give an example"], ["exemplify"], "Use examples to support IELTS ideas."),
  word("3.5", "healthy", "/ˈhel.θi/", "lành mạnh", "health", "Good for the body or mind.", "A healthy diet can prevent many diseases.", ["healthy lifestyle", "healthy diet", "healthy habit"], ["health"], "Useful for health and lifestyle topics."),
  word("3.5", "skill", "/skɪl/", "kỹ năng", "education", "An ability to do something well.", "Schools should teach practical skills.", ["communication skills", "practical skills", "develop skills"], ["skilled"], "Strong in education and work topics."),
  word("3.5", "parent", "/ˈper.ənt/", "cha mẹ", "society", "A mother or father.", "Parents play an important role in children's education.", ["working parents", "strict parents", "parental support"], ["parental"], "Common in family and education prompts."),
  word("3.5", "young", "/jʌŋ/", "trẻ", "society", "Not old.", "Young people often adapt quickly to new technology.", ["young people", "young adults", "younger generation"], ["youth"], "Useful for age comparison."),
  word("3.5", "older", "/ˈoʊl.dɚ/", "lớn tuổi hơn", "society", "Having more age.", "Older people may prefer face-to-face communication.", ["older adults", "older generation", "older workers"], ["elderly"], "Pair with younger generation."),
  word("3.5", "popular", "/ˈpɑː.pjə.lɚ/", "phổ biến", "society", "Liked or used by many people.", "Social media is popular among teenagers.", ["popular with", "popular among", "popular choice"], ["popularity"], "Upgrade later to prevalent."),

  word("4.0", "protect", "/prəˈtekt/", "bảo vệ", "environment", "To keep someone or something safe.", "Governments should protect natural habitats.", ["protect children", "protect the environment", "legal protection"], ["protection"], "Useful for environment and society."),
  word("4.0", "support", "/səˈpɔːrt/", "hỗ trợ", "government", "To help or approve of someone or something.", "The government should support low-income families.", ["financial support", "support a policy", "public support"], ["supportive"], "Stronger than help in essays."),
  word("4.0", "develop", "/dɪˈvel.əp/", "phát triển", "development", "To grow or become more advanced.", "Children develop social skills at school.", ["develop skills", "develop rapidly", "economic development"], ["development"], "Core academic verb."),
  word("4.0", "transport", "/ˈtræn.spɔːrt/", "giao thông vận tải", "travel", "Systems for moving people or goods.", "Public transport should be reliable and affordable.", ["public transport", "transport system", "transport network"], ["transportation"], "Great for city essays."),
  word("4.0", "waste", "/weɪst/", "rác thải, lãng phí", "environment", "Material thrown away or used badly.", "Plastic waste damages marine life.", ["food waste", "plastic waste", "waste management"], ["wasteful"], "High-frequency environment word."),
  word("4.0", "cause", "/kɑːz/", "gây ra", "logic", "To make something happen.", "Air pollution can cause health problems.", ["cause damage", "main cause", "cause concern"], ["causal"], "Use carefully with effects."),
  word("4.0", "result", "/rɪˈzʌlt/", "kết quả", "logic", "Something that happens because of something else.", "As a result, many people prefer online services.", ["result in", "final result", "direct result"], ["resulting"], "Good for linking ideas."),
  word("4.0", "habit", "/ˈhæb.ɪt/", "thói quen", "health", "Something someone does regularly.", "Healthy habits should be taught from childhood.", ["bad habit", "healthy habit", "daily habit"], ["habitual"], "Useful in lifestyle topics."),
  word("4.0", "local", "/ˈloʊ.kəl/", "địa phương", "place", "Related to a particular area.", "Local communities can help protect public parks.", ["local people", "local area", "local community"], ["locally"], "Good for community examples."),

  word("4.5", "challenge", "/ˈtʃæl.ɪndʒ/", "thách thức", "argument", "A difficult task or problem.", "Climate change is a major challenge for governments.", ["major challenge", "face a challenge", "global challenge"], ["challenging"], "A strong alternative to problem."),
  word("4.5", "opportunity", "/ˌɑː.pɚˈtuː.nə.t̬i/", "cơ hội", "development", "A chance to do something useful.", "Studying abroad offers many opportunities.", ["career opportunity", "equal opportunity", "miss an opportunity"], ["opportune"], "Useful for education and work."),
  word("4.5", "solution", "/səˈluː.ʃən/", "giải pháp", "argument", "A way to solve a problem.", "Investment in public transport is one possible solution.", ["practical solution", "long-term solution", "solution to"], ["solve"], "Essential for problem-solution essays."),
  word("4.5", "pollution", "/pəˈluː.ʃən/", "ô nhiễm", "environment", "Damage caused by harmful substances.", "Air pollution affects millions of people.", ["air pollution", "noise pollution", "pollution levels"], ["pollute"], "A key environment topic word."),
  word("4.5", "responsible", "/rɪˈspɑːn.sə.bəl/", "có trách nhiệm", "government", "Having a duty to do something.", "Individuals are responsible for reducing household waste.", ["responsible for", "socially responsible", "responsible behaviour"], ["responsibility"], "Useful for responsibility essays."),
  word("4.5", "culture", "/ˈkʌl.tʃɚ/", "văn hóa", "society", "The customs and beliefs of a group.", "Tourism can help preserve local culture.", ["local culture", "cultural identity", "cultural heritage"], ["cultural"], "Important for tourism and globalization."),
  word("4.5", "crime", "/kraɪm/", "tội phạm", "society", "Illegal activity.", "Unemployment can contribute to crime in some areas.", ["violent crime", "crime rate", "reduce crime"], ["criminal"], "Common social issue vocabulary."),
  word("4.5", "global", "/ˈɡloʊ.bəl/", "toàn cầu", "development", "Related to the whole world.", "Climate change is a global issue.", ["global economy", "global issue", "global market"], ["globalisation"], "Useful for big-picture arguments."),
  word("4.5", "quality", "/ˈkwɑː.lə.t̬i/", "chất lượng", "argument", "How good something is.", "The quality of education varies between regions.", ["high quality", "quality of life", "quality education"], ["qualitative"], "Very useful in Task 2."),

  word("5.0", "economy", "/ɪˈkɑː.nə.mi/", "nền kinh tế", "society", "The system of money, jobs, and production.", "Tourism can support the local economy.", ["local economy", "strong economy", "economic growth"], ["economic"], "Core for jobs and development."),
  word("5.0", "government", "/ˈɡʌv.ɚn.mənt/", "chính phủ", "government", "The group that controls a country.", "The government should invest in public health.", ["central government", "government spending", "government policy"], ["govern"], "Essential for IELTS Writing Task 2."),
  word("5.0", "society", "/səˈsaɪ.ə.t̬i/", "xã hội", "society", "People living together in a community.", "Education benefits society as a whole.", ["modern society", "fair society", "societal change"], ["social"], "A broad academic noun."),
  word("5.0", "individual", "/ˌɪn.dəˈvɪdʒ.u.əl/", "cá nhân", "society", "One person.", "Individuals should take responsibility for their health.", ["individual choice", "individual rights", "individual responsibility"], ["individually"], "Useful for government vs individual essays."),
  word("5.0", "influence", "/ˈɪn.flu.əns/", "ảnh hưởng", "argument", "The power to affect someone or something.", "Advertising can influence children's choices.", ["strong influence", "influence behaviour", "social influence"], ["influential"], "Good for media and society topics."),
  word("5.0", "resource", "/ˈriː.sɔːrs/", "nguồn lực", "government", "Something useful that can be used.", "Schools need more resources to support students.", ["natural resources", "limited resources", "allocate resources"], ["resourceful"], "Links to environment and funding."),
  word("5.0", "urban", "/ˈɝː.bən/", "thuộc đô thị", "place", "Related to cities.", "Urban areas often suffer from traffic congestion.", ["urban area", "urban life", "urban planning"], ["urbanisation"], "Great for city essays."),
  word("5.0", "rural", "/ˈrʊr.əl/", "thuộc nông thôn", "place", "Related to the countryside.", "Rural communities may have limited access to hospitals.", ["rural area", "rural community", "rural development"], ["rurality"], "Pair with urban."),
  word("5.0", "media", "/ˈmiː.di.ə/", "truyền thông", "technology", "Ways of communicating information.", "The media can shape public opinion.", ["social media", "mass media", "media coverage"], ["mediated"], "Common in modern IELTS topics."),

  word("5.5", "factor", "/ˈfæk.tɚ/", "yếu tố", "argument", "One of the things that affects a result.", "Income is an important factor in access to education.", ["key factor", "contributing factor", "major factor"], ["factorial"], "Good for analytical writing."),
  word("5.5", "approach", "/əˈproʊtʃ/", "cách tiếp cận", "argument", "A way of dealing with something.", "A balanced approach is needed to reduce crime.", ["practical approach", "balanced approach", "new approach"], ["approachable"], "Academic alternative to way."),
  word("5.5", "require", "/rɪˈkwaɪr/", "yêu cầu, cần", "logic", "To need something.", "Solving pollution requires long-term planning.", ["require effort", "require investment", "require attention"], ["requirement"], "Useful for cause-solution logic."),
  word("5.5", "create", "/kriˈeɪt/", "tạo ra", "development", "To make something new.", "New industries can create jobs.", ["create opportunities", "create jobs", "create problems"], ["creation"], "Flexible academic verb."),
  word("5.5", "beneficial", "/ˌben.əˈfɪʃ.əl/", "có lợi", "argument", "Having a good effect.", "Exercise is beneficial for mental health.", ["beneficial to", "highly beneficial", "mutually beneficial"], ["benefit"], "Upgrade from good."),
  word("5.5", "harmful", "/ˈhɑːrm.fəl/", "có hại", "health", "Causing damage.", "Excessive screen time can be harmful to children.", ["harmful effect", "harmful to", "potentially harmful"], ["harm"], "Pair with beneficial."),
  word("5.5", "pressure", "/ˈpreʃ.ɚ/", "áp lực", "society", "Stress or force caused by demands.", "Students face pressure to achieve high grades.", ["social pressure", "academic pressure", "under pressure"], ["pressurise"], "Useful for education and work."),
  word("5.5", "income", "/ˈɪn.kʌm/", "thu nhập", "society", "Money someone earns.", "Income inequality can reduce social mobility.", ["low income", "household income", "income gap"], ["incoming"], "Good for inequality topics."),
  word("5.5", "research", "/ˈriː.sɝːtʃ/", "nghiên cứu", "academic", "Careful study to discover facts.", "Research shows that sleep affects learning.", ["scientific research", "research findings", "conduct research"], ["researcher"], "Useful for evidence-based claims."),

  word("6.0", "issue", "/ˈɪʃ.uː/", "vấn đề", "argument", "An important subject or problem.", "Housing is a serious issue in many cities.", ["social issue", "complex issue", "address an issue"], ["issuance"], "A more formal alternative to problem."),
  word("6.0", "significant", "/sɪɡˈnɪf.ə.kənt/", "đáng kể", "argument", "Large or important enough to notice.", "Education has a significant impact on employment.", ["significant impact", "significant difference", "highly significant"], ["significance"], "Very useful for Task 1 and Task 2."),
  word("6.0", "available", "/əˈveɪ.lə.bəl/", "có sẵn", "society", "Able to be used or obtained.", "Online resources are widely available.", ["available to", "readily available", "available resources"], ["availability"], "Good for access arguments."),
  word("6.0", "consume", "/kənˈsuːm/", "tiêu thụ", "environment", "To use resources or buy goods.", "People consume more energy than in the past.", ["consume energy", "consume resources", "consumer behaviour"], ["consumption"], "Key for environment/consumerism."),
  word("6.0", "participate", "/pɑːrˈtɪs.ə.peɪt/", "tham gia", "society", "To take part in something.", "Citizens should participate in community activities.", ["participate in", "active participation", "public participation"], ["participant"], "Formal alternative to join."),
  word("6.0", "maintain", "/meɪnˈteɪn/", "duy trì", "development", "To keep something at the same level.", "People should maintain a healthy work-life balance.", ["maintain standards", "maintain balance", "maintain control"], ["maintenance"], "Useful for balanced arguments."),
  word("6.0", "funding", "/ˈfʌn.dɪŋ/", "nguồn tài trợ", "government", "Money provided for a purpose.", "Public schools often need more funding.", ["government funding", "research funding", "funding gap"], ["fund"], "Important for policy essays."),
  word("6.0", "attitude", "/ˈæt̬.ə.tuːd/", "thái độ", "society", "A way of thinking or feeling.", "Public attitudes toward recycling have changed.", ["positive attitude", "public attitude", "change attitudes"], ["attitudinal"], "Good for society and behaviour."),
  word("6.0", "trend", "/trend/", "xu hướng", "trend", "A general direction of change.", "A recent trend is the growth of remote work.", ["upward trend", "current trend", "global trend"], ["trending"], "Core for Task 1 and modern topics."),

  word("6.5", "consequence", "/ˈkɑːn.sə.kwens/", "hậu quả", "argument", "A result of an action.", "One consequence of deforestation is habitat loss.", ["serious consequence", "long-term consequence", "unintended consequence"], ["consequently"], "Academic alternative to result."),
  word("6.5", "priority", "/praɪˈɔːr.ə.t̬i/", "ưu tiên", "government", "Something more important than other things.", "Healthcare should be a priority for governments.", ["top priority", "policy priority", "give priority to"], ["prioritise"], "Useful for policy arguments."),
  word("6.5", "awareness", "/əˈwer.nəs/", "nhận thức", "society", "Knowledge that something exists.", "Public awareness of climate change has increased.", ["raise awareness", "public awareness", "environmental awareness"], ["aware"], "Strong in solution paragraphs."),
  word("6.5", "innovation", "/ˌɪn.əˈveɪ.ʃən/", "đổi mới", "technology", "A new idea or method.", "Technological innovation can improve healthcare.", ["technological innovation", "drive innovation", "innovation in"], ["innovative"], "Good for technology topics."),
  word("6.5", "regulate", "/ˈreɡ.jə.leɪt/", "quản lý, điều chỉnh", "government", "To control something by rules.", "Governments should regulate online advertising.", ["strictly regulate", "regulate industry", "regulation of"], ["regulation"], "Great for government control essays."),
  word("6.5", "decline", "/dɪˈklaɪn/", "sự suy giảm", "trend", "A decrease or fall.", "There has been a decline in traditional newspaper reading.", ["sharp decline", "decline in", "economic decline"], ["declining"], "Good for Task 1."),
  word("6.5", "emphasis", "/ˈem.fə.sɪs/", "sự nhấn mạnh", "education", "Special importance given to something.", "Schools should place more emphasis on creativity.", ["place emphasis on", "greater emphasis", "strong emphasis"], ["emphasise"], "Useful in education essays."),
  word("6.5", "capacity", "/kəˈpæs.ə.t̬i/", "năng lực, sức chứa", "development", "The ability to do or hold something.", "Hospitals need greater capacity during emergencies.", ["limited capacity", "capacity to", "build capacity"], ["capable"], "Precise and academic."),
  word("6.5", "reliable", "/rɪˈlaɪ.ə.bəl/", "đáng tin cậy", "technology", "Able to be trusted or depended on.", "Reliable public transport can reduce car ownership.", ["reliable source", "reliable data", "reliable service"], ["reliability"], "Useful for evidence and infrastructure."),

  word("7.0", "infrastructure", "/ˈɪn.frəˌstrʌk.tʃɚ/", "cơ sở hạ tầng", "government", "Basic systems such as roads, power, and water.", "Poor infrastructure can limit economic growth.", ["public infrastructure", "transport infrastructure", "invest in infrastructure"], ["infrastructural"], "High-value city/development word."),
  word("7.0", "incentive", "/ɪnˈsen.t̬ɪv/", "động lực, khuyến khích", "government", "Something that encourages action.", "Tax incentives can encourage companies to reduce emissions.", ["financial incentive", "provide incentives", "strong incentive"], ["incentivise"], "Useful for policy solutions."),
  word("7.0", "constraint", "/kənˈstreɪnt/", "sự hạn chế", "argument", "A limit or restriction.", "Budget constraints may affect public services.", ["financial constraint", "time constraint", "major constraint"], ["constrain"], "Precise alternative to limit."),
  word("7.0", "integrate", "/ˈɪn.t̬ə.ɡreɪt/", "tích hợp", "society", "To combine or become part of a group.", "Schools should integrate technology into lessons.", ["integrate into", "social integration", "integrated system"], ["integration"], "Good for education and migration."),
  word("7.0", "retain", "/rɪˈteɪn/", "giữ lại", "work", "To keep something.", "Companies struggle to retain skilled workers.", ["retain talent", "retain information", "staff retention"], ["retention"], "Useful in work and education."),
  word("7.0", "prioritise", "/praɪˈɔːr.ə.taɪz/", "ưu tiên", "government", "To treat something as more important.", "Governments should prioritise preventive healthcare.", ["prioritise spending", "prioritise education", "policy priority"], ["priority"], "Strong policy verb."),
  word("7.0", "feasible", "/ˈfiː.zə.bəl/", "khả thi", "argument", "Possible and practical.", "This solution may not be feasible in rural areas.", ["economically feasible", "feasible solution", "feasibility study"], ["feasibility"], "Useful for evaluating solutions."),
  word("7.0", "disparity", "/dɪˈsper.ə.t̬i/", "sự chênh lệch", "society", "A difference, often unfair.", "There is a disparity between urban and rural healthcare.", ["income disparity", "regional disparity", "reduce disparities"], ["disparate"], "High-value inequality word."),
  word("7.0", "accountable", "/əˈkaʊn.t̬ə.bəl/", "có trách nhiệm giải trình", "government", "Expected to explain decisions or actions.", "Public officials should be accountable for spending.", ["hold accountable", "accountable to", "political accountability"], ["accountability"], "Excellent for governance essays."),

  word("7.5", "intrinsic", "/ɪnˈtrɪn.zɪk/", "nội tại", "argument", "Belonging naturally to something.", "Education has intrinsic value beyond employment.", ["intrinsic value", "intrinsic motivation", "intrinsic benefit"], ["intrinsically"], "Precise for deeper arguments."),
  word("7.5", "instrumental", "/ˌɪn.strəˈmen.təl/", "có vai trò quan trọng", "argument", "Important in making something happen.", "Technology is instrumental in expanding access to education.", ["instrumental in", "instrumental role", "instrumental value"], ["instrumentally"], "Useful for academic cause-effect."),
  word("7.5", "marginalised", "/ˈmɑːr.dʒə.nəl.aɪzd/", "bị gạt ra bên lề", "society", "Treated as unimportant or powerless.", "Policies should support marginalised communities.", ["marginalised groups", "socially marginalised", "marginalised community"], ["marginalisation"], "Good for equality topics."),
  word("7.5", "profound", "/prəˈfaʊnd/", "sâu sắc", "argument", "Very great or intense.", "The internet has had a profound effect on communication.", ["profound impact", "profound change", "profound implications"], ["profoundly"], "Stronger than big."),
  word("7.5", "robust", "/roʊˈbʌst/", "mạnh mẽ, vững chắc", "argument", "Strong and effective.", "A robust public transport system can reduce congestion.", ["robust evidence", "robust system", "robust policy"], ["robustness"], "Useful for evidence and policy."),
  word("7.5", "viable", "/ˈvaɪ.ə.bəl/", "khả thi", "argument", "Able to work successfully.", "Renewable energy is becoming a viable alternative.", ["viable option", "economically viable", "viable solution"], ["viability"], "Similar to feasible, often stronger."),
  word("7.5", "compelling", "/kəmˈpel.ɪŋ/", "thuyết phục", "argument", "Very convincing.", "There is a compelling argument for early education.", ["compelling evidence", "compelling reason", "compelling case"], ["compel"], "Strong for opinion essays."),
  word("7.5", "disproportionate", "/ˌdɪs.prəˈpɔːr.ʃən.ət/", "không tương xứng", "society", "Too large or too small compared with something.", "Pollution has a disproportionate impact on poorer communities.", ["disproportionate impact", "disproportionate burden", "disproportionately affected"], ["disproportionately"], "Excellent for inequality analysis."),
  word("7.5", "imperative", "/ɪmˈper.ə.t̬ɪv/", "cấp thiết", "argument", "Extremely important or necessary.", "It is imperative to reduce carbon emissions.", ["moral imperative", "urgent imperative", "it is imperative"], ["imperatively"], "Powerful but use carefully."),

  word("8.0", "autonomy", "/ɑːˈtɑː.nə.mi/", "quyền tự chủ", "society", "The ability to make one's own decisions.", "Remote work can increase employee autonomy.", ["personal autonomy", "professional autonomy", "autonomy over"], ["autonomous"], "Useful for work and education."),
  word("8.0", "conducive", "/kənˈduː.sɪv/", "có lợi cho", "education", "Helping something happen.", "A quiet classroom is conducive to learning.", ["conducive to", "learning-conducive", "conducive environment"], ["conduce"], "A refined academic adjective."),
  word("8.0", "contentious", "/kənˈten.ʃəs/", "gây tranh cãi", "argument", "Likely to cause disagreement.", "The use of surveillance technology remains contentious.", ["contentious issue", "highly contentious", "contentious debate"], ["contention"], "Great for controversial topics."),
  word("8.0", "curtail", "/kɚˈteɪl/", "cắt giảm, hạn chế", "government", "To reduce or limit something.", "Strict laws may curtail individual freedom.", ["curtail freedom", "curtail spending", "curtail emissions"], ["curtailment"], "Precise for restriction arguments."),
  word("8.0", "diminish", "/dɪˈmɪn.ɪʃ/", "làm giảm", "argument", "To make something less.", "Automation may diminish the need for routine labour.", ["diminish importance", "diminish opportunities", "diminishing returns"], ["diminution"], "Academic alternative to reduce."),
  word("8.0", "foster", "/ˈfɑː.stɚ/", "thúc đẩy, nuôi dưỡng", "education", "To encourage development.", "Schools should foster creativity and critical thinking.", ["foster innovation", "foster cooperation", "foster a sense of"], ["fostering"], "Strong education/social verb."),
  word("8.0", "scrutinise", "/ˈskruː.t̬ən.aɪz/", "xem xét kỹ lưỡng", "argument", "To examine carefully.", "Media claims should be scrutinised by the public.", ["scrutinise evidence", "public scrutiny", "scrutinise policy"], ["scrutiny"], "Great for media and evidence."),
  word("8.0", "undermine", "/ˌʌn.dɚˈmaɪn/", "làm suy yếu", "argument", "To weaken something gradually.", "Misinformation can undermine public trust.", ["undermine confidence", "undermine authority", "undermine efforts"], ["undermining"], "High-value cause-effect verb."),
  word("8.0", "attain", "/əˈteɪn/", "đạt được", "development", "To achieve something.", "Students need support to attain their full potential.", ["attain goals", "attain success", "educational attainment"], ["attainment"], "Formal alternative to achieve."),

  word("8.5", "amelioration", "/əˌmiː.li.əˈreɪ.ʃən/", "sự cải thiện", "government", "The act of improving a bad situation.", "The amelioration of poverty requires targeted support.", ["amelioration of", "social amelioration", "policy amelioration"], ["ameliorate"], "Very formal; useful for advanced essays."),
  word("8.5", "dichotomy", "/daɪˈkɑː.t̬ə.mi/", "sự phân đôi", "argument", "A division between two opposite things.", "The dichotomy between work and leisure is becoming blurred.", ["false dichotomy", "clear dichotomy", "dichotomy between"], ["dichotomous"], "Useful for nuanced arguments."),
  word("8.5", "pervasive", "/pɚˈveɪ.sɪv/", "lan rộng, phổ biến khắp nơi", "technology", "Spreading through every part of something.", "Digital technology is pervasive in modern life.", ["pervasive influence", "pervasive problem", "increasingly pervasive"], ["pervasiveness"], "Close to ubiquitous but often about influence."),
  word("8.5", "salient", "/ˈseɪ.li.ənt/", "nổi bật, đáng chú ý", "argument", "Most noticeable or important.", "The most salient issue is affordability.", ["salient feature", "salient point", "highly salient"], ["salience"], "Concise academic adjective."),
  word("8.5", "tenable", "/ˈten.ə.bəl/", "có thể bảo vệ được", "argument", "Able to be defended as reasonable.", "This argument is no longer tenable.", ["tenable position", "hardly tenable", "tenable claim"], ["tenability"], "Advanced evaluation word."),
  word("8.5", "paradox", "/ˈper.ə.dɑːks/", "nghịch lý", "argument", "A situation that seems contradictory.", "The paradox is that technology connects people yet may increase loneliness.", ["apparent paradox", "central paradox", "paradox of"], ["paradoxical"], "Useful for sophisticated reasoning."),
  word("8.5", "reciprocal", "/rɪˈsɪp.rə.kəl/", "qua lại", "society", "Shared or done by both sides.", "Trust and cooperation have a reciprocal relationship.", ["reciprocal relationship", "reciprocal benefit", "reciprocal support"], ["reciprocity"], "Good for social analysis."),
  word("8.5", "indispensable", "/ˌɪn.dɪˈspen.sə.bəl/", "không thể thiếu", "argument", "Absolutely necessary.", "Digital literacy is indispensable in the modern workplace.", ["indispensable to", "indispensable tool", "become indispensable"], ["indispensability"], "Advanced alternative to very important."),
  word("8.5", "volatile", "/ˈvɑː.lə.t̬əl/", "dễ biến động", "economy", "Likely to change suddenly.", "A volatile economy can make long-term planning difficult.", ["volatile market", "volatile situation", "highly volatile"], ["volatility"], "Useful for economics and society."),

  word("9.0", "conflate", "/kənˈfleɪt/", "gộp lẫn", "argument", "To combine two different ideas incorrectly.", "It is misleading to conflate correlation with causation.", ["conflate with", "conflate issues", "avoid conflating"], ["conflation"], "Excellent for precise critique."),
  word("9.0", "ephemeral", "/əˈfem.ɚ.əl/", "phù du, ngắn ngủi", "society", "Lasting for a very short time.", "Some online trends are ephemeral and quickly forgotten.", ["ephemeral trend", "ephemeral pleasure", "ephemeral nature"], ["ephemerality"], "Useful for culture/media analysis."),
  word("9.0", "galvanise", "/ˈɡæl.və.naɪz/", "thúc đẩy mạnh mẽ", "society", "To shock or excite people into taking action.", "A crisis can galvanise public support for reform.", ["galvanise support", "galvanise action", "galvanise communities"], ["galvanisation"], "Dynamic verb for social change."),
  word("9.0", "intractable", "/ɪnˈtræk.tə.bəl/", "khó giải quyết", "argument", "Very difficult to solve.", "Urban poverty remains an intractable problem.", ["intractable issue", "intractable conflict", "seemingly intractable"], ["intractability"], "Advanced problem word."),
  word("9.0", "juxtapose", "/ˌdʒʌk.stəˈpoʊz/", "đặt cạnh để so sánh", "argument", "To place ideas together to compare them.", "The essay juxtaposes economic growth with environmental protection.", ["juxtapose with", "sharp juxtaposition", "juxtapose ideas"], ["juxtaposition"], "Useful for sophisticated comparisons."),
  word("9.0", "lacuna", "/ləˈkuː.nə/", "khoảng trống, thiếu sót", "academic", "A gap or missing part.", "There is a lacuna in current research on rural education.", ["research lacuna", "legal lacuna", "significant lacuna"], ["lacunae"], "Very formal; use sparingly."),
  word("9.0", "nuance", "/ˈnuː.ɑːns/", "sắc thái", "argument", "A small but important difference.", "A nuanced policy should consider both freedom and safety.", ["subtle nuance", "nuanced argument", "lack nuance"], ["nuanced"], "Core for band 9 control."),
  word("9.0", "proliferate", "/prəˈlɪf.ə.reɪt/", "tăng nhanh, lan rộng", "technology", "To increase quickly.", "Online platforms have proliferated in recent years.", ["proliferate rapidly", "proliferation of", "weapons proliferation"], ["proliferation"], "Good for trends and technology.")
);

function word(band, text, ipa, vi, topic, definition, example, collocations, family, note) {
  return { id: `${band}-${text}`, band, text, ipa, vi, topic, definition, example, collocations, family, note };
}

function topicBank(id, title, category, core) {
  const actionWords = ["improve", "reduce", "support", "protect", "increase", "manage", "encourage", "regulate", "develop", "promote"];
  const issueWords = ["access", "quality", "cost", "awareness", "pressure", "responsibility", "impact", "policy", "challenge", "opportunity"];
  const collocationFrames = ["public", "private", "long-term", "short-term", "sustainable", "effective", "major", "local", "global", "social"];
  const terms = unique([
    ...core,
    ...core.map((term) => `${term} policy`),
    ...core.map((term) => `${term} impact`),
    ...actionWords.map((verb, index) => `${verb} ${core[index % core.length]}`),
    ...issueWords.map((noun, index) => `${core[index % core.length]} ${noun}`),
    ...collocationFrames.map((frame, index) => `${frame} ${core[index % core.length]}`)
  ]).slice(0, 50);
  return { id, title, category, terms };
}

function unique(items) {
  return [...new Set(items.map((item) => item.trim()).filter(Boolean))];
}

function cleanWordFamily(term, family = []) {
  const base = normalizeLookup(term);
  const head = normalizeLookup(headWord(term));
  const fallback = term.includes(" ") ? [term, `${head}-related`] : [term, `${term}-related`];
  const candidates = unique([...(family || []), ...fallback])
    .filter((item) => !hasBrokenEncoding(item))
    .filter((item) => !looksLikeBadFamily(term, item))
    .slice(0, 3);
  return candidates.length ? candidates : fallback.slice(0, 2);
}

function looksLikeBadFamily(term, value) {
  const base = normalizeLookup(term);
  const head = normalizeLookup(headWord(term));
  const item = normalizeLookup(value);
  if (!item) return true;
  if (item.includes("undefined") || item.includes("null")) return true;
  const badEndings = ["ance", "ant", "ism", "ist", "itive", "ity", "ence", "ent"];
  if (badEndings.some((ending) => item === `${base}${ending}` || item === `${head}${ending}`)) return true;
  if (/(tionance|tionant|tionism|tionist|systemity|systemitive|isationism|isationist)$/.test(item)) return true;
  return false;
}

function displayFamily(item) {
  return cleanWordFamily(item.text, item.family).join(" / ");
}

let state = loadState();
state.activeTab = "dashboard";
state.practiceFeedback = state.practiceFeedback || {};
state.studyMode = state.studyMode || "ielts";
state.gameScope = state.gameScope || "band";
state.gameRound = state.gameRound || 0;
state.speakingPart = state.speakingPart || "1";
state.speakingSeed = state.speakingSeed || 0;
state.stageUnit = state.stageUnit || "";
state.user = state.user || null;

function currentCurriculum() {
  return curriculumConfigs[state.studyMode] || curriculumConfigs.ielts;
}

function currentLevel() {
  return currentCurriculum().levels.find((level) => level.value === state.band) || currentCurriculum().levels[0];
}

function syncCurriculumState(previousMode = state.studyMode) {
  const config = currentCurriculum();
  const levelValues = config.levels.map((level) => level.value);
  const scopeValues = config.gameScopes.map((scope) => scope.value);
  if (!levelValues.includes(state.band)) state.band = config.defaultLevel;
  if (!scopeValues.includes(state.gameScope)) state.gameScope = config.defaultGameScope;
  if (!config.speaking.questions[state.speakingPart]) state.speakingPart = "1";
  if (state.studyMode === "global-english") {
    const units = stageUnitsFor(state.band);
    const unitValues = units.map((unit) => unit.value);
    if (!unitValues.includes(state.stageUnit)) state.stageUnit = units[0]?.value || "";
  } else {
    state.stageUnit = "";
  }
  if (state.studyMode !== "ielts") {
    state.topic = "all";
    state.ieltsTopic = "all";
  }
}

syncCurriculumState();

const els = {
  studyMode: document.querySelector("#studyMode"),
  stagePicker: document.querySelector("#stagePicker"),
  stageSelect: document.querySelector("#stageSelect"),
  unitPicker: document.querySelector("#unitPicker"),
  unitSelect: document.querySelector("#unitSelect"),
  curriculumChip: document.querySelector("#curriculumChip"),
  authPanel: document.querySelector("#authPanel"),
  gmailLogin: document.querySelector("#gmailLogin"),
  gmailLogout: document.querySelector("#gmailLogout"),
  googleButton: document.querySelector("#googleButton"),
  userChip: document.querySelector("#userChip"),
  userAvatar: document.querySelector("#userAvatar"),
  userName: document.querySelector("#userName"),
  levelKicker: document.querySelector("#levelKicker"),
  levelTitle: document.querySelector("#levelTitle"),
  bandList: document.querySelector("#bandList"),
  wordGrid: document.querySelector("#wordGrid"),
  searchInput: document.querySelector("#searchInput"),
  topicFilter: document.querySelector("#topicFilter"),
  grammarGrid: document.querySelector("#grammarGrid"),
  gameScope: document.querySelector("#gameScope"),
  gameBoard: document.querySelector("#gameBoard"),
  speakingTabs: document.querySelector("#speakingTabs"),
  speakingCard: document.querySelector("#speakingCard"),
  nextSpeakingQuestion: document.querySelector("#nextSpeakingQuestion"),
  topicBankGrid: document.querySelector("#topicBankGrid"),
  topicModal: document.querySelector("#topicModal"),
  topicModalTitle: document.querySelector("#topicModalTitle"),
  topicModalSubtitle: document.querySelector("#topicModalSubtitle"),
  topicModalBody: document.querySelector("#topicModalBody"),
  bandKicker: document.querySelector("#bandKicker"),
  bandTitle: document.querySelector("#bandTitle"),
  bandSubtitle: document.querySelector("#bandSubtitle"),
  savedMetric: document.querySelector("#savedMetric"),
  masteredMetric: document.querySelector("#masteredMetric"),
  streakMetric: document.querySelector("#streakMetric"),
  savedList: document.querySelector("#savedList"),
  dashboardBandTitle: document.querySelector("#dashboardBandTitle"),
  recommendationKicker: document.querySelector("#recommendationKicker"),
  recommendationTitle: document.querySelector("#recommendationTitle"),
  recommendationList: document.querySelector("#recommendationList"),
  assistantThread: document.querySelector("#assistantThread"),
  assistantForm: document.querySelector("#assistantForm"),
  assistantInput: document.querySelector("#assistantInput"),
  noteForm: document.querySelector("#noteForm"),
  noteTitle: document.querySelector("#noteTitle"),
  noteBody: document.querySelector("#noteBody"),
  notesList: document.querySelector("#notesList"),
  notebookHelper: document.querySelector("#notebookHelper"),
  helperWindow: document.querySelector("#helperWindow"),
  closeHelper: document.querySelector("#closeHelper"),
  helperBody: document.querySelector("#helperBody"),
  helperForm: document.querySelector("#helperForm"),
  helperInput: document.querySelector("#helperInput"),
  helperSummary: document.querySelector("#helperSummary"),
  helperPlan: document.querySelector("#helperPlan"),
  markDailyDone: document.querySelector("#markDailyDone"),
  exportData: document.querySelector("#exportData")
};

document.querySelectorAll("[data-tab]").forEach((button) => button.addEventListener("click", () => setTab(button.dataset.tab)));
document.querySelectorAll("[data-close-topic-modal]").forEach((button) => button.addEventListener("click", closeTopicModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeTopicModal();
  if (event.key === "Escape") closeNotebookHelper();
});
els.studyMode.addEventListener("change", () => {
  const previousMode = state.studyMode;
  state.studyMode = els.studyMode.value;
  syncCurriculumState(previousMode);
  state.gameRound += 1;
  saveAndRender();
});
els.stageSelect.addEventListener("change", () => {
  state.band = `stage-${els.stageSelect.value}`;
  const units = stageUnitsFor(state.band);
  state.stageUnit = units[0]?.value || "";
  state.gameRound += 1;
  saveAndRender();
});
els.unitSelect.addEventListener("change", () => {
  state.stageUnit = els.unitSelect.value;
  state.topic = "all";
  state.search = "";
  els.searchInput.value = "";
  saveAndRender();
});
els.gmailLogin.addEventListener("click", () => {
  const clientId = googleClientId();
  if (clientId && window.google?.accounts?.id) {
    window.google.accounts.id.prompt();
    return;
  }
  currentMessages().push({
    role: "assistant",
    text: "Gmail sign-in is ready in the interface, but it needs a Google OAuth Client ID for this domain. After you create the Client ID, paste it into the google-signin-client_id meta tag and the real Google button will work."
  });
  state.activeTab = "assistant";
  saveAndRender();
});
els.gmailLogout.addEventListener("click", () => {
  state.user = null;
  saveAndRender();
});
els.gameScope.addEventListener("change", () => {
  state.gameScope = els.gameScope.value;
  state.gameRound += 1;
  saveAndRender();
});
els.nextSpeakingQuestion.addEventListener("click", () => {
  state.speakingSeed += 1;
  saveAndRender();
});
els.speakingTabs.querySelectorAll("[data-speaking-part]").forEach((button) => button.addEventListener("click", () => {
  state.speakingPart = button.dataset.speakingPart;
  state.speakingSeed += 1;
  saveAndRender();
}));
els.searchInput.addEventListener("input", () => {
  state.search = els.searchInput.value;
  renderWords();
});
els.topicFilter.addEventListener("change", () => {
  state.topic = els.topicFilter.value;
  saveAndRender();
});
els.markDailyDone.addEventListener("click", () => {
  const today = new Date().toISOString().slice(0, 10);
  if (!state.doneDays.includes(today)) state.doneDays.push(today);
  saveAndRender();
});
els.assistantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = els.assistantInput.value.trim();
  if (!text) return;
  currentMessages().push({ role: "user", text });
  currentMessages().push({ role: "assistant", text: answer(text) });
  els.assistantInput.value = "";
  saveAndRender();
});
els.noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const body = els.noteBody.value.trim();
  if (!body) return;
  currentNotes().unshift({ id: crypto.randomUUID(), title: els.noteTitle.value.trim() || "Untitled note", body, createdAt: new Date().toISOString() });
  els.noteTitle.value = "";
  els.noteBody.value = "";
  saveAndRender();
});
els.notesList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-note-action]");
  if (!button) return;
  const noteId = button.dataset.noteId;
  const action = button.dataset.noteAction;
  if (action === "edit") {
    state.editingNoteId = noteId;
    saveAndRender();
    return;
  }
  if (action === "cancel") {
    state.editingNoteId = "";
    saveAndRender();
    return;
  }
  if (action === "delete") {
    const notes = currentNotes();
    const index = notes.findIndex((note) => note.id === noteId);
    if (index >= 0) notes.splice(index, 1);
    state.editingNoteId = "";
    saveAndRender();
  }
});
els.notesList.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-note-edit-form]");
  if (!form) return;
  event.preventDefault();
  const noteId = form.dataset.noteId;
  const note = currentNotes().find((item) => item.id === noteId);
  if (!note) return;
  const title = form.querySelector("[data-note-title]").value.trim();
  const body = form.querySelector("[data-note-body]").value.trim();
  if (!body) return;
  note.title = title || "Untitled note";
  note.body = body;
  note.updatedAt = new Date().toISOString();
  state.editingNoteId = "";
  saveAndRender();
});
els.notebookHelper.addEventListener("click", openNotebookHelper);
els.closeHelper.addEventListener("click", closeNotebookHelper);
els.helperSummary.addEventListener("click", () => runNotebookHelper("Make a clear summary of my notebook.", "summary"));
els.helperPlan.addEventListener("click", () => runNotebookHelper("Make a study plan from my notebook.", "plan"));
els.helperForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const prompt = els.helperInput.value.trim();
  if (!prompt) return;
  runNotebookHelper(prompt, prompt.toLowerCase().includes("plan") || prompt.toLowerCase().includes("kế hoạch") ? "plan" : "summary");
  els.helperInput.value = "";
});
els.exportData.addEventListener("click", exportData);

function loadState() {
  const fallback = {
    activeTab: "dashboard",
    band: "2.5",
    studyMode: "ielts",
    topic: "all",
    ieltsTopic: "all",
    gameScope: "band",
    gameRound: 0,
    speakingPart: "1",
    speakingSeed: 0,
    stageUnit: "",
    editingNoteId: "",
    user: null,
    practiceFeedback: {},
    search: "",
    saved: [],
    mastered: [],
    notes: [],
    notesByMode: {},
    doneDays: [],
    messages: [{ role: "assistant", text: "Ask about a word such as mitigate, prevalent, or equitable. I can explain the meaning, IPA, Vietnamese translation, and IELTS collocations." }],
    messagesByMode: {},
    helperHistoryByMode: {}
  };
  try {
    return migrateModeStorage({ ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") });
  } catch {
    return migrateModeStorage(fallback);
  }
}

function migrateModeStorage(nextState) {
  const modes = Object.keys(studyModes);
  nextState.notesByMode = nextState.notesByMode || {};
  nextState.messagesByMode = nextState.messagesByMode || {};
  nextState.helperHistoryByMode = nextState.helperHistoryByMode || {};
  modes.forEach((mode) => {
    if (!Array.isArray(nextState.notesByMode[mode])) nextState.notesByMode[mode] = [];
    if (!Array.isArray(nextState.messagesByMode[mode]) || !nextState.messagesByMode[mode].length) nextState.messagesByMode[mode] = defaultAssistantMessages(mode);
    if (!Array.isArray(nextState.helperHistoryByMode[mode])) nextState.helperHistoryByMode[mode] = [];
  });
  if (Array.isArray(nextState.notes) && nextState.notes.length && !nextState.migratedModeNotes) {
    nextState.notesByMode.ielts = [...nextState.notes, ...nextState.notesByMode.ielts];
    nextState.migratedModeNotes = true;
  }
  if (Array.isArray(nextState.messages) && nextState.messages.length > 1 && !nextState.migratedModeMessages) {
    nextState.messagesByMode.ielts = nextState.messages;
    nextState.migratedModeMessages = true;
  }
  nextState.notes = [];
  nextState.messages = [];
  return nextState;
}

function defaultAssistantMessages(mode = state.studyMode) {
  const label = studyModes[mode] || "this Study mode";
  return [{ role: "assistant", text: `Hi, I am your ${label} assistant. Ask me about a word, a sentence, collocation, IPA, Vietnamese meaning, or how to use it naturally.` }];
}

function currentNotes() {
  state.notesByMode = state.notesByMode || {};
  if (!Array.isArray(state.notesByMode[state.studyMode])) state.notesByMode[state.studyMode] = [];
  return state.notesByMode[state.studyMode];
}

function currentMessages() {
  state.messagesByMode = state.messagesByMode || {};
  if (!Array.isArray(state.messagesByMode[state.studyMode]) || !state.messagesByMode[state.studyMode].length) {
    state.messagesByMode[state.studyMode] = defaultAssistantMessages(state.studyMode);
  }
  return state.messagesByMode[state.studyMode];
}

function currentHelperHistory() {
  state.helperHistoryByMode = state.helperHistoryByMode || {};
  if (!Array.isArray(state.helperHistoryByMode[state.studyMode])) state.helperHistoryByMode[state.studyMode] = [];
  return state.helperHistoryByMode[state.studyMode];
}

function googleClientId() {
  return document.querySelector('meta[name="google-signin-client_id"]')?.content.trim() || "";
}

function decodeJwtPayload(token) {
  try {
    const payload = token.split(".")[1];
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(atob(base64).split("").map((char) => `%${(`00${char.charCodeAt(0).toString(16)}`).slice(-2)}`).join(""));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function handleGoogleCredential(response) {
  const profile = decodeJwtPayload(response?.credential || "");
  if (!profile?.email) return;
  state.user = {
    name: profile.name || profile.email,
    email: profile.email,
    picture: profile.picture || "",
    signedInAt: new Date().toISOString()
  };
  saveAndRender();
}

function initGoogleSignIn() {
  const clientId = googleClientId();
  if (!clientId || !window.google?.accounts?.id) return;
  window.google.accounts.id.initialize({
    client_id: clientId,
    callback: handleGoogleCredential,
    auto_select: false,
    cancel_on_tap_outside: true
  });
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveAndRender() {
  save();
  render();
}

function setTab(tab) {
  state.activeTab = tab;
  saveAndRender();
}

function render() {
  syncCurriculumState();
  const config = currentCurriculum();
  document.querySelectorAll("[data-tab]").forEach((button) => button.classList.toggle("active", button.dataset.tab === state.activeTab));
  document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === state.activeTab));
  document.body.dataset.curriculum = config.theme;
  els.studyMode.value = state.studyMode || "ielts";
  els.curriculumChip.textContent = config.label;
  els.stagePicker.hidden = state.studyMode !== "global-english";
  els.unitPicker.hidden = state.studyMode !== "global-english";
  els.stageSelect.value = state.band.startsWith("stage-") ? state.band.replace("stage-", "") : "1";
  renderStageUnitPicker();
  renderAuth();
  els.gameScope.innerHTML = config.gameScopes.map((scope) => `<option value="${scope.value}">${scope.label}</option>`).join("");
  els.gameScope.value = state.gameScope || "band";
  renderBands();
  renderTopics();
  renderWords();
  renderGrammar();
  renderGame();
  renderSpeaking();
  renderAssistant();
  renderDashboard();
  renderNotes();
  renderTopicBank();
}

function renderStageUnitPicker() {
  if (state.studyMode !== "global-english") return;
  const units = stageUnitsFor(state.band);
  els.unitSelect.innerHTML = units.map((unit) => `<option value="${unit.value}">${unit.title}</option>`).join("");
  if (!units.some((unit) => unit.value === state.stageUnit)) state.stageUnit = units[0]?.value || "";
  els.unitSelect.value = state.stageUnit;
}

function renderAuth() {
  const signedIn = Boolean(state.user?.email);
  els.gmailLogin.hidden = signedIn;
  els.userChip.hidden = !signedIn;
  els.googleButton.hidden = true;
  if (!signedIn) return;
  els.userName.textContent = state.user.name || state.user.email;
  els.userAvatar.src = state.user.picture || "assets/icon-192.png";
}

function renderBands() {
  const config = currentCurriculum();
  els.levelKicker.textContent = config.levelKicker;
  els.levelTitle.textContent = config.levelTitle;
  els.bandList.innerHTML = config.levels.map((level) => `<button class="band-button ${level.value === state.band ? "active" : ""}" type="button" data-band="${level.value}">
    <span class="band-icon" aria-hidden="true">${level.icon}</span>
    <strong>${level.title}</strong><span>${level.subtitle}</span>
  </button>`).join("");
  els.bandList.querySelectorAll("[data-band]").forEach((button) => button.addEventListener("click", () => {
    state.band = button.dataset.band;
    if (state.studyMode === "global-english") state.stageUnit = stageUnitsFor(state.band)[0]?.value || "";
    state.topic = "all";
    state.ieltsTopic = "all";
    state.search = "";
    els.searchInput.value = "";
    saveAndRender();
  }));
}

function activeWords() {
  if (state.studyMode === "ielts") return vocabulary.filter((item) => item.band === state.band);
  if (state.studyMode === "global-english" && !hasOfficialStageUnits()) return [];
  const stageUnit = currentStageUnit();
  const pools = {
    communication: communicationWords.map(([text, definition]) => curriculumWord("communication", text, definition, "Giao tiep", "conversation")),
    toeic: toeicWords.map(([text, definition]) => curriculumWord("toeic", text, definition, "TOEIC", "business")),
    "global-english": (stageUnit?.words || [])
      .map((entry) => {
        const text = typeof entry === "string" ? entry : entry.text;
        const meaning = typeof entry === "string" ? stageUnit.title : (entry.meaning || stageUnit.title);
        return curriculumWord("global-english", text, meaning, `${currentLevel().title} - ${stageUnit?.title || "Unit"}`, "stage", state.band.replace("-", " "));
      })
  };
  return pools[state.studyMode] || [];
}

function curriculumWord(prefix, text, definition, levelLabel, topic, stageLabel = "") {
  const details = topicTermDetails({ title: levelLabel, category: topic }, text);
  const stageDetail = prefix === "global-english" ? stageWordDetails[text] : null;
  const ipa = stageDetail?.[0] || offlineIpa(text);
  const vi = stageDetail?.[1] || curriculumMeaning(prefix, text, definition);
  const modeDefinition = stageDetail?.[2] || curriculumDefinition(prefix, text, definition);
  const modeExample = curriculumExample(prefix, text, levelLabel, stageLabel);
  const modeNote = curriculumUsage(prefix, text, levelLabel);
  return {
    id: `${prefix}-${state.band}-${text}`,
    band: state.band,
    text,
    ipa,
    vi,
    topic,
    definition: modeDefinition,
    example: modeExample,
    collocations: details.collocations,
    family: details.family,
    note: modeNote
  };
}

function hasBrokenEncoding(value) {
  return /[\u00c2\u00c3\u00ca\u00c9\u00cb\u00ce\u00e1\u00ba\u00bb\u20ac\u2122\u0153]/.test(String(value || ""));
}

const vietnameseAccentMap = {
  "but chi: dung de viet, ve va sua bai de dang": "bút chì: dùng để viết, vẽ và sửa bài dễ dàng",
  "sach: nhieu trang dung de doc, hoc hoac ghi thong tin": "sách: nhiều trang dùng để đọc, học hoặc ghi thông tin",
  "ban hoc: noi dat sach vo, viet bai va lam viec trong lop": "bàn học: nơi đặt sách vở, viết bài và làm việc trong lớp",
  "giao vien: nguoi giup hoc sinh hoc va luyen ky nang": "giáo viên: người giúp học sinh học và luyện kỹ năng",
  "hoc sinh: nguoi hoc trong truong hoac trong lop": "học sinh: người học trong trường hoặc trong lớp",
  "mau vang: mau sang nhu mat troi hoac qua chuoi chin": "màu vàng: màu sáng như mặt trời hoặc quả chuối chín",
  "so muoi: so sau chin va truoc muoi mot": "số mười: số sau chín và trước mười một",
  "me: nguoi phu nu cham soc con trong gia dinh": "mẹ: người phụ nữ chăm sóc con trong gia đình",
  "con meo: vat nuoi nho, thuong co long mem": "con mèo: vật nuôi nhỏ, thường có lông mềm",
  "lang nghe: chu y vao am thanh hoac loi noi": "lắng nghe: chú ý vào âm thanh hoặc lời nói",
  "mo: lam cho mot vat khong con dong": "mở: làm cho một vật không còn đóng",
  "viet: tao chu, tu hoac cau tren giay hay man hinh": "viết: tạo chữ, từ hoặc câu trên giấy hay màn hình",
  "danh rang: lam sach rang bang ban chai va kem danh rang": "đánh răng: làm sạch răng bằng bàn chải và kem đánh răng",
  "thuc day: ngung ngu va bat dau ngay moi": "thức dậy: ngừng ngủ và bắt đầu ngày mới",
  "an sang: an bua dau tien trong ngay": "ăn sáng: ăn bữa đầu tiên trong ngày",
  "buoi sang: phan dau cua ngay": "buổi sáng: phần đầu của ngày",
  "buoi toi: thoi gian cuoi ngay": "buổi tối: thời gian cuối ngày",
  "rau cu: thuc pham tu cay, tot cho suc khoe": "rau củ: thực phẩm từ cây, tốt cho sức khỏe",
  "banh sandwich: mon an co nhan giua cac lat banh mi": "bánh sandwich: món ăn có nhân giữa các lát bánh mì",
  "san choi: noi tre em choi va van dong": "sân chơi: nơi trẻ em chơi và vận động",
  "nhieu may: thoi tiet co nhieu may tren bau troi": "nhiều mây: thời tiết có nhiều mây trên bầu trời",
  "vui ve: cam thay tot hoac hai long": "vui vẻ: cảm thấy tốt hoặc hài lòng",
  "co the: dung de noi ve kha nang hoac su cho phep": "có thể: dùng để nói về khả năng hoặc sự cho phép",
  "o dau: tu de hoi ve dia diem": "ở đâu: từ để hỏi về địa điểm",
  "che do an can bang": "chế độ ăn cân bằng",
  "hoat dong the chat": "hoạt động thể chất",
  "nang luong": "năng lượng",
  "dien": "điện",
  "su o nhiem": "sự ô nhiễm",
  "moi truong song": "môi trường sống",
  "cong dong": "cộng đồng",
  "bang chung": "bằng chứng",
  "ket luan": "kết luận",
  "quang cao": "quảng cáo",
  "co dai": "cổ đại",
  "khi hau": "khí hậu",
  "tai che": "tái chế",
  "su bao ton": "sự bảo tồn",
  "su di cu": "sự di cư",
  "do thi hoa": "đô thị hóa",
  "he sinh thai": "hệ sinh thái",
  "su doi moi": "sự đổi mới",
  "quyen loi": "quyền lợi",
  "trach nhiem": "trách nhiệm",
  "loi the": "lợi thế",
  "bat loi": "bất lợi",
  "nguon": "nguồn",
  "so sanh": "so sánh",
  "bien doi khi hau": "biến đổi khí hậu",
  "an ninh luong thuc": "an ninh lương thực",
  "su bat binh dang": "sự bất bình đẳng",
  "da dang sinh hoc": "đa dạng sinh học",
  "tri tue nhan tao": "trí tuệ nhân tạo",
  "thong tin sai lech": "thông tin sai lệch",
  "thuong mai": "thương mại",
  "ban sac": "bản sắc",
  "goc nhin": "góc nhìn",
  "tac dong": "tác động",
  "phan tich": "phân tích",
  "danh gia": "đánh giá",
  "tu duy phan bien": "tư duy phản biện",
  "su tong hop": "sự tổng hợp",
  "su dien giai": "sự diễn giải",
  "tinh ben vung": "tính bền vững",
  "nhan quyen": "nhân quyền",
  "ky thuat di truyen": "kỹ thuật di truyền",
  "dao duc so": "đạo đức số",
  "dich chuyen xa hoi": "dịch chuyển xã hội",
  "toan cau hoa": "toàn cầu hóa",
  "lap luan phan bien": "lập luận phản biện",
  "do dang tin cay": "độ đáng tin cậy",
  "luan diem chinh": "luận điểm chính"
};

function accentVietnamese(value) {
  const text = String(value || "");
  return vietnameseAccentMap[text] || text;
}

function displayMeaning(item) {
  if (!item) return "";
  if (!hasBrokenEncoding(item.vi)) return accentVietnamese(item.vi);
  return vietnameseFallbackMeaning(item);
}

function cleanDisplayText(value, fallback = "") {
  return hasBrokenEncoding(value) ? vietnameseFallbackMeaning({ text: fallback, topic: "", definition: fallback, vi: "" }) : accentVietnamese(value);
}

function vietnameseFallbackMeaning(item) {
  const key = normalizeLookup(item?.text || "");
  const mapped = offlineVietnameseMeanings[key] || vietnameseAccentMap[key] || topicVietnameseHints[item?.topic] || "";
  if (mapped) return mapped;
  return inferVietnameseMeaning(item?.text || "từ này", inferWordKind(key));
}

const offlineVietnameseMeanings = {
  domain: "lĩnh vực; miền; phạm vi kiến thức hoặc hoạt động",
  capacity: "năng lực; sức chứa; khả năng tiếp nhận hoặc xử lý",
  perspective: "góc nhìn; quan điểm; cách nhìn nhận một vấn đề",
  process: "quá trình; tiến trình",
  approach: "cách tiếp cận; phương pháp",
  issue: "vấn đề; chủ đề cần bàn luận",
  factor: "yếu tố; nhân tố",
  method: "phương pháp; cách làm",
  result: "kết quả; hệ quả",
  reason: "lý do; nguyên nhân",
  effect: "ảnh hưởng; tác động",
  change: "sự thay đổi; thay đổi",
  system: "hệ thống",
  resource: "nguồn lực; tài nguyên",
  data: "dữ liệu",
  network: "mạng lưới; hệ thống kết nối",
  skill: "kỹ năng",
  knowledge: "kiến thức",
  behaviour: "hành vi",
  opportunity: "cơ hội",
  challenge: "thách thức",
  solution: "giải pháp",
  problem: "vấn đề; điều cần giải quyết",
  evidence: "bằng chứng; căn cứ",
  argument: "lập luận; lý lẽ để bảo vệ quan điểm",
  analysis: "sự phân tích; quá trình xem xét kỹ một vấn đề",
  evaluation: "sự đánh giá; việc xem xét giá trị hoặc hiệu quả",
  conclusion: "kết luận; phần chốt lại ý chính",
  comparison: "sự so sánh; việc chỉ ra điểm giống và khác",
  contrast: "sự tương phản; điểm khác biệt rõ rệt",
  trend: "xu hướng; chiều hướng thay đổi",
  development: "sự phát triển; bước tiến hoặc thay đổi theo thời gian",
  improvement: "sự cải thiện; việc làm cho tốt hơn",
  decline: "sự suy giảm; giảm xuống về mức độ hoặc chất lượng",
  increase: "sự gia tăng; tăng lên",
  decrease: "sự giảm sút; giảm xuống",
  impact: "tác động; ảnh hưởng mạnh đến một điều gì đó",
  influence: "sự ảnh hưởng; khả năng tác động đến suy nghĩ hoặc hành động",
  consequence: "hệ quả; kết quả xảy ra sau một việc",
  benefit: "lợi ích; điều có lợi",
  advantage: "lợi thế; điểm có lợi",
  disadvantage: "bất lợi; điểm không có lợi",
  risk: "rủi ro; khả năng xảy ra điều xấu",
  policy: "chính sách; kế hoạch hoặc quy định của tổ chức/chính phủ",
  government: "chính phủ; cơ quan điều hành đất nước",
  society: "xã hội; cộng đồng người sống cùng một hệ thống",
  community: "cộng đồng; nhóm người có điểm chung",
  culture: "văn hóa; lối sống, niềm tin và nghệ thuật của một nhóm người",
  education: "giáo dục; việc học tập và đào tạo",
  environment: "môi trường; thế giới tự nhiên hoặc điều kiện xung quanh",
  technology: "công nghệ; máy móc, thiết bị và hệ thống hiện đại",
  economy: "nền kinh tế; hệ thống sản xuất, tiền bạc và thương mại",
  employment: "việc làm; tình trạng có công việc",
  workplace: "nơi làm việc; môi trường công việc",
  communication: "sự giao tiếp; quá trình trao đổi thông tin",
  language: "ngôn ngữ; hệ thống từ và quy tắc để giao tiếp",
  identity: "bản sắc; điều làm một người hoặc nhóm trở nên riêng biệt",
  responsibility: "trách nhiệm; việc cần phải làm hoặc chịu trách nhiệm",
  awareness: "nhận thức; sự hiểu biết hoặc chú ý về một vấn đề",
  access: "sự tiếp cận; quyền hoặc khả năng sử dụng/đến gần thứ gì đó",
  quality: "chất lượng; mức độ tốt hoặc giá trị của điều gì đó",
  cost: "chi phí; số tiền hoặc cái giá phải trả",
  pressure: "áp lực; sức ép về tinh thần, xã hội hoặc công việc",
  demand: "nhu cầu; sự đòi hỏi hoặc mong muốn đối với thứ gì đó",
  supply: "nguồn cung; lượng hàng hóa hoặc dịch vụ có sẵn",
  research: "nghiên cứu; việc tìm hiểu có hệ thống để biết thêm thông tin",
  source: "nguồn; nơi thông tin, vật chất hoặc ý tưởng bắt đầu",
  context: "ngữ cảnh; tình huống giúp hiểu nghĩa của một từ hoặc ý",
  example: "ví dụ; trường hợp dùng để minh họa",
  detail: "chi tiết; thông tin nhỏ giúp làm rõ ý",
  opinion: "ý kiến; quan điểm cá nhân",
  view: "quan điểm; cách nhìn về một vấn đề",
  idea: "ý tưởng; suy nghĩ hoặc đề xuất",
  topic: "chủ đề; vấn đề đang được nói hoặc viết về",
  paragraph: "đoạn văn; nhóm câu cùng phát triển một ý",
  essay: "bài luận; bài viết trình bày quan điểm và lập luận"
};

const offlineDefinitionMap = {
  process: "A series of actions or stages that happen in order to produce a result.",
  domain: "An area of knowledge, activity, control, or online address.",
  capacity: "The ability to do, contain, produce, or deal with something.",
  perspective: "A way of thinking about or seeing a situation.",
  approach: "A way of dealing with a problem, task, or situation.",
  issue: "An important topic or problem that people discuss or try to solve.",
  factor: "One of the things that influences a result or situation.",
  method: "A planned way of doing something.",
  impact: "A strong effect that one thing has on another thing.",
  analysis: "A careful study of something in order to understand it better.",
  evidence: "Facts, examples, or information that support an idea.",
  argument: "A reasoned explanation used to support an opinion.",
  policy: "A plan or rule used by a government, school, company, or organisation.",
  trend: "A general direction in which something is changing or developing.",
  consequence: "A result or effect of an action or situation.",
  access: "The right or ability to use, enter, or reach something.",
  awareness: "Knowledge or understanding of a problem, situation, or fact.",
  responsibility: "A duty to deal with something or take care of someone.",
  communication: "The act of sharing information, ideas, or feelings.",
  environment: "The natural world or the conditions around people, animals, or things.",
  technology: "Tools, machines, and systems created from scientific knowledge.",
  education: "The process of teaching, learning, and developing knowledge or skills."
};

const offlineCollocationMap = {
  process: ["learning process", "decision-making process", "a gradual process", "go through a process"],
  domain: ["academic domain", "professional domain", "online domain", "policy domain"],
  capacity: ["limited capacity", "capacity to learn", "build capacity", "storage capacity"],
  perspective: ["different perspective", "global perspective", "from my perspective", "broaden one's perspective"],
  approach: ["a practical approach", "a balanced approach", "take an approach", "alternative approach"],
  issue: ["a serious issue", "address an issue", "social issue", "environmental issue"],
  factor: ["a key factor", "major factor", "contributing factor", "economic factor"],
  method: ["teaching method", "research method", "effective method", "traditional method"],
  impact: ["significant impact", "negative impact", "long-term impact", "impact on society"],
  analysis: ["detailed analysis", "data analysis", "critical analysis", "provide an analysis"],
  evidence: ["clear evidence", "supporting evidence", "strong evidence", "evidence suggests"],
  argument: ["strong argument", "main argument", "support an argument", "counter-argument"],
  policy: ["government policy", "public policy", "education policy", "policy change"],
  trend: ["current trend", "global trend", "upward trend", "emerging trend"],
  consequence: ["serious consequence", "long-term consequence", "unintended consequence", "as a consequence"],
  access: ["equal access", "limited access", "access to education", "internet access"],
  awareness: ["raise awareness", "public awareness", "environmental awareness", "lack of awareness"],
  responsibility: ["take responsibility", "social responsibility", "personal responsibility", "share responsibility"]
};

const ipaOverrides = {
  family: "/\u02c8f\u00e6m.\u0259l.i/",
  friend: "/frend/",
  city: "/\u02c8s\u026at.i/",
  money: "/\u02c8m\u028cn.i/",
  home: "/h\u0259\u028am/",
  food: "/fu\u02d0d/",
  travel: "/\u02c8tr\u00e6v.\u0259l/",
  important: "/\u026am\u02c8p\u0254\u02d0.t\u0259nt/",
  improve: "/\u026am\u02c8pru\u02d0v/",
  environment: "/\u026an\u02c8va\u026a.r\u0259n.m\u0259nt/",
  access: "/\u02c8\u00e6k.ses/",
  benefit: "/\u02c8ben.\u026a.f\u026at/",
  challenge: "/\u02c8t\u0283\u00e6l.\u026and\u0292/",
  solution: "/s\u0259\u02c8lu\u02d0.\u0283\u0259n/",
  process: "/\u02c8pr\u0259\u028a.ses/",
  approach: "/\u0259\u02c8pr\u0259\u028at\u0283/",
  issue: "/\u02c8\u026a\u0283.u\u02d0/",
  factor: "/\u02c8f\u00e6k.t\u0259r/",
  method: "/\u02c8me\u03b8.\u0259d/",
  result: "/r\u026a\u02c8z\u028clt/",
  reason: "/\u02c8ri\u02d0.z\u0259n/",
  effect: "/\u026a\u02c8fekt/",
  change: "/t\u0283e\u026and\u0292/",
  system: "/\u02c8s\u026as.t\u0259m/",
  resource: "/r\u026a\u02c8z\u0254\u02d0rs/",
  data: "/\u02c8de\u026a.t\u0259/",
  network: "/\u02c8net.w\u025c\u02d0rk/",
  skill: "/sk\u026al/",
  knowledge: "/\u02c8n\u0252l.\u026ad\u0292/",
  opportunity: "/\u02cc\u0252p.\u0259r\u02c8tu\u02d0.n\u0259.ti/",
  education: "/\u02cced.j\u028a\u02c8ke\u026a.\u0283\u0259n/",
  technology: "/tek\u02c8n\u0252l.\u0259.d\u0292i/",
  culture: "/\u02c8k\u028cl.t\u0283\u0259r/",
  society: "/s\u0259\u02c8sa\u026a.\u0259.ti/",
  health: "/hel\u03b8/",
  economy: "/i\u02c8k\u0252n.\u0259.mi/",
  evidence: "/\u02c8ev.\u026a.d\u0259ns/",
  conclusion: "/k\u0259n\u02c8klu\u02d0.\u0292\u0259n/",
  argument: "/\u02c8\u0251\u02d0r\u0261.j\u0259.m\u0259nt/",
  analysis: "/\u0259\u02c8n\u00e6l.\u0259.s\u026as/",
  evaluation: "/\u026a\u02ccv\u00e6l.ju\u02c8e\u026a.\u0283\u0259n/",
  comparison: "/k\u0259m\u02c8p\u00e6r.\u026a.s\u0259n/",
  trend: "/trend/",
  development: "/d\u026a\u02c8vel.\u0259p.m\u0259nt/",
  improvement: "/\u026am\u02c8pru\u02d0v.m\u0259nt/",
  decline: "/d\u026a\u02c8kla\u026an/",
  influence: "/\u02c8\u026an.flu.\u0259ns/",
  consequence: "/\u02c8k\u0252n.s\u026a.kw\u0259ns/",
  policy: "/\u02c8p\u0252l.\u0259.si/",
  awareness: "/\u0259\u02c8we\u0259r.n\u0259s/",
  responsibility: "/r\u026a\u02ccsp\u0252n.s\u0259\u02c8b\u026al.\u0259.ti/",
  communication: "/k\u0259\u02ccmju\u02d0.n\u026a\u02c8ke\u026a.\u0283\u0259n/",
  analyse: "/\u02c8\u00e6n.\u0259l.a\u026az/",
  evaluate: "/\u026a\u02c8v\u00e6l.ju.e\u026at/"
};

function displayIpa(item) {
  if (!item) return "/wɜːrd/";
  const override = ipaOverrides[normalizeLookup(item.text)];
  if (override) return override;
  const ipa = String(item.ipa || "").trim();
  return hasBrokenEncoding(ipa) || /offline/i.test(ipa) || ipa === "/.../" || !ipa ? approximateIpa(item.text) : ipa;
}

function offlineIpa(term) {
  const simple = {
    greeting: "/\u02c8\u0261ri\u02d0.t\u026a\u014b/",
    "small talk": "/\u02c8sm\u0254\u02d0l t\u0254\u02d0k/",
    appointment: "/\u0259\u02c8p\u0254\u026ant.m\u0259nt/",
    request: "/r\u026a\u02c8kwest/",
    invoice: "/\u02c8\u026an.v\u0254\u026as/",
    deadline: "/\u02c8ded.la\u026an/",
    shipment: "/\u02c8\u0283\u026ap.m\u0259nt/",
    refund: "/\u02c8ri\u02d0.f\u028cnd/",
    venue: "/\u02c8ven.ju\u02d0/",
    supplier: "/s\u0259\u02c8pla\u026a.\u0259r/",
    conference: "/\u02c8k\u0252n.f\u0259r.\u0259ns/",
    reservation: "/\u02ccrez.\u0259\u02c8ve\u026a.\u0283\u0259n/",
    directions: "/d\u0259\u02c8rek.\u0283\u0259nz/",
    suggestion: "/s\u0259\u02c8d\u0292es.t\u0283\u0259n/",
    apology: "/\u0259\u02c8p\u0252l.\u0259.d\u0292i/",
    invitation: "/\u02cc\u026an.v\u026a\u02c8te\u026a.\u0283\u0259n/",
    preference: "/\u02c8pref.\u0259r.\u0259ns/",
    opinion: "/\u0259\u02c8p\u026an.j\u0259n/",
    itinerary: "/a\u026a\u02c8t\u026an.\u0259r.\u0259r.i/",
    domain: "/d\u0259\u02c8me\u026an/",
    process: "/\u02c8pr\u0259\u028a.ses/",
    approach: "/\u0259\u02c8pr\u0259\u028at\u0283/",
    issue: "/\u02c8\u026a\u0283.u\u02d0/",
    factor: "/\u02c8f\u00e6k.t\u0259r/",
    method: "/\u02c8me\u03b8.\u0259d/",
    analysis: "/\u0259\u02c8n\u00e6l.\u0259.s\u026as/",
    impact: "/\u02c8\u026am.p\u00e6kt/"
  };
  return simple[normalizeLookup(term)] || approximateIpa(term);
}

const ipaWordMap = {
  a: "/ə/",
  an: "/ən/",
  and: "/ænd/",
  of: "/əv/",
  the: "/ðə/",
  to: "/tuː/",
  in: "/ɪn/",
  for: "/fɔːr/",
  with: "/wɪð/",
  policy: "/ˈpɒl.ə.si/",
  impact: "/ˈɪm.pækt/",
  public: "/ˈpʌb.lɪk/",
  private: "/ˈpraɪ.vət/",
  global: "/ˈɡləʊ.bəl/",
  local: "/ˈləʊ.kəl/",
  social: "/ˈsəʊ.ʃəl/",
  sustainable: "/səˈsteɪ.nə.bəl/",
  effective: "/ɪˈfek.tɪv/",
  major: "/ˈmeɪ.dʒər/",
  long: "/lɒŋ/",
  short: "/ʃɔːrt/",
  term: "/tɜːrm/",
  related: "/rɪˈleɪ.tɪd/",
  based: "/beɪst/",
  improve: "/ɪmˈpruːv/",
  reduce: "/rɪˈduːs/",
  support: "/səˈpɔːrt/",
  protect: "/prəˈtekt/",
  increase: "/ɪnˈkriːs/",
  manage: "/ˈmæn.ɪdʒ/",
  encourage: "/ɪnˈkʌr.ɪdʒ/",
  regulate: "/ˈreɡ.jə.leɪt/",
  develop: "/dɪˈvel.əp/",
  promote: "/prəˈməʊt/"
};

function approximateIpa(term) {
  const words = normalizeLookup(term).split(/\s+/).filter(Boolean);
  const ipa = words.map((word) => stripIpaSlashes(ipaWordMap[word] || ipaOverrides[word] || approximateSingleIpa(word))).filter(Boolean).join(" ");
  return `/${ipa || "wɜːrd"}/`;
}

function stripIpaSlashes(value) {
  return String(value || "").replace(/^\/|\/$/g, "");
}

function approximateSingleIpa(word) {
  let text = word.toLowerCase().replace(/[^a-z-]/g, "");
  if (!text) return "wɜːrd";
  text = text
    .replace(/tion$/g, "ʃən")
    .replace(/sion$/g, "ʒən")
    .replace(/ture$/g, "tʃər")
    .replace(/ment$/g, "mənt")
    .replace(/ness$/g, "nəs")
    .replace(/ity$/g, "ɪti")
    .replace(/able$/g, "əbəl")
    .replace(/ible$/g, "ɪbəl")
    .replace(/ous$/g, "əs")
    .replace(/ally$/g, "əli")
    .replace(/ly$/g, "li")
    .replace(/al$/g, "əl")
    .replace(/er$/g, "ər")
    .replace(/or$/g, "ɔːr");
  const replacements = [
    [/eigh/g, "eɪ"], [/tion/g, "ʃən"], [/sion/g, "ʒən"], [/ough/g, "ʌf"],
    [/sh/g, "ʃ"], [/ch/g, "tʃ"], [/th/g, "θ"], [/ph/g, "f"], [/qu/g, "kw"],
    [/ng/g, "ŋ"], [/ck/g, "k"], [/oo/g, "uː"], [/ee/g, "iː"], [/ea/g, "iː"],
    [/ai/g, "eɪ"], [/ay/g, "eɪ"], [/oa/g, "əʊ"], [/ow/g, "aʊ"], [/ou/g, "aʊ"],
    [/oi/g, "ɔɪ"], [/oy/g, "ɔɪ"], [/au/g, "ɔː"], [/ar/g, "ɑːr"], [/er/g, "ər"],
    [/ir/g, "ɜːr"], [/ur/g, "ɜːr"]
  ];
  replacements.forEach(([pattern, replacement]) => {
    text = text.replace(pattern, replacement);
  });
  return text
    .replace(/a/g, "æ")
    .replace(/e/g, "e")
    .replace(/i/g, "ɪ")
    .replace(/o/g, "ɒ")
    .replace(/u/g, "ʌ")
    .replace(/y/g, "i")
    .replace(/c/g, "k")
    .replace(/j/g, "dʒ")
    .replace(/x/g, "ks")
    .replace(/-/g, " ");
}
function curriculumMeaning(prefix, text, definition) {
  if (prefix === "global-english") return stageVietnameseMeaning(text, definition);
  const labels = {
    communication: `nghia giao tiep: ${definition}`,
    toeic: `nghia TOEIC/cong viec: ${definition}`,
    "global-english": `nghia theo Stage: ${definition}`
  };
  return labels[prefix] || definition;
}

function curriculumDefinition(prefix, text, definition) {
  if (prefix === "global-english") return stageFriendlyDefinition(text, definition);
  const starters = {
    communication: `In daily communication, "${text}" means ${definition}.`,
    toeic: `In TOEIC and workplace English, "${text}" means ${definition}.`,
    "global-english": `In Cambridge Global English practice, "${text}" means ${definition}.`
  };
  return starters[prefix] || definition;
}

function stageVietnameseMeaning(text, category) {
  const categoryMeanings = {
    "classroom object": `do dung hoc tap: "${text}" dung de hoc, viet, doc hoac lam bai`,
    "classroom person": `nguoi trong lop hoc: "${text}" la nguoi tham gia viec day hoac hoc`,
    "colour word": `tu chi mau sac: "${text}" dung de mo ta mau cua do vat`,
    "number word": `tu chi so luong: "${text}" dung de dem nguoi, do vat hoac diem so`,
    "family word": `tu ve gia dinh: "${text}" dung de noi ve nguoi than`,
    "animal word": `tu ve dong vat: "${text}" dung de noi ve con vat va dac diem cua no`,
    "action word": `tu chi hanh dong: "${text}" dung de noi ai do lam gi`,
    "school instruction": `cau lenh trong lop: "${text}" dung khi giao vien yeu cau hoc sinh lam viec gi`,
    "daily routine": `hoat dong hang ngay: "${text}" la viec thuong lam trong mot ngay`,
    "time word": `tu chi thoi gian: "${text}" dung de noi khi nao viec gi xay ra`,
    "food word": `tu ve thuc an: "${text}" dung khi noi ve bua an hoac suc khoe`,
    "place word": `tu chi noi chon: "${text}" dung de noi ve dia diem`,
    "weather word": `tu ve thoi tiet: "${text}" dung de mo ta bau troi hoac ngay hom do`,
    "feeling word": `tu chi cam xuc: "${text}" dung de noi minh cam thay nhu the nao`,
    "ability word": `tu chi kha nang: "${text}" dung de noi co the lam viec gi`,
    "question word": `tu de hoi: "${text}" dung de hoi thong tin`
  };
  return categoryMeanings[category] || `nghia de hieu: "${text}" la tu thuoc nhom ${category}, dung de noi ro y trong bai hoc hoac cau vi du`;
}
function stageFriendlyDefinition(text, category) {
  const categoryDefinitions = {
    "classroom object": `"${text}" is a school item that students use to study, write, read, organise work, or take part in class.`,
    "classroom person": `"${text}" is a person in a classroom who is part of learning, asking questions, explaining ideas, or practising skills.`,
    "colour word": `"${text}" is a colour word used to describe what something looks like.`,
    "number word": `"${text}" is a number word used for counting things, people, marks, or minutes.`,
    "family word": `"${text}" is a family word used when talking about home, care, relationships, or daily life.`,
    "animal word": `"${text}" is an animal word used to describe pets, wildlife, habitats, or simple stories.`,
    "action word": `"${text}" is an action word that tells what someone does.`,
    "school instruction": `"${text}" is a classroom instruction used when a teacher or student starts an action.`,
    "daily routine": `"${text}" is a daily routine phrase used to talk about things people do regularly.`,
    "time word": `"${text}" is a time word used to say when something happens.`,
    "food word": `"${text}" is a food word used to talk about meals, health, likes, or daily habits.`,
    "place word": `"${text}" is a place word used to describe where people go, play, study, or meet.`,
    "weather word": `"${text}" is a weather word used to describe the sky or the day.`,
    "feeling word": `"${text}" is a feeling word used to describe emotion or mood.`,
    "ability word": `"${text}" is used to talk about what someone is able or allowed to do.`,
    "question word": `"${text}" is used to ask for information, especially about place or situation.`
  };
  return categoryDefinitions[category] || `"${text}" is a useful Cambridge Global English word for ${category}. Use it to make a clear sentence, describe an idea, or answer a school topic question.`;
}

function curriculumExample(prefix, text, levelLabel, stageLabel = "") {
  if (prefix === "communication") return `I can use "${text}" naturally when I talk with friends, teachers, or new people.`;
  if (prefix === "toeic") return `The office email used "${text}" to explain an important workplace situation.`;
  if (prefix === "global-english") return `${levelLabel} learners can use "${text}" in a school topic, project, or short paragraph.`;
  return `Use "${text}" in a clear sentence for ${levelLabel}.`;
}

function curriculumUsage(prefix, text, levelLabel) {
  if (prefix === "communication") return `Use "${text}" in short, natural spoken English. Try one polite sentence and one casual sentence.`;
  if (prefix === "toeic") return `Use "${text}" in emails, notices, meetings, schedules, or workplace conversations.`;
  if (prefix === "global-english") return `Use "${text}" in ${levelLabel} speaking, reading, writing, or project work.`;
  return `Use "${text}" when it fits the topic.`;
}

function renderTopics() {
  const topics = [...new Set(activeWords().map((item) => item.topic))].sort();
  els.topicFilter.innerHTML = `<option value="all">All topics</option>${topics.map((topic) => `<option value="${topic}">${topic}</option>`).join("")}`;
  if (![...topics, "all"].includes(state.topic)) state.topic = "all";
  els.topicFilter.value = state.topic;
}

function renderWords() {
  const level = currentLevel();
  els.bandKicker.textContent = currentCurriculum().label;
  els.bandTitle.textContent = level.title;
  els.bandSubtitle.textContent = level.subtitle;
  const query = (state.search || "").toLowerCase();
  let words = activeWords()
    .filter((item) => state.topic === "all" || item.topic === state.topic)
    .filter((item) => !query || `${item.text} ${displayMeaning(item)} ${item.topic} ${item.definition}`.toLowerCase().includes(query));
  words = rotateWordsForToday(words, state.band);
  els.wordGrid.innerHTML = words.map(card).join("") || emptyLearnState();
  els.wordGrid.querySelectorAll("[data-speak]").forEach((button) => button.addEventListener("click", () => speak(button.dataset.speak, button.dataset.lang)));
  els.wordGrid.querySelectorAll("[data-save]").forEach((button) => button.addEventListener("click", () => toggle("saved", button.dataset.save)));
  els.wordGrid.querySelectorAll("[data-master]").forEach((button) => button.addEventListener("click", () => toggle("mastered", button.dataset.master, true)));
  bindPracticeChecks(els.wordGrid);
  els.wordGrid.querySelectorAll("[data-ask]").forEach((button) => button.addEventListener("click", () => {
    const item = activeWords().find((entry) => entry.id === button.dataset.ask) || vocabulary.find((entry) => entry.id === button.dataset.ask);
    currentMessages().push({ role: "assistant", text: explain(item, "vi") });
    state.activeTab = "assistant";
    saveAndRender();
  }));
}

function emptyLearnState() {
  if (state.studyMode === "global-english" && !hasOfficialStageUnits()) {
    return `<section class="dashboard-waiting topic-waiting">
      <span class="waiting-icon" aria-hidden="true"><svg><use href="#icon-learn"></use></svg></span>
      <div>
        <strong>Official Cambridge unit data is needed for ${currentLevel().title}.</strong>
        <p>I removed the guessed Unit words. Send the exact book edition, PDF pages, or photos of the unit vocabulary list, and this Stage will be filled accurately.</p>
      </div>
    </section>`;
  }
  return `<p class="empty-state">No matching words.</p>`;
}
const topicVietnameseHints = {
  education: "giáo dục, học tập và đào tạo",
  environment: "môi trường và phát triển bền vững",
  technology: "công nghệ và đời sống số",
  health: "sức khỏe, lối sống và y tế",
  work: "công việc, nghề nghiệp và nơi làm việc",
  society: "xã hội, cộng đồng và hành vi con người",
  government: "chính phủ, chính sách và quản lý công",
  culture: "văn hóa, nghệ thuật và bản sắc",
  travel: "du lịch, giao thông và di chuyển",
  place: "địa điểm, đô thị và không gian sống",
  development: "phát triển, thay đổi và tiến bộ",
  argument: "lập luận, lợi ích và bất lợi",
  logic: "lý do, kết quả và liên kết ý"
};

const topicFamilyMap = {
  access: ["access", "accessible", "accessibility"],
  analyse: ["analyse", "analysis", "analytical"],
  analysis: ["analyse", "analysis", "analytical"],
  biodiversity: ["biodiversity", "biodiverse", "biological diversity"],
  climate: ["climate", "climatic", "climatology"],
  compare: ["compare", "comparison", "comparative"],
  conclusion: ["conclude", "conclusion", "conclusive"],
  conservation: ["conserve", "conservation", "conservative"],
  ecosystem: ["ecosystem", "ecological", "ecology"],
  evaluate: ["evaluate", "evaluation", "evaluative"],
  evidence: ["evidence", "evident", "evidently"],
  innovation: ["innovate", "innovation", "innovative"],
  migration: ["migrate", "migration", "migrant"],
  pollution: ["pollute", "pollution", "polluted"],
  recycle: ["recycle", "recycling", "recyclable"],
  recycling: ["recycle", "recycling", "recyclable"],
  urbanisation: ["urban", "urbanise", "urbanisation"],
  quality: ["quality", "qualitative", "qualify"],
  cost: ["cost", "costly", "cost-effective"],
  awareness: ["aware", "awareness", "unaware"],
  pressure: ["pressure", "pressurise", "pressured"],
  responsibility: ["responsible", "responsibility", "responsibly"],
  impact: ["impact", "impactful", "impacted"],
  policy: ["policy", "policymaker", "policy-making"],
  challenge: ["challenge", "challenging", "challenger"],
  opportunity: ["opportunity", "opportune", "opportunistic"],
  public: ["public", "publicly", "publicise"],
  private: ["private", "privately", "privacy"],
  global: ["global", "globally", "globalisation"],
  local: ["local", "locally", "localise"],
  social: ["social", "socially", "society"],
  sustainable: ["sustain", "sustainable", "sustainability"],
  effective: ["effect", "effective", "effectively"],
  major: ["major", "majority", "majorly"],
  long: ["long-term", "length", "lengthy"],
  short: ["short-term", "shortage", "shorten"]
};

function headWord(term) {
  const parts = term.replace(/[^a-zA-Z\s-]/g, "").split(/\s+/).filter(Boolean);
  return parts[parts.length - 1] || term;
}

function topicIconSvg(category) {
  const icon = topicIcons[category] || "icon-tag";
  return `<svg aria-hidden="true"><use href="#${icon}"></use></svg>`;
}

function topicTermDetails(topic, term) {
  const cleanTerm = term.trim();
  const head = headWord(cleanTerm).toLowerCase();
  const topicName = topic.title.toLowerCase();
  const viHint = topicVietnameseHints[topic.category] || "mot y quan trong trong IELTS";
  const mappedFamily = topicFamilyMap[head] || topicFamilyMap[cleanTerm.toLowerCase()];
  const family = mappedFamily || (cleanTerm.includes(" ")
    ? [cleanTerm, `${head}-related`, `${head}-based`]
    : [cleanTerm, `${cleanTerm}-related`, `${cleanTerm} word`]);
  return {
    vi: `${cleanTerm}: khái niệm hoặc cụm từ liên quan đến ${viHint}.`,
    example: `Governments and individuals should consider ${cleanTerm} when discussing ${topicName} in modern society.`,
    collocations: [
      `${cleanTerm} policy`,
      `${cleanTerm} impact`,
      `improve ${cleanTerm}`,
      `a major ${head}`,
      `${cleanTerm} in society`
    ],
    family: cleanWordFamily(cleanTerm, family),
    usage: `Use "${cleanTerm}" to make an IELTS idea more specific, especially when explaining causes, effects, solutions, or examples about ${topicName}.`
  };
}

function topicTermCard(topic, term, index) {
  const details = topicTermDetails(topic, term);
  const topicEntry = { text: term, ipa: offlineIpa(term), family: details.family };
  return `<article class="word-card topic-term-card">
    <div class="word-top">
      <span class="topic-pill"><span class="topic-pill-icon" aria-hidden="true">${topicIconSvg(topic.category)}</span>${topic.title}</span>
      <div class="audio-buttons" aria-label="Pronunciation choices">
        <button type="button" data-speak="${term}" data-lang="en-US" title="American English">US</button>
        <button type="button" data-speak="${term}" data-lang="en-GB" title="British English">UK</button>
      </div>
    </div>
    <h3>${term}</h3>
    <p class="ipa">${displayIpa(topicEntry)}</p>
    <p class="meaning">Vietnamese meaning: ${cleanDisplayText(details.vi, details.definition || `Useful phrase for ${topic.title}`)}</p>
    <div class="detail-block"><strong><span class="detail-icon" aria-hidden="true"><svg><use href="#icon-check"></use></svg></span> Practice prompt</strong><span>Write one sentence about ${topic.title.toLowerCase()} using "${term}".</span></div>
    <div class="detail-block"><strong><span class="detail-icon" aria-hidden="true"><svg><use href="#icon-example"></use></svg></span> IELTS example</strong><span>${details.example}</span></div>
    <div class="detail-block"><strong><span class="detail-icon" aria-hidden="true"><svg><use href="#icon-link"></use></svg></span> Collocation</strong><span>${details.collocations.join(" / ")}</span></div>
    <div class="detail-block"><strong><span class="detail-icon" aria-hidden="true"><svg><use href="#icon-family"></use></svg></span> Word family</strong><span>${cleanWordFamily(term, details.family).join(" / ")}</span></div>
    <div class="detail-block"><strong><span class="detail-icon" aria-hidden="true"><svg><use href="#icon-usage"></use></svg></span> Suggested use</strong><span>${details.usage}</span></div>
    ${practiceBox(`topic-${topic.id}-${index}`, term, details.collocations)}
  </article>`;
  /*
  return `<article class="word-card topic-term-card">
    <div class="word-top">
      <span class="topic-pill"><span class="topic-pill-icon" aria-hidden="true">${topicIconSvg(topic.category)}</span>${topic.title}</span>
      <div class="audio-buttons" aria-label="Pronunciation choices">
        <button type="button" data-speak="${term}" data-lang="en-US" title="American English">US</button>
        <button type="button" data-speak="${term}" data-lang="en-GB" title="British English">UK</button>
      </div>
    </div>
    <h3>${term}</h3>
    <p class="ipa">Topic vocabulary ${index + 1} of ${topic.terms.length}</p>
    <p class="meaning">Use this in IELTS Speaking/Writing for ${topic.title.toLowerCase()}.</p>
    <div class="detail-block"><strong><span class="detail-icon" aria-hidden="true"><svg><use href="#icon-check"></use></svg></span> Practice prompt</strong><span>Write one sentence about ${topic.title.toLowerCase()} using "${term}".</span></div>
    <div class="detail-block"><strong><span aria-hidden="true">â›“</span> Collocation move</strong><span>Try combining it with cause, impact, policy, access, quality, or responsibility.</span></div>
    <p class="note">Topic bank item. Save full dictionary cards from Band Learn; use this list for topic drilling.</p>
  </article>`;
  */
}

function renderTopicBank() {
  if (!els.topicBankGrid) return;
  els.topicBankGrid.innerHTML = ieltsTopicBanks.map((topic) => `<button class="topic-bank-card ${topic.id === state.ieltsTopic ? "active" : ""}" type="button" data-ielts-topic="${topic.id}">
    <span class="topic-bank-icon" aria-hidden="true">${topicIconSvg(topic.category)}</span>
    <strong>${topic.title}</strong>
    <small>${topic.terms.length} words and collocations</small>
  </button>`).join("");
  els.topicBankGrid.querySelectorAll("[data-ielts-topic]").forEach((button) => button.addEventListener("click", () => {
    state.ieltsTopic = button.dataset.ieltsTopic;
    save();
    renderTopicBank();
    openTopicModal(button.dataset.ieltsTopic);
  }));
}

function renderSelectedTopicTerms() {
  if (!els.topicTermList) return;
  const topic = ieltsTopicBanks.find((item) => item.id === state.ieltsTopic);
  if (!topic) {
    els.topicTermList.innerHTML = `<section class="dashboard-waiting topic-waiting">
      <span class="waiting-icon" aria-hidden="true"><svg><use href="#icon-topics"></use></svg></span>
      <div>
        <strong>Choose a topic above.</strong>
        <p>The 50 words and collocations for that IELTS topic will appear here.</p>
      </div>
    </section>`;
    return;
  }
  els.topicTermList.innerHTML = `<div class="topic-term-heading">
    <div>
      <p class="section-kicker">Selected topic</p>
      <h3>${topic.title}</h3>
    </div>
    <span>${topic.terms.length} words and collocations</span>
  </div>
  <div class="topic-term-grid">${topic.terms.map((term, index) => topicTermCard(topic, term, index)).join("")}</div>`;
  els.topicTermList.querySelectorAll("[data-speak]").forEach((button) => button.addEventListener("click", () => speak(button.dataset.speak, button.dataset.lang)));
}

function openTopicModal(topicId) {
  const topic = ieltsTopicBanks.find((item) => item.id === topicId);
  if (!topic || !els.topicModal) return;
  els.topicModalTitle.textContent = topic.title;
  els.topicModalSubtitle.textContent = `${topic.terms.length} words and collocations`;
  els.topicModalBody.innerHTML = `<div class="topic-term-grid modal-topic-grid">${topic.terms.map((term, index) => topicTermCard(topic, term, index)).join("")}</div>`;
  els.topicModalBody.querySelectorAll("[data-speak]").forEach((button) => button.addEventListener("click", () => speak(button.dataset.speak, button.dataset.lang)));
  bindPracticeChecks(els.topicModalBody);
  els.topicModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeTopicModal() {
  if (!els.topicModal || els.topicModal.hidden) return;
  els.topicModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function rotateWordsForToday(words, salt = "") {
  if (words.length < 2) return words;
  const today = new Date();
  const dateSeed = Number(`${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`);
  const saltSeed = [...salt].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const start = (dateSeed + saltSeed) % words.length;
  return [...words.slice(start), ...words.slice(0, start)];
}

function practiceBox(id, term, collocations = []) {
  const feedback = state.practiceFeedback?.[id] || "";
  return `<form class="practice-box" data-practice-id="${id}" data-practice-term="${escapeHtml(term)}" data-practice-collocations="${escapeHtml(collocations.join("|"))}">
    <label>
      <span>Practice: write 1-2 example sentences</span>
      <textarea rows="3" placeholder="Use '${escapeHtml(term)}' in your own IELTS sentence..."></textarea>
    </label>
    <button type="submit">Submit for AI check</button>
    <p class="practice-feedback">${feedback ? escapeHtml(feedback) : "AI will check spelling, grammar, capitals, punctuation, word use, and collocation."}</p>
  </form>`;
}

function bindPracticeChecks(root) {
  root.querySelectorAll("[data-practice-id]").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = form.dataset.practiceId;
    const term = form.dataset.practiceTerm;
    const collocations = (form.dataset.practiceCollocations || "").split("|").filter(Boolean);
    const text = form.querySelector("textarea").value.trim();
    const feedback = checkPracticeSentence(text, term, collocations);
    state.practiceFeedback[id] = feedback;
    form.querySelector(".practice-feedback").textContent = feedback;
    save();
  }));
}

function checkPracticeSentence(text, term, collocations) {
  if (!text) return "Write 1-2 full sentences first, then submit again.";
  const lower = text.toLowerCase();
  const normalizedTerm = term.toLowerCase();
  const points = [];
  const sentences = (text.match(/[^.!?]+[.!?]?/g) || [text]).filter((sentence) => sentence.trim());
  const commonTypos = {
    becuase: "because",
    recieve: "receive",
    enviroment: "environment",
    goverment: "government",
    diffrent: "different",
    importent: "important",
    wich: "which",
    alot: "a lot",
    definately: "definitely",
    accomodation: "accommodation",
    grammer: "grammar"
  };
  const typoHits = Object.entries(commonTypos).filter(([wrong]) => new RegExp(`\\b${wrong}\\b`, "i").test(text));
  if (text.split(/\s+/).length < 7) points.push("Make it a fuller sentence with a clear subject, verb, and idea.");
  if (!lower.includes(normalizedTerm)) points.push(`Try to include the target word or phrase: "${term}".`);
  if (!/^[A-Z"']/.test(text)) points.push("Capital letter: start the first sentence with a capital letter.");
  if (/\bi\b/.test(text)) points.push("Capital letter: write the pronoun 'I' as a capital letter.");
  if (!/[.!?]$/.test(text)) points.push("Punctuation: add a final full stop, question mark, or exclamation mark.");
  if (/\s+[,.!?]/.test(text)) points.push("Punctuation: remove the space before commas, full stops, question marks, or exclamation marks.");
  if (sentences.length > 2) points.push("Keep this practice box to 1-2 example sentences.");
  typoHits.forEach(([wrong, right]) => points.push(`Spelling: change "${wrong}" to "${right}".`));
  const hasAnyCollocation = collocations.some((item) => lower.includes(item.toLowerCase()));
  if (collocations.length && !hasAnyCollocation) {
    points.push(`Collocation: try one stronger phrase such as "${collocations[0]}".`);
  }
  if (!points.length) {
    return `Good sentence. It uses "${term}" clearly. Tiny upgrade: add one precise example or reason if you want a stronger IELTS answer.`;
  }
  return points.join(" ");
}

function detectReplyLanguage(text) {
  const value = text.toLowerCase();
  const commanded = detectCommandedLanguage(value);
  if (commanded) return commanded;
  if (/\b(minh|ban|hay|giai thich|nghia|la gi|dich|tu nay|vi du|tieng viet|ke hoach|lap plan|ngay|tuan|thang|giup)\b/i.test(value)) return "vi";
  if (/\b(mình|bạn|hãy|giải thích|nghĩa|là gì|dịch|từ này|ví dụ|tiếng việt|kế hoạch|ngày|tuần|tháng|giúp)\b/i.test(value)) return "vi";
  if (/[à-ỹđ]/i.test(text)) return "vi";
  if (/[\u0E00-\u0E7F]/.test(text)) return "th";
  if (/[\u4E00-\u9FFF]/.test(text)) return "zh";
  if (/[\u3040-\u30FF]/.test(text)) return "ja";
  if (/[\uAC00-\uD7AF]/.test(text)) return "ko";
  if (/[\u0600-\u06FF]/.test(text)) return "ar";
  if (/[\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0B80-\u0BFF\u0C00-\u0C7F\u0D00-\u0D7F]/.test(text)) return "hi";
  return "en";
}

function detectCommandedLanguage(value) {
  const commands = [
    { lang: "vi", patterns: ["answer in vietnamese", "reply in vietnamese", "speak vietnamese", "tra loi bang tieng viet", "noi tieng viet", "bang tieng viet", "trả lời bằng tiếng việt", "nói tiếng việt", "bằng tiếng việt"] },
    { lang: "zh", patterns: ["answer in chinese", "reply in chinese", "speak chinese", "中文", "汉语", "用中文"] },
    { lang: "ja", patterns: ["answer in japanese", "reply in japanese", "speak japanese", "tiếng nhật", "日本語", "にほんご"] },
    { lang: "ko", patterns: ["answer in korean", "reply in korean", "speak korean", "tiếng hàn", "한국어"] },
    { lang: "th", patterns: ["answer in thai", "reply in thai", "speak thai", "tiếng thái", "ภาษาไทย"] },
    { lang: "hi", patterns: ["answer in hindi", "reply in hindi", "speak hindi", "tiếng hindi", "हिंदी"] },
    { lang: "ar", patterns: ["answer in arabic", "reply in arabic", "speak arabic", "tiếng ả rập", "العربية"] },
    { lang: "en", patterns: ["answer in english", "reply in english", "speak english", "tra loi bang tieng anh", "noi tieng anh", "bang tieng anh", "tiếng anh", "tieng anh", "tiếng anh"] }
  ];
  return commands.find((entry) => entry.patterns.some((pattern) => value.includes(pattern)))?.lang || null;
}

function missingWordReply(lang) {
  const replies = {
    vi: "Mình chưa tìm thấy từ đó trong kho mẫu hiện tại. Bạn có thể thử: mitigate, sustainable, prevalent, equitable, ubiquitous hoặc ameliorate.",
    zh: "我还没有在当前词库中找到这个词。你可以试试: mitigate, sustainable, prevalent, equitable, ubiquitous, ameliorate.",
    ja: "現在の単語リストではその語を見つけられませんでした。mitigate, sustainable, prevalent, equitable, ubiquitous, ameliorate などを試してください。",
    ko: "현재 단어 목록에서 그 단어를 찾지 못했어요. mitigate, sustainable, prevalent, equitable, ubiquitous, ameliorate 등을 시도해 보세요.",
    th: "ฉันยังไม่พบคำนี้ในคลังคำศัพท์ปัจจุบัน ลองค้นหา mitigate, sustainable, prevalent, equitable, ubiquitous หรือ ameliorate.",
    hi: "मुझे यह शब्द मौजूदा word bank में नहीं मिला। आप mitigate, sustainable, prevalent, equitable, ubiquitous या ameliorate आज़मा सकते हैं।",
    ar: "لم أجد هذه الكلمة في قائمة المفردات الحالية. جرّبي كلمات مثل mitigate أو sustainable أو prevalent أو equitable أو ubiquitous أو ameliorate."
  };
  return replies[lang] || "I cannot find that word in the current sample bank yet. Try words such as mitigate, sustainable, prevalent, equitable, ubiquitous, or ameliorate.";
}

function speak(text, lang = "en-US") {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.86;
  const voices = speechSynthesis.getVoices();
  const voice = voices.find((item) => item.lang === lang) || voices.find((item) => item.lang?.startsWith(lang.slice(0, 2)));
  if (voice) utterance.voice = voice;
  speechSynthesis.speak(utterance);
}

function calculateStreak() {
  let streak = 0;
  const days = new Set(state.doneDays);
  const date = new Date();
  while (days.has(date.toISOString().slice(0, 10))) {
    streak += 1;
    date.setDate(date.getDate() - 1);
  }
  return streak;
}

function exportData() {
  const visibleWords = activeWords();
  const words = state.saved.map((id) => vocabulary.find((item) => item.id === id) || visibleWords.find((item) => item.id === id)).filter(Boolean);
  const text = words.map((item) => `${currentCurriculum().label} ${item.band}: ${item.text} ${displayIpa(item)} = ${displayMeaning(item)}. ${item.example}`).join("\n");
  const notes = currentNotes().map((note) => `\n## ${note.title}\n${note.body}`).join("\n");
  const blob = new Blob([`${text}\n\nNotebook\n${notes}`], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${state.studyMode}-mandy-vocab-notes.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

window.addEventListener("load", initGoogleSignIn);
render();





