
import { 
  FlaskConical, 
  Leaf, 
  Coffee, 
  Flower2, 
  Pill, 
  Flame, 
  Droplet, 
  Utensils, 
  Sparkles, 
  Cookie 
} from 'lucide-react';

export interface Category {
  name: string;
  slug: string;
  desc?: string;
  icon?: any;
  details?: string;
  type?: 'dosage' | 'therapeutic';
}

export const dosageForms: Category[] = [
  { 
    name: "Asava & Arishta", 
    slug: "asava-arishta", 
    desc: "Fermented liquid preparations", 
    icon: FlaskConical,
    details: `
      ### Preparation of Asava and Arishta
      Asava and Arishta are traditional Ayurvedic fermented medicines. Both are prepared using herbs, sweeteners (like jaggery or honey), water, and natural fermenting agents, but their processes differ slightly. Here is a detailed, stepwise explanation:

      #### 1. Selection and Preparation of Herbs
      *   **For Arishta:** Coarsely powder the dried herbs as per the recipe.
      *   **For Asava:** Use fresh herbs or their juices, or sometimes coarsely powdered dried herbs.

      #### 2. Preparation of Herbal Extract
      *   **Arishta (Decoction Method):**
          *   Mix one part of the coarse herbal powder with 16 parts water.
          *   Boil this mixture until the water is reduced to 1/4th or 1/8th of its original volume.
          *   Filter the decoction to remove solid particles. This filtered liquid is called *Kwath* or *Kashayam*.
      *   **Asava (Infusion Method):**
          *   Mix the herbs (fresh or dried) directly with water, without boiling.
          *   Sometimes, fresh juice of herbs is used.

      #### 3. Addition of Sweetening Agents
      *   Add jaggery or honey to the filtered decoction (for Arishta) or directly to the herbal mixture (for Asava).
      *   Stir until the sweetener is fully dissolved.

      #### 4. Addition of Fermentation Initiators and Other Ingredients
      *   Add natural fermenting agents, typically the flowers of *Dhataki* (*Woodfordia fruticosa*) or *Madhuka* (*Madhuca longifolia*).
      *   Add any additional herbs or spices as specified in the formulation. These may regulate fermentation and enhance medicinal value.

      #### 5. Fermentation Process
      *   Transfer the mixture into a fermentation vessel (traditionally an earthen or wooden pot, now sometimes stainless steel or glass).
      *   Fill the vessel up to 2/3rd of its capacity to allow space for fermentation gases.
      *   Seal the vessel tightly, often with a cloth and clay, to prevent contamination.
      *   Place the vessel in a warm, undisturbed location for 2–8 weeks (usually 1–3 months), depending on the climate and the specific recipe.

      #### 6. Monitoring Fermentation
      *   During fermentation, natural yeasts convert sugars into alcohol, which extracts the active medicinal compounds from the herbs and preserves the product.
      *   The process is complete when bubbling stops and the liquid develops a characteristic aroma and taste.

      #### 7. Filtration and Bottling
      *   After fermentation, strain the liquid to remove all solid residues.
      *   Allow the liquid to settle for a few days so fine particles can precipitate.
      *   Decant or filter the clear liquid again if needed.
      *   Store the final product in clean, airtight bottles away from sunlight.

      ### Summary Table: Key Differences

      | Step | Arishta (Decoction) | Asava (Infusion) |
      | :--- | :--- | :--- |
      | **Herbal Base** | Decoction of dried herbs | Fresh juice or infusion of herbs |
      | **Boiling Step** | Yes | No |
      | **Fermentation Agent** | Dhataki/Madhuka flowers | Dhataki/Madhuka flowers |
      | **Sweetener** | Jaggery/Honey | Jaggery/Honey |
      | **Fermentation Period** | 2–8 weeks (1–3 months) | 2–8 weeks (1–3 months) |
      | **Final Product** | Filtered, bottled, slightly alcoholic | Filtered, bottled, slightly alcoholic |

      ### Why This Process?
      *   The fermentation naturally produces a small amount of alcohol (up to 12%), which helps extract both water- and alcohol-soluble medicinal compounds, improves shelf life, and enhances therapeutic effects.
      *   No artificial preservatives or yeast are used; the process is entirely natural, relying on plant-based fermenting agents.
    `
  },
  { 
    name: "Churna", 
    slug: "churna", 
    desc: "Powdered herb mixtures", 
    icon: Leaf,
    details: `
### How Churna Are Prepared

#### 1. Selection and Sourcing of Raw Materials
- Medicinal herbs and other ingredients are sourced from certified suppliers or local farms.
- Only clean, authentic, and high-quality herbs are chosen, often after organoleptic and quality checks.

#### 2. Cleaning and Drying
- All ingredients are thoroughly cleaned to remove dust, dirt, and foreign matter.
- Ingredients are dried completely, often in shade or controlled conditions, to preserve active compounds and prevent spoilage.

#### 3. Pulverization (Grinding)
- Each dried ingredient is powdered separately using grinders, crushers, or pulverizers.
- The powder is passed through fine sieves (commonly mesh size 60–85) to ensure uniform fineness.

#### 4. Blending/Formulation
- The fine powders are accurately weighed and blended in specified proportions according to the classical or proprietary formula.
- Mixing is done in stainless steel or food-grade blenders to achieve a homogenous mixture.

#### 5. Quality Control
- The blended churna is tested for parameters like pH, total ash, extractive values, moisture content, and fineness.
- Only batches passing quality standards proceed to packaging.

#### 6. Packaging
- The final churna is packed in airtight containers (glass, plastic, or laminated pouches) to preserve potency and prevent moisture ingress.
- Containers are labeled with product details, batch number, and expiry date.

#### 7. Storage and Distribution
- Store in a cool, dry place away from sunlight to maintain efficacy.

### Summary Table

| Step | Description |
| :--- | :--- |
| **Selection** | Choose and authenticate raw herbs/ingredients |
| **Cleaning/Drying** | Clean and dry thoroughly |
| **Grinding** | Pulverize each ingredient separately, sieve to fine powder |
| **Blending** | Mix powders in exact proportions as per formula |
| **Quality Control** | Test for purity, potency, and physical parameters |
| **Packaging** | Pack in airtight, labeled containers |
| **Storage** | Store properly; distribute to market |

This process ensures Churna is pure, potent, and safe for consumption, adhering to Ayurvedic and modern quality standards.

### Common Churna Formulations

| Sanskrit Name | Common Name | Principal Scientific Name(s) |
| :--- | :--- | :--- |
| Amalaki Churna | Amla Powder | *Emblica officinalis* |
| Ashwagandha Churna | Ashwagandha Powder | *Withania somnifera* |
| Ajamodadi Churna | Ajamodadi Powder | *Trachyspermum ammi* (Ajmoda) |
| Avipattikara Churna | Avipattikar Powder | Polyherbal (main: *Terminalia chebula*, *Emblica officinalis*, *Zingiber officinale*, etc.) |
| Balachaturbhadra Churna | Balachaturbhadra Powder | Polyherbal (main: *Aegle marmelos*, *Cyperus rotundus*, etc.) |
| Bilvadi Churna | Bilvadi Powder | *Aegle marmelos* (Bilva) |
| Dadimastaka Churna | Dadimastaka Powder | *Punica granatum* (Dadima) |
| Dashanasanskara Churna | Dashanasanskara Powder | Polyherbal (for oral/dental use) |
| Eladi Churna | Eladi Powder | *Elettaria cardamomum* (Ela) and others |
| Haritaki Churna | Haritaki Powder | *Terminalia chebula* |
| Hingvashtaka Churna | Hingvashtaka Powder | *Ferula asafoetida* (Hing) + others |
| Lavanabhaskara Churna | Lavanabhaskar Powder | Polyherbal (main: *Saindhava lavana*, *Zingiber officinale*, *Piper nigrum*, etc.) |
| Nisha-Amalaki Churna | Nisha-Amalaki Powder | *Curcuma longa* (Nisha), *Emblica officinalis* |
| Panchanimba Churna | Panchanimba Powder | *Azadirachta indica* (Nimba) and others |
| Pushyanuga Churna | Pushyanuga Powder | Polyherbal (main: *Ficus religiosa*, *Areca catechu*, etc.) |
| Sitopaladi Churna | Sitopaladi Powder | *Saccharum officinarum*, *Bambusa arundinacea*, *Piper longum*, etc. |
| Talishadi Churna | Talishadi Powder | *Abies webbiana* (Talisapatra) and others |
| Trikatu Churna | Trikatu Powder | *Zingiber officinale*, *Piper nigrum*, *Piper longum* |
| Triphala Churna | Triphala Powder | *Emblica officinalis*, *Terminalia chebula*, *Terminalia bellirica* |
| Jatiphaladya Churna | Jatiphaladya Powder | *Myristica fragrans* (Jatiphala) and others |
| Pippali Churna | Pippali Powder | *Piper longum* |
| Pippalimula Churna | Pippalimula Powder | *Piper longum* (root) |
| Punarnava Churna | Punarnava Powder | *Boerhavia diffusa* |
| Shunthi Churna | Dry Ginger Powder | *Zingiber officinale* |
| Sarasvata Churna | Sarasvata Powder | Polyherbal (main: *Bacopa monnieri*, *Acorus calamus*, etc.) |
| Trivritamul/Trivrita Churna | Trivrit Powder | *Operculina turpethum* |
| Vidanga Churna | Vidanga Powder | *Embelia ribes* |
    ` 
  },
  { 
    name: "Kwath", 
    slug: "kwath", 
    desc: "Herbal decoctions", 
    icon: Coffee,
    details: `
### How Kwath (Ayurvedic Decoction) Is Prepared

#### 1. Selection and Preparation of Ingredients
- Use coarsely powdered or small-cut dried herbs (or fresh, as specified).
- Weigh the herbs according to the prescribed formula.

#### 2. Water Addition
- Add water to the herbs in a specific ratio:
  - Commonly, **1 part herb : 16 parts water** (by weight to volume).
  - For softer herbs, use 4 or 8 parts water; for harder herbs, use up to 16 parts.

#### 3. Soaking (Optional)
- Soak the mixture overnight to enhance extraction, especially for bulk preparations.

#### 4. Boiling
- Place the mixture in a wide-mouthed, open vessel (iron or steel preferred).
- Boil on mild heat (85–90°C), stirring occasionally to prevent sticking or burning.
- Continue boiling until the water reduces to **1/4 or 1/8** of the original volume (typically to 1/8th for standard Kwath).

#### 5. Filtration
- Filter the decoction through a clean cloth while still warm to obtain the final Kwath.

#### 6. Administration
- Use the decoction fresh and warm for best results.

### Example Proportion
| Herb (coarse powder) | Water (ml) | Final Decoction (ml) |
| :--- | :--- | :--- |
| 10 g | 160 ml | 20 ml |
| 48 g | 768 ml | 96 ml |

### Summary Table

| Step | Description |
| :--- | :--- |
| **Selection** | Use coarse powder of dried herbs |
| **Water Ratio** | Typically 1:16 (Herb:Water) |
| **Boiling** | Boil in open vessel on mild heat |
| **Reduction** | Reduce to 1/4 or 1/8 of original volume |
| **Filtration** | Filter warm through clean cloth |
| **Usage** | Use fresh and warm |

**Key Points:**
- Do not cover the vessel while boiling; evaporation is needed.
- Stir intermittently to avoid charring.
- Use fresh decoction for maximum potency.

This traditional process ensures optimal extraction of water-soluble active compounds from the herbs.

### Common Kwath Formulations

| Sanskrit Name | Common Name | Principal Scientific Name(s) |
| :--- | :--- | :--- |
| Ayush Kwath | Ayush Kwath | *Ocimum tenuiflorum*, *Cinnamomum verum*, *Zingiber officinale*, *Piper nigrum* |
| Dashamoola Kwath | Dashamoola Decoction | Ten roots incl. *Oroxylum indicum*, *Aegle marmelos*, *Solanum indicum*, etc. |
| Pathyadi Kwath | Pathyadi Decoction | *Terminalia chebula*, *T. bellirica*, *Emblica officinalis*, *Andrographis paniculata*, *Curcuma longa*, *Tinospora cordifolia*, *Azadirachta indica* |
| Triphala Kwath | Triphala Decoction | *Emblica officinalis*, *Terminalia chebula*, *Terminalia bellirica* |
| Panchatikta Kwath | Panchatikta Decoction | *Azadirachta indica*, *Tinospora cordifolia*, *Trichosanthes dioica*, *Solanum xanthocarpum*, *Adhatoda vasica* |
| Mahamanjisthadi Kwath | Mahamanjisthadi Decoction | *Rubia cordifolia* (Manjistha) and others |
| Maharasnadi Kwath | Maharasnadi Decoction | *Pluchea lanceolata* (Rasna) and others |
| Devdarvyadi Kwath | Devdarvyadi Decoction | *Cedrus deodara* (Devadaru) and others |
| Bharangyadi Kwath | Bharangyadi Decoction | *Clerodendrum serratum* (Bharangi) and others |
| Bruhat Varunadi Kwath | Bruhat Varunadi Decoction | *Crataeva nurvala* (Varuna) and others |
| Rasnasaptak Kwath | Rasnasaptak Decoction | *Pluchea lanceolata* (Rasna) and others |
| Panchavalkal Kwath | Panchavalkal Decoction | *Ficus benghalensis*, *Ficus religiosa*, *Ficus glomerata*, *Ficus lacor*, *Thespesia populnea* |
| Panchatrunamool Kwath | Panchatrunamool Decoction | Five roots, incl. *Desmodium gangeticum*, *Uraria picta*, etc. |
| Poonarnavastak Kwath | Poonarnavastak Decoction | *Boerhavia diffusa* (Punarnava) and others |
| Yavadi Kwath | Yavadi Decoction | *Hordeum vulgare* (Yava/barley) and others |
    `
  },
  { 
    name: "Guggulu", 
    slug: "guggulu", 
    desc: "Resin-based formulations", 
    icon: Flower2,
    details: `
### How Guggulu Is Prepared

#### 1. Purification (Shodhana) of Raw Guggulu
- **Raw guggulu** (the resin from *Commiphora wightii*) is first cleaned to remove physical impurities like twigs, bark, and dust.
- The resin is cut into small pieces and tied in a cloth bundle (*pottali*).
- This bundle is immersed or suspended in a purification liquid, commonly Triphala decoction, cow’s urine, cow’s milk, or other herbal decoctions.
- The liquid is heated (using a *dola yantra* or directly boiling) so the guggulu softens and dissolves into the liquid.
- The dissolved guggulu is filtered while warm through a cloth to separate impurities.
- The filtrate is further heated to evaporate water, yielding purified guggulu, which is then dried (sometimes in sunlight) to obtain a solid mass.

#### 2. Preparation of Guggulu Formulations (Kalpa)
- Purified guggulu is mixed with fine powders of other herbs as per the specific formulation.
- This mixture may be prepared using different methods:
  - **Sagni (with heat):** Guggulu is melted with a little liquid, herbal powders are added, and the mass is cooked until it reaches the right consistency, then shaped into pills (*vati*) or tablets.
  - **Niragni (without heat):** Guggulu is triturated (ground) with the powders and a little ghee until a uniform mass is formed, then shaped as needed.
  - **Adityapaka (sun drying):** The herbal mixture is combined with decoction and dried in sunlight, sometimes with repeated addition and drying cycles.
- The final product is rolled into pills, tablets, or left as a soft mass, depending on the formulation.

### Summary Table

| Step | Description |
| :--- | :--- |
| **Purification** | Dissolve guggulu in herbal liquid, filter, and dry to remove impurities and enhance safety |
| **Mixing** | Combine purified guggulu with specified herbal powders and liquids |
| **Processing** | Use heat (*Sagni*), trituration (*Niragni*), or sun drying (*Adityapaka*) to reach final form |
| **Finalization** | Shape into pills, tablets, or soft masses as per formulation |

This process ensures guggulu is safe, potent, and suitable for therapeutic use, following classical Ayurvedic methods.

### Common Guggulu Formulations

| Sanskrit Name | Common Name | Principal Scientific Name(s) |
| :--- | :--- | :--- |
| Yogaraj Guggulu | Yogaraj Guggulu | *Commiphora wightii* (Guggulu), multiple herbs |
| Kaishore Guggulu | Kaishore Guggulu | *C. wightii*, *Tinospora cordifolia*, *Emblica officinalis*, *T. chebula*, *T. bellirica* |
| Kanchanara Guggulu | Kanchanara Guggulu | *Bauhinia variegata*, *Commiphora wightii* |
| Triphala Guggulu | Triphala Guggulu | *Emblica officinalis*, *Terminalia chebula*, *Terminalia bellirica*, *Commiphora wightii* |
| Punarnava Guggulu | Punarnava Guggulu | *Boerhavia diffusa*, *Commiphora wightii*, *Ricinus communis*, *Zingiber officinale*, *Operculina turpethum* |
| Amrita Guggulu | Amrita Guggulu | *Tinospora cordifolia*, *C. wightii*, *T. chebula*, *T. bellirica*, *Emblica officinalis* |
| Laksha Guggulu | Laksha Guggulu | *Laccifer lacca* (Laksha), *Commiphora wightii*, *Terminalia arjuna*, *Withania somnifera* |
| Gokshuradi Guggulu | Gokshuradi Guggulu | *Tribulus terrestris*, *C. wightii*, *Cyperus rotundus*, *T. chebula*, *T. bellirica*, *Emblica officinalis* |
| Vatari Guggulu | Vatari Guggulu | *Commiphora wightii*, *Terminalia chebula*, *Terminalia bellirica*, *Emblica officinalis* |
| Samshamani Guggulu | Samshamani Guggulu | *Commiphora wightii*, *Tinospora cordifolia* |
| Tryodashang Guggulu | Tryodashang Guggulu | *C. wightii*, *Withania somnifera*, *Pluchea lanceolata*, *Tribulus terrestris*, others |
| Rasanadi Guggulu | Rasanadi Guggulu | *Pluchea lanceolata* (Rasna), *Commiphora wightii* |
| Chitrakadi Guggulu | Chitrakadi Guggulu | *Plumbago zeylanica* (Chitraka), *Commiphora wightii* |
| Varunadi Guggulu | Varunadi Guggulu | *Crataeva nurvala* (Varuna), *Commiphora wightii* |
| Manjishthadi Guggulu | Manjishthadi Guggulu | *Rubia cordifolia* (Manjishtha), *Commiphora wightii* |
| Svayambhuva Guggulu | Svayambhuva Guggulu | *Psoralea corylifolia* (Bakuchi), *Shilajit*, *Commiphora wightii* |
| Trayushanadi Guggulu | Trayushanadi Guggulu | *Zingiber officinale*, *Piper nigrum*, *Piper longum*, *Commiphora wightii* |
| Samsharkar Guggulu | Samsharkar Guggulu | *C. wightii*, *Saindhava lavana*, *Devadaru*, *Mustaka*, *Vacha*, *Yavani*, *Haritaki*, *Bibhitaki*, *Amalaki* |
| Guggulutiktaka Guggulu | Guggulutiktaka Guggulu | *Commiphora wightii*, multiple bitter herbs |

> **Notes:**
> - All these formulations are based on *Commiphora wightii* (Guggulu) as the core ingredient, combined with various other herbs according to classical Ayurvedic texts.
> - Many are polyherbal, so only principal or eponymous scientific names are listed.
    `
  },
  { 
    name: "Vati & Gutika", 
    slug: "vati-gutika", 
    desc: "Tablets and pills", 
    icon: Pill,
    details: `
### How Vati and Gutika Are Prepared

#### 1. Preparation of Ingredients
- All plant ingredients are dried and finely powdered (mesh size ~85).
- Minerals/metals, if used, are processed into *bhasma* or *kajjali* (ash or trituration form).
- Guggulu (if used) is purified before use.

#### 2. Mixing and Binding
- Powders are thoroughly mixed.
- Binding agents are added, such as:
  - Honey, jaggery (*guda*), sugar (*sita*), guggulu, herbal decoctions (*kwath*), fresh juices (*swarasa*), cow’s urine (*gomutra*), or water.
- **Sagni (with heat):** Binding agents like jaggery or guggulu are melted gently, powders are added, and the mixture is stirred to a soft paste.
- **Niragni (without heat):** Powders are triturated with the binding agent to a dough-like consistency.

#### 3. Molding and Drying
- The soft mass is rolled by hand or machine into pills/tablets of uniform size and shape.
- Pills are dried in the shade or in a hot air oven until firm.

#### 4. Packaging and Storage
- Dried vati/gutika are stored in airtight containers to preserve potency and prevent spoilage.

### Summary Table

| Step | Description |
| :--- | :--- |
| **Ingredient Prep** | Dry, powder herbs; process minerals/metals to bhasma/kajjali |
| **Mixing & Binding** | Mix powders; add binding agent (honey, jaggery, guggulu, kwath, etc.) |
| **Sagni (with heat)** | Melt binding agent, add powders, mix to soft mass |
| **Niragni (no heat)** | Triturate powders with binding agent to dough-like mass |
| **Molding** | Roll into pills/tablets of uniform size |
| **Drying** | Dry in shade or hot air oven |
| **Packaging/Storage** | Store in airtight containers |

**Precautions:**
- Use only purified guggulu and bhasma.
- Ensure powders are fine and free from contaminants.
- Maintain uniformity in size and shape.
- Store in airtight containers to ensure shelf life.

This traditional process ensures Vati and Gutika are potent, stable, and effective for therapeutic use.

### Common Vati/Gutika Formulations

| Sanskrit Name | Common Name | Principal Scientific Name(s) |
| :--- | :--- | :--- |
| Agnitundi Vati | Agnitundi Tablet | Polyherbal (main: *Zingiber officinale*, *Piper longum*) |
| Arogyavardhini Vati | Arogyavardhini Tablet | *Terminalia chebula*, *Commiphora wightii*, *Picrorhiza kurroa* |
| Bilwadi Gutika | Bilwadi Gutika | *Aegle marmelos* (Bilva), *Ocimum sanctum*, *Pongamia pinnata* |
| Chandraprabha Vati | Chandraprabha Tablet | Shilajit, *Cinnamomum camphora*, *Piper longum* |
| Eladi Gutika | Eladi Gutika | *Elettaria cardamomum* (Ela), *Cinnamomum zeylanicum* |
| Hinguleshwara Rasa | Hinguleshwara Rasa | *Ferula asafoetida* (Hing), Mercury sulfides (processed) |
| Lavangadi Vati | Lavangadi Tablet | *Syzygium aromaticum* (Clove), *Piper nigrum* |
| Mahayogaraja Guggulu | Mahayogaraja Guggulu | *Commiphora wightii*, *Withania somnifera*, *Curcuma longa* |
| Pravala Panchamrita | Pravala Panchamrita | Coral calcium (*Corallium rubrum*), *Mukta pishti* (pearl) |
| Sutshekhar Rasa | Sutshekhar Rasa | Conch shell ash, *Zingiber officinale*, *Piper longum* |
| Vasant Kusumakar Rasa | Vasant Kusumakar Rasa | Gold nanoparticles, *Mucuna pruriens*, *Crocus sativus* |

> **Notes:**
> - Many formulations are polyherbal; only principal ingredients are listed.
> - Vati/Gutika are tablet formulations, often combining herbs, minerals, or metals (processed for safety).
    `
  },
  { 
    name: "Bhasma", 
    slug: "bhasma", 
    desc: "Calcined mineral preparations", 
    icon: Flame,
    details: `
### How Bhasma (Ayurvedic Formulations) Are Prepared
The preparation of Bhasma—a unique Ayurvedic calcined formulation of metals, minerals, or animal derivatives—involves several meticulous steps to ensure safety, efficacy, and bioavailability. The core process includes:

#### 1. Shodhana (Purification)
- Raw materials (metals, minerals, etc.) are purified to remove physical and chemical impurities and reduce toxicity.
- Purification usually involves repeated heating, quenching in herbal liquids (like cow’s urine, decoctions, or oils), or other specific traditional methods.
- *Example:* Gold is heated and dipped in sesame oil, buttermilk, herbal decoctions, etc., multiple times.

#### 2. Bhavana (Trituration with Herbal Juices)
- The purified material is ground (triturated) with herbal juices, decoctions, or other specified liquids to enhance assimilation and therapeutic properties.
- This process is repeated several times, often with drying in sunlight between cycles.

#### 3. Marana (Incineration/Calcination)
- The material is formed into pellets or cakes, placed in earthen containers (*Sharava Samputa*), sealed, and subjected to controlled heating (*Puta*) using traditional furnaces or electric muffle furnaces.
- The heating and cooling cycle may be repeated multiple times (sometimes dozens of times) with fresh additions of herbal liquids or powders between cycles, depending on the specific Bhasma.
- After each cycle, the material is collected, ground, and reprocessed if necessary until the desired fineness and characteristics are achieved.

#### 4. Quality Control and Testing
- The final Bhasma is tested for classical qualities (such as fineness, ability to float on water, tastelessness, and non-reversibility to its original form) and modern parameters (particle size, absence of toxicity, etc.).

### Summary Table

| Step | Description |
| :--- | :--- |
| **Shodhana** | Purification to remove impurities and reduce toxicity using specific herbal or natural agents |
| **Bhavana** | Wet grinding/trituration with herbal juices or decoctions |
| **Marana** | Calcination/incineration in sealed containers with repeated heating and cooling cycles |
| **Quality Control** | Testing for classical and modern quality parameters |

**Key Points:**
- Each metal or mineral has specific purification and incineration protocols.
- The process transforms the raw material into a fine, bioavailable, and therapeutically safe ash (Bhasma).
- Modern equipment like electric muffle furnaces may be used for better temperature control.

This multi-step process ensures that Bhasmas are safe, effective, and suitable for medicinal use in Ayurveda.

### Common Bhasma Formulations

| Sanskrit Name | Common Name | Principal Scientific Name/Composition |
| :--- | :--- | :--- |
| Abhrak Bhasma | Mica Bhasma | Potassium Aluminum Silicate |
| Akik Bhasma | Agate Bhasma | Silicon Dioxide (SiO₂) |
| Godanti Bhasma | Gypsum Bhasma | Calcium Sulfate (CaSO₄·2H₂O) |
| Gomed Mani Bhasma | Hessonite Garnet Bhasma | Calcium Aluminum Silicate |
| Hajrul Yahood Bhasma | Jasper Bhasma | Silicon Dioxide (SiO₂) |
| Heerak Bhasma | Diamond Bhasma | Carbon (C) |
| Kansya Bhasma | Bell Metal Bhasma | Copper-Tin Alloy (Cu-Sn) |
| Kanta Loha Bhasma | Magnetite Bhasma | Iron Oxide (Fe₃O₄) |
| Kasis Bhasma | Green Vitriol Bhasma | Ferrous Sulfate (FeSO₄) |
| Kukkutanda Twak Bhasma | Eggshell Bhasma | Calcium Carbonate (CaCO₃) |
| Loha Bhasma | Iron Bhasma | Iron (Fe) |
| Mandur Bhasma | Iron Oxide Bhasma | Ferric Oxide (Fe₃O₄) |
| Mukta Bhasma | Pearl Bhasma | Calcium Carbonate (CaCO₃) |
| Muktasukti Bhasma | Pearl Oyster Bhasma | Calcium Carbonate (CaCO₃) |
| Naga Bhasma | Lead Bhasma | Lead (Pb) |
| Neel Mani Bhasma | Sapphire Bhasma | Aluminum Oxide (Al₂O₃) |
| Neelanjana Bhasma | Antimony Sulfide Bhasma | Antimony Trisulfide (Sb₂S₃) |
| Parwal Bhasma | Coral Bhasma | Calcium Carbonate (CaCO₃) |
| Parad Bhasma | Mercury Bhasma | Mercury (Hg) |
| Piroja Bhasma | Topaz Bhasma | Aluminum Silicate |
| Rajat Bhasma | Silver Bhasma | Silver (Ag) |
| Shankh Bhasma | Conch Shell Bhasma | Calcium Carbonate (CaCO₃) |
| Shringa Bhasma | Antler Bhasma | Calcium Phosphate |
| Swarna Bhasma | Gold Bhasma | Gold (Au) |
| Tamra Bhasma | Copper Bhasma | Copper (Cu) |
| Trivanga Bhasma | Tin-Lead-Zinc Bhasma | Tin (Sn), Lead (Pb), Zinc (Zn) |
| Vanga Bhasma | Tin Bhasma | Tin (Sn) |
| Varatika Bhasma | Cowrie Shell Bhasma | Calcium Carbonate (CaCO₃) |
| Vaikranta Bhasma | Tourmaline Bhasma | Complex Borosilicate |
| Vaidoor Bhasma | Cat’s Eye Bhasma | Chrysoberyl (BeAl₂O₄) |
| Yashada Bhasma | Zinc Bhasma | Zinc (Zn) |
| Sphatika Bhasma | Alum Bhasma | Potassium Alum |
| Hartal Bhasma | Orpiment Bhasma | Arsenic Trisulfide (As₂S₃) |
| Harital Godanti Bhasma | Orpiment-Gypsum Bhasma | As₂S₃ + CaSO₄·2H₂O |
| Swarna Makshik Bhasma | Chalcopyrite Bhasma | Copper Iron Sulfide (CuFeS₂) |

> **Notes:**
> - Bhasmas are mineral/metallic preparations processed through incineration and purification.
> - Scientific names reflect primary elemental/compositional constituents.
> - For safety, Bhasmas undergo rigorous *Shodhana* (purification) and *Marana* (calcination) processes.
    `
  },
  { 
    name: "Taila", 
    slug: "taila", 
    desc: "Medicated oils", 
    icon: Droplet,
    details: `
### How Taila (Medicated Oil) Formulations Are Prepared

#### 1. Collection and Preparation of Ingredients
- Collect all required herbs, clean thoroughly, and dry if needed.
- Prepare:
  - **Kalka:** Fine paste of herbs.
  - **Kwatha/Drava Dravya:** Decoction or juice of herbs.
  - **Sneha Dravya:** Base oil (commonly sesame, coconut, or other specified oil).

#### 2. Preparation of Decoction (Kwatha)
- Coarsely powder the herbs and boil them in water (usually 16 parts water to 1 part herb) until reduced to one-fourth the original volume.
- Filter to obtain the decoction.

#### 3. Mixing
- In a wide-mouthed vessel, combine:
  - Base oil (*Sneha Dravya*)
  - Herbal decoction/juice (*Drava Dravya*)
  - Herbal paste (*Kalka Dravya*)
- The typical ratio is **1 part oil : 4 parts decoction : 1 part paste**.

#### 4. Boiling and Cooking
- Heat the mixture gently, stirring continuously to avoid sticking and burning.
- Continue boiling until all water content evaporates and only oil remains—this is confirmed by traditional tests (*Taila Siddhi Lakshana*) such as:
  - No frothing or crackling sound
  - Herbal paste forms a soft roll between fingers
  - Desired aroma and color appear.

#### 5. Filtration
- While still warm, filter the oil through a clean muslin cloth to remove residues and herbal paste.

#### 6. Cooling and Storage
- Allow the oil to cool completely.
- Store in airtight, preferably amber-colored bottles to protect from light and moisture.

### Summary Table

| Step | Description |
| :--- | :--- |
| **Ingredient Prep** | Clean, dry, and powder herbs; prepare base oil |
| **Decoction Prep** | Boil herbs in water, reduce, and filter to get decoction |
| **Mixing** | Combine oil, decoction, and herbal paste in defined ratio |
| **Boiling & Cooking** | Heat with stirring until water evaporates and oil is infused |
| **Filtration** | Filter hot oil to remove solid residues |
| **Cooling & Storage** | Cool and store in airtight, light-protected containers |

**Key Points:**
- The process ensures active herbal constituents are absorbed into the oil base for therapeutic use.
- Quality is checked by traditional and modern parameters before packaging.

### Common Taila Formulations

| Sanskrit Name | Common Name | Principal Scientific Name(s) |
| :--- | :--- | :--- |
| Dhanvantara Taila | Dhanvantara Oil | *Sida cordifolia*, *Desmodium gangeticum*, *Prunus cerasoides* |
| Eranda Taila | Castor Oil | *Ricinus communis* (Castor) |
| Kshirbala Taila | Kshirbala Oil | *Sida cordifolia* (Bala) + Milk |
| Balashwagandhadi Taila | Balashwagandhadi Oil | *Withania somnifera*, *Sida cordifolia* |
| Jatyadi Taila | Jatyadi Oil | *Azadirachta indica* (Neem), *Curcuma longa* |
| Narayana Taila | Narayana Oil | *Sida cordifolia*, *Aegle marmelos* |
| Mahanarayan Taila | Mahanarayan Oil | *Sida cordifolia*, *Asparagus racemosus*, *Vitex negundo* |
| Kottamchukkadi Taila | Kottamchukkadi Oil | *Piper nigrum*, *Zingiber officinale*, *Cedrus deodara* |
| Chandanadi Taila | Sandalwood Oil | *Santalum album* (Sandalwood) |
| Kasisadi Taila | Kasisadi Oil | Ferrous sulfate (processed), *Berberis aristata* |
| Nalpamaradi Taila | Nalpamaradi Oil | *Ficus religiosa*, *Ficus benghalensis*, *Ficus racemosa* |
| Brihatsahacharadi Taila | Brihatsahacharadi Oil | *Vitex negundo*, *Desmodium gangeticum* |
| Panchaguna Taila | Panchaguna Oil | *Sesamum indicum* (Sesame) + 5 herbs |
| Gandharvahasta Taila | Gandharvahasta Oil | *Vitex negundo*, *Acorus calamus* |
| Bhringaraja Taila | Bhringaraj Oil | *Eclipta alba* (Bhringraj) |
| Apamarga Kshara Taila | Apamarga Alkaline Oil | *Achyranthes aspera* (Apamarga) ash |
| Ashvagandha Taila | Ashwagandha Oil | *Withania somnifera* |

> **Notes:**
> - Tailas are polyherbal in most cases; only principal ingredients are listed.
> - Base oils are typically sesame (*Sesamum indicum*) or coconut (*Cocos nucifera*).
    `
  },
  { 
    name: "Ghrita", 
    slug: "ghrita", 
    desc: "Medicated ghee preparations", 
    icon: Utensils,
    details: `
### How Ghrita (Medicated Ghee) Is Prepared

#### 1. Preparation of Ingredients
- **Ghee (Ghrita):** Use pure, preferably cow’s ghee.
- **Kalka:** Prepare a fine paste of the prescribed herbs.
- **Drava Dravya (Liquid):** Prepare the specified liquid, usually a herbal decoction (*kwatha*), juice, milk, or water.

#### 2. Proportion of Ingredients
- If not otherwise specified, the classical ratio is:
  - 1 part *Kalka* (herbal paste)
  - 4 parts *Ghee*
  - 16 parts *Drava Dravya* (liquid)

#### 3. Mixing
- In a wide-mouthed vessel, add the ghee, then the herbal paste, then the liquid.

#### 4. Cooking (Ghrita Paka)
- Heat the mixture over a mild to moderate flame.
- Stir continuously to prevent sticking or burning.
- Continue boiling until all water content evaporates and only the ghee remains. This is confirmed when:
  - The frothing and crackling sound stops.
  - The herbal paste forms a soft bolus between the fingers.
  - The mixture emits the characteristic aroma and color of finished ghrita.

#### 5. Filtration
- While still warm, filter the ghrita through a clean cloth to remove solid residues.

#### 6. Cooling and Storage
- Allow the medicated ghee to cool completely.
- Store in airtight containers, protected from light and moisture.

### Summary Table

| Step | Description |
| :--- | :--- |
| **Ingredient Prep** | Prepare ghee, herbal paste (*kalka*), and liquid (*drava dravya*) |
| **Mixing** | Combine all in a vessel in prescribed ratio |
| **Cooking** | Heat with stirring until water evaporates and only ghee remains |
| **Filtration** | Filter warm ghrita to remove herbal residues |
| **Cooling & Storage** | Cool and store in airtight containers |

**Key Points:**
- Both fat-soluble and water-soluble active herbal compounds are incorporated into the ghee.
- The process must be done on mild to medium heat to avoid burning and ensure proper extraction.
- The final product should be free from moisture and have a uniform texture and aroma.

### Common Ghrita Formulations

| Sanskrit Name | Common/English Name | Principal Scientific Name(s) |
| :--- | :--- | :--- |
| Brahmi Ghrita | Brahmi Ghee | *Bacopa monnieri* |
| Dhatryadi Ghrita | Dhatri Ghee | *Emblica officinalis*, *Asparagus racemosus*, *Glycyrrhiza glabra*, etc. |
| Panchatikta Ghrita | Panchatikta Ghee | *Azadirachta indica* (Neem), *Tinospora cordifolia*, *Trichosanthes dioica*, etc. |
| Mahatiktaka Ghrita | Mahatiktaka Ghee | Polyherbal, mainly bitter herbs |
| Triphala Ghrita | Triphala Ghee | *Emblica officinalis*, *Terminalia chebula*, *Terminalia bellirica* |
| Saraswata Ghrita | Saraswata Ghee | *Bacopa monnieri*, *Acorus calamus*, *Saussurea lappa*, others |
| Jatyadi Ghrita | Jatyadi Ghee | *Jasminum officinale* (Jati), *Azadirachta indica* (Neem), *Curcuma longa*, others |
| Guggulutiktaka Ghrita | Guggulutiktaka Ghee | *Commiphora wightii* (Guggulu), bitter herbs |
| Kalyanaka Ghrita | Kalyanaka Ghee | Polyherbal, includes *Emblica officinalis*, *T. chebula*, *T. bellirica*, others |
| Dadimadi Ghrita | Dadimadi Ghee | *Punica granatum* (Pomegranate), others |
| Kshirabala Ghrita | Kshirabala Ghee | *Sida cordifolia* (Bala), milk |
| Phal Ghrita | Phal Ghee | Polyherbal, includes *Asparagus racemosus* (Shatavari), others |
| Asthishrinkhala Ghrita | Asthishrinkhala Ghee | *Cissus quadrangularis* (Asthishrinkhala) |
| Suvarna Siddha Ghrita | Suvarna Siddha Ghee | Gold (Suvarna), polyherbal |
| Jeevaniya Ghrita | Jeevaniya Ghee | Polyherbal (rejuvenating herbs) |
| Amrita Ghrita | Amrita Ghee | *Tinospora cordifolia* (Amrita) |
| Shatadhauta Ghrita | Shatadhauta Ghee | Cow ghee, repeatedly washed (no herbs) |
| Sthiradi Ghrita | Sthiradi Ghee | *Desmodium gangeticum* (Shalaparni), others |
| Swadanstradi Ghrita | Swadanstradi Ghee | Polyherbal |
| Haritakyadi Ghrita | Haritakyadi Ghee | *Terminalia chebula* (Haritaki) |
| Drakshadi Ghrita | Drakshadi Ghee | *Vitis vinifera* (Draksha/Grape) |
| Kasherukadi Ghrita | Kasherukadi Ghee | Polyherbal |
| Trivritadi Ghrita | Trivritadi Ghee | *Operculina turpethum* (Trivrit) |
| Nagdantyadi Ghrita | Nagdantyadi Ghee | *Nagadamani* (Aristolochia indica), others |
    `
  },
  { 
    name: "Lepa", 
    slug: "lepa", 
    desc: "Pastes for external application", 
    icon: Sparkles,
    details: `
### How Lepa (Ayurvedic Medicinal Paste) Is Prepared

#### 1. Selection and Preparation of Ingredients
- Choose the required herbs, minerals, or animal products as per the formulation.
- If using fresh herbs, clean and pound them directly to a fine paste.
- If using dried herbs, powder them finely (using a mortar and pestle or grinder) and sieve for uniformity.

#### 2. Mixing with Liquid Medium
- Place the powdered or fresh ingredients in a mortar.
- Add a suitable liquid to achieve paste consistency. Common liquids include water, milk, herbal decoctions (*kwatha*), ghee, oil, or other specified media, depending on the therapeutic need.
- The quantity of liquid should be just enough to make a smooth, spreadable paste—not too runny or too dry.

#### 3. Trituration
- Grind (triturate) the mixture thoroughly until a uniform, smooth paste is formed. This ensures even distribution of all ingredients and enhances efficacy.

#### 4. Proportion of Sneha (Oily Substance)
- For certain conditions, ghee or oil is added in specific proportions:
  - 1/4th part for *Vata* disorders
  - 1/6th part for *Pitta* disorders
  - 1/8th part for *Kapha* disorders

#### 5. Application
- Cleanse the affected skin area.
- Apply the lepa paste in the prescribed thickness (typically 1/4 to 1/2 angula, about 0.5–1 cm) against the direction of hair growth for better absorption.
- Allow it to dry and act, then remove as directed.

### Summary Table

| Step | Description |
| :--- | :--- |
| **Ingredient Prep** | Clean, powder or paste herbs/minerals/animal products |
| **Mixing** | Add suitable liquid (water, milk, decoction, ghee, oil, etc.) |
| **Trituration** | Grind to a smooth, uniform paste |
| **Sneha Addition** | Add ghee/oil in proportion if required for dosha-specific lepas |
| **Application** | Apply to cleansed skin, in proper thickness, and remove after drying |

**Key Points:**
- Lepa is always freshly prepared and used externally.
- The choice of liquid and sneha (oil/ghee) depends on the disease and dosha involved.
- The process is simple but must be done with care for safety and efficacy.

### Common Lepa Formulations

| Sanskrit Name | Common Name | Principal Scientific Name(s) |
| :--- | :--- | :--- |
| Avalgujadi Lepa | Avalgujadi Lepa | *Psoralea corylifolia* (Bakuchi), others |
| Kachuradi Lepa | Kachuradi Lepa | *Curcuma zedoaria* (Kachura), others |
| Kalaka Lepa | Kalaka Lepa | *Terminalia chebula* (Haritaki), others |
| Grhadhumadi Lepa | Grhadhumadi Lepa | Grhadhuma (House soot), others |
| Tutthadi Lepa | Tutthadi Lepa | Copper sulfate (Tuttha), others |
| Dashanga Lepa | Dashanga Lepa | *Albizia lebbeck*, *Glycyrrhiza glabra*, *Valeriana wallichii*, *Santalum album*, *Elettaria cardamomum*, *Nardostachys jatamansi*, *Curcuma longa*, *Berberis aristata*, *Saussurea costus*, *Acacia catechu* |
| Rasanadi Lepa | Rasanadi Lepa | *Pluchea lanceolata* (Rasna), others |
| Pathadi Lepa | Pathadi Lepa | *Cissampelos pareira* (Patha), others |
| Shothagna Lepa | Anti-inflammatory Lepa | *Boerhavia diffusa* (Punarnava), *Cedrus deodara*, *Zingiber officinale*, *Brassica campestris*, *Moringa oleifera* |
| Vishaghna Lepa | Anti-poison Lepa | *Azadirachta indica* (Neem), *Curcuma longa*, others |
| Manjishtadi Lepa | Manjishtadi Lepa | *Rubia cordifolia* (Manjishta), others |
| Jatiphaladi Lepa | Jatiphaladi Lepa | *Myristica fragrans* (Jatiphala), others |
| Shalmali Kantaka Lepa | Shalmali Kantaka Lepa | *Bombax ceiba* (Shalmali), others |
| Arjunadi Lepa | Arjunadi Lepa | *Terminalia arjuna* (Arjuna), others |
| Kadhiradi Lepa | Kadhiradi Lepa | *Acacia catechu* (Khadira), others |
| Kukkutanda Twak Lepa | Eggshell Lepa | Eggshell (Calcium carbonate), others |
| Rasanjana Lepa | Rasanjana Lepa | *Berberis aristata* (Rasanjana), others |
| Gandhakadi Lepa | Gandhakadi Lepa | Sulphur (Gandhaka), others |
| Haridra Lepa | Turmeric Lepa | *Curcuma longa* (Haridra) |
| Yashtimadhu Lepa | Licorice Lepa | *Glycyrrhiza glabra* (Yashtimadhu) |
| Aragwadhadi Lepa | Aragwadhadi Lepa | *Cassia fistula* (Aragwadha), others |

> **Notes:**
> - Many Lepas are polyherbal; only principal or eponymous scientific names are listed.
> - Lepas may also contain minerals (e.g., Tuttha-copper sulfate, Gandhaka-sulphur) and animal products (e.g., eggshell).
    `
  },
  { 
    name: "Avaleha", 
    slug: "avaleha", 
    desc: "Semi-solid jams", 
    icon: Cookie,
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
  }
];

export const therapeuticCategories: Category[] = [
    "Allergy", "Autoimmune", "Blood Disorders", "Bone, Muscle & Joint", "Cold & Cough", "Digestion & Gut",
    "Eye Health", "Female Health", "General Wellness", "Heart Care", "Immunity", "Kidney Health",
    "Kids Health", "Liver Health", "Men's Health", "Mental Health", "Skin Health", "Weight Management"
].map(name => ({
    name,
    slug: name.toLowerCase().replace(/ /g, '-').replace(/[&,]/g, '').replace(/--+/g, '-')
}));

export function getCategoryBySlug(slug: string): Category | null {
    const dosage = dosageForms.find(d => d.slug === slug);
    if (dosage) return { type: 'dosage', ...dosage };
    
    const therapeutic = therapeuticCategories.find(t => t.slug === slug);
    if (therapeutic) return { type: 'therapeutic', ...therapeutic };
    
    return null;
}
