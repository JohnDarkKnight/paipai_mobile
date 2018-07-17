import Loadable from 'react-loadable';
import DelayLoading from '../components/DelayLoading';


const AsyncHome = Loadable({loader: () => import('../pages/home'), loading: DelayLoading});
const AsyncAuth = Loadable({loader: () => import('../pages/auth'), loading: DelayLoading});

const AsyncError = Loadable({loader: () => import('../components/Error'), loading: DelayLoading});
const AsyncLoading = Loadable({loader: () => import('../components/Loading'), loading: DelayLoading});
const AsyncNotFound = Loadable({loader: () => import('../components/NotFound'), loading: DelayLoading});
const AsyncErrorBoundary = Loadable({loader: () => import('../components/ErrorBoundary'), loading: DelayLoading});


const mainRoute = [
    {
        path: '/',
        component: AsyncHome,
        exact: true,
    },
    {
        path: '/auth',
        component: AsyncAuth,
        exact: true,
    },
    {
        component: AsyncNotFound,
    }
];

export {
    mainRoute,
    AsyncError,
    AsyncLoading,
    AsyncErrorBoundary,
}