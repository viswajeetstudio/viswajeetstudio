import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '40px auto', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '36px', height: '36px', background: '#F05A28', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontWeight: 'bold', fontSize: '20px' }}>!</div>
            <h2 style={{ margin: 0, fontSize: '20px', color: '#1A1A1A' }}>Godrej Interio Store — Application Recovery</h2>
          </div>
          <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
            An unexpected error occurred during rendering. You can reload the page or click Reset below:
          </p>
          <div style={{ background: '#f8f8f8', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '12px', color: '#d32f2f', margin: '16px 0', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </div>
          <button
            onClick={() => window.location.reload()}
            style={{ background: '#00A8E8', color: '#fff', border: 'none', padding: '10px 20px', fontWeight: 'bold', borderRadius: '2px', cursor: 'pointer', fontSize: '13px', textTransform: 'uppercase' }}
          >
            Reload Website
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
