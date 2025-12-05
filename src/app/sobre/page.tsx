import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import './page.css';

export default function SobrePage() {
    return (
        <>
            <Header />

            <main className="sobre-page">
                <section className="sobre-hero">
                    <div className="sobre-hero-image">
                        <Image
                            src="/images/brand/tasting-room-vineyard.jpg"
                            alt="3G Wine Tasting Room"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className="sobre-hero-overlay"></div>
                    </div>
                    <div className="container">
                        <div className="sobre-hero-content">
                            <div className="sobre-badge">A Nossa História</div>
                            <h1 className="sobre-title">3G Wine</h1>
                            <div className="divider-gold"></div>
                            <p className="sobre-tagline">Reserva Exclusiva desde o início</p>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="story-section">
                    <div className="container">
                        <div className="story-grid">
                            <div className="story-content">
                                <h2 className="section-title">Nossa Paixão pelo Vinho</h2>
                                <div className="divider-gold" style={{ margin: 'var(--spacing-md) 0' }}></div>

                                <p className="story-text">
                                    A <strong>3G Wine</strong> nasceu de uma paixão profunda pelo mundo do vinho
                                    e do desejo de partilhar as melhores garrafas com verdadeiros apreciadores.
                                    Cada vinho na nossa seleção é escolhido a dedo, representando o melhor que
                                    Portugal e o mundo têm para oferecer.
                                </p>

                                <p className="story-text">
                                    Com anos de experiência no setor vinícola, estabelecemos relações diretas
                                    com as melhores quintas e produtores, garantindo que cada garrafa que chega
                                    aos nossos clientes é autêntica, de qualidade superior e representa o verdadeiro
                                    espírito da região de onde provém.
                                </p>

                                <p className="story-text">
                                    A nossa coleção <em>"Reserva Exclusiva"</em> é o resultado de uma curadoria
                                    meticulosa, onde privilegiamos vinhos com história, caráter e potencial de
                                    envelhecimento. Porque acreditamos que cada vinho conta uma história única.
                                </p>
                            </div>

                            <div className="story-image">
                                <Image
                                    src="/images/brand/vineyard-sunset-house.jpg"
                                    alt="Vineyard at Sunset"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="values-section">
                    <div className="container">
                        <h2 className="section-title text-center">Os Nossos Valores</h2>
                        <div className="divider-gold"></div>

                        <div className="values-grid">
                            <div className="value-card">
                                <div className="value-icon">🏆</div>
                                <h3 className="value-title">Qualidade</h3>
                                <p className="value-description">
                                    Selecionamos apenas os melhores vinhos, com rigorosos padrões de qualidade
                                    e autenticidade garantida.
                                </p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">🤝</div>
                                <h3 className="value-title">Confiança</h3>
                                <p className="value-description">
                                    Relações transparentes com produtores e clientes, baseadas em honestidade
                                    e respeito mútuo.
                                </p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">🎯</div>
                                <h3 className="value-title">Exclusividade</h3>
                                <p className="value-description">
                                    Acesso a vinhos raros e edições limitadas que não encontra facilmente
                                    no mercado.
                                </p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">💡</div>
                                <h3 className="value-title">Conhecimento</h3>
                                <p className="value-description">
                                    Partilhamos a nossa expertise para ajudá-lo a escolher o vinho perfeito
                                    para cada ocasião.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cellar Section */}
                <section className="cellar-section">
                    <div className="cellar-grid">
                        <div className="cellar-content">
                            <h2 className="section-title">Nossa Adega</h2>
                            <div className="divider-gold" style={{ margin: 'var(--spacing-md) 0' }}></div>

                            <p className="cellar-text">
                                A nossa adega é um santuário dedicado à preservação e envelhecimento de vinhos
                                excecionais. Com condições controladas de temperatura e humidade, garantimos
                                que cada garrafa atinge o seu pleno potencial.
                            </p>

                            <p className="cellar-text">
                                Das caves tradicionais de Portugal aos vinhedos internacionais mais prestigiados,
                                trazemos para si uma seleção que reflete tradição, inovação e excelência.
                            </p>

                            <div className="cellar-stats">
                                <div className="stat-item">
                                    <div className="stat-number">500+</div>
                                    <div className="stat-label">Referências</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">50+</div>
                                    <div className="stat-label">Produtores</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">15+</div>
                                    <div className="stat-label">Regiões</div>
                                </div>
                            </div>
                        </div>

                        <div className="cellar-image">
                            <Image
                                src="/images/brand/cellar-2.jpg"
                                alt="Wine Cellar"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2 className="cta-title">Explore a Nossa Seleção</h2>
                            <p className="cta-text">
                                Descubra vinhos exclusivos e deixe-se surpreender pela qualidade
                                da nossa curadoria de excelência.
                            </p>
                            <a href="/loja" className="btn btn-primary">
                                Ver Todos os Vinhos
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
