import React, { useState } from 'react'


const Home = () => {
  // 1. 4000 Images ka dummy data banaya (Duplicate karke)
  const originalImages = [
    { src: '/images/automotive.webp', title: 'Automotive' },
    { src: '/images/building-automation.webp', title: 'Building Automation' },
    { src: '/images/cctv-surveillance.webp', title: 'CCTV Surveillance' },
    { src: '/images/client-project.webp', title: 'Client Project' },
    { src: '/images/quality-management.webp', title: 'Quality Management' },
    { src: '/images/industrial-automation.webp', title: 'Industrial Automation' },
    { src: '/images/testing-lab.webp', title: 'Testing Lab' },
    { src: '/images/power-utilities.webp', title: 'Power Utilities' },
    { src: '/images/panel-workshop.webp', title: 'Panel Workshop' },
    { src: '/images/solar-epc.webp', title: 'Solar EPC' },
  ];

  // Ye array 4000 items ka ban jayega
  const allImages = Array.from({ length: 4000 }).map((_, i) => ({
    ...originalImages[i % 10], // 10 images ko baar baar repeat karega
    id: i, // Unique ID dena zaroori hai
  }));

  // 2. STATE: Kitni images dikhani hain (Shuru mein sirf 20)
  const [visibleCount, setVisibleCount] = useState(20);

  // 3. Button dabane par count badhane ka function
  const loadMore = () => {
    setVisibleCount((prevValue) => prevValue + 20); // Har click pe 20 aur dikhao
  };

  return (
    <main className='w-full'>
      
      {/* Hero Section */}
      <section className='relative w-full h-125'>
        <img className='w-full h-full object-cover' src="/images/hero-industrial.jpg" alt="Hero" loading="eager" />
        <div className='absolute inset-0 flex justify-center items-center bg-black/40'>
            <h1 className='text-4xl text-white font-bold'>4000 Images Gallery</h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='w-full bg-black py-10 px-6'>
        
        <h1 className='text-3xl text-center text-amber-50 mb-6'>
           Total Images: {allImages.length} | Showing: {visibleCount}
        </h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          
          {/* 4. SLICE ka use: Sirf utni images map hongi jitni visibleCount mein hain */}
          {allImages.slice(0, visibleCount).map((item) => (
            
            <div key={item.id} className='bg-white p-2 rounded-md'>
              {/* Important: Image container ko fixed height do taaki browser confuse na ho */}
              <div className='h-40 w-full bg-gray-200'> 
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    loading="lazy"
                    className='w-full h-full object-cover rounded'
                  />
              </div>
              <p className='text-center mt-2 text-xs font-bold truncate'>{item.id + 1}. {item.title}</p>
            </div>

          ))}
        </div>

        {/* 5. Load More Button - Agar saari images nahi dikh rahi tabhi button dikhao */}
        {visibleCount < allImages.length && (
            <div className='flex justify-center mt-10'>
                <button 
                    onClick={loadMore}
                    className='bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full transition-all'
                >
                    Load More Images
                </button>
            </div>
        )}

      </section>

    </main>
  )
}

export default Home