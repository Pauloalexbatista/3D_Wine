'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './page.css';

// Mock product data
const allProducts = [
    {
        id: 1,
        name: 'Reserva do Douro 2018',
        type: 'Tinto',
        region: 'Douro',
        year: 2018,
        price: 45,
        description: 'Um vinho robusto com notas de frutas maduras, especiarias e carvalho. Ideal para acompanhar carnes vermelhas.',
        featured: true,
    },
    {
        id: 2,
        name: 'Quinta do Alentejo 2019',
        type: 'Branco',
        region: 'Alentejo',
        year: 2019,
        price: 38,
        description: 'Elegante e fresco, com aromas a citrinos, flores brancas e notas minerais. Perfeito para peixe e marisco.',
        featured: true,
    },
    {
        id: 3,
        name: 'Grande Reserva 2015',
        type: 'Tinto',
        region: 'Dão',
        year: 2015,
        price: 85,
        description: 'Complexo e elegante, com taninos macios e longo final. Ideal para ocasiões especiais.',
        featured: false,
    },
    {
        id: 4,
        name: 'Vinho Verde Premium',
        type: 'Branco',
        region: 'Minho',
        year: 2022,
        price: 18,
        description: 'Leve, fresco e ligeiramente efervescente. Perfeito para dias quentes de verão.',
        featured: false,
    },
    {
        id: 5,
        name: 'Rosé de Verão',
        type: 'Rosé',
        region: 'Lisboa',
        year: 2022,
        price: 25,
        description: 'Frutado e refrescante, com notas de morango e framboesa. Ideal para aperitivos.',
        featured: false,
    },
    {
        id: 6,
        name: 'Espumante Bruto',
        type: 'Espumante',
        region: 'Bairrada',
        year: 2020,
        price: 55,
        description: 'Espumante elegante com bolhas finas. Perfeito para celebrações e brunch.',
        featured: false,
    },
];

export default function LojaPage() {
    const [selectedType, setSelectedType] = useState<string>('Todos');
    const [priceRange, setPriceRange] = useState<string>('Todos');
    const [sortBy, setSortBy] = useState<string>('featured');

    const types = ['Todos', 'Tinto', 'Branco', 'Rosé', 'Espumante'];
    const priceRanges = ['Todos', '0-30€', '30-50€', '50-100€', '100+€'];

    // Filter products
    let filteredProducts = [...allProducts];

    if (selectedType !== 'Todos') {
        filteredProducts = filteredProducts.filter(p => p.type === selectedType);
    }

    if (priceRange !== 'Todos') {
        filteredProducts = filteredProducts.filter(p => {
            if (priceRange === '0-30€') return p.price <= 30;
            if (priceRange === '30-50€') return p.price > 30 && p.price <= 50;
            if (priceRange === '50-100€') return p.price > 50 && p.price <= 100;
            if (priceRange === '100+€') return p.price > 100;
            return true;
        });
    }

    // Sort products
    if (sortBy === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <>
            <Header />

            <main className="loja-page">
                {/* Page Header */}
                <section className="loja-hero">
                    <div className="container">
                        <h1 className="loja-title">A Nossa Seleção</h1>
                        <div className="divider-gold"></div>
                        <p className="loja-subtitle">
                            Descubra os melhores vinhos selecionados com paixão e conhecimento
                        </p>
                    </div>
                </section>

                {/* Filters Section */}
                <section className="filters-section">
                    <div className="container">
                        <div className="filters-bar">
                            {/* Type Filter */}
                            <div className="filter-group">
                                <label className="filter-label">Tipo</label>
                                <div className="filter-buttons">
                                    {types.map(type => (
                                        <button
                                            key={type}
                                            className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                                            onClick={() => setSelectedType(type)}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="filter-group">
                                <label className="filter-label">Preço</label>
                                <select
                                    className="filter-select"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                >
                                    {priceRanges.map(range => (
                                        <option key={range} value={range}>{range}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort */}
                            <div className="filter-group">
                                <label className="filter-label">Ordenar por</label>
                                <select
                                    className="filter-select"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="featured">Destaques</option>
                                    <option value="price-asc">Preço: Menor - Maior</option>
                                    <option value="price-desc">Preço: Maior - Menor</option>
                                    <option value="name">Nome A-Z</option>
                                </select>
                            </div>
                        </div>

                        <div className="results-count">
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="products-section">
                    <div className="container">
                        <div className="products-grid">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="product-card">
                                    <div className="product-image-wrapper">
                                        {product.featured && (
                                            <div className="product-badge">Destaque</div>
                                        )}
                                        <div className="product-image-placeholder">
                                            🍷
                                        </div>
                                    </div>

                                    <div className="product-content">
                                        <div className="product-header">
                                            <h3 className="product-name">{product.name}</h3>
                                            <span className="product-type">{product.type}</span>
                                        </div>

                                        <div className="product-meta">
                                            <span className="product-region">📍 {product.region}</span>
                                            <span className="product-year">🗓️ {product.year}</span>
                                        </div>

                                        <p className="product-description">{product.description}</p>

                                        <div className="product-footer">
                                            <span className="product-price">€{product.price.toFixed(2)}</span>
                                            <button className="btn-add-cart">
                                                <svg className="cart-icon-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                                Adicionar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="no-results">
                                <div className="no-results-icon">🔍</div>
                                <h3>Nenhum produto encontrado</h3>
                                <p>Tente ajustar os seus filtros</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
