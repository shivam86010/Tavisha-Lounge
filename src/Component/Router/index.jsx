import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Loader = lazy(() => import('../Common/Loader'))
const Layout = lazy(() => import('../Layout/Main'));
const HomePage = lazy(() => import('../../Page/HomePage/index'));
const MenuPage = lazy(() => import('../../Page/MenuPage/MenuMainPage'));
const Gallery = lazy(() => import('../../Page/Gallery/GalleryPage'));
const Contacts = lazy(() => import('../../Page/Contacts/Main'));
const ReservationPage = lazy(() => import('../../Page/Reservation/Main'));
const Login = lazy(() => import('../../Page/Login/Login'));
const Signup = lazy(() => import('../../Page/Login/Signup'));
const ReservationTable = lazy(() => import('../../Page/Reservations'));
const BlogPage = lazy(() => import('../../Page/BlogPage'));
const BlogPost = lazy(() => import('../../Page/BlogPost'));
const Reservations = lazy(() => import('../../Page/ReservationsHeader'));
const RoyalDishDetail = lazy(() => import('../../Page/MenuPage/Components/RoyalDishDetail'));
const VenueDetailPage = lazy(() => import('../../Page/VenueDetailPage'));
const AboutUsPage = lazy(() => import('../../Page/about-us'));
const PrivateViewingPage = lazy(() => import('../PrivateViewingPage'));
const CelebrationPlanningPage = lazy(() => import('../CelebrationPlanningPage'));
const PrivateDiningPage = lazy(() => import('../PrivateDiningPage'));
const WineTastingPage = lazy(() => import('../WineTastingPage'));
const DishDetails = lazy(() => import('../../Component/DishDetails'));
const VirtualSpace = lazy(() => import('../../Page/VirtualSpace'))

function Index() {
  return (
    <div>
      {/* Suspense Wrapper */}
      <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '50px' }}><Loader/></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="/private-viewing" element={<PrivateViewingPage />} />
            <Route path="/celebration-planning" element={<CelebrationPlanningPage />} />
            <Route path="/private-dining" element={<PrivateDiningPage />} />
            <Route path="/wine-tasting" element={<WineTastingPage />} />

                    <Route path="/virtual-space" element={<VirtualSpace />} />


            <Route path="/venue/:venueId" element={<VenueDetailPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/dish/:dishName" element={<DishDetails />} />

            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:dishId" element={<RoyalDishDetail />} />

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/reservations" element={<Reservations />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            <Route path="/reservation-table" element={<ReservationTable />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default Index;
