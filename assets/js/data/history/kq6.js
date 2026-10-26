// History chapter: Cambridge IGCSE History 0470, Option B key question 6 (the June 2027 Paper 2 prescribed topic).
// One scene = one scroll stop. The engine reads camera, map and date; the panel reads title, body, facts,
// why, judgement, misconception and check. Every fact names a key in `sources`; `syllabus` tags feed the
// coverage lint. Camera and map values are first guesses for the engine to tune.
// Map notes: before 7 October 1949 the GDR and FRG keys stand for the Soviet and western occupation zones.
// `lines` are coarse hand-placed guides. For `kind: 'wall'` the engine draws the real 1989 route (Geoportal Berlin) instead,
// and `city: 'berlin'` paints the four sectors in their occupying powers' colours, named on the map, and the border strip.
// Status: reviewed (checked against the listed sources on 2026-10-23, reviewed by a History teacher on 2026-10-25).

const IRON_CURTAIN = [
  [53.96, 10.88], [53.70, 10.80], [53.37, 10.56], [53.04, 11.57], [52.73, 10.95], [52.22, 11.01],
  [51.88, 10.62], [51.51, 10.26], [51.00, 10.17], [50.72, 9.95], [50.33, 11.00], [50.32, 12.10],
  [50.08, 12.25], [49.70, 12.50], [49.30, 12.85], [49.00, 13.40], [48.77, 13.84], [48.75, 14.30],
  [49.00, 15.00], [48.85, 16.00], [48.62, 16.94], [48.14, 16.98], [47.91, 17.10], [47.70, 16.80],
  [47.50, 16.45], [47.00, 16.45], [46.87, 16.11],
];

// Clockwise ring around West Berlin, through the city centre on the east side.
const BERLIN_WALL = [
  [52.650, 13.290], [52.630, 13.220], [52.530, 13.110], [52.470, 13.110], [52.410, 13.090],
  [52.400, 13.120], [52.390, 13.200], [52.400, 13.300], [52.380, 13.400], [52.400, 13.500],
  [52.450, 13.490], [52.502, 13.446], [52.507, 13.416], [52.5075, 13.3904], [52.509, 13.376],
  [52.5163, 13.3777], [52.520, 13.377], [52.535, 13.390], [52.555, 13.398], [52.580, 13.370],
  [52.650, 13.290],
];

const BLOC_1956 = { USSR: 'soviet', POL: 'bloc', GDR: 'bloc', CSK: 'bloc', HUN: 'bloc', ROU: 'bloc', BGR: 'bloc', ALB: 'bloc' };
const WEST = { FRG: 'west', FRA: 'west', GBR: 'west', ITA: 'west', GRC: 'west', TUR: 'west', USA: 'west' };
const NEUTRAL = { AUT: 'neutral', FIN: 'neutral', YUG: 'neutral' };
const fills = (...parts) => Object.assign({}, BLOC_1956, WEST, NEUTRAL, ...parts);

const C = {
  budapest: [47.498, 19.040], prague: [50.076, 14.438], berlin: [52.520, 13.405], warsaw: [52.230, 21.012],
  gdansk: [54.352, 18.647], moscow: [55.756, 37.617], vienna: [48.208, 16.374], krakow: [50.065, 19.945],
  poznan: [52.406, 16.925], leipzig: [51.340, 12.373], dresden: [51.050, 13.737], bratislava: [48.149, 17.108],
  sofia: [42.698, 23.322], bucharest: [44.427, 26.103], timisoara: [45.749, 21.209], belgrade: [44.787, 20.449],
  szczecin: [53.429, 14.553], trieste: [45.650, 13.777], kabul: [34.555, 69.208], termez: [37.224, 67.278],
  washington: [38.907, -77.037], newYork: [40.749, -73.968], portSaid: [31.265, 32.302], szolnok: [47.162, 20.183],
  sopron: [47.682, 16.585], zahony: [48.410, 22.176], uzhhorod: [48.621, 22.288], legnica: [51.207, 16.155],
  gyor: [47.688, 17.650], kosice: [48.716, 21.261], ruzyne: [50.101, 14.260], andau: [47.774, 17.033],
  checkpointCharlie: [52.5075, 13.3904], brandenburgGate: [52.5163, 13.3777], bornholmer: [52.5547, 13.3973],
  wildePlatz: [52.4849, 13.3443], bernauer: [52.5351, 13.3903], shipyardGate: [54.3605, 18.6489],
};

export default {
  id: 'kq6',
  title: 'Eastern Europe, 1948–c.1989',
  question: 'How secure was the USSR\'s control over Eastern Europe, 1948–c.1989?',
  status: 'reviewed',
  sound: true, // assets/js/sound.js

  focusPoints: [
    { id: 'FP1', text: 'Why was there opposition to Soviet control in Hungary in 1956 and Czechoslovakia in 1968, and how did the USSR react to this opposition?' },
    { id: 'FP2', text: 'How similar were events in Hungary in 1956 and in Czechoslovakia in 1968?' },
    { id: 'FP3', text: 'Why was the Berlin Wall built in 1961?' },
    { id: 'FP4', text: 'What was the significance of Solidarity in Poland for the decline of Soviet influence in Eastern Europe?' },
    { id: 'FP5', text: 'How far was Gorbachev personally responsible for the collapse of Soviet control over Eastern Europe?' },
  ],

  specified: [
    { id: 'SC1', text: 'Soviet power in Eastern Europe: resistance to Soviet power in Hungary (1956) and Czechoslovakia (1968)' },
    { id: 'SC2', text: 'Soviet power in Eastern Europe: the Berlin Wall' },
    { id: 'SC3', text: 'Soviet power in Eastern Europe: Solidarity in Poland' },
    { id: 'SC4', text: 'Soviet power in Eastern Europe: Gorbachev and the collapse of Soviet control over Eastern Europe' },
  ],

  scenes: [
    // ── Setting the scene ─────────────────────────────────────────────────
    {
      id: 'kq6-p1', part: 'Setting the scene', date: '1948-06-28', dateLabel: 'June 1948',
      camera: { lat: 50, lon: 14, alt: 5200 },
      map: {
        borders: '1948-06-28',
        fill: fills({ YUG: 'focus', AUT: 'neutral' }),
        arrows: [{ from: C.moscow, to: C.belgrade, kind: 'pressure', label: 'Cominform expels Yugoslavia, 28 June 1948' }],
        markers: [{ at: C.szczecin, label: 'Stettin' }, { at: C.trieste, label: 'Trieste' }, { at: C.belgrade, label: 'Belgrade' }],
        lines: [{ kind: 'iron-curtain', points: IRON_CURTAIN }],
        city: null,
      },
      title: 'An iron curtain across Europe',
      body: `<p>In March 1946 Winston Churchill warned that "an iron curtain has descended across the Continent". By 1948 communist parties loyal to Moscow ruled Poland, Hungary, Romania, Bulgaria and Albania. In 1948 the communists also took full control of <b>Czechoslovakia</b>. The Soviet zone of Germany was run by the Soviet occupation forces.</p>
<p>These countries became <b>satellite states</b>: officially independent, but controlled by the USSR. Not every communist state obeyed, though. In June 1948 the <b>Cominform</b>, the Soviet-led organisation of communist parties, condemned the Yugoslav communists and their leader, <b>Tito</b>. Yugoslavia stayed communist, but outside the Soviet bloc.</p>
<p>This chapter starts here, with Soviet control at its height. It asks one question: how secure was that control between 1948 and 1989?</p>`,
      facts: [
        { text: 'Churchill used the phrase "an iron curtain has descended across the Continent" in a speech at Fulton, Missouri, on 5 March 1946.', src: 'churchill-1946' },
        { text: 'At its meeting in Bucharest on 28 June 1948, the Cominform adopted a resolution accusing the Yugoslav communists of revisionism.', src: 'govsi-cominform' },
        { text: 'In 1948 a Soviet-backed takeover installed a new communist government in Prague.', src: 'oh-czech-1968' },
      ],
      why: 'Yugoslavia showed from the start that a communist state could break with Moscow. The question for the rest of the bloc was whether the USSR would ever let that happen again.',
      check: { q: 'Which communist state broke away from Soviet control in 1948?', a: 'Yugoslavia, led by Tito. The Cominform condemned the Yugoslav communists on 28 June 1948.' },
      syllabus: ['FP1'],
      sources: ['churchill-1946', 'govsi-cominform', 'oh-czech-1968'],
    },
    {
      id: 'kq6-p2', part: 'Setting the scene', date: '1955-05-14', dateLabel: '1949–1955',
      camera: { lat: 51, lon: 22, alt: 3500 },
      map: {
        borders: '1955-05-14',
        fill: fills({ USSR: 'focus' }),
        arrows: [{ from: C.moscow, to: C.berlin, kind: 'military', label: 'Soviet forces crush the East German rising, June 1953' }],
        markers: [
          { at: C.moscow, label: 'Comecon founded, January 1949' },
          { at: C.warsaw, label: 'Warsaw Pact signed, 14 May 1955' },
          { at: C.berlin, label: 'East German rising, 17 June 1953' },
        ],
        lines: [{ kind: 'iron-curtain', points: IRON_CURTAIN }],
        city: null,
      },
      title: 'The tools of control',
      body: `<p>How did Moscow keep control? First, the <b>Red Army</b>. In 1956 Soviet troops were based in East Germany, Poland, Hungary and Romania. Second, each state had a <b>secret police</b> force that watched, arrested and frightened opponents. Third, the ruling communist parties followed Moscow's line.</p>
<p>Two organisations tied the bloc together. <b>Comecon</b> (January 1949) linked the satellites' economies to the USSR. The <b>Warsaw Pact</b> (May 1955) was a military alliance. Its members promised to defend each other, but the USSR made most of its decisions.</p>
<p>In the end, control rested on force. In June 1953 workers in East Germany rose in protest. Soviet forces declared martial law and crushed the rising.</p>`,
      facts: [
        { text: 'Comecon was founded at a conference in Moscow on 25 January 1949 by the USSR, Bulgaria, Hungary, Poland, Romania and Czechoslovakia.', src: 'bpb-comecon' },
        { text: 'The Warsaw Pact was signed on 14 May 1955 by the USSR, Albania, Poland, Czechoslovakia, Hungary, Bulgaria, Romania and East Germany. The USSR controlled most of its decisions.', src: 'oh-warsaw-pact' },
        { text: 'In October 1956 the Soviet government said its troops were stationed in Hungary, Romania and Poland, and that "in other people\'s democratic countries there are no Soviet military units".', src: 'soviet-decl-1956' },
        { text: 'On 17 June 1953 demonstrations broke out across East Germany. Soviet occupation forces declared martial law and used massive force to suppress them.', src: 'oh-1953' },
      ],
      why: 'These tools explain why opposition was so dangerous. They also explain a key exam point: when Soviet control was challenged, the final answer was the army.',
      misconception: {
        wrong: 'Every satellite state had Soviet troops on its soil.',
        right: 'In 1956 the Soviet government itself said its troops were only in Hungary, Romania and Poland, with occupation forces in East Germany. Czechoslovakia and Bulgaria had none.',
      },
      check: { q: 'Name two organisations that tied the satellite states to the USSR.', a: 'Comecon (1949), which linked their economies, and the Warsaw Pact (1955), a military alliance.' },
      syllabus: ['FP1', 'SC1'],
      sources: ['bpb-comecon', 'oh-warsaw-pact', 'soviet-decl-1956', 'oh-1953'],
    },
    {
      id: 'kq6-p3', part: 'Setting the scene', date: '1955-05-14', dateLabel: '1948–c.1989',
      camera: { lat: 50, lon: 20, alt: 4500 },
      map: {
        borders: '1955-05-14',
        fill: fills({ HUN: 'focus', CSK: 'focus', GDR: 'focus', POL: 'focus' }),
        arrows: [],
        markers: [
          { at: C.budapest, label: 'Hungary, 1956' },
          { at: C.berlin, label: 'Berlin Wall, 1961' },
          { at: C.prague, label: 'Prague Spring, 1968' },
          { at: C.gdansk, label: 'Solidarity, 1980' },
          { at: C.moscow, label: 'Gorbachev, 1985' },
        ],
        lines: [{ kind: 'iron-curtain', points: IRON_CURTAIN }],
        city: null,
      },
      title: 'Five questions for this chapter',
      body: `<p>The syllabus sets five <b>focus points</b> for this key question. Each part of the chapter answers one of them.</p>
<p><b>Hungary, 1956</b> and <b>Czechoslovakia, 1968</b>: why was there opposition, and how did the USSR react? How similar were the two crises?</p>
<p><b>The Berlin Wall</b>: why was it built in 1961?</p>
<p><b>Solidarity</b>: how significant was this Polish trade union for the decline of Soviet influence?</p>
<p><b>Gorbachev</b>: how far was he personally responsible for the collapse of Soviet control?</p>
<p>This key question is also the Option B <b>Paper 2</b> topic for June 2027. Paper 2 gives you up to seven sources on one topic and asks five questions about them. So this chapter shows you sources as well as events. Keep asking who wrote each one, and why.</p>`,
      facts: [
        { text: 'The five focus points and four items of specified content are set out in the 2027–2028 syllabus.', src: 'cie-syllabus' },
        { text: 'For June 2027 the Option B Paper 2 prescribed topic is "How secure was the USSR\'s control over Eastern Europe, 1948–c.1989?"', src: 'cie-syllabus' },
        { text: 'Paper 2 lasts 1 hour 45 minutes and is worth 40 marks. Each question has five parts and up to seven sources.', src: 'cie-syllabus' },
      ],
      why: 'Every scene that follows answers at least one of these questions. Keep them in mind as you scroll.',
      check: { q: 'What is the Option B Paper 2 topic for June 2027?', a: 'Key question 6: How secure was the USSR\'s control over Eastern Europe, 1948–c.1989?' },
      syllabus: ['FP1', 'FP2', 'FP3', 'FP4', 'FP5'],
      sources: ['cie-syllabus'],
    },

    // ── Hungary, 1956 ─────────────────────────────────────────────────────
    {
      id: 'kq6-h1', part: 'Hungary, 1956', date: '1956-07-18', dateLabel: '1953–July 1956',
      camera: { lat: 47.6, lon: 18.5, alt: 1500 },
      map: {
        borders: '1956-07-18',
        fill: fills({ HUN: 'focus' }),
        arrows: [],
        markers: [
          { at: C.budapest, label: 'Budapest' },
          { at: C.vienna, label: 'Austria neutral, 1955' },
          { at: C.poznan, label: 'Poznań riots, 28 June 1956' },
        ],
        lines: [],
        city: null,
      },
      title: 'Hungary: hopes rise in 1956',
      body: `<p>Hungary became a one-party communist state in 1949. Its early years brought economic hardship and mass repression. The hardline leader <b>Mátyás Rákosi</b> ruled through fear, using the secret police against opponents.</p>
<p>In 1953 the reformer <b>Imre Nagy</b> replaced Rákosi, but in 1955 Nagy was removed. Then three events raised Hungarian hopes. In 1955 neighbouring <b>Austria</b> became neutral, and all occupying forces left. In February 1956 Khrushchev's <b>"Secret Speech"</b> attacked Stalin's crimes. In June 1956 workers rioted in <b>Poznań</b> in Poland.</p>
<p>In July Moscow removed Rákosi, but replaced him with another hardliner, Ernő Gerő. Many Hungarians wanted Nagy back, and they wanted Soviet troops to leave.</p>`,
      facts: [
        { text: 'The Hungarian People\'s Republic was set up in 1949. Its early years were marked by economic hardship, political infighting and mass repression.', src: 'brit-hungary' },
        { text: 'Nagy replaced Rákosi in 1953 and was deposed in 1955. In 1955 Austria became neutral and all occupying forces left.', src: 'brit-hungary' },
        { text: 'Khrushchev denounced Stalin in a closed session of the Twentieth Party Congress in February 1956.', src: 'oh-20th-congress' },
        { text: 'The Poznań riots took place on 28 June 1956, and Rákosi resigned as head of the Hungarian party on 18 July 1956.', src: 'frus-xxv' },
        { text: 'The UN Special Committee listed the terror tactics of the Hungarian secret police among the long-standing grievances behind the rising.', src: 'frus-xxv-255' },
      ],
      why: 'Opposition grew from two things at once: anger at repression and hardship, and a new belief that change was possible.',
      check: { q: 'Give two events of 1955–56 that encouraged Hungarians to hope for change.', a: 'Austria became neutral and foreign troops left it (1955); Khrushchev\'s Secret Speech (February 1956); the Poznań riots in Poland (June 1956); the removal of Rákosi (July 1956).' },
      syllabus: ['FP1', 'SC1'],
      sources: ['brit-hungary', 'oh-20th-congress', 'frus-xxv', 'frus-xxv-255'],
    },
    {
      id: 'kq6-h2', part: 'Hungary, 1956', date: '1956-10-23', dateLabel: '23–28 October 1956',
      camera: { lat: 47.50, lon: 19.05, alt: 450 },
      map: {
        borders: '1956-10-23',
        fill: fills({ HUN: 'focus' }),
        arrows: [{ from: [47.10, 19.70], to: C.budapest, kind: 'military', label: 'Soviet troops enter Budapest, 24 October' }],
        markers: [{ at: [47.507, 19.046], label: 'Parliament: crowds gather from 23 October' }],
        lines: [],
        city: null,
      },
      title: '23 October: a demonstration becomes a rising',
      body: `<p>In October 1956 students in Budapest drew up a list of demands. They included economic reform and the <b>withdrawal of Soviet troops</b>. On <b>23 October</b> a huge demonstration filled the city. The <b>secret police fired</b> on the demonstrators. During the rising, crowds also pulled down a giant statue of Stalin.</p>
<p>The next day Soviet troops already stationed in Hungary moved in, at the request of the party leader, Gerő. On the same day <b>Imre Nagy</b> became prime minister again. Fighting spread. Rebels armed with little more than petrol disabled Soviet tanks. A ceasefire was arranged on <b>28 October</b>.</p>
<p>A United Nations committee later called the rising "a spontaneous national uprising". It was led by students, workers and intellectuals, many of them communists.</p>`,
      facts: [
        { text: 'Students demanded economic reforms and the withdrawal of the Soviet military. Soviet troops intervened on 24 October at Gerő\'s request, Nagy became prime minister that day, and a ceasefire was arranged on 28 October.', src: 'brit-hungary' },
        { text: 'The UN Special Committee (1957) found that the secret police fired on demonstrators on 23 October, and that this and the arrival of Soviet tanks did much to unite the opposition.', src: 'frus-xxv-255' },
        { text: 'The UN committee called the events "a spontaneous national uprising" and rejected the claim that Western imperialism had stirred them up.', src: 'frus-xxv-255' },
        { text: 'Rebels armed with little more than kitchen tools and petrol disabled Soviet tanks.', src: 'nsa-hungary-1956' },
      ],
      why: 'The shooting on 23 October and the arrival of Soviet tanks turned a protest into a national rising.',
      misconception: {
        wrong: 'The Hungarian Rising was planned in advance by Western agents.',
        right: 'The UN committee found it was not planned in advance and rejected the claim that "Western imperialism" was behind it. It grew from long-standing grievances.',
      },
      check: { q: 'Why did the demonstration of 23 October turn into an armed rising?', a: 'The secret police fired on the demonstrators, and Soviet troops entered Budapest the next day. This united Hungarians against the regime.' },
      syllabus: ['FP1', 'SC1'],
      sources: ['brit-hungary', 'frus-xxv-255', 'nsa-hungary-1956'],
    },
    {
      id: 'kq6-h3', part: 'Hungary, 1956', date: '1956-11-01', dateLabel: '30 October–1 November 1956',
      camera: { lat: 47.6, lon: 20.2, alt: 1300 },
      map: {
        borders: '1956-11-01',
        fill: fills({ HUN: 'focus' }),
        arrows: [
          { from: C.budapest, to: [47.10, 19.70], kind: 'military', label: 'Soviet troops leave Budapest, 30–31 October' },
          { from: C.zahony, to: C.budapest, kind: 'military', label: 'New Soviet units cross the border, 1 November' },
        ],
        markers: [{ at: C.budapest, label: 'Neutrality declared, 1 November' }, { at: C.moscow, label: 'Decision to intervene, 31 October' }],
        lines: [],
        city: null,
      },
      title: 'Nagy goes further: free parties and neutrality',
      body: `<p>After the ceasefire Nagy moved fast. On <b>30 October</b> he announced the <b>end of one-party rule</b>. The parties of the 1945 coalition could return. The same day Moscow issued a <b>declaration</b> promising equality and non-interference in other socialist states. Soviet troops began to leave Budapest.</p>
<p>But on <b>31 October</b> the Soviet leaders changed their minds. Khrushchev argued that leaving Hungary would look like weakness to the West. That day Nagy also told a crowd that talks had begun on leaving the Warsaw Pact.</p>
<p>On <b>1 November</b> new Soviet units crossed the Hungarian border. Nagy protested. When the troops kept coming, his government announced that Hungary would <b>leave the Warsaw Pact</b> at once and become <b>neutral</b>. It appealed to the United Nations.</p>`,
      facts: [
        { text: 'At 2.28 p.m. on 30 October Nagy announced the abolition of one-party rule and the return of the parties of the 1945 coalition.', src: 'frus-xxv-141' },
        { text: 'The Soviet declaration of 30 October promised relations based on "full equality" and "noninterference in one another\'s domestic affairs", and offered talks on Soviet troops in Hungary.', src: 'soviet-decl-1956' },
        { text: 'On 31 October Khrushchev told the Presidium that leaving Hungary would give "a great boost" to the Western powers. The Presidium agreed to intervene.', src: 'malin-1956-10-31' },
        { text: 'At a rally on 31 October Nagy said talks had opened on the withdrawal of Soviet troops and on renouncing Hungary\'s Warsaw Treaty obligations.', src: 'malin-1956-10-31' },
        { text: 'On 1 November the Hungarian government told the Soviet embassy it was leaving the Warsaw Pact because a strong Soviet force had crossed the border against its protests.', src: 'andropov-1956-11-01' },
      ],
      why: 'The order of events matters. Moscow decided on 31 October: the day after Nagy ended one-party rule, and the same day he raised leaving the Pact. The formal withdrawal on 1 November came as Soviet troops poured in.',
      misconception: {
        wrong: 'The USSR invaded Hungary because Nagy wanted reform.',
        right: 'Moscow had just accepted a reform leader in Poland. Hungary was different: Nagy ended one-party rule and moved to leave the Warsaw Pact. That threatened both communist rule and Soviet security.',
      },
      check: { q: 'Which two decisions by Nagy\'s government most alarmed the USSR?', a: 'Ending one-party rule (30 October) and leaving the Warsaw Pact with a declaration of neutrality (1 November).' },
      syllabus: ['FP1', 'FP2', 'SC1'],
      sources: ['frus-xxv-141', 'soviet-decl-1956', 'malin-1956-10-31', 'andropov-1956-11-01', 'nsa-hungary-1956'],
    },
    {
      id: 'kq6-h4', part: 'Hungary, 1956', date: '1956-11-04', dateLabel: '4–11 November 1956',
      camera: { lat: 47.4, lon: 19.6, alt: 1300 },
      map: {
        borders: '1956-11-04',
        fill: fills({ HUN: 'focus' }),
        arrows: [
          { from: C.zahony, to: C.budapest, kind: 'military', label: 'Soviet forces' },
          { from: C.budapest, to: C.andau, kind: 'people', label: 'About 200,000 refugees, mostly to Austria' },
        ],
        markers: [
          { at: C.szolnok, label: 'Kádár\'s new government announced' },
          { at: C.budapest, label: 'Nagy\'s last broadcast, 5.20 a.m.' },
        ],
        lines: [],
        city: null,
      },
      title: '4 November: the Soviet invasion',
      body: `<p>At 4.15 a.m. on <b>4 November 1956</b> Soviet forces launched a major attack on Hungary. At 5.20 a.m. Nagy announced the invasion in a short radio broadcast. Within hours he took refuge in the Yugoslav embassy.</p>
<p><b>János Kádár</b>, a member of Nagy's government, had been flown secretly to Moscow. He returned with the invasion to head a new government with Soviet backing. Hungarians fought back, but by <b>11 November</b> the revolt had been crushed.</p>
<p>Britannica estimates that about <b>2,500 Hungarians</b> and <b>700 Soviet soldiers</b> died in the fighting. An estimated <b>200,000 refugees</b> fled Hungary, mostly to Austria. Kádár took the oath of office on 7 November.</p>`,
      facts: [
        { text: 'Soviet forces attacked at 4.15 a.m. on 4 November. At 5.20 a.m. Nagy announced the invasion in a 35-second broadcast, then sought asylum in the Yugoslav embassy.', src: 'nsa-hungary-1956' },
        { text: 'Kádár and Münnich were flown secretly to Moscow on the evening of 1 November and brought back when the invasion began.', src: 'malin-1956-10-31' },
        { text: 'By 8 November most of Budapest was under Soviet control, and by 11 November the revolt had been crushed. About 2,500 Hungarians and 700 Soviet soldiers died.', src: 'brit-hungary' },
        { text: 'An estimated 200,000 refugees fled Hungary after the revolt, mostly to Austria.', src: 'brit-hungary' },
        { text: 'Kádár took the oath of office in the Parliament building on 7 November.', src: 'nsa-hungary-1956' },
      ],
      why: 'Soviet control over Hungary was restored, but only by a full invasion. Control that needs tanks is control that the people do not accept.',
      check: { q: 'Who replaced Nagy as leader of Hungary in November 1956?', a: 'János Kádár, who headed a new government set up with Soviet backing.' },
      syllabus: ['FP1', 'SC1'],
      sources: ['nsa-hungary-1956', 'malin-1956-10-31', 'brit-hungary'],
    },
    {
      id: 'kq6-h5', part: 'Hungary, 1956', date: '1956-11-04', dateLabel: '29 October–November 1956',
      camera: { lat: 42, lon: 0, alt: 9000 },
      map: {
        borders: '1956-11-04',
        fill: fills({ HUN: 'focus' }),
        arrows: [{ from: C.washington, to: C.budapest, kind: 'pressure', label: 'Protests and aid, but no force' }],
        markers: [
          { at: C.portSaid, label: 'Suez: Israel attacks Egypt, 29 October' },
          { at: C.washington, label: 'US election campaign' },
          { at: C.newYork, label: 'UN General Assembly, 4 November' },
          { at: C.budapest, label: 'Budapest' },
        ],
        lines: [],
        city: null,
      },
      title: 'Why the West did not help',
      body: `<p>Some broadcasts by <b>Radio Free Europe</b>, a station run by the CIA, encouraged the rebels to believe Western help was coming. It never came.</p>
<p>On 31 October President <b>Eisenhower</b> said the USA would not use force in Eastern Europe. He also said it would not treat new governments there as military allies. Three reasons explain this. First, fighting the USSR risked a <b>global war</b>. Second, the <b>Suez Crisis</b> divided the West: Israel attacked Egypt on 29 October, and Britain and France soon joined in. Third, Eisenhower was in the middle of an <b>election campaign</b>.</p>
<p>The USA condemned the invasion at the United Nations and offered aid to the Hungarian people. But on 4 November it decided that there should be no UN force for Hungary.</p>`,
      facts: [
        { text: 'Radio Free Europe was administered by the CIA. Some of its broadcasts into Hungary encouraged rebels to believe that Western support was imminent.', src: 'nsa-hungary-1956' },
        { text: 'Eisenhower said on 31 October: "We could not, of course, carry out this policy by resort to force."', src: 'eisenhower-1956-10-31' },
        { text: 'Eisenhower had concluded that there was little the USA could do to help the rebels short of risking global war.', src: 'nsa-hungary-1956' },
        { text: 'Israel attacked across the Sinai on 29 October 1956, and Britain and France landed troops a few days later.', src: 'oh-suez' },
        { text: 'The UN General Assembly met in emergency session on 4 November and voted 53 to 8 to place the situation in Hungary on its agenda.', src: 'frus-xxv-167' },
        { text: 'At a White House meeting on 4 November it was decided that there should be no UN force for Hungary.', src: 'frus-xxv-166' },
        { text: 'On 2 November Eisenhower allocated $20 million for food and relief for the Hungarian people.', src: 'frus-xxv-155' },
        { text: 'Eisenhower was re-elected on 6 November 1956, two days after the Soviet attack on Hungary.', src: 'miller-ike' },
      ],
      why: 'The West\'s response showed that American talk of "liberation" had limits. It also told Moscow that it could act inside its own sphere without Western military action.',
      misconception: {
        wrong: 'The USA promised to send troops to help Hungary.',
        right: 'The US government never promised military help. Eisenhower said on 31 October that the USA would not use force. Some Radio Free Europe broadcasts raised false hopes.',
      },
      check: { q: 'Give two reasons why the West did not intervene in Hungary.', a: 'Fear of a global war with the USSR; the Suez Crisis, which divided the Western allies; the US election campaign; the USA had already said it would not use force in Eastern Europe.' },
      syllabus: ['FP1', 'FP2', 'SC1'],
      sources: ['nsa-hungary-1956', 'eisenhower-1956-10-31', 'oh-suez', 'frus-xxv-167', 'frus-xxv-166', 'frus-xxv-155', 'miller-ike'],
    },
    {
      id: 'kq6-h6', part: 'Hungary, 1956', date: '1958-06-16', dateLabel: '1956–1968',
      camera: { lat: 47.3, lon: 19.3, alt: 1500 },
      map: {
        borders: '1958-06-16',
        fill: fills({ HUN: 'focus' }),
        arrows: [],
        markers: [{ at: C.budapest, label: 'Budapest' }],
        lines: [],
        city: null,
      },
      title: 'After the rising: how secure was control?',
      body: `<p>Kádár's government cracked down hard. It executed more than 300 people who had taken part in the rising and imprisoned thousands more. Nagy left the Yugoslav embassy on <b>22 November 1956</b> after being promised safe passage, but he was arrested at once. After a secret trial he was <b>executed for treason in June 1958</b>.</p>
<p>Yet Kádár later softened his rule. Most political prisoners were freed by 1963. From the 1960s censorship eased, and economic reforms from 1968 brought what Hungarians called <b>"goulash communism"</b>.</p>
<p>In Washington, the CIA Director judged on 9 November 1956 that Moscow had "lost a satellite and gained a conquered province". Was Soviet control now secure, or only enforced?</p>`,
      facts: [
        { text: 'Kádár\'s government executed over 300 participants in the uprising and imprisoned thousands more. Most political prisoners had been released by 1963.', src: 'brit-hungary' },
        { text: 'Nagy left the Yugoslav embassy on 22 November after assurances of safe passage, and was immediately arrested by Soviet security officers.', src: 'nsa-hungary-1956' },
        { text: 'Nagy was executed for treason with two colleagues in June 1958 after a secret trial.', src: 'brit-hungary' },
        { text: 'The CIA Director, Allen Dulles, told congressional leaders on 9 November 1956 that "Russia had lost a satellite and gained a conquered province".', src: 'frus-xxv-177' },
        { text: 'About 80% of the Hungarian army had gone over to the rebels by 1 November, according to the CIA Director.', src: 'frus-xxv-152' },
      ],
      judgement: {
        for: [
          'The rising was crushed within a week, and Hungary stayed in the Warsaw Pact.',
          'The West protested at the UN but did not intervene.',
          'Kádár\'s regime survived. By easing controls after 1960 it won a degree of acceptance.',
        ],
        against: [
          'Control had to be restored by a full invasion against a communist-led government.',
          'Most of the Hungarian army had sided with the rebels, so the satellite\'s own forces could not be trusted.',
          'About 200,000 people fled, and world opinion turned against the USSR.',
        ],
        verdict: 'In the short term Soviet control was secure, because the USSR was willing to use force and the West would not stop it. In the long term it was weaker than it looked. It rested on fear, not consent, and Kádár had to buy acceptance with reform.',
      },
      why: 'This is the pattern of the whole chapter. Force made Soviet control secure in the short term, but it did not win support.',
      check: { q: 'What happened to Imre Nagy after the rising?', a: 'He was arrested on 22 November 1956, tried in secret and executed for treason in June 1958.' },
      syllabus: ['FP1', 'SC1'],
      sources: ['brit-hungary', 'nsa-hungary-1956', 'frus-xxv-177', 'frus-xxv-152'],
    },

    // ── The Berlin Wall ───────────────────────────────────────────────────
    {
      id: 'kq6-b1', part: 'The Berlin Wall', date: '1949-10-07', dateLabel: '1945–1949',
      camera: { lat: 52.5, lon: 13.4, alt: 95 },
      map: {
        borders: '1949-05-01',
        fill: fills({ GDR: 'focus' }),
        arrows: [],
        markers: [],
        lines: [],
        city: 'berlin',
      },
      title: 'A divided city',
      body: `<p>At Potsdam in 1945 the victorious powers divided Germany into four zones and Berlin into <b>four sectors</b>. Berlin lay deep inside the Soviet zone.</p>
<p>In May 1949 the western zones became the <b>Federal Republic of Germany</b> (West Germany). In October the Soviet zone became the <b>German Democratic Republic</b> (East Germany). The American, British and French sectors formed <b>West Berlin</b>, about 110 miles (175 km) inside East Germany. Kennedy later called it "an island of freedom in a Communist sea".</p>
<p>The border between the sectors stayed open, although it was watched. Controls on the border between the two German states were tightened, but Berlin remained a good escape route for East Germans.</p>`,
      facts: [
        { text: 'At Potsdam in August 1945 the victorious powers approved the four zones of Germany and the four sectors of Berlin.', src: 'visitberlin-wall' },
        { text: 'The Federal Republic of Germany was founded in May 1949 and the German Democratic Republic in October 1949. The borders were still open but watched.', src: 'visitberlin-wall' },
        { text: 'Kennedy described West Berlin as lying "110 miles inside East Germany" and as "an island of freedom in a Communist sea".', src: 'jfk-1961-07-25' },
      ],
      why: 'West Berlin was a hole in the Iron Curtain. That made it a showcase for the West and a constant problem for East Germany.',
      check: { q: 'Why was West Berlin a problem for East Germany?', a: 'It was a free, Western-run city inside East Germany, and the open sector border let East Germans escape to the West.' },
      syllabus: ['FP3', 'SC2'],
      sources: ['visitberlin-wall', 'jfk-1961-07-25'],
    },
    {
      id: 'kq6-b2', part: 'The Berlin Wall', date: '1961-07-31', dateLabel: '1949–1961',
      camera: { lat: 52.5, lon: 13.4, alt: 110 },
      map: {
        borders: '1961-07-31',
        fill: fills({ GDR: 'focus' }),
        arrows: [{ from: [52.52, 13.48], to: [52.48, 13.30], kind: 'people', label: 'Refugees cross to West Berlin' }],
        markers: [],
        lines: [],
        city: 'berlin',
      },
      title: 'The brain drain',
      body: `<p>Between 1949 and August 1961 around <b>2.7 million</b> people left East Germany for the West. Estimates vary a little: Britannica gives about 2.5 million, and Kennedy spoke of two and a half million in July 1961. The flow peaked in 1953, the year of the June uprising, when more than 330,000 left.</p>
<p>Many of those who left were <b>skilled workers, professionals and intellectuals</b>. Their loss threatened to wreck the East German economy. It was also a <b>propaganda disaster</b>. Every refugee seemed to prove that people preferred life in the West. Kennedy said they were "voting for Western-type freedom with their feet".</p>
<p>In the spring of 1961 East Germany's economy worsened sharply, and the number of refugees rose again.</p>`,
      // Optional extra for the engine: the plan asks for a refugee chart that draws with the scroll.
      chart: {
        kind: 'bar',
        title: 'Refugees from East Germany, 1950–1963',
        unit: 'people per year',
        series: [
          [1950, 197788], [1951, 165648], [1952, 182393], [1953, 331390], [1954, 184198], [1955, 252870],
          [1956, 279189], [1957, 261622], [1958, 204092], [1959, 143917], [1960, 199188], [1961, 207026],
          [1962, 21356], [1963, 42632],
        ],
        note: 'West German government figures, published in 1965. The 1961 total includes the months after the Wall was built.',
        src: 'ghdi-refugees',
      },
      facts: [
        { text: 'Between 1949 and the closing of the border in August 1961, around 2.7 million people went to the West.', src: 'ghdi-refugees' },
        { text: 'The West German government recorded 331,390 refugees in 1953, the peak year.', src: 'ghdi-refugees' },
        { text: 'Britannica gives about 2.5 million for 1949–61, including steadily rising numbers of skilled workers, professionals and intellectuals.', src: 'brit-berlin-wall' },
        { text: 'Kennedy spoke of "the two and one-half million refugees" who had fled East Germany, "voting for Western-type freedom with their feet".', src: 'jfk-1961-07-25' },
        { text: 'In the spring of 1961 the GDR\'s economic situation worsened dramatically, and the flow of refugees increased.', src: 'visitberlin-wall' },
      ],
      why: 'This is the main reason for the Wall. East Germany could not survive if its most useful citizens kept leaving.',
      check: { q: 'About how many people left East Germany between 1949 and 1961?', a: 'Between about 2.5 and 2.7 million, depending on the source.' },
      syllabus: ['FP3', 'SC2'],
      sources: ['ghdi-refugees', 'brit-berlin-wall', 'jfk-1961-07-25', 'visitberlin-wall'],
    },
    {
      id: 'kq6-b3', part: 'The Berlin Wall', date: '1961-06-04', dateLabel: 'November 1958–July 1961',
      camera: { lat: 50.4, lon: 15.0, alt: 1800 },
      map: {
        borders: '1961-06-04',
        fill: fills({ GDR: 'focus' }),
        arrows: [{ from: C.moscow, to: C.berlin, kind: 'pressure', label: 'Khrushchev\'s six-month ultimatum, 10 November 1958' }],
        markers: [{ at: C.vienna, label: 'Vienna summit, 3–4 June 1961' }, { at: C.berlin, label: 'West Berlin' }],
        lines: [],
        city: null,
      },
      title: 'Khrushchev\'s ultimatum and the Vienna summit',
      body: `<p>On <b>10 November 1958</b> Khrushchev demanded that the USA, Britain and France pull their forces out of West Berlin within <b>six months</b>. The West saw this as an ultimatum and refused. Talks in 1959 made little progress.</p>
<p>In June 1961 Khrushchev met the new US president, <b>John F. Kennedy</b>, at <b>Vienna</b>. They found no solution, and Khrushchev again gave the USA six months to leave. In July Kennedy called West Berlin "the great testing place of Western courage and will". He called up reservists and increased defence spending.</p>
<p>Meanwhile, on 15 June, East Germany's leader <b>Walter Ulbricht</b> tried to calm rumours. He told reporters: "Nobody has any intention of erecting a wall."</p>`,
      facts: [
        { text: 'On 10 November 1958 Khrushchev demanded that the Western powers pull their forces out of West Berlin within six months.', src: 'oh-berlin' },
        { text: 'Kennedy and Khrushchev met in Vienna on 3 and 4 June 1961 without solving the Berlin problem.', src: 'visitberlin-wall' },
        { text: 'After Vienna, Khrushchev again gave the USA six months to withdraw. Kennedy activated 150,000 reservists and increased defence spending.', src: 'oh-berlin' },
        { text: 'On 25 July 1961 Kennedy called West Berlin "the great testing place of Western courage and will".', src: 'jfk-1961-07-25' },
        { text: 'On 15 June 1961 Ulbricht announced: "Nobody has any intention of erecting a wall."', src: 'visitberlin-wall' },
      ],
      why: 'Khrushchev could not force the West out of Berlin without risking a nuclear war. A wall offered another way to stop the flow of people.',
      check: { q: 'What did Khrushchev demand in November 1958?', a: 'That the USA, Britain and France withdraw their forces from West Berlin within six months.' },
      syllabus: ['FP3', 'SC2'],
      sources: ['oh-berlin', 'visitberlin-wall', 'jfk-1961-07-25'],
    },
    {
      id: 'kq6-b4', part: 'The Berlin Wall', date: '1961-08-13', dateLabel: '13 August 1961',
      camera: { lat: 52.505, lon: 13.38, alt: 28, tilt: 32 }, // over the centre: the whole city, the Brandenburg Gate and Bernauer Straße
      map: {
        borders: '1961-08-13',
        fill: fills({ GDR: 'focus' }),
        arrows: [],
        markers: [{ at: C.brandenburgGate, label: 'Brandenburg Gate' }, { at: C.bernauer, label: 'Bernauer Straße' }],
        lines: [{ kind: 'wall', points: BERLIN_WALL }],
        city: 'berlin',
      },
      title: 'Overnight: the border closes',
      body: `<p>In the early hours of <b>13 August 1961</b>, on the orders of Walter Ulbricht, East German soldiers, police and armed workers' militia began to seal the border between East and West Berlin. They used <b>barbed wire</b> and concrete blocks. Only a few hundred officials are said to have known the date.</p>
<p>All routes between the two halves of the city were cut, although it took several days to complete the barrier. It was soon rebuilt with <b>concrete walls and guard towers</b>. The Wall around West Berlin eventually ran for between about 155 and 165 km, depending on how it is measured.</p>
<p>The West's response was surprisingly low-key. The Western commanders in the city did not protest until two days later.</p>`,
      facts: [
        { text: 'On the morning of 13 August 1961, on Ulbricht\'s orders, a barbed wire fence went up overnight between West and East Berlin. It was soon expanded with cement walls and guard towers.', src: 'oh-berlin' },
        { text: 'Armed workers\' militia, police and soldiers built the first barrier from concrete blocks and barbed wire. Only a few hundred officials are said to have known the date.', src: 'visitberlin-wall' },
        { text: 'One count gives the Wall around West Berlin a total length of 156.4 km, with 43.7 km between West and East Berlin.', src: 'visitberlin-wall' },
        { text: 'Britannica describes a system extending 45 km through Berlin and a further 120 km around West Berlin.', src: 'brit-berlin-wall' },
        { text: 'The West\'s commanders in Berlin did not protest until two days after the border was closed.', src: 'visitberlin-wall' },
      ],
      misconception: {
        wrong: 'The Soviet army built the Berlin Wall to keep Westerners out.',
        right: 'East German forces built it on Ulbricht\'s orders, after Khrushchev decided not to risk war over the city. Its purpose was to stop East Germans leaving.',
      },
      why: 'The Wall solved East Germany\'s refugee crisis at a stroke. It also turned Berlin into the most visible symbol of the Cold War.',
      check: { q: 'Who ordered the border in Berlin to be closed on 13 August 1961?', a: 'The East German leader, Walter Ulbricht. East German soldiers, police and workers\' militia did the work.' },
      syllabus: ['FP3', 'SC2'],
      sources: ['oh-berlin', 'visitberlin-wall', 'brit-berlin-wall'],
    },
    {
      id: 'kq6-b5', part: 'The Berlin Wall', date: '1961-10-27', dateLabel: 'October 1961–June 1963',
      camera: { lat: 52.49, lon: 13.37, alt: 26, tilt: 32 }, // between Checkpoint Charlie and Schöneberg town hall
      map: {
        borders: '1961-10-27',
        fill: fills({ GDR: 'focus' }),
        arrows: [],
        markers: [
          { at: C.checkpointCharlie, label: 'Checkpoint Charlie: tanks face each other, 27–28 October 1961' },
          { at: C.wildePlatz, label: 'Kennedy\'s speech, 26 June 1963' },
        ],
        lines: [{ kind: 'wall', points: BERLIN_WALL }],
        city: 'berlin',
      },
      title: 'Tanks at Checkpoint Charlie',
      body: `<p>The Wall did not end the crisis at once. East German guards tried to check the papers of Western officials entering East Berlin. The Americans insisted on their right to travel freely.</p>
<p>On <b>26 October 1961</b> the US Army moved ten tanks to <b>Checkpoint Charlie</b>, the crossing point on Friedrichstrasse. The next day Soviet tanks moved into position opposite. For more than 24 hours they faced each other, barely 100 yards apart, with their guns aimed. On the morning of <b>28 October</b> the Soviet tanks withdrew, and the American tanks soon pulled back. Kennedy had used secret channels to suggest this.</p>
<p>In June 1963 Kennedy visited West Berlin. He told a huge crowd: <b>"Ich bin ein Berliner."</b></p>`,
      facts: [
        { text: 'On 26 October 1961 the US Army moved ten M-48 tanks and three armoured personnel carriers to Checkpoint Charlie. Soviet tanks moved in opposite the next day.', src: 'army-checkpoint' },
        { text: 'The tanks faced each other for more than 24 hours, barely 100 yards apart. The Soviet tanks withdrew on the morning of 28 October.', src: 'army-checkpoint' },
        { text: 'The dispute was over whether East German or Soviet guards could check the papers of US diplomats. Kennedy used back channels to suggest both sides remove their tanks.', src: 'oh-berlin' },
        { text: 'On 26 June 1963 Kennedy said in West Berlin: "Ich bin ein Berliner."', src: 'jfk-1963-06-26' },
      ],
      why: 'The stand-off showed how quickly a local quarrel in Berlin could become a crisis between nuclear powers. After it passed, the Wall stayed, and the West accepted that it could not remove it.',
      check: { q: 'What happened at Checkpoint Charlie in October 1961?', a: 'US and Soviet tanks faced each other for more than 24 hours (27–28 October) before both sides pulled back.' },
      syllabus: ['FP3', 'SC2'],
      sources: ['army-checkpoint', 'oh-berlin', 'jfk-1963-06-26'],
    },
    {
      id: 'kq6-b6', part: 'The Berlin Wall', date: '1963-06-26', dateLabel: '1961–1989',
      camera: { lat: 52.5, lon: 13.4, alt: 70, tilt: 30 }, // the whole ring of the Wall
      map: {
        borders: '1963-06-26',
        fill: fills({ GDR: 'focus' }),
        arrows: [],
        markers: [{ at: C.bernauer, label: 'Berlin Wall Memorial' }],
        lines: [{ kind: 'wall', points: BERLIN_WALL }],
        city: 'berlin',
      },
      title: 'What the Wall meant',
      body: `<p>In the short term the Wall worked. West German figures show refugees from East Germany falling from about <b>207,000</b> in 1961 to about <b>21,000</b> in 1962. The loss of skilled workers stopped. The Berlin crisis also cooled: Khrushchev no longer needed to force the West out of the city to stop the flow of people.</p>
<p>But the Wall was a <b>propaganda disaster</b>. In 1963 Kennedy told West Berliners: "we have never had to put a wall up to keep our people in."</p>
<p>The Wall also cost lives. According to the Berlin Wall Foundation, at least <b>140 people</b> were killed or died at the Wall between 1961 and 1989. Older counts range from 136 to 191.</p>`,
      facts: [
        { text: 'The West German government recorded 207,026 refugees in 1961 and 21,356 in 1962.', src: 'ghdi-refugees' },
        { text: 'Kennedy said on 26 June 1963: "we have never had to put a wall up to keep our people in, to prevent them from leaving us."', src: 'jfk-1963-06-26' },
        { text: 'At least 140 people were killed or died at the Wall between 1961 and 1989, 101 of them while trying to flee.', src: 'mauer-victims' },
        { text: 'An earlier research figure was at least 136 deaths.', src: 'visitberlin-wall' },
        { text: 'Britannica gives 191 people killed while crossing the Wall.', src: 'brit-berlin-wall' },
      ],
      judgement: {
        for: [
          'It stopped the flow of refugees almost completely, so East Germany kept its skilled workers.',
          'It ended the Berlin crisis without a war. Neither side had to give up its position in the city.',
          'It made Soviet control of East Germany more secure for almost thirty years.',
        ],
        against: [
          'It was a propaganda gift to the West: a communist state had to wall its own people in.',
          'People were killed trying to cross it, which damaged the image of communism worldwide.',
          'West Berlin survived as a free city inside East Germany.',
        ],
        verdict: 'The Wall was a practical success and a moral defeat. It made Soviet control of East Germany more secure in the short term, but it showed the world that the regime needed a wall to keep its people.',
      },
      why: 'For the key question, the Wall is evidence both ways: it made control more secure, but only by admitting that East Germans would leave if they could.',
      check: { q: 'How many people died at the Berlin Wall between 1961 and 1989?', a: 'At least 140, according to the Berlin Wall Foundation. Older estimates range from 136 to 191.' },
      syllabus: ['FP3', 'SC2'],
      sources: ['ghdi-refugees', 'jfk-1963-06-26', 'mauer-victims', 'visitberlin-wall', 'brit-berlin-wall'],
    },

    // ── Czechoslovakia, 1968 ──────────────────────────────────────────────
    {
      id: 'kq6-c1', part: 'Czechoslovakia, 1968', date: '1968-01-05', dateLabel: '1960–January 1968',
      camera: { lat: 49.7, lon: 17.0, alt: 1200 },
      map: {
        borders: '1968-01-05',
        fill: fills({ CSK: 'focus' }),
        arrows: [],
        markers: [{ at: C.prague, label: 'Prague' }, { at: C.bratislava, label: 'Bratislava' }],
        lines: [],
        city: null,
      },
      title: 'Czechoslovakia: why reform began',
      body: `<p>By the early 1960s Czechoslovakia's economy was in trouble. Industrial production began to fall, and collective farms produced less in 1960 than farms had before the Second World War. The communist leader, <b>Antonín Novotný</b>, accepted a plan for economic reform in 1964 but carried out little of it.</p>
<p>Novotný also faced demands from <b>Slovaks</b> for more control over their own affairs. Students and writers grew restless. In 1967 police beat students protesting about their halls of residence, and many writers openly rejected party control at their congress.</p>
<p>Novotný lost the support of his own party. On <b>5 January 1968</b> the Slovak communist <b>Alexander Dubček</b> replaced him as First Secretary.</p>`,
      facts: [
        { text: 'Industrial production began to fall in the early 1960s, and collectivised farming produced less in 1960 than before the Second World War.', src: 'brit-prague' },
        { text: 'In September 1964 reformers forced Novotný to accept new economic principles, but he implemented few of them.', src: 'brit-prague' },
        { text: 'In 1967 police brutally broke up a student protest, and writers at their congress rejected the standards demanded by the party.', src: 'brit-prague' },
        { text: 'Dubček became First Secretary of the Communist Party of Czechoslovakia on 5 January 1968.', src: 'brit-prague' },
      ],
      why: 'In Czechoslovakia, change was led from the top, by reformers inside the party. In Hungary in 1956, it was driven from the streets.',
      check: { q: 'Give two reasons for discontent in Czechoslovakia before 1968.', a: 'A weak economy, with falling industrial output; Slovak demands for more autonomy; restless students and writers who wanted more freedom.' },
      syllabus: ['FP1', 'FP2', 'SC1'],
      sources: ['brit-prague', 'oh-czech-1968'],
    },
    {
      id: 'kq6-c2', part: 'Czechoslovakia, 1968', date: '1968-04-05', dateLabel: 'March–June 1968',
      camera: { lat: 50.08, lon: 14.44, alt: 700 },
      map: {
        borders: '1968-04-05',
        fill: fills({ CSK: 'focus' }),
        arrows: [],
        markers: [{ at: C.prague, label: 'Prague: the Action Programme, April 1968' }],
        lines: [],
        city: null,
      },
      title: '"Socialism with a human face"',
      body: `<p>Dubček allowed more freedom almost at once. From March the press began to write freely, and <b>censorship</b> was soon ended. In April the party adopted the <b>Action Programme</b>. It promised reform of industry and farming, a new constitution to guarantee civil rights, and equal status for Slovakia in a federation. Parliament, not the party, would control the government. Abroad this was called <b>"socialism with a human face"</b>.</p>
<p>Dubček did not plan to end communist rule, and Czechoslovakia had no wish to join NATO. But many people went further. New political clubs appeared. On 27 June the <b>Two Thousand Words</b> manifesto, signed by people from all walks of life, called for mass action to demand real democracy.</p>`,
      facts: [
        { text: 'Members of the press resolved to express themselves more freely in March 1968.', src: 'brit-prague' },
        { text: 'The Dubček government ended censorship in early 1968.', src: 'oh-czech-1968' },
        { text: 'The Action Programme, adopted by the Central Committee in April 1968, included a federation with Slovakia, economic reforms, a constitution guaranteeing civil rights and the rehabilitation of victims of past injustice.', src: 'brit-prague' },
        { text: 'The April plan tried to liberalise within the existing communist system rather than overthrow it.', src: 'oh-czech-1968' },
        { text: 'Under Dubček, Czechoslovakia had no wish to become part of NATO.', src: 'bpb-brezhnev' },
        { text: 'Ludvík Vaculík\'s "Two Thousand Words" manifesto was published on 27 June 1968.', src: 'brit-prague' },
      ],
      why: 'The Prague Spring was a reform from above, inside the communist system. The danger for Moscow was that the freedom it released might spread.',
      misconception: {
        wrong: 'Like Nagy, Dubček tried to take his country out of the Warsaw Pact.',
        right: 'Dubček\'s government never announced that it would leave the Warsaw Pact, and it did not want to join NATO. It was invaded anyway.',
      },
      check: { q: 'What was the Action Programme of April 1968?', a: 'Dubček\'s reform plan: economic reform, civil rights, a federation with equal status for Slovakia, and a government controlled by parliament rather than the party.' },
      syllabus: ['FP1', 'FP2', 'SC1'],
      sources: ['brit-prague', 'oh-czech-1968', 'bpb-brezhnev'],
    },
    {
      id: 'kq6-c3', part: 'Czechoslovakia, 1968', date: '1968-07-15', dateLabel: 'July–August 1968',
      camera: { lat: 50.5, lon: 20.0, alt: 2000 },
      map: {
        borders: '1968-07-15',
        fill: fills({ CSK: 'focus' }),
        arrows: [
          { from: C.moscow, to: C.prague, kind: 'pressure', label: 'Warsaw Letter, 15 July' },
          { from: C.berlin, to: C.prague, kind: 'pressure', label: '' },
          { from: C.warsaw, to: C.prague, kind: 'pressure', label: '' },
          { from: C.budapest, to: C.prague, kind: 'pressure', label: '' },
          { from: C.sofia, to: C.prague, kind: 'pressure', label: '' },
        ],
        markers: [{ at: C.bratislava, label: 'Bratislava meeting, 3 August' }],
        lines: [],
        city: null,
      },
      title: 'Moscow and its allies grow alarmed',
      body: `<p>The Soviet leaders remembered Hungary in 1956. They feared that if reform went too far in Czechoslovakia, other satellite states would follow. They also feared that people in Soviet republics such as Ukraine and the Baltic states might make their own demands.</p>
<p>Neighbouring communist leaders were worried too. East Germany's Walter Ulbricht was one of Dubček's fiercest critics. On <b>15 July</b> the USSR, Bulgaria, Hungary, Poland and East Germany sent the <b>Warsaw Letter</b>. It warned that "counter-revolutionary" forces were pulling Czechoslovakia away from socialism.</p>
<p>Talks followed. At <b>Bratislava</b> on 3 August the six communist parties issued a statement that seemed to ease the pressure. It did not last.</p>`,
      facts: [
        { text: 'Moscow feared that if reforms went too far, other satellite states might follow, and that Soviet republics such as Ukraine, Lithuania, Latvia and Estonia might demand more liberal policies.', src: 'oh-czech-1968' },
        { text: 'On 15 July 1968 leaders of the USSR, Bulgaria, Hungary, Poland and the GDR sent the "Warsaw Letter" warning of counter-revolution in Czechoslovakia.', src: 'bpb-brezhnev' },
        { text: 'Ulbricht was regarded as a hardliner against Dubček.', src: 'bpb-brezhnev' },
        { text: 'On 3 August the Soviet, East German, Polish, Bulgarian, Hungarian and Czechoslovak parties met at Bratislava. The communiqué gave the impression that pressure would be eased.', src: 'brit-prague' },
      ],
      why: 'The pressure came from the whole bloc, not just Moscow. Neighbouring communist leaders feared the Prague Spring would spread to their own people.',
      check: { q: 'What was the Warsaw Letter?', a: 'A letter of 15 July 1968 from the USSR, Poland, East Germany, Hungary and Bulgaria warning that counter-revolution threatened socialism in Czechoslovakia.' },
      syllabus: ['FP1', 'FP2', 'SC1'],
      sources: ['oh-czech-1968', 'bpb-brezhnev', 'brit-prague'],
    },
    {
      id: 'kq6-c4', part: 'Czechoslovakia, 1968', date: '1968-08-21', dateLabel: '20–27 August 1968',
      camera: { lat: 49.8, lon: 16.5, alt: 1900 },
      map: {
        borders: '1968-08-21',
        fill: fills({ CSK: 'focus' }),
        arrows: [
          { from: C.legnica, to: [50.21, 15.83], kind: 'military', label: 'Soviet and Polish forces' },
          { from: C.dresden, to: C.prague, kind: 'military', label: 'Soviet forces from East Germany' },
          { from: C.gyor, to: C.bratislava, kind: 'military', label: 'Soviet and Hungarian forces' },
          { from: C.uzhhorod, to: C.kosice, kind: 'military', label: 'Soviet forces' },
          { from: C.moscow, to: C.ruzyne, kind: 'military', label: 'Airborne troops land at Prague' },
        ],
        markers: [{ at: C.prague, label: 'Prague: leaders seized and flown to Moscow' }],
        lines: [],
        city: null,
      },
      title: '20–21 August: the invasion',
      body: `<p>On the night of <b>20–21 August 1968</b> Warsaw Pact forces invaded Czechoslovakia. Most were Soviet, with troops from Poland, Hungary and Bulgaria. Sources differ on East Germany: some list its troops among the invaders, but others found that its divisions were made ready and then held back.</p>
<p>About <b>250,000 soldiers</b> and 4,200 tanks crossed at first. Estimates of the peak force range from about <b>400,000 to 450,000</b>. Dubček and other leaders were seized and taken to Moscow.</p>
<p>Czechoslovaks mostly resisted without weapons. They removed road signs and argued with soldiers, and the party went ahead with its congress, which elected a pro-Dubček leadership. Between <b>108 and 137</b> Czechoslovaks died because of the occupation by the end of 1968: the lower figure is from a 2008 study, the higher from research published in 2017.</p>`,
      facts: [
        { text: 'The USSR moved its own troops and limited numbers of Hungarian, Polish, East German and Bulgarian troops into place for the invasion of 20–21 August.', src: 'oh-czech-1968' },
        { text: 'East German divisions were mobilised but did not cross. Only a few East German officers and soldiers were at the Warsaw Pact command centre.', src: 'enrs-1968' },
        { text: 'The first wave was about 250,000 soldiers and 4,200 tanks, eventually rising to 450,000 soldiers and 6,500 tanks.', src: 'enrs-1968' },
        { text: 'Another estimate gives about 400,000 Warsaw Pact soldiers, 6,300 tanks and 550 aircraft.', src: 'bpb-brezhnev' },
        { text: 'Dubček, Černík and other leaders were seized and taken to Moscow. People removed road signs, and the party congress went ahead on 22 August and elected a pro-Dubček leadership.', src: 'brit-prague' },
        { text: 'A 2008 study by the Czech Institute for the Study of Totalitarian Regimes counted 108 deaths by the end of 1968 and about 500 seriously injured.', src: 'ustr-victims' },
        { text: 'Research published in 2017 found that 137 Czechs and Slovaks died as a result of the occupation by the end of 1968.', src: 'radio-prague-137' },
      ],
      why: 'In 1968, as in 1956, the USSR showed that it would use force to keep a satellite in line. This time it acted with its allies, so that the invasion looked like a joint Warsaw Pact decision.',
      check: { q: 'How did Czechoslovaks resist the invasion?', a: 'Mostly without violence: they removed road signs, argued with soldiers and went ahead with a party congress that backed Dubček.' },
      syllabus: ['FP1', 'FP2', 'SC1'],
      sources: ['oh-czech-1968', 'enrs-1968', 'bpb-brezhnev', 'brit-prague', 'ustr-victims', 'radio-prague-137'],
    },
    {
      id: 'kq6-c5', part: 'Czechoslovakia, 1968', date: '1968-11-12', dateLabel: 'August 1968–April 1969',
      camera: { lat: 51.3, lon: 18.5, alt: 1400 },
      map: {
        borders: '1968-11-12',
        fill: fills({ CSK: 'focus' }),
        arrows: [],
        markers: [
          { at: C.warsaw, label: 'Brezhnev\'s speech, 12 November 1968' },
          { at: C.prague, label: 'Jan Palach, 16 January 1969' },
        ],
        lines: [],
        city: null,
      },
      title: 'The Brezhnev Doctrine',
      body: `<p>By 27 August the Czechoslovak leaders had been forced to accept the <b>Moscow Protocol</b>. Soviet troops would stay, and politics and culture would be controlled more tightly.</p>
<p>In September an article in <i>Pravda</i> explained the Soviet view. Each Communist party, it said, was "responsible not only to its own people" but to all socialist countries. On <b>12 November 1968</b>, in Warsaw, the Soviet leader <b>Leonid Brezhnev</b> made this official policy. If forces hostile to socialism threatened a socialist country, he said, it became a common problem for all socialist countries. The West called this the <b>Brezhnev Doctrine</b>.</p>
<p>On 16 January 1969 the student <b>Jan Palach</b> set himself on fire in protest. In April <b>Gustáv Husák</b> replaced Dubček and began "normalisation".</p>`,
      facts: [
        { text: 'By 27 August the Czechoslovak leaders had yielded to Soviet demands in the Moscow Protocol: Soviet troops would remain and political and cultural life would be controlled more tightly.', src: 'brit-prague' },
        { text: 'The Pravda article by S. Kovalev said each Communist party was "responsible not only to its own people" but also to all socialist countries. It is dated 25 or 26 September 1968; sources differ.', src: 'kovalev-1968' },
        { text: 'Brezhnev set out the doctrine on 12 November 1968 as a guest speaker at the Fifth Congress of the Polish United Workers\' Party in Warsaw.', src: 'bpb-brezhnev' },
        { text: 'The Brezhnev Doctrine stated that Moscow had the right to intervene in any country where a communist government was threatened.', src: 'oh-czech-1968' },
        { text: 'Jan Palach set himself on fire on 16 January 1969. Husák replaced Dubček as First Secretary on 17 April 1969.', src: 'brit-prague' },
      ],
      why: 'The doctrine put into words what the tanks had shown: the satellites had only limited sovereignty. It made Soviet control look secure, but it rested entirely on the threat of force.',
      check: { q: 'What was the Brezhnev Doctrine?', a: 'The Soviet claim, set out in 1968, that a threat to socialism in one communist country was the concern of all of them, so the bloc had the right to intervene.' },
      syllabus: ['FP1', 'FP2', 'SC1'],
      sources: ['brit-prague', 'kovalev-1968', 'bpb-brezhnev', 'oh-czech-1968'],
    },
    {
      id: 'kq6-c6', part: 'Czechoslovakia, 1968', date: '1968-08-21', dateLabel: '1956 and 1968 compared',
      camera: { lat: 48.8, lon: 18.0, alt: 1400 },
      map: {
        borders: '1968-08-21',
        fill: fills({ HUN: 'focus', CSK: 'focus' }),
        arrows: [],
        markers: [{ at: C.budapest, label: 'Hungary, 1956' }, { at: C.prague, label: 'Czechoslovakia, 1968' }],
        lines: [],
        city: null,
      },
      title: 'How similar were Hungary and Czechoslovakia?',
      compare: {
        left: 'Hungary, 1956', right: 'Czechoslovakia, 1968',
        rows: [
          { k: 'Causes', l: 'Repression under Rákosi and hardship; hopes raised by the Secret Speech, Austria\'s neutrality and Poland.', r: 'A weak economy, Slovak demands, and restless students and writers.' },
          { k: 'Who led', l: 'Students and workers on the streets pushed Nagy forward.', r: 'Reformers inside the Communist Party, led by Dubček.' },
          { k: 'Aims', l: 'End of one-party rule (30 October); leaving the Warsaw Pact (1 November).', r: '"Socialism with a human face". Never announced leaving the Warsaw Pact.' },
          { k: 'Soviet reaction', l: 'Soviet forces invaded on 4 November.', r: 'Soviet-led Warsaw Pact forces invaded on 20–21 August.' },
          { k: 'Resistance', l: 'Armed fighting. About 2,500 Hungarians died.', r: 'Mostly peaceful. 108 to 137 died by the end of 1968.' },
          { k: 'The West', l: 'Condemned the invasion; did not intervene.', r: 'Condemned the invasion; did not intervene.' },
          { k: 'Outcome', l: 'Kádár in power; Nagy executed in 1958.', r: 'Husák in power from April 1969; Dubček expelled from the party in 1970.' },
        ],
      },

      body: `<p>This is a focus point in its own right. A Paper 1 question may ask: <b>"How similar were events in Hungary in 1956 and in Czechoslovakia in 1968?"</b></p>
<p>The table compares the two crises point by point. Use the same criteria in your own answer: <b>causes</b>, <b>who led</b>, <b>aims</b>, <b>the Soviet reaction</b>, <b>resistance</b>, <b>the West</b> and <b>the outcome</b>.</p>
<p>Strong answers do three things. They compare like with like in each paragraph, using words such as <b>both</b> and <b>whereas</b>. They support each point with a date or a figure. And they end with a judgement: were the two crises more alike or more different, and why?</p>`,
      facts: [
        { text: 'About 2,500 Hungarians died in the fighting in 1956.', src: 'brit-hungary' },
        { text: 'Between 108 (2008 study) and 137 (2017 study) Czechoslovaks died because of the occupation by the end of 1968.', src: 'radio-prague-137' },
        { text: 'Hungary announced it was leaving the Warsaw Pact on 1 November 1956.', src: 'andropov-1956-11-01' },
        { text: 'In 1968 the USSR guessed correctly that the USA would condemn the invasion but not intervene.', src: 'oh-czech-1968' },
        { text: 'Dubček was later recalled from his post as ambassador to Turkey and stripped of his party membership in 1970.', src: 'brit-prague' },
      ],
      judgement: {
        for: [
          'Both ended the same way: invasion, the removal of the reformer and a hardline government.',
          'In both, Moscow feared losing control of a satellite and the spread of reform to its neighbours.',
          'In both, the West condemned the invasion but did not intervene.',
        ],
        against: [
          'Aims: Hungary ended one-party rule and left the Warsaw Pact; Czechoslovakia stayed in the Pact under communist rule.',
          'Violence: Hungary saw heavy fighting; Czechoslovakia mostly passive resistance.',
          'The invaders: the USSR acted alone in 1956, but with Warsaw Pact allies in 1968.',
          'Fate of the leader: Nagy was executed; Dubček was expelled from the party but lived.',
        ],
        verdict: 'The two crises were similar in outcome but different in aims. Hungary threatened Soviet security directly by leaving the Warsaw Pact. Czechoslovakia threatened it indirectly, by offering other peoples an attractive kind of communism. Both show that the USSR would not let a satellite slip out of its control.',
      },
      misconception: {
        wrong: 'Hungary and Czechoslovakia were invaded for exactly the same reason.',
        right: 'Both were invaded to keep communist control, but Hungary had left the Warsaw Pact and ended one-party rule. Czechoslovakia stayed in the Pact; Moscow feared its reforms would spread.',
      },
      why: 'Paper 1 often asks "How similar…?" The best answers compare like with like, criterion by criterion, and end with a judgement.',
      check: { q: 'Give one similarity and one difference between Hungary 1956 and Czechoslovakia 1968.', a: 'Similarity: both were crushed by Soviet-led forces, and the West did not intervene. Difference: Hungary announced it would leave the Warsaw Pact; Dubček\'s government did not.' },
      syllabus: ['FP2', 'FP1', 'SC1'],
      sources: ['brit-hungary', 'ustr-victims', 'radio-prague-137', 'andropov-1956-11-01', 'oh-czech-1968', 'brit-prague', 'frus-xxv-141', 'nsa-hungary-1956'],
    },

    // ── Solidarity in Poland ──────────────────────────────────────────────
    {
      id: 'kq6-s1', part: 'Solidarity in Poland', date: '1979-06-02', dateLabel: '1970–1980',
      camera: { lat: 52.6, lon: 19.5, alt: 1200 },
      map: {
        borders: '1979-06-02',
        fill: fills({ POL: 'focus' }),
        arrows: [],
        markers: [
          { at: C.gdansk, label: 'Gdańsk: shipyard workers shot, December 1970' },
          { at: C.warsaw, label: 'Pope\'s Mass in Warsaw, 2 June 1979' },
          { at: C.krakow, label: 'Kraków' },
        ],
        lines: [],
        city: null,
      },
      title: 'Poland: a Polish pope and angry workers',
      body: `<p>Poland had a long record of protest. In December 1970 police and soldiers killed workers who were demonstrating for better living conditions. In Gdańsk, shipyard workers were shot at the shipyard's Gate No. 2. Each December, people gathered at the gate to remember them.</p>
<p>On <b>16 October 1978</b> Cardinal <b>Karol Wojtyła</b> of Poland was elected <b>Pope John Paul II</b>. From <b>2 to 10 June 1979</b> he made a pastoral visit to Poland, celebrating Mass in Warsaw, Częstochowa and Kraków. Communist Poland now had to deal with a Polish pope.</p>
<p>By 1980 Polish workers complained openly that the economy was in crisis. They also wanted to be treated with respect. One striker said the economy "must be pulled out of this crisis".</p>`,
      facts: [
        { text: 'Workers had demanded independent unions after several of them were killed by police and soldiers while demonstrating for better living conditions.', src: 'nobel-walesa-facts' },
        { text: 'During the December 1970 protest, shipyard workers were shot dead or wounded at Gate No. 2 in Gdańsk. In December 1979 several thousand people gathered there to remember them.', src: 'ecs-solidarity' },
        { text: 'Cardinal Karol Wojtyła was elected Pope John Paul II on 16 October 1978. He made a pastoral visit to Poland from 2 to 10 June 1979.', src: 'vatican-jp2' },
        { text: 'In 1980 striking workers told film-makers that the economy "must be pulled out of this crisis".', src: 'ecs-solidarity' },
      ],
      why: 'Poland combined economic crisis, a strong Church and a tradition of worker protest. By 1980 it was the weakest link in the Soviet bloc.',
      check: { q: 'Why was the election of John Paul II important for Poland?', a: 'He was a Polish pope. His visit in June 1979, and the Church\'s later support for the strikers, gave Poles confidence and a voice outside the Communist Party.' },
      syllabus: ['FP4', 'SC3'],
      sources: ['nobel-walesa-facts', 'ecs-solidarity', 'vatican-jp2'],
    },
    {
      id: 'kq6-s2', part: 'Solidarity in Poland', date: '1980-08-31', dateLabel: '14–31 August 1980',
      camera: { lat: 54.36, lon: 18.65, alt: 300 },
      map: {
        borders: '1980-08-31',
        fill: fills({ POL: 'focus' }),
        arrows: [],
        markers: [{ at: C.shipyardGate, label: 'Lenin Shipyard, Gate No. 2' }],
        lines: [],
        city: null,
      },
      title: 'The Gdańsk strike and the birth of Solidarity',
      body: `<p>On 7 August 1980 the Lenin Shipyard in Gdańsk sacked <b>Anna Walentynowicz</b>, a crane operator and well-known activist, months before she was due to retire. On <b>14 August</b> the shipyard went on strike in her defence. An electrician, <b>Lech Wałęsa</b>, led the strike.</p>
<p>Other workplaces joined. On the night of 16–17 August their joint strike committee drew up the <b>21 Demands</b>. The first were political: free trade unions, an end to censorship and the release of political prisoners. Strikes spread across Poland.</p>
<p>On <b>31 August</b> the government signed the <b>Gdańsk Agreement</b>. It gave workers the right to strike and to form their own independent union. On 17 September the new union took the name <b>Solidarity</b>.</p>`,
      facts: [
        { text: 'Anna Walentynowicz was dismissed on 7 August 1980, and the strike in her defence began on 14 August.', src: 'ecs-solidarity' },
        { text: 'On the night of 16–17 August the Inter-Enterprise Strike Committee, led by Wałęsa, drew up the 21 Demands, headed by free trade unions, the abolition of censorship and the release of political prisoners.', src: 'ecs-solidarity' },
        { text: 'The Gdańsk Agreement of 31 August 1980 gave workers the right to strike and to organise their own independent union.', src: 'nobel-walesa' },
        { text: 'On 17 September 1980 a congress in Gdańsk agreed to form one nationwide union named Solidarność (Solidarity).', src: 'ecs-solidarity' },
      ],
      why: 'A communist government had signed an agreement with striking workers and accepted a union it did not control. That broke the party\'s claim to speak for the working class.',
      check: { q: 'What did the Gdańsk Agreement of 31 August 1980 give Polish workers?', a: 'The right to strike and the right to form their own independent, self-governing trade union.' },
      syllabus: ['FP4', 'SC3'],
      sources: ['ecs-solidarity', 'nobel-walesa'],
    },
    {
      id: 'kq6-s3', part: 'Solidarity in Poland', date: '1981-12-13', dateLabel: '1981–1982',
      camera: { lat: 52.6, lon: 22.0, alt: 1000 },
      map: {
        borders: '1981-12-13',
        fill: fills({ POL: 'focus' }),
        arrows: [{ from: C.moscow, to: C.warsaw, kind: 'pressure', label: 'Soviet pressure, but no invasion' }],
        markers: [{ at: C.warsaw, label: 'Martial law declared, 13 December 1981' }],
        lines: [],
        city: null,
      },
      title: 'Ten million members, then martial law',
      body: `<p>By 1981 Solidarity had about <b>10 million members</b>, out of Poland's 12 million wage earners. In September 1981 its first national congress elected Wałęsa as chairman.</p>
<p>On <b>13 December 1981</b> Poland's leader, General <b>Wojciech Jaruzelski</b>, declared <b>martial law</b>. Solidarity was suspended and many of its leaders were arrested. In all, 9,736 people were interned. In October 1982 the union was banned.</p>
<p>Why did Jaruzelski do it? The authorities said it was the only way to prevent a Soviet invasion. But Soviet records show that on 10 December the Politburo had decided not to send troops. Andropov told it that this held "even if Poland falls under the control of Solidarity".</p>`,
      facts: [
        { text: 'By 1981 Solidarity had reached 10 million members out of Poland\'s 12 million wage earners, about 80% of the workforce.', src: 'ecs-solidarity' },
        { text: 'Wałęsa was elected Solidarity chairman at its first national congress in September 1981. In December 1981 Jaruzelski, fearing Soviet intervention among other things, imposed martial law and "suspended" Solidarity.', src: 'nobel-walesa' },
        { text: 'During martial law 9,736 people were interned, never more than 5,300 at any one time.', src: 'polak-internment' },
        { text: 'The government formally banned Solidarity on 8 October 1982.', src: 'swarthmore-solidarity' },
        { text: 'The Polish authorities claimed that banning Solidarity was the only way to prevent a Soviet invasion.', src: 'nobel-walesa-facts' },
        { text: 'At the Politburo on 10 December 1981 Andropov said: "We do not intend to introduce troops into Poland."', src: 'politburo-1981-12-10' },
      ],
      judgement: {
        for: [
          'Jaruzelski could not know what the Politburo had decided. Hungary and Czechoslovakia showed what could happen.',
          'In the Politburo, Soviet leaders said the Polish leadership must take "decisive measures" by introducing martial law.',
        ],
        against: [
          'The Soviet records show the Politburo had decided not to send troops.',
          'Martial law protected the Polish communists\' own power, and Polish leaders hoped for Soviet economic aid once Solidarity was crushed.',
        ],
        verdict: 'Soviet records suggest the USSR would not have invaded in December 1981, but Jaruzelski could not be sure of that. Either way, communist rule in Poland was now kept by Polish troops, not Soviet ones, which shows how far Soviet power had weakened.',
      },
      misconception: {
        wrong: 'Soviet troops invaded Poland to crush Solidarity in 1981.',
        right: 'No Soviet troops invaded. Poland\'s own leader, Jaruzelski, imposed martial law. Soviet records show the Politburo had decided not to send troops.',
      },
      why: 'Martial law kept the communists in power, but the USSR had not dared to invade. The Brezhnev Doctrine was already weaker than it looked.',
      check: { q: 'Who declared martial law in Poland, and when?', a: 'General Wojciech Jaruzelski, on 13 December 1981.' },
      syllabus: ['FP4', 'SC3'],
      sources: ['ecs-solidarity', 'nobel-walesa', 'polak-internment', 'swarthmore-solidarity', 'nobel-walesa-facts', 'politburo-1981-12-10'],
    },
    {
      id: 'kq6-s4', part: 'Solidarity in Poland', date: '1983-10-05', dateLabel: '1982–1988',
      camera: { lat: 52.2, lon: 19.5, alt: 1200 },
      map: {
        borders: '1983-10-05',
        fill: fills({ POL: 'focus' }),
        arrows: [{ from: C.washington, to: C.warsaw, kind: 'pressure', label: 'US funds and sanctions' }],
        markers: [{ at: C.gdansk, label: 'Wałęsa, Nobel Peace Prize, October 1983' }],
        lines: [],
        city: null,
      },
      title: 'Underground, but alive',
      body: `<p>Solidarity did not disappear. Wałęsa was released in November 1982 and kept in touch with Solidarity leaders working underground. Martial law was lifted in July 1983, although many restrictions continued. In October 1983 Wałęsa was awarded the <b>Nobel Peace Prize</b>. It raised the spirits of the underground, and the government press attacked it.</p>
<p>The West kept up the pressure. The US government worked in public and in secret to fund, equip and support Solidarity, and used <b>economic sanctions</b> to push the Polish government towards talks. The Church and Western trade unions helped too.</p>
<p>In 1986 the government freed the last political prisoners. Then in 1988 the economy hit crisis again. Food prices rose by 40% in February, and waves of strikes followed.</p>`,
      facts: [
        { text: 'Wałęsa was released in November 1982. Martial law was lifted in July 1983. The announcement of his Nobel Prize in October 1983 raised the spirits of the underground.', src: 'nobel-walesa' },
        { text: 'Throughout the 1980s the US government worked publicly and covertly to fund, equip and support Solidarity, and used economic sanctions as pressure.', src: 'nsa-poland-1989' },
        { text: 'Underground Solidarity received support from the Catholic Church, the CIA and Western trade unions such as the AFL-CIO.', src: 'swarthmore-solidarity' },
        { text: 'In mid-1986 the Polish government released the last political prisoners in a mass amnesty.', src: 'nsa-poland-1989' },
        { text: 'In February 1988 the government increased food prices by 40%. Strikes followed in May and August 1988.', src: 'swarthmore-solidarity' },
      ],
      why: 'Martial law stopped Solidarity acting openly, but it could not destroy it. The government had beaten Solidarity, but it had not solved the economic crisis that created it.',
      check: { q: 'How did Solidarity survive after martial law?', a: 'It worked underground, kept the support of the Church and the West (including secret US funding), and Wałęsa\'s Nobel Peace Prize in 1983 kept it in the world\'s eye.' },
      syllabus: ['FP4', 'SC3'],
      sources: ['nobel-walesa', 'nsa-poland-1989', 'swarthmore-solidarity'],
    },
    {
      id: 'kq6-s5', part: 'Solidarity in Poland', date: '1989-06-04', dateLabel: 'February–August 1989',
      camera: { lat: 52.23, lon: 21.01, alt: 600 },
      map: {
        borders: '1989-06-04',
        fill: fills({ POL: 'focus' }),
        arrows: [],
        markers: [{ at: C.warsaw, label: 'Round Table talks, 6 February–5 April 1989' }],
        lines: [],
        city: null,
      },
      title: 'The Round Table and the 1989 elections',
      body: `<p>By early 1989 the government needed Solidarity's help to deal with the crisis. From <b>6 February to 5 April 1989</b> the government, Solidarity and the Church met at a <b>Round Table</b>. They agreed to legalise Solidarity and to hold elections.</p>
<p>On <b>4 June 1989</b> Solidarity won 160 of the 161 seats it was allowed to contest in the lower house, the Sejm. In the Senate it won 92 of the 100 seats in the first round. Even the party admitted an overwhelming defeat.</p>
<p>On <b>24 August</b> Tadeusz Mazowiecki of Solidarity became prime minister. He led the first non-communist government in the Eastern bloc since the Second World War. The USSR did not intervene.</p>`,
      facts: [
        { text: 'The Round Table talks between the communist coalition, the Catholic Church and Solidarity ran from 6 February to 5 April 1989.', src: 'nsa-poland-1989' },
        { text: 'In the first round on 4 June 1989 Solidarity won 160 of the 161 Sejm seats it was eligible for, and 92 seats in the Senate.', src: 'nsa-poland-1989' },
        { text: 'Mazowiecki was elected prime minister on 24 August 1989, the first non-communist prime minister in Eastern Europe for almost four decades.', src: 'swarthmore-solidarity' },
        { text: 'Under Gorbachev the Soviet Union was no longer prepared to use military force to keep communist parties in power in the satellite states.', src: 'nobel-walesa' },
      ],
      judgement: {
        for: [
          'Solidarity was the first mass movement in the bloc to challenge communist rule and survive.',
          'With about 10 million members, it proved that a communist government did not have the support of the workers.',
          'In 1989 Poland led the way, with the Round Table, elections that Solidarity won and the first non-communist government in the bloc.',
        ],
        against: [
          'Martial law crushed it in 1981. It only won in 1989, when Gorbachev would no longer use force.',
          'Economic crisis and Soviet weakness were deeper causes of the collapse.',
          'In East Germany, Hungary\'s open border and mass protests did more than events in Poland to bring down the regime.',
        ],
        verdict: 'Solidarity was highly significant. It was the first mass movement to defy communist rule and survive, and in 1989 Poland showed the others the way. But it succeeded in 1989, not in 1981, because by then Moscow would not use force. Its success depended on the change in Moscow.',
      },
      why: 'Poland showed the rest of Eastern Europe that communists could lose power without a Soviet invasion.',
      check: { q: 'What happened in Poland\'s elections of June 1989?', a: 'Solidarity won 160 of the 161 Sejm seats it could contest and 92 of 100 Senate seats in the first round. In August Mazowiecki became the first non-communist prime minister in the bloc.' },
      syllabus: ['FP4', 'SC3', 'FP5', 'SC4'],
      sources: ['nsa-poland-1989', 'swarthmore-solidarity', 'nobel-walesa'],
    },

    // ── Gorbachev and 1989 ───────────────────────────────────────────────
    {
      id: 'kq6-g1', part: 'Gorbachev and 1989', date: '1979-12-24', dateLabel: '1979–1989',
      camera: { lat: 45, lon: 55, alt: 7000 },
      map: {
        borders: '1979-12-24',
        fill: fills({ USSR: 'soviet', AFG: 'focus' }),
        arrows: [{ from: C.termez, to: C.kabul, kind: 'military', label: 'Soviet forces enter Afghanistan, December 1979' }],
        markers: [{ at: C.kabul, label: 'Kabul' }, { at: C.moscow, label: 'Moscow' }],
        lines: [],
        city: null,
      },
      title: 'A superpower under strain',
      body: `<p>By the 1980s the USSR faced deep problems. Its economy was <b>inefficient</b>, and it was locked in a costly <b>arms race</b> with the USA.</p>
<p>On <b>24 December 1979</b> Soviet forces invaded <b>Afghanistan</b> to keep a friendly socialist government in power. It was the only time the USSR invaded a country outside the Eastern bloc. The West condemned it. The USA boycotted the 1980 Moscow Olympics and sent more aid to the Afghan rebels.</p>
<p>The war dragged on for almost ten years. More than <b>14,000 Soviet soldiers</b> were killed. The last Soviet troops left on <b>15 February 1989</b>. A superpower that could not win in Afghanistan was in no position to fight its way through Eastern Europe as well.</p>`,
      facts: [
        { text: 'The invasion of Afghanistan began on Christmas Eve 1979. It was the only time the USSR invaded a country outside the Eastern bloc.', src: 'oh-afghanistan' },
        { text: 'The USA boycotted the 1980 Moscow Olympics and stepped up aid to the Afghan insurgents. Moscow withdrew only after ten years.', src: 'oh-afghanistan' },
        { text: 'Soviet forces completed their withdrawal on 15 February 1989. The war killed more than 14,000 Soviet soldiers.', src: 'rferl-afghanistan' },
        { text: 'Gorbachev became critical of the inefficient Soviet system, which came under further strain after the invasion of Afghanistan.', src: 'nobel-gorbachev-facts' },
      ],
      why: 'Economic weakness and the cost of Afghanistan meant the USSR could no longer afford to hold Eastern Europe by force. This is the long-term side of the Gorbachev question.',
      check: { q: 'Why did the war in Afghanistan weaken the USSR?', a: 'It lasted almost ten years, killed more than 14,000 Soviet soldiers, cost a great deal and brought Western condemnation, including the 1980 Olympic boycott.' },
      syllabus: ['FP5', 'SC4'],
      sources: ['oh-afghanistan', 'rferl-afghanistan', 'nobel-gorbachev-facts'],
    },
    {
      id: 'kq6-g2', part: 'Gorbachev and 1989', date: '1988-12-07', dateLabel: 'March 1985–December 1988',
      camera: { lat: 50, lon: -20, alt: 9000 },
      map: {
        borders: '1988-12-07',
        fill: fills({ USSR: 'focus' }),
        arrows: [],
        markers: [
          { at: C.moscow, label: 'Gorbachev becomes General Secretary, March 1985' },
          { at: C.newYork, label: 'Gorbachev at the UN, 7 December 1988' },
        ],
        lines: [],
        city: null,
      },
      title: 'Gorbachev: reform and "freedom of choice"',
      body: `<p>In <b>March 1985</b> the Central Committee elected <b>Mikhail Gorbachev</b> as General Secretary. He wanted to reform communism, not end it. <b>Glasnost</b> ("openness") allowed more criticism and debate. <b>Perestroika</b> ("restructuring") set out to make the economy work. To move money from defence to the rest of the economy, he sought better relations with the USA.</p>
<p>He also changed Soviet policy on Eastern Europe. He declared that he would not support communist governments whose own people opposed them. On <b>7 December 1988</b> he told the United Nations that "freedom of choice is a universal principle". He announced that Soviet armed forces would be cut by <b>500,000</b> within two years, without waiting for the West to do the same.</p>`,
      facts: [
        { text: 'Gorbachev was elected General Secretary of the Communist Party of the Soviet Union in March 1985.', src: 'nobel-gorbachev' },
        { text: 'He sought to reform communism through glasnost and perestroika, and sought détente with the USA to transfer funding from defence to civil society.', src: 'nobel-gorbachev-facts' },
        { text: 'He declared that he would not support communist regimes in other countries if their peoples were opposed to them.', src: 'nobel-gorbachev-facts' },
        { text: 'At the UN on 7 December 1988 he said: "Freedom of choice is a universal principle and there should be no exceptions."', src: 'gorbachev-un-1988' },
        { text: 'He announced a unilateral cut of 500,000 in Soviet armed forces over the next two years.', src: 'gorbachev-un-1988' },
      ],
      misconception: {
        wrong: 'Gorbachev set out to end communism in Eastern Europe.',
        right: 'He wanted to reform communism and make it popular. But he refused to use force to keep unpopular governments in power, and that let the people decide.',
      },
      why: 'Without the threat of Soviet force, the governments of Eastern Europe had to rely on their own people. Most of them could not.',
      check: { q: 'What did Gorbachev announce at the UN on 7 December 1988?', a: 'That freedom of choice applied to all nations, and that Soviet armed forces would be cut by 500,000 within two years.' },
      syllabus: ['FP5', 'SC4'],
      sources: ['nobel-gorbachev', 'nobel-gorbachev-facts', 'gorbachev-un-1988'],
    },
    {
      id: 'kq6-g3', part: 'Gorbachev and 1989', date: '1989-09-11', dateLabel: 'May–October 1989',
      camera: { lat: 49.0, lon: 16.0, alt: 1500 },
      map: {
        borders: '1989-09-11',
        fill: fills({ HUN: 'focus', GDR: 'focus', POL: 'neutral' }),
        arrows: [
          { from: C.sopron, to: C.vienna, kind: 'people', label: 'East Germans escape through Hungary' },
          { from: C.prague, to: [50.0, 11.9], kind: 'people', label: 'Embassy refugees leave for West Germany' },
        ],
        markers: [
          { at: C.sopron, label: 'Pan-European Picnic, 19 August' },
          { at: C.prague, label: 'West German embassy, Prague' },
        ],
        lines: [{ kind: 'iron-curtain', points: IRON_CURTAIN }],
        city: null,
      },
      title: 'Hungary opens the Iron Curtain',
      body: `<p>On <b>2 May 1989</b> Hungarian border soldiers began to take down the barbed-wire fence on the border with Austria. On <b>19 August</b>, at a "Pan-European Picnic", a border gate was opened for three hours. More than 600 East Germans fled through it.</p>
<p>From <b>11 September</b> Hungary let East Germans leave freely. In the first three days 18,000 crossed into Austria and went on to West Germany. Others crowded into West German embassies in Prague and Warsaw.</p>
<p>Moscow did nothing to stop it. In late October a Soviet spokesman, Gennadi Gerasimov, said the USSR now followed the <b>"Sinatra Doctrine"</b>, after a Frank Sinatra song. Hungary and Poland, he said, would each choose their own way.</p>`,
      facts: [
        { text: 'Hungarian border soldiers began dismantling the fence with Austria on 2 May 1989. On 19 August a border gate was opened for three hours and more than 600 East Germans fled.', src: 'visitberlin-wall' },
        { text: 'From 11 September Hungary opened its borders to East Germans. In the first three days 18,000 of them crossed into Austria.', src: 'visitberlin-wall' },
        { text: 'In September 1989 about 3,500 East Germans crowded into the West German embassy in Prague.', src: 'visitberlin-wall' },
        { text: 'Explaining the "Frank Sinatra Doctrine", Gerasimov said: "Hungary, Poland, every other country, has its own way."', src: 'deseret-sinatra' },
        { text: 'The Sinatra Doctrine remark was made on 25 October 1989, during Gorbachev\'s visit to Finland. Reports differ on the TV programme and on how he quoted the song.', src: 'bpb-brezhnev' },
      ],
      why: 'Once Hungary opened its border, the Berlin Wall lost its purpose. East Germans could simply go round it.',
      check: { q: 'Why was Hungary\'s decision to open its border with Austria so important?', a: 'It made a hole in the Iron Curtain. Thousands of East Germans escaped through Hungary, which put huge pressure on the East German government.' },
      syllabus: ['FP5', 'SC4'],
      sources: ['visitberlin-wall', 'deseret-sinatra', 'bpb-brezhnev'],
    },
    {
      id: 'kq6-g4', part: 'Gorbachev and 1989', date: '1989-11-09', dateLabel: '9 October–9 November 1989',
      camera: { lat: 52.52, lon: 13.39, alt: 28, tilt: 32 }, // from Bornholmer Straße down to the Brandenburg Gate
      map: {
        borders: '1989-11-09',
        fill: fills({ GDR: 'focus', POL: 'neutral', HUN: 'neutral' }),
        arrows: [],
        markers: [
          { at: C.bornholmer, label: 'Bornholmer Straße: first gate opens, about 11.30 p.m.' },
          { at: C.brandenburgGate, label: 'Brandenburg Gate' },
        ],
        lines: [{ kind: 'wall', points: BERLIN_WALL }],
        city: 'berlin',
      },
      title: '9 November: the Wall opens',
      body: `<p>In East Germany, protest grew week by week. On <b>9 October</b> about <b>70,000</b> people marched in <b>Leipzig</b>. The authorities had prepared to use force, but the march stayed peaceful. A week later 120,000 marched. On <b>18 October</b> Erich Honecker was pushed out by his own Politburo.</p>
<p>The new leaders hoped to calm the country by easing travel rules. On the evening of <b>9 November</b>, at a live press conference, Politburo member <b>Günter Schabowski</b> announced the new rules. Asked when they started, he answered "immediately". In fact they were meant to start the next day.</p>
<p>Thousands of East Berliners went to the crossings. At about 11.30 p.m. the overwhelmed guards at <b>Bornholmer Straße</b> opened the barrier.</p>`,
      facts: [
        { text: '70,000 people joined the Leipzig Monday demonstration on 9 October 1989, and 120,000 on 16 October.', src: 'bpb-honecker' },
        { text: 'For the 16 October demonstration, as in the week before, the state leadership was ready to end the protests by force.', src: 'breg-leipzig' },
        { text: 'Honecker resigned on 18 October 1989, officially for health reasons, after Krenz, Modrow and Schabowski pushed him out.', src: 'bpb-honecker' },
        { text: 'Schabowski announced the new travel rules on 9 November. Asked when they took effect, he said "immediately", although they were meant to apply from the next day.', src: 'bpb-mauerfall' },
        { text: 'Under pressure from the crowds, guards opened the barrier at Bornholmer Straße at about 11.30 p.m.', src: 'bpb-mauerfall' },
      ],
      misconception: {
        wrong: 'Gorbachev ordered the Berlin Wall to be opened.',
        right: 'The Wall opened because of Schabowski\'s confused announcement and the pressure of crowds at the crossings. Gorbachev\'s part was that the USSR did not use force to close it again.',
      },
      why: 'No Soviet troops moved to save the Wall. That is the clearest sign that Soviet control had ended.',
      check: { q: 'What triggered the opening of the Berlin Wall on 9 November 1989?', a: 'Günter Schabowski\'s announcement, at a live press conference, that new travel rules applied "immediately". Crowds went to the crossings and the guards opened the gates.' },
      syllabus: ['FP5', 'SC4', 'SC2'],
      sources: ['bpb-honecker', 'breg-leipzig', 'bpb-mauerfall', 'breg-9nov'],
    },
    {
      id: 'kq6-g5', part: 'Gorbachev and 1989', date: '1989-12-25', dateLabel: 'November–December 1989',
      camera: { lat: 49.5, lon: 20.5, alt: 3300 },
      map: {
        borders: '1989-12-25',
        fill: fills({ BGR: 'focus', CSK: 'focus', ROU: 'focus', POL: 'neutral', HUN: 'neutral', GDR: 'neutral' }),
        arrows: [],
        markers: [
          { at: C.warsaw, label: 'Poland: elections, 4 June' },
          { at: C.budapest, label: 'Hungary: border open, 11 September' },
          { at: C.berlin, label: 'East Germany: Wall opens, 9 November' },
          { at: C.sofia, label: 'Bulgaria: Zhivkov removed, 10 November' },
          { at: C.prague, label: 'Czechoslovakia: from 17 November' },
          { at: C.timisoara, label: 'Romania: protests from 16 December' },
          { at: C.bucharest, label: 'Ceauşescu executed, 25 December' },
        ],
        lines: [],
        city: null,
      },
      title: 'Prague, Sofia and Bucharest',
      cascade: [
        { country: 'Poland', when: '4 June 1989', how: 'Solidarity wins the elections. Mazowiecki becomes prime minister on 24 August.', src: 'nsa-poland-1989' },
        { country: 'Hungary', when: '11 September 1989', how: 'The border opens to East Germans.', src: 'visitberlin-wall' },
        { country: 'East Germany', when: '9 November 1989', how: 'The Wall opens after Schabowski\'s announcement.', src: 'bpb-mauerfall' },
        { country: 'Bulgaria', when: '10 November 1989', how: 'The party removes Zhivkov.', src: 'enrs-bulgaria' },
        { country: 'Czechoslovakia', when: '17 November–29 December 1989', how: 'The Velvet Revolution. Havel becomes president.', src: 'brit-prague' },
        { country: 'Romania', when: '16–25 December 1989', how: 'A violent revolution. Ceauşescu is executed.', src: 'rri-romania' },
      ],

      body: `<p>The collapse spread in weeks. In <b>Bulgaria</b> the party removed its leader, Todor Zhivkov, on <b>10 November</b>, the day after the Wall opened.</p>
<p>In <b>Czechoslovakia</b>, police attacked a student march in Prague on <b>17 November</b>. This set off the <b>Velvet Revolution</b>: daily mass protests and a general strike on 27 November. Husák resigned on 10 December, and the playwright <b>Václav Havel</b> became president on 29 December.</p>
<p><b>Romania</b> was different. Protests began in <b>Timişoara</b> on <b>16 December</b> and spread to Bucharest. On 22 December Nicolae <b>Ceauşescu</b> fled. He was captured, tried in a hurry and executed on <b>25 December</b>. Over 1,100 people died between 16 and 25 December.</p>`,
      facts: [
        { text: 'Todor Zhivkov\'s government was overthrown on 10 November 1989.', src: 'enrs-bulgaria' },
        { text: 'Police reacted with brutality to a student march in Prague on 17 November 1989. A general strike followed on 27 November. Husák resigned on 10 December, and Havel was elected interim president on 29 December.', src: 'brit-prague' },
        { text: 'Protests began in Timişoara on 16 December 1989. Ceauşescu fled on 22 December and was summarily tried and executed on 25 December.', src: 'rri-romania' },
        { text: 'Over 1,100 people died between 16 and 25 December 1989, most of them after Ceauşescu fled.', src: 'rri-romania' },
      ],
      why: 'In each country the same thing happened: once it was clear that Moscow would not send troops, communist rule fell. Only the method differed: talks in Poland, crowds in East Germany and Czechoslovakia, a change at the top in Bulgaria and bloodshed in Romania.',
      check: { q: 'In which country did the fall of communism in 1989 cost the most lives?', a: 'Romania. Over 1,100 people died, and Ceauşescu was executed on 25 December 1989.' },
      syllabus: ['FP5', 'SC4'],
      sources: ['enrs-bulgaria', 'brit-prague', 'rri-romania', 'nsa-poland-1989', 'visitberlin-wall', 'bpb-mauerfall'],
    },
    {
      id: 'kq6-g6', part: 'Gorbachev and 1989', date: '1989-12-31', dateLabel: 'Judgement: 1979–1989',
      camera: { lat: 50, lon: 24, alt: 3500 },
      map: {
        borders: '1989-12-31',
        fill: fills({ USSR: 'focus', POL: 'neutral', HUN: 'neutral', GDR: 'neutral', CSK: 'neutral', BGR: 'neutral', ROU: 'neutral' }),
        arrows: [],
        markers: [{ at: C.moscow, label: 'Moscow' }],
        lines: [],
        city: null,
      },
      title: 'How far was Gorbachev personally responsible?',
      body: `<p>This is the fifth focus point, so weigh the factors.</p>
<p><b>Gorbachev</b> removed the threat that had kept communist governments in power since 1956: he would not use force.</p>
<p><b>Economic weakness</b> came first. The Soviet economy was inefficient, and Afghanistan and the arms race drained it.</p>
<p><b>People power</b> did the rest: Solidarity in Poland, the crowds in Leipzig and Prague, and the East Germans who fled through Hungary.</p>
<p><b>The West</b> added pressure: US support for Solidarity, and Reagan's challenge at the Brandenburg Gate in 1987: "Mr. Gorbachev, tear down this wall!"</p>
<p>The best answers separate the <b>trigger</b> from the <b>causes</b>. Gorbachev decided when and how Soviet control ended, but not why it had become so weak.</p>`,
      facts: [
        { text: 'In 1990 the Nobel Committee gave Gorbachev "the main credit" for the fall of the Berlin Wall and the end of the Cold War, and awarded him the Peace Prize.', src: 'nobel-gorbachev-facts' },
        { text: 'On 12 June 1987 Reagan said at the Brandenburg Gate: "Mr. Gorbachev, tear down this wall!"', src: 'reagan-1987' },
        { text: 'The US government worked publicly and covertly to fund, equip and support Solidarity throughout the 1980s.', src: 'nsa-poland-1989' },
        { text: 'Gorbachev sought to reform communism, not end it.', src: 'nobel-gorbachev-facts' },
      ],
      judgement: {
        for: [
          'He refused to use force. Without that threat, the communist governments had nothing to fall back on.',
          'He told the UN in 1988 that freedom of choice was universal, and he cut Soviet forces by 500,000.',
          'Glasnost encouraged open criticism, in the USSR and beyond.',
          'In 1989 his government let Poland elect a non-communist government and let Hungary open its border.',
        ],
        against: [
          'The Soviet economy was failing long before 1985, and Afghanistan and the arms race made it worse.',
          'Solidarity had shown in 1980 that millions of workers rejected communist rule.',
          'Crowds in Leipzig, Berlin and Prague, not Moscow, forced their governments to give way.',
          'Western pressure and aid, including US support for Solidarity, helped keep the opposition alive.',
          'He wanted to save communism, not end it: the collapse was not his aim.',
        ],
        verdict: 'Gorbachev was personally responsible for the timing and the peaceful manner of the collapse, because only the Soviet leader could decide not to use force. He was not responsible for the weakness that made collapse possible: economic failure and popular opposition had built up since 1956. He was a necessary cause, but not a sufficient one.',
      },
      why: 'This focus point is written as a "how far" question, the same form as Paper 1 part (c). Prepare both sides, with evidence, and a clear judgement.',
      check: { q: 'Give one argument that Gorbachev was responsible for the collapse and one that he was not.', a: 'Responsible: he refused to use force and told the UN in 1988 that nations had freedom of choice. Not responsible: the economy, Afghanistan and popular movements such as Solidarity had already weakened Soviet control.' },
      syllabus: ['FP5', 'SC4', 'FP4'],
      sources: ['nobel-gorbachev-facts', 'reagan-1987', 'nsa-poland-1989', 'gorbachev-un-1988'],
    },

    // ── Epilogue (outside the syllabus dates) ─────────────────────────────
    {
      id: 'kq6-e1', part: 'Epilogue', date: '1991-12-25', dateLabel: '1990–1991 (beyond the syllabus)',
      camera: { lat: 52, lon: 40, alt: 9000 },
      map: {
        borders: '1991-12-26',
        fill: { USSR: 'soviet', FRG: 'west', POL: 'neutral', CSK: 'neutral', HUN: 'neutral', ROU: 'neutral', BGR: 'neutral' },
        arrows: [],
        markers: [{ at: C.berlin, label: 'Germany reunited, 3 October 1990' }, { at: C.moscow, label: 'Gorbachev resigns, 25 December 1991' }],
        lines: [],
        city: null,
      },
      title: 'After 1989: the end of the USSR',
      body: `<p>The syllabus ends in about 1989, but the story did not. On <b>3 October 1990</b> East Germany joined the Federal Republic, and Germany was reunited. Gorbachev accepted that the new Germany would belong to NATO, and Soviet troops left East Germany. The <b>Warsaw Pact</b> was dissolved in 1991.</p>
<p>Inside the USSR, the Baltic states and other republics demanded independence. In August 1991 hardline communists tried to overthrow Gorbachev. The coup failed, but it left him weak. On <b>25 December 1991</b> Gorbachev resigned as Soviet president, and the Soviet flag over the Kremlin was lowered for the last time.</p>
<p>Use these events only as context. They fall outside the dates of this key question.</p>`,
      facts: [
        { text: 'Under the Unification Treaty the GDR joined the Federal Republic on 3 October 1990.', src: 'bpb-einheit' },
        { text: 'Gorbachev agreed to German reunification and accepted that a reunited Germany would join NATO, as Red Army troops withdrew from East Germany.', src: 'oh-ussr-collapse' },
        { text: 'The Warsaw Pact was officially disbanded in 1991.', src: 'oh-warsaw-pact' },
        { text: 'On 25 December 1991 Gorbachev resigned as Soviet president, and the Soviet flag over the Kremlin was lowered for the last time.', src: 'oh-ussr-collapse' },
      ],
      why: 'The loss of Eastern Europe in 1989 was followed within two years by the end of the USSR itself. Soviet power at home and abroad stood or fell together.',
      check: { q: 'When was Germany reunited?', a: 'On 3 October 1990.' },
      syllabus: ['FP5', 'SC4'],
      sources: ['bpb-einheit', 'oh-ussr-collapse', 'oh-warsaw-pact'],
    },
  ],

  // year: publication or last revision year; 'n.d.' where the page gives none. All URLs checked 2026-10-23.
  sources: {
    'cie-syllabus': { title: 'Cambridge IGCSE History 0470: syllabus for examination in 2027 and 2028 (version 1)', author: 'Cambridge University Press & Assessment', publisher: 'Cambridge University Press & Assessment', year: 2024, url: 'https://www.cambridgeinternational.org/Images/721327-2027-2028-syllabus.pdf' },
    'churchill-1946': { title: 'The Sinews of Peace ("Iron Curtain" speech), Fulton, Missouri, 5 March 1946', author: 'Winston Churchill', publisher: 'International Churchill Society', year: 1946, url: 'https://winstonchurchill.org/resources/speeches/1946-1963-elder-statesman/the-sinews-of-peace/' },
    'govsi-cominform': { title: 'Cominform conflict: when white suddenly becomes black', author: 'Archives of the Republic of Slovenia', publisher: 'Government of the Republic of Slovenia (GOV.SI)', year: 2019, url: 'https://gov.si/en/news/2019-06-01-cominform-conflict-when-white-suddenly-becomes-black' },
    'bpb-comecon': { title: 'Der Rat für gegenseitige Wirtschaftshilfe (Comecon)', author: 'Aus Politik und Zeitgeschichte', publisher: 'Bundeszentrale für politische Bildung', year: 1958, url: 'https://www.bpb.de/shop/zeitschriften/apuz/archiv/527378/der-rat-fuer-gegenseitige-wirtschaftshilfe-comecon/' },
    'oh-warsaw-pact': { title: 'The Warsaw Treaty Organization, 1955 (Milestones in the History of U.S. Foreign Relations)', author: 'Office of the Historian', publisher: 'US Department of State', year: 'n.d.', url: 'https://history.state.gov/milestones/1953-1960/warsaw-treaty' },
    'oh-1953': { title: 'The East German Uprising, 1953 (Milestones)', author: 'Office of the Historian', publisher: 'US Department of State', year: 'n.d.', url: 'https://history.state.gov/milestones/1953-1960/east-german-uprising' },
    'oh-20th-congress': { title: 'Khrushchev and the Twentieth Congress of the Communist Party, 1956 (Milestones)', author: 'Office of the Historian', publisher: 'US Department of State', year: 'n.d.', url: 'https://history.state.gov/milestones/1953-1960/khrushchev-20th-congress' },
    'oh-suez': { title: 'The Suez Crisis, 1956 (Milestones)', author: 'Office of the Historian', publisher: 'US Department of State', year: 'n.d.', url: 'https://history.state.gov/milestones/1953-1960/suez' },
    'oh-berlin': { title: 'The Berlin Crisis, 1958–1961 (Milestones)', author: 'Office of the Historian', publisher: 'US Department of State', year: 'n.d.', url: 'https://history.state.gov/milestones/1953-1960/berlin-crises' },
    'oh-czech-1968': { title: 'Soviet Invasion of Czechoslovakia, 1968 (Milestones)', author: 'Office of the Historian', publisher: 'US Department of State', year: 'n.d.', url: 'https://history.state.gov/milestones/1961-1968/soviet-invasion-czechoslavkia' },
    'oh-afghanistan': { title: 'The Soviet Invasion of Afghanistan and the U.S. Response, 1978–1980 (Milestones)', author: 'Office of the Historian', publisher: 'US Department of State', year: 'n.d.', url: 'https://history.state.gov/milestones/1977-1980/soviet-invasion-afghanistan' },
    'oh-ussr-collapse': { title: 'The Collapse of the Soviet Union (Milestones)', author: 'Office of the Historian', publisher: 'US Department of State', year: 'n.d.', url: 'https://history.state.gov/milestones/1989-1992/collapse-soviet-union' },
    'frus-xxv': { title: 'Foreign Relations of the United States, 1955–1957, Volume XXV: Eastern Europe (contents)', author: 'Office of the Historian', publisher: 'US Government Printing Office', year: 1990, url: 'https://history.state.gov/historicaldocuments/frus1955-57v25' },
    'frus-xxv-141': { title: 'FRUS 1955–1957, Vol. XXV, Document 141: Editorial Note (30 October 1956)', author: 'Office of the Historian', publisher: 'US Government Printing Office', year: 1990, url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d141' },
    'frus-xxv-152': { title: 'FRUS 1955–1957, Vol. XXV, Document 152: Memorandum of discussion at the 302d meeting of the National Security Council, 1 November 1956', author: 'National Security Council', publisher: 'US Government Printing Office', year: 1990, url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d152' },
    'frus-xxv-155': { title: 'FRUS 1955–1957, Vol. XXV, Document 155: Editorial Note (2 November 1956)', author: 'Office of the Historian', publisher: 'US Government Printing Office', year: 1990, url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d155' },
    'frus-xxv-166': { title: 'FRUS 1955–1957, Vol. XXV, Document 166: Telegram from the Department of State to the Embassy in the Soviet Union, 4 November 1956 (Eisenhower\'s message to Bulganin)', author: 'US Department of State', publisher: 'US Government Printing Office', year: 1990, url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d166' },
    'frus-xxv-167': { title: 'FRUS 1955–1957, Vol. XXV, Document 167: Editorial Note (UN General Assembly emergency session, 4 November 1956)', author: 'Office of the Historian', publisher: 'US Government Printing Office', year: 1990, url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d167' },
    'frus-xxv-177': { title: 'FRUS 1955–1957, Vol. XXV, Document 177: Editorial Note (bipartisan legislative meeting, 9 November 1956)', author: 'Office of the Historian', publisher: 'US Government Printing Office', year: 1990, url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d177' },
    'frus-xxv-255': { title: 'FRUS 1955–1957, Vol. XXV, Document 255: Editorial Note (report of the UN Special Committee on Hungary, June 1957)', author: 'Office of the Historian', publisher: 'US Government Printing Office', year: 1990, url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d255' },
    'brit-hungary': { title: 'Hungarian Revolution', author: 'The Editors of Encyclopaedia Britannica (revised by Scott Spires)', publisher: 'Encyclopaedia Britannica', year: 2026, url: 'https://www.britannica.com/event/Hungarian-Revolution-1956' },
    'brit-prague': { title: 'Prague Spring; Velvet Revolution', author: 'Milan Hauner, J.E. Luebering and the Editors of Encyclopaedia Britannica', publisher: 'Encyclopaedia Britannica', year: 2026, url: 'https://www.britannica.com/event/Prague-Spring' },
    'brit-berlin-wall': { title: 'Berlin Wall', author: 'The Editors of Encyclopaedia Britannica', publisher: 'Encyclopaedia Britannica', year: 'n.d.', url: 'https://www.britannica.com/topic/Berlin-Wall' },
    'nsa-hungary-1956': { title: 'The 1956 Hungarian Revolution: A History in Documents (Electronic Briefing Book No. 76)', author: 'Malcolm Byrne (ed.)', publisher: 'National Security Archive, George Washington University', year: 2002, url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB76/' },
    'malin-1956-10-31': { title: 'Working notes from the session of the CPSU CC Presidium on 31 October 1956', author: 'V.N. Malin; translated by Mark Kramer (CWIHP Bulletin 8–9)', publisher: 'Wilson Center Digital Archive (University of Maryland mirror)', year: 1996, url: 'https://digitalarchive.umd.edu/document/working-notes-session-cpsu-cc-presidium-31-october-1956' },
    'andropov-1956-11-01': { title: 'Andropov report, 1 November 1956 (coded telegram from Budapest)', author: 'Yuri Andropov; translation from The Hungarian Quarterly 34 (1993)', publisher: 'Wilson Center Digital Archive (University of Maryland mirror)', year: 1993, url: 'https://digitalarchive.umd.edu/document/andropov-report-1-november-1956' },
    'soviet-decl-1956': { title: 'Declaration of the Soviet Government on friendship and cooperation with other socialist states, 30 October 1956 (Department of State Bulletin, 12 November 1956, pp. 745–747)', author: 'Government of the USSR', publisher: 'Internet Modern History Sourcebook, Fordham University', year: 1956, url: 'https://sourcebooks.web.fordham.edu/mod/1956soviet-coop1.asp' },
    'eisenhower-1956-10-31': { title: 'Radio and television report to the American people on the developments in Eastern Europe and the Middle East, 31 October 1956', author: 'Dwight D. Eisenhower', publisher: 'The American Presidency Project, UC Santa Barbara', year: 1956, url: 'https://www.presidency.ucsb.edu/node/233787' },
    'miller-ike': { title: 'Dwight D. Eisenhower: key events', author: 'Miller Center of Public Affairs', publisher: 'University of Virginia', year: 'n.d.', url: 'https://millercenter.org/president/dwight-d-eisenhower/key-events' },
    'ghdi-refugees': { title: 'Refugee movement (1950–1963) (data from Bundesministerium für gesamtdeutsche Fragen, SBZ von A bis Z, 1965)', author: 'German History in Documents and Images', publisher: 'German Historical Institute, Washington DC', year: 'n.d.', url: 'https://germanhistorydocs.org/en/occupation-and-the-emergence-of-two-states-1945-1961/refugee-movement-1950-1963' },
    'visitberlin-wall': { title: 'The Berlin Wall: history at a glance', author: 'visitBerlin', publisher: 'Berlin Tourismus & Kongress GmbH', year: 'n.d.', url: 'https://about.visitberlin.de/en/press/press-releases/berlin-wall-history-glance' },
    'mauer-victims': { title: 'Victims at the Berlin Wall', author: 'Berlin Wall Foundation', publisher: 'Stiftung Berliner Mauer', year: 'n.d.', url: 'https://www.berliner-mauer-gedenkstaette.de/en/todesopfer-240.html' },
    'jfk-1961-07-25': { title: 'Radio and television report to the American people on the Berlin crisis, 25 July 1961', author: 'John F. Kennedy', publisher: 'The American Presidency Project, UC Santa Barbara', year: 1961, url: 'https://www.presidency.ucsb.edu/documents/radio-and-television-report-the-american-people-the-berlin-crisis' },
    'jfk-1963-06-26': { title: 'Remarks in the Rudolph Wilde Platz, Berlin, 26 June 1963', author: 'John F. Kennedy', publisher: 'The American Presidency Project, UC Santa Barbara', year: 1963, url: 'https://www.presidency.ucsb.edu/documents/remarks-the-rudolph-wilde-platz-berlin' },
    'army-checkpoint': { title: 'Standoff in Berlin, October 1961', author: 'US Army', publisher: 'army.mil', year: 'n.d.', url: 'https://www.army.mil/article/46993/standoff_in_berlin_october_1961' },
    'enrs-1968': { title: 'Warsaw Pact invasion of Czechoslovakia', author: 'European Network Remembrance and Solidarity', publisher: 'ENRS', year: 'n.d.', url: 'https://enrs.eu/article/warsaw-pact-invasion-of-czechoslovakia' },
    'ustr-victims': { title: 'August 1968: victims of the occupation', author: 'Institute for the Study of Totalitarian Regimes (ÚSTR)', publisher: 'ÚSTR, Prague', year: 'n.d.', url: 'https://www.ustrcr.cz/en/august-1968-victims-of-the-occupation' },
    'radio-prague-137': { title: 'New evidence numbers victims of 1968 invasion', author: 'Radio Prague International', publisher: 'Czech Radio', year: 2017, url: 'https://english.radio.cz/node/8184501' },
    'kovalev-1968': { title: 'Sovereignty and the international obligations of socialist countries (Pravda, September 1968; Novosti translation)', author: 'S. Kovalev', publisher: 'Internet Modern History Sourcebook, Fordham University', year: 1968, url: 'https://sourcebooks.fordham.edu/mod/1968brezhnev.asp' },
    'bpb-brezhnev': { title: 'Vor 50 Jahren: "Breschnew-Doktrin" von der eingeschränkten Souveränität sozialistischer Bruderstaaten', author: 'bpb Hintergrund aktuell', publisher: 'Bundeszentrale für politische Bildung', year: 2018, url: 'https://www.bpb.de/politik/hintergrund-aktuell/279720/breschnew-doktrin' },
    'vatican-jp2': { title: 'Events in the pontificate of John Paul II', author: 'Holy See Press Office', publisher: 'The Holy See', year: 'n.d.', url: 'https://press.vatican.va/beatificazione_gp2/documents/pontificato_gp2_en.html' },
    'ecs-solidarity': { title: 'How did Solidarność (Solidarity) come to be?', author: 'European Solidarity Centre', publisher: 'Europejskie Centrum Solidarności, Gdańsk', year: 2025, url: 'https://ecs.gda.pl/?p=17764' },
    'nobel-walesa': { title: 'Lech Wałęsa: biographical (from Nobel Lectures, Peace 1981–1990)', author: 'Nobel Foundation', publisher: 'NobelPrize.org', year: 1997, url: 'https://www.nobelprize.org/prizes/peace/1983/walesa/biographical/' },
    'nobel-walesa-facts': { title: 'Lech Wałęsa: facts', author: 'Nobel Prize Outreach', publisher: 'NobelPrize.org', year: 'n.d.', url: 'https://www.nobelprize.org/prizes/peace/1983/walesa/facts/' },
    'polak-internment': { title: 'Internment camps during martial law (abstract)', author: 'Wojciech Polak and Sylwia Galij-Skarbińska', publisher: 'Reality of Politics (via CEEOL)', year: 2025, url: 'https://www.ceeol.com/search/article-detail?id=1446041' },
    'swarthmore-solidarity': { title: 'Solidarność (Solidarity) brings down the communist government of Poland, 1988–89', author: 'Global Nonviolent Action Database', publisher: 'Swarthmore College', year: 'n.d.', url: 'https://nvdatabase.swarthmore.edu/index.php/node/4088' },
    'politburo-1981-12-10': { title: 'Session of the CPSU CC Politburo, 10 December 1981 (working notes)', author: 'CPSU CC Politburo; translated by Mark Kramer', publisher: 'Making the History of 1989, Roy Rosenzweig Center for History and New Media', year: 1981, url: 'https://1989.rrchnm.org/files/download/1218/fullsize' },
    'nsa-poland-1989': { title: '"Solidarity\'s coming victory: big or too big?" Poland\'s revolution as seen from the U.S. Embassy (Electronic Briefing Book No. 42)', author: 'Gregory F. Domber (ed.)', publisher: 'National Security Archive, George Washington University', year: 2001, url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB42/' },
    'rferl-afghanistan': { title: '26th anniversary: last Soviet forces withdraw from Afghanistan', author: 'RFE/RL Gandhara', publisher: 'Radio Free Europe/Radio Liberty', year: 2015, url: 'https://gandhara.rferl.org/a/26851918/p1.html' },
    'nobel-gorbachev': { title: 'Mikhail Gorbachev: biographical (from Nobel Lectures, Peace 1981–1990)', author: 'Nobel Foundation', publisher: 'NobelPrize.org', year: 1997, url: 'https://www.nobelprize.org/prizes/peace/1990/gorbachev/biographical/' },
    'nobel-gorbachev-facts': { title: 'Mikhail Gorbachev: facts', author: 'Nobel Prize Outreach', publisher: 'NobelPrize.org', year: 'n.d.', url: 'https://www.nobelprize.org/prizes/peace/1990/gorbachev/facts/' },
    'gorbachev-un-1988': { title: 'Address to the 43rd UN General Assembly, 7 December 1988 (transcript)', author: 'Mikhail Gorbachev', publisher: 'Gorbachev Strategy Institute', year: 1988, url: 'https://gsinstitute.org/mikhail-gorbachevs-address-to-the-43rd-un-general-assembly-1988/' },
    'deseret-sinatra': { title: 'Sinatra Doctrine: a policy that\'s scary for us all', author: 'Dennis Lythgoe', publisher: 'Deseret News', year: 1989, url: 'https://www.deseret.com/1989/11/9/18831795/sinatra-doctrine-a-policy-that-s-scary-for-us-all/' },
    'bpb-honecker': { title: 'Der Sturz von Erich Honecker am 18. Oktober 1989 (DDR kompakt)', author: 'bpb', publisher: 'Bundeszentrale für politische Bildung', year: 'n.d.', url: 'https://www.bpb.de/themen/deutsche-teilung/ddr-kompakt/521879/der-sturz-von-erich-honecker-am-18-oktober-1989/' },
    'breg-leipzig': { title: 'Chronik der Deutschen Einheit: 16.10.1989, 120.000 demonstrieren in Leipzig', author: 'Presse- und Informationsamt der Bundesregierung', publisher: 'Die Bundesregierung', year: 'n.d.', url: 'https://www.bundesregierung.de/breg-de/schwerpunkte/deutsche-einheit/120-000-demonstrieren-in-leipzig-419680' },
    'bpb-mauerfall': { title: 'Mauerfall (DDR kompakt)', author: 'bpb', publisher: 'Bundeszentrale für politische Bildung', year: 'n.d.', url: 'https://www.bpb.de/themen/deutsche-teilung/ddr-kompakt/521628/mauerfall/' },
    'breg-9nov': { title: '9 November: a historically significant date', author: 'Press and Information Office of the Federal Government', publisher: 'The Federal Government of Germany', year: 'n.d.', url: 'https://www.bundesregierung.de/breg-en/service/archive/archive/9-november-a-historically-signficant-date-411370' },
    'reagan-1987': { title: 'Remarks on East-West relations at the Brandenburg Gate in West Berlin, 12 June 1987', author: 'Ronald Reagan', publisher: 'The American Presidency Project, UC Santa Barbara', year: 1987, url: 'https://www.presidency.ucsb.edu/documents/remarks-east-west-relations-the-brandenburg-gate-west-berlin' },
    'enrs-bulgaria': { title: 'Overthrow of Zhivkov\'s government on November 10, 1989', author: 'European Network Remembrance and Solidarity', publisher: 'ENRS', year: 'n.d.', url: 'https://enrs.eu/article/overthrow-of-zhivkov-s-government-on-november-10-1989' },
    'rri-romania': { title: 'The 1989 Revolution started in Timişoara', author: 'Radio Romania International', publisher: 'Radio Romania International', year: 2025, url: 'https://www.rri.ro/en?p=962980' },
    'bpb-einheit': { title: 'Deutsche Einheit am 3. Oktober 1990 (DDR kompakt)', author: 'bpb', publisher: 'Bundeszentrale für politische Bildung', year: 'n.d.', url: 'https://www.bpb.de/themen/deutsche-teilung/ddr-kompakt/521743/deutsche-einheit-am-3-oktober-1990/' },
  },

  toolkit: {
    // key terms of this question; the chapter also recalls them in its scenes (glossary chips in chapter.js)
    definitions: [
      { k: 'Cominform', d: 'The Communist Information Bureau, set up by Stalin in 1947 to bring the communist parties of Europe under Moscow\'s direction.' },
      { k: 'Comecon', d: 'The Council for Mutual Economic Assistance, set up in 1949 to tie the economies of the Eastern bloc to the USSR.' },
      { k: 'Warsaw Pact', d: 'The military alliance of the USSR and its satellite states, signed in 1955 after West Germany joined NATO.' },
      { k: 'Secret Speech', d: 'Khrushchev\'s speech to the Soviet Communist Party in February 1956, attacking Stalin\'s crimes and his cult of personality.' },
      { k: 'De-Stalinisation', d: 'The move away from Stalin\'s methods after his death, begun openly by Khrushchev\'s Secret Speech in 1956.' },
      { k: 'Prague Spring', d: 'The reforms of Alexander Dubček in Czechoslovakia in 1968, "socialism with a human face", ended by the Warsaw Pact invasion in August.' },
      { k: 'Solidarity', d: 'The independent trade union founded at the Gdańsk shipyard in Poland in 1980 and led by Lech Wałęsa.' },
      { k: 'Martial law', d: 'Rule by the army in place of the normal law. General Jaruzelski declared it in Poland in December 1981 to crush Solidarity.' },
    ],
    summary: [
      '<b>Control by 1948.</b> Communist parties loyal to Moscow ruled the satellite states. Control rested on Soviet troops, secret police, loyal parties, Comecon (1949) and the Warsaw Pact (1955). Yugoslavia broke away in 1948.',
      '<b>Hungary, 1956.</b> Repression and hardship, then hope (Austria\'s neutrality, the Secret Speech, Poland). A rising on 23 October; Nagy ended one-party rule and left the Warsaw Pact. Soviet forces invaded on 4 November. About 2,500 Hungarians died and about 200,000 fled. Kádár took over; Nagy was executed in 1958.',
      '<b>Why the West stayed out.</b> Fear of global war, the Suez Crisis and the US election. Eisenhower said on 31 October that the USA would not use force.',
      '<b>The Berlin Wall, 1961.</b> About 2.5 to 2.7 million left East Germany in 1949–61, many of them skilled. Khrushchev\'s ultimatum (1958) and the Vienna summit (1961) failed, so on 13 August 1961 East Germany sealed the border. Refugees fell from about 207,000 (1961) to about 21,000 (1962). At least 140 people died at the Wall.',
      '<b>Czechoslovakia, 1968.</b> A weak economy and party reformers led to Dubček and the Action Programme ("socialism with a human face"). Czechoslovakia did not try to leave the Warsaw Pact. On 20–21 August Warsaw Pact forces, mostly Soviet, invaded. Between 108 and 137 Czechoslovaks died in 1968. The Brezhnev Doctrine (November 1968) claimed the right to intervene.',
      '<b>Hungary and Czechoslovakia compared.</b> Same outcome (invasion, the reformer removed, the West inactive). Different aims (leaving the Pact versus reform within it), leadership (streets versus party) and violence (fighting versus passive resistance).',
      '<b>Solidarity.</b> Gdańsk strike, August 1980; Gdańsk Agreement, 31 August; about 10 million members. Martial law on 13 December 1981 (9,736 interned); banned in October 1982; underground with Church and Western support; Round Table and June 1989 elections; Mazowiecki prime minister on 24 August 1989.',
      '<b>Gorbachev.</b> General Secretary from March 1985: glasnost, perestroika, no use of force. UN speech, 7 December 1988: "freedom of choice"; 500,000 troops cut. 1989: Hungary opened its border, the Wall opened on 9 November, and communist rule fell in Bulgaria, Czechoslovakia and Romania.',
      '<b>Overall judgement.</b> Soviet control was secure only while Moscow was willing to use force and the West would not challenge it. It never rested on consent. When Gorbachev gave up force, it collapsed within months.',
    ],
    checks: [
      { q: 'Which communist state was expelled from the Cominform in 1948?', a: 'Yugoslavia, under Tito.' },
      { q: 'When was the Warsaw Pact signed?', a: '14 May 1955.' },
      { q: 'What did Nagy announce on 30 October 1956?', a: 'The end of one-party rule in Hungary.' },
      { q: 'Why did Hungary announce on 1 November 1956 that it was leaving the Warsaw Pact?', a: 'Because a strong Soviet force had crossed the Hungarian border against the government\'s protests.' },
      { q: 'On what date did Soviet forces launch their main attack on Hungary?', a: '4 November 1956.' },
      { q: 'Give two reasons why the West did not help Hungary.', a: 'Fear of global war; the Suez Crisis; the US election campaign; the USA had said it would not use force.' },
      { q: 'About how many people left East Germany for the West between 1949 and 1961?', a: 'About 2.5 to 2.7 million.' },
      { q: 'What did Khrushchev demand in November 1958?', a: 'That the Western powers leave West Berlin within six months.' },
      { q: 'When did East Germany close the border in Berlin?', a: 'Overnight on 12–13 August 1961.' },
      { q: 'What happened at Checkpoint Charlie on 27–28 October 1961?', a: 'US and Soviet tanks faced each other for more than 24 hours before both sides withdrew.' },
      { q: 'Who became leader of Czechoslovakia in January 1968?', a: 'Alexander Dubček.' },
      { q: 'What was the "Two Thousand Words" manifesto?', a: 'A document of 27 June 1968, signed by many Czechoslovaks, calling for mass action to demand real democracy.' },
      { q: 'What did the Brezhnev Doctrine claim?', a: 'That a threat to socialism in one communist state was the concern of all of them, giving the bloc the right to intervene.' },
      { q: 'Who led the strike at the Gdańsk shipyard in August 1980?', a: 'Lech Wałęsa.' },
      { q: 'What did the Politburo decide about Poland on 10 December 1981?', a: 'Not to send Soviet troops into Poland.' },
      { q: 'What did Solidarity win in the first round of the June 1989 elections?', a: '160 of the 161 Sejm seats it could contest and 92 of the 100 Senate seats.' },
      { q: 'What did Gorbachev announce at the UN on 7 December 1988?', a: 'That freedom of choice was a universal principle, and a cut of 500,000 in Soviet armed forces.' },
      { q: 'What happened at the Pan-European Picnic on 19 August 1989?', a: 'A gate on the Austro-Hungarian border was opened for three hours, and more than 600 East Germans escaped.' },
      { q: 'Why did the Berlin Wall open on 9 November 1989?', a: 'Schabowski announced that new travel rules applied "immediately", and crowds forced the guards to open the crossings.' },
      { q: 'In which country did the end of communism in 1989 involve the most bloodshed?', a: 'Romania, where over 1,100 people died and Ceauşescu was executed.' },
    ],
  },
};
