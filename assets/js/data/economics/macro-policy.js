// Economics 0455, Topic 4.1–4.4: Government and the macroeconomy. One scroll chapter over a globe coloured with data.
// Map colours, chart lines and value labels come from assets/data/econ.json (IMF WEO October 2026, BIS, OWID), so
// figures that also appear in the text were read from the same file. Case facts were checked against two sources
// where possible; the working notes are kept outside the repo. Status: reviewed by an Economics teacher on 2026-10-25.
// Checked by tools/check-econ.mjs (fields, sources, indicators, syllabus coverage, no em dashes).

const WEO = 'imf-weo', BIS = 'bis', GINI = 'owid-gini', CO2 = 'owid-co2', SYL = 'cie-0455';
const WORLD = { lat: 18, lon: 12, alt: 17000 };

export default {
  id: 'macro-policy', subject: 'economics', status: 'reviewed', sound: true, borders: 'modern', accent: '#46d6a0',
  title: 'Government and the macroeconomy', question: 'How do governments manage the whole economy?',
  hero: { camera: { lat: 22, lon: 20, alt: 17500 } },
  ribbon: ['1980-01-01', '2027-01-01'], heroDate: '2019-01-01',
  pill: { part: 'Topic 4.1–4.4', date: 'Government and the macroeconomy' },
  lab: './data/economics/policy-lab.js', // the policy lab follows the last scene
  syllabus: [
    { id: '4.1.1', text: 'Macroeconomic aims and conflicts' },
    { id: '4.2.1', text: 'Government budget' },
    { id: '4.2.2', text: 'Reasons for government spending' },
    { id: '4.2.3', text: 'Taxation' },
    { id: '4.2.4', text: 'Definition of fiscal policy' },
    { id: '4.2.5', text: 'Fiscal policy measures' },
    { id: '4.2.6', text: 'Effects of fiscal policy on the aims' },
    { id: '4.3.1', text: 'Money supply and monetary policy' },
    { id: '4.3.2', text: 'Monetary policy measures' },
    { id: '4.3.3', text: 'Effects of monetary policy on the aims' },
    { id: '4.4.1', text: 'Definition of supply-side policy' },
    { id: '4.4.2', text: 'Supply-side policy measures' },
    { id: '4.4.3', text: 'Effects of supply-side policy on the aims' },
  ],
  scenes: [
    // ── Introduction ────────────────────────────────────────────────────────
    {
      id: 'mp-0', part: 'Introduction', date: '2025-12-31', dateLabel: '2025',
      camera: WORLD,
      map: { borders: 'modern', data: { id: 'NGDP_RPCH', year: 2025 } },
      title: 'The macroeconomy: the whole economy at once',
      body: `<p><b>Macroeconomics</b> looks at the economy as a whole: total output, total employment, the general price level and a country's trade with the rest of the world.</p>
        <p>This map shows <b>real GDP growth</b> in 2025 for almost every country. Blue means the economy grew. Orange means it shrank. Each country's government is trying to steer numbers like these.</p>
        <p>This chapter follows what governments aim for, and the three kinds of policy they use: <b>fiscal</b>, <b>monetary</b> and <b>supply-side</b>.</p>`,
      why: 'Every Paper 2 question on Topic 4 asks how a policy affects one or more of these aims.',
      facts: [{ text: 'Real GDP growth by country, 2025, from the IMF World Economic Outlook database (October 2026).', src: WEO }],
      check: { q: 'What does a country coloured orange on this map show?', a: 'Its real GDP fell in 2025: the economy shrank.' },
      syllabus: ['4.1.1'], sources: [WEO],
    },

    // ── Part 1: aims ────────────────────────────────────────────────────────
    {
      id: 'mp-a1', part: 'The six aims', date: '2021-12-31', dateLabel: '2019 to 2021',
      camera: WORLD,
      map: { borders: 'modern', data: { id: 'NGDP_RPCH', years: [2019, 2020, 2021] }, focus: ['GBR', 'IND', 'BRA'] },
      title: 'Aim 1: economic growth',
      body: `<p><b>Economic growth</b> is an increase in a country's real GDP. Growth raises incomes, creates jobs and brings in more tax revenue.</p>
        <p>Keep scrolling and watch the map move from 2019 to 2021. In 2020 the pandemic made almost every economy shrink. In 2021 most grew again.</p>
        <p>Governments often set a <b>criterion</b> for this aim. China, for example, set a growth target of "around 5 percent" for 2025, the same as in the two years before.</p>`,
      why: 'You need to know each aim and how a government can tell whether it has been met.',
      misconception: { wrong: 'Economic growth means prices are rising.', right: 'Growth is a rise in real GDP, which means more goods and services are produced. Real GDP removes the effect of rising prices.' },
      facts: [
        { text: 'Real GDP growth for 2019, 2020 and 2021 from the IMF World Economic Outlook database.', src: WEO },
        { text: 'China\'s Government Work Report of March 2025 set a GDP growth target of around 5% for the third year running.', src: 'china-gwr' },
      ],
      check: { q: 'Why did most countries turn orange in 2020?', a: 'The pandemic and lockdowns cut spending and output, so real GDP fell.' },
      syllabus: ['4.1.1'], sources: [WEO, 'china-gwr'],
    },
    {
      id: 'mp-a2', part: 'The six aims', date: '2024-12-31', dateLabel: '2024',
      camera: { lat: 12, lon: 10, alt: 15000 },
      map: { borders: 'modern', data: { id: 'LUR', year: 2024 }, focus: ['ZAF', 'ESP', 'JPN'] },
      title: 'Aim 2: full employment and low unemployment',
      body: `<p><b>Full employment</b> means that nearly everyone who wants a job and is able to work has one. A little unemployment always remains, because people take time to move between jobs.</p>
        <p>The map shows the <b>unemployment rate</b> in 2024. South Africa's was 32.6%. Japan's was 2.5%.</p>
        <p>Notice the hatched countries. Many lower-income countries have no reliable figure, because measuring unemployment needs a regular <b>labour force survey</b>, and many workers there have informal jobs.</p>`,
      why: 'Unemployment wastes resources and lowers incomes, so it is one of the aims governments watch most closely.',
      facts: [
        { text: 'Unemployment rate (% of the labour force), 2024: South Africa 32.6%, Spain 11.3%, Japan 2.5%.', src: WEO },
        { text: 'The IMF database gives a 2024 unemployment rate for 109 of the countries on this map.', src: WEO },
      ],
      check: { q: 'Why might a country have no unemployment figure on this map?', a: 'It does not run a regular labour force survey, or many people work in informal jobs that are hard to count.' },
      syllabus: ['4.1.1'], sources: [WEO],
    },
    {
      id: 'mp-a3', part: 'The six aims', date: '2024-12-31', dateLabel: '2019 to 2024',
      camera: { lat: 30, lon: 10, alt: 13000 },
      map: { borders: 'modern', data: { id: 'PCPIPCH', years: [2019, 2021, 2022, 2024] }, focus: ['USA', 'GBR', 'IND', 'TUR'] },
      title: 'Aim 3: stable prices and low inflation',
      // directed on its own (src/scene/prices.js, WP-04X): as the camera lands, the world's inflation stands up as a
      // landscape; the second caption runs through 2019 to 2024, then the reader points at a country to read it
      scene: { film: 'prices', shots: [0, 0, 1, 2, 3], years: [2019, 2019, 2019, 2024, 2022],
        hint: 'The warm line marks 2%: a country is above it where the line runs round its side. Point at a country to read its inflation.',
        keysLabel: 'Read the inflation of',
        keys: [{ label: 'The United States', v: 'USA' }, { label: 'The United Kingdom', v: 'GBR' }, { label: 'India', v: 'IND' }, { label: 'Türkiye', v: 'TUR' }] },
      body: `<p><b>Stable prices</b> means a low and steady rate of inflation. If inflation is high, money buys less each year and it becomes hard to plan.</p>
        <p>Scroll through the years. Inflation was low almost everywhere in 2019. By 2022 it had risen sharply in most countries, then it fell again by 2024.</p>
        <p>Many governments give their central bank a target. The US Federal Reserve has aimed for <b>2%</b> since 2012. India's target is <b>4%</b>, with a band from 2% to 6%.</p>`,
      chart: { title: 'Inflation, average consumer prices', source: WEO, marks: [{ x: 2022, label: '2022' }], series: [
        { label: 'United States', ind: 'PCPIPCH', iso: 'USA', from: 2015, to: 2025 },
        { label: 'United Kingdom', ind: 'PCPIPCH', iso: 'GBR', from: 2015, to: 2025 },
        { label: 'India', ind: 'PCPIPCH', iso: 'IND', from: 2015, to: 2025 },
      ] },
      why: 'A clear numerical target is the criterion that tells the public whether this aim has been met.',
      facts: [
        { text: 'Inflation in 2022: United States 8.0%, United Kingdom 9.1%, Türkiye 72.3%.', src: WEO },
        { text: 'In January 2012 the Federal Reserve stated that inflation of 2%, measured by the PCE price index, is most consistent with its mandate.', src: 'fed-2012' },
        { text: 'India\'s inflation target is 4% with a tolerance band of 2% to 6%, first agreed in 2015 and extended to March 2031.', src: 'rbi-target' },
      ],
      check: { q: 'Which of the three countries in the chart had the highest inflation in 2022?', a: 'The United Kingdom, at 9.1%.' },
      syllabus: ['4.1.1'], sources: [WEO, 'fed-2012', 'rbi-target'],
    },
    {
      id: 'mp-a4', part: 'The six aims', date: '2023-12-31', dateLabel: '2023',
      camera: { lat: 30, lon: -30, alt: 14000 },
      map: { borders: 'modern', data: { id: 'BCA_NGDPD', year: 2023 }, focus: ['DEU', 'USA'] },
      title: 'Aim 4: balance of payments stability',
      body: `<p>The <b>current account</b> of the balance of payments records a country's trade in goods and services with the rest of the world, plus income flows.</p>
        <p>Blue countries had a <b>surplus</b> in 2023: more money came in than went out. Orange countries had a <b>deficit</b>. Germany's surplus was 5.5% of GDP. The United States had a deficit of 3.3% of GDP.</p>
        <p>A small deficit or surplus is not a problem. A large deficit that lasts for years may mean the country is borrowing heavily from abroad or that its firms are not competitive.</p>`,
      why: 'Stability, not a surplus at all costs, is the aim: a very large surplus can also cause problems for trading partners.',
      facts: [{ text: 'Current account balance, % of GDP, 2023: Germany +5.5%, United States −3.3%.', src: WEO }],
      check: { q: 'What does a current account deficit mean?', a: 'More money flows out of the country for imports and income payments than flows in from exports and income.' },
      syllabus: ['4.1.1'], sources: [WEO],
    },
    {
      id: 'mp-a5', part: 'The six aims', date: '2024-12-31', dateLabel: 'Latest year',
      camera: { lat: 5, lon: -10, alt: 15000 },
      map: { borders: 'modern', data: { id: 'GINI', year: 2024 }, focus: ['ZAF', 'BRA', 'NOR'] },
      title: 'Aim 5: redistribution of income',
      body: `<p><b>Redistribution of income</b> means making the gap between rich and poor smaller, for example by taxing high incomes more and paying benefits to people on low incomes.</p>
        <p>The map shows the <b>Gini index</b>. 0 would mean everyone has the same income. 100 would mean one person has all of it. South Africa's is 54.1. Norway's is 26.5.</p>
        <p>Surveys of income are not held every year, so each country shows its latest figure.</p>`,
      why: 'A government that chooses this aim will use taxes and spending to move income from richer to poorer households.',
      misconception: { wrong: 'Redistribution means everyone ends up with the same income.', right: 'It means reducing the gap between high and low incomes, not removing it.' },
      facts: [{ text: 'Gini index, latest survey year: South Africa 54.1 (2022), Brazil 50.3 (2024), Norway 26.5 (2023).', src: GINI }],
      check: { q: 'Which country on this map has the more equal income distribution, Brazil or Norway?', a: 'Norway: its Gini index (26.5) is lower.' },
      syllabus: ['4.1.1'], sources: [GINI],
    },
    {
      id: 'mp-a6', part: 'The six aims', date: '2023-12-31', dateLabel: '2023',
      camera: { lat: 35, lon: 40, alt: 15000 },
      map: { borders: 'modern', data: { id: 'CO2_PC', year: 2023 }, focus: ['GBR', 'IND', 'USA'] },
      title: 'Aim 6: environmental sustainability',
      body: `<p><b>Environmental sustainability</b> means meeting today's needs without damaging the ability of future generations to meet theirs. It became a separate macroeconomic aim in the 2027 syllabus.</p>
        <p>The map shows <b>carbon dioxide emissions per person</b>. In 2023 the figure was 14.3 tonnes in the United States, 4.5 in the United Kingdom and 2.1 in India.</p>
        <p>Many governments now set a date for <b>net zero</b>. The UK made 2050 its legal target in 2019. India announced 2070 at the COP26 climate conference in 2021.</p>`,
      why: 'This is the newest aim, and it often conflicts with economic growth.',
      facts: [
        { text: 'CO₂ emissions per person, 2023: United States 14.3 t, United Kingdom 4.5 t, India 2.1 t.', src: CO2 },
        { text: 'The Climate Change Act 2008 (2050 Target Amendment) Order 2019 changed the UK\'s 2050 target from an 80% cut to net zero.', src: 'uk-netzero' },
        { text: 'India announced a net zero target for 2070 at COP26 in Glasgow on 1 November 2021.', src: 'india-2070' },
      ],
      check: { q: 'Give one criterion a government could set for environmental sustainability.', a: 'For example, a date for net zero emissions, such as 2050, or a target for emissions per person.' },
      syllabus: ['4.1.1'], sources: [CO2, 'uk-netzero', 'india-2070'],
    },
    {
      id: 'mp-a7', part: 'The six aims', date: '2025-06-30', dateLabel: 'Choosing aims',
      camera: { lat: 25, lon: 60, alt: 16000 },
      map: { borders: 'modern', data: { id: 'PCPIPCH', year: 2025 } },
      title: 'Choosing the aims and the criteria',
      body: `<p>Every government has the same six aims, but each one chooses which matter most at the time, and sets a <b>criterion</b> for each: a number that shows whether the aim has been met.</p>
        <p>The choice depends on the country's problems. A country with high inflation may put stable prices first. A country with high unemployment may put jobs first.</p>`,
      compare: { left: 'How it is measured', right: 'An example of a criterion', rows: [
        { k: 'Growth', l: 'Percentage change in real GDP', r: 'Around 5% a year (China, 2025)' },
        { k: 'Employment', l: 'Unemployment rate from a labour force survey', r: 'Unemployment below a set rate' },
        { k: 'Prices', l: 'Percentage change in the CPI', r: '2% (US, UK, euro area); 4% ± 2 (India)' },
        { k: 'Balance of payments', l: 'Current account as a % of GDP', r: 'A deficit no larger than a set share of GDP' },
        { k: 'Redistribution', l: 'Gini index, or the share of income going to the poorest', r: 'A lower Gini index over time' },
        { k: 'Environment', l: 'Emissions, for example CO₂ per person', r: 'Net zero by 2050 (UK law)' },
      ] },
      why: 'Exam questions often ask why a government might choose one aim over another: the answer is the country\'s current problem.',
      facts: [
        { text: 'Inflation targets: 2% in the United States since 2012; 4% with a band of 2% to 6% in India.', src: 'fed-2012' },
        { text: 'China\'s 2025 growth target was around 5%.', src: 'china-gwr' },
      ],
      check: { q: 'Why might a government with 20% inflation put stable prices ahead of economic growth?', a: 'High inflation reduces real incomes and makes planning hard, so bringing it down is the most urgent problem.' },
      syllabus: ['4.1.1'], sources: ['fed-2012', 'china-gwr', 'rbi-target'],
    },

    // ── Part 2: conflicts ───────────────────────────────────────────────────
    {
      id: 'mp-c1', part: 'Conflicts between aims', date: '2022-12-31', dateLabel: '2021 and 2022',
      camera: { lat: 39, lon: -97, alt: 6500 },
      map: { borders: 'modern', data: { id: 'PCPIPCH', years: [2021, 2022] }, focus: ['USA'] },
      title: 'Full employment against stable prices',
      body: `<p>In 2022 the United States was close to full employment. Unemployment was 3.7%. At the same time inflation reached <b>8.0%</b>.</p>
        <p>When nearly everyone has a job, firms compete for workers and wages rise. Households spend more. If spending grows faster than output, prices rise: <b>demand-pull inflation</b>.</p>
        <p>To bring inflation down, the central bank raised interest rates. That reduces spending, but it can also cost jobs. One aim is reached at the expense of the other.</p>`,
      chain: { title: 'Chain of analysis', steps: ['Unemployment falls close to full employment', 'Firms compete for scarce workers, so wages rise', 'Households have more to spend, so total demand rises', 'Demand grows faster than output can', 'Prices rise: demand-pull inflation'] },
      chart: { title: 'United States', source: WEO, series: [
        { label: 'Unemployment, %', ind: 'LUR', iso: 'USA', from: 2015, to: 2025 },
        { label: 'Inflation, %', ind: 'PCPIPCH', iso: 'USA', from: 2015, to: 2025 },
      ] },
      why: 'This is the first of the three conflicts named in the syllabus.',
      facts: [
        { text: 'United States, 2022: unemployment 3.7%, inflation 8.0%.', src: WEO },
        { text: 'The Federal Reserve\'s policy rate rose from 0.1% in December 2021 to 4.4% in December 2022.', src: BIS },
      ],
      check: { q: 'Why can policies that reduce inflation increase unemployment?', a: 'They reduce total demand, so firms sell less and need fewer workers.' },
      syllabus: ['4.1.1'], sources: [WEO, BIS],
    },
    {
      id: 'mp-c2', part: 'Conflicts between aims', date: '2023-12-31', dateLabel: '2000 to 2023',
      camera: { lat: 22, lon: 79, alt: 4800 },
      map: { borders: 'modern', data: { id: 'CO2_PC', years: [2000, 2010, 2023] }, focus: ['IND'] },
      title: 'Economic growth against environmental sustainability',
      body: `<p>India is one of the fastest-growing large economies. Real GDP grew by 7.3% in 2023.</p>
        <p>More output usually needs more energy. Much of it still comes from coal, so emissions per person in India rose from 0.9 tonnes in 2000 to 2.1 tonnes in 2023.</p>
        <p>The conflict is not fixed. Renewable energy and cleaner technology can allow growth with lower emissions. The UK's emissions per person roughly halved between 2000 and 2023 while its economy grew.</p>`,
      chart: { title: 'CO₂ emissions per person', source: CO2, unit: 'tonnes', series: [
        { label: 'India', ind: 'CO2_PC', iso: 'IND', from: 2000, to: 2023 },
        { label: 'United Kingdom', ind: 'CO2_PC', iso: 'GBR', from: 2000, to: 2023 },
      ] },
      why: 'A good evaluation explains what the conflict depends on, here the source of the extra energy.',
      facts: [
        { text: 'India: real GDP growth 7.3% (2023).', src: WEO },
        { text: 'CO₂ per person: India 0.9 t (2000) and 2.1 t (2023); United Kingdom 9.6 t (2000) and 4.5 t (2023).', src: CO2 },
      ],
      check: { q: 'Why does economic growth often increase emissions?', a: 'Producing more goods and services uses more energy and transport, and much energy still comes from fossil fuels.' },
      syllabus: ['4.1.1'], sources: [WEO, CO2],
    },
    {
      id: 'mp-c3', part: 'Conflicts between aims', date: '2022-12-31', dateLabel: '2021 and 2022',
      camera: { lat: 39, lon: 35, alt: 2600 },
      map: { borders: 'modern', data: { id: 'BCA_NGDPD', years: [2021, 2022] }, focus: ['TUR'] },
      title: 'Full employment against balance of payments stability',
      body: `<p>Türkiye's economy grew by 11.8% in 2021 and 5.4% in 2022. Unemployment fell from 12.0% to 10.4%.</p>
        <p>Over the same years its current account moved from a deficit of 0.9% of GDP to a deficit of <b>5.0%</b>. Households and firms with more income bought more imports, including energy, which became much more expensive in 2022.</p>`,
      chain: { steps: ['More people are in work', 'Total income rises', 'Households and firms spend more, including on imports', 'Imports grow faster than exports', 'The current account deficit widens'] },
      why: 'This is the third conflict in the syllabus. It shows that the balance of payments can worsen because the economy is doing well.',
      evaluation: ['How much of the extra spending goes on imports', 'Whether import prices, such as energy, are rising at the same time', 'Whether exports also grow'],
      facts: [
        { text: 'Türkiye: real GDP growth 11.8% (2021) and 5.4% (2022); unemployment 12.0% and 10.4%.', src: WEO },
        { text: 'Türkiye\'s current account balance: −0.9% of GDP (2021), −5.0% (2022).', src: WEO },
      ],
      check: { q: 'Explain why falling unemployment can widen a current account deficit.', a: 'More people in work means higher incomes and spending, and part of the extra spending goes on imports.' },
      syllabus: ['4.1.1'], sources: [WEO],
    },
    {
      id: 'mp-c4', part: 'Conflicts between aims', date: '2022-12-31', dateLabel: 'Judgement',
      camera: WORLD,
      map: { borders: 'modern', data: { id: 'PCPIPCH', year: 2022 } },
      title: 'Can a government achieve every aim at once?',
      body: `<p>This is a typical part (d) question. Use the cases so far to argue both sides, then reach a judgement.</p>`,
      judgement: {
        for: ['A supply-side improvement, such as better training, can raise output and lower unemployment without raising inflation.', 'Clean energy can allow growth without higher emissions.', 'Some years show several aims met together, for example low inflation and low unemployment in many countries in 2019.'],
        against: ['Low unemployment can push up wages and prices, as in the United States in 2022.', 'Faster growth usually raises emissions when energy comes from fossil fuels, as in India.', 'Higher incomes raise imports and can widen a current account deficit, as in Türkiye in 2022.'],
        verdict: 'In the short run a government usually has to choose, because most policies change total demand and move several aims at once. In the long run it is more possible, if supply-side policies raise the economy\'s capacity. It depends on the cause of the problem and how long the government can wait.',
      },
      why: 'Part (d) questions are marked in levels: Level 3 needs both sides analysed and a supported conclusion.',
      facts: [{ text: 'Inflation by country, 2022.', src: WEO }],
      check: { q: 'Name the three conflicts between aims in the syllabus.', a: 'Full employment and stable prices; economic growth and environmental sustainability; full employment and balance of payments stability.' },
      syllabus: ['4.1.1'], sources: [WEO, SYL],
    },

    // ── Part 3: fiscal policy ───────────────────────────────────────────────
    {
      id: 'mp-f1', part: 'Fiscal policy', date: '2019-12-31', dateLabel: '2019',
      camera: { lat: 25, lon: -20, alt: 15500 },
      map: { borders: 'modern', data: { id: 'GGXCNL_NGDP', year: 2019 }, focus: ['DEU', 'USA'] },
      title: 'The government budget',
      body: `<p>A <b>government budget</b> is the government's plan for its revenue and spending over a year.</p>
        <p>A <b>budget deficit</b> is when government spending is greater than government revenue. A <b>budget surplus</b> is when revenue is greater than spending.</p>
        <p>In 2019 Germany had a surplus of 1.3% of GDP. The United States had a deficit of 5.8% of GDP. On this map orange is a deficit and blue a surplus.</p>`,
      misconception: { wrong: 'A budget deficit and the national debt are the same thing.', right: 'The deficit is the gap between spending and revenue in one year. The debt is the total the government owes, built up from past deficits.' },
      why: 'You must be able to define all three terms exactly.',
      facts: [{ text: 'General government net lending or borrowing, % of GDP, 2019: Germany +1.3%, United States −5.8%.', src: WEO }],
      check: { q: 'Define a government budget surplus.', a: 'When government revenue is greater than government spending in a year.' },
      syllabus: ['4.2.1'], sources: [WEO],
    },
    {
      id: 'mp-f2', part: 'Fiscal policy', date: '2020-12-31', dateLabel: '2019 and 2020',
      camera: { lat: 40, lon: -35, alt: 10000 },
      map: { borders: 'modern', data: { id: 'GGXCNL_NGDP', years: [2019, 2020] }, focus: ['GBR', 'DEU', 'USA'] },
      title: 'The deficit wave of 2020',
      body: `<p>Scroll from 2019 to 2020. Almost every country turns orange.</p>
        <p>Two things happened together. <b>Revenue fell</b>, because people earned and spent less, so they paid less tax. <b>Spending rose</b>, because governments paid wages, supported firms and paid for health care.</p>
        <p>The UK's deficit grew from 2.4% of GDP to 12.9%. The United States reached 14.1%.</p>`,
      why: 'A recession widens a deficit automatically, even before a government decides anything.',
      evaluation: ['How long the extra spending lasts', 'How much of the support households save rather than spend', 'How large the government\'s debt already is'],
      facts: [{ text: 'Budget balance, % of GDP: United Kingdom −2.4% (2019) and −12.9% (2020); Germany +1.3% and −4.3%; United States −5.8% and −14.1%.', src: WEO }],
      check: { q: 'Give two reasons why budget deficits grew in 2020.', a: 'Tax revenue fell as incomes and spending fell, and government spending rose on support schemes and health care.' },
      syllabus: ['4.2.1', '4.2.6'], sources: [WEO],
    },
    {
      id: 'mp-f3', part: 'Fiscal policy', date: '2025-03-31', dateLabel: '2024–25',
      camera: { lat: 54, lon: -2.5, alt: 1900 },
      map: { borders: 'modern', data: { id: 'GGXCNL_NGDP', year: 2024 }, focus: ['GBR'] },
      title: 'Calculating a budget deficit',
      body: `<p>Budget balance = government revenue − government spending. A negative answer is a deficit.</p>
        <p>In October 2024 the UK's Office for Budget Responsibility forecast that in 2024–25 the government would receive <b>£1,148.7 billion</b> and spend <b>£1,276.2 billion</b>.</p>
        <p>£1,148.7bn − £1,276.2bn = <b>−£127.5bn</b>: a budget deficit of £127.5 billion.</p>
        <p><b>Try one.</b> A government receives $240 billion and spends $225 billion. What is its budget balance? (Answer: a surplus of $15 billion.)</p>`,
      why: 'The syllabus asks you to calculate the size of a deficit or surplus. Always state which one it is.',
      misconception: { wrong: 'A deficit of £127.5 billion means the government has run out of money.', right: 'It means the government borrows the difference, mostly by selling bonds.' },
      facts: [
        { text: 'OBR October 2024 forecast for 2024–25: receipts £1,148.7bn, spending £1,276.2bn, deficit £127.5bn.', src: 'obr-2024' },
        { text: 'UK budget balance in 2024, % of GDP, from the IMF.', src: WEO },
      ],
      check: { q: 'Revenue is $80bn and spending is $95bn. What is the budget balance?', a: 'A deficit of $15bn ($80bn − $95bn = −$15bn).' },
      syllabus: ['4.2.1'], sources: ['obr-2024', WEO],
    },
    {
      id: 'mp-f4', part: 'Fiscal policy', date: '2025-03-31', dateLabel: '2024–25',
      camera: { lat: 54, lon: -2.5, alt: 2200 },
      map: { borders: 'modern', markers: [{ at: [51.5, -0.13], label: 'London' }] },
      title: 'Where government money goes',
      body: `<p>In 2024–25 total UK public spending was about £1,290 billion. Roughly:</p>
        <p><b>Social protection</b> (pensions and benefits) about 30%. <b>Health</b> about 19%. <b>General public services</b>, including interest on debt, about 12%. <b>Education</b> about 9%. The rest went on defence, transport, police and other services.</p>
        <p>Each area has a reason and an effect. Spending on <b>education and health</b> makes workers more productive, which helps growth. <b>Benefits</b> redistribute income. <b>Infrastructure</b> such as roads lowers firms' costs.</p>`,
      compare: { left: 'Reason for spending', right: 'Possible effect', rows: [
        { k: 'Education', l: 'A merit good that is under-consumed', r: 'A more skilled workforce and higher productivity' },
        { k: 'Health care', l: 'A merit good; a healthy workforce', r: 'Fewer days lost to illness; longer working lives' },
        { k: 'Benefits', l: 'Reduce poverty', r: 'Redistributes income; keeps spending up in a recession' },
        { k: 'Infrastructure', l: 'Private firms may not provide it', r: 'Lower transport costs; jobs while it is built' },
        { k: 'Defence', l: 'A public good', r: 'Security; an opportunity cost for other services' },
      ] },
      why: 'The syllabus asks for the main areas of spending and the reasons for and effects of each.',
      facts: [
        { text: 'Total managed expenditure in 2024–25 was £1,290.6bn (HM Treasury, Public spending statistics, May 2026).', src: 'hmt-pss' },
        { text: 'Shares of UK spending by function: social protection about 30%, health about 19%, general public services including debt interest about 12%, education about 9%.', src: 'commons-spending' },
      ],
      check: { q: 'Explain one reason why a government spends on education.', a: 'Education is a merit good that would be under-consumed, and a more skilled workforce raises productivity and growth.' },
      syllabus: ['4.2.2'], sources: ['hmt-pss', 'commons-spending'],
    },
    {
      id: 'mp-f5', part: 'Fiscal policy', date: '2015-12-31', dateLabel: '2014 and 2015',
      camera: { lat: -2.5, lon: 117, alt: 5200 },
      map: { borders: 'modern', data: { id: 'NGDP_RPCH', years: [2014, 2015] }, focus: ['IDN'] },
      title: 'Changing what the money is spent on',
      body: `<p>In 2014 about a fifth of Indonesia's government budget went on keeping fuel prices low. In November 2014 the new government raised fuel prices and cut the subsidy.</p>
        <p>Spending on fuel subsidies fell from about Rp 240 trillion in 2014 to about Rp 65 trillion in 2015. The government moved much of the money to <b>infrastructure</b>: capital spending in the revised 2015 budget was about Rp 276 trillion, roughly double.</p>
        <p>The opportunity cost of a subsidy is everything else the money could pay for.</p>`,
      why: 'Spending decisions have opportunity costs, and the same budget can be used for very different aims.',
      evaluation: ['Whether the infrastructure is actually built on time', 'How poorer households cope with higher fuel prices', 'Whether world oil prices stay low'],
      facts: [
        { text: 'Indonesia\'s fuel subsidy budget fell from Rp 239.99 trillion (2014) to Rp 64.68 trillion (2015).', src: 'idn-ums' },
        { text: 'Capital spending in Indonesia\'s revised 2015 budget was about Rp 276 trillion, roughly double.', src: 'idn-jp' },
      ],
      check: { q: 'What is the opportunity cost of a fuel subsidy?', a: 'The next best alternative the money could have paid for, such as roads, schools or hospitals.' },
      syllabus: ['4.2.2'], sources: ['idn-ums', 'idn-jp', WEO],
    },
    {
      id: 'mp-f6', part: 'Fiscal policy', date: '2020-07-01', dateLabel: 'Six taxes',
      camera: { lat: 45, lon: -20, alt: 9500 },
      map: { borders: 'modern', markers: [
        { at: [59.33, 18.07], label: 'Sweden: carbon tax' }, { at: [51.5, -0.13], label: 'UK: sugar levy' },
        { at: [52.52, 13.4], label: 'Germany: VAT cut' }, { at: [38.9, -77.04], label: 'US: tariffs' },
      ] },
      title: 'Six reasons for taxation',
      body: `<p>Taxes are not only for raising money. The syllabus lists six reasons. Each case below is a real tax.</p>`,
      cascade: [
        { when: 'Every year', country: 'United Kingdom', how: 'Raising revenue: income tax is the largest single source of UK government revenue.', src: 'obr-2024' },
        { when: '2018', country: 'United Kingdom', how: 'Discouraging demerit goods: the Soft Drinks Industry Levy charges 18p or 24p a litre on sugary drinks.', src: 'sdil-bmc' },
        { when: '2018', country: 'United States', how: 'Reducing imports: safeguard tariffs of 20% to 50% on imported washing machines.', src: 'us-201' },
        { when: '2024–25', country: 'United Kingdom', how: 'Redistributing income: income tax rises from 0% to 20%, 40% and 45% as income rises.', src: 'gov-tax' },
        { when: '2020', country: 'Germany', how: 'Influencing total demand: VAT cut from 19% to 16% for six months to encourage spending.', src: 'de-vat' },
        { when: '1991', country: 'Sweden', how: 'Environmental sustainability: a carbon tax on fossil fuels, now one of the highest rates in the world.', src: 'swe-tf' },
      ],
      why: 'Exam questions may ask you to explain any of the six reasons, so learn one example of each.',
      facts: [
        { text: 'The Soft Drinks Industry Levy began in April 2018: 18p a litre for drinks with 5–8 g of sugar per 100 ml and 24p above 8 g.', src: 'sdil-bmc' },
        { text: 'US safeguard tariffs on large residential washers took effect on 7 February 2018: 20% on the first 1.2 million units and 50% above that.', src: 'us-201' },
        { text: 'Germany cut VAT from 19% to 16% (and 7% to 5%) from 1 July to 31 December 2020.', src: 'de-vat' },
        { text: 'Sweden introduced its carbon tax in 1991 at SEK 250 a tonne of CO₂; it was SEK 1,190 a tonne in 2020.', src: 'swe-tf' },
      ],
      check: { q: 'Which reason for taxation does a tax on cigarettes show?', a: 'Discouraging the consumption of a demerit good.' },
      syllabus: ['4.2.3'], sources: ['obr-2024', 'gov-tax', 'sdil-bmc', 'us-201', 'de-vat', 'swe-tf'],
    },
    {
      id: 'mp-f7', part: 'Fiscal policy', date: '2024-04-06', dateLabel: 'Worked example',
      camera: { lat: 54, lon: -2.5, alt: 1900 },
      map: { borders: 'modern', markers: [{ at: [51.5, -0.13], label: 'London' }] },
      title: 'Progressive, proportional and regressive taxes',
      body: `<p>The difference is what happens to the <b>percentage of income</b> paid in tax as income rises.</p>
        <p>A <b>progressive tax</b> takes a larger percentage from higher incomes. UK income tax in 2024–25: the first £12,570 is tax-free, then 20% up to £50,270 and 40% above that. On £20,000 the tax is £1,486, which is 7.4% of income. On £60,000 it is £11,432, or 19.1%.</p>
        <p>A <b>proportional tax</b> takes the same percentage from everyone, for example a flat 10% on all income.</p>
        <p>A <b>regressive tax</b> takes a larger percentage from lower incomes. A household on £20,000 that spends £500 on a product with a £100 tax pays 0.5% of its income. A household on £60,000 buying the same product pays 0.17%.</p>`,
      misconception: { wrong: 'A progressive tax is one where rich people pay more money.', right: 'Under a proportional tax the rich also pay more money. A progressive tax takes a larger percentage of their income.' },
      why: 'Classification questions are about percentages, so always show the percentage of income.',
      facts: [
        { text: 'UK income tax 2024–25 (outside Scotland): personal allowance £12,570; basic rate 20% to £50,270; higher rate 40% to £125,140; additional rate 45% above.', src: 'gov-tax' },
        { text: 'Worked figures: (£20,000 − £12,570) × 20% = £1,486; (£50,270 − £12,570) × 20% + (£60,000 − £50,270) × 40% = £7,540 + £3,892 = £11,432.', src: 'gov-tax' },
      ],
      check: { q: 'A tax takes 10% of a $10,000 income and 10% of a $50,000 income. Which type is it?', a: 'Proportional: the percentage is the same at both incomes.' },
      syllabus: ['4.2.3'], sources: ['gov-tax', 'litrg'],
    },
    {
      id: 'mp-f8', part: 'Fiscal policy', date: '2024-04-06', dateLabel: 'Classifying taxes',
      camera: { lat: 50, lon: 5, alt: 6000 },
      map: { borders: 'modern', data: { id: 'GGXCNL_NGDP', year: 2024 } },
      title: 'Direct and indirect taxes, and who they affect',
      body: `<p>A <b>direct tax</b> is a tax on income or wealth, paid straight to the government by the person who earns it: income tax, corporation tax.</p>
        <p>An <b>indirect tax</b> is a tax on spending. It is collected by the seller and passed on in the price: VAT, excise duties on fuel and tobacco.</p>
        <p>Every tax affects several groups at once.</p>`,
      compare: { left: 'Income tax rises', right: 'VAT rises', rows: [
        { k: 'Consumers', l: 'Less disposable income to spend', r: 'Higher prices, so lower real income' },
        { k: 'Workers', l: 'Keep less of each extra pound, which may reduce the incentive to work', r: 'Wages buy less' },
        { k: 'Firms', l: 'Lower sales if households spend less', r: 'Lower demand; some of the tax may be absorbed in lower profit' },
        { k: 'Government', l: 'More revenue, more redistribution', r: 'More revenue, but a regressive effect' },
        { k: 'Economy', l: 'Lower total demand', r: 'Lower total demand; a one-off rise in the price level' },
      ] },
      why: 'Questions on the impact of a tax expect you to name the group and the effect on it.',
      facts: [{ text: 'Budget balance by country, 2024, % of GDP.', src: WEO }],
      check: { q: 'Is VAT a direct or an indirect tax? Explain.', a: 'Indirect: it is a tax on spending, collected by sellers and passed on in prices.' },
      syllabus: ['4.2.3'], sources: [WEO, 'gov-tax'],
    },
    {
      id: 'mp-f9', part: 'Fiscal policy', date: '2020-06-03', dateLabel: 'Fiscal policy',
      camera: { lat: 30, lon: 0, alt: 15000 },
      map: { borders: 'modern', data: { id: 'GGXCNL_NGDP', year: 2020 } },
      title: 'What fiscal policy is',
      body: `<p><b>Fiscal policy</b> is the use of government spending and taxation to influence the economy.</p>
        <p><b>Expansionary fiscal policy</b> means higher spending or lower taxes. It raises total demand and is used against unemployment and recession.</p>
        <p><b>Contractionary fiscal policy</b> means lower spending or higher taxes. It reduces total demand and is used against inflation or to reduce a deficit.</p>`,
      chain: { title: 'Expansionary fiscal policy', steps: ['The government cuts income tax or raises spending', 'Households have more disposable income, or the government buys more', 'Total demand rises', 'Firms produce more and hire more workers', 'Output grows and unemployment falls, but prices may rise'] },
      misconception: { wrong: 'Fiscal policy is only about taxes.', right: 'Fiscal policy covers both taxation and government spending.' },
      why: 'You must be able to define fiscal policy and name its two measures.',
      facts: [{ text: 'Budget balance by country, 2020, % of GDP.', src: WEO }],
      check: { q: 'Name the two measures of fiscal policy.', a: 'Changes in taxes and changes in government spending.' },
      syllabus: ['4.2.4', '4.2.5'], sources: [WEO, SYL],
    },
    {
      id: 'mp-f10', part: 'Fiscal policy', date: '2021-09-30', dateLabel: '2019 to 2021',
      camera: { lat: 52, lon: 4, alt: 3200 },
      map: { borders: 'modern', data: { id: 'LUR', years: [2019, 2020, 2021] }, focus: ['GBR', 'DEU'] },
      title: 'Paying wages to save jobs, 2020',
      body: `<p>In 2020 the UK government paid <b>80% of the wages</b> of workers whose employers could not use them, up to £2,500 a month. The scheme ran until 30 September 2021 and supported 11.7 million jobs, at a cost of about £70 billion.</p>
        <p>Germany used its existing <b>Kurzarbeit</b> scheme. In April 2020 about 6 million workers received short-time work pay.</p>
        <p>GDP fell sharply in both countries, but unemployment rose only a little: from 3.8% to 4.6% in the UK and from 3.0% to 3.6% in Germany.</p>`,
      chart: { title: 'United Kingdom', source: WEO, marks: [{ x: 2020, label: '2020' }], series: [
        { label: 'Unemployment, %', ind: 'LUR', iso: 'GBR', from: 2015, to: 2024 },
        { label: 'Budget balance, % of GDP', ind: 'GGXCNL_NGDP', iso: 'GBR', from: 2015, to: 2024 },
      ] },
      why: 'This shows expansionary fiscal policy protecting the full employment aim, at the cost of a much larger deficit.',
      evaluation: ['Whether the jobs would have survived anyway', 'The cost to the budget and future debt', 'Whether it kept workers in firms that would close later'],
      facts: [
        { text: 'The UK Coronavirus Job Retention Scheme paid 80% of wages up to £2,500 a month and closed on 30 September 2021. It supported 11.7 million jobs at 1.3 million employers; claims totalled £70 billion.', src: 'cjrs' },
        { text: 'About 6 million workers in Germany received short-time work pay in April 2020, against a previous record of 1.44 million in May 2009.', src: 'kurzarbeit' },
        { text: 'Unemployment: UK 3.8% (2019) and 4.6% (2020); Germany 3.0% and 3.6%.', src: WEO },
      ],
      check: { q: 'Which macroeconomic aim did the furlough scheme help, and which did it make harder to reach?', a: 'It helped full employment, but it widened the budget deficit.' },
      syllabus: ['4.2.5', '4.2.6'], sources: ['cjrs', 'kurzarbeit', WEO],
    },
    {
      id: 'mp-f11', part: 'Fiscal policy', date: '2013-12-31', dateLabel: '2010 to 2013',
      camera: { lat: 38.6, lon: 22.5, alt: 1500 },
      map: { borders: 'modern', data: { id: 'LUR', years: [2010, 2013] }, focus: ['GRC'] },
      title: 'Greece: cutting a deficit in a recession',
      body: `<p>In 2009 Greece had a very large deficit and debt of 128.5% of GDP. Lenders would no longer lend at affordable rates. From 2010 Greece received three rescue loans from European governments and the IMF: €110 billion, then €172.6 billion, then €86 billion.</p>
        <p>In return it raised taxes and cut spending: <b>contractionary fiscal policy</b>. The deficit shrank, but total demand fell. Real GDP fell every year from 2009 to 2013, and unemployment rose from 7.8% in 2008 to <b>27.5%</b> in 2013.</p>`,
      chart: { title: 'Greece', source: WEO, series: [
        { label: 'Unemployment, %', ind: 'LUR', iso: 'GRC', from: 2007, to: 2019 },
        { label: 'Budget balance, % of GDP', ind: 'GGXCNL_NGDP', iso: 'GRC', from: 2007, to: 2019 },
      ] },
      judgement: {
        for: ['Without the loans, Greece could not have paid its bills or its debts.', 'By 2016 the budget was in surplus, and growth returned from 2014.'],
        against: ['Cutting spending in a recession reduced demand further, so output and jobs fell.', 'Debt as a share of GDP rose to 164.3% in 2012, because GDP fell.'],
        verdict: 'Contractionary policy reduced the deficit but made the recession deeper. How harmful it is depends on how fast it is done and on the state of the economy when it starts.',
      },
      why: 'A case where two aims, a smaller deficit and full employment, pulled in opposite directions.',
      facts: [
        { text: 'Greece: unemployment 7.8% (2008) and 27.5% (2013); government debt 128.5% of GDP (2009) and 164.3% (2012).', src: WEO },
        { text: 'Greece received three programmes: €110bn (2010), €172.6bn (2012) and €86bn (2015). The last ended in August 2018.', src: 'grc-eca' },
        { text: 'Greece returned to GDP growth in 2014 for the first time since 2007.', src: 'grc-esm' },
      ],
      check: { q: 'Why did Greek unemployment rise when the government cut its spending?', a: 'Lower spending and higher taxes reduced total demand, so firms produced less and employed fewer workers.' },
      syllabus: ['4.2.5', '4.2.6'], sources: [WEO, 'grc-eca', 'grc-esm'],
    },
    {
      id: 'mp-f12', part: 'Fiscal policy', date: '2024-12-31', dateLabel: '2024',
      camera: { lat: 30, lon: 60, alt: 16000 },
      map: { borders: 'modern', data: { id: 'GGXWDG_NGDP', year: 2024 }, focus: ['JPN', 'USA'] },
      title: 'How well does fiscal policy work?',
      body: `<p>Fiscal policy can change total demand quickly when the money is spent at once, as in 2020. But it has limits.</p>
        <p>The map shows government debt in 2024. Japan's was 213.6% of GDP and the United States' 122.3%. Every deficit adds to the debt, and interest must be paid on it.</p>`,
      evaluation: ['Time lags: new spending must be planned and approved, and some projects take years', 'The size of the debt and the cost of interest', 'Whether households spend a tax cut or save it', 'Political pressure: tax rises and spending cuts are unpopular', 'The effect on other aims, such as inflation and imports'],
      why: 'Part (d) questions on fiscal policy need these limits for the "on the other hand" side.',
      facts: [{ text: 'General government gross debt, % of GDP, 2024: Japan 213.6%, United States 122.3%.', src: WEO }],
      check: { q: 'Give one reason why a tax cut may not increase total demand.', a: 'Households may save the extra income instead of spending it, for example if they are worried about the future.' },
      syllabus: ['4.2.6'], sources: [WEO],
    },

    // ── Part 4: monetary policy ─────────────────────────────────────────────
    {
      id: 'mp-m1', part: 'Monetary policy', date: '2021-12-31', dateLabel: 'Monetary policy',
      camera: { lat: 40, lon: -20, alt: 14000 },
      map: { borders: 'modern', spikes: { id: 'POLICY_RATE', month: '2021-12' }, markers: [
        { at: [38.9, -77.04], label: 'Federal Reserve' }, { at: [51.51, -0.09], label: 'Bank of England' }, { at: [50.11, 8.68], label: 'European Central Bank' },
      ] },
      title: 'Money supply and monetary policy',
      body: `<p>The <b>money supply</b> is the total amount of money in an economy: notes and coins, and bank deposits.</p>
        <p><b>Monetary policy</b> is the use of interest rates, the money supply and the exchange rate to influence the economy. In most countries it is run by the <b>central bank</b>.</p>
        <p>The needles show each central bank's policy rate in December 2021. Almost all were close to zero.</p>`,
      why: 'You need both definitions and the three measures: interest rate, money supply and exchange rate.',
      facts: [{ text: 'Central bank policy rates, December 2021: United States 0.1%, United Kingdom 0.3%.', src: BIS }],
      check: { q: 'Name the three measures of monetary policy.', a: 'Changes in the interest rate, the money supply and the foreign exchange rate.' },
      syllabus: ['4.3.1', '4.3.2'], sources: [BIS, SYL],
    },
    {
      id: 'mp-m2', part: 'Monetary policy', date: '2023-07-31', dateLabel: 'December 2021 to July 2023',
      camera: { lat: 38, lon: -40, alt: 13000 },
      map: { borders: 'modern', data: { id: 'PCPIPCH', year: 2022 }, spikes: { id: 'POLICY_RATE', years: ['2021-12', '2022-06', '2022-12', '2023-07'] }, focus: ['USA', 'GBR'] },
      title: 'Interest rates rise around the world',
      body: `<p>As inflation rose in 2022, central banks raised interest rates. Watch the needles grow as the months pass.</p>
        <p>The US policy rate went from 0.1% in December 2021 to 4.4% in December 2022 and 5.4% by July 2023. In the UK it went from 0.1% to 5.3%.</p>`,
      chain: { title: 'How a higher interest rate lowers inflation', steps: ['The central bank raises its interest rate', 'Borrowing costs more and saving earns more', 'Households and firms borrow and spend less', 'Total demand falls', 'Firms raise prices more slowly: inflation falls, but output and jobs may fall too'] },
      chart: { title: 'Central bank policy rate', source: BIS, unit: '%', series: [
        { label: 'United States', ind: 'POLICY_RATE', iso: 'USA', from: '2020-01', to: '2024-12' },
        { label: 'United Kingdom', ind: 'POLICY_RATE', iso: 'GBR', from: '2020-01', to: '2024-12' },
      ] },
      why: 'This is the main way monetary policy works, and the chain is what examiners look for in part (c).',
      facts: [
        { text: 'Policy rate: United States 0.1% (December 2021), 4.4% (December 2022), 5.4% (July 2023); United Kingdom 0.1% (November 2021) and 5.3% (August 2023).', src: BIS },
        { text: 'The Federal Reserve raised its target range to 4.25% to 4.50% on 14 December 2022, the seventh rise that year.', src: 'fed-2022' },
      ],
      check: { q: 'Why does a higher interest rate reduce consumer spending?', a: 'Borrowing is more expensive and saving is more rewarding, so households borrow less and save more.' },
      syllabus: ['4.3.2', '4.3.3'], sources: [BIS, 'fed-2022', WEO],
    },
    {
      id: 'mp-m3', part: 'Monetary policy', date: '2022-10-21', dateLabel: '2022',
      camera: { lat: 38, lon: -170, alt: 21000 },
      map: { borders: 'modern', spikes: { id: 'POLICY_RATE', month: '2022-10' }, focus: ['USA', 'JPN'],
        flows: [{ from: 'JPN', to: 'USA', kind: 'capital', label: 'Money moves to higher US interest rates' }] },
      title: 'Interest rates and the exchange rate: the yen in 2022',
      body: `<p>While US interest rates rose in 2022, the Bank of Japan kept its rate at −0.1%. Saving in US dollars now earned far more than saving in yen.</p>
        <p>Investors sold yen to buy dollars. The yen fell to <b>151.94 per dollar</b> on 21 October 2022, its lowest in 32 years. Japan's government spent more than ¥9 trillion buying yen to slow the fall.</p>`,
      chain: { globe: 2, steps: ['US interest rates rise; Japan\'s stay below zero', 'Saving in dollars earns more than saving in yen', 'Money flows from Japan into US assets', 'Demand for dollars rises and demand for yen falls', 'The dollar appreciates and the yen depreciates'] },
      why: 'Interest rates also move the exchange rate, which changes the price of imports and exports.',
      facts: [
        { text: 'Policy rates, October 2022: Japan −0.1%, United States 3.1%.', src: BIS },
        { text: 'The yen reached a 32-year low of 151.94 per US dollar on 21 October 2022. Japan bought yen on 22 September (¥2.84 trillion), 21 October (¥5.62 trillion) and 24 October (¥0.73 trillion).', src: 'yen-kitco' },
        { text: 'The September 2022 operation was Japan\'s first yen-buying intervention in 24 years.', src: 'yen-jcer' },
      ],
      check: { q: 'What happens to a currency when its interest rate rises compared with other countries?', a: 'It tends to appreciate, because more people want to save in it.' },
      syllabus: ['4.3.2', '4.3.3'], sources: [BIS, 'yen-kitco', 'yen-jcer'],
    },
    {
      id: 'mp-m4', part: 'Monetary policy', date: '2010-01-31', dateLabel: '2009 to 2021',
      camera: { lat: 54, lon: -2.5, alt: 1900 },
      map: { borders: 'modern', data: { id: 'NGDP_RPCH', years: [2009, 2010] }, focus: ['GBR'] },
      title: 'Changing the money supply: quantitative easing',
      body: `<p>When interest rates are already close to zero, a central bank can increase the <b>money supply</b> directly. This is called <b>quantitative easing</b> (QE).</p>
        <p>The central bank creates new money and uses it to buy government bonds from banks and investors. They then have more money to lend and spend.</p>
        <p>Between March 2009 and January 2010 the Bank of England bought £200 billion of assets, about 14% of UK GDP. By 2020–21 its total target had reached £895 billion.</p>`,
      why: 'QE is the main example of the money supply measure in the syllabus.',
      misconception: { wrong: 'Quantitative easing means printing banknotes and handing them out.', right: 'The central bank creates money electronically and uses it to buy bonds, mainly from banks and investors.' },
      facts: [
        { text: 'From March 2009 to January 2010 the Bank of England bought £200 billion of assets, around 14% of annual GDP.', src: 'boe-qe' },
        { text: 'In November 2020 the Bank of England raised its total target for asset purchases to £895 billion (£875 billion of gilts and £20 billion of corporate bonds).', src: 'boe-apf' },
      ],
      check: { q: 'Why might a central bank use QE instead of cutting the interest rate?', a: 'The interest rate is already close to zero, so it cannot be cut much further.' },
      syllabus: ['4.3.2'], sources: ['boe-qe', 'boe-apf', WEO],
    },
    {
      id: 'mp-m5', part: 'Monetary policy', date: '2015-01-15', dateLabel: '2011 to 2015',
      camera: { lat: 46.8, lon: 8.2, alt: 950 },
      map: { borders: 'modern', data: { id: 'PCPIPCH', years: [2011, 2015] }, focus: ['CHE'] },
      title: 'Changing the exchange rate: the Swiss franc',
      body: `<p>In 2011 investors bought Swiss francs as a safe place for their money. The franc rose so fast that Swiss exports became expensive and prices in Switzerland started to fall.</p>
        <p>On 6 September 2011 the Swiss National Bank set a <b>minimum exchange rate</b> of 1.20 francs per euro. It sold francs and bought euros whenever the franc rose too far.</p>
        <p>It kept the floor for more than three years. On 15 January 2015 it ended it, because holding it needed ever larger purchases. The franc jumped at once.</p>`,
      why: 'This is the foreign exchange rate measure in the syllabus: a central bank buying and selling currency to change its price.',
      evaluation: ['How much foreign currency the central bank is willing to buy', 'Whether the pressure on the currency is temporary', 'The effect on inflation: Swiss prices fell by 1.1% in 2015'],
      facts: [
        { text: 'The SNB held a minimum rate of CHF 1.20 per euro from 6 September 2011 to 15 January 2015, and cut its deposit rate to −0.75% when it ended it.', src: 'snb-bis' },
        { text: 'Inflation in Switzerland: 0.2% (2011), −1.1% (2015).', src: WEO },
      ],
      check: { q: 'How can a central bank stop its currency from rising?', a: 'By selling its own currency and buying foreign currency, which increases the supply of its currency.' },
      syllabus: ['4.3.2', '4.3.3'], sources: ['snb-bis', 'snb-2015', WEO],
    },
    {
      id: 'mp-m6', part: 'Monetary policy', date: '2022-11-30', dateLabel: '2021 to 2023',
      camera: { lat: 39, lon: 35, alt: 2600 },
      map: { borders: 'modern', data: { id: 'PCPIPCH', years: [2021, 2022, 2023] }, focus: ['TUR'] },
      title: 'Cutting interest rates while inflation rises',
      body: `<p>In September 2021 Türkiye's central bank began cutting its interest rate, from 19% in August to <b>14%</b> by December, although inflation was already about 20%.</p>
        <p>The lira lost about 44% of its value against the dollar in 2021. Imports became much more expensive. Inflation reached <b>85.5%</b> in October 2022.</p>
        <p>From June 2023 the central bank changed course and raised the rate, reaching 50% by March 2024.</p>`,
      chart: { title: 'Türkiye', note: 'Policy rate: BIS. Inflation: IMF.', series: [
        { label: 'Policy rate, %', ind: 'POLICY_RATE', iso: 'TUR', from: '2020-01', to: '2024-12' },
        { label: 'Inflation, %', ind: 'PCPIPCH', iso: 'TUR', from: 2020, to: 2024 },
      ] },
      misconception: { wrong: 'Lower interest rates reduce firms\' costs, so they always bring inflation down.', right: 'Lower rates raise borrowing and spending, and can weaken the currency, which raises import prices. Both push inflation up.' },
      why: 'A real case where monetary policy pulled against the stable prices aim.',
      facts: [
        { text: 'Türkiye\'s policy rate: 19% (August 2021), 14% (December 2021), 9% (November 2022), 50% (March 2024).', src: BIS },
        { text: 'Annual inflation in Türkiye reached 85.51% in October 2022, the highest since 1998.', src: 'tur-infl' },
        { text: 'The central bank cut its policy rate by a total of 500 basis points between September and December 2021.', src: 'tcmb-2021' },
      ],
      check: { q: 'Explain how a weaker currency can raise inflation.', a: 'Imports cost more in the home currency, so firms that use imported materials and fuel raise their prices.' },
      syllabus: ['4.3.2', '4.3.3'], sources: [BIS, 'tur-infl', 'tcmb-2021', WEO],
    },
    {
      id: 'mp-m7', part: 'Monetary policy', date: '2024-12-31', dateLabel: 'Evaluation',
      camera: { lat: 25, lon: 30, alt: 16000 },
      map: { borders: 'modern', spikes: { id: 'POLICY_RATE', month: '2024-12' } },
      title: 'How well does monetary policy work?',
      body: `<p>Central banks can change interest rates quickly, often at a monthly meeting. But the effect on spending and prices takes time, often a year or more.</p>`,
      evaluation: ['Time lags between a rate change and its effect on prices', 'Confidence: if firms expect a recession, cheap loans may not make them invest', 'How much households and firms have borrowed at variable rates', 'The cause of inflation: higher rates do little about a rise in world oil prices', 'Other countries\' policies, which move the exchange rate'],
      judgement: {
        for: ['Rates can be changed quickly and in small steps.', 'An independent central bank with a clear target makes people expect low inflation.'],
        against: ['The full effect may take more than a year.', 'Raising rates to cut inflation can cause unemployment, as in the first conflict.'],
        verdict: 'Monetary policy is good at reducing demand-pull inflation over time. It is weaker when the cause of inflation is on the supply side, or when confidence is very low.',
      },
      why: 'The evaluation points here are the "it depends on" you need for part (d).',
      facts: [{ text: 'Central bank policy rates, December 2024.', src: BIS }],
      check: { q: 'Give one reason why an interest rate cut may not increase investment.', a: 'Firms may lack confidence that demand will rise, so they do not want to borrow even at a lower rate.' },
      syllabus: ['4.3.3'], sources: [BIS],
    },

    // ── Part 5: supply-side policy ──────────────────────────────────────────
    {
      id: 'mp-s1', part: 'Supply-side policy', date: '2025-12-31', dateLabel: 'Supply-side policy',
      camera: WORLD,
      map: { borders: 'modern', data: { id: 'NGDP_RPCH', year: 2025 } },
      title: 'What supply-side policy is',
      body: `<p><b>Supply-side policy</b> is the use of measures that aim to increase the quantity or quality of the factors of production, so the economy can produce more.</p>
        <p>Fiscal and monetary policy mostly change <b>total demand</b>. Supply-side policy changes how much the economy is <b>able</b> to produce. On a production possibility curve, it shifts the whole curve outwards.</p>
        <p>The syllabus lists seven measures: education and training, infrastructure spending, labour market reforms, lower direct taxes, deregulation, improving incentives to work and invest, and privatisation.</p>`,
      why: 'If productive capacity grows, output can rise without pushing up prices, so several aims can be met at once.',
      misconception: { wrong: 'Supply-side policies work quickly.', right: 'Most take years: training a worker or building a railway takes time.' },
      facts: [{ text: 'Real GDP growth by country, 2025.', src: WEO }],
      check: { q: 'How is supply-side policy different from fiscal policy?', a: 'It aims to increase the economy\'s capacity to produce, rather than total demand.' },
      syllabus: ['4.4.1', '4.4.2'], sources: [WEO, SYL],
    },
    {
      id: 'mp-s2', part: 'Supply-side policy', date: '2016-01-01', dateLabel: '2016',
      camera: { lat: 1.35, lon: 103.8, alt: 900 },
      map: { borders: 'modern', data: { id: 'LUR', year: 2024 }, focus: ['SGP'] },
      title: 'Education and training: SkillsFuture',
      body: `<p>From January 2016 every Singapore citizen aged 25 or over received a <b>S$500 SkillsFuture Credit</b> to spend on approved courses, about 2.5 million people. At the start, 10,000 courses could be paid for with it.</p>
        <p>The aim is to keep workers' skills up to date as jobs change. Better skills raise <b>labour productivity</b> and help workers move into new jobs.</p>`,
      why: 'Training improves the quality of labour, one of the factors of production.',
      evaluation: ['Whether people use the credit for useful courses', 'How long it takes for skills to raise output', 'The cost to the government, an opportunity cost'],
      facts: [
        { text: 'The SkillsFuture Credit of S$500 became available to Singapore citizens aged 25 and above from 1 January 2016.', src: 'skills-ssg' },
        { text: 'About 2.5 million Singaporeans were eligible for the first credit.', src: 'skills-pmo' },
      ],
      check: { q: 'How can training reduce structural unemployment?', a: 'It gives workers the skills that growing industries need, so they can move into new jobs.' },
      syllabus: ['4.4.2', '4.4.3'], sources: ['skills-ssg', 'skills-pmo', WEO],
    },
    {
      id: 'mp-s3', part: 'Supply-side policy', date: '2024-03-31', dateLabel: '2022 to 2024',
      camera: { lat: 22, lon: 79, alt: 4300 },
      map: { borders: 'modern', data: { id: 'NGDP_RPCH', years: [2022, 2023, 2024] }, focus: ['IND'] },
      title: 'Infrastructure spending: India',
      body: `<p>India's 2023–24 budget raised the central government's capital spending by 33% to about <b>Rs 10 lakh crore</b> (Rs 10 trillion), 3.3% of GDP. The biggest increases were for railways and roads.</p>
        <p>Better transport cuts the time and cost of moving goods and people, so firms can produce and sell more. While it is built, it also creates jobs and adds to total demand.</p>`,
      why: 'Infrastructure spending is new in the 2027 syllabus as a supply-side measure.',
      evaluation: ['Whether projects are finished on time and on budget', 'How it is paid for: more borrowing or less spending elsewhere', 'Whether private firms invest more as a result'],
      facts: [
        { text: 'India\'s 2023–24 Union Budget raised capital expenditure by 33% to Rs 10 lakh crore, 3.3% of GDP, with the largest rises for railways and roads.', src: 'ind-capex' },
        { text: 'The RBI said the capital spending could take India\'s real GDP growth close to 7% in 2023–24 if it was implemented effectively.', src: 'ind-rbi' },
        { text: 'India\'s real GDP growth: 7.6% (2022), 7.3% (2023), 7.2% (2024).', src: WEO },
      ],
      check: { q: 'Explain one way better roads can increase a country\'s productive capacity.', a: 'Lower transport costs and shorter journeys let firms produce and deliver more with the same resources.' },
      syllabus: ['4.4.2', '4.4.3'], sources: ['ind-capex', 'ind-rbi', WEO],
    },
    {
      id: 'mp-s4', part: 'Supply-side policy', date: '2015-12-31', dateLabel: '2005 to 2015',
      camera: { lat: 51, lon: 10.4, alt: 1700 },
      map: { borders: 'modern', data: { id: 'LUR', years: [2005, 2010, 2015] }, focus: ['DEU'] },
      title: 'Labour market reforms: Germany\'s Hartz reforms',
      body: `<p>Between 2003 and 2005 Germany reformed its labour market. The <b>Hartz reforms</b> merged job centres, cut how long people could claim higher unemployment benefits, and made it easier to take part-time and low-paid jobs.</p>
        <p>Unemployment fell from 11.0% in 2005 to 4.4% in 2015.</p>`,
      chart: { title: 'Germany', source: WEO, series: [{ label: 'Unemployment, %', ind: 'LUR', iso: 'DEU', from: 2000, to: 2019 }] },
      judgement: {
        for: ['Unemployment fell steadily after the reforms took effect in 2005.', 'Studies find that people spent less time unemployed after the reforms.'],
        against: ['Wages in Germany had been rising slowly since the 1990s, which also helped firms hire.', 'Strong exports in the 2000s raised demand for German goods.', 'Many of the new jobs were low-paid or part-time.'],
        verdict: 'The reforms probably helped, but they were not the only cause. Economists still disagree about how much of the fall they explain.',
      },
      why: 'A real case where the effect of a supply-side policy is hard to separate from other causes, which is good material for evaluation.',
      facts: [
        { text: 'German unemployment: 11.0% (2005), 6.6% (2010), 4.4% (2015).', src: WEO },
        { text: 'Research finds the reforms shortened unemployment spells, but wage moderation also explains part of the fall.', src: 'hartz-cesifo' },
        { text: 'Wage restraint in Germany began in the mid-1990s, before the reforms.', src: 'hartz-cer' },
      ],
      check: { q: 'Give one reason why the fall in German unemployment may not be due only to the Hartz reforms.', a: 'Slow wage growth and strong exports also increased the demand for labour.' },
      syllabus: ['4.4.2', '4.4.3'], sources: [WEO, 'hartz-cesifo', 'hartz-cer'],
    },
    {
      id: 'mp-s5', part: 'Supply-side policy', date: '2015-12-31', dateLabel: '2003 to 2024',
      camera: { lat: 53.2, lon: -8, alt: 1100 },
      map: { borders: 'modern', data: { id: 'NGDP_RPCH', years: [2014, 2015] }, focus: ['IRL'] },
      title: 'Lower direct taxes: Ireland\'s corporation tax',
      body: `<p>Since 2003 Ireland has taxed company profits at <b>12.5%</b>, one of the lowest rates in Europe. Many multinational companies set up their European headquarters there, bringing jobs and investment.</p>
        <p>The figures need care. In 2015 Ireland's real GDP grew by <b>24.6%</b>, mostly because large firms moved assets and profits to Ireland, not because people produced a quarter more.</p>
        <p>From 2024 Ireland applies a minimum rate of 15% to groups with turnover above €750 million, under an international agreement.</p>`,
      why: 'Lower direct taxes can raise the incentive to invest, but the gain to the country may be smaller than the figures suggest.',
      evaluation: ['Whether firms create real jobs or only move their profits', 'Lost tax revenue, an opportunity cost', 'Other countries\' responses, such as the 15% global minimum'],
      facts: [
        { text: 'Ireland has kept a 12.5% corporation tax rate since 2003; a 15% minimum applies from 2024 to groups with revenue above €750 million.', src: 'irl-ls' },
        { text: 'Ireland applies a Qualified Domestic Minimum Top-up Tax from 1 January 2024 under OECD Pillar Two.', src: 'irl-fm' },
        { text: 'Ireland\'s real GDP growth in 2015: 24.6%.', src: WEO },
      ],
      check: { q: 'How can a lower corporation tax rate increase investment?', a: 'Firms keep more of their profit, so investing in the country gives a higher return after tax.' },
      syllabus: ['4.4.2', '4.4.3'], sources: ['irl-ls', 'irl-fm', WEO],
    },
    {
      id: 'mp-s6', part: 'Supply-side policy', date: '1991-07-24', dateLabel: '1991',
      camera: { lat: 22, lon: 79, alt: 4300 },
      map: { borders: 'modern', markers: [{ at: [28.61, 77.21], label: 'New Delhi' }] },
      title: 'Deregulation: India in 1991',
      body: `<p>Before 1991 a firm in India needed a government <b>licence</b> to start a factory or expand it. Licences were slow to get and limited competition.</p>
        <p>On 24 July 1991, during a balance of payments crisis, the government announced a new industrial policy. It <b>abolished industrial licensing</b> for all but a short list of industries and opened more sectors to private and foreign firms.</p>
        <p><b>Deregulation</b> means removing rules that restrict competition. With fewer barriers, new firms could enter and existing firms could grow.</p>`,
      why: 'Deregulation increases competition, which pushes firms to cut costs and improve quality.',
      evaluation: ['Whether the rules removed were protecting workers, consumers or the environment', 'How quickly new firms enter', 'Whether other barriers, such as poor infrastructure, remain'],
      facts: [
        { text: 'India\'s New Industrial Policy of 24 July 1991 abolished industrial licensing except for a short list of industries.', src: 'ind-1991a' },
        { text: 'Before 1991, private firms had to secure licences to start an industry, which caused long delays.', src: 'ind-1991b' },
      ],
      check: { q: 'Define deregulation.', a: 'Removing or reducing government rules that restrict competition in a market.' },
      syllabus: ['4.4.2', '4.4.3'], sources: ['ind-1991a', 'ind-1991b'],
    },
    {
      id: 'mp-s7', part: 'Supply-side policy', date: '2021-11-24', dateLabel: '2021',
      camera: { lat: 54, lon: -2.5, alt: 1900 },
      map: { borders: 'modern', data: { id: 'LUR', year: 2022 }, focus: ['GBR'] },
      title: 'Improving incentives to work',
      body: `<p>Universal Credit is the UK's main benefit for people of working age. As a claimant earns more, the benefit is reduced. Before November 2021 it fell by 63p for each extra £1 earned.</p>
        <p>In November 2021 this <b>taper rate</b> was cut to 55%, so claimants keep 45p of each extra £1 instead of 37p. The amount people can earn before the benefit starts to fall also rose by £500 a year.</p>
        <p>Keeping more of each pound earned increases the <b>incentive to work</b> and to work longer hours.</p>`,
      why: 'Improving incentives to work and invest is one of the seven measures in the syllabus.',
      evaluation: ['How many people change their hours as a result', 'The cost: about £3 billion a year', 'People not in work gain nothing from it'],
      facts: [
        { text: 'The Universal Credit taper rate fell from 63% to 55%, and work allowances rose by £500 a year, from November 2021.', src: 'uc-rf' },
        { text: 'Out-of-work claimants did not gain from the change.', src: 'uc-pip' },
      ],
      check: { q: 'Why does a lower benefit taper rate increase the incentive to work?', a: 'Claimants keep more of each extra pound they earn, so working more pays more.' },
      syllabus: ['4.4.2', '4.4.3'], sources: ['uc-rf', 'uc-pip', WEO],
    },
    {
      id: 'mp-s8', part: 'Supply-side policy', date: '1986-12-08', dateLabel: '1984 to 1986',
      camera: { lat: 54, lon: -2.5, alt: 1900 },
      map: { borders: 'modern', markers: [{ at: [51.5, -0.13], label: 'London' }] },
      title: 'Privatisation: the UK in the 1980s',
      body: `<p><b>Privatisation</b> is the transfer of a firm from the public sector to the private sector.</p>
        <p>In December 1984 the UK government sold more than half of British Telecom in a share sale worth about £4 billion. In 1986 it sold British Gas for more than £5 billion. Millions of people bought shares for the first time.</p>
        <p>The idea is that private owners, who want profit, have a stronger incentive to cut costs and improve services than the government.</p>`,
      judgement: {
        for: ['The profit motive gives managers an incentive to be efficient.', 'Selling the firms raised revenue for the government.', 'Competition can be introduced, giving consumers more choice.'],
        against: ['A private monopoly may raise prices instead of cutting costs, so it needs regulation.', 'Firms may cut unprofitable services that people rely on.', 'The government loses the profits the firm would have earned in future.'],
        verdict: 'Privatisation is most likely to raise efficiency when the firm faces competition or strong regulation. A private monopoly may simply replace a public one.',
      },
      why: 'Privatisation is the last of the seven measures, and a common part (d) topic.',
      facts: [
        { text: 'On 3 December 1984 the government sold over half its stake in British Telecom; the sale was about £4bn and drew 2.3 million applicants.', src: 'bt' },
        { text: 'The British Gas sale in 1986 raised about £5.4bn and was advertised to small investors with the "Tell Sid" campaign.', src: 'gas' },
      ],
      check: { q: 'Define privatisation.', a: 'The transfer of a firm or industry from the public sector to the private sector.' },
      syllabus: ['4.4.2', '4.4.3'], sources: ['bt', 'gas'],
    },
    {
      id: 'mp-s9', part: 'Supply-side policy', date: '2025-12-31', dateLabel: 'Evaluation',
      camera: { lat: 30, lon: 10, alt: 16000 },
      map: { borders: 'modern', data: { id: 'LUR', year: 2025 } },
      title: 'How well does supply-side policy work?',
      body: `<p>Supply-side policies can help every aim at once: more output, more jobs, less pressure on prices and more competitive exports. That is why governments like them.</p>`,
      evaluation: ['Time: most take years to have an effect', 'Cost: training and infrastructure are expensive, and tax cuts reduce revenue', 'Inequality: cutting benefits or taxes on high incomes can widen the income gap', 'Demand: extra capacity is only used if there is enough demand for the output', 'Measurement: as in Germany and Ireland, it is hard to know what caused a change'],
      why: 'This evaluation list answers the "how effective" questions in 4.4.3.',
      facts: [{ text: 'Unemployment rate by country, 2025.', src: WEO }],
      check: { q: 'Give one reason why supply-side policy may increase inequality.', a: 'Cutting benefits or lowering taxes on high incomes can widen the gap between rich and poor.' },
      syllabus: ['4.4.3'], sources: [WEO],
    },

    // ── After ───────────────────────────────────────────────────────────────
    {
      id: 'mp-z1', part: 'Comparing the three', date: '2026-06-30', dateLabel: 'Summary',
      camera: { lat: 22, lon: 20, alt: 17500 },
      map: { borders: 'modern', data: { id: 'NGDP_RPCH', year: 2026 } },
      title: 'Comparing fiscal, monetary and supply-side policy',
      body: `<p>Each kind of policy works through a different route, at a different speed, and is decided by a different body.</p>
        <table class="sc__table"><thead><tr><th></th><th>Fiscal</th><th>Monetary</th><th>Supply-side</th></tr></thead><tbody>
          <tr><th>Measures</th><td>Taxes, government spending</td><td>Interest rate, money supply, exchange rate</td><td>Training, infrastructure, reforms, tax cuts, deregulation, incentives, privatisation</td></tr>
          <tr><th>Works through</th><td>Total demand</td><td>Total demand and the exchange rate</td><td>Productive capacity</td></tr>
          <tr><th>Speed</th><td>Months to years</td><td>Decided quickly; effect after a year or more</td><td>Years</td></tr>
          <tr><th>Decided by</th><td>Government</td><td>Usually the central bank</td><td>Government</td></tr>
          <tr><th>Main risk</th><td>Debt; time lags</td><td>Unemployment if rates rise; inflation if they fall</td><td>Cost; inequality; slow</td></tr>
        </tbody></table>
        <p>The 2026 map shows IMF projections.</p>`,
      why: 'Many part (d) questions ask you to compare one policy with another.',
      facts: [{ text: 'Real GDP growth projections for 2026, IMF World Economic Outlook, October 2026.', src: WEO }],
      check: { q: 'Which kind of policy is usually decided by the central bank?', a: 'Monetary policy.' },
      syllabus: ['4.2.6', '4.3.3', '4.4.3'], sources: [WEO],
    },
  ],

  sources: {
    [WEO]: { title: 'World Economic Outlook database, October 2026', author: 'International Monetary Fund', publisher: 'IMF DataMapper', year: 2026, url: 'https://www.imf.org/external/datamapper' },
    [BIS]: { title: 'Central bank policy rates', author: 'Bank for International Settlements', publisher: 'BIS Data Portal', year: 2026, url: 'https://data.bis.org/topics/CBPOL' },
    [GINI]: { title: 'Gini coefficient (World Bank Poverty and Inequality Platform)', author: 'Our World in Data', publisher: 'Our World in Data', year: 2026, url: 'https://ourworldindata.org/grapher/economic-inequality-gini-index' },
    [CO2]: { title: 'CO₂ emissions per capita (Global Carbon Project)', author: 'Our World in Data', publisher: 'Our World in Data', year: 2026, url: 'https://ourworldindata.org/grapher/co-emissions-per-capita' },
    [SYL]: { title: 'Cambridge IGCSE Economics 0455 syllabus for 2027, 2028 and 2029', author: 'Cambridge University Press & Assessment', publisher: 'Cambridge International', year: 2024, url: 'https://www.cambridgeinternational.org/Images/718148-2027-2029-syllabus.pdf' },
    'china-gwr': { title: 'China sets 2025 GDP growth target at around 5%', author: 'Caixin Global', publisher: 'Caixin', year: 2025, url: 'https://www.caixinglobal.com/2025-03-05/two-sessions-china-sets-2025-gdp-growth-target-at-around-5-102294533.html' },
    'fed-2012': { title: 'Federal Reserve issues FOMC statement of longer-run goals and policy strategy', author: 'Board of Governors of the Federal Reserve System', publisher: 'Federal Reserve', year: 2012, url: 'https://www.federalreserve.gov/newsevents/pressreleases/monetary20120125c.htm' },
    'rbi-target': { title: 'RBI to maintain 4 per cent inflation target until 2031', author: 'Outlook Money', publisher: 'Outlook', year: 2026, url: 'https://www.outlookmoney.com/amp/story/banking/rbi-to-maintain-4-per-cent-inflation-target-until-2031-centre' },
    'uk-netzero': { title: 'The Climate Change Act 2008 (2050 Target Amendment) Order 2019', author: 'UK Parliament', publisher: 'legislation.gov.uk', year: 2019, url: 'https://www.legislation.gov.uk/uksi/2019/1056/made' },
    'india-2070': { title: 'India sets target for net-zero', author: 'World Nuclear News', publisher: 'World Nuclear Association', year: 2021, url: 'https://www.world-nuclear-news.org/Articles/India-sets-target-for-net-zero' },
    'obr-2024': { title: 'Brief guide to the public finances, October 2024', author: 'Office for Budget Responsibility', publisher: 'OBR', year: 2024, url: 'https://obr.uk/docs/dlm_uploads/Brief_guide_October_2024.docx.pdf' },
    'hmt-pss': { title: 'Public spending statistics: May 2026', author: 'HM Treasury', publisher: 'GOV.UK', year: 2026, url: 'https://www.gov.uk/government/statistics/public-spending-statistics-release-may-2026/public-spending-statistics-may-2026' },
    'commons-spending': { title: 'Public spending by function (CBP-8046)', author: 'House of Commons Library', publisher: 'UK Parliament', year: 2026, url: 'https://researchbriefings.files.parliament.uk/documents/CBP-8046/CBP-8046.pdf' },
    'idn-ums': { title: 'Reforming spending policy and its impact on Indonesia\'s economy: the case of fuel subsidy and infrastructure', author: 'Jurnal Ekonomi Pembangunan', publisher: 'Universitas Muhammadiyah Surakarta', year: 2019, url: 'https://journals.ums.ac.id/index.php/JEP/article/view/7733' },
    'idn-jp': { title: 'RI punching below its weight on reform', author: 'The Jakarta Post', publisher: 'The Jakarta Post', year: 2015, url: 'https://www.thejakartapost.com/news/2015/07/09/ri-punching-below-its-weight-reform' },
    'gov-tax': { title: 'Income Tax rates and allowances for current and previous tax years', author: 'HM Revenue & Customs', publisher: 'GOV.UK', year: 2024, url: 'https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past' },
    litrg: { title: 'What tax rates apply to me?', author: 'Low Incomes Tax Reform Group', publisher: 'Chartered Institute of Taxation', year: 2024, url: 'https://www.litrg.org.uk/tax-guides/tax-basics/what-tax-rates-apply-me' },
    'sdil-bmc': { title: 'Impact of the announcement and implementation of the UK Soft Drinks Industry Levy on sugar content, price, product size and number of available soft drinks', author: 'Scarborough P. et al.', publisher: 'BMC Medicine', year: 2020, url: 'https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-019-1477-4' },
    'us-201': { title: 'Section 201 safeguards on solar products and washing machines (IN10856)', author: 'Congressional Research Service', publisher: 'CRS', year: 2018, url: 'https://www.everycrsreport.com/reports/IN10856.html' },
    'de-vat': { title: 'Drop in value added tax (VAT): important questions and answers', author: 'The Federal Government', publisher: 'Bundesregierung', year: 2020, url: 'https://www.bundesregierung.de/breg-en/news/faq-mehrwertsteuersenkung-1765150' },
    'swe-tf': { title: 'Sweden\'s carbon tax', author: 'Tax Foundation', publisher: 'Tax Foundation', year: 2020, url: 'https://taxfoundation.org/research/all/eu/sweden-carbon-tax-revenue-greenhouse-gas-emissions/' },
    cjrs: { title: 'The Coronavirus Job Retention Scheme (CJRS): final evaluation', author: 'HM Revenue & Customs', publisher: 'GOV.UK', year: 2023, url: 'https://www.gov.uk/government/publications/coronavirus-job-retention-scheme-final-evaluation-july-2023/the-coronavirus-job-retention-scheme-cjrs-final-evaluation-july-2023-html' },
    kurzarbeit: { title: '11 Millionen Anträge auf Kurzarbeit stapeln sich bei der Arbeitsagentur', author: 'Der Tagesspiegel', publisher: 'Tagesspiegel', year: 2020, url: 'https://www.tagesspiegel.de/wirtschaft/11-millionen-antrage-auf-kurzarbeit-stapeln-sich-bei-der-arbeitsagentur-4338019.html' },
    'grc-eca': { title: 'The Commission\'s intervention in the Greek financial crisis (Special report 17/2017)', author: 'European Court of Auditors', publisher: 'ECA', year: 2017, url: 'https://www.eca.europa.eu/Lists/ECADocuments/INSR17_17/INSR_GREECE_EN.pdf' },
    'grc-esm': { title: 'Greece: financial assistance', author: 'European Stability Mechanism', publisher: 'ESM', year: 2018, url: 'https://www.esm.europa.eu/assistance/greece' },
    'fed-2022': { title: 'US Fed raises fed funds rate by 50 bps', author: 'Business Standard', publisher: 'Business Standard', year: 2022, url: 'https://www.business-standard.com/amp/article/news-cm/us-fed-raises-fed-funds-rate-by-50-bps-raises-inflation-forecasts-122121500575_1.html' },
    'yen-kitco': { title: 'Japan confirms FX interventions twice in October to support yen', author: 'Reuters via Kitco', publisher: 'Kitco', year: 2023, url: 'https://www.kitco.com/news/off-the-wire/2023-02-06/refile-japan-confirms-fx-interventions-twice-oct-support-yen' },
    'yen-jcer': { title: 'Foreign exchange market intervention and monetary policy', author: 'Japan Center for Economic Research', publisher: 'JCER', year: 2022, url: 'https://www.jcer.or.jp/english/foreign-exchange-market-intervention-and-monetary-policy' },
    'boe-qe': { title: 'The United Kingdom\'s quantitative easing policy: design, operation and impact', author: 'Bank of England', publisher: 'Quarterly Bulletin 2011 Q3', year: 2011, url: 'https://www.bankofengland.co.uk/quarterly-bulletin/2011/q3/the-uk-quantitative-easing-policy-design-operation-and-impact' },
    'boe-apf': { title: 'Asset Purchase Facility quarterly report, 2020 Q4', author: 'Bank of England', publisher: 'Bank of England', year: 2021, url: 'https://www.bankofengland.co.uk/asset-purchase-facility/2020/2020-q4' },
    'snb-bis': { title: 'The rationale for discontinuing the minimum exchange rate and lowering interest rates (Thomas Jordan)', author: 'Swiss National Bank', publisher: 'BIS central bankers\' speeches', year: 2015, url: 'https://www.bis.org/review/r150116a.htm' },
    'snb-2015': { title: 'SNB monetary policy after the discontinuation of the minimum exchange rate', author: 'Swiss National Bank', publisher: 'SNB', year: 2015, url: 'https://www.snb.ch/en/mmr/speeches/id/ref_20150424_tjn' },
    'tur-infl': { title: 'Turkey\'s inflation hits 24-year high', author: 'Gulf Today', publisher: 'Gulf Today', year: 2022, url: 'https://gulftoday.ae/Business/2022/11/03/Turkeys-inflation-hits-24-year-high' },
    'tcmb-2021': { title: 'Annual report 2021: a glance at 2021', author: 'Central Bank of the Republic of Türkiye', publisher: 'CBRT', year: 2022, url: 'https://www3.tcmb.gov.tr/yillikrapor/2021/en/m-0-4.html' },
    'skills-ssg': { title: 'SkillsFuture Credit to be available from 1 January 2016', author: 'SkillsFuture Singapore', publisher: 'SSG', year: 2015, url: 'https://www.ssg.gov.sg/newsroom/skillsfuture-credit-to-be-available-from-1-january-2016/' },
    'skills-pmo': { title: 'DPM Tharman Shanmugaratnam at the launch of the SkillsFuture Credit inaugural roadshow', author: 'Prime Minister\'s Office Singapore', publisher: 'PMO', year: 2016, url: 'https://www.pmo.gov.sg/newsroom/dpm-tharman-shanmugaratnam-launch-skillsfuture-credit-inaugural-roadshow-9-january-2016/' },
    'ind-capex': { title: 'Capex hiked by 33% to Rs 10 lakh crore in big infra boost', author: 'Deccan Herald', publisher: 'Deccan Herald', year: 2023, url: 'https://www.deccanherald.com/business/union-budget/capex-hiked-by-33-to-rs-10-lakh-crore-in-big-infra-boost-ahead-of-2024-elections-1186673.html' },
    'ind-rbi': { title: 'Budget\'s focus on capex to crowd-in private investment, push growth to 7%: RBI', author: 'Business Standard', publisher: 'Business Standard', year: 2023, url: 'https://www.business-standard.com/amp/article/economy-policy/budget-s-focus-on-capex-to-crowd-in-pvt-investment-push-growth-to-7-rbi-123021701048_1.html' },
    'hartz-cesifo': { title: 'The fall in German unemployment: a flow analysis (CESifo Working Paper 8799)', author: 'Carrillo-Tudela C., Launov A. and Robin J.-M.', publisher: 'CESifo', year: 2020, url: 'https://www.cesifo.org/DocDL/cesifo1_wp8799.pdf' },
    'hartz-cer': { title: 'The Hartz myth', author: 'Centre for European Reform', publisher: 'CER Bulletin 115', year: 2017, url: 'https://www.cer.eu/sites/default/files/bulletin_115_co_article2.pdf' },
    'irl-ls': { title: 'New minimum tax rate on profits in force', author: 'Law Society of Ireland', publisher: 'Law Society Gazette', year: 2024, url: 'https://www.lawsociety.ie/gazette/top-stories/2024/january/new-minimum-tax-rate-on-profits-in-force/' },
    'irl-fm': { title: 'Key points on Pillar Two: the 15% tax rate', author: 'Forvis Mazars Ireland', publisher: 'Forvis Mazars', year: 2024, url: 'https://www.forvismazars.com/ie/en/insights/news-opinions/key-points-on-pillar-2-15-tax-rate' },
    'ind-1991a': { title: 'New Industrial Policy, 1991', author: 'CSJM University', publisher: 'Gyan Sanchay', year: 'n.d.', url: 'https://gyansanchay.csjmu.ac.in/wp-content/uploads/2022/10/new-indusrial-policy.pdf' },
    'ind-1991b': { title: 'Industrial policy in India: evolution, reforms and impact', author: 'Vajiram & Ravi', publisher: 'Vajiram & Ravi', year: 'n.d.', url: 'https://vajiramandravi.com/current-affairs/?p=101800' },
    'uc-rf': { title: 'Taper cut', author: 'Resolution Foundation', publisher: 'Resolution Foundation', year: 2021, url: 'https://www.resolutionfoundation.org/publications/taper-cut/' },
    'uc-pip': { title: 'Autumn Budget 2021: increased support, but not for everyone', author: 'Policy in Practice', publisher: 'Policy in Practice', year: 2021, url: 'https://policyinpractice.co.uk/autumn-budget-2021-increased-support-but-not-for-everyone' },
    bt: { title: '3 December 1984: BT is sold off in a gamble over privatisation', author: 'MoneyWeek', publisher: 'MoneyWeek', year: 2019, url: 'https://moneyweek.com/417238/3-december-1984-bt-is-sold-off-in-a-gamble-over-privatisation/' },
    gas: { title: 'Old Money: "Tell Sid", the sequel', author: 'GlobalCapital', publisher: 'GlobalCapital', year: 2013, url: 'https://www.globalcapital.com/article/28mssyp51jgqspwebgo65/old-money-tell-sid-the-sequel' },
  },

  toolkit: {
    summary: [
      '<b>Six aims</b>: economic growth, full employment, stable prices, balance of payments stability, redistribution of income and environmental sustainability. Governments choose which matter most and set a criterion, such as 2% inflation, for each.',
      '<b>Three conflicts</b> in the syllabus: full employment and stable prices; economic growth and environmental sustainability; full employment and balance of payments stability.',
      '<b>Budget</b>: deficit when spending is greater than revenue; surplus when revenue is greater. Balance = revenue − spending.',
      '<b>Taxes</b> raise revenue, discourage demerit goods, reduce imports, redistribute income, influence total demand and encourage environmental sustainability. Progressive, proportional and regressive refer to the percentage of income paid. Direct taxes are on income and wealth; indirect taxes are on spending.',
      '<b>Fiscal policy</b>: changes in taxes and government spending to influence total demand. Expansionary against recession and unemployment; contractionary against inflation or to cut a deficit.',
      '<b>Monetary policy</b>: changes in the interest rate, the money supply and the exchange rate, usually by the central bank. Higher rates reduce borrowing and spending and tend to raise the exchange rate.',
      '<b>Supply-side policy</b>: education and training, infrastructure, labour market reforms, lower direct taxes, deregulation, incentives to work and invest, privatisation. It raises productive capacity, but slowly and at a cost.',
      '<b>Evaluate</b> every policy with time lags, cost, side effects on other aims, and what the result depends on.',
    ],
    definitions: [
      { k: 'Government budget', d: 'The government\'s plan of revenue and spending over a year.' },
      { k: 'Budget deficit', d: 'When government spending is greater than government revenue.' },
      { k: 'Budget surplus', d: 'When government revenue is greater than government spending.' },
      { k: 'Fiscal policy', d: 'The use of government spending and taxation to influence the economy.' },
      { k: 'Money supply', d: 'The total amount of money in an economy, including notes, coins and bank deposits.' },
      { k: 'Monetary policy', d: 'The use of interest rates, the money supply and the exchange rate to influence the economy.' },
      { k: 'Supply-side policy', d: 'Measures that aim to increase the quantity or quality of the factors of production.' },
      { k: 'Progressive tax', d: 'A tax that takes a larger percentage of income as income rises.' },
      { k: 'Regressive tax', d: 'A tax that takes a larger percentage of income from people on lower incomes.' },
      { k: 'Proportional tax', d: 'A tax that takes the same percentage of income at every level of income.' },
      { k: 'Direct tax', d: 'A tax on income or wealth, paid directly to the government.' },
      { k: 'Indirect tax', d: 'A tax on spending, collected by sellers and passed on in prices.' },
      { k: 'Privatisation', d: 'The transfer of a firm or industry from the public sector to the private sector.' },
      { k: 'Deregulation', d: 'Removing or reducing government rules that restrict competition.' },
    ],
    checks: [
      { q: 'List the six macroeconomic aims.', a: 'Economic growth, full employment, stable prices, balance of payments stability, redistribution of income, environmental sustainability.' },
      { q: 'What is a criterion for an aim? Give one example.', a: 'A number that shows whether the aim is met, for example an inflation target of 2%.' },
      { q: 'Explain the conflict between full employment and stable prices.', a: 'Low unemployment raises wages and spending, which can cause demand-pull inflation.' },
      { q: 'Explain the conflict between growth and environmental sustainability.', a: 'Producing more usually uses more energy and resources, which raises pollution and emissions.' },
      { q: 'Explain the conflict between full employment and the balance of payments.', a: 'Higher incomes increase spending on imports, which can widen a current account deficit.' },
      { q: 'Revenue $300bn, spending $340bn. Calculate the budget balance.', a: 'A deficit of $40bn.' },
      { q: 'What is the difference between a budget deficit and government debt?', a: 'A deficit is the gap in one year; debt is the total owed, built up over many years.' },
      { q: 'Give two main areas of government spending and one reason for each.', a: 'For example, education (a merit good that raises productivity) and health care (keeps the workforce healthy).' },
      { q: 'Give the six reasons for taxation.', a: 'Raising revenue, discouraging demerit goods, reducing imports, redistributing income, influencing total demand, encouraging environmental sustainability.' },
      { q: 'Why is VAT usually described as regressive?', a: 'Lower-income households spend a larger share of their income, so VAT takes a larger percentage of their income.' },
      { q: 'Give one impact of a rise in income tax on workers.', a: 'They keep less of each extra pound earned, which may reduce the incentive to work.' },
      { q: 'What is expansionary fiscal policy?', a: 'Raising government spending or cutting taxes to increase total demand.' },
      { q: 'Give two limits of fiscal policy.', a: 'Time lags, and a larger debt that must be paid for; also, people may save a tax cut.' },
      { q: 'Name the three measures of monetary policy.', a: 'Interest rate, money supply, foreign exchange rate.' },
      { q: 'How does a rise in the interest rate affect investment?', a: 'Borrowing costs more, so firms invest less.' },
      { q: 'How does a rise in the interest rate affect the exchange rate?', a: 'Saving in the currency earns more, so demand for it rises and it tends to appreciate.' },
      { q: 'What is quantitative easing?', a: 'A central bank creating money to buy bonds, increasing the money supply.' },
      { q: 'Name four of the seven supply-side measures.', a: 'Any four of: education and training, infrastructure spending, labour market reforms, lower direct taxes, deregulation, improving incentives to work and invest, privatisation.' },
      { q: 'Why do supply-side policies take a long time to work?', a: 'Training workers, building infrastructure and changing how markets work all take years.' },
      { q: 'Which kind of policy shifts a production possibility curve outwards?', a: 'Supply-side policy, because it increases productive capacity.' },
    ],
    practiceSets: [
      {
        tag: 'A', short: 'Aims', paper: 'Paper 2 · Section B · Topic 4: Government and the macroeconomy', title: 'Inflation, unemployment and interest rates',
        intro: 'In 2022 Country A had an unemployment rate of 3.5%, its lowest for fifty years, and an inflation rate of 8%. Its central bank\'s inflation target is 2%. The central bank raised its interest rate from 0.25% to 4.5% during the year.',
        parts: [
          { k: '(a)', m: 2, scheme: 'a', q: 'Identify two macroeconomic aims of a government, other than stable prices.',
            ms: { head: 'Answer', points: ['Any two of: economic growth (1); full employment or low unemployment (1); balance of payments stability (1); redistribution of income (1); environmental sustainability (1).'] } },
          { k: '(b)', m: 4, scheme: 'b', q: 'Explain two reasons why a government may want stable prices.',
            ms: { lead: '1 mark for each reason and 1 for its explanation. Answers may include:', points: [
              '<b>Protects real incomes</b> (1): if prices rise faster than incomes, people can buy less, especially those on fixed incomes such as pensions (1).',
              '<b>Helps planning</b> (1): firms can plan investment when costs and prices are predictable (1).',
              '<b>International competitiveness</b> (1): if prices rise faster than in other countries, exports become less competitive (1).',
              '<b>Protects savers</b> (1): high inflation reduces the real value of savings (1).',
            ] } },
          { k: '(c)', m: 6, scheme: 'c', q: 'Analyse how full employment may cause inflation.',
            ms: { lead: '1 mark for each step, up to 6. Answers may include:', points: [
              'At full employment there are few spare workers (1).', 'Firms compete for workers by offering higher wages (1).', 'Higher wages raise household incomes (1).',
              'Households spend more, so total demand rises (1).', 'Output cannot rise much because resources are fully used (1).', 'So firms raise prices: demand-pull inflation (1).',
              'Higher wages also raise firms\' costs, which they pass on in higher prices: cost-push inflation (1).',
            ] } },
          { k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not raising the interest rate is the best way to reduce inflation in Country A.',
            ms: { groups: [
              { h: 'Why it may be', tone: 'yes', points: ['Higher rates make borrowing more expensive, so households and firms borrow and spend less; total demand falls and demand-pull inflation slows.', 'Saving becomes more attractive, reducing consumption.', 'The currency may appreciate, making imports cheaper.', 'The central bank can act quickly, at its next meeting.'] },
              { h: 'Why it may not be', tone: 'no', points: ['Lower demand may cost jobs: with unemployment at 3.5%, it may rise.', 'There are time lags, often a year or more.', 'If inflation comes from higher import or energy prices, higher rates do little about the cause.', 'Firms and households with variable-rate loans may be hit hard.', 'Other measures, such as contractionary fiscal policy or supply-side policy, could also help.'] },
              { h: 'What the answer depends on', tone: 'judge', text: 'Whether the inflation is caused mainly by high demand, which interest rates can reduce, or by rising costs from abroad; and how much unemployment the government is willing to accept.' },
            ] } },
        ],
      },
      {
        tag: 'B', short: 'Taxation', paper: 'Paper 2 · Section B · Topic 4: Government and the macroeconomy', title: 'The budget and taxation',
        intro: 'In 2025 the government of Country B received $480bn in revenue and spent $520bn. It is considering raising the rate of its sales tax (an indirect tax) from 10% to 15% to reduce the deficit.',
        parts: [
          { k: '(a)', m: 2, scheme: 'calc', q: 'Calculate Country B\'s budget balance in 2025 and state whether it is a deficit or a surplus.',
            ms: { head: 'Answer', working: ['Budget balance = revenue − spending = $480bn − $520bn = <b>−$40bn</b>', 'This is a <b>budget deficit</b> of $40bn.'], points: ['Correct figure and correct label: 2 marks.', 'Correct method with a wrong figure, or a correct figure without the label: 1 mark.'] } },
          { k: '(b)', m: 4, scheme: 'b', q: 'Explain two reasons why a government levies taxes.',
            ms: { lead: '1 mark for each reason and 1 for its explanation. Answers may include:', points: [
              '<b>To raise revenue</b> (1) to pay for public services such as schools and hospitals (1).', '<b>To discourage demerit goods</b> (1): a tax raises the price of goods such as cigarettes, so less is consumed (1).',
              '<b>To redistribute income</b> (1): a progressive tax takes a larger share from high incomes (1).', '<b>To influence total demand</b> (1): higher taxes reduce spending when the economy is growing too fast (1).',
              '<b>To reduce imports</b> (1) or <b>to encourage environmental sustainability</b> (1), with an explanation (1).',
            ] } },
          { k: '(c)', m: 6, scheme: 'c', q: 'Analyse why a sales tax may be regressive.',
            ms: { lead: '1 mark for each step, up to 6. Answers may include:', points: [
              'A regressive tax takes a larger percentage of income from people on lower incomes (1).', 'A sales tax is paid on spending, not on income (1).',
              'Lower-income households spend a larger share of their income (1).', 'Higher-income households save a larger share (1).',
              'So the tax paid is a larger percentage of a low income (1).', 'Example: $1,000 of tax is 5% of a $20,000 income but only 1% of a $100,000 income (1).',
            ] } },
          { k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not Country B should raise the sales tax to reduce its budget deficit.',
            ms: { groups: [
              { h: 'Why it should', tone: 'yes', points: ['It raises revenue quickly, reducing the $40bn deficit.', 'Less borrowing means lower future interest payments.', 'It may reduce inflation by lowering total demand.', 'Sales taxes are hard to avoid.'] },
              { h: 'Why it should not', tone: 'no', points: ['It is regressive, so it hurts low-income households most.', 'Higher prices reduce demand, which may cost jobs and growth.', 'Less spending may reduce the revenue from other taxes.', 'Cutting wasteful spending or raising a progressive tax could reduce the deficit more fairly.'] },
              { h: 'What the answer depends on', tone: 'judge', text: 'How large the debt is and how fast it must fall; whether the economy is growing strongly or is close to recession; and whether essentials such as food could be kept at a lower rate.' },
            ] } },
        ],
      },
      {
        tag: 'C', short: 'Exchange rate', paper: 'Paper 2 · Section B · Topic 4: Government and the macroeconomy', title: 'Monetary policy and the exchange rate',
        intro: 'Country C\'s central bank cut its interest rate from 6% to 3% to support growth during a recession. In the following year its currency fell in value by 15% against the US dollar.',
        parts: [
          { k: '(a)', m: 2, scheme: 'a', q: 'Define "monetary policy".',
            ms: { head: 'Answer', points: ['The use of interest rates, the money supply and/or the exchange rate (1)…', '…to influence the economy or achieve the government\'s macroeconomic aims (1).'] } },
          { k: '(b)', m: 4, scheme: 'b', q: 'Explain two ways a central bank can increase the money supply or make money cheaper to borrow.',
            ms: { lead: '1 mark for each way and 1 for its explanation. Answers may include:', points: [
              '<b>Cutting the interest rate</b> (1): loans become cheaper, so banks lend more (1).', '<b>Quantitative easing</b> (1): the central bank creates money to buy bonds, so banks have more money to lend (1).',
              '<b>Reducing the reserves banks must hold</b> (1), so they can lend more (1).',
            ] } },
          { k: '(c)', m: 6, scheme: 'c', q: 'Analyse how a cut in the interest rate may cause the currency to fall in value.',
            ms: { lead: '1 mark for each step, up to 6. Answers may include:', points: [
              'Saving in Country C now earns less interest (1).', 'Foreign savers move their money to countries with higher interest rates (1).',
              'They sell Country C\'s currency to buy other currencies (1).', 'The supply of Country C\'s currency on the foreign exchange market rises (1).',
              'Demand for it falls (1).', 'So its price, the exchange rate, falls: the currency depreciates (1).',
            ] } },
          { k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not a fall in the value of its currency will help Country C\'s economy.',
            ms: { groups: [
              { h: 'Why it may help', tone: 'yes', points: ['Exports become cheaper abroad, so demand for them rises.', 'Imports become dearer, so households buy more domestic goods.', 'Higher net exports raise total demand, output and employment during the recession.', 'The current account may improve.'] },
              { h: 'Why it may not', tone: 'no', points: ['Imported food, fuel and materials cost more, causing cost-push inflation.', 'Real incomes fall if prices rise faster than wages.', 'If demand for exports is price inelastic, export revenue may rise little.', 'Firms may not have the capacity to produce more exports quickly.'] },
              { h: 'What the answer depends on', tone: 'judge', text: 'How price elastic the demand for exports and imports is; how much the country depends on imported essentials such as energy; and how strong demand is in its trading partners.' },
            ] } },
        ],
      },
      {
        tag: 'D', short: 'Supply side', paper: 'Paper 2 · Section B · Topic 4: Government and the macroeconomy', title: 'Supply-side policy',
        intro: 'Country D has high structural unemployment in regions where old industries have closed. The government plans to spend 2% of GDP a year for five years on training and on new railways.',
        parts: [
          { k: '(a)', m: 2, scheme: 'a', q: 'Define "supply-side policy".',
            ms: { head: 'Answer', points: ['Government measures that aim to increase the quantity or quality of the factors of production (1)…', '…so that the economy\'s productive capacity rises (1).'] } },
          { k: '(b)', m: 4, scheme: 'b', q: 'Explain two supply-side measures other than education and training.',
            ms: { lead: '1 mark for each measure and 1 for its explanation. Answers may include:', points: [
              '<b>Infrastructure spending</b> (1): better transport lowers firms\' costs (1).', '<b>Lower direct taxes</b> (1): firms keep more profit, so they invest more (1).',
              '<b>Deregulation</b> (1): fewer rules let new firms enter and compete (1).', '<b>Privatisation</b> (1): private owners have a profit incentive to cut costs (1).',
              '<b>Labour market reforms</b> (1) or <b>improving incentives to work</b> (1), with an explanation (1).',
            ] } },
          { k: '(c)', m: 6, scheme: 'c', q: 'Analyse how training can reduce structural unemployment.',
            ms: { lead: '1 mark for each step, up to 6. Answers may include:', points: [
              'Structural unemployment happens when workers\' skills do not match the jobs available (1).', 'It follows a change in the structure of the economy, such as old industries closing (1).',
              'Training gives workers the skills that growing industries need (1).', 'This improves their occupational mobility (1).',
              'They can then fill vacancies in growing industries (1).', 'So unemployment falls and productivity rises (1).',
            ] } },
          { k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not Country D\'s plan will be the best way to increase economic growth.',
            ms: { groups: [
              { h: 'Why it may be', tone: 'yes', points: ['It raises the quantity and quality of resources, shifting the production possibility curve outwards.', 'Growth from more capacity need not raise inflation.', 'Railways lower costs and connect the regions to new jobs.', 'While it is built, the spending also adds to total demand.'] },
              { h: 'Why it may not be', tone: 'no', points: ['It takes years to work; a recession needs faster help.', 'It costs 2% of GDP a year, which may raise the deficit or mean cuts elsewhere.', 'Training may not match the skills firms need, and workers may not move.', 'Extra capacity is only used if there is demand for the output.'] },
              { h: 'What the answer depends on', tone: 'judge', text: 'Whether the economy\'s problem is a lack of demand or a lack of capacity; how well the training and railways are planned; and how long the government can wait for results.' },
            ] } },
        ],
      },
    ],
  },
};
