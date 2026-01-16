import { Link } from 'react-router-dom';

import { DarkmodeSwitch } from '@/components/DarkModeSwitcher';
import LocaleSelector from '@/components/LocaleSelector/index.jsx';
// import Logo from '@/components/Logo/index.jsx';
import PreviewSearch from '@/widgets/PreviewSearch/index.jsx';

const Header = () => {
  const src = 'https://dam.chartwell.com/m/57a5a0b97a53083a/original/CHARTWELL_Logo.png';
  return (
    <div className="header-outer">
      <div className="flex items-center">
        <Link to="/" tabIndex={1} className="mr-6 flex items-center ml-6">
          <img width={150} height={40} src={src} alt="Chartwell Logo" />
          {/* <Logo /> */}
        </Link>
      </div>
      <div className="header-inner">
        <div className="flex items-center w-full">
          {/* Centered search box */}
          <div className="flex-1 flex justify-center">
            <PreviewSearch rfkId="rfkid_6" defaultItemsPerPage={6} />
          </div>
          {/* Controls on the right */}
          <div className="flex items-center ml-4">
            <DarkmodeSwitch />
            <LocaleSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
