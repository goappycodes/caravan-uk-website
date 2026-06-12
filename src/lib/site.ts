/**
 * Central site configuration & copy.
 * All contact details, services, pricing, reviews and FAQs live here so
 * every page reuses one source of truth.
 *
 * Prices are taken from the live caravansupport.co.uk price list
 * (June 2026) — confirm with the client before launch.
 */

export const site = {
  name: "Caravan Support",
  legalName: "Caravan Support Ltd",
  companyNumber: "15010914",
  domain: "https://caravansupport.co.uk",
  phone: "01653 513019",
  phoneHref: "tel:+441653513019",
  email: "info@caravansupport.co.uk",
  address: {
    street: "Unit 8 Showfield Lane",
    town: "Malton",
    county: "North Yorkshire",
    postcode: "YO17 6BT",
  },
  hours: "Mon–Fri, 8:00am – 5:30pm",
  hoursShort: "Mon–Fri 8am–5:30pm",
  facebook: "https://www.facebook.com/p/Caravan-Support-61551999986076/",
  rating: {
    value: "4.9",
    count: 87,
    source: "Google",
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  /** Short name for nav/footer lists */
  shortTitle: string;
  description: string;
  price: string;
  priceNote?: string;
  icon: string;
  image: string;
  imageAlt: string;
  features: string[];
  /** Detail page content */
  intro: string[];
  whatsIncluded: string[];
  whyItMatters: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "annual-caravan-service",
    title: "Annual Caravan Service",
    shortTitle: "Annual Caravan Service",
    description:
      "Full chassis and habitation service to the Approved Workshop checklist — brakes, bearings, coupling, gas, electrics and a complete damp survey.",
    price: "£199.99",
    priceNote: "single axle · twin axle £229.99",
    icon: "wrench",
    image: "/images/caravan-field.jpg",
    imageAlt: "Touring caravans on a green field in the countryside",
    features: ["Service book stamped", "Written report & damp readings", "Warranty protected"],
    intro: [
      "A touring caravan needs one proper service a year — not just to stay safe and reliable, but because most manufacturer water-ingress and bodyshell warranties depend on it. Our full annual service covers both sides of the job: the running gear that keeps you safe on the road, and the habitation systems that keep your family safe on site.",
      "Bring your caravan to our Malton workshop, or have us service it where it stands — at home, at your storage site or on your seasonal pitch anywhere across North Yorkshire.",
    ],
    whatsIncluded: [
      "Brakes, wheel bearings and hubs inspected and adjusted",
      "Coupling head, breakaway cable and corner steadies checked and lubricated",
      "Tyres, wheels and road lights inspected",
      "Full gas system test, including regulator and appliance operation",
      "230v and 12v electrical systems tested",
      "Water systems, ventilation and fire safety equipment checked",
      "Full damp survey with calibrated moisture readings",
      "Written service report, damp map and stamped service book",
    ],
    whyItMatters:
      "Most UK manufacturers require an annual service by an approved workshop to keep the water-ingress warranty alive — often within a strict window around the anniversary of purchase. Our servicing follows the manufacturer-standard checklist and gives you the stamped, documented proof your warranty needs.",
    metaDescription:
      "Full annual caravan service in Malton & North Yorkshire from £199.99. AWS Approved chassis & habitation service — book stamped, warranty protected. Workshop or mobile.",
  },
  {
    slug: "motorhome-habitation-service",
    title: "Motorhome Habitation Service",
    shortTitle: "Motorhome Habitation",
    description:
      "A full health check on the living area of your motorhome — gas system, 230v & 12v electrics, ventilation, water ingress and safety equipment.",
    price: "£179.99",
    icon: "home",
    image: "/images/motorhome.jpg",
    imageAlt: "Motorhome driving through open countryside",
    features: ["Damp survey included", "Gas & electrical checks", "Documented for warranty"],
    intro: [
      "Your base vehicle has its MOT and service — but the habitation side of a motorhome needs its own annual check. Gas, electrics, water, ventilation and damp all need testing to keep the living area safe, and to keep your converter's warranty intact.",
      "We carry out habitation services at our Malton workshop or at your home or storage site, with every check documented so you have the evidence your warranty and your insurer expect.",
    ],
    whatsIncluded: [
      "Full gas system test — regulator, pipework, appliances and ventilation",
      "Carbon monoxide and smoke alarm checks",
      "230v mains installation inspected and tested",
      "12v systems, leisure battery and charging checked",
      "Fresh and waste water systems checked for leaks and operation",
      "Full damp survey with calibrated moisture readings",
      "Fire safety equipment and escape routes checked",
      "Written habitation report and stamped service record",
    ],
    whyItMatters:
      "An annual habitation check is the condition most motorhome converters set for their water-ingress warranty — and the single best way to catch gas, electrical or damp problems before they become dangerous or expensive.",
    metaDescription:
      "Motorhome habitation service in Malton & North Yorkshire — £179.99. Gas, electrics, damp and safety checks documented for your warranty. Workshop or mobile.",
  },
  {
    slug: "damp-check-and-repair",
    title: "Damp Check & Repair",
    shortTitle: "Damp Check & Repair",
    description:
      "Calibrated moisture readings with an honest, plain-English report. Caught early, damp is a simple reseal — not a four-figure rebuild.",
    price: "Quoted up front",
    icon: "droplets",
    image: "/images/caravan-misty.jpg",
    imageAlt: "Caravan in a misty green valley",
    features: ["Calibrated meter survey", "Resealing & panel repair", "No-surprises quotes"],
    intro: [
      "Damp is the most expensive problem a caravan or motorhome can develop — and the cheapest to fix when it's caught early. A failed seal that costs little to put right today can mean rotten framework, delaminated panels and a four-figure rebuild if it's left for a season.",
      "We survey with calibrated moisture meters, map every reading, and explain what the numbers actually mean — what's normal, what needs watching and what needs work now. If repairs are needed, you get a clear written quote before anything starts.",
    ],
    whatsIncluded: [
      "Full-body damp survey with calibrated moisture meters",
      "Readings mapped and explained in plain English",
      "Seals, seams, windows and roof lights inspected",
      "Honest advice — what's normal, what to monitor, what to fix",
      "Resealing of windows, awning rails, seams and roof fittings",
      "Panel, floor and framework repairs for established damp",
      "Written quote before any repair work begins",
      "Post-repair readings so you can see the fix worked",
    ],
    whyItMatters:
      "Up to around 15% moisture is normal in a caravan wall — beyond that, action matters. Regular checks protect both your investment and your warranty: water-ingress claims rely on documented annual inspections.",
    metaDescription:
      "Caravan damp checks & repairs in Malton & North Yorkshire. Calibrated moisture surveys, honest reports and resealing to full panel repairs — quoted up front.",
  },
  {
    slug: "caravan-repairs",
    title: "Repairs — Gas, Electrical & Plumbing",
    shortTitle: "Repairs & Fault-Finding",
    description:
      "From electrical faults, gas issues and plumbing to roof and window resealing, tyres and suspension — fixed properly, first time.",
    price: "Quoted up front",
    icon: "flame",
    image: "/images/engineer.jpg",
    imageAlt: "Engineer inspecting the underside of a vehicle in a workshop",
    features: ["Fault-finding & diagnostics", "Quality parts", "Workshop & mobile"],
    intro: [
      "When something stops working in your caravan or motorhome — a heater that won't fire, lights that flicker, a pump that runs dry, a leak you can't trace — you want it diagnosed properly, not guessed at. We fault-find methodically, explain what we've found, and quote before we fix.",
      "Most repairs can be done at your home, storage site or pitch from our fully equipped mobile setup; bigger jobs come into the Malton workshop.",
    ],
    whatsIncluded: [
      "Gas system faults — heaters, hobs, fridges and regulators",
      "12v and 230v electrical fault-finding and repair",
      "Plumbing — pumps, taps, boilers and leaks",
      "Roof, window and seam resealing",
      "Tyre and suspension work",
      "Bodywork and panel repairs",
      "Habitation door, window and locker repairs",
      "Warranty claim repairs handled and documented",
    ],
    whyItMatters:
      "Small faults rarely stay small in a leisure vehicle — a weeping joint becomes damp, a poor connection becomes a dead battery bank. Fixing things properly the first time is cheaper than fixing them twice.",
    metaDescription:
      "Caravan & motorhome repairs in Malton & North Yorkshire — gas, electrical, plumbing, resealing, tyres and suspension. Quoted up front, workshop or mobile.",
  },
  {
    slug: "motor-movers",
    title: "Motor Movers, Supplied & Fitted",
    shortTitle: "Motor Movers",
    description:
      "Powrtouch motor movers professionally fitted — from the Freedom single-axle through to all-wheel-drive twin-axle systems.",
    price: "from £863",
    priceNote: "supplied & fitted",
    icon: "zap",
    image: "/images/towing.jpg",
    imageAlt: "Car towing a touring caravan on a scenic road",
    features: ["Leading Powrtouch range", "Single & twin axle", "Manufacturer warranty"],
    intro: [
      "A motor mover turns the worst part of caravanning — pushing, shunting and inch-perfect reversing — into a job you do from a remote control. Onto the pitch, off the drive, into the tightest storage spot: one person, no strain.",
      "We supply and fit the Powrtouch range, from the Freedom single-axle mover to automatic all-wheel-drive systems for twin axles, all professionally installed and demonstrated before we leave.",
    ],
    whatsIncluded: [
      "Honest advice on the right mover for your caravan and pitch",
      "Powrtouch Freedom, Evolution and AWD ranges supplied",
      "Professional fitting at our workshop or your storage site",
      "Battery and wiring checked and connected correctly",
      "Full demonstration so you're confident using it",
      "Manufacturer warranty on every mover we fit",
    ],
    whyItMatters:
      "A correctly fitted mover protects your chassis, your back and your no-claims record on the drive. Fitting quality matters: alignment and wiring done right is the difference between effortless and unreliable.",
    metaDescription:
      "Powrtouch caravan motor movers supplied & fitted in Malton & North Yorkshire from £863.20 — single and twin axle, manual and automatic, fully demonstrated.",
  },
  {
    slug: "upgrades-solar-wifi-gas",
    title: "Solar, WiFi, Gas & Upgrades",
    shortTitle: "Solar, WiFi & Upgrades",
    description:
      "Solar panels, 4G/5G WiFi systems, GasLow refillable LPG, satellites, awnings, bike racks and Alde heating fluid changes — supplied and fitted.",
    price: "Solar from £409",
    priceNote: "GasLow from £899.99",
    icon: "sun",
    image: "/images/interior.jpg",
    imageAlt: "Bright, modern campervan interior with seating and kitchen area",
    features: ["Supply & fit packages", "Up to 10-year warranties", "Demonstration included"],
    intro: [
      "The right upgrades transform how — and where — you can use your caravan or motorhome. Solar keeps your batteries topped up off-grid, a proper 4G/5G system gives you reliable internet on any pitch, and refillable GasLow cylinders end the bottle-swap routine for good.",
      "Everything is supplied and fitted by us, tested with you, and demonstrated before we hand it back — with manufacturer warranties of up to 10 years depending on the kit.",
    ],
    whatsIncluded: [
      "Solar panel systems from 65W to 200W, supplied and fitted",
      "4G and 5G-ready WiFi systems for UK and European coverage",
      "GasLow refillable LPG systems — refill at the pump, R67 compliant",
      "Satellite TV systems with automatic alignment",
      "Awnings, bike racks and accessories fitted",
      "Alde heating fluid changes to manufacturer schedule",
      "Full system testing and a hands-on demonstration",
    ],
    whyItMatters:
      "Aftermarket kit is only as good as its installation — wiring, sealing and mounting done properly protect both the equipment warranty and your van's bodywork. Every roof penetration we make is sealed and documented.",
    metaDescription:
      "Caravan & motorhome upgrades in Malton & North Yorkshire — solar panels from £409, 4G/5G WiFi, GasLow refillable gas, satellites and awnings, supplied & fitted.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const moreServices = [
  "Alde heating fluid change — £218",
  "4G/5G WiFi systems — from £489",
  "Awnings & bike racks",
  "Satellite & TV systems",
  "Tyre & suspension work",
  "Roof & window resealing",
  "Pre-season checks",
  "Warranty claims handled",
] as const;

/** Full price list — taken verbatim from the client's published prices (June 2026). */
export const priceList = [
  {
    category: "Servicing",
    note: "All servicing to the Approved Workshop checklist, with stamped service book and written report.",
    items: [
      { name: "Single axle caravan service", price: "£199.99" },
      { name: "Twin axle caravan service", price: "£229.99" },
      { name: "Motorhome habitation service", price: "£179.99" },
      { name: "Alde heating fluid change", price: "£218.00" },
    ],
  },
  {
    category: "Motor movers — supplied & fitted",
    note: "Powrtouch range. Fitting, battery connection and demonstration included.",
    items: [
      { name: "Powrtouch Freedom (single axle)", price: "£863.20" },
      { name: "Powrtouch Evolution Manual (single axle)", price: "£1,044.00" },
      { name: "Powrtouch Evolution Auto (single axle)", price: "£1,244.00" },
      { name: "Powrtouch Evolution Twin Manual", price: "£2,145.00" },
      { name: "Powrtouch Evolution Twin Auto", price: "£1,494.00" },
      { name: "Powrtouch AWD Manual (twin axle)", price: "£2,120.00" },
      { name: "Powrtouch AWD Auto (twin axle)", price: "£2,497.00" },
    ],
  },
  {
    category: "Solar panels — supplied & fitted",
    note: "SolarGo2 kits with charge controller, cabling and mounting included.",
    items: [
      { name: "65W solar panel kit", price: "£409.00" },
      { name: "100W solar panel kit", price: "£448.99" },
      { name: "160W solar panel kit", price: "£502.00" },
      { name: "200W solar panel kit", price: "£580.00" },
    ],
  },
  {
    category: "WiFi & internet — supplied & fitted",
    items: [
      { name: "4G Smart Compact Ultra", price: "£489.00" },
      { name: "4G Smart Flex", price: "£514.00" },
      { name: "5G Ready Compact Ultra", price: "£554.00" },
      { name: "5G Ready Flex", price: "£584.00" },
    ],
  },
  {
    category: "Gas systems — supplied & fitted",
    items: [{ name: "GasLow refillable LPG system", price: "£899.99" }],
  },
] as const;

export const coverageTowns = [
  "Malton",
  "York",
  "Pickering",
  "Helmsley",
  "Kirkbymoorside",
  "Scarborough",
  "Filey",
  "Driffield",
  "Easingwold",
  "Stamford Bridge",
  "Norton-on-Derwent",
  "Slingsby",
] as const;

export type Review = {
  quote: string;
  author: string;
  source: string;
};

export const reviews: Review[] = [
  {
    quote:
      "Harvey is very knowledgeable, helpful, and offers sound advice. Can't recommend these guys enough.",
    author: "Andy K.",
    source: "Google review",
  },
  {
    quote:
      "What a top notch service from Harvey, who knows his stuff — friendly, helpful and NCC accredited.",
    author: "Motorhome owners' group member",
    source: "Facebook",
  },
  {
    quote:
      "Harvey is super knowledgeable — always takes his shoes off before going in the van. He came in and sorted it out in ten minutes.",
    author: "Verified customer",
    source: "Google review",
  },
  {
    quote:
      "Harvey is very knowledgeable about any job he takes on. His service was excellent.",
    author: "Mike",
    source: "Google review",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Will servicing with you keep my manufacturer warranty valid?",
    answer:
      "Yes. We carry out Approved Workshop servicing to the manufacturer-standard checklist, stamp your service book and provide the documented report your warranty requires. Most UK water-ingress and bodyshell warranties depend on an annual approved service — missing one can void them.",
  },
  {
    question: "Do you come to me, or do I bring my caravan to you?",
    answer:
      "Both. You can drop your caravan or motorhome at our Malton workshop, or we'll come to you — at home, at your storage site or on your seasonal pitch. We look after private owners and holiday parks across York, Ryedale and the North Yorkshire coast.",
  },
  {
    question: "What's included in a full annual service?",
    answer:
      "The chassis side covers brakes, bearings, coupling, corner steadies, tyres and road lights. The habitation side covers the gas system, 230v and 12v electrics, water systems, ventilation, fire safety and a full damp survey with calibrated moisture readings. You get a written report explaining everything we found.",
  },
  {
    question: "How long does a service take?",
    answer:
      "A full service typically takes around half a day. Mobile appointments are arranged for a time that suits you, and workshop bookings can usually be dropped off in the morning and collected the same day.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We're based on Showfield Lane in Malton and travel throughout North Yorkshire — including York, Pickering, Helmsley, Scarborough, Driffield and the surrounding villages, plus storage sites and holiday parks across Ryedale and the coast.",
  },
  {
    question: "When should I book my annual service?",
    answer:
      "Once a year, ideally before the season starts — and within your manufacturer's service window if your caravan is under warranty. Spring slots fill up quickly, so we recommend booking your pre-season service early.",
  },
];

export const valueProps = [
  {
    title: "Your warranty stays valid",
    description:
      "AWS Approved, NCC qualified servicing to manufacturer standards — service book stamped, inspection documented, warranty protected.",
    icon: "badge-check",
  },
  {
    title: "Workshop & fully mobile",
    description:
      "A fully equipped workshop on Showfield Lane in Malton, plus mobile servicing at your home, storage site or holiday park pitch.",
    icon: "van",
  },
  {
    title: "Trusted by owners & parks",
    description:
      "Rated 4.9/5 across 87 Google reviews — and the servicing team behind holiday parks across Ryedale, including five-star sites.",
    icon: "star",
  },
] as const;
