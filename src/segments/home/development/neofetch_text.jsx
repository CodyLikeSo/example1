import React from 'react';
import ScrambleText from './scramble';

const NeofetchOutput = () => {
  return (
    <div className="bg-transparent text-green-600 leading-[125%] 2xl:text-[80%]  xl:text-[92%]  lg:text-[72%] md:text-[58%] sm:text-[40%] text-[4px]  font-mono">
      <div className='hidden sm:block'>
      <div>
        <ScrambleText targetText="                   -`                    " />
        <span className="text-white"><ScrambleText targetText="cody@archlinux" /></span>
      </div>
      <div><ScrambleText targetText="                  .o+`                   ----------------" /></div>
      <div><ScrambleText targetText="                 `ooo/                   OS: Arch Linux x86_64" /></div>
      <div><ScrambleText targetText="                `+oooo:                  Host: MS-7C02 1.0" /></div>
      <div><ScrambleText targetText="               `+oooooo:                 Kernel: 6.1.0-arch1-1" /></div>
      <div><ScrambleText targetText="               -+oooooo+:                Uptime: 1 hour, 54 mins" /></div>
      <div><ScrambleText targetText="             `/:-:++oooo+:               Packages: 775 (pacman)" /></div>
      <div><ScrambleText targetText="            `/++++/+++++++:              Shell: zsh 5.9" /></div>
      <div><ScrambleText targetText="           `/++++++++++++++:             Resolution: 1920x1080" /></div>
      <div><ScrambleText targetText="          `/+++ooooooooooooo/`           DE: Hyprland" /></div>
      <div><ScrambleText targetText="         ./ooosssso++osssssso+`          Theme: Catppuccin-Mocha [GTK2], Nordic-Blue [GTK3]" /></div>
      <div><ScrambleText targetText="        .oossssso-````/ossssss+`         Icons: Tela-circle-dracula [GTK2], Nordzy [GTK3]" /></div>
      <div><ScrambleText targetText="       -osssssso.      :ssssssso.        Terminal: kitty" /></div>
      <div><ScrambleText targetText="      :osssssss/        osssso+++.       CPU: AMD Ryzen 5 3600X (12) @ 3.800GHz" /></div>
      <div><ScrambleText targetText="     /ossssssss/        +ssssooo/-       GPU: NVIDIA GeForce GTX 1060 6GB" /></div>
      <div><ScrambleText targetText="   `/ossssso+/:-        -:/+osssso+-     Memory: 4213MiB / 15942MiB" /></div>
      <div><ScrambleText targetText="  `+sso+:-`                 `.-/+oso:" /></div>
      <div><ScrambleText targetText=" `++:.                           `-/+/" /></div>
      <div><ScrambleText targetText=" .`                                 `/" /></div>
      <div><ScrambleText targetText="                                    "/></div>
      </div>
      <h1 className='text-xl block md:hidden'>Type "main" to exit or "list" to see command set</h1>
    </div>
  );
};

export default NeofetchOutput;
