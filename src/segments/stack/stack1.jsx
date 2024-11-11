const projectManagementSkills = [
  'Work with cross-functional team',
  'Full Documentation',
  'Scrum & Kanban',
  'Negotiations',
];

const technicalSkills = [
  'Python, Rust, React',
  'Arch Linux, Bash',
  'PostgreSQL',
  'Dev-ops',
  'Docker',
  'Api',
  'Git',
];

export const Stack = () => (
  <div className="w-full p-1">
    <div className=""> {/* Ограничение высоты для прокрутки */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="border-green-600 border-[1px] p-6 rounded-[15px] h-[150%] bg-[#1a1a1a] bg-opacity-55">
            <h3 className="font-bold text-2xl mb-2 text-green-300">Technical Skills:</h3>
            <ul className="list-disc text-xl list-inside">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="mb-2">{skill}</li>
              ))}
            </ul>
          </div>
          </div>

        <div className="border-green-600 border-[1px] p-6 rounded-[15px] h-[150%] bg-[#1a1a1a] bg-opacity-55">
          <div>
            <h3 className="font-bold text-2xl mb-2 text-green-300">Project Management Skills:</h3>
            <ul className="list-disc text-xl list-inside">
              {projectManagementSkills.map((skill, index) => (
                <li key={index} className="mb-2">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
