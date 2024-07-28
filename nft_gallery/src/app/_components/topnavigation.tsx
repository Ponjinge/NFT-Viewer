import { ModeToggle } from "./theme-toggle";

export function TopNavigation() {
    return (
      <header className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">NFT Gallery</h1>
        <nav className="flex w-full items-center justify-between border-b p-4">
          <ul className="flex gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            
              
            
          </ul>
          <ModeToggle/>
        </nav>
      </header>
    );
  }