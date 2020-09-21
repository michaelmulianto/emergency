import * as Localization from "expo-localization";
import i18n from "i18n-js";

const langEn = {
  //home screen
  Emer: "Disaster",
  Chat: "Chat",
  nearestHospital: "Nearest Hospital",
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

  //covid screen
  aboutCOVID: "About COVID-19",
  symptom: "Symptom Checker",
  confirmed: "Confirmed: ",
  deaths: "Deaths: ",
  recovered: "Recovered: ",
  active: "Active: ",

  //BNPB screen
  aboutBNPB: "About BNPB",
  takeAction: "Take Action",

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

  //about covid screen
  act: "About COVID-19:",
  acb1:
    "Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV). A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans.",
  acb2:
    "Coronaviruses are zoonotic, meaning they are transmitted between animals and people. Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known coronaviruses are circulating in animals that have not yet infected humans.",
  acb3:
    "Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.",
  acb4:
    "Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.",
  acs: "Source: World Health Organization",

  //about bnpb screen
  abt1: "About BNPB",
  abb1:
    "The National Agency for Disaster Countermeasure (Indonesian: Badan Nasional Penanggulangan Bencana; officially National Disaster Management Authority), abbreviated as BNPB, is the Indonesian board for natural disaster affairs. It was established in 2008 to replace the National Disaster Management Coordinating Board (Badan Koordinasi Nasional Penanggulangan Bencana or Bakornas PB). BNPB is directly responsible to the President of Indonesia and the chairman is directly appointed by the President.",
  abt2: "VISION",
  abb2: "• Nation resilience in facing disasters",
  abt3: "MISSION",
  abb3:
    "1. To protect the nation from the threat of disasters by building a culture of disaster risk reduction and disaster preparedness becoming an integrated part of national development;",
  abb4:
    "2. Build a disaster emergency response system quickly, effectively and efficiently;",
  abb5:
    "3. Organizing post-disaster regional and community recovery through better coordinated rehabilitation and reconstruction with disaster risk reduction dimensions;",
  abb6:
    "4. Organizing support and governance of logistics and equipment for disaster management;",
  abb7:
    "5. Carrying out disaster management in a transparent manner with the principles of good governance.",
  abt4: "DUTY",
  abb8:
    "1. Provide guidance and direction for disaster management efforts covering disaster prevention, disaster emergency response, rehabilitation and reconstruction in a fair and equal manner;",
  abb9:
    "2. Determining standardization and needs for disaster management based on statutory regulations;",
  abb10:
    "3. Delivering information on disaster management activities to the public;",
  abb11:
    "4. Reporting the implementation of disaster management to the President once a month in normal conditions and at any time in a state of disaster emergency;",
  abb12:
    "5. Using and being responsible for national and international donations / assistance;",
  abb13:
    "6. To account for the use of the budget received from the State Revenue and Expenditure Budget;",
  abb14:
    "7. Carry out other obligations in accordance with statutory regulations; and",
  abb15:
    "8. Prepare guidelines for the establishment of Regional Disaster Management Agencies.",
  abt5: "FUNCTION",
  abb16:
    "1. Formulation and stipulation of policies for disaster management and handling of refugees by acting quickly and precisely as well as effectively and efficiently; and",
  abb17:
    "2. To coordinate the implementation of disaster management activities in a planned, integrated and comprehensive manner.",

  //chat bot responses
  intro: "Hello! How can I help you?",
  hello: "Hello.",
  wrong:
    "Please ensure that you typed in your emergency correctly. If you did and you are receiving this message, please contact our developer to input your emergency into our system or wait for a future update. Thank you.",
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
    "Headache is a symptom of COVID-19. We recommend you take our COVID symptom survey in the COVID section or immediately contact your doctor. Here is the location of the hospital closest to you...",
  stroke:
    "Please immediately bring the person to a hospital. Hang on while we look for one...",
  pinkeye:
    "A pink eye is a symptom of COVID-19. We recommend you take our COVID symptom survey in the COVID section or immediately contact your doctor. Here is the location of the hospital closest to you...",
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
    "Fever is one of the most common symptom of COVID-19. We recommend you take our COVID symptom survey in the COVID section or immediately contact your doctor. Here is the location of the hospital closest to you...",
  backpain:
    "Back pain can often be eased with home treatments, including icing or heating, strengthening exercises, light activity and over-the-counter medications for pain. If symptoms persist after a week or two of home care, we recommend you come in for a physician evaluation.",
  diarrhea:
    "Diarrhea is a symptom of COVID-19. We recommend you take our COVID symptom survey in the COVID section or immediately contact your doctor. Here is the location of the hospital closest to you...",
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
  thankyou: "Happy to help :)",
  stomachache:
    "Place a hot water bottle or heated wheat bag on your stomach. Try using oils such as “minyak kayu putih” as well. If your stomach ache is not cured within 30 minutes, please go see a doctor as it is a symptom of COVID-19.",
  losstastesmell:
    "A loss of taste and/or smell is a symptom of COVID-19. We recommend you take our COVID symptom survey in the COVID section or immediately contact your doctor.",
  chestpain:
    "Chest pain is a serious symptom of COVID-19. We recommend you take our COVID symptom survey in the COVID section or immediately contact your doctor. Here is the location of the hospital closest to you...",
  cough: "Is your cough dry?",
  coughy:
    "Dry cough is one of the most common symptom of COVID-19. We recommend you take our COVID symptom survey in the COVID section or immediately contact your doctor. Here is the location of the hospital closest to you...",
  coughn:
    "Please drink lots of water and rest your body. If your coughing continues to get worse after a couple of days, please seek medical help.",
  lossspeechmove:
    "Loss of speech or movement is a serious symptom of COVID-19. We recommend you take our COVID symptom survey in the COVID section or immediately contact your doctor. Here is the location of the hospital closest to you...",
  tired:
    "Tiredness is one of the most common symptom of COVID-19. We recommend you take our COVID symptom survey in the COVID section or immediately contact your doctor. Here is the location of the hospital closest to you...",
  earpain:
    "This might be a sign of an ear infection. Please go see a doctor immediately. Here is the closest hospital to you.",
  discolor:
    "Discoloration of fingers or toes are a symptom of COVID-19. We recommend you take our COVID symptom survey in the COVID section or immediately contact your doctor. Here is the location of the hospital closest to you...",
  dryskin:
    "This is a sign of eczema. We recommend you to keep moisturizing and see a dermatologist for professional help.",
  vomit:
    "Try resting your stomach for an hour or two then introduce small amounts of clear fluids such as water. You should avoid dairy products and foods that are high in fiber. If vomiting continues, please go and see a doctor.",
  bite:
    "Please continue to wash your bitten part with soap and water for as long as 15 minutes and then apply an antibiotic cream. We also recommend you see a doctor as soon as possible.",

  //survey buttons
  statement: "Please select the sicknesses that you are currently experiencing",
  most1: "Fever",
  most2: "Dry Cough",
  most3: "Tiredness",
  less1: "Aches and Pains",
  less2: "Sore Throat",
  less3: "Diarrhea",
  less4: "Conjunctivitis",
  less5: "Headache",
  less6: "Lost of Taste or Smell",
  less7: "Rash/Skin Discoloration",
  serious1: "Difficult Breathing",
  serious2: "Chest Pain/Pressure",
  serious3: "Loss of Speech or Movement",
};

const langIn = {
  //chat bot responses
  hospital1: "Rumah sakit yang terdekat anda adalah ",
  hospital2: ". Ini adalah link untuk direksi: ",
  heartattack:
    "Tunggu sebentar, kami sedang mencari rumah sakit terdekat sekarang...",

  //home screen
  Emer: "Bencana",
  Chat: "Bot Obrolan",
  nearestHospital: "Rumah Sakit Terdekat",
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

  //covid screen
  aboutCOVID: "Tentang COVID-19",
  symptom: "Pemeriksa Gejala",
  confirmed: "Total: ",
  deaths: "Meninggal: ",
  recovered: "Sembuh: ",
  active: "Aktif: ",

  //BNPB screen
  aboutBNPB: "Tentang BNPB",
  takeAction: "Ambil Tindakan",

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

  //about covid screen
  act: "Tentang COVID-19 ",
  acb1:
    "Coronavirus (CoV) adalah keluarga besar virus yang menyebabkan penyakit mulai dari flu biasa hingga penyakit yang lebih parah seperti Middle East Respiratory Syndrome (MERS-CoV) dan Severe Acute Respiratory Syndrome (SARS-CoV). Virus corona baru (nCoV) adalah jenis baru yang belum pernah diidentifikasi sebelumnya pada manusia.",
  acb2:
    "Coronavirus bersifat zoonosis, artinya mereka ditularkan antara hewan dan manusia. Investigasi terperinci menemukan bahwa SARS-CoV ditularkan dari kucing musang ke manusia dan MERS-CoV dari unta dromedaris ke manusia.",
  acb3:
    "Beberapa virus corona yang diketahui beredar pada hewan yang belum menginfeksi manusia. Tanda-tanda umum infeksi termasuk gejala pernapasan, demam, batuk, sesak napas, dan kesulitan bernapas. Pada kasus yang lebih parah, infeksi dapat menyebabkan pneumonia, sindrom pernapasan akut yang parah, gagal ginjal, dan bahkan kematian.",
  acb4:
    "Rekomendasi standar untuk mencegah penyebaran infeksi termasuk mencuci tangan secara teratur, menutupi mulut dan hidung saat batuk dan bersin, memasak daging dan telur secara menyeluruh. Hindari kontak dekat dengan siapa pun yang menunjukkan gejala penyakit pernapasan seperti batuk dan bersin.",
  acs: "Sumber: World Health Organization",

  //about bnpb screen
  abt1: "Tentang BNPB",
  abb1:
    "Badan Nasional Penanggulangan Bencana (Indonesia: Badan Nasional Penanggulangan Bencana; resmi Badan Nasional Penanggulangan Bencana), disingkat BNPB, adalah Badan Urusan Bencana Alam Indonesia. Itu didirikan pada tahun 2008 untuk menggantikan Badan Koordinasi Nasional Penanggulangan Bencana atau Bakornas PB. BNPB bertanggung jawab langsung kepada Presiden Indonesia dan ketuanya ditunjuk langsung oleh Presiden.",
  abt2: "VISI",
  abb2: "•	Ketangguhan bangsa dalam menghadapi bencana",
  abt3: "MISI",
  abb3:
    "1.	Melindungi bangsa dari ancaman bencana dengan membangun budaya pengurangan risiko bencana dan kesiapsiagaan dalam menghadapi bencana menjadi bagian yang terintegrasi dalam pembangunan nasional;",
  abb4:
    "2.	Membangun sistem penanganan darurat bencana secara cepat, efektif dan efisien;",
  abb5:
    "3.	Menyelenggarakan pemulihan wilayah dan masyarakat pascabencana melalui rehabilitasi dan rekonstruksi yang lebih baik yang terkoordinasi dan berdimensi pengurangan risiko bencana;",
  abb6:
    "4.	Menyelenggarakan dukungan dan tata kelola logistik dan peralatan penanggulangan bencana;",
  abb7:
    "5.	Menyelenggarakan penanggulangan bencana secara transparan dengan prinsip good governance.",
  abt4: "TUGAS",
  abb8:
    "1.	Memberikan pedoman dan pengarahan terhadap usaha penanggulangan bencana yang mencakup pencegahan bencana, penanganan keadaan darurat bencana, rehabilitasi, dan rekonstruksi secara adil dan setara;",
  abb9:
    "2.	Menetapkan standardisasi dan kebutuhan penyelenggaraan penanggulangan bencana berdasarkan peraturan perundang-undangan;",
  abb10:
    "3.	Menyampaikan informasi kegiatan penanggulangan bencana kepada masyarakat;",
  abb11:
    "4.	Melaporkan penyelenggaraan penanggulangan bencana kepada Presiden setiap sebulan sekali dalam kondisi normal dan setiap saat dalam kondisi darurat bencana;",
  abb12:
    "5.	Menggunakan dan mempertanggungjawabkan sumbangan/bantuan nasional dan internasional;",
  abb13:
    "6.	Mempertanggungjawabkan penggunaan anggaran yang diterima dari Anggaran Pendapatan dan Belanja Negara;",
  abb14:
    "7.	Melaksanakan kewajiban lain sesuai dengan peraturan perundang-undangan; dan",
  abb15: "8.	Menyusun pedoman pembentukan Badan Penanggulangan Bencana Daerah.",
  abt5: "FUNGSI",
  abb16:
    "1.	Perumusan dan penetapan kebijakan penanggulangan bencana dan penanganan pengungsi dengan bertindak cepat dan tepat serta efektif dan efisien; dan",
  abb17:
    "2.	Pengoordinasian pelaksanaan kegiatan penanggulangan bencana secara terencana, terpadu, dan menyeluruh.",

  //take action screen
  noup:
    "Halaman ini akan diperbarui ketika BNPB memiliki berita kritis yang harus diketahui oleh warga. Anda akan menerima pemberitahuan setiap kali pembaruan dilakukan pada halaman ini. Terima kasih atas pengertian Anda.",

  //chat bot responses
  intro: "Halo! Ada yang saya bisa bantu?",
  hello: "Halo.",
  wrong:
    "Harap pastikan Anda mengetik dengan benar. Jika Anda melakukannya dan Anda menerima pesan ini, silakan hubungi pengembang kami untuk memasukkan keadaan darurat Anda ke dalam sistem kami atau menunggu pembaruan di masa mendatang. Terima kasih.",
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
    "Sakit kepala adalah gejala COVID-19. Sebaiknya Anda mengikuti survei gejala COVID kami di bagian COVID atau segera hubungi dokter Anda. Berikut adalah lokasi rumah sakit yang terdekat dengan Anda...",
  stroke:
    "Tolong segera bawa orang itu ke rumah sakit. Mohon tunggu, kami sedang mencari rumah sakit terdekat.",
  pinkeye:
    "Mata merah muda adalah gejala COVID-19. Sebaiknya Anda mengikuti survei gejala COVID kami di bagian COVID atau segera hubungi dokter Anda. Berikut adalah lokasi rumah sakit yang terdekat dengan Anda...",
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
    "Demam adalah salah satu gejala COVID-19 yang paling umum. Sebaiknya Anda mengikuti survei gejala COVID kami di bagian COVID atau segera hubungi dokter Anda. Berikut adalah lokasi rumah sakit yang terdekat dengan Anda...",
  backpain:
    "Sakit  punggung seringkali dapat diredakan dengan perawatan di rumah, termasuk pemanasan, latihan penguatan, aktivitas ringan dan obat-obatan bebas untuk nyeri. Jika gejalanya menetap setelah satu atau dua minggu perawatan di rumah, kami sarankan anda pergi ke dokter untuk dievaluasi.",
  diarrhea:
    "Diare adalah gejala COVID-19. Sebaiknya Anda mengikuti survei gejala COVID kami di bagian COVID atau segera hubungi dokter Anda. Berikut adalah lokasi rumah sakit yang terdekat dengan Anda...",
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
  thankyou: "Sama-sama! :)",
  stomachache:
    "Letakkan botol air panas atau kantong gandum hangat di perut Anda. Coba gunakan juga minyak seperti minyak kayu putih. Jika sakit perut Anda tidak kunjung sembuh dalam waktu 30 menit, kunjungi dokter karena ini merupakan gejala COVID-19.",
  losstastesmell:
    "Kehilangan rasa dan / atau bau adalah gejala COVID-19. Sebaiknya Anda mengikuti survei gejala COVID kami di bagian COVID atau segera hubungi dokter Anda.",
  chestpain:
    "Nyeri dada adalah gejala serius COVID-19. Sebaiknya Anda mengikuti survei gejala COVID kami di bagian COVID atau segera hubungi dokter Anda. Berikut adalah lokasi rumah sakit yang terdekat dengan Anda...",
  cough: "Apakah batuk Anda kering?",
  coughy:
    "Batuk kering adalah salah satu gejala COVID-19 yang paling umum. Sebaiknya Anda mengikuti survei gejala COVID kami di bagian COVID atau segera hubungi dokter Anda. Berikut adalah lokasi rumah sakit terdekat dengan anda...",
  coughn:
    "Mohon minum banyak air dan istirahatkan tubuh Anda. Jika batuk Anda terus memburuk setelah beberapa hari, segera cari bantuan medis.",
  lossspeechmove:
    "Kehilangan kemampuan bicara atau bergerak adalah gejala serius COVID-19. Sebaiknya Anda mengikuti survei gejala COVID kami di bagian COVID atau segera hubungi dokter Anda. Berikut adalah lokasi rumah sakit yang terdekat dengan Anda...",
  tired:
    "Kelelahan adalah salah satu gejala COVID-19 yang paling umum. Sebaiknya Anda mengikuti survei gejala COVID kami di bagian COVID atau segera hubungi dokter Anda. Berikut lokasi rumah sakit terdekat dengan anda ...",
  earpain:
    "Ini mungkin tanda infeksi telinga. Silakan segera pergi ke dokter. Ini rumah sakit terdekat dengan Anda.",
  discolor:
    "Perubahan warna pada jari tangan atau kaki adalah gejala COVID-19. Sebaiknya Anda mengikuti survei gejala COVID kami di bagian COVID atau segera hubungi dokter Anda. Berikut adalah lokasi rumah sakit terdekat dengan anda ...",
  dryskin:
    "Ini pertanda eksim. Kami menyarankan Anda untuk tetap melembabkan dan menemui dokter kulit untuk bantuan profesional.",
  vomit:
    "Cobalah mengistirahatkan perut Anda selama satu atau dua jam kemudian masukkan sedikit cairan bening seperti air. Anda harus menghindari produk susu dan makanan yang tinggi serat. Jika muntah berlanjut, silakan pergi dan temui dokter.",
  bite:
    "Lanjutkan mencuci bagian yang digigit dengan sabun dan air selama 15 menit, lalu oleskan krim antibiotik. Kami juga menganjurkan agar Anda menemui dokter sesegera mungkin.",

  //survey buttons
  statement: "Silakan pilih penyakit yang Anda alami",
  most1: "Demam",
  most2: "Batuk Kering",
  most3: "Kelelahan",
  less1: "Sakit dan Nyeri",
  less2: "Sakit Tenggorokan",
  less3: "Diare",
  less4: "Konjungtivitis",
  less5: "Sakit Kepala",
  less6: "Kehilangan Rasa atau Bau",
  less7: "Ruam/Perubahan Warna Kulit",
  serious1: "Sulit Bernapas",
  serious2: "Nyeri/Tekanan Dada",
  serious3: "Kehilangan Bicara atau Gerakan",
};

i18n.fallbacks = true;
i18n.translations = { en: langEn, "id-US": langIn };
i18n.locale = Localization.locale;

export default i18n;
