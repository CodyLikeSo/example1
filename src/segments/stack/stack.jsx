export const Stack = () => (
  <div className="w-full h-full">
    <div className="p-4 flex flex-col md:flex-row overflow-auto h-[100%]">
    <h3 className="text-lg font-semibold mb-2 md:hidden block text-center">Skills</h3>
      <div className="md:w-1/3 w-full grid md:grid-cols-1 grid-cols-2 grid-rows-1 gap-4 border-[1px] border-green-600 p-4 rounded-[15px] ">
        <div>
          <h3 className="text-xl font-semibold mb-2 hidden md:block text-green-300 text-center">Skills:</h3>
          <h3 className="text-xl font-semibold mb-2 md:hidden block text-green-300">Project Management Skills:</h3>
          <ul className="list-disc list-inside">
            <li>Work with cross-functional team;</li>
            <li>Full Documentation;</li>
            <li>Scrum & Kanban;</li>
            <li>Negotiations;</li>
          </ul>
          <div className="hidden md:block">
            <ul className="list-disc list-inside">
              <li>Python, Rust, React;</li>
              <li>Arch Linux, Bash;</li>
              <li>AI Tools Usage;</li>
              <li>PostgreSQL;</li>
              <li>Dev-ops;</li>
              <li>Docker;</li>
              <li>Api;</li>
              <li>Git;</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 md:hidden block text-green-300">Technical Skills:</h3>
          <ul className="list-disc list-inside md:hidden block">
            <li>Python, Rust, React;</li>
            <li>Arch Linux, Bash;</li>
            <li>AI Tools Usage;</li>
            <li>PostgreSQL;</li>
            <li>Dev-ops;</li>
            <li>Docker;</li>
            <li>Api;</li>
            <li>Git;</li>
          </ul>
        </div>
      </div>
      <div className="md:ml-4 mt-4 md:mt-0 md:w-2/3 w-full border-[1px] border-green-600 rounded-[15px] p-4">
        <h3 className="text-xl font-semibold mb-2 text-center text-green-300">Description</h3>
        text
        <img src="src/assets/cat2.png" className="absolute hidden md:block right-12 bottom-12"/>
      </div>
    </div>
  </div>
);
