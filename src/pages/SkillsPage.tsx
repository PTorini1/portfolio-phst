import { Badge } from "../components/Badge";
import { Section } from "../components/Section";

const initialSkills = [".NET", "C#", "Azure", "SQL Server", "APIs", "Docker"];

export function SkillsPage() {
  return (
    <Section eyebrow="Skills" title="Tecnologias e fundamentos">
      <div className="badge-list" aria-label="Skills iniciais">
        {initialSkills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </Section>
  );
}
