import * as Localization from "expo-localization";
import i18n from "i18n-js";

const langEn = {
  //home screen
  Emer: "Emergency",
  Chat: "Chat",
  no: "Pick Number",

  //emergency screen
  Flood: "Flood",
  Earthquake: "Earthquake",
  Tsunami: "Tsunami",
  Typhoon: "Typhoon",
  ForestF: "Forest Fire",
  Volcano: "Volcanic Eruption",
  Call: "Emergency Call",
  Number: "Pick Number",

  //flood screen
  ft: "FLOOD:",
  f1: "DO NOT walk, swim, or dive into flood water",
  f2: "Stay away from areas with fast-moving waters",
  f3: "If flood gets worst, find higher ground",
  f4: "WAIT for help to arrive",
  f5:
    "If no help arrives, contact BNPB at +62 21 29827444 or TNI at +62 21 84595576",
  f6: "After The Flood:",

  f7:
    "Avoid driving, except in emergencies. Be aware of the risk of electrocution. Do not touch electrical equipment if it is wet or if you are standing in water. If it is safe to do so, turn off the electricity to prevent electric shock.",

  //earthquake screen
  et: "EARTHQUAKE:",
  e1: "If Indoors: ",
  e2: "When earthquake stops go outside and find an open area",
  e3: "Stay AWAY from buildings, there will be aftershocks following",
  e4: "If Outdoors:",
  e5:
    "Quickly find an open area away from buildings and stay there until the earthquake stops",
  e6:
    "If you are in a vehicle, stop your vehicle as soon as possible and find an open area",
  e7: "After The Earthquake:",
  e8: "Expect aftershocks to follow the main shock of an earthquake",
  e9: "Do not enter damaged buildings",

  //tsunami screen
  t1:
    "Evacuate: DO NOT wait! Leave as soon as you see any natural signs of a tsunami or receive an official tsunami warning.",
  t2: "Go inland as quickly as possible and find high grounds",
  t3: "If you are in a boat, face the wave direction and head out into the sea",
  t4: "If you are in the water, grab onto something that floats or is sturdy",
  t5: "After The Tsunami:",
  t6:
    "Avoid wading in floodwater, which can contain dangerous debris. Water may be deeper than it appears",
  t7: "Stay away from damaged buildings, roads, and bridges",

  //typhoon screen
  tyt: "Typhoon: ",
  ty1: "Stay inside the house",
  ty2: "Close all windows and turn off the main power unit",
  ty3: "Continuously check for weather updates",
  ty4:
    "Check whether or not the supply of water is safe to drink. If not, boil water for at least 20 minutes",
  ty5: "After The Typhoon:",
  ty6:
    "Beware of dangerous animals such as snakes that may have entered your house",
  ty7:
    "Report damaged electrical cables and fallen electric posts to the authorities.",

  //forest fire screen
  fft: "FOREST FIRE:",
  ff1:
    "Don't try to outrun the blaze. Instead, look for a body of water such as a pond or river to crouch in.",
  ff2:
    "If there is no water nearby, find a depressed, cleared area with little vegetation, lie low to the ground, and cover your body with wet clothing, a blanket, or soil. Stay low and covered until the fire passes.",
  ff3:
    "Protect your lungs by breathing air closest to the ground, through a moist cloth, if possible, to avoid inhaling smoke.",
  ff4:
    "Shut off natural gas, propane, or fuel oil supplies. Fill any large vessels – pools, hot tubs, garbage cans, or tubs – with water to slow or discourage fire.",

  //volcanic eruption screen
  vt: "VOLCANIC ERUPTION:",
  v1:
    "Evacuate only as recommended by authorities to stay clear of lava, mudflows, and flying rocks and debris.",
  v2:
    "Before you leave the house, change into long-sleeved shirts and long pants and use goggles or eyeglasses, not contacts. Wear an emergency mask or hold a damp cloth over your face",
  v3:
    "If you are not evacuating, close windows and doors and block chimneys and other vents",
  v4:
    "Be aware that ash may put excess weight on your roof and need to be swept away. Wear protection during cleanups",
  v5:
    "Ash can damage machinery and metal parts, so avoid carrying transport vehicles. If you have to drive, stay under 56 kilometers per hour.",

  //chat bot responses
  hospital1: "Your nearest hospital is ",
  hospital2: ". Here is the link for directions: ",
  heartattack: "Hang on, looking for a hospital now...",
  headache:
    "Headaches are common among people and it is usually a sign of stress, high blood pressure, anxiety, or depression. On a scale of 1-5, how bad is the headache?",
  headache12:
    "We recommend taking a nap for 1-2 hours. If you still experience a headache, try visiting your local pharmacist.",
  headache24: "Would you like to go to a hospital to get checked up?",
  headache24y: "Hang on, looking for a hospital now...",
  headache24n:
    "We recommend taking a nap for 1-2 hours. If you still experience a headache, try visiting your local pharmacist.",
  headache5:
    "We recommend you to visit a hospital. Please wait while we search for one...",
  stroke:
    "Please immediately bring the person to a hospital. Hang on while we look for one...",
  pinkeye:
    "A pink eye is not a serious emergency so don’t worry about it. Try to clean your eyelids with a wet cloth and apply warm/cold compresses several times daily. If you wear contacts, stop wearing them until the pink eye is cured. If you see no improvements, please go and see a doctor.",
  choking:
    "You must islodge the respiratory tract obstruction by bending the person's head and shoulders forward, or in the case of a small child, hold them upside down and thump the back hard, between the shoulder-blades.",
  fracture:
    "Please immediately bring the person to a hospital. We are finding one now...",
  fever: "On a scale of 1-3, how bad is your fever?",
  fever1:
    "Continuously take your temperature and try to get some sleep. Remember to keep hydrated and stay cool.",
  fever2:
    "We recommend you to take over-the-counter medicine such as ibuprofen to reduce fever. Continuously take your temperature and try to get some sleep. Remember to keep hydrated and stay cool.",
  fever3:
    "We recommend you to go to a doctor. Please wait while we locate a hospital near you.",
  backpain:
    "Back pain can often be eased with home treatments, including icing or heating, strengthening exercises, light activity and over-the-counter medications for pain. If symptoms persist after a week or two of home care, we recommend you come in for a physician evaluation.",
  diarrhea:
    "Please drink a lot of water and eat a recovery diet such as bananas and cooked, soft vegetables. Try over-the-counter medicines too by visiting your local pharmacist.",
  runnynose:
    "Try placing a cool mist humidifier in the bedroom to help promote better sleep, keeping the nose clear.",
  itchy: "Is your skin turning red or swollen?",
  itchyy:
    "Please go and see a doctor. We are searching for the closest hospital now.",
  itchyn:
    "This might be due to dust allergy. Try and move out of the place and compress your skin with cold water.",
  sorethroat: "What color is your phlegm?",
  sorethroatb:
    "Black phlegm is most common among smokers. If you are one, please attempt to stop until your sore throat cures. If your phlegm is still black after a couple of days, please go and see a doctor.",
  sorethroatg:
    "Green phlegm is a sign of infection. Please go see a doctor. We are looking for the closest hospital right now...",
  sorethroaty:
    "Yellow phlegm is a sign that your body is fighting an infection. Please go see a doctor before it gets worse. We are looking for the closest hospital right now…",
  sorethroatw:
    "White phlegm may lead to an infection. Please treat your sore throat with an  over-the-counter medicine to treat it before it gets worse.",
  sorethroatr:
    "Phlegm with blood just means that you are dehydrated. Try and drink at least 8 glasses of water a day.",
  hardbreathing: "Does your chest/lung hurt?",
  hardbreathingy:
    "Please go and see a doctor. We are searching for the closest one right now.",
  hardbreathingn:
    "It might be due to the air pollution in Indonesia. Try and stay inside the house for a couple hours. If your lungs still hurt, we recommend you to go see a doctor.",
  thankyou: "Happy to help :)"
};

const langIn = {
  //chat bot responses
  hospital1: "Rumah sakit yang terdekat anda adalah ",
  hospital2: ". Ini adalah link untuk direksi: ",
  heartattack:
    "Tunggu sebentar, kami sedang mencari rumah sakit terdekat sekarang...",

  //home screen
  Emer: "Darurat",
  Chat: "Bot Obrolan",
  no: "Pilih Nomor Telpon",

  //emergency screen
  Flood: "Banjir",
  Earthquake: "Gempa Bumi",
  Tsunami: "Tsunami",
  Typhoon: "Topan",
  ForestF: "Kebakaran Hutan",
  Volcano: "Gunung Meletus",
  Call: "Telepon Darurat",
  Number: "Pilih",

  //flood screen
  ft: "BANJIR:",
  f1: "JANGAN berjalan, berenang, atau menyelam ke air banjir",
  f2: "Jauhi area dengan perairan yang bergerak cepat",
  f3: "Jika banjir semakin parah, temukan tempat yang lebih tinggi",
  f4: "TUNGGU bantuan untuk datang",
  f5:
    "Jika tidak ada bantuan datang, hubungi BNPB di +62 21 29827444 atau TNI di +62 21 84595576",
  f6: "Setelah banjir:",
  f7:
    "Menjauhlah dari kabel listrik dan waspadai binatang liar. Dengarkan instruksi yang diberikan oleh otoritas",

  //earthquake screen
  et: "GEMPA BUMI:",
  e1: "Jika Di Dalam Ruangan: ",
  e2: "Ketika gempa berhenti, mohon pergi ke luar dan temukan daerah terbuka",
  e3:
    "Saat gempa telah berhenti, menjauhlah dari gedung karena akan ada kemungkinan gempa susulan",
  e4: "Jika Di Luar Ruangan:",
  e5:
    "Cepat temukan daerah terbuka yang jauh dari bangunan dan tetap di tempat sampai gempa berhenti",
  e6:
    "Jika anda berada di dalam kendaraan, hentikan kendaraan anda segera mungkin dan temukan daerah terbuka",
  e7: "Setelah Gempa: ",
  e8: "Harapkan gempa susulan",
  e9: "Jangan memasuki gedung yang rusak",

  //tsunami screen
  t1:
    "JANGAN MENUNGGU. Segera meninggalkan tempat saat anda mendapatkan peringatan tsunami dari otoritas",
  t2: "Pergilah ke daratan secepat mungkin dan temukan dataran tinggi",
  t3:
    "Jika anda berada di kapal, hadapi kapal anda ke arah ombak dan pergilah ke laut",
  t4: "Jika anda berada di dalam air, pegang sesuatu yang mengapung atau kokoh",
  t5: "Setelah Tsunami:",
  t6:
    "Hindari mengarungi air banjir, yang bisa mengandung puing berbahaya. Air mungkin lebih dalam dari yang terlihat",
  t7: "Jauhi bangunan, jalan, dan jembatan yang rusak",

  //typhoon screen
  tyt: "Topan: ",
  ty1: "Tetap di dalam rumah",
  ty2: "Tutup semua jendela dan matikan unit daya utama",
  ty3: "Terus memeriksa berita untuk cuaca",
  ty4:
    "Periksa apakah pasokan air aman untuk diminum. Jika tidak, rebus air selama 20 menit",
  ty5: "Setelah Topan Berhenti:",
  ty6:
    "Waspadalah terhadap hewan berbahaya seperti ular yang mungkin memasuki rumah anda. Hati-hati terhadap kabel atau outlet yang terendam dalam air",
  ty7: "Tunggu instruksi dari pihak berwenang",

  //forest fire screen
  fft: "KEBAKARAN HUTAN:",
  ff1:
    "Jangan mencoba melarikan diri dari kobaran api. Sebaliknya, cari badan air seperti kolam atau sungai untuk berjongkok di dalamnya.",
  ff2:
    "Jika tidak ada air di sekitar anda, temukan daerah yang tertekan dan berbaring rendah ke tanah. Tutupi tubuh anda dengan pakaian basah, selimut, atau tanah. Tetap rendah dan tertutup sampai api lewat",
  ff3:
    "Lindungi paru-paru anda dengan menghirup udara yang terdekat dengan tanah melalui masker atau kain lembab untuk mengurangi penghirupan asap",
  ff4: "Saat api mendamai, tunggu instruksi lebih lanjut dari pihak berwenang",

  //volcanic eruption screen
  vt: "GUNUNG MELETUS:",
  v1:
    "Hanya ber evakuasi saat direkomendasikan oleh pihak berwenang untuk menghindari lava, lumpur, dan batu terbang dan serpihan.",
  v2: "Hindari daerah sungai dan daerah dataran rendah",
  v3:
    "Sebelum anda meninggalkan rumah, pakailah baju lengan panjang dan celana panjang dan gunakan kacamata. Jangan pakai kontak. Kenakan masker darurat atau pegang kain lembab di wajah anda. Jika anda tidak melakukan evakuasi, tutuplah jendela dan pintu serta batasi cerobong asap dan ventilasi lainnya untuk mencegah abu",
  v4:
    "Saat abu dapat menambah berat pada atap rumah anda, sapu secepatnya. Pakailah perlindungan saat pembersihan",
  v5:
    "Abu dapat merusak mesin dan bagian logam, jadi hindari membawa kendaraan transport. Jika anda harus mengemudi, tinggal di bawah 56 kilometer per jam.",

  //chat bot responses
  hospital1: "Rumah sakit terdekat anda adalah ",
  hospital2: ". Inilah tautan untuk arahnya: ",
  heartattack:
    "Mohon menunggu, kami sedang mencari rumah sakit terdekat anda...",
  headache:
    "Sakit kepala sering terjadi pada orang-orang dan biasanya merupakan tanda stres, tekanan darah tinggi, kecemasan, atau depresi. Pada skala 1-5, seberapa buruk sakit kepala anda?",
  headache12:
    "Kami menyarankan anda untuk tidur selama 1-2 jam. Jika anda masih mengalami sakit kepala, coba kunjungi apotek terdekat.",
  headache24:
    "Apakah anda ingin pergi ke rumah sakit untuk diperiksa oleh dokter?",
  headache24y: "Mohon menunggu saat kami mendeteksi rumah sakit terdekat...",
  headache24n: "Coba tidurkan diri.",
  headache5:
    "Kami menyarankan anda untuk pergi ke dokter. Mohon menunggu saat kami mencarikan anda rumah sakit terdekat.",
  stroke:
    "Tolong segera bawa orang itu ke rumah sakit. Mohon tunggu, kami sedang mencari rumah sakit terdekat.",
  pinkeye:
    "Mata merah bukan keadaan darurat yang serius, jadi jangan khawatir. Coba membersihkan kelopak mata anda dengan kain basah dan kompres dengan air hangat / dingin beberapa kali sehari. Jika anda memakai kontak, berhentikan pemakainya sampai mata merahnya sembuh. Jika anda tidak melihat peningkatan, silakan kunjungi dokter.",
  choking:
    "Anda harus menghindari sumbatan saluran pernapasan dengan menekuk kepala dan bahu orang yang tersedak ke depan. Jika yang tersedak adalah anak kecil, pegang dengan posisi terbalik dan benturkan bagian belakangnya dengan keras di antara tulang belikat.",
  fracture:
    "Tolong segera bawa orang itu ke rumah sakit. Kami sedang mencari rumah sakit terdekat saat ini. Mohon menunggu...",
  fever: "Pada skala 1-3, mohon memberi kami tahu seberapa buruk demam anda?",
  fever1:
    "Terus mengukur suhu tubuh anda dan mencoba tidur. Ingatlah untuk tetap terhidrasi dan tetap tenang.",
  fever2:
    "Kami menyarankan Anda untuk minum obat ibuprofen untuk mengurangi demam. Terus mengukur suhu tubuh anda dan mencoba tidur. Ingatlah untuk tetap terhidrasi dan tetap tenang.",
  fever3:
    "Kami menyarankan anda untuk pergi ke dokter. Mohon menunggu saat kami mencarikan anda rumah sakit terdekat.",
  backpain:
    "Sakit  punggung seringkali dapat diredakan dengan perawatan di rumah, termasuk pemanasan, latihan penguatan, aktivitas ringan dan obat-obatan bebas untuk nyeri. Jika gejalanya menetap setelah satu atau dua minggu perawatan di rumah, kami sarankan anda pergi ke dokter untuk dievaluasi.",
  diarrhea:
    "Minumlah banyak air dan makanlah diet pemulihan seperti pisang dan sayuran lunak yang dimasak. Coba juga obat bebas dengan mengunjungi apoteker setempat.",
  runnynose:
    "Cobalah menempatkan pelembap kabut dingin di kamar tidur untuk membantu meningkatkan kualitas tidur, membuat hidung tetap jernih.",
  itchy: "Apakah kulit anda merah atau bengkak?",
  itchyy: "Tolong pergi dan berkonsultasi dengan dokter.",
  itchyn:
    "Ini mungkin karena alergi debu. Coba keluar dari tempat anda berada dan kompres kulit anda dengan air dingin.",
  sorethroat: "Apa warna dahak anda?",
  sorethroatb:
    "Dahak hitam sangat umum di kalangan perokok. Jika merokok, cobalah untuk berhenti sampai sakit tenggorokan anda telah sembuh. Jika dahak anda masih hitam setelah beberapa hari, silakan pergi ke dokter.",
  sorethroatg:
    "Dahak hijau adalah tanda infeksi. Silahkan pergi ke dokter. Kami sedang mencari rumah sakit terdekat sekarang...",
  sorethroaty:
    "Dahak kuning adalah tanda bahwa tubuh Anda sedang melawan infeksi. Silahkan pergi ke dokter sebelum sakit anda menjadi lebih buruk. Kami sedang mencari rumah sakit terdekat sekarang...",
  sorethroatw:
    "Dahak putih dapat menyebabkan infeksi. Mohon rawat tenggorokan anda dengan obat bebas sebelum sakit anda tambah parah.",
  sorethroatr:
    "Dahak dengan darah berarti Anda sedang mengalami dehidrasi. Cobalah minum setidaknya 8 gelas air per hari.",
  hardbreathing: "Apakah paru-paru anda sakit?",
  hardbreathingy:
    "Silahkan pergi dan menemui dokter. Kami sedang mencari rumah sakit yang terdekat sekarang...",
  hardbreathingn:
    "Ini mungkin karena polusi udara di Indonesia. Cobalah tetap di dalam rumah selama beberapa jam. Jika paru-paru anda masih sakit, kami sarankan anda pergi ke dokter.",
  thankyou: "Sama-sama! :)"
};

i18n.fallbacks = true;
i18n.translations = { en: langEn, "id-US": langIn };
i18n.locale = Localization.locale;

export default i18n;
