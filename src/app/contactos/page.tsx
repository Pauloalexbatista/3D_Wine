'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './page.css';

export default function ContactosPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Connect to API
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Header />

            <main className="contactos-page">
                {/* Hero Section */}
                <section className="contactos-hero">
                    <div className="container">
                        <h1 className="contactos-title">Entre em Contacto</h1>
                        <div className="divider-gold"></div>
                        <p className="contactos-subtitle">
                            Estamos aqui para ajudá-lo a encontrar o vinho perfeito
                        </p>
                    </div>
                </section>

                {/* Contact Grid */}
                <section className="contact-section">
                    <div className="container">
                        <div className="contact-grid">
                            {/* Contact Form */}
                            <div className="contact-form-wrapper">
                                <h2 className="form-title">Envie-nos uma Mensagem</h2>
                                <p className="form-description">
                                    Preencha o formulário abaixo e entraremos em contacto consigo brevemente.
                                </p>

                                {submitted && (
                                    <div className="success-message">
                                        <span className="success-icon">✓</span>
                                        Mensagem enviada com sucesso! Entraremos em contacto em breve.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Nome *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone" className="form-label">Telefone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Mensagem *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="input textarea"
                                            rows={6}
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-submit">
                                        Enviar Mensagem
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className="contact-info-wrapper">
                                <h2 className="info-title">Informações de Contacto</h2>

                                <div className="info-cards">
                                    <div className="info-card">
                                        <div className="info-icon">📍</div>
                                        <h3 className="info-card-title">Localização</h3>
                                        <p className="info-card-text">
                                            Rua do Vinho, 123<br />
                                            1200-000 Lisboa<br />
                                            Portugal
                                        </p>
                                    </div>

                                    <div className="info-card">
                                        <div className="info-icon">📞</div>
                                        <h3 className="info-card-title">Telefone</h3>
                                        <p className="info-card-text">
                                            <a href="tel:+351912345678">+351 912 345 678</a>
                                        </p>
                                    </div>

                                    <div className="info-card">
                                        <div className="info-icon">📧</div>
                                        <h3 className="info-card-title">Email</h3>
                                        <p className="info-card-text">
                                            <a href="mailto:info@3gwine.pt">info@3gwine.pt</a>
                                        </p>
                                    </div>

                                    <div className="info-card">
                                        <div className="info-icon">🕐</div>
                                        <h3 className="info-card-title">Horário</h3>
                                        <p className="info-card-text">
                                            Segunda a Sexta: 10h - 19h<br />
                                            Sábado: 10h - 14h<br />
                                            Domingo: Encerrado
                                        </p>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="social-section">
                                    <h3 className="social-title">Siga-nos</h3>
                                    <div className="social-links-contact">
                                        <a href="https://facebook.com/3gwine" target="_blank" rel="noopener noreferrer" className="social-link-contact">
                                            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                        </a>
                                        <a href="https://instagram.com/3gwine" target="_blank" rel="noopener noreferrer" className="social-link-contact">
                                            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                        </a>
                                        <a href="https://wa.me/351912345678" target="_blank" rel="noopener noreferrer" className="social-link-contact">
                                            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="map-section">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.6494929733675!2d-9.145837484691938!3d38.718551879586096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19338b0e1c8b85%3A0x2b373cbaa8ed!2sLisboa%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1638000000000!5m2!1spt-PT!2spt"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="3G Wine Location"
                        ></iframe>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
