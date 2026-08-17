export const PRODUCT = {
  id: 'fateek-protein',
  slug: 'fateek-protein',
  name: 'Fateek Ayurvedic Protein',
  tagline: 'Premium Ayurvedic-Inspired Protein',
  shortDescription:
    'Crafted for everyday fitness and wellness, Fateek blends modern protein nutrition with the wisdom of traditional Indian botanicals.',
  description:
    'Fateek is a premium protein formulation inspired by Ayurvedic wellness traditions. Designed for gym enthusiasts, active professionals, and health-conscious individuals who want a clean, effective way to support their daily protein intake. Every serving is crafted with care — no shortcuts, no compromises.',
  price: 1499,
  mrp: 1999,
  currency: 'INR',
  variants: [
    { id: 'chocolate', label: 'Chocolate', available: true },
    { id: 'vanilla', label: 'Vanilla', available: true },
    { id: 'unflavoured', label: 'Unflavoured', available: false },
  ],
  servingSize: '— g per serving',
  servingsPerContainer: '—',
  netQuantity: '1 kg',
  proteinPerServing: '— g',
  images: [
    { src: '/images/product-hero.png', alt: 'Fateek Protein — front view' },
    { src: '/images/product-angle2.png', alt: 'Fateek Protein — angled view' },
  ],
  benefits: [
    {
      icon: '🌿',
      title: 'Ayurvedic Inspiration',
      description: 'Inspired by centuries of Indian wellness traditions and modern nutrition science.',
    },
    {
      icon: '💪',
      title: 'Fitness Focused',
      description: 'Formulated for people who take their training and daily nutrition seriously.',
    },
    {
      icon: '✨',
      title: 'Clean Formula',
      description: 'Quality ingredients, thoughtfully selected — nothing extra, nothing hidden.',
    },
    {
      icon: '🕐',
      title: 'Easy Everyday',
      description: 'Designed to fit seamlessly into your daily routine, any time of day.',
    },
  ],
  ingredients: [
    {
      name: '[Ingredient Placeholder]',
      role: 'Primary Protein Source',
      description: 'Details to be filled with verified brand-supplied ingredient information.',
    },
    {
      name: '[Ingredient Placeholder]',
      role: 'Ayurvedic Botanical',
      description: 'Details to be filled with verified brand-supplied ingredient information.',
    },
    {
      name: '[Ingredient Placeholder]',
      role: 'Supporting Nutrient',
      description: 'Details to be filled with verified brand-supplied ingredient information.',
    },
  ],
  nutrition: [
    { label: 'Serving Size', value: '— g', isHeader: true },
    { label: 'Energy', value: '— kcal' },
    { label: 'Protein', value: '— g', highlight: true },
    { label: 'Total Carbohydrates', value: '— g' },
    { label: '  of which Sugars', value: '— g', indent: true },
    { label: 'Total Fat', value: '— g' },
    { label: '  of which Saturated Fat', value: '— g', indent: true },
    { label: 'Dietary Fibre', value: '— g' },
    { label: 'Sodium', value: '— mg' },
  ],
  howToUse: [
    {
      step: 1,
      label: 'Scoop',
      icon: '🥄',
      description: 'Add [—] scoops of Fateek Protein to your shaker.',
    },
    {
      step: 2,
      label: 'Mix',
      icon: '🥤',
      description: 'Add [—] ml of water or milk. Shake well for 20–30 seconds.',
    },
    {
      step: 3,
      label: 'Enjoy',
      icon: '🌟',
      description: 'Best consumed post-workout or as part of your daily nutrition routine.',
    },
  ],
  targetAudience: [
    {
      title: 'Gym Enthusiasts',
      description:
        'For those who train regularly and want to ensure their protein intake supports their performance and recovery.',
      icon: '🏋️',
    },
    {
      title: 'Active Professionals',
      description:
        'Busy lives shouldn\'t mean compromising on nutrition. Fateek makes daily protein easy.',
      icon: '💼',
    },
    {
      title: 'Health-Conscious Individuals',
      description:
        'For people who read labels, care about what they consume, and want clean, quality nutrition.',
      icon: '🥗',
    },
    {
      title: 'Fitness Beginners',
      description:
        'Just starting your fitness journey? Fateek makes adding protein to your diet simple and approachable.',
      icon: '🌱',
    },
  ],
  faqs: [
    {
      q: 'What is Ayurvedic protein?',
      a: "Fateek is a protein supplement that draws inspiration from Ayurvedic wellness principles — incorporating traditional Indian botanical knowledge into a modern protein formula. It's not a medicine; it's a protein-focused nutrition product inspired by India's wellness heritage.",
    },
    {
      q: 'How much protein is in each serving?',
      a: 'Exact protein values per serving are available on the product label. We will display accurate, verified values here — no placeholder numbers are shown as real data.',
    },
    {
      q: 'When should I take Fateek Protein?',
      a: 'Fateek can be consumed as part of your daily nutrition routine. Many users prefer it post-workout or as a convenient protein boost during the day. Specific usage guidance is included with the product.',
    },
    {
      q: 'Is it suitable for gym enthusiasts?',
      a: "Yes — Fateek is designed with fitness-conscious individuals in mind, including regular gym-goers who want to support their daily protein intake conveniently and cleanly.",
    },
    {
      q: 'Is Fateek vegetarian?',
      a: 'We will confirm vegetarian/vegan status here once verified with the brand. All ingredient and dietary information displayed will be accurate.',
    },
    {
      q: 'Does it contain added sugar?',
      a: 'Accurate sugar content per serving is available on the product label. Please refer to the nutrition table for verified values.',
    },
    {
      q: 'How do I store Fateek Protein?',
      a: 'Store in a cool, dry place away from direct sunlight. Keep the container sealed when not in use. Specific storage instructions are provided on the packaging.',
    },
    {
      q: 'How long does delivery take?',
      a: 'We typically deliver within 3–7 business days across India. Exact delivery timelines depend on your location. You will receive a tracking link once your order is dispatched.',
    },
    {
      q: 'What is your return and refund policy?',
      a: 'We have a hassle-free return policy. If you are not satisfied, please reach out within [— days] of delivery. See our Returns Policy page for full details.',
    },
  ],
  testimonials: [] as {name:string;review:string;rating:number;verified:boolean}[],
};

export type Product = typeof PRODUCT;
