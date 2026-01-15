import { Link } from 'react-router-dom';

import { DarkmodeSwitch } from '@/components/DarkModeSwitcher';
import LocaleSelector from '@/components/LocaleSelector/index.jsx';
// import Logo from '@/components/Logo/index.jsx';
import PreviewSearch from '@/widgets/PreviewSearch/index.jsx';

const Header = () => {
  const src = 'https://dam.chartwell.com/m/57a5a0b97a53083a/original/CHARTWELL_Logo.png';
  return (
    <div className="header-outer">
      <div className="header-inner">
        <div className="flex items-center justify-between">
          <Link to="/" tabIndex={1}>
            <img width={150} height={10} src={src} alt="Chartwell Logo" />
            {/* <Logo /> */}
          </Link>
          <PreviewSearch rfkId="rfkid_6" defaultItemsPerPage={6} />
          <DarkmodeSwitch />
          <LocaleSelector />
        </div>
      </div>
    </div>
  );
};

export default Header;
