import { ModeToggle } from "./theme-toggle";

export function TopNavigation() {
    return (
      <header className="flex justify-between items-center p-4 bg-card border shadow-sm">
        <nav className="flex w-full items-center justify-between  p-4">
          <ul className="flex gap-6">
            <li>
            <a href="/" className="text-xl font-bold p-8">NFT Gallery</a>  
            </li>
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