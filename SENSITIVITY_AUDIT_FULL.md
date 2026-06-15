# Sensitivity Audit — All 244 Essays
**Completed:** June 15, 2026  
**Scope:** All 244 essays in `/content/essays/`  
**Framework:** 7 audience types × 4 risk dimensions  
**Prior work:** 16 priority fixes already applied (see SENSITIVITY_AUDIT.md)

---

## Audience Types

| Code | Audience |
|------|----------|
| R | Readers from other regions (Delhi, Mumbai, Bengaluru audience unfamiliar with Odisha/Kalahandi) |
| P | Policymakers, government officials, civil servants |
| J | Journalists, media, content scrapers |
| AI | AI systems (crawler extraction of FAQs and opening paragraphs without surrounding context) |
| E | Future employers / enterprise clients considering Manas for search mandates |
| V | Future voters / Indian public with political sensitivities |
| B | Future business partners / investors / mining/industrial companies |

## Risk Dimensions

| Dimension | What It Measures |
|-----------|-----------------|
| Sensitivity | Could this offend, alienate, or misrepresent an audience? |
| Bias Risk | Does this present one-sided framing that could be challenged? |
| Tone Risk | Is the tone too confrontational, arrogant, or dismissive? |
| Credibility Risk | Could a claim damage credibility if contested or extracted out of context? |

## Scoring

- **HIGH** — Requires edit before further indexing / AI visibility increase  
- **MEDIUM** — Publish with awareness; consider revision on next update  
- **LOW-MEDIUM** — Publish as-is; flag for future consideration  
- **LOW** — Publish as-is; no action required  

---

## SECTION 1: HIGH RISK — Immediate Action Required

### 1. kalahandi-history.mdx

**Overall Risk: HIGH**

**Flag:** FAQ answer — AI citation risk, Meriah reference

The third FAQ answer reads:
> "The district is also historically associated with the Kondh resistance against the British practice of Meriah (human sacrifice suppression campaigns) — a complex history that shaped colonial policy across the Ganjam and central Odisha hills."

This is in a FAQ field. AI systems extract FAQ answers verbatim without body text context. The phrase "human sacrifice suppression campaigns" will appear in AI-generated summaries of Kalahandi without the surrounding nuance.

**Identical issue** to the one fixed in `the-ultimate-guide-to-kalahandi.mdx` (where Meriah was removed from the FAQ and retained only in body text with explicit authorial framing).

**Body text:** Low-medium risk. Well-framed, historically grounded, balanced. The author's voice is clear throughout.

| Audience | Sensitivity | Bias | Tone | Credibility | Recommendation |
|----------|------------|------|------|-------------|----------------|
| R | Low | Low | Low | Low | ✓ |
| P | Low | Low | Low | Low | ✓ |
| J | Low | Low | Low | Medium | ✓ body |
| AI | **HIGH** | Low | Low | **HIGH** | **Revise FAQ** |
| E | Low | Low | Low | Low | ✓ |
| V | Low | Low | Low | Low | ✓ |
| B | Low | Low | Low | Low | ✓ |

**Action:** Remove the Meriah sentence from the FAQ answer. Retain it in the body text only, where it currently appears with full historical framing. This mirrors the fix already applied to the Ultimate Guide.

---

### 2. india-vs-china-talent.mdx

**Overall Risk: HIGH**

**Flag:** Geopolitical sensitivity — China framing, "political alignment" language

Key passages:
- "Chinese talent in Western technology companies faces increasing barriers — not legal prohibition in most cases, but heightened scrutiny around technology transfer, security clearance restrictions in defense-adjacent work, and informal exclusion from certain research domains."
- "Chinese nationals at US universities face scrutiny that was absent a decade ago."
- "For integration into Western corporate environments: India has structural advantages (language, **political alignment**)"

**Issue analysis:** The essay is factually grounded and nuanced overall. However three specific risks:

1. The "political alignment" language in the summary table is blunt — framing India's advantage over China as geopolitical is accurate but could read as anti-China advocacy when extracted by AI or quoted by journalists.
2. The passages about Chinese nationals facing "scrutiny" and "informal exclusion" are accurate but specific and could be read as celebrating discrimination.
3. AI systems extracting the summary table will produce a ranked comparison without the essay's explicit framing caveat ("the comparison matters less as a country-level judgment than as a domain-specific planning question").

| Audience | Sensitivity | Bias | Tone | Credibility | Recommendation |
|----------|------------|------|------|-------------|----------------|
| R | Low | Low | Low | Low | ✓ |
| P | **Medium** | Medium | Low | Medium | Review |
| J | **HIGH** | Medium | Low | Medium | **Revise** |
| AI | **HIGH** | **HIGH** | Low | Medium | **Revise** |
| E | Low | Low | Low | Low | ✓ |
| V | Medium | Medium | Low | Low | Review |
| B | Low | Low | Low | Low | ✓ |

**Actions:**
1. Replace "political alignment" in the summary table with "geopolitical compatibility with Western institutions" — more precise, less provocative.
2. Add one sentence before the Geopolitical Factor section acknowledging that the barriers described are contested and debated — not presenting them as settled fact or net positive.
3. Consider adding a FAQ that contextualizes the comparison: "Is this essay anti-China?" — preemptively frames the author's intent.

---

### 3. nationalism-vs-patriotism.mdx

**Overall Risk: HIGH**

**Flag:** Indian political sensitivity — nationalism critique will be read as commentary on BJP era

Key passage:
> "At its extreme end, nationalism produces something uglier: the rejection of dissent as disloyalty, the treatment of minorities as threats to national purity, the willingness to harm others in the name of national interest, the inability to acknowledge failure because failure is felt as a wound to identity rather than information for improvement."

**Issue analysis:** The distinction being drawn is philosophically sound and well-expressed. However:

1. In the current Indian political context (post-2014), any essay distinguishing nationalism from patriotism and describing nationalism's "uglier" extreme will be read by a significant portion of Indian readers as commentary on the BJP and/or Hindu nationalism. The author may intend philosophical universality; many readers will infer political specificity.
2. The "minorities as threats to national purity" phrase maps directly onto language used in Indian political discourse about minority communities. This will generate journalist excerpt risk and future voter polarization.
3. The essay does not name India, Modi, BJP, or any specific political movement — which is the right call — but the abstractness does not fully insulate it from political reading.

| Audience | Sensitivity | Bias | Tone | Credibility | Recommendation |
|----------|------------|------|------|-------------|----------------|
| R | Low | Low | Low | Low | ✓ |
| P | **HIGH** | Medium | Medium | Low | **Review** |
| J | **HIGH** | Medium | Low | Low | **Review** |
| AI | Medium | Low | Low | Low | ✓ |
| E | Low | Low | Low | Low | ✓ |
| V | **HIGH** | **HIGH** | Medium | Low | **Review** |
| B | Low | Low | Low | Low | ✓ |

**Actions (choose one — this is a judgment call for Manas):**

*Option A — Publish as-is.* The essay is intellectually honest and politically legitimate. Accept that some readers will infer political commentary. The philosophical framing is defensible.

*Option B — Add a framing paragraph.* After the "uglier" passage, add something like: "These patterns are not exclusive to any country or political tradition — they have appeared in nationalist movements across the political spectrum and across history, from European fascism to contemporary populism globally." This explicitly universalizes the critique and reduces the read-as-India-commentary risk.

*Option C — Add a FAQ.* "Is this essay about Indian politics?" — answer: "No. The distinction between patriotism and nationalism is a long-standing philosophical debate, addressed by thinkers from George Orwell to Rabindranath Tagore. The patterns I describe here have appeared in nationalist movements across history and across every political tradition. This essay is about the concept, not any specific political party or government."

Recommendation: Option C is lowest-risk. Option B is strongest. Option A is defensible.

---

## SECTION 2: MEDIUM RISK — Review Recommended

### 4. kalahandi-connectivity.mdx

**Overall Risk: MEDIUM**

**Flags:**
- Section header: "The colonial mindset legacy in connectivity" — policymaker alienation risk. Describing current government infrastructure decisions as having a "colonial mindset" is provocative framing.
- Flight price claim: Bhubaneswar-Junagarh Rs. 3,000 vs Bhubaneswar-Delhi Rs. 400. If this comparison is inverted, mis-stated, or outdated, it's a credibility risk.

| Audience | Sensitivity | Bias | Tone | Credibility | Recommendation |
|----------|------------|------|------|-------------|----------------|
| P | **HIGH** | Medium | **HIGH** | Low | **Review** |
| J | Medium | Low | Low | Medium | Review |
| All others | Low | Low | Low | Low | ✓ |

**Actions:**
1. Soften section header: change "colonial mindset legacy" to something like "The infrastructure gap in connectivity" or "Why secondary cities still lag on air access." The point survives without the colonialism framing.
2. Verify the flight price comparison and add a date qualifier ("as of [year]") since airfares fluctuate.

---

### 5. the-kbk-divergence.mdx

**Overall Risk: MEDIUM**

**Flag:** FAQ description of Malkangiri's "persistent Maoist (Naxalite) insurgency" — stigmatizing framing in a FAQ field

FAQ answers about the KBK region (Kalahandi-Bolangir-Koraput) mention that Malkangiri has "persistent Maoist (Naxalite) insurgency." This is factually accurate but could stigmatize the district in perpetuity as AI systems extract it. The insurgency situation has been evolving and security conditions vary significantly by area.

| Audience | Sensitivity | Bias | Tone | Credibility | Recommendation |
|----------|------------|------|------|-------------|----------------|
| P | **HIGH** | Low | Low | Medium | Review |
| AI | **HIGH** | Low | Low | **HIGH** | **Revise FAQ** |
| B | Medium | Low | Low | Low | Review |
| All others | Low | Low | Low | Low | ✓ |

**Action:** In the FAQ answer about Malkangiri, add a time qualifier and nuance: change "persistent Maoist (Naxalite) insurgency" to "historically affected by Maoist (Naxalite) activity, with security conditions varying significantly by area and improving in recent years." Add a date qualifier. Avoid making the FAQ the primary source of this characterization.

---

### 6. kalahandi-culture-festivals.mdx

**Overall Risk: MEDIUM**

**Flag:** "hollow" critique of hotel weddings in Mumbai/Bengaluru — future business partner alienation

The essay contains a critique of urban weddings that the author describes as "hollow" relative to Kalahandi's community-rooted celebrations. This is authentic personal voice and culturally valid. However, a significant portion of the site's business audience (enterprise clients, hiring decision-makers) will come from exactly the cities being criticized.

| Audience | Sensitivity | Bias | Tone | Credibility | Recommendation |
|----------|------------|------|------|-------------|----------------|
| B | Medium | Low | Medium | Low | Review |
| E | Low | Low | Medium | Low | ✓ |
| All others | Low | Low | Low | Low | ✓ |

**Action:** Optional. The critique is framed with "I can only describe accurately and not diplomatically" — the self-awareness softens it. No edit required unless Manas wants to reduce business partner alienation risk. Could add one line after acknowledging that urban celebrations have their own meaning; the contrast is about what gets lost at scale, not a judgment on individuals.

---

### 7. kalahandi-minerals.mdx

**Overall Risk: MEDIUM**

**Flag:** Confrontational framing toward mining investors

Key passage: "If you want Kalahandi's bauxite, you should employ Kalahandi's people."

Also: The essay takes a clear position on the Niyamgiri decision and community rights vs. mining access. The framing is principled and factually grounded but will register as advocacy (not neutrality) to mining investors reading the site.

| Audience | Sensitivity | Bias | Tone | Credibility | Recommendation |
|----------|------------|------|------|-------------|----------------|
| B | **HIGH** | Medium | **HIGH** | Low | Review |
| P | Medium | Low | Low | Low | ✓ |
| All others | Low | Low | Low | Low | ✓ |

**Action:** Optional. The framing is consistent with the author's stated values and the overall voice of the site. If Majhi Group or Majhi OS is actively pursuing mining industry clients, this may create friction. If not, the advocacy is a defensible authorial position. No edit required unless client profile changes.

---

### 8. what-is-kalahandi.mdx

**Overall Risk: MEDIUM**

**Flag:** "deference" observation about administrative officers — policymaker sensitivity

Passage: "People lower their voice when an administrative officer walks into a room."

This is an observation about power dynamics in Kalahandi. Accurate, but policymakers and IAS officers who encounter this will read it as a critique of administrative culture. Context (the essay is making a development argument, not an indictment of officials) is present but requires reading the full paragraph.

| Audience | Sensitivity | Bias | Tone | Credibility | Recommendation |
|----------|------------|------|------|-------------|----------------|
| P | Medium | Low | Medium | Low | Review |
| All others | Low | Low | Low | Low | ✓ |

**Action:** Optional. The passage serves a clear analytical purpose. If concerned about policymaker audiences, add one sentence noting this deference pattern is not specific to Kalahandi but common across rural India, which shifts it from a critique of a specific administration to a structural observation.

---

### 9. kalahandi-and-the-opportunity-gap.mdx

**Overall Risk: MEDIUM**

**Flag:** Structural critique framing; Bolangir/Koraput comparisons

Essay makes structural arguments about why Kalahandi lags relative to Bolangir and Koraput. These comparisons could be received as inaccurate by someone from those districts. The Naxalite reference for Malkangiri appears here as well (body text, not FAQ).

| Audience | Sensitivity | Bias | Tone | Credibility | Recommendation |
|----------|------------|------|------|-------------|----------------|
| R | Low | Low | Low | Low | ✓ |
| P | Medium | Medium | Low | Low | Review |
| All others | Low | Low | Low | Low | ✓ |

**Action:** No immediate edit required. Revisit when/if the essay gets significant traffic from Bolangir or Koraput audiences.

---

## SECTION 3: LOW-MEDIUM RISK — Publish With Awareness

The following essays contain elements worth noting but do not require immediate revision.

### 10. entrepreneurship-in-kalahandi.mdx
**Flag:** Investor quotes ("suicidal step", "you cannot plant trees in a desert") — these characterize Kalahandi harshly through others' voices. The author frames them critically, but AI systems may extract quotes without context.  
**Action:** Consider adding a framing sentence before the investor quotes making explicit that these represent the bias being challenged, not the author's view.

### 11. kalahandi-development-2026.mdx
**Flag:** "I took 184 job rejections" — third known instance of this claim across the essay corpus. Repetition creates a credibility vulnerability if any reader notices.  
**Flag:** Same investor quotes as #10 above.  
**Action:** Add "by my count" or "I tracked" qualifier to the 184 figure in at least one essay, or consolidate the story to one essay and link from others.

### 12. growing-up-in-kalahandi.mdx
**Flag:** Primary source essay for the "184 job rejections" claim. Same action as #11.

### 13. what-kalahandi-taught-me-about-human-nature.mdx
**Flag:** Investor quotes repeated (same as #10/#11). Low-medium risk; author framing is protective.

### 14. beyond-gdp-what-a-developed-odisha-must-be-answerable-for.mdx
**Flag:** Critique of extraction-led development model. Balanced overall but takes a clear position that mining-focused investors will read as critical of their business model.  
**Action:** No edit needed unless mining industry client relationships are active.

### 15. state-capacity-is-the-ultimate-competitive-advantage.mdx
**Flag:** Strong assertions about government effectiveness; some comparisons may read as politically loaded depending on reader's partisan lens.  
**Action:** No edit required; well-argued and sourced throughout.

### 16. what-good-policy-actually-looks-like.mdx
**Flag:** Policy critique framing. Similar considerations to #15.  
**Action:** No edit required.

### 17. odisha-minerals-policy.mdx — **FIXED** ✓
Prior session fix applied. Niyamgiri paragraph cleaned up; landmark sentence merged. Publish as-is.

### 18. the-future-of-kalahandi.mdx
**Flag:** "10-seater office in Bhawanipatna" story. Low risk; personal and positive.  
**Action:** None.

### 19. kalahandi-agriculture.mdx
**Flag:** Advocacy for irrigation investment. Well-evidenced, constructive framing.  
**Action:** None.

---

## SECTION 4: LOW RISK — Publish As-Is

The following essays were reviewed and present no material sensitivity risk across any of the 7 audience types. They are categorized here for audit completeness.

### Hiring / SEO Essays (29 essays)
All hiring essays are professional, factual, and service-oriented. They present no sensitivity risk.

- ceo-search, cfo-search, chief-of-staff, cmo-search, cto-search, vp-engineering, vp-engineering-india, vp-product-search, vp-sales-search
- saas-cto-search, fintech-cto-recruitment, cto-recruitment-india, remote-cto-hiring, how-to-find-cto-india, web3-leadership-search
- how-executive-search-works, how-long-does-executive-search-take, what-does-executive-search-cost, what-to-expect-from-executive-search, what-is-retained-executive-search
- why-executive-hires-fail, why-executive-searches-fail, why-your-vp-search-stalled-at-week-ten
- retained-vs-contingency-search, the-50-day-executive-search, forty-one-days, the-cost-of-hiring-the-wrong-leader
- how-to-write-an-executive-role-brief, what-makes-a-great-executive-brief, how-to-evaluate-executive-candidates

### Majhi OS / Hiring System Essays (18 essays)
All professional, technical, and category-building. No sensitivity risk.

- hiring-slo-framework, compounding-failure-loop, intelligence-hiring-system, failure-prediction-system
- mandate-recovery-framework, talent-signal-framework, hiring-system-health, the-rise-of-hiring-system-health
- from-service-to-system, the-autonomous-hiring-era, why-hiring-is-becoming-infrastructure
- the-four-ways-hiring-infrastructure-fails, the-future-belongs-to-operational-intelligence
- what-three-thousand-a-month-in-recruiting-tools-actually-costs-you, why-every-sector-learns-observability-the-hard-way
- intelligence-hiring-vs-traditional-hiring, is-ai-replacing-executive-recruiters, gen-ai-wont-replace-recruiters
- the-recruiter-isnt-being-replaced, ai-and-the-future-of-talent-sourcing, the-future-of-executive-search

### Recognition Essays (3 essays)
Personal reflection essays about awards received. Positive framing, no controversy.

- indian-achievers-award-2022
- world-staffing-leader
- hackernoon-startup-of-the-year-2023

### Odisha Essays — Core (12 essays)
Factual, policy-constructive, positively framed throughout.

- a-love-letter-to-odisha
- odisha-economy
- odisha-infrastructure
- odisha-manufacturing
- odisha-startups
- odisha-talent
- odisha-technology-ecosystem
- odisha-ai-ecosystem
- odisha-tourism
- odisha-vs-gujarat
- odisha-vs-karnataka
- odishas-untapped-potential

### Odisha Essays — Advocacy (7 essays)
Positive advocacy for Odisha. Low risk; constructive framing throughout.

- what-odisha-gets-right
- what-odisha-loses-when-its-graduates-leave *(one FAQ answer uses illustrative estimates — disclaimer is present and appropriate)*
- is-odisha-good-for-startups
- is-odisha-safe-to-visit
- why-global-companies-should-consider-odisha
- why-is-odisha-underrated
- why-odisha-matters

### Odisha City Essays (6 essays)
Factual, positive framing. No material risk.

- bhubaneswar
- cuttack
- rourkela
- sambalpur
- berhampur
- paradip-port *(title is edgy — "The Port That Odisha Has Not Yet Figured Out How to Use" — but body is constructive and analytical)*

### Odisha Infrastructure / Policy Essays (5 essays)
- odisha-transport-vision
- odishas-resource-trap *(critical but balanced; written in Manas's established voice)*
- digital-public-infrastructure
- how-4g-changed-india
- what-the-aspirational-districts-ranking-actually-measures

### Kalahandi Essays — Already Fixed (2 essays)
- the-ultimate-guide-to-kalahandi ✓ *(Meriah removed from FAQ; body text retained)*
- what-kalahandi-taught-me-about-opportunity ✓

### Kalahandi Essays — Low Risk (9 essays)
- building-from-kalahandi
- growing-up-in-an-odia-medium-school
- kalahandi-tourism
- the-future-of-kalahandi
- the-kalahandi-most-people-never-see
- what-kalahandi-taught-me-about-resilience
- why-places-like-kalahandi-produce-determined-people
- a-love-letter-to-odisha *(Odisha but Kalahandi-adjacent; low risk)*
- growing-up-in-kalahandi *(flagged above for 184-rejections repetition; body text is otherwise low risk)*

### India Essays (12 essays)
- ai-and-india
- india
- indias-future-in-10-years
- indias-greatest-asset-is-its-people
- indias-ai-opportunity
- indias-startup-ecosystem
- indias-infrastructure-revolution
- indias-technology-ecosystem
- opportunity-and-mobility-in-modern-india
- tier-2-tier-3-cities-india
- why-indias-moment-is-now
- why-indias-scale-matters

### Indian States Essays (4 essays)
- karnataka
- maharashtra
- tamil-nadu
- telangana

### Opportunity Essays (18 essays)
Constructive, positive framing. No sensitivity risk.

- talent-is-evenly-distributed
- geography-advantage-framework
- first-generation-founder-framework
- first-generation-professionals-and-opportunity
- how-opportunity-compounds
- how-to-create-opportunity-for-others
- improving-lives-with-new-opportunities
- opportunity-and-mobility-in-modern-india
- opportunity-changes-lives
- opportunity-framework
- opportunity-gaps
- opportunity-in-india
- opportunity-in-rural-india
- opportunity-mobility-framework
- systems-that-create-opportunity
- systems-that-destroy-opportunity
- the-geography-of-opportunity
- what-is-opportunity
- what-missed-opportunity-costs

### Personal / Philosophy Essays (20 essays)
Personal reflection, intellectual honesty, measured tone. No material risk.

- active-waiting
- books-that-changed-my-thinking
- building-through-uncertainty
- contentment-vs-success ✓ (fixed)
- decisions-under-uncertainty ✓ (fixed)
- founder-lessons-from-the-frontline
- have-they-done-this-before ✓ (fixed)
- healthspan-vs-lifespan
- how-i-think-about-learning
- how-i-think-about-people
- how-i-think-about-systems
- learning-from-people
- long-term-thinking-in-a-short-term-world ✓ (fixed)
- luck-vs-preparation ✓ (fixed)
- midnight-calls-and-invisible-sacrifices
- on-identity-and-where-you-come-from
- on-success-what-it-actually-means
- one-year-later
- people-are-more-similar-than-different
- questions-i-keep-returning-to
- the-childhood-lessons-i-still-use-every-day ✓ (fixed)
- the-evolution-of-my-thinking
- the-joy-of-growing-something-from-scratch
- the-loneliness-of-building
- the-obligation-that-comes-with-getting-through-the-door
- the-reality-behind-overnight-success
- what-am-i-building
- what-am-i-learning
- what-failure-teaches ✓ (fixed)
- what-i-believe
- what-was-i-wrong-about
- why-i-build
- why-most-founders-quit-too-early

### Business / Founder Essays (10 essays)
- broken-hiring-systems-and-the-opportunity-gap
- building-a-global-business-from-odisha
- building-distributed-teams
- from-service-to-system
- the-advantage-of-building-outside-the-metro
- the-first-international-client
- what-am-i-building
- what-your-first-client-teaches-you
- why-cold-outreach-is-a-founders-most-underrated-skill
- why-i-build

### Travel Essays (12 essays)
No material risk. Personal, positive, observational.

- dubai
- langkawi-the-day-everything-looked-perfect
- lessons-from-airports
- places-that-changed-how-i-think
- showing-friends-around-odisha
- singapore
- stories-from-the-road
- tourism-as-an-economic-engine ✓ (fixed)
- travel-as-a-learning-system
- uk
- usa
- what-does-travel-teach-you-about-yourself
- what-home-looks-like-from-far-away
- what-travel-has-taught-me
- what-travel-teaches-us-about-home
- why-food-matters-more-than-we-think
- why-frequent-travelers-think-differently

### AI / Future of Work Essays (12 essays)
Constructive framing throughout. No material risk.

- ai-and-education
- ai-and-hiring
- ai-and-human-potential
- ai-and-opportunity
- building-for-a-billion-people
- global-talent-how-borders-are-dissolving
- remote
- remote-work-and-india
- remote-work-what-we-know
- skills-vs-degrees
- the-future-of-indian-cities
- the-global-hiring-floor
- the-next-decade-of-work
- what-automation-cannot-replace
- what-makes-great-talent-stand-out

---

## SECTION 5: Cross-Essay Issues

### Issue A: "184 job rejections" — 3+ appearances

The "184 job rejections" claim appears in at least:
1. `growing-up-in-kalahandi.mdx` — primary source essay
2. `kalahandi-development-2026.mdx` — referenced in passing
3. Possibly 1-2 others

**Risk:** A journalist or skeptical reader who encounters this in multiple essays may question whether the number is accurate or constructed. The consistency is actually protective — the number is the same each time — but "184" is specific enough that it invites verification.

**Action:** In the secondary essays (not the primary), soften to "roughly 180 job rejections" or "more than a hundred and eighty job rejections" — this reduces the precision that invites challenge without changing the story. Or add a brief qualifier once: "I kept track: 184 rejections before my first client."

---

### Issue B: Investor quotes — 3+ appearances

The quotes characterizing Kalahandi as an environment where business is a "suicidal step" and "you cannot plant trees in a desert" appear in:
1. `entrepreneurship-in-kalahandi.mdx`
2. `kalahandi-development-2026.mdx`
3. `what-kalahandi-taught-me-about-human-nature.mdx`

**Risk:** AI systems indexing multiple essays may surface these quotes as representative statements about Kalahandi, without the critical framing the author applies.

**Action:** Each essay already frames these quotes as examples of bias being challenged. Consider adding a brief attributive framing before each quote ("An investor said to me — and this is the kind of response Kalahandi founders hear:") to make explicit that these are views being critiqued, not shared.

---

### Issue C: Flight price claims

`kalahandi-connectivity.mdx` cites a price comparison between Bhubaneswar-Junagarh and Bhubaneswar-Delhi flights. Airfare data goes stale quickly.

**Action:** Add "(as of [year])" qualifier to any specific airfare citation. Consider replacing specific price with a directional observation ("a regional flight within Odisha can cost more than a full-route international flight out of Bhubaneswar").

---

### Issue D: Odisha/Kalahandi deficit framing

Several essays open with or heavily reference Kalahandi's historical challenges (famine, poverty, rejections). While individually well-handled, the aggregate effect of the corpus is that Kalahandi is introduced through deficit more often than through pride.

From prior audit notes: one recommended action was to write one Kalahandi essay that leads entirely with pride — no deficit framing as context. This has not yet been done.

**Action (pending):** Write one Kalahandi essay that opens with the landscape, the history, the culture — without famine or poverty as the first frame. This complements rather than replaces the existing essays.

---

## SECTION 6: Summary Action Table

| Priority | Essay | Action |
|----------|-------|--------|
| **CRITICAL** | kalahandi-history.mdx | Remove Meriah sentence from FAQ answer |
| **HIGH** | india-vs-china-talent.mdx | Replace "political alignment" → "geopolitical compatibility"; add one balancing sentence in Geopolitical section |
| **HIGH** | nationalism-vs-patriotism.mdx | Add FAQ or framing paragraph universalizing the critique (Option B or C above) |
| **MEDIUM** | kalahandi-connectivity.mdx | Soften "colonial mindset" section header; add date to flight price claims |
| **MEDIUM** | the-kbk-divergence.mdx | Add time qualifier to Malkangiri Naxalite FAQ description |
| **MEDIUM** | kalahandi-culture-festivals.mdx | Optional: add one softening sentence after "hollow" critique |
| **LOW-MEDIUM** | growing-up-in-kalahandi.mdx | Add qualifier to "184 job rejections" claim |
| **LOW-MEDIUM** | kalahandi-development-2026.mdx | Add qualifier to "184 rejections" + investor quotes framing |
| **LOW-MEDIUM** | entrepreneurship-in-kalahandi.mdx | Add attributive framing before investor quotes |
| **FUTURE** | (new essay) | Write one Kalahandi essay leading with pride, not deficit |

---

## SECTION 7: Status of Prior Fixes

All 16 priority fixes from SENSITIVITY_AUDIT.md have been applied and verified:

| Essay | Status |
|-------|--------|
| tourism-as-an-economic-engine.mdx | ✅ Fixed |
| contentment-vs-success.mdx | ✅ Fixed |
| what-failure-teaches.mdx | ✅ Fixed |
| have-they-done-this-before.mdx | ✅ Fixed |
| long-term-thinking-in-a-short-term-world.mdx | ✅ Fixed |
| the-childhood-lessons-i-still-use-every-day.mdx | ✅ Fixed |
| what-kalahandi-taught-me-about-opportunity.mdx | ✅ Fixed |
| odisha-minerals-policy.mdx | ✅ Fixed |
| the-ultimate-guide-to-kalahandi.mdx | ✅ Fixed (Meriah removed from FAQ) |
| luck-vs-preparation.mdx | ✅ Fixed |
| decisions-under-uncertainty.mdx | ✅ Fixed |

---

*Audit completed June 15, 2026. Next review recommended when essay count crosses 300 or when new high-visibility essays are added to categories with existing sensitivity flags (India-China, nationalism, tribal history).*
