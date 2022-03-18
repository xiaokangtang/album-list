import { AlbumProvider } from './providers/AlbumProvider';
import { PaginateProvider } from './providers/PaginateProvider';
import Root from './Root';

function App() {
  return (
    <AlbumProvider>
      <PaginateProvider>
        <Root />
      </PaginateProvider>
    </AlbumProvider>
  );
}

export default App;
