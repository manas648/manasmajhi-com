import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manas Lexicon",
  description:
    "Ideas, observations, contradictions, and rules for thinking about people, ambition, opportunity, and Odisha.",
};

const sections = [
  {
    title: "Human Nature & Psychology",
    principles: [
      {
        lead: "Don’t worry if people misunderstand you.",
        body: "Most of us don’t even read ourselves correctly.",
      },
      {
        lead: "Time doesn’t pass. It converts — into outcomes, regrets or stories.",
        body: "You choose the ratio.",
      },
    ],
  },
  {
    title: "Ambition, Discipline & Compounding",
    principles: [
      {
        lead: "I’m not allergic to small beginnings.",
        body: "I’m allergic to staying small in the mind.",
      },
      {
        lead: "I don’t want overnight success.",
        body: "I want a compounding graph that looks boring up close and unbelievable in hindsight.",
      },
      {
        lead: "I don’t romanticise 18-hour workdays.",
        body: "I romanticise the day when the work compounds without me being on every call.",
      },
      {
        lead: "Risk isn’t doing something new.",
        body: "Risk is staying the same while the world quietly upgrades around you.",
      },
      {
        lead: "Motivation is loud. Discipline is quiet.",
        body: "Only one shows up when nobody’s clapping.",
      },
    ],
  },
  {
    title: "Opportunity, Talent & Work",
    principles: [
      {
        lead: "Opportunity isn’t always a door.",
        body: "Sometimes it’s just a crack in the wall — enough for one person to squeeze through.",
      },
      {
        lead: "India doesn’t lack talent. It lacks bridges.",
        body: "I just chose to become one.",
      },
      {
        lead: "Your job title is what they call you.",
        body: "Your work is who you are. Don’t confuse the two.",
      },
      {
        lead: "I don’t “place candidates”.",
        body: "I rearrange the chessboard so value and vacancy finally sit on the same square.",
      },
      {
        lead: "Global problems don’t scare me.",
        body: "Underutilised Indian talent does.",
      },
    ],
  },
];

const odishaPrinciples = [
  {
    lead: "Odisha was never a “best kept secret”.",
    body: "It was just under-told. I’m not here to beg for attention; I’m here to demand visibility.",
  },
  {
    lead: "If you understand scarcity in Kalahandi,",
    body: "you’ll never romanticise waste in a boardroom.",
  },
  {
    lead: "“Viksit Odisha 2036” isn’t a slogan for me.",
    body: "It’s a checklist. Either we hit it, or we admit we wasted a generation.",
  },
];

function Principle({ lead, body }: { lead: string; body: string }) {
  return (
    <article className="pb-10 md:pb-12 border-b border-border last:border-0">
      <p className="font-serif text-2xl md:text-3xl lg:text-[2.1rem] leading-[1.35] tracking-tight text-foreground">
        <strong className="font-semibold">{lead}</strong>{" "}
        <span className="text-foreground/75">{body}</span>
      </p>
    </article>
  );
}

export default function LexiconPage() {
  return (
    <main className="min-h-screen px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-3xl mx-auto">
        <header className="pb-16 md:pb-20 border-b border-border">
          <p className="section-label mb-5">Manas Lexicon</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-7 text-balance">
            Ideas. Observations. Contradictions. Rules for thinking.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A collection of thoughts, observations and principles that shape
            how I see people, ambition, opportunity and the world around me.
          </p>
        </header>

        <div className="pt-16 md:pt-20">
          {sections.map((section) => (
            <section key={section.title} className="mb-16 md:mb-20 last:mb-0">
              <p className="section-label mb-8">{section.title}</p>
              <div className="space-y-10 md:space-y-12">
                {section.principles.map((principle) => (
                  <Principle key={principle.lead} {...principle} />
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-3xl border border-border bg-muted/30 px-6 py-12 md:px-12 md:py-16">
            <p className="section-label mb-8">Odisha: Visibility, Development & Responsibility</p>
            <div className="space-y-10 md:space-y-12">
              {odishaPrinciples.map((principle) => (
                <Principle key={principle.lead} {...principle} />
              ))}
            </div>
          </section>
        </div>

        <footer className="pt-20 md:pt-24 text-center">
          <p className="section-label mb-5">Manas Lexicon</p>
          <p className="font-serif text-2xl md:text-3xl mb-6">
            People. Ambition. Opportunity. Odisha.
          </p>
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>Not everything here is meant to be agreed with.</p>
            <p>Some of it is meant to make you think.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
