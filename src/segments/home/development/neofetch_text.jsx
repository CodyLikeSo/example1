import React from 'react';

const NeofetchOutput = () => {
  return (
    <div className="bg-inherit text-green-600 leading-[125%] text-[90%]">
      <pre>
        {`
                   -\`                    `}
        <span className="text-white">cody@archlinux</span>
        {`
                  .o+\`                   ----------------
                 \`ooo/                   OS:`}
        <span className="text-white"> Arch Linux x86_64</span>
        {`
                \`+oooo:                  Host:`}
        <span className="text-white"> MS-7C02 1.0</span>
        {`
               \`+oooooo:                 Kernel:`}
        <span className="text-white"> 6.1.0-arch1-1</span>
        {`
               -+oooooo+:                Uptime:`}
        <span className="text-white"> 1 hour, 54 mins</span>
        {`
             \`/:-:++oooo+:               Packages:`}
        <span className="text-white"> 775 (pacman)</span>
        {`
            \`/++++/+++++++:              Shell:`}
        <span className="text-white"> zsh 5.9</span>
        {`
           \`/++++++++++++++:             Resolution:`}
        <span className="text-white"> 1920x1080</span>
        {`
          \`/+++ooooooooooooo/\`           DE:`}
        <span className="text-white"> Hyprland</span>
        {`
         ./ooosssso++osssssso+\`          Theme:`}
        <span className="text-white"> Catppuccin-Mocha [GTK2], Nordic-Blue [GTK3]</span>
        {`
        .oossssso-\`\`\`\`/ossssss+\`         Icons:`}
        <span className="text-white"> Tela-circle-dracula [GTK2], Nordzy [GTK3]</span>
        {`
       -osssssso.      :ssssssso.        Terminal:`}
        <span className="text-white"> kitty</span>
        {`
      :osssssss/        osssso+++.       CPU:`}
        <span className="text-white"> AMD Ryzen 5 3600X (12) @ 3.800GHz</span>
        {`
     /ossssssss/        +ssssooo/-       GPU:`}
        <span className="text-white"> NVIDIA GeForce GTX 1060 6GB</span>
        {`
   \`/ossssso+/:-        -:/+osssso+-     Memory:`}
        <span className="text-white"> 4213MiB / 15942MiB</span>
        {`
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/
        `}
      </pre>
    </div>
  );
};

export default NeofetchOutput;
