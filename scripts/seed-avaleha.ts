
import { createClient } from '@supabase/supabase-js';
import path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; // Or use SERVICE_ROLE if needed, but ANON should work if RLS allows or is off

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const avalehaData = {
  name: 'Avaleha',
  slug: 'avaleha',
  type: 'dosage',
  description: 'Semi-solid jams',
  details: `
### How Avaleha (Ayurvedic Herbal Jam) Is Prepared

#### 1. Preparation of Liquid Base
- Prepare the herbal decoction (*Kwatha*), juice (*Swarasa*), or other prescribed liquid by boiling the herbs in water and reducing to the required volume.

#### 2. Addition and Dissolution of Sweeteners
- Add jaggery (*guda*), sugar (*sharkara*), or sugar candy (*khanda sharkara*) to the liquid base.
- Heat gently with continuous stirring until the sweetener dissolves completely and forms a syrup with thread-like consistency (1–2 threads when pressed between fingers).

#### 3. Addition of Herbal Paste (Kalka)
- Add the prescribed herbal paste or powder (*kalka dravya*) to the syrupy mass and continue heating with stirring.
- Maintain mild to moderate heat, ensuring the mixture thickens and attains the classical *paka siddhi lakshana* (proper consistency and texture).

#### 4. Addition of Ghee or Oil (If Specified)
- If the formulation requires, add ghee or oil before the final stage of thickening.

#### 5. Addition of Prakshepa Dravyas (Condiments/Adjuvants)
- Once the mixture reaches the desired consistency and is removed from heat, add fine powders of aromatic or heat-sensitive herbs (*prakshepa dravyas*) and stir well to form a homogenous blend.
- If honey is included, add it only after the mixture cools below 60°C to preserve its properties.

#### 6. Cooling and Packaging
- Allow the Avaleha to cool completely.
- Pack in clean, airtight containers, label with preparation details, and store in a cool, dry place.

**Key Points:**
- Proper Avaleha is semisolid, forms threads when pressed, and sinks in water (indicating correct viscosity).
- Aromatic and volatile ingredients are added after removing from heat to prevent loss of efficacy.
- Industrial preparation uses steam-jacketed vessels and mechanical mixers for large batches.

### Summary Table

| Step | Description |
| :--- | :--- |
| Prepare liquid base | Make decoction or juice from herbs |
| Add & dissolve sweetener | Add jaggery/sugar, heat to syrup with thread consistency |
| Add herbal paste/powder | Mix in kalka, heat and stir to thicken |
| Add ghee/oil (if needed) | Add before final thickening |
| Add prakshepa dravyas | Add aromatic/adjuvant powders after removing from heat |
| Add honey (if needed) | Add after cooling below 60°C |
| Cool & package | Fill in airtight containers after cooling |

This process ensures Avaleha is palatable, stable, and therapeutically effective.

### Common Avaleha Formulations

| Sanskrit Name | Common Name | Principal Scientific Name(s) |
| :--- | :--- | :--- |
| Chyavanaprasha | Chyawanprash | *Emblica officinalis* (Amla) |
| Drakshavaleha | Draksha Avaleha | *Vitis vinifera* (Grape) |
| Vasavaleha | Vasavaleha | *Adhatoda vasica* (Vasa) |
| Kantakaryavaleha | Kantakari Avaleha | *Solanum xanthocarpum* (Kantakari) |
| Kushmandavaleha | Kushmanda Avaleha | *Benincasa hispida* (Kushmanda/Ash gourd) |
| Haridrakhanda | Haridra Khanda | *Curcuma longa* (Haridra/Turmeric) |
| Agastya Haritaki Avaleha | Agastya Haritaki Avaleha | *Terminalia chebula* (Haritaki), *Sesbania grandiflora* (Agastya) |
| Danti Haritaki Avaleha | Danti Haritaki Avaleha | *Baliospermum montanum* (Danti), *Terminalia chebula* |
| Vyaghri Haritaki Avaleha | Vyaghri Haritaki Avaleha | *Solanum xanthocarpum* (Vyaghri), *Terminalia chebula* |
| Kutajavaleha | Kutaja Avaleha | *Holarrhena antidysenterica* (Kutaja) |
| Pippalyasava Avaleha | Pippalyasava Avaleha | *Piper longum* (Pippali) |
| Dashamoola Haritaki Avaleha | Dashamoola Haritaki Avaleha | Dashamoola (ten roots), *Terminalia chebula* |
| Shatavari Guda/Avaleha | Shatavari Avaleha | *Asparagus racemosus* (Shatavari) |
| Brahma Rasayana | Brahma Rasayana | *Emblica officinalis* (Amla), *T. chebula*, *T. bellirica*, others |
| Bhallataka Avaleha | Bhallataka Avaleha | *Semecarpus anacardium* (Bhallataka) |
| Amritaprasha Avaleha | Amritaprasha Avaleha | *Tinospora cordifolia* (Amrita/Guduchi) |
| Shringyadi Avaleha | Shringyadi Avaleha | *Inula racemosa* (Shringi), others |
| Dashamoolavaleha | Dashamoola Avaleha | Dashamoola (ten roots) |
| Badam Pak | Badam Pak | *Prunus amygdalus* (Almond) |
| Saubhagyashunthi Pak | Saubhagya Shunthi Pak | *Zingiber officinale* (Shunthi/Ginger), others |
| Dadimavaleha | Dadima Avaleha | *Punica granatum* (Dadima/Pomegranate) |
| Kalyanak Guda | Kalyanak Guda | Polyherbal, includes *Emblica officinalis* (Amla) |
| Puga Khanda/Supari Pak | Supari Pak | *Areca catechu* (Puga/Supari) |

> **Notes:**
> - Many Avaleha are polyherbal; only principal or eponymous scientific names are listed.
> - The base is typically jaggery, sugar, or honey, with herbal decoctions and pastes.
  `
};


const productsData = [
  { name: 'Chyavanaprasha', common_name: 'Chyawanprash', scientific: 'Emblica officinalis (Amla)' },
  { name: 'Drakshavaleha', common_name: 'Draksha Avaleha', scientific: 'Vitis vinifera (Grape)' },
  { name: 'Vasavaleha', common_name: 'Vasavaleha', scientific: 'Adhatoda vasica (Vasa)' },
  { name: 'Kantakaryavaleha', common_name: 'Kantakari Avaleha', scientific: 'Solanum xanthocarpum (Kantakari)' },
  { name: 'Kushmandavaleha', common_name: 'Kushmanda Avaleha', scientific: 'Benincasa hispida (Kushmanda/Ash gourd)' },
  { name: 'Haridrakhanda', common_name: 'Haridra Khanda', scientific: 'Curcuma longa (Haridra/Turmeric)' },
  { name: 'Agastya Haritaki Avaleha', common_name: 'Agastya Haritaki Avaleha', scientific: 'Terminalia chebula (Haritaki), Sesbania grandiflora (Agastya)' },
  { name: 'Danti Haritaki Avaleha', common_name: 'Danti Haritaki Avaleha', scientific: 'Baliospermum montanum (Danti), Terminalia chebula' },
  { name: 'Vyaghri Haritaki Avaleha', common_name: 'Vyaghri Haritaki Avaleha', scientific: 'Solanum xanthocarpum (Vyaghri), Terminalia chebula' },
  { name: 'Kutajavaleha', common_name: 'Kutaja Avaleha', scientific: 'Holarrhena antidysenterica (Kutaja)' },
  { name: 'Pippalyasava Avaleha', common_name: 'Pippalyasava Avaleha', scientific: 'Piper longum (Pippali)' },
  { name: 'Dashamoola Haritaki Avaleha', common_name: 'Dashamoola Haritaki Avaleha', scientific: 'Dashamoola (ten roots), Terminalia chebula' },
  { name: 'Shatavari Guda', common_name: 'Shatavari Avaleha', scientific: 'Asparagus racemosus (Shatavari)' },
  { name: 'Brahma Rasayana', common_name: 'Brahma Rasayana', scientific: 'Emblica officinalis (Amla), T. chebula, others' },
  { name: 'Bhallataka Avaleha', common_name: 'Bhallataka Avaleha', scientific: 'Semecarpus anacardium (Bhallataka)' },
  { name: 'Amritaprasha Avaleha', common_name: 'Amritaprasha Avaleha', scientific: 'Tinospora cordifolia (Amrita/Guduchi)' },
  { name: 'Shringyadi Avaleha', common_name: 'Shringyadi Avaleha', scientific: 'Inula racemosa (Shringi), others' },
  { name: 'Dashamoolavaleha', common_name: 'Dashamoola Avaleha', scientific: 'Dashamoola (ten roots)' },
  { name: 'Badam Pak', common_name: 'Badam Pak', scientific: 'Prunus amygdalus (Almond)' },
  { name: 'Saubhagyashunthi Pak', common_name: 'Saubhagya Shunthi Pak', scientific: 'Zingiber officinale (Shunthi/Ginger)' },
  { name: 'Dadimavaleha', common_name: 'Dadima Avaleha', scientific: 'Punica granatum (Dadima/Pomegranate)' },
  { name: 'Kalyanak Guda', common_name: 'Kalyanak Guda', scientific: 'Polyherbal, includes Emblica officinalis (Amla)' },
  { name: 'Supari Pak', common_name: 'Puga Khanda/Supari Pak', scientific: 'Areca catechu (Puga/Supari)' },
].map(p => ({
  name: p.name,
  slug: p.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, ''),
  dosage_form: 'Avaleha',
  description: `A traditional ${p.common_name} formulation prepared with ${p.scientific}.`,
  therapeutic_categories: ['General Wellness'], 
  image_url: null,
  purchase_link: null
}));

async function seed() {
  console.log('Seeding Avaleha Category...');
  const { error: catError } = await supabase
    .from('categories')
    .upsert(avalehaData, { onConflict: 'slug' });

  if (catError) {
    console.error('Error seeding Avaleha Category:', catError);
    process.exit(1);
  }
  console.log('Successfully seeded Avaleha Category.');

  console.log('Seeding Avaleha Products...');
  const { error: prodError } = await supabase
    .from('products')
    .upsert(productsData, { onConflict: 'slug' });

  if (prodError) {
    console.error('Error seeding Avaleha Products:', prodError);
    process.exit(1);
  }
  console.log('Successfully seeded Avaleha Products.');
}

seed();
