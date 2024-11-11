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

export const Stack1 = () => (
  <div className="p-1">
    <div className="flex flex-col md:flex-row rounded-[15px] md:h-[515px]">
      <div className="hidden md:block md:w-1/3 w-full pr-4 bg-[#1a1a1a] bg-opacity-55 border-green-600 border-[1px] rounded-[15px] p-6 mr-4 md:max-h-[calc(80vh-150px)] md:overflow-y-auto">
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
      <div className=" md:w-2/3 border-[1px]  p-6 bg-[#1a1a1a] bg-opacity-55 border-green-600 rounded-[15px] pl-4 md:max-h-[calc(80vh-150px)] md:overflow-y-auto md:h-[515px]">
        <h2 className="text-xl font-bold mb-4 text-green-300 text-center">Description</h2>
        <p className="">This is a short list of my skills. To learn more you can go to the DEVELOPMENT or MANAGEMENT page. Also, my resume can be found on LinkedIn.</p>
        <img src="src/assets/cat2.png" className="hidden md:block py-[30%] ml-auto"/>
      </div>
    </div>
  </div>
);

