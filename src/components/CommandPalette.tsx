import React from "react";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Copy,
  Download,
  Github,
  Home,
  Linkedin,
  SunMoon,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { SECTIONS, SITE, copyEmail, scrollToSection } from "@/lib/site";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = SITE.resume;
  link.download = "";
  link.click();
};

const CommandPalette = ({ open, onOpenChange }: CommandPaletteProps) => {
  const { resolvedTheme, setTheme } = useTheme();

  const run = (action: () => void) => () => {
    onOpenChange(false);
    action();
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Command palette"
      description="Jump to a section, open a link or run an action"
    >
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          <CommandItem onSelect={run(() => scrollToSection("home"))}>
            <Home className="mr-2" aria-hidden="true" />
            Home
          </CommandItem>
          {SECTIONS.map((section) => (
            <CommandItem
              key={section.id}
              value={`Go to ${section.label}`}
              onSelect={run(() => scrollToSection(section.id))}
            >
              <ArrowRight className="mr-2" aria-hidden="true" />
              {section.label}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          <CommandItem
            onSelect={run(() => window.open(SITE.github, "_blank", "noopener"))}
          >
            <Github className="mr-2" aria-hidden="true" />
            Open GitHub
          </CommandItem>
          <CommandItem
            onSelect={run(() =>
              window.open(SITE.linkedin, "_blank", "noopener"),
            )}
          >
            <Linkedin className="mr-2" aria-hidden="true" />
            Open LinkedIn
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem onSelect={run(copyEmail)}>
            <Copy className="mr-2" aria-hidden="true" />
            Copy email
          </CommandItem>
          <CommandItem onSelect={run(downloadResume)}>
            <Download className="mr-2" aria-hidden="true" />
            Download resume
          </CommandItem>
          <CommandItem
            onSelect={run(() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark"),
            )}
          >
            <SunMoon className="mr-2" aria-hidden="true" />
            Toggle theme
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandPalette;
