# Wikidata Entity — Manas Ranjan Majhi
## How to submit: wikidata.org → Create a new item → paste each field below

---

### LABELS (what the item is called in each language)

| Language | Label |
|----------|-------|
| English  | Manas Majhi |

### ALIASES (also known as — all name variants go here)

| Language | Alias |
|----------|-------|
| English  | Manas Ranjan Majhi |
| English  | Maanas Ranjan Majhi |
| English  | Manas R. Majhi |

### DESCRIPTION (one line, appears under the name in search)

> Indian entrepreneur and founder of Majhi Group and Majhi OS

---

### STATEMENTS (the structured data Google reads)

**Instance of**
- Value: human (Q5)

**Sex or gender**
- Value: male (Q6581097)

**Country of citizenship**
- Value: India (Q668)

**Place of birth**
- Value: Kalahandi district (Q1797065)

**Occupation**
- Value: entrepreneur (Q131524)
- Value: businessperson (Q43845)

**Employer / founded**
- Majhi Group — add as: employer → Majhi Group
- Majhi OS — add as: employer → Majhi OS

**Official website**
- Value: https://manasmajhi.com
- Qualifier: language → English

**LinkedIn profile**
- Property: LinkedIn personal profile ID (P6634)
- Value: manasmajhi

**Twitter/X username**
- Property: X username (P2002)
- Value: manasmajhi

**Instagram username**
- Property: Instagram username (P2003)
- Value: manas.majhi56

---

### STEP-BY-STEP SUBMISSION GUIDE

1. Go to https://www.wikidata.org
2. Create an account (or log in) — free
3. Click **"Create a new item"** in the left sidebar
4. Enter Label: `Manas Majhi` (English)
5. Enter Description: `Indian entrepreneur and founder of Majhi Group and Majhi OS`
6. Add Aliases: `Manas Ranjan Majhi`, `Maanas Ranjan Majhi`
7. Click **Create**
8. On the item page, add each Statement above using **"+ add statement"**
9. For properties you can't find by name, use the property ID (P-number)

**Key property IDs:**
- Instance of: P31
- Sex or gender: P21
- Country of citizenship: P27
- Place of birth: P19
- Occupation: P106
- Official website: P856
- LinkedIn: P6634
- Twitter/X: P2002
- Instagram: P2003

**After submission:**
- Copy the Q-number of your new item (e.g. Q12345678)
- Add it to the `sameAs` array in manasmajhi.com layout.tsx as:
  `"https://www.wikidata.org/wiki/Q12345678"`
- This completes the entity loop: Google → manasmajhi.com ↔ Wikidata

---

### WHY THIS WORKS

Wikidata is the structured data layer underneath Wikipedia and Google's Knowledge Graph. When Google sees a `sameAs` reference from a website's JSON-LD pointing to a Wikidata item, and the Wikidata item has matching `alternateName` values, it begins to treat all three name variants (Manas Majhi, Manas Ranjan Majhi, Maanas Ranjan Majhi) as the same entity — and associates them all with manasmajhi.com.

The IIT BHU academic (Manas Ranjan Majhi, ceramics) will need his own separate Wikidata item for Google to fully disambiguate. If he doesn't have one, you benefit by default.
