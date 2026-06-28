'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {faqs.map((faq, i) => (
        <div 
          key={i} 
          style={{ 
            borderRadius: '12px', 
            overflow: 'hidden', 
            border: '1px solid rgba(40,178,161,0.2)', 
            backgroundColor: '#ffffff',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease'
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{ 
              width: '100%', 
              textAlign: 'left', 
              padding: '16px 24px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              backgroundColor: openIndex === i ? '#209687' : '#28B2A1',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            <span 
              style={{ 
                fontWeight: '600', 
                fontSize: '1.125rem', 
                color: '#ffffff', 
                paddingRight: '16px',
                fontFamily: 'var(--font-display)' 
              }}
            >
              {faq.q}
            </span>
            <div 
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transition: 'transform 0.3s ease',
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            >
              {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>
          <div 
            style={{
              padding: '0 24px',
              overflow: 'hidden',
              transition: 'all 0.3s ease-in-out',
              backgroundColor: '#ffffff',
              maxHeight: openIndex === i ? '1000px' : '0',
              opacity: openIndex === i ? 1 : 0,
            }}
          >
            <div style={{ padding: '24px 0', fontSize: '1rem', lineHeight: '1.625', color: '#3A3A3C' }}>
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
