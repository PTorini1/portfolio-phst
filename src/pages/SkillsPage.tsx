import { Badge } from "../components/Badge";
import { Section } from "../components/Section";
import { skillsContent } from "../data/skills";

export function SkillsPage() {
  const content = skillsContent["pt-BR"];

  return (
    <Section eyebrow={content.eyebrow} title={content.title}>
      <p className="lead-text">{content.description}</p>
      <div className="skills-grid">
        {content.categories.map((category) => (
          <div className="skill-group" key={category.id}>
            <h3 className="skill-group-name">{category.name}</h3>
            <div className="badge-list" aria-label={category.name}>
              {category.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
