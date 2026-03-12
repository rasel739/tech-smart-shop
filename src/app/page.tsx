import Sidebar from '@/components/home/sidebar';
import Container from '@/components/layout/container';

export default function Home() {
  return (
    <div className='bg-[#e2e4eb]'>
      <Container>
        <Sidebar />
      </Container>
    </div>
  );
}
