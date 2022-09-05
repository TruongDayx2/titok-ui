// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

// Layout
import { HeaderUpload } from '../components/Layout';

//route không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderUpload },
    { path: '/search', component: Search, layout: null },
];

// cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
