import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
