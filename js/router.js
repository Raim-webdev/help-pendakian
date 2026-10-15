/**
 * Hash-based router for Help Pendaki
 * Simple view registry with no external dependencies
 */

class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
    this.container = null;
    
    // Bind hash change handler
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  /**
   * Set the container element where views will be rendered
   * @param {HTMLElement} element
   */
  setContainer(element) {
    this.container = element;
  }

  /**
   * Register a route handler
   * @param {string} path - Route pattern (e.g., '/', '/mountain/:id')
   * @param {Function} handler - Async function that receives params and returns HTML string
   */
  on(path, handler) {
    this.routes.set(path, handler);
  }

  /**
   * Navigate to a route
   * @param {string} path
   */
  navigate(path) {
    window.location.hash = path;
  }

  /**
   * Get current route info
   * @returns {{path: string, params: Object}}
   */
  getCurrentRoute() {
    const hash = window.location.hash.slice(1) || '/';
    return this.parseRoute(hash);
  }

  /**
   * Parse a route string into path and params
   * @param {string} hash
   * @returns {{path: string, params: Object}}
   */
  parseRoute(hash) {
    const parts = hash.split('/').filter(Boolean);
    
    if (parts.length === 0) {
      return { path: '/', params: {} };
    }

    // Check for dynamic routes like /mountain/:id
    for (const [routePath] of this.routes) {
      if (routePath.includes(':')) {
        const routeParts = routePath.split('/').filter(Boolean);
        if (routeParts.length === parts.length) {
          const params = {};
          let match = true;
          
          for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(':')) {
              params[routeParts[i].slice(1)] = parts[i];
            } else if (routeParts[i] !== parts[i]) {
              match = false;
              break;
            }
          }
          
          if (match) {
            return { path: routePath, params };
          }
        }
      }
    }

    return { path: hash, params: {} };
  }

  /**
   * Handle current route
   */
  async handleRoute() {
    if (!this.container) return;

    const { path, params } = this.getCurrentRoute();
    const handler = this.routes.get(path);

    if (handler) {
      try {
        this.container.innerHTML = '<div class="loading">Loading...</div>';
        const html = await handler(params);
        this.container.innerHTML = html;
        this.currentRoute = path;
        
        // Re-initialize any view-specific scripts
        this.initViewScripts();
      } catch (error) {
        console.error('Route error:', error);
        this.container.innerHTML = `
          <div class="error">
            <h2>Error loading page</h2>
            <p>${error.message}</p>
            <a href="#/" class="btn-primary">Go Home</a>
          </div>
        `;
      }
    } else {
      // 404 - Route not found
      this.container.innerHTML = `
        <div class="error">
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist.</p>
          <a href="#/" class="btn-primary">Go Home</a>
        </div>
      `;
    }
  }

  /**
   * Initialize view-specific scripts after rendering
   */
  initViewScripts() {
    // Dispatch event for views to hook into
    window.dispatchEvent(new CustomEvent('view-loaded', {
      detail: { route: this.currentRoute }
    }));
  }
}

// Create singleton instance
export const router = new Router();
