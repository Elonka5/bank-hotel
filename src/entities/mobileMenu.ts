export type MobileMenuProps = {
  menuOpen: boolean;
  onClick?: () => void;
  isActive: (section: string) => boolean;
};
