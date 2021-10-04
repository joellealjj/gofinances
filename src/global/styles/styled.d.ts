//sobrescrever um componente, para não ficar sublinhado vermelho eu buscar o theme. e aparecer oq tem dentro

import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType {}
};