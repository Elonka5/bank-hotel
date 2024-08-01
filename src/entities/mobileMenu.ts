export type MobileMenuProps = {
  menuOpen: boolean;
  // onClick: React.MouseEventHandler<HTMLAnchorElement>;
  onClick?: () => void;
  isActive: (section: string) => boolean;
  // activeSection: string;
};
