import { SpinProvider } from './src/context';
import Routes from './src/routes';

export default function App() {
  return (
    <SpinProvider>
      <Routes />
    </SpinProvider>

  );
}
