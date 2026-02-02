'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartPage() {
    const { cart, removeFromCart, cartTotal, clearCart } = useCart();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Cart is already grouped by the Context, so we use it directly
    // and ensure we handle potential missing quantity fields
    const displayItems = cart.map(item => ({
        ...item,
        quantity: item.quantity || 1
    }));

    if (!mounted) return null;

    const styles = {
        pageContainer: {
            padding: '8rem 1rem 4rem', // Added top padding to account for fixed header
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '60vh',
        },
        title: {
            fontSize: 'var(--text-4xl)',
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-heading)',
            marginBottom: '2rem',
            textAlign: 'center' as const,
        },
        emptyCart: {
            textAlign: 'center' as const,
            padding: '4rem 2rem',
            backgroundColor: 'var(--color-light)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '2rem',
            alignItems: 'start',
        },
        itemsList: {
            backgroundColor: 'var(--color-light)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden',
        },
        item: {
            display: 'flex',
            padding: '1.5rem',
            borderBottom: '1px solid var(--color-gray-200)',
            gap: '1.5rem',
            alignItems: 'center',
        },
        itemImage: {
            position: 'relative' as const,
            width: '100px',
            height: '100px',
            backgroundColor: '#f9fafb',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            flexShrink: 0,
        },
        itemInfo: {
            flex: 1,
        },
        summary: {
            backgroundColor: 'var(--color-light)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            position: 'sticky' as const,
            top: '100px',
        },
        summaryRow: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            fontSize: 'var(--text-base)',
            color: 'var(--color-gray-700)',
        },
        totalRow: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '2px solid var(--color-gray-200)',
            fontWeight: 800,
            fontSize: 'var(--text-xl)',
            color: 'var(--color-dark)',
        },
        btnPrimary: {
            display: 'block',
            width: '100%',
            padding: '1rem',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            textAlign: 'center' as const,
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            marginTop: '2rem',
            transition: 'background-color 0.2s',
        },
        btnOutline: {
            padding: '0.5rem 1rem',
            border: '1px solid var(--color-gray-300)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-gray-700)',
            fontSize: 'var(--text-sm)',
            cursor: 'pointer',
            backgroundColor: 'transparent',
        },
        removeBtn: {
            color: '#ef4444',
            fontSize: '0.875rem',
            textDecoration: 'underline',
            cursor: 'pointer',
            marginTop: '0.5rem',
            display: 'block',
        }
    };

    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.title}>O Seu Carrinho</h1>

            {cart.length === 0 ? (
                <div style={styles.emptyCart}>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', marginBottom: '2rem' }}>
                        O seu carrinho está vazio.
                    </p>
                    <Link href="/loja" style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 600
                    }}>
                        Descobrir Vinhos
                    </Link>
                </div>
            ) : (
                <div className="cart-grid" style={styles.grid}>
                    {/* Items List */}
                    <div style={styles.itemsList}>
                        {displayItems.map((item) => (
                            <div key={item.id} style={styles.item}>
                                <div style={styles.itemImage}>
                                    <Image
                                        src={item.image || '/images/products/douro-2018.png'}
                                        alt={item.name}
                                        fill
                                        style={{ objectFit: 'contain', padding: '0.5rem' }}
                                    />
                                </div>
                                <div style={styles.itemInfo}>
                                    <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.name}</h3>
                                    <p style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>{item.type} | {item.year}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        style={styles.removeBtn}
                                    >
                                        Remover
                                    </button>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>€{item.price}</div>
                                    <div style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem' }}>
                                        qtd: {item.quantity}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div style={styles.summary}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-dark)' }}>Resumo do Pedido</h2>

                        <div style={styles.summaryRow}>
                            <span>Subtotal ({cart.length} itens)</span>
                            <span>€{cartTotal.toFixed(2)}</span>
                        </div>
                        <div style={styles.summaryRow}>
                            <span>Portes de Envio</span>
                            <span style={{ color: '#16a34a' }}>Grátis</span>
                        </div>

                        <div style={styles.totalRow}>
                            <span>Total</span>
                            <span>€{cartTotal.toFixed(2)}</span>
                        </div>

                        <button style={styles.btnPrimary} onClick={() => alert('Checkout ainda não implementado!')}>
                            Finalizar Compra
                        </button>

                        <Link
                            href="/loja"
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '1rem',
                                border: '1px solid var(--color-gray-300)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--color-gray-700)',
                                textAlign: 'center',
                                fontWeight: 600,
                                marginTop: '1rem',
                                textDecoration: 'none'
                            }}
                        >
                            Continuar a Comprar
                        </Link>

                        <button
                            onClick={clearCart}
                            style={{ ...styles.btnOutline, width: '100%', marginTop: '1rem', border: 'none', textDecoration: 'underline' }}
                        >
                            Esvaziar Carrinho
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
