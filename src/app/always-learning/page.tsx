import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Always Learning — Manas Majhi",
  description:
    "Books, experiences, programs, and ideas that shaped how Manas Majhi sees the world. A living record of learning — from Kalahandi to global.",
  alternates: {
    canonical: `${SITE_URL}/always-learning`,
  },
};

export default function AlwaysLearningPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Always Learning</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Books, experiences,<br />
            <span className="text-muted-foreground">programs, and ideas.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I don't believe learning ends with formal education.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Some of the most important lessons I've learned came from growing up in Kalahandi,
            building businesses, meeting people from different walks of life, traveling, reading,
            asking questions, making mistakes, and staying curious.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            This page is a living record of the books, experiences, programs, and ideas
            that have shaped my thinking.
          </p>
        </div>

        {/* Section: Experiences */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-medium mb-10 pb-4 border-b border-border">
            Experiences That Taught Me The Most
          </h2>

          <div className="space-y-12">

            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-2">First classroom</p>
              <h3 className="font-serif text-2xl font-medium mb-3">Growing Up in Kalahandi</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Growing up in Kalahandi taught me one lesson early: talent is everywhere.
                Opportunity is not.
              </p>
              <p className="mt-3 text-base leading-relaxed">
                Many of the smartest and hardest-working people I've met never received the
                opportunities they deserved. This observation eventually became the foundation
                of my worldview.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-2">Foundation</p>
              <h3 className="font-serif text-2xl font-medium mb-3">Odia-Medium Schooling</h3>
              <p className="text-base leading-relaxed">
                My education began in an Odia-medium government school.
                It taught me resilience, adaptability, humility, and the value of making
                the most of whatever resources are available.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-2">The real MBA</p>
              <h3 className="font-serif text-2xl font-medium mb-3">Building Majhi Group</h3>
              <p className="text-base leading-relaxed">
                Building a company from Odisha taught me more than any business book ever could.
                Every client, candidate, success, mistake, and challenge became a lesson in
                entrepreneurship, leadership, trust, and long-term thinking.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-2">Common ground</p>
              <h3 className="font-serif text-2xl font-medium mb-3">Working With Global Clients</h3>
              <p className="text-base leading-relaxed">
                Working with people across countries and cultures reinforced a simple truth:
                people are more similar than different.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Regardless of geography, most people want the same things: meaningful work,
                strong relationships, and a better future.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-2">Perspective</p>
              <h3 className="font-serif text-2xl font-medium mb-3">Travel</h3>
              <p className="text-base leading-relaxed">
                Travel expanded my understanding of the world. It introduced me to new cultures,
                systems, perspectives, and possibilities.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Most importantly, it helped me appreciate home.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Books */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-medium mb-4 pb-4 border-b border-border">
            Books That Shaped My Thinking
          </h2>
          <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
            These are not necessarily the best books I've read. They are the books that most
            influenced how I think about opportunity, leadership, society, India, and human potential.
          </p>

          <div className="space-y-12">

            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-6">India</p>

              <div className="space-y-8">
                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-medium text-base mb-1">India After Gandhi</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    One of the most influential books I've read on modern India.
                    It helped me understand the scale, complexity, resilience, and evolution
                    of the world's largest democracy.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-medium text-base mb-1">The India Way &amp; Why Bharat Matters</h3>
                  <p className="text-xs text-muted-foreground mb-2">S. Jaishankar</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These books helped me better understand India's strategic thinking,
                    global role, and emerging influence.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-medium text-base mb-1">Being Different</h3>
                  <p className="text-xs text-muted-foreground mb-2">Rajiv Malhotra</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A rigorous examination of India's civilisational identity and how it differs
                    from Western frameworks. Changed how I think about culture, philosophy,
                    and the importance of reclaiming Indian intellectual traditions on their own terms.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-medium text-base mb-1">Mahabharata</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Not just a story — a civilisational manual. The Mahabharata shaped how
                    I think about dharma, duty, consequence, and the complexity of human
                    decision-making under pressure. Every leader should read it.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-6">Leadership &amp; History</p>

              <div className="space-y-8">
                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-medium text-base mb-1">Works by Winston Churchill</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    History offers lessons that few classrooms can provide.
                    Studying Churchill's leadership during extraordinary circumstances helped me
                    appreciate the importance of communication, conviction, resilience, and
                    decision-making under pressure.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-medium text-base mb-1">Books on Indian Leadership</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Narendra Modi · Naveen Patnaik · Political, administrative, and business leaders
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These books helped me understand governance, institution building,
                    public policy, and long-term development.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Programs */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-medium mb-4 pb-4 border-b border-border">
            Programs &amp; Structured Learning
          </h2>
          <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
            While real-world experience remains the greatest teacher, these programs
            significantly influenced my thinking.
          </p>

          <div className="space-y-10">

            <div className="pl-4 border-l-2 border-border">
              <h3 className="font-medium text-base mb-1">McKinsey Forward</h3>
              <p className="text-xs text-muted-foreground mb-2">Leadership · Communication · Problem Solving · Adaptability</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A valuable experience that reinforced the importance of continuous learning.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-border">
              <h3 className="font-medium text-base mb-1">Organizational Analysis</h3>
              <p className="text-xs text-muted-foreground mb-2">Stanford Online</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A deeper understanding of organizations, incentives, human behavior, leadership,
                and decision-making. This program strengthened my appreciation for how effective
                organizations are built and sustained.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-border">
              <h3 className="font-medium text-base mb-1">Artificial Intelligence</h3>
              <p className="text-xs text-muted-foreground mb-2">
                Generative AI · AI Applications · Prompt Engineering · Human-AI Collaboration
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These programs expanded my understanding of how technology can amplify human potential.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-border">
              <h3 className="font-medium text-base mb-1">Workforce &amp; Leadership</h3>
              <p className="text-xs text-muted-foreground mb-2">
                Strategic Workforce Planning · Talent Systems · Organizational Design · Managing Distributed Teams
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These areas directly connect to my work in executive search and talent strategy.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Ideas */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-medium mb-10 pb-4 border-b border-border">
            Ideas That Changed My Thinking
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="font-serif text-xl font-medium mb-2">Talent Is Universal</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Great talent exists everywhere — not only in major cities, not only in elite
                institutions, not only in privileged environments.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-medium mb-2">Opportunity Shapes Outcomes</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                The opportunities available to people often matter more than their starting
                circumstances. This idea sits at the center of almost everything I write.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-medium mb-2">Geography Should Not Determine Destiny</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Where someone is born should not define what they can become.
                Technology, education, entrepreneurship, and opportunity can help bridge that gap.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-medium mb-2">Human Potential Is The Greatest Resource</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                More valuable than capital. More valuable than infrastructure. More valuable than
                natural resources. Human potential is the foundation of progress.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-medium mb-2">Long-Term Thinking Wins</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Most meaningful outcomes require patience. Businesses. Relationships. Communities.
                Ideas. The best things in life compound over time.
              </p>
            </div>

          </div>
        </section>

        {/* Section: People */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-medium mb-6 pb-4 border-b border-border">
            People Who Shaped My Thinking
          </h2>
          <p className="text-base leading-relaxed">
            No list would be complete without the people.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            My family. Teachers. Friends. Clients. Entrepreneurs. Mentors.
            Colleagues. Fellow travelers. And thousands of professionals
            I've interacted with through my work.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Many of my best ideas came not from books, but from conversations.
          </p>
        </section>

        {/* Section: Currently Learning */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-medium mb-4 pb-4 border-b border-border">
            What I'm Learning Right Now
          </h2>
          <p className="text-sm text-muted-foreground mb-8">Because learning is never finished.</p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Artificial Intelligence",
              "Human Potential",
              "Organizational Design",
              "Future of Work",
              "Opportunity Creation",
              "Odisha's Future",
              "India's Growth Story",
              "Systems Thinking",
            ].map((topic) => (
              <div
                key={topic}
                className="px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm font-medium"
              >
                {topic}
              </div>
            ))}
          </div>
        </section>

        {/* Final thought */}
        <section className="border-t border-border pt-12">
          <blockquote className="font-serif text-2xl font-medium leading-snug text-foreground mb-6">
            "Talent is abundant. Opportunity is not."
          </blockquote>
          <p className="text-base text-muted-foreground leading-relaxed">
            Everything on this page — books, experiences, programs, conversations, successes,
            and failures — ultimately reinforced this belief.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            And it continues to shape how I think about Kalahandi, Odisha, India, technology,
            entrepreneurship, and the future.
          </p>
        </section>

      </div>
    </div>
  );
}
