
import DefaultTheme from 'vitepress/theme'
import './custom.css' // Arquivo onde você colocará seus estilos personalizados

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Aqui você pode registrar componentes globais, plugins etc.
  }
}
