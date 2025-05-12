import Image from "next/image";

export default function Home() {

  return(
        <main>
        <section class="hero-slider">
            <div class="slider-container">
                <div class="slides">
                    <div class="slide active">
                        <img src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&h=1080" alt="Lüks Araba 1">
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&h=1080" alt="Lüks Araba 2">
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&w=1920&h=1080" alt="Lüks Araba 3">
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&w=1920&h=1080" alt="Lüks Araba 4">
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1920&h=1080" alt="Lüks Araba 5">
                    </div>
                </div>
                
                <div class="slider-dots">
                    <span class="dot active" data-index="0"></span>
                    <span class="dot" data-index="1"></span>
                    <span class="dot" data-index="2"></span>
                    <span class="dot" data-index="3"></span>
                    <span class="dot" data-index="4"></span>
                </div>
            </div>
        </section>

        <div class="welcome-section">
            <h1>Araba Takas Platformuna Hoş Geldiniz</h1>
            <p>Güvenilir ve hızlı araç takası için doğru adres</p>
            
        </div>

        
        <div class="car-slider">
            <div class="car-slider-container">
               
            </div>
        </div>

        <div class="features-section">
            <div class="feature">
                <i class="fas fa-car"></i>
                <h3>Geniş Araç Ağı</h3>
                <p>Binlerce araç seçeneği</p>
            </div>
            <div class="feature">
                <i class="fas fa-handshake"></i>
                <h3>Güvenli Takas</h3>
                <p>Güvenli ve şeffaf takas işlemleri</p>
            </div>
            <div class="feature">
                <i class="fas fa-building"></i>
                <h3>Emlak ve Arsa</h3>
                <p>Geniş emlak ve arsa portföyü</p>
            </div>
        </div>
    </main>
    )

}
