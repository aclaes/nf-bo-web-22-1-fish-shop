import StyledHeader from './ui/StyledHeader';
import StyledNavigation from './ui/StyledNavigation';

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavigation>
        <a>Startseite</a>
        <a>Produkte</a>
        <a>Kategorien</a>
      </StyledNavigation>
    </StyledHeader>
  );
}
