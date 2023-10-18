import { AuthWidget } from "../widgets/auth";


const AuthPage = () => {
  return (
    <div style={{ width: '100%', display: 'grid', justifyContent: 'center', alignContent: 'center', height: '100vh' }}>
      <AuthWidget />
    </div>
  );
};

export default AuthPage;
