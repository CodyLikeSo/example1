function Text_block() {
  return (
    <div className="bg-inherit text-gray-200 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-green-400 text-2xl font-bold mb-4">
          MY JOURNEY WITH LINUX: A PATH TO EFFICIENT WORK
        </h1>
        
        {/* Introduction paragraph */}
        <p className="mb-6">
          When a friend first recommended that I try Linux, I had no idea how much it would transform my approach to computing. My introduction to the Linux world began with the Manjaro distribution, and from the moment I started using it, I was captivated by its flexibility and performance.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-green-400 text-xl font-bold mb-2">• FIRST STEPS: THE POWER OF THE COMMAND LINE</h2>
          <p>
            One of the key features that immediately caught my attention was the <span className="font-bold">terminal</span>. After using it for the first time, I realized that this was exactly what I had been missing. The ability to launch applications with a single command and manage processes without relying on a graphical interface not only speeds up my workflow but also gives me greater control and awareness over my system.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-green-400 text-xl font-bold mb-2">• EFFICIENT GIT WORKFLOW</h2>
          <p>
            One of the tools I frequently use in my daily work is <span className="font-bold">Git</span>. On Linux, I discovered a new level of efficiency when working with repositories. There's no need to switch between different editors or interfaces. Everything — from cloning repositories to merging branches — can be done directly in the terminal. This significantly streamlines the development process and makes it more transparent.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-green-400 text-xl font-bold mb-2">• HIGH PERFORMANCE EVEN ON AN HDD</h2>
          <p>
            Another pleasant surprise was the <span className="font-bold">performance</span> of the system. Even when running on a traditional HDD, Manjaro delivered impressive speed. Fast boot times, quick application launches, and smooth system operation — all of this became possible thanks to the optimization of Linux.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-green-400 text-xl font-bold mb-2">• CUSTOMIZATION TO FIT MY NEEDS</h2>
          <p>
            One of the biggest advantages of Linux is its <span className="font-bold">customizability</span>. I can tailor the system exactly to my liking, from adjusting the appearance to fine-tuning my workflow. This allows me to create a working environment that perfectly matches my needs and preferences.
          </p>
        </div>

        {/* Why I Chose Linux Section */}
        <div className="mb-8">
          <h2 className="text-green-400 text-xl font-bold mb-2">WHY I CHOSE LINUX</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-bold">Control and Flexibility:</span> The command line gives me deeper control over the system.</li>
            <li><span className="font-bold">Performance:</span> Even on less powerful hardware, Linux offers impressive speed and responsiveness.</li>
            <li><span className="font-bold">Customization:</span> The ability to adapt the system to my specific tasks and preferences.</li>
            <li><span className="font-bold">Efficient Development Tools:</span> Git, SSH, Docker — all work faster and more seamlessly through the terminal.</li>
          </ul>
        </div>

        {/* Conclusion paragraph */}
        <p>
          Linux has become more than just an operating system for me — it's a tool that helps me work more productively and efficiently every day.
        </p>
      </div>
    </div>
  );
}

export default Text_block;
