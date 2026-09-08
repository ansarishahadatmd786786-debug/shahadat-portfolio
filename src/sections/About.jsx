export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2 id="about-title">
            Building modern websites with design, usability and business goals in mind.
          </h2>

          <div className="about-body">
            <p>
              I&apos;m Shahadat, a web developer focused on creating professional,
              responsive websites for small businesses and growing brands.
            </p>

            <p>
              My approach brings together clear visual design, thoughtful user
              experience and clean implementation—so every site feels polished,
              works smoothly on mobile and presents a business with confidence.
            </p>
          </div>
        </div>

        <div className="about-visual">
          <img
            src="/images/shahadat-profile.png"
            alt="Shahadat — Web Developer"
          />
        </div>
      </div>
    </section>
  );
}