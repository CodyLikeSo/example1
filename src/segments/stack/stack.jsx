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
  <div className="p-1">
    <div className="flex rounded-[15px]">
      <div className="w-1/3 pr-4 border-green-600 border-[1px] rounded-[15px] p-6 mr-4">
        <h2 className="md:text-xl text-md font-bold mb-4 text-green-300">Project Management Skills:</h2>
        <ul className="list-disc text-sm md:text-inherit list-inside mb-6">
          {projectManagementSkills.map((skill, index) => (
            <li key={index} className="mb-2">{skill}</li>
          ))}
        </ul>
        
        <h2 className="md:text-xl font-bold mb-4 text-green-300">Technical Skills:</h2>
        <ul className="list-disc text-sm md:text-inherit list-inside">
          {technicalSkills.map((skill, index) => (
            <li key={index} className="mb-2">{skill}</li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 border-[1px] p-6 border-green-600 rounded-[15px] pl-4">
        {/* Здесь можно добавить контент для правой области */}
        <h2 className="text-xl font-bold mb-4 text-green-300 text-center">Description</h2>
        <p className="">This is a short list of my skilts. To learn more you can go to the DEVELOPMENT or MANAGEMENT page. Also, my resume can be found on Linkedin.</p>
        <img src="src/assets/cat.png" className="absolute px-24 py-12"/>
      </div>
    </div>
  </div>
);
